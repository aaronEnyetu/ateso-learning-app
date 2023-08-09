import { useState, useEffect } from 'react'

function App() {
	const ateso = [
		{ english: 'Hello', ateso: 'Yoga' },
		{ english: 'Fine', ateso: 'Ejokuna' },
		{ english: 'Name', ateso: 'Ekiror' },
		{ english: 'Book', ateso: 'Eitabo' },
		{ english: 'Dog', ateso: 'Ekingok' },
		{ english: 'He-Goat', ateso: 'Ekoroi' },
		{ english: 'Bull', ateso: 'Emong' },
		{ english: 'Fox', ateso: 'Ekue' },
		{ english: 'Cock', ateso: 'Ekokor' },
		{ english: 'Lemon', ateso: 'Enimu' },
		{ english: 'Banana', ateso: 'Etaget' },
		{ english: 'Orange', ateso: 'Emucuuga' },
		{ english: 'Ant', ateso: 'Emukuny' },
		{ english: 'Bettle', ateso: 'Ekonyelet' },
		{ english: 'Tea', ateso: 'Ecaai' },
		{ english: 'Girl', ateso: 'Apese' },
		{ english: 'English', ateso: 'Amusugun' },
		{ english: 'Water', ateso: 'Akipi' },
		{ english: 'Milk', ateso: 'Akile' },
		{ english: 'Love', ateso: 'Amina' },
		{ english: 'Height', ateso: 'Aojau' },
		{ english: 'Width', ateso: 'Alalau' },
		{ english: 'Sweetness', ateso: 'Ajijim' },
		{ english: 'Tasteless', ateso: 'Apianis' },
		{ english: 'Anger', ateso: 'Anyunyura' },
		{ english: 'Going', ateso: 'Alosit' },
		{ english: 'Coming', ateso: 'Abunere' },
		{ english: 'Reading', ateso: 'Aisiom' },
		{ english: 'Jumping', ateso: 'Aisom' },
		{ english: 'East', ateso: 'Kide' },
		{ english: 'West', ateso: 'Too' },
		{ english: 'North', ateso: 'Nyakoi' },
		{ english: 'South', ateso: 'Agolitomei' },
		{ english: 'Left', ateso: 'Kediany' },
		{ english: 'Inside', ateso: 'Toma' },
		{ english: 'Middle', ateso: 'Kiding' },
		{ english: 'Infront', ateso: 'Ngaren' },
		{ english: 'Beside', ateso: 'Osiep' },
		{ english: 'Right', ateso: 'Teten' },
		{ english: 'One', ateso: 'Idiopet' },
		{ english: 'Two', ateso: 'Iyarei' },
		{ english: 'Three', ateso: 'Iuni' },
		{ english: 'Four', ateso: 'Ioŋon' },
		{ english: 'Five', ateso: 'Ikany' },
		{ english: 'Car', ateso: 'Emotoka' },
		{ english: 'Where', ateso: 'Aibo' }
	]

	const [input, setInput] = useState('')
	const [current, setCurrent] = useState(0)
	
	const [streak, setStreak] = useState(0)
	const [maxStreak, setMaxStreak] = useState(0)

	const [error, setError] = useState(false)

	const setRandomHiragana = () => {
		const randomIndex = Math.floor(Math.random() * ateso.length)
		setCurrent(randomIndex)
	}

	const handleChange = (e) => {
		setInput(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		
		if (input.toLowerCase() === ateso[current].english) {
			setStreak(streak + 1)
			setMaxStreak(streak + 1 > maxStreak ? streak + 1 : maxStreak)
			setError(false)

			localStorage.setItem('streak', streak + 1)
			localStorage.setItem('maxStreak', streak + 1 > maxStreak ? streak + 1 : maxStreak)
		} else {
			const h = ateso[current].ateso
			const r = ateso[current].english
			setError(`Wrong! The correct answer for ${h} is ${r}`)
			setStreak(0)
			localStorage.setItem('streak', 0)
		}

		setInput('')
		setRandomHiragana()
	}

	useEffect(() => {
		setRandomHiragana()
		setStreak(parseInt(localStorage.getItem('streak')) || 0)
		setMaxStreak(parseInt(localStorage.getItem('maxStreak')) || 0)
	}, [])

	return (
		<div className="min-h-screen bg-slate-800 text-white text-center">
			<header className="p-6 mb-8">
				<h1 className="text-2xl font-bold uppercase">Ateso Language Quiz</h1>
				<div>
					<p>{streak} / {maxStreak}</p>
				</div>
			</header>

			<div className="text-9xl font-bold mb-8">
				<p>{ateso[current].ateso}</p>
			</div>

			<div className="mb-8">
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						onChange={handleChange}
						value={input}
						className="block w-24 bg-transparent border-b-2 border-b-white mx-auto outline-none text-center text-6xl pb-2" />
				</form>
			</div>
			{error && 
				<div>
					<p>{ error }</p>
				</div>
			}
		</div>
	)
}

export default App