import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostPage from './pages/PostPage';
import AuthorProfile from './pages/AuthorProfile'
import './App.css'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostPage />} />
        <Route path="/author/:authorId" element={<AuthorProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;