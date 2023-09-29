// libs
import React from 'react'

// components
import Footer from '../components/atoms/Footer'
import MainBanner from '../components/atoms/MainBanner'
import NewArrivals from './components/NewArrivals'
import Features from './components/Features'
import ToggleTheme from '../components/atoms/ToggleTheme'

// context
import { THEME_COLOR, useTheme } from '../contexts/ThemeContext'

const Home = () => {
	const { theme } = useTheme()
	return (
		<>
			<main id="main" className={`p-3 ${theme === THEME_COLOR.LIGHT ? "light-class" : "dark-class"} `} >
				{/*  */}
				<ToggleTheme />
				<MainBanner />
				<NewArrivals />
				<Features />
				<Footer />
			</main>
		</>
	)
}

export default Home