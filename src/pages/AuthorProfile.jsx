import React from 'react';
import { useParams, Link } from 'react-router-dom';

function AuthorProfile() {
  const { authorId } = useParams();
  

  const author = {
    id: authorId,
    name: "Shuvrato",
    avatar: "https://a.ltrbxd.com/resized/avatar/upload/2/3/3/8/8/0/1/shard/avtr-0-220-0-220-crop.jpg",
    bio: "Hey There..Ore Wa Shuvrato"
  };

  return (
    <div className="container">
      <div className="profile-card">
        <img src={author.avatar} alt={author.name} className="profile-avatar" />
        <h1>{author.name}</h1>
        <p>{author.bio}</p>
        <Link to="/">← Back to Post</Link>
      </div>
    </div>
  );
}

export default AuthorProfile;