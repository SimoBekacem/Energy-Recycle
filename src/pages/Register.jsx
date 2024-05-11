import React, { useState } from 'react';
import logo from "../assets/logo.png"
import './Sign.css';


export default function Register() {
    // State variables to store form data and validation
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        email: ''
    });
    const [passwordError, setPasswordError] = useState('');

    // Function to handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate password and confirm password match
        if (formData.password !== formData.confirmPassword) {
            setPasswordError("Passwords do not match");
            return;
        }
        // Here you can perform any action you want with the form data, like sending it to a server
        console.log(formData);
        // Reset the form after submission
        setFormData({
            username: '',
            password: '',
            confirmPassword: '',
            email: ''
        });
        setPasswordError('');
    };

    return (
        <div>
            
            <div className='Title'>
                <img src={logo}></img>
                <h2>Energie Recycle</h2>
            </div>

            <form onSubmit={handleSubmit} id='Form'>
                <label htmlFor="username">Username:</label>
                <input 
                    type="text" 
                    id="username" 
                    name="username" 
                    value={formData.username} 
                    onChange={handleInputChange} 
                    required 
                /><br /><br />

                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    required 
                /><br /><br />
                
                <label htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    value={formData.password} 
                    onChange={handleInputChange} 
                    required 
                /><br /><br />
                
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input 
                    type="password" 
                    id="confirmPassword" 
                    name="confirmPassword" 
                    value={formData.confirmPassword} 
                    onChange={handleInputChange} 
                    required 
                />
                {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}<br /><br />
                
                <button type="submit">Register</button>
            </form>
            <br></br>
            
            <a>Already have an account?</a>
        </div>
    );
}


