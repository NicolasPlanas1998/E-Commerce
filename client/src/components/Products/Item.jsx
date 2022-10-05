import React from "react";


export default function Item ({name,price,images,color,category}){

    return(
        <div>
            <h2>{name}</h2>
            <img style={{"width": "300px"}}src={images} alt={name}/>
            {/* Cuando arregle el db esto va a funcionar */}
            {/* {color?.map(el=>{
                <input type="color" value={el}></input>
            })} */}
            <p>{price}</p>

        </div>
    )
}
