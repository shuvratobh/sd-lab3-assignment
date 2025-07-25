import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostPage from "./pages/PostPage";
import AuthorProfile from "./pages/AuthorProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostPage />} />
        <Route path="/author/:authorId" element={<AuthorProfile />} />
      </Routes>
    </Router>
  );
}

export default App;