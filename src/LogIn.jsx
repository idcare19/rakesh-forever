import React from "react";

export default function LogIn() {
    return (
        <div className="login-container">
            <div className="login-item">
                <h1 className="login-title">Login
                    <span className="line"></span>
                </h1>

                <input type="email" placeholder="Email" className="input-field" />
                <input type="password" placeholder="Password" className="input-field" />

                <div className="login-links">
                    <p className="link-p">Forgot your password?</p>
                    <p className="link-p">Create account</p>
                </div>

                <button className="signin-btn">Sign In</button>
            </div>
        </div>
    );
}
