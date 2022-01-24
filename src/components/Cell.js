import React from 'react'

const Cell = ({ num, value, onClick }) => {
	const handleClick = (num) => {
		// alert(num)
	}

	return (
		<td onClick={() => onClick(num)} className='cell'>
			{value}
		</td>
	)
}

export default Cell
