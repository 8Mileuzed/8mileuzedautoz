import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We will contact you shortly.");
  };

  return (
    <section style={{ marginTop: "40px" }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: "400px" }}>
        <input name="name" placeholder="Full Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" onChange={handleChange} required />
        <button type="submit" style={{ marginTop: "10px", padding: "10px", background: "#0b3d91", color: "#fff" }}>
          Send
        </button>
      </form>
    </section>
  );
}

