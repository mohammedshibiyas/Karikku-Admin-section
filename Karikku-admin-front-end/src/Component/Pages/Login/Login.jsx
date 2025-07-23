import React, { useState } from 'react';
import './Login.scss';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login submitted:', formData);
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="logo-section">
                    {/* <h1 className="logo">THARA</h1>
                    <p className="tagline">INDUSTRIES</p> */}

                    <img src="Images/Thara-login-logo.svg" alt="Thara-logo" />
                </div>

                <div className="form-section">
                    <h2 className="form-title">Admin Log In</h2>
                    <p className='welcome-details'>
                        Welcome back! Please enter your details.
                    </p>

                    <form onSubmit={handleSubmit} className="login-form">
                        <div className="input-group">
                            <label htmlFor="username">Email</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="Enter your Email"
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        <div className="remember-me">
                          <div className='remeber-check'>
                              <input
                                type="checkbox"
                                id="rememberMe"
                                name="rememberMe"
                                checked={formData.rememberMe}
                                onChange={handleChange}
                            />
                            <label htmlFor="rememberMe">Remember me for 30 days</label>
                          </div>

                            <button
                                type="button"
                                className="forgot-password"
                                // onClick={handleForgotPassword}
                            >
                                Forgot password?
                            </button>
                        </div>



                        <button type="submit" className="login-button">
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
