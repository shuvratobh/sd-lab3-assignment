import React, { useState } from 'react';

function CommentBox({ comments = [], onAddComment, onReact }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onAddComment(input);
      setInput('');
    }
  };

  return (
    <div className="comment-box">
      <h3>{comments.length} Comments</h3>
      <form onSubmit={handleSubmit} className="comment-form">
        <input
          type="text"
          className="comment-input"
          placeholder="Write your comment here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="comment-submit-btn">Post</button>
      </form>
      <div className="comment-list">
        {comments.map(comment => (
          <div key={comment.id} className="comment">
            <img src={comment.author.avatar} alt={comment.author.name} className="comment-avatar" />
            <div>
              <span className="comment-author-name">{comment.author.name}</span>
              <p className="comment-text">{comment.text}</p>
              <div className="comment-actions">
                <span 
                  className={comment.reaction === 'like' ? 'active' : ''}
                  onClick={() => onReact(comment.id, 'like')}
                >
                  Like
                </span>
                <span
                  className={comment.reaction === 'dislike' ? 'active' : ''}
                  onClick={() => onReact(comment.id, 'dislike')}
                >
                  Dislike
                </span>
                <span>Reply</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentBox;