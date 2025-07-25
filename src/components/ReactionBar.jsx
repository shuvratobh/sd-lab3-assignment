import React, { useState } from "react";

// You can use emoji or SVG icons for reactions
const reactions = [
  { key: "like", label: "Like", icon: "👍" },
  { key: "love", label: "Love", icon: "❤️" },
  { key: "angry", label: "Angry", icon: "😡" },
  { key: "sad", label: "Sad", icon: "😢" },
];

// Dummy percentages for each reaction
const percentages = {
  like: 20,
  love: 60,
  angry: 5,
  sad: 5,
};

function ReactionBar() {
  const [active, setActive] = useState("like");

  return (
    <div
      style={{
        background: "#e6edfa",
        borderRadius: "12px",
        padding: "0.7rem 1rem",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        margin: "1.5rem 0",
        fontSize: "1.1rem",
        fontWeight: 500,
        boxShadow: "0 1px 4px rgba(37,99,235,0.07)",
        userSelect: "none"
      }}
    >
      {reactions.map((r) => (
        <div
          key={r.key}
          onClick={() => setActive(r.key)}
          style={{
            cursor: "pointer",
            color: active === r.key ? "#2563eb" : "#222",
            background: active === r.key ? "#dbeafe" : "transparent",
            borderRadius: "8px",
            padding: "0.3rem 0.8rem",
            transition: "all 0.2s",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minWidth: 60
          }}
        >
          <span style={{ fontSize: "1.3rem" }}>{r.icon}</span>
          <span>{r.label}</span>
          <span style={{ fontSize: "0.9rem", color: "#555", fontWeight: 400 }}>
            {percentages[r.key]}%
          </span>
        </div>
      ))}
    </div>
  );
}

export default ReactionBar;