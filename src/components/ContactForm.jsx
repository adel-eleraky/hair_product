import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", phone: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
    };

    return (
        <form
            className="contact-form container my-5 p-4 border rounded"
            onSubmit={handleSubmit}
        >
            <h3 className="text-center mb-4">سجل بياناتك الآن</h3>
            <input
                type="text"
                name="name"
                placeholder="الاسم"
                value={formData.name}
                onChange={handleChange}
                className="form-control mb-3"
                required
            />
            <input
                type="text"
                name="phone"
                placeholder="رقم الهاتف"
                value={formData.phone}
                onChange={handleChange}
                className="form-control mb-3"
                required
            />
            <button type="submit" className="btn btn-danger w-100">
                اطلب الآن
            </button>
        </form>
    );
};

export default ContactForm;
