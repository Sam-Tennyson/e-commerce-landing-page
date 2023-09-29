import React from 'react'
import Footer from '../components/atoms/Footer'
import MainBanner from '../components/atoms/MainBanner'
import NewArrivals from './components/NewArrivals'
import Features from './components/Features'

const Home = () => {
	return (
		<>
			<main id="main" className="p-3 " >

				{/* Main Banner */}
				<MainBanner />
				<NewArrivals />
				
				<Features />
				{/* <AboutUs /> */}
				<Footer />
			</main>
		</>
	)
}

export default Home