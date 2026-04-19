import React from "react";
import Subscribe from "../../Components/Subscribe/Subscribe";

export default function About() {
    return (

        <>
            <div className="about">
                <h1>About Us</h1>
                <div className="about-item">
                    <div className="about-left">
                        <img src="/Image/about_img.png" alt="" />
                    </div>
                    <div className="about-right">
                        <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>

                        <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>

                        <h3>Our Mission</h3>
                        <p>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
                    </div>
                </div>
                <div className="about-details">
                    <h1>WHY CHOOSE US</h1>
                    <div className="choose-us">
                        <div className="quality">
                            <h4>Quality Assurance:</h4>
                            <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
                        </div>
                        <div className="quality">
                            <h4>Convenience:</h4>
                            <p>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
                        </div>
                        <div className="quality">
                            <h4>Exceptional Customer Service:</h4>
                            <p>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
                        </div>


                    </div>
                </div>



            </div>
            <Subscribe></Subscribe> 
        </>
    )
}