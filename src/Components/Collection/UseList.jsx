import React from "react";
import { Link } from "react-router-dom";

export default function UseList(props) {

    return (
        <Link to={`/productDetails/${props.data.id}`}><div className="card">

            <img 
                src={props.data.img} 
                alt={props.data.title} 
                className="product-img"
            />

            <p className="product-title">
                {props.data.title}
            </p>

            <p className="product-price">
                ${props.data.price}
            </p>

        </div></Link>

    )
}