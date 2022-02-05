import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*
Tips To convert React Classes to Functions

Start at the top level.
Remove Class word and write Function instead
Remove extends and turn into parens
Cut and paste the actual fuction part. be it Render whatever

Props!
props 		...   	{number}
props.number		number

Hooks!
import { useState }
put inside the render portion of the function body

useState "should" be at the top of the render function.. they need to be unconditional

*/




/*Turn this Class in to a Function!
class Square extends React.Component {
render() {
    return (
    <button className="square">
      {}
    </button>
    );
    }
}*/

function Square({value, onClick}) {

  return (
    <button className="square"
    onClick={onClick}
    >
      {value}
    </button>
    );
}

function Board() {
  const [ squares, setSquares ] = useState(Array(9).fill(null)) //array of 9 nulls
  const [ isXNext, setXNext ] = useState(true)

  function renderSquare(i) {
    return <Square 
    value={squares[i]} 
    onClick={() => {
      const nextSquares = squares.slice()
      nextSquares[i] = isXNext ? 'x' : 'o'
      setXNext(!isXNext)
      setSquares(nextSquares)
    }}
    />;
    
  
  }

  const status = 'Next player: X';

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}
 

/*This was Class Board prior to Funtion-ifying it
class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {

    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
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
*/

//This will be the Game Board 'engine', functionify it!
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
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
  <Game />,
  document.getElementById('root')
);

/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/