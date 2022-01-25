import React, { useState } from 'react'
import { ReactComponent as IconX } from '../assets/icon-x.svg'
import { ReactComponent as IconO } from '../assets/icon-o.svg'

const Board = () => {
	const [turn, setTurn] = useState('x')
	const [cells, setCells] = useState(new Array(9).fill(''))

	const handleClick = (num) => {
		const newCells = [...cells]
		turn === 'x' ? setTurn('o') : setTurn('x')
		console.log(cells)
		if (newCells[num] != '') {
			return
		} else {
			setCells(newCells)
			newCells[num] = turn
		}
	}

	const Cell = ({ num }) => {
		return (
			<td onClick={() => handleClick(num)} className='cell'>
				{cells[num] === 'x' ? <IconX /> : cells[num] === 'o' ? <IconO /> : ''}
			</td>
		)
	}

	return (
		<div className='board'>
			<div>{turn}</div>
			<div class='board-grid'>
				<Cell num={0} />
				<Cell num={1} />
				<Cell num={2} />
				<Cell num={3} />
				<Cell num={4} />
				<Cell num={5} />
				<Cell num={6} />
				<Cell num={7} />
				<Cell num={8} />
			</div>
		</div>
	)
}

export default Board
