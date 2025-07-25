import React, { useState } from "react";

const reactions = [
  { key: "like", label: "Like", icon: "👍" },
  { key: "dislike", label: "Dislike", icon: "👎" }
];

function CommentBox({ comments = [], onAddComment, onReact }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    if (onAddComment) onAddComment(input);
    setInput("");
  };

  return (
    <div style={{
      background: "#f5f6fa",
      borderRadius: "14px",
      padding: "1.5rem 1rem",
      margin: "1.5rem 0",
      boxShadow: "0 2px 12px rgba(56,189,248,0.07)"
    }}>
      <div style={{ fontWeight: 700, marginBottom: "1.2rem", color: "#2563eb" }}>
        {comments.length} Comments
      </div>
      <form onSubmit={handleSubmit} style={{ display: "flex", marginBottom: "1.2rem" }}>
        <input
          type="text"
          placeholder="Write your comment..."
          value={input}
          onChange={e => setInput(e.target.value)}
          style={{
            flex: 1,
            padding: "0.8rem",
            borderRadius: "10px 0 0 10px",
            border: "1.5px solid #bcd0ee",
            outline: "none",
            fontSize: "1rem",
            background: "#fff"
          }}
        />
        <button
          type="submit"
          style={{
            background: "linear-gradient(90deg, #2563eb, #38bdf8)",
            color: "#fff",
            border: "none",
            borderRadius: "0 10px 10px 0",
            padding: "0 1.3rem",
            fontWeight: 700,
            fontSize: "1.1rem",
            cursor: "pointer",
            letterSpacing: "1px"
          }}
        >
          →
        </button>
      </form>
      {comments.map((c) => (
        <div
          key={c.id}
          style={{
            background: c.author.name === "You" ? "linear-gradient(90deg, #e0e7ff 60%, #f0fdfa 100%)" : "#fff",
            borderLeft: c.author.name === "You" ? "5px solid #2563eb" : "5px solid #bcd0ee",
            borderRadius: "10px",
            padding: "0.9rem 1rem",
            marginBottom: "1.1rem",
            boxShadow: "0 1px 6px rgba(37,99,235,0.06)",
            display: "flex",
            alignItems: "flex-start",
            gap: "1rem"
          }}
        >
          <img
            src={c.author.avatar}
            alt={c.author.name}
            style={{
              width: 38,
              height: 38,
              borderRadius: "50%",
              border: c.author.name === "You" ? "2px solid #2563eb" : "2px solid #bcd0ee",
              marginTop: 2
            }}
          />
          <div style={{ flex: 1 }}>
            <div style={{
              fontWeight: 600,
              color: c.author.name === "You" ? "#2563eb" : "#1a237e",
              fontSize: "1.05rem"
            }}>
              {c.author.name}
              <span style={{ fontWeight: 400, color: "#888", fontSize: "0.95rem", marginLeft: 10 }}>
                {c.author.date}
              </span>
            </div>
            <div style={{ margin: "0.5rem 0", color: "#222" }}>{c.text}</div>
            <div style={{ display: "flex", gap: "1.2rem" }}>
              {reactions.map((r) => (
                <span
                  key={r.key}
                  onClick={() => onReact && onReact(c.id, r.key)}
                  style={{
                    cursor: "pointer",
                    color: c.reaction === r.key ? "#2563eb" : "#222",
                    fontWeight: c.reaction === r.key ? 700 : 500,
                    background: c.reaction === r.key ? "#e0e7ff" : "transparent",
                    borderRadius: "6px",
                    padding: "0.2rem 0.7rem",
                    transition: "all 0.2s"
                  }}
                >
                  {r.icon} {r.label}
                </span>
              ))}
              <span style={{ color: "#2563eb", cursor: "pointer" }}>Reply</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentBox;