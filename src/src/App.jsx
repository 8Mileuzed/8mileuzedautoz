import React from "react";

const BRAND = {
  name: "8 Mile Uzed Autoz",
  slogan: "Driven by Value. Trusted on 8 Mile.",
  phone: "(586) 555-1212",
  address: "11653 E 8 Mile Rd, Warren, MI 48088",
  email: "sales@8mileuzedautoz.com",
};

export default function App() {
  return (
    <div style={{ fontFamily: "Arial", padding: 20 }}>
      <h1>{BRAND.name}</h1>
      <p>{BRAND.slogan}</p>

      <h2>Inventory</h2>
      <p>No vehicles added yet.</p>

      <h2>Financing</h2>
      <p>All credit types welcome. Get pre-approved today.</p>

      <h2>Contact</h2>
      <p>{BRAND.address}</p>
      <p>{BRAND.phone}</p>
      <p>{BRAND.email}</p>

      <footer style={{ marginTop: 40 }}>
        © {new Date().getFullYear()} {BRAND.name}
      </footer>
    </div>
  );
}
