import React from "react";
import VehicleCard from "./VehicleCard";
import placeholder from "../assets/placeholder-car.jpg";

const vehicles = [
  { name: "2015 Kia Optima GDI", mileage: 125359, price: 5995, image: placeholder },
  { name: "2015 Ford Escape Titanium", mileage: 103025, price: 7995, image: placeholder },
  { name: "2014 Lexus CT200h", mileage: 142517, price: 9495, image: placeholder },
];

export default function VehicleList() {
  return (
    <section>
      <h2>Available Vehicles</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {vehicles.map((v, i) => (
          <VehicleCard key={i} vehicle={v} />
        ))}
      </div>
    </section>
  );
}

