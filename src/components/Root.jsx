import React from 'react';
import App from './App';
import NavigationBar from './NavigationBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/api';
import Issues from './pages/Issues';
import Details from './pages/Details';
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
            <Route path="/api" element={<About />} />
            <Route path="/issues" element={<Issues />} />
            <Route path="/issues/:id" element={<Details />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
