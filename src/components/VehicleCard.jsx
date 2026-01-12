import React from "react";

export default function VehicleCard({ vehicle }) {
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "8px", margin: "10px", padding: "10px", maxWidth: "300px" }}>
      <img src={vehicle.image} alt={vehicle.name} style={{ width: "100%", borderRadius: "8px" }} />
      <h3>{vehicle.name}</h3>
      <p>Mileage: {vehicle.mileage}</p>
      <p>Price: ${vehicle.price}</p>
    </div>
  );
}

