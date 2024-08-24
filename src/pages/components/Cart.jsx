import { AppWindow, User, Mail, Phone, Key } from 'lucide-react';
import React, { useState } from 'react';
import app from "../img/app.png";

function cart() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobile: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const validateForm = () => {
        const { fullName, email, mobile, password, confirmPassword } = formData;
        if (!fullName || !email || !mobile || !password || !confirmPassword) {
            return 'All fields are required.';
        }
        if (password !== confirmPassword) {
            return 'Passwords do not match.';
        }
        return '';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
        } else {
            setError('');
            alert('Form submitted');
        }
    };

    return (
        <>
            <div className="flex items-center justify-center h-[800px] bg-[#f1f1f1]">
                <div className="bg-white p-8 shadow-[0px_0px_30px_0px_rgba(0,0,0,0.2)] max-w-[500px] w-full">
                    <h2 className="text-xl text-center mb-6 mt-11">Fill in this form to Register</h2>
                    <form onSubmit={handleSubmit}>
                        {/* Full Name Input */}
                        <div className="flex items-center rounded mb-4">
                            <span className="text-[#843135] p-[12px] bg-[#f1f1f1]">
                                <User />
                            </span>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full pl-4 border-[4px] border-[#f1f1f1] p-[8px] outline-none placeholder-black"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="flex items-center rounded mb-4">
                            <span className="text-[#843135] p-[12px] bg-[#f1f1f1]">
                                <Mail className='' />
                            </span>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full pl-4 border-[4px] border-[#f1f1f1] p-[8px] outline-none placeholder-black"
                            />
                        </div>

                        {/* Mobile Number Input */}
                        <div className="flex items-center rounded mb-4">
                            <span className="text-[#843135] p-[12px] bg-[#f1f1f1]">
                                <Phone />
                            </span>
                            <input
                                type="text"
                                name="mobile"
                                placeholder="Mobile Number"
                                value={formData.mobile}
                                onChange={handleChange}
                                className="w-full pl-4 border-[4px] border-[#f1f1f1] p-[8px] outline-none placeholder-black"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="flex items-center rounded mb-4">
                            <span className="text-[#843135] p-[12px] bg-[#f1f1f1]">
                                <Key />
                            </span>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full pl-4 border-[4px] border-[#f1f1f1] p-[8px] outline-none placeholder-black"
                            />
                        </div>

                        {/* Confirm Password Input */}
                        <div className="flex items-center rounded mb-4">
                            <span className="text-[#843135] p-[12px] bg-[#f1f1f1]">
                                <Key />
                            </span>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Re-type Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="w-full pl-4 border-[4px] border-[#f1f1f1] p-[8px] outline-none placeholder-black"
                            />
                        </div>

                        {error && <p className="text-[#843135] text-sm mb-4">{error}</p>}
                        <button
                            type="submit"
                            className="w-full bg-[#843135] text-white mt-10 hover:bg-[#a94442] py-2"
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div>
            <div className='bg-white flex flex-col md:flex-row items-center md:items-start p-5 md:p-10 md:pb-0'>
                <img src={app} alt="App Preview" className='w-full max-w-[400px] h-auto' />
                <div className='flex flex-col items-center md:items-start mt-5 md:mt-0 md:ml-10 text-center md:text-left'>
                    <h1 className='text-[20px] md:text-[21px] font-semibold mb-4'>
                        Kshamadevi Group, Simplify your business <br />
                        | Order and Recommend our products
                    </h1>
                    <div className='p-4 md:p-5 bg-[#843135] text-white w-full max-w-[500px] rounded-md transition-all duration-300 ease-in-out hover:scale-105 md:mt-12'>
                        <h2 className='text-[18px] flex items-center justify-center md:justify-start'>
                            Download The App Here:<AppWindow className='ml-2 mt-2 md:ml-3' />
                        </h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default cart;
