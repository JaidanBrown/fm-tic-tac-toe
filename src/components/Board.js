import React from 'react'
import Cell from './Cell'

const Board = () => {
	return (
		<div className='board'>
			<table>
				<tr>
					<td>
						<Cell />
					</td>
					<td>
						<Cell />
					</td>
					<td>
						<Cell />
					</td>
				</tr>
				<tr>
					<td>
						<Cell />
					</td>
					<td>
						<Cell />
					</td>
					<td>
						<Cell />
					</td>
				</tr>
				<tr>
					<td>
						<Cell />
					</td>
					<td>
						<Cell />
					</td>
					<td>
						<Cell />
					</td>
				</tr>
			</table>
		</div>
	)
}

export default Board
