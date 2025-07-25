import React from "react";
import { useParams, Link } from "react-router-dom";

function AuthorProfile() {
  const { authorId } = useParams();

  // Dummy author data (in real app, fetch by authorId)
  const author = {
    id: authorId,
    name: "Shuvrato ",
    avatar: "https://a.ltrbxd.com/resized/avatar/upload/2/3/3/8/8/0/1/shard/avtr-0-220-0-220-crop.jpg",
    bio: " Hi , I'm a Noob Developer"
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f3f3f3", padding: "2rem" }}>
      <div style={{ maxWidth: 400, margin: "3rem auto", background: "#fff", borderRadius: 12, padding: "2rem", textAlign: "center" }}>
        <img src={author.avatar} alt={author.name} style={{ width: 80, height: 80, borderRadius: "50%", marginBottom: 16 }} />
        <h2>{author.name}</h2>
        <p style={{ color: "#555" }}>{author.bio}</p>
        <Link to="/" style={{ color: "#2563eb", textDecoration: "underline" }}>← Back to Post</Link>
      </div>
    </div>
  );
}

export default AuthorProfile;