import React, { useState } from 'react'

const Board = () => {
	const [turn, setTurn] = useState('x')

	const handleClick = (cell) => {
		turn === 'x' ? setTurn('o') : setTurn('x')
	}

	const Cell = ({ num }) => {
		return (
			<td onClick={() => handleClick(num)} className='cell'>
				-
			</td>
		)
	}

	return (
		<div className='board'>
			<div>{turn}</div>
			<table cellSpacing={0}>
				<tbody>
					<tr>
						<Cell num={0} />

						<Cell num={1} />

						<Cell num={2} />
					</tr>
					<tr>
						<Cell num={3} />

						<Cell num={4} />

						<Cell num={5} />
					</tr>
					<tr>
						<Cell num={6} />

						<Cell num={7} />

						<Cell num={8} />
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default Board
