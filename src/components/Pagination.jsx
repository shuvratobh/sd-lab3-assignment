import React, { useState } from "react";

function Pagination({ totalPages = 3, onPageChange }) {
  const [current, setCurrent] = useState(1);

  const handleClick = (page) => {
    setCurrent(page);
    if (onPageChange) onPageChange(page);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "2rem 0" }}>
      {[...Array(totalPages)].map((_, idx) => (
        <button
          key={idx}
          onClick={() => handleClick(idx + 1)}
          style={{
            background: current === idx + 1 ? "linear-gradient(90deg, #2563eb, #38bdf8)" : "#fff",
            color: current === idx + 1 ? "#fff" : "#2563eb",
            border: "1.5px solid #2563eb",
            borderRadius: "6px",
            padding: "0.4rem 1rem",
            margin: "0 0.3rem",
            fontWeight: 600,
            cursor: "pointer",
            transition: "all 0.2s"
          }}
        >
          {idx + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;