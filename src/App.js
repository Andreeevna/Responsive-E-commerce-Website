import { Virtual } from 'swiper'
import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Slider from './components/slider/Slider'

function App() {
	return (
		<div className='App'>
			<Header />
			<Hero />
			<Slider />
			<Virtual />
		</div>
	)
}

export default App
