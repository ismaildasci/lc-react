import React from 'react';
import App from './App';
import NavigationBar from './NavigationBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/api';
import Contact from './pages/Issues';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import NoMatch from './pages/NoMatch';

// const basename = process.env.NODE_ENV === 'development' ? '/' : '/react-todo';

export default function Root() {
  return (
    <Router basename="/react-todo">
      <div className="todo-app-container">
        <NavigationBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<App />} exact />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} exact />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
