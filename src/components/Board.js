import React, { useState, useEffect } from 'react'
import { ReactComponent as IconX } from '../assets/icon-x.svg'
import { ReactComponent as IconO } from '../assets/icon-o.svg'
import { ReactComponent as IconRestart } from '../assets/icon-restart.svg'
import { ReactComponent as IconLogo } from '../assets/logo.svg'

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
  const [currentHoverState, setCurrentHoverState] = useState('x')
  const [modalVisible, setModalVisible] = useState(false)

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
        setModalVisible(true)
      }
    })
  }

  const handleReset = () => {
    setWinner('')
    setTurn('x')
    setCells(new Array(9).fill(''))
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

  const handleHover = (e) => {
    if (cells[e.target.id] === '') {
      setCurrentHoverState(turn)
    } else {
      setCurrentHoverState('')
    }
  }

  const Cell = ({ num }) => {
    return (
      <div
        id={num}
        onClick={() => {
          handleClick(num)
          setCurrentHoverState('')
        }}
        onMouseEnter={(e) => handleHover(e)}
        className={`${currentHoverState} cell`}
      >
        {cells[num] === 'x' ? <IconX /> : cells[num] === 'o' ? <IconO /> : ''}
      </div>
    )
  }

  const WinCount = ({ title, score, color }) => {
    return (
      <div className={`${color} win-count`}>
        <p>{title}</p>
        <h2>{score}</h2>
      </div>
    )
  }

  const Modal = () => {
    return (
      <div class='modal'>
        <div class='modal-inner'>
          <h2>Top text here</h2>
          <h1>Winner text here</h1>
          <div>
            <button class='button button-light'>Quit</button>
            <button class='button button-gold'>Next Round</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {modalVisible ? <Modal /> : null}

      <div className='board'>
        <div className='board-grid'>
          <div className='board-logo'>
            <IconLogo />
          </div>
          <div className='board-turn-container'>
            <div className='board-turn'>
              {turn === 'x' ? (
                <IconX className='icon-small' />
              ) : (
                <IconO className='icon-small' />
              )}{' '}
              <h2 className='text-light'>TURN</h2>
            </div>
          </div>
          <div className='board-restart'>
            <button className='button button-light' onClick={handleReset}>
              <IconRestart />
            </button>
          </div>
          <Cell num={0} />
          <Cell num={1} />
          <Cell num={2} />
          <Cell num={3} />
          <Cell num={4} />
          <Cell num={5} />
          <Cell num={6} />
          <Cell num={7} />
          <Cell num={8} />
          <WinCount title='X (P1)' score='20' color='win-count-blue' />
          <WinCount title='Ties' score='20' color='win-count-light' />
          <WinCount title='O (P2)' score='20' color='win-count-gold' />
        </div>
        <div>{winner}</div>
      </div>
    </>
  )
}

export default Board
