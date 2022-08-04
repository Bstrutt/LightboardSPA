import React from "react";

class DisplayButton extends React.PureComponent {

    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
    }

    handler() {
        const { socket, board } = this.props
        try {
            const boardString = "light" + JSON.stringify(board)
            socket.send(boardString) //send data to the server
        } catch (error) {
            socket.log(error) // catch error
        }
    };
    render() {
        return (
            <button onClick={this.handler}> Display Boulder </button>

        );
    }
};

export default DisplayButton;