import React from "react";
import { Link } from "react-router-dom";

function AuthorLink({ author }) {
  // author: { id, name, avatar, date }
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
      <img
        src={author.avatar}
        alt={author.name}
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          objectFit: "cover",
          border: "2px solid #2563eb"
        }}
      />
      <div>
        <Link
          to={`/author/${author.id}`}
          style={{
            color: "#2563eb",
            fontWeight: 600,
            textDecoration: "underline",
            cursor: "pointer"
          }}
        >
          {author.name}
        </Link>
        <div style={{ fontSize: "0.9rem", color: "#555" }}>{author.date}</div>
      </div>
    </div>
  );
}

export default AuthorLink;