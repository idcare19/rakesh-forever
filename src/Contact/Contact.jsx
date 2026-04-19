import React from "react";
import Subscribe from "../Components/Subscribe/Subscribe";

export default function Contact() {
    return (
        <div className="contact">

            <h1>CONTACT US</h1>

            <div className="contact-container">
                <div className="contact-left">
                    <img src="/Image/contact_img.png" alt="contact" />
                </div>
                <div className="contact-right">

                    <h3>Our Store</h3>
                    <p>54709 Willms Station</p>
                    <p>Suite 350, Washington, USA</p>

                    <p className="rr">Tel: (415) 555-0132</p>
                    <p>Email: admin@forever.com</p>

                    <h3 className="rr">Careers at Forever</h3>
                    <p>Learn more about our teams and job openings.</p>

                    <button className="contact-btn">Explore Jobs</button>

                </div>
            </div>
            <Subscribe></Subscribe>
        </div>
    );
}