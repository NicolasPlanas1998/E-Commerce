import React, { useEffect } from "react";
import s from './home.module.css'
import jeansWoman from '../../assets/homeJeansOne.jpg'
import jeansMen from '../../assets/homeJeansTwo.jpg'
import { Link }from 'react-scroll'
import { Category } from "./Category";

import { useDispatch } from 'react-redux'

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { getProducts } from "../../redux/actions";
AOS.init();
 // <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>


export default function Home() {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getProducts())
    },[])

    return(
        <>
        <div className={s.landingPageContainer}>
            <h2 className={s.title}>True elegance <br/> 
            is <span> simplicity</span> </h2>
            <Link activeClass="active" to="newArrivals" spy={true} smooth={true} offset={50} duration={500} >
                <div className={s.bounceArrow}><i className="fa-solid fa-angle-down"></i></div>
            </Link>
        </div>    
        <div>
            <div id="newArrivals" className={s.homePage}>
                <div className={`${s.newArrivals}`}>
                    <div className={s.sloganSection}>
                        <p> - New Arrivals - </p>
                        <h3 >A new unvirse to combine</h3>
                    </div>
                    <div className={s.modelsJean}>
                        <div  data-aos="fade-right"
                            data-aos-duration="1500">
                            <img src={jeansWoman} alt="Woman jeans" />
                            <p>For Woman</p>
                        </div>
                        <div  data-aos="fade-left"
                            data-aos-duration="1500">
                            <img src={jeansMen} alt="Men jeans"  />
                            <p>For Men</p>
                        </div>
                    </div>
                </div>
            </div>
            <Category/>
        </div>
        </>
    )   
}