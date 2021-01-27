import React from 'react'
import ProductItem from "../Product_Item";
import {Link} from "react-router-dom"
import "./styles.css"
const products=[
    {
     id:1,
     img:"https://www.91-img.com/pictures/135685-v4-lenovo-a6-note-mobile-phone-large-1.jpg?tr=q-60",
     description:"Description about Lenovo",
     title:"Lenovo",
     price:40000

    },
    {
        id:2,
        img:"https://static.toiimg.com/photo/70733868/Xiaomi-Redmi-8A.jpg",
        description:"Description about readme",
        title:"Readme",
        price:50000
   
       },
       {
        id:3,
        img:"https://www.91-img.com/pictures/135476-v10-oneplus-7t-pro-mobile-phone-large-1.jpg?tr=q-60" ,
        description:"Description about 1Plus",
        title:"1 Plus",
        price:60000
   
       },
       {
        id:4,
        img:"https://www.91-img.com/pictures/97744-v1-apple-iphone-7-mobile-phone-large-1.jpg?tr=q-60",
        description:"Description about IPhone",
        title:"IPhone",
        price:100000
   
       },
       {
        id:5,
        img:"https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/16696-34-1.jpg",
        description:"Description about Nokia",
        title:"Nokia",
        price:8000
   
       },
       {
       id:6,
       img:"https://images.samsung.com/is/image/samsung/in-galaxy-f41-f415fz-6gb-sm-f415fzbdins--thumb-314816727?$320_320_PNG$",
       description:"Description about Samsung",
       title:"Samsung"       
    },
    {
        id:7,
        img:"https://dhlm2eb86cbhs.cloudfront.net/public/thumbs/products/16862/oppo-a9-2020-df_0_188.jpg",
        description:"Description about oppo",
        title:"Oppo"       
     }
]


function index() {
    const productcontainer=products.map((items)=>
    {
        return(
        <Link to={{
            pathname:"products/item",
            state:items
        }}>
            <ProductItem
                id={items.id}
                img={items.img}
                description={items.description}
                title={items.title}
            />
        </Link>
        )
    })
    return (
     
        <div className="products">
            {productcontainer}
        </div>
    )
}

export default index
