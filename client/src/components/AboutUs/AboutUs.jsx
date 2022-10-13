import React from "react";
import s from "./aboutUs.module.css"

export default function AboutUs(){
    return(
        <>
            <h1>About Us</h1>
            <div className={s.father}>
                <div className={s.son}>1</div>
                <div className={s.son}>2</div>
                <div className={s.son}>3</div>
                <div className={s.son}>4</div>
            </div>
            <div className={s.fatherFlex}>
                <div className={s.sonFlex}>1</div>
                <div className={s.sonFlex}>2</div>
                <div className={s.sonFlex}>3</div>
                <div className={s.sonFlex}>4</div>
            </div>
        </>
        
    )
}