import React from "react"

class HoldButton extends React.Component {
    constructor(){
      super()
      this.state = {
        buttonProfile: 'defaultButton'
      }
    }
    clicked(e){
  
      if(this.state.buttonProfile === 'defaultButton'){
        this.setState({
          buttonProfile: 'startButton'
        });
      }
      else if(this.state.buttonProfile === 'startButton'){
        this.setState({
          buttonProfile: 'footButton'
        });
      }
      else if(this.state.buttonProfile === 'footButton'){
        this.setState({
          buttonProfile: 'handButton'
        });
      }
      else if(this.state.buttonProfile === 'handButton'){
        this.setState({
          buttonProfile: 'finishButton'
        });
      }
      else if(this.state.buttonProfile === 'finishButton'){
        this.setState({
          buttonProfile: 'defaultButton'
        });
      }
  
    }
    render(){
      return (
        <div>
            <button className= {this.state.buttonProfile} onClick={this.clicked.bind(this)}>
              But 
            </button>
  
        </div>
      )
    }
  }
  export default HoldButton