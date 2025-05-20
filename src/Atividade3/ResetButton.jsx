import React from "react";

function ResetButton({ onClick }) {
  return (
    <button className="reset" onClick={onClick}>
      Reset
    </button>
  );
}

export default ResetButton;
