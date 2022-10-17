import React from "react";
import s from './home.module.css'
import jeansWoman from '../../assets/homeJeansOne.jpg'
import jeansMen from '../../assets/homeJeansTwo.jpg'

import { Link }from 'react-scroll'
 // <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>


export default function Home() {
    return(
        <>
        <div className={s.landingPageContainer}>
            <h2 className={s.title}>True elegance <br/> 
            is <span> simplicity</span> </h2>
            <Link activeClass="active" to="section" spy={true} smooth={true} offset={50} duration={500} >
                <div className={s.bounceArrow}><i className="fa-solid fa-angle-down"></i></div>
            </Link>
        </div>    
        <div>
            <div id="section" className={s.homePage}>
                <div className={s.jeansContainer}>
                    <div className={s.sloganSection}>
                        <p> - Jeans - </p>
                        <h3 >A new unvirse to combine</h3>
                    </div>
                    <div className={s.modelsJean}>
                        <div>
                            <img src={jeansWoman} alt="Woman jeans" />
                            <p>For Woman</p>
                        </div>
                        <div>
                            <img src={jeansMen} alt="Men jeans"  />
                            <p>For Men</p>
                        </div>
                    </div>
                </div>
         
            </div>
        </div>
        </>
    )   
}