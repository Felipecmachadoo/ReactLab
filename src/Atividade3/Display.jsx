import React from "react";

function TotalDisplay({ total }) {
  return (
    <div className="total">
      Total
      <input type="text" value={total} readOnly />
    </div>
  );
}

export default TotalDisplay;
