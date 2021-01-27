import React from 'react'

function index(props) {
    const products=props.location.state
    return (
        
        <div className="product_item">
            <img src={products.img} />
            <p>{products.description}</p>
            <h2>{products.title}</h2>
            <h2>Price:{products.price}</h2>
        </div>
        
        
    )
}

export default index
