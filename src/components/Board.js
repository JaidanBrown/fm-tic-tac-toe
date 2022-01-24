import React, { useState } from 'react'
import Cell from './Cell'

const Board = () => {
	const [turn, setTurn] = useState('x')

	const handleClick = (cell) => {
		turn === 'x' ? setTurn('o') : setTurn('x')
	}

	return (
		<div className='board'>
			<table cellSpacing={0}>
				<tbody>
					<tr>
						<Cell num={0} value={turn} onClick={handleClick} />

						<Cell num={1} value={turn} onClick={handleClick} />

						<Cell num={2} value={turn} onClick={handleClick} />
					</tr>
					<tr>
						<Cell num={3} value={turn} onClick={handleClick} />

						<Cell num={4} value={turn} onClick={handleClick} />

						<Cell num={5} value={turn} onClick={handleClick} />
					</tr>
					<tr>
						<Cell num={6} value={turn} onClick={handleClick} />

						<Cell num={7} value={turn} onClick={handleClick} />

						<Cell num={8} value={turn} onClick={handleClick} />
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default Board
