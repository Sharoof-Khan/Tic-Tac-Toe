import React, { useState } from 'react'
// import { Cell } from './Cell'
import './TicTccToe.css'


export const TicTacToe = () => {
    const [turn, setTurn] = useState('X');
    const [cells, setCells] = useState(Array(9).fill(""))
    const [winnerGame,setWinnerGame] = useState()
    
    const winner = (sqr) => {
        let combos = {
            across: [[0, 1, 2],
            [3, 4, 5],
            [6, 7, 8]
            ],
            down: [
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8]
                
            ],
            diagnol: [
                [0, 4, 8],
                [2, 4, 6]
            ],
        };
        for (let combo in combos) {
            combos[combo].forEach((pat) => {
                // console.log(pat,'pat');
                if (
                    sqr[pat[0]] === "" ||
                    sqr[pat[1]] === "" ||
                    sqr[pat[2]] === "" 
                ) {
                    //  Do nothing
                } else if (sqr[pat[0]] === sqr[pat[1]] && sqr[pat[1]] === sqr[pat[2]]) {
                    // alert(`Winner is ${sqr[pat[0]]}`)
                    setWinnerGame(sqr[pat[0]])

                    
                }
                // else if (
                //      sqr[pat[0]] !== "" ||
                //     sqr[pat[1]] !== "" ||
                //     sqr[pat[2]] !== "" 
                    
                // ) {
                //     // alert(`Game Tied`)
                //     // setWinnerGame(sqr[pat[0]])
                // }
                })
        }

        
    }
    const handleClick = (cellNo) => {
        // alert(cellNo)

        if (cells[cellNo] !== "") {

            alert('Already Selected')
            return;
            
        }
        let sqr = [...cells]
        if (turn === 'X') {
            sqr[cellNo] = 'X';
            setTurn('O')
        } else {
            sqr[cellNo] = 'O';

            setTurn('X')
        }
        winner(sqr)
        setCells(sqr)
        // console.log(sqr,'sqr');
    }

    // console.log(cells,'cell');
    const handleRestart = () => {
        setWinnerGame(null);
        setCells(Array(9).fill(""))
        setTurn('X')
        
    }
    const Cell = ({ cellNo }) => {
        return <td onClick={() => handleClick(cellNo)}>{ cells[cellNo]}</td>
    }


  return (
      <div className='container'>
          <h1 className='heading'>Tic Tac Toe</h1>
        <div>
              <table>
                  Turn : {turn}
              <tbody>
                  <tr>
                          <Cell cellNo={ 0}/>
                      <Cell cellNo={ 1}/>
                      <Cell cellNo={ 2}/>
                  </tr>
                  <tr>
                      <Cell cellNo={ 3}/>
                      <Cell cellNo={ 4}/>
                      <Cell cellNo={ 5}/>
                  </tr>
                  <tr>
                      <Cell cellNo={ 6}/>
                      <Cell cellNo={ 7}/>
                      <Cell cellNo={ 8}/>
                  </tr>
                  <tr></tr>
                  <tr></tr>
              </tbody>
              </table>
              
          </div>
          {
                  winnerGame && (
                      <>
                          <h2>Congrats {winnerGame} is a Winner</h2>
                          
                          <button onClick={()=> handleRestart()}>Play Again</button>
                      </>
                  )
              }
          
      </div>
  )
}
