import React,{ useContext } from "react";
import { useParams } from "react-router-dom";
import { CommonContext } from "../../ShoppingCart/CommonContext";



export default function ProductDetails() {

    const { addToCart } = useContext(CommonContext)

    let arr = [
        {
            id: 1,
            img: "/Image/image08.png",
            title: "Kid Tapered Slim Fit Trouser",
            price: 38,
            qty:0,


        },
        {
            id: 2,
            img: "/Image/image09.png",
            title: "Men Round Neck Pure Cotton T-shirt",
            price: 64,
            qty:0,

        },
        {
            id: 3,
            img: "/Image/image10.png",
            title: "Boy Round Neck Pure Cotton T-shirt",
            price: 60,
            qty:0,

        },
        {
            id: 4,
            img: "/Image/image11.png",
            title: "Women Zip-Front Relaxed Fit Jacket",
            price: 74,
            qty:0,

        },
        {
            id: 5,
            img: "/Image/image12.png",
            title: "Men Tapered Fit Flat-Front Trousers",
            price: 58,
            qty:0,

        },
        {
            id: 6,
            img: "/Image/image13.png",
            title: "Girls Round Neck Cotton Top",
            price: 56,
            qty:0,

        },
        {
            id: 7,
            img: "/Image/image14.png",
            title: "Women Zip-Front Relaxed Fit Jacket",
            price: 68,
            qty:0,

        },
        {
            id: 8,
            img: "/Image/image15.png",
            title: "Kid Tapered Slim Fit Trouser",
            price: 40,
            qty:0,

        },
        {
            id: 9,
            img: "/Image/image16.png",
            title: "Men Printed Plain Cotton Shirt",
            price: 52,
            qty:0,

        },
        {
            id: 10,
            img: "/Image/image17.png",
            title: "Women Zip-Front Relaxed Fit Jacket",
            price: 78,
            qty:0,

        },
        {
            id: 11,
            img: "/Image/image14.png",
            title: "Women Zip-Front Relaxed Fit Jacket",
            price: 68,
            qty:0,

        },
        {
            id: 12,
            img: "/Image/image18.png",
            title: "Men Slim Fit Relaxed Denim Jacket",
            price: 72,
            qty:0,

        },
        {
            id: 13,
            img: "/Image/image19.png",
            title: "Men Slim Fit Relaxed Denim Jacket",
            price: 84,
            qty:0,

        },
        {
            id: 14,
            img: "/Image/image20.png",
            title: "Women Zip-Front Relaxed Fit Jacket",
            price: 78,
            qty:0,

        },
        {
            id: 15,
            img: "/Image/image21.png",
            title: "Men Slim Fit Relaxed Denim Jacket",
            price: 86,
            qty:0,

        },
        {
            id: 16,
            img: "/Image/image30.png",
            title: "Men Slim Fit Relaxed Denim Jacket",
            price: 79,
            qty:0,

        },
        {
            id: 17,
            img: "/Image/image31.png",
            title: "Women Zip-Front Relaxed Fit Jacket",
            price: 82,
            qty:0,

        },
        {
            id: 18,
            img: "/Image/image32.png",
            title: "Boy Round Neck Pure Cotton T-shirt",
            price: 30,
            qty:0,

        },
        {
            id: 19,
            img: "/Image/image33.png",
            title: "Men Round Neck Pure Cotton T-shirt",
            price: 26,
            qty:0,

        },
        {
            id: 20,
            img: "/Image/image34.png",
            title: "Women Round Neck Cotton Top",
            price: 40,
            qty:0,

        },
        {
            id: 21,
            img: "/Image/image35.png",
            title: "Girls Round Neck Cotton Top",
            price: 38,
            qty:0,

        },
        {
            id: 22,
            img: "/Image/image36.png",
            title: "Women Zip-Front Relaxed Fit Jacket",
            price: 82,
            qty:0,

        },
        {
            id: 23,
            img: "/Image/image37.png",
            title: "Men Tapered Fit Flat-Front Trousers",
            price: 82,
            qty:0,

        },
        {
            id: 24,
            img: "/Image/image37.png",
            title: "Men Round Neck Pure Cotton T-shirt",
            price: 26,
            qty:0,

        },
        {
            id: 25,
            img: "/Image/image38.png",
            title: "Men Round Neck Pure Cotton T-shirt",
            price: 68,
            qty:0,

        },
        {
            id: 26,
            img: "/Image/image39.png",
            title: "Men Round Neck Pure Cotton T-shirt",
            price: 68,
            qty:0,

        },
        {
            id: 27,
            img: "/Image/image40.png",
            title: "Men Round Neck Pure Cotton T-shirt",
            price: 68,
            qty:0,

        },
        {
            id: 28,
            img: "/Image/image41.png",
            title: "Men Round Neck Pure Cotton T-shirt",
            price: 68,
            qty:0,

        },
        {
            id: 29,
            img: "/Image/image42.png",
            title: "Men Round Neck Pure Cotton T-shirt",
            price: 68,
            qty:0,

        },
        {
            id: 30,
            img: "/Image/image43.png",
            title: "Men Round Neck Pure Cotton T-shirt",
            price: 68,
            qty:0,

        },
        {
            id: 31,
            img: "/Image/image44.png",
            title: "Men Round Neck Pure Cotton T-shirt",
            price: 68,
            qty:0,

        },
        {
            id: 32,
            img: "/Image/image45.png",
            title: "Men Round Neck Pure Cotton T-shirt",
            price: 68,
            qty:0,

        },
        {
            id: 33,
            img: "/Image/image46.png",
            title: "Men Round Neck Pure Cotton T-shirt",
            price: 68,
            qty:0,

        },
        {
            id: 34,
            img: "/Image/image47.png",
            title: "Men Round Neck Pure Cotton T-shirt",
            price: 68,
            qty:0,

        },
        {
            id: 35,
            img: "/Image/image48.png",
            title: "Men Round Neck Pure Cotton T-shirt",
            price: 68,
            qty:0,

        },
        {
            id: 36,
            img: "/Image/image49.png",
            title: "Men Round Neck Pure Cotton T-shirt",
            price: 68,
            qty:0,

        },
        {
            id: 37,
            img: "/Image/image50.png",
            title: "Men Round Neck Pure Cotton T-shirt",
            price: 68,
            qty:0,

        },
        {
            id: 38,
            img: "/Image/image51.png",
            title: "Men Round Neck Pure Cotton T-shirt",
            price: 68,
            qty:0,

        },
        {
            id: 39,
            img: "/Image/image52.png",
            title: "Men Round Neck Pure Cotton T-shirt",
            price: 68,
            qty:0,

        },
        {
            id: 40,
            img: "/Image/image53.png",
            title: "Men Round Neck Pure Cotton T-shirt",
            price: 68,
            qty:0,

        },
        {
            id: 41,
            img: "/Image/image54.png",
            title: "Men Round Neck Pure Cotton T-shirt",
            price: 68,
            qty:0,

        },
        {
            id: 42,
            img: "/Image/image55.png",
            title: "Men Round Neck Pure Cotton T-shirt",
            price: 68,
            qty:0,

        },
        {
            id: 43,
            img: "/Image/image56.png",
            title: "Men Round Neck Pure Cotton T-shirt",
            price: 68,
            qty:0,

        },
        {
            id: 44,
            img: "/Image/image57.png",
            title: "Men Round Neck Pure Cotton T-shirt",
            price: 68,
            qty:0,

        },
        {
            id: 45,
            img: "/Image/image58.png",
            title: "Men Round Neck Pure Cotton T-shirt",
            price: 68,
            qty:0,

        },
        {
            id: 46,
            img: "/Image/image59.png",
            title: "Men Round Neck Pure Cotton T-shirt",
            price: 68,
            qty:0,

        },
        {
            id: 47,
            img: "/Image/image60.png",
            title: "Men Round Neck Pure Cotton T-shirt",
            price: 68,
            qty:0,

        },

    ]
    const { id } = useParams()
    const product = arr.find((item) => item.id === Number(id))

    return (
        <>
            {
                product && (
                    <div className="product-page">
                        <div className="left">
                            <img
                                src={product.img}
                                alt="product"
                                className="main-img"
                            />
                        </div>

                        <div className="right">
                            <h2>{product.title}</h2>
                            <div className="rating">
                                <img src="/Image/image25.png" alt="" />
                                <img src="/Image/image25.png" alt="" />
                                <img src="/Image/image25.png" alt="" />
                                <img src="/Image/image25.png" alt="" />
                                <img src="/Image/image26.png" alt="" />
                                <p> (122)</p>
                            </div>

                            <h3 className="price">${product.price}</h3>

                            <p className="desc">
                                A lightweight, usually knitted, pullover shirt, close-fitting and
                                with a round neckline and short sleeves, worn as an undershirt or
                                outer garment.
                            </p>

                            <h4>Select Size</h4>
                            <div className="sizes">
                                <button>S</button>
                                <button>M</button>
                                <button>L</button>
                                <button>XL</button>
                                <button>XXL</button>
                            </div>

                            <button className="add-btn" onClick={() => addToCart(product)}>ADD TO CART</button>

                            <div className="info">
                                <p>100% Original product.</p>
                                <p>Cash on delivery is available on this product.</p>
                                <p>Easy return and exchange policy within 7 days.</p>
                            </div>
                        </div>

                    </div>
                )
            }

        </>
    )
}