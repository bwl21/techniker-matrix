import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Square(props){
    return(
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

class Board extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(' '),
            xIsnext: "X",
            winner: null
        };
    }

    handleClick(i) {
        if (this.state.winner){
            return;
        }
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsnext;
        this.setState({squares: squares});
        this.setState({xIsnext: this.state.xIsnext == "X" ? 'O' : 'X'});
        const winner = this.calculateWinner(this.state.squares);
        if (winner){
            this.setState({winner: winner})
        }
    }

    calculateWinner(squares) {
        const linesquares = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        const lines = ["XXX", "OOO"];
        for (let i = 0; i < linesquares.length; i++) {
            const [a, b, c] = linesquares[i];
            const isLine = squares[a] + squares[b] + squares[c]

            if (lines.includes(isLine)){
                return squares[a];
            }
        }
        return null;
    }

    renderSquare(i) {
        return <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
        />;
    }

    render() {
        const status = 'Next player: ' + this.state.xIsnext;

        return (
            <div>
                <div className="status">{status}  - The winner is <strong>{this.state.winner}</strong></div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>

        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board/>
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game/>,
    document.getElementById('root')
);
