import React, { useState } from "react";

export default function ContactNotification() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      className="position-fixed bottom-0 start-0 m-4 p-3 bg-white border shadow-lg"
      style={{
        width: "280px",
        zIndex: 1050,
        borderRadius: "1.5rem",
        boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
      }}
    >
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h5 className="mb-0">Contact</h5>
        <button
          type="button"
          className="btn-close btn-sm"
          aria-label="Close"
          onClick={() => setVisible(false)}
        ></button>
      </div>
      <div className="small text-dark">
        <p className="mb-1">
          <strong>Phone:</strong>{" "}
          <a href="tel:14032507327" className="text-decoration-none text-primary">
            1-403-250-7327
          </a>
        </p>
        <p className="mb-0">
          <strong>Emergencies:</strong>{" "}
          <a href="tel:15874294983" className="text-decoration-none text-danger">
            1-587-429-4983
          </a>
        </p>
      </div>
    </div>
  );
}