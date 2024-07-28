import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormField from "../molecules/FormField";
import Button from "../atoms/LoginButton";
import FormTextareaField from "../molecules/FormTextareaField";
import emailjs from 'emailjs-com';

const Form = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [number, setContactNumber] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    const mobileNumberPattern = /^[0-9]$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim().length === 0) newErrors.email = "Email is required";
    else if (!emailPattern.test(email))
      newErrors.email = "Invalid email format";

    if (number.trim().length === 0)
      newErrors.number = "Contact number is required";
    else if (mobileNumberPattern.test(number))
      newErrors.number = "Invalid contact number";

    if (name.trim().length === 0) newErrors.name = "Your name is required";
    if (message.trim().length === 0)
      newErrors.message = "Your message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;
    console.log(process.env);
    const serviceId=process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    e.preventDefault();
    if (validateForm()) {
      try {
        // Send email using EmailJS
        await emailjs.send(
          serviceId,  // Replace with your EmailJS service ID
          templateId, // Replace with your EmailJS template ID
         { to_name: 'Harshana Eranda', // Replace with your name or the recipient's name
          from_name: name,
          message: `Email: ${email}\nContact Number: ${number}\nMessage: ${message}`
         },
         userId// Replace with your EmailJS user ID
        );

        // If email sent successfully, navigate to home
        navigate("/home");
      } catch (error) {
        setErrors({ form: "Failed to send message. Please try again." });
        // console.error("EmailJS error:", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <FormField
        label="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        error={errors.name}
      />
      <FormField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        error={errors.email}
      />
      <FormField
        label="Contact Number"
        type="text"
        value={number}
        onChange={(e) => setContactNumber(e.target.value)}
        placeholder="Enter your contact number"
        error={errors.number}
      />
      <FormTextareaField
        label="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your message"
        error={errors.message}
      />
      {errors.form && (
        <div className="text-red-500 text-sm mt-2">{errors.form}</div>
      )}
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
