import React from "react";

export default function AdminLogin() {
    return (
        <div className="Admin-container">
            <div className="login-box">
                <h2>Admin Panel</h2>

                <label>Email Address</label>
                <input type="email" placeholder="admin@example.com" />

                <label>Password</label>
                <input type="password" placeholder="************" />

                <button>Login</button>
            </div>
        </div>
    );

}
