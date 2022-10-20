import React from "react";
import s from './home.module.css'
import CategoryOne from '../../assets/categorySection.jpg'
import CategoryTWO from '../../assets/categorySectionTwo.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


export function Category (){
    return(
        <div className={s.homePage} id={s.category}>
                <div className={`${s.categoriesContainer} ${s.wave}`}>
                    <div className={s.firstImage}>
                        <h2>Category</h2>
                        <div  data-aos="fade-right"
                              data-aos-duration="2000">
                        <img className={s.imgCategory}  src={CategoryOne} />
                        </div>
                    </div>
                    <ul className={s.categoryList}>
                        <li>Hoodies<i className="fa-solid fa-angle-right"></i></li>
                        <li>T-shirts<i className="fa-solid fa-angle-right"></i></li>
                        <li>Jeans<i className="fa-solid fa-angle-right"></i></li>
                        <li>Jackets<i className="fa-solid fa-angle-right"></i></li>
                    </ul>
                    <div id={s.secondImage}  data-aos="fade-left"
                        data-aos-duration="2000">
                        <img className={s.imgCategory} src={CategoryTWO}/>
                    </div>
                </div>
            </div>
    )
}