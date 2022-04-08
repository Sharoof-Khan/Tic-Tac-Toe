import React, { useState } from 'react'

export const Cell = ({ cellNo }) => {
    const [turn,setTurn] = useState('x')

    const handleClick = (cellNo) => {
        alert(cellNo)
        if (turn === 'X') {
            setTurn('O')
        } else {
            setTurn('X')
        }
    }
  return (
      
          <td onClick={()=>handleClick(cellNo)}>-</td>
    
  )
}
