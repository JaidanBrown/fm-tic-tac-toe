import React, { useState, useEffect } from 'react'
import { ReactComponent as IconX } from '../assets/icon-x.svg'
import { ReactComponent as IconO } from '../assets/icon-o.svg'

const winConditions = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
]

const Board = () => {
	const [turn, setTurn] = useState('x')
	const [cells, setCells] = useState(new Array(9).fill(''))
	const [winner, setWinner] = useState('')

	useEffect(() => {
		checkWinner()
	}, [cells])

	const checkWinner = () => {
		winConditions.forEach((condition) => {
			if (
				cells[condition[0]] === '' ||
				cells[condition[1]] === '' ||
				cells[condition[2]] === ''
			) {
				return
			} else if (
				cells[condition[0]] === cells[condition[1]] &&
				cells[condition[1]] === cells[condition[2]]
			) {
				setWinner('Winner')
			}
		})
	}

	const handleClick = (num) => {
		const newCells = [...cells]
		if (newCells[num] !== '') {
			return
		} else {
			turn === 'x' ? setTurn('o') : setTurn('x')
			newCells[num] = turn
		}
		setCells(newCells)
	}

	const Cell = ({ num }) => {
		return (
			<div onClick={() => handleClick(num)} className='cell'>
				{cells[num] === 'x' ? <IconX /> : cells[num] === 'o' ? <IconO /> : ''}
			</div>
		)
	}

	return (
		<div className='board'>
			<div>{turn}</div>
			<div className='board-grid'>
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
			<div>{winner}</div>
			<div>{JSON.stringify(cells, null, 2)}</div>
		</div>
	)
}

export default Board
