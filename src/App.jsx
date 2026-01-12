import React from "react";
import Header from "./components/Header";
import VehicleList from "./components/VehicleList";
import FinancingForm from "./components/FinancingForm";
import ContactForm from "./components/ContactForm";

export default function App() {
  return (
    <div>
      <Header />
      <main style={{ padding: "20px" }}>
        <VehicleList />
        <FinancingForm />
        <ContactForm />
      </main>
    </div>
  );
}
