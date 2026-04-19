import React from "react";

export default function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="footer-left">
                    <img src="/Image/image01.png" alt="logo" />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="footer-right">
                    <div className="company">
                        <h4>Company</h4>
                        <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Delivery</li>
                            <li>Privacy policy</li>
                        </ul>
                    </div>
                    <div className="contact">
                        <h4>Get in Touch</h4>
                        <ul>
                            <li>+1-000-000-0000</li>
                            <li>greatstackdev@gmail.com</li>
                            <li>Instagram</li>
                        </ul>
                    </div>

                </div>

            </div>
            <div className="footer-bottom">
                <p>Copyright 2024@ Rakesh.dev - All Right Reserved.</p>
            </div>
        </div>
    )
}