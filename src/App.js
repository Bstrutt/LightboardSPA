import React from "react"
import './App.css';
import Board from "./Board.js";
import { calculate } from "./calculate.js";
import DisplayButton from "./DisplayButton";




class App extends React.Component { 
  constructor(props){
    super(props);

    let bord = [[0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0]
    ];

    this.state = {
      board: bord,
      ws: null
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount(){
    this.connect();
  }
  connect = () => {
    var ws = new WebSocket('wss://lightboard-socketserver.herokuapp.com/')
    let that = this; // cache the this
        var connectInterval;

        // websocket onopen event listener
        ws.onopen = () => {
            console.log("connected websocket main component");
            ws.send("User")
            this.setState({ ws: ws });

            that.timeout = 250; // reset timer to 250 on open of websocket connection 
            clearTimeout(connectInterval); // clear Interval on on open of websocket connection
        };

        // websocket onclose event listener
        ws.onclose = e => {
            console.log(
                `Socket is closed. Reconnect will be attempted in ${Math.min(
                    10000 / 1000,
                    (that.timeout + that.timeout) / 1000
                )} second.`,
                e.reason
            );

            that.timeout = that.timeout + that.timeout; //increment retry interval
            connectInterval = setTimeout(this.check, Math.min(10000, that.timeout)); //call check function after timeout
        };

        // websocket onerror event listener
        ws.onerror = err => {
            console.error(
                "Socket encountered error: ",
                err.message,
                "Closing socket"
            );

            ws.close();
        };
  }
  handleClick (x,y) {
    this.setState(calculate(this.state, x, y));
  };
  render(){
  return (
    <div className="App">
      <Board board={this.state.board} clickHandler={this.handleClick} />
      <br /> 
      <DisplayButton socket={this.state.ws} board={this.state.board}/>     
    </div>
  );
  }

}
export default App