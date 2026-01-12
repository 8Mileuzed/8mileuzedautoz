import React, { useState } from "react";

export default function FinancingForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", income: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Financing request submitted! We will contact you shortly.");
  };

  return (
    <section style={{ marginTop: "40px" }}>
      <h2>Financing / Credit Application</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: "400px" }}>
        <input name="name" placeholder="Full Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input name="phone" placeholder="Phone" onChange={handleChange} required />
        <input name="income" placeholder="Monthly Income" onChange={handleChange} required />
        <button type="submit" style={{ marginTop: "10px", padding: "10px", background: "#0b3d91", color: "#fff" }}>
          Submit
        </button>
      </form>
    </section>
  );
}

