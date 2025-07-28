import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactionBar from '../components/ReactionBar';
import CommentBox from '../components/CommentBox';
import Pagination from '../components/Pagination';


const postData = {
  author: { id: 1, name: "Shuvrato", avatar: "https://a.ltrbxd.com/resized/avatar/upload/2/3/3/8/8/0/1/shard/avtr-0-220-0-220-crop.jpg", date: "24 July, 2025" },
  title: "My React Assignment",
  content: "This is Shuvrato Speaking...Glad you are here...check out the chat box , yo.....peace!"
};

const initialComments = [
  { id: 1, author: { name: "Shuvrato", avatar: "https://a.ltrbxd.com/resized/avatar/upload/2/3/3/8/8/0/1/shard/avtr-0-220-0-220-crop.jpg" }, text: "Testing", reaction: null },
  { id: 2, author: { name: "Shuvrato", avatar: "https://a.ltrbxd.com/resized/avatar/upload/2/3/3/8/8/0/1/shard/avtr-0-220-0-220-crop.jpg" }, text: "Testing Again", reaction: 'like' },

 
];
const COMMENTS_PER_PAGE = 4;

function PostPage() {
  const [allComments, setAllComments] = useState(initialComments);
  const [currentPage, setCurrentPage] = useState(1);

  const handleAddComment = (text) => {
    const newComment = { id: Date.now(), author: { name: "You", avatar: "https://a.ltrbxd.com/resized/avatar/upload/2/3/3/8/8/0/1/shard/avtr-0-220-0-220-crop.jpg" }, text, reaction: null };
    setAllComments([...allComments, newComment]);
  };

  const handleCommentReaction = (commentId, reaction) => {
    setAllComments(allComments.map(c =>
      c.id === commentId ? { ...c, reaction: c.reaction === reaction ? null : reaction } : c
    ));
  };
  
  const totalPages = Math.ceil(allComments.length / COMMENTS_PER_PAGE);
  const displayedComments = allComments.slice((currentPage - 1) * COMMENTS_PER_PAGE, currentPage * COMMENTS_PER_PAGE);

  return (
    <div className="container">
      <h1>{postData.title}</h1>

      <div className="author-box">
        <img src={postData.author.avatar} alt={postData.author.name} className="author-avatar" />
        <div>
          <Link to={`/author/${postData.author.id}`} className="author-name">{postData.author.name}</Link>
          <div className="author-date">{postData.author.date}</div>
        </div>
      </div>
      
      <p>{postData.content}</p>

      <ReactionBar />
      <hr />
      
      <CommentBox
        comments={displayedComments}
        onAddComment={handleAddComment}
        onReact={handleCommentReaction}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default PostPage;