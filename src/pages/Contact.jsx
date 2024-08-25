import { useState } from "react";
import { Facebook, Instagram, LocateFixedIcon, Twitter } from "lucide-react";
import { FaKey } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; // Import Leaflet components

import './components/background.css';

function Contact() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});
    const [alert, setAlert] = useState({ type: "", message: "" });

    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    };

    const validateForm = () => {
        const newErrors = {};

        if (!fullName.trim()) newErrors.fullName = "Full Name is required";
        if (!email.trim()) {
            newErrors.email = "Email is required";
        } else if (!validateEmail(email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!phone.trim()) newErrors.phone = "Phone Number is required";
        if (!subject.trim()) newErrors.subject = "Subject is required";
        if (!message.trim()) newErrors.message = "Message is required";

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setAlert({ type: "error", message: "Please fix the errors above and try again." });
            return;
        }

        // Handle form submission logic here, e.g., sending data to a server

        setAlert({ type: "success", message: "Your message has been sent successfully!" });

        // Clear form fields
        setFullName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
    };


    const kathmanduPosition = [27.7172, 85.3240];

    return (
        <div>
            {/* Background Section */}
            <div className="bg-custom text-white text-center py-8">
                <h1 className="text-3xl">Contact Us</h1>
            </div>

            {/* Contact Form Section */}
            <div className="max-w-xl mx-auto p-6 mt-8 sm:mt-14">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                    <h2 className="text-[#843135] text-2xl">Get in Touch</h2>
                    <div className="flex gap-4 mt-4 sm:mt-0">
                        {/* Social Media Icons with Tailwind classes */}
                        <LocateFixedIcon className="w-10 h-10 border border-[#843135] p-2 rounded-full hover:text-white text-[#843135] hover:bg-[#843135] transition-colors duration-300" />
                        <Facebook className="w-10 h-10 border border-[#843135] p-2 rounded-full hover:text-white text-[#843135] hover:bg-[#843135] transition-colors duration-300" />
                        <Instagram className="w-10 h-10 border border-[#843135] p-2 rounded-full hover:text-white text-[#843135] hover:bg-[#843135] transition-colors duration-300" />
                        <Twitter className="w-10 h-10 border border-[#843135] p-2 rounded-full hover:text-white text-[#843135] hover:bg-[#843135] transition-colors duration-300" />
                    </div>
                </div>

                {/* Alert Section */}
                {alert.message && (
                    <div className={`p-4 mb-4 border-2 border-[#843135] rounded-lg flex items-center transition-opacity duration-500 ${alert.type === "success" ? "text-green-600" : "text-red-600"}`}>
                        <FaKey className="mr-2" />
                        <span>{alert.message}</span>
                    </div>
                )}

                {/* Form Section */}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={fullName}
                            onChange={(e) => {
                                setFullName(e.target.value);
                                setErrors((prevErrors) => ({ ...prevErrors, fullName: "" }));
                            }}
                            className="w-full p-3 border-2 border-gray-300 rounded outline-none placeholder-gray-500"
                        />
                        {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                    </div>

                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
                            }}
                            className="w-full p-3 border-2 border-gray-300 rounded outline-none placeholder-gray-500"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div className="mb-4">
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            value={phone}
                            onChange={(e) => {
                                setPhone(e.target.value);
                                setErrors((prevErrors) => ({ ...prevErrors, phone: "" }));
                            }}
                            className="w-full p-3 border-2 border-gray-300 rounded outline-none placeholder-gray-500"
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>

                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Subject"
                            value={subject}
                            onChange={(e) => {
                                setSubject(e.target.value);
                                setErrors((prevErrors) => ({ ...prevErrors, subject: "" }));
                            }}
                            className="w-full p-3 border-2 border-gray-300 rounded outline-none placeholder-gray-500"
                        />
                        {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                    </div>

                    <div className="mb-6">
                        <textarea
                            placeholder="Message"
                            value={message}
                            onChange={(e) => {
                                setMessage(e.target.value);
                                setErrors((prevErrors) => ({ ...prevErrors, message: "" }));
                            }}
                            className="w-full p-3 border-2 border-gray-300 rounded outline-none placeholder-gray-500 h-32 resize-none"
                        />
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#843135] text-white p-3 rounded-lg hover:bg-[#8e4548] focus:outline-none focus:ring-2 focus:ring-[#f2f2f2] transition-colors duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>

            {/* Map Section */}
            <div className="w-full p-4">
                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
                    <MapContainer center={kathmanduPosition} zoom={13} className="h-96">
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution=''
                        />
                        <Marker position={kathmanduPosition}>
                            <Popup>
                                Kathmandu, Nepal. <br /> The capital city.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    );
}

export default Contact;
