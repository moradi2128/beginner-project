import React, { useState } from 'react'
import Footer from '../components/Footer/Footer'
import HeroSection from '../components/HeroSection/HeroSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data'
import InfoSection from '../components/InfoSection/InfoSection'
import Navbar from '../components/Navbar/Navbar'
import Services from '../components/services/services'
import Sidebar from '../components/Sidebar/Sidebar'


const Home = () => {
    const [isOpen, seIsOpen] = useState(false)
    const toggleHandler = () => {
        seIsOpen(!isOpen);
        console.log(isOpen)
    }

    return (
        <>
            <Navbar toggleHandler={toggleHandler} />
            <Sidebar toggleHandler={toggleHandler} isOpen={isOpen} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services />
            <InfoSection {...homeObjThree} />
            <Footer />
        </>
    )
}

export default Home
