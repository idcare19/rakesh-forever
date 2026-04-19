import React from "react";
import UseList from "./UseList";

export default function BestSeller() {
    let arr = [
        {
            id: 11,
            img: "/Image/image14.png",
            title: "Women Zip-Front Relaxed Fit Jacket",
            price: 68,

        },
        {
            id: 12,
            img: "/Image/image18.png",
            title: "Men Slim Fit Relaxed Denim Jacket",
            price: 72,

        },
        {
            id: 13,
            img: "/Image/image19.png",
            title: "Men Slim Fit Relaxed Denim Jacket",
            price: 84,

        },
        {
            id: 14,
            img: "/Image/image20.png",
            title: "Women Zip-Front Relaxed Fit Jacket",
            price: 78,

        },
        {
            id: 15,
            img: "/Image/image21.png",
            title: "Men Slim Fit Relaxed Denim Jacket",
            price: 86,

        },
        
        
    ]

    return(
        <div className="product">

            <div className="title">
                <p className="title-text">BEST <span className="title-span">SELLERS</span></p>
                <p className="title-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
            </div>

            <div className="product-item">
                {
                    arr.map((item) => {
                        return (
                            <UseList key={item.id} data={item}/>
                        )
                    })
                }
            </div>

        </div>
    )
}