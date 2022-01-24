import './sass/main.scss'

function App() {
	return (
		<div className='App'>
			<p>
				{' '}
				Pick player 1's mark Remember: X goes first New Game (vs CPU) New Game
				(vs player) turn X (You) Ties X (CPU) Oh no, you lost You won! Player
				wins! takes the round Round tied Restart game? Quit Next round No,
				cancel Yes, restart{' '}
			</p>
			<button className='button button-primary text-dark button-gold'>
				Button 1
			</button>
		</div>
	)
}

export default App
