import React from 'react'
import {Link} from "react-router-dom";
function index(props) {
    return (
        <div>
        
            <div className="product_item">
            <img src={props.img} />
            <p>{props.description}</p>
            <h2>{props.title}</h2>
           </div>
        

           {/*  <img src="https://static.toiimg.com/photo/70733868/Xiaomi-Redmi-8A.jpg" />
            <p>{props.description}</p>
            <h2>{props.title}</h2>

            <img src="https://www.91-img.com/pictures/135476-v10-oneplus-7t-pro-mobile-phone-large-1.jpg?tr=q-60" />
            <p>{props.description}</p>
            <h2>{props.title}</h2>

            <img src="https://www.91-img.com/pictures/97744-v1-apple-iphone-7-mobile-phone-large-1.jpg?tr=q-60" />
            <p>{props.description}</p>
            <h2>{props.title}</h2>

            <img src="https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/16696-34-1.jpg" />
            <p>{props.description}</p>
            <h2>{props.title}</h2> */}

        </div>
    )
}

export default index
