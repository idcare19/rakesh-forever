import React, { useEffect, useState } from "react";
import UseList from "./UseList";

export default function LatestCollection() {
    const [arr, setArr] = useState([])
    useEffect(()=>{
        if (typeof fetch !== "function") {
            return;
        }

        fetch("/products.json")
        .then(res=>res.json())
        .then(pro => setArr(pro))
    }, [])

    return(
        <div className="product">

            <div className="title">
                <p className="title-text">LATEST <span className="title-span">COLLECTION</span></p>
                <p className="title-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
            </div>

            <div className="product-item">
                {
                    arr.slice(0, 8).map((item) => {
                        return (
                            <UseList key={item.id} data={item}/>
                        )
                    })
                }
            </div>

        </div>
    )
}