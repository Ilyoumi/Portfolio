import React from 'react'
import './Home.css'
import Social from './Social'
import Data from './Data'
import Scroll from './ScrollDown'
const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home-container container grid">
                <div className="home-content grid">
                    <Social />
                    <div className="home-img"></div>
                    <Data />
                </div>
                
                
            </div>
            
        </section>
    )
}


export default Home