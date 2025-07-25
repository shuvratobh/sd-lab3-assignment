import React, { useState } from "react";
import AuthorLink from "../components/AuthorLink";
import ReactionBar from "../components/ReactionBar";
import CommentBox from "../components/CommentBox";
import Pagination from "../components/Pagination";

// Start with a few sample comments from the author
const starterComments = [
  {
    id: 1,
    author: {
      id: 1,
      name: "Shuvrato",
      avatar: "https://a.ltrbxd.com/resized/avatar/upload/2/3/3/8/8/0/1/shard/avtr-0-220-0-220-crop.jpg",
      date: "21 July, 2025"
    },
    text: "Hey, welcome to the chatbox! Drop your thoughts below.",
    reaction: "like"
  },
  {
    id: 2,
    author: {
      id: 1,
      name: "Shuvrato",
      avatar: "https://a.ltrbxd.com/resized/avatar/upload/2/3/3/8/8/0/1/shard/avtr-0-220-0-220-crop.jpg",
      date: "24 July, 2025"
    },
    text: "comment and these dummy comments will go awway",
    reaction: "like"
  }
];

function PostPage() {
  // Main post data
  const post = {
    title: "ASSIGNMENT",
    content: "What's up, YO! ",
    author: {
      id: 1,
      name: "Shuvrato",
      avatar: "https://a.ltrbxd.com/resized/avatar/upload/2/3/3/8/8/0/1/shard/avtr-0-220-0-220-crop.jpg",
      date: "24 July, 2025"
    }
  };

  // State for comments and pagination
  const [userHasCommented, setUserHasCommented] = useState(false);
  const [allComments, setAllComments] = useState(starterComments);
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 5;

  // Calculate total pages based on comments
  const totalPages = Math.max(1, Math.ceil(allComments.length / commentsPerPage));

  // Slice comments for current page
  const currentComments = allComments.slice(
    (currentPage - 1) * commentsPerPage,
    currentPage * commentsPerPage
  );

  // When user adds a comment, clear starter comments and start fresh
  const handleAddComment = (text) => {
    const newComment = {
      id: Date.now(),
      author: {
        id: 2,
        name: "You",
        avatar: "https://a.ltrbxd.com/resized/avatar/upload/2/3/3/8/8/0/1/shard/avtr-0-220-0-220-crop.jpg",
        date: "Just Now"
      },
      text,
      reaction: null
    };
    if (!userHasCommented) {
      setAllComments([newComment]);
      setUserHasCommented(true);
      setCurrentPage(1);
    } else {
      const updated = [...allComments, newComment];
      setAllComments(updated);
      setCurrentPage(Math.ceil(updated.length / commentsPerPage));
    }
  };

  // Handle reactions for each comment
  const handleCommentReaction = (commentId, reactionKey) => {
    setAllComments(prev =>
      prev.map(c =>
        c.id === commentId ? { ...c, reaction: reactionKey } : c
      )
    );
  };

  // Main render
  return (
    <div
      style={{
        background: "linear-gradient(120deg, #e0e7ff 0%, #f0fdfa 100%)",
        minHeight: "100vh",
        padding: "2rem",
        fontFamily: "'Segoe UI', 'Montserrat', Arial, sans-serif"
      }}
    >
      <div
        style={{
          maxWidth: 700,
          margin: "0 auto",
          background: "#fff",
          borderRadius: 18,
          padding: "2.5rem 2rem",
          boxShadow: "0 8px 32px rgba(37,99,235,0.10)",
          border: "1.5px solid #e0e7ff"
        }}
      >
        {/* Breadcrumb style, but with a little personality */}
        <div style={{ marginBottom: "1.5rem" }}>
          <span
            style={{
              color: "#2563eb",
              fontWeight: 600,
              fontSize: "0.95rem",
              letterSpacing: "0.5px"
            }}
          >
            Assignment &gt; React Lab
          </span>
        </div>
        <h2
          style={{
            fontWeight: 800,
            margin: "1rem 0",
            fontSize: "2rem",
            color: "#1a237e",
            letterSpacing: "1px"
          }}
        >
          {post.title}
        </h2>
        <p style={{ color: "#333", fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          {post.content}
        </p>
        <AuthorLink author={post.author} />
        <div style={{ margin: "2rem 0" }}>
          <ReactionBar />
        </div>
        <CommentBox
          comments={currentComments}
          onAddComment={handleAddComment}
          onReact={handleCommentReaction}
        />
        <Pagination totalPages={totalPages} onPageChange={setCurrentPage} />
        <div style={{ textAlign: "center", marginTop: 30, color: "#bcd0ee", fontSize: "0.95rem" }}>
          <span>— End of Thread —</span>
        </div>
      </div>
    </div>
  );
}

export default PostPage;