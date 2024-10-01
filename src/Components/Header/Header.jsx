import React from 'react';
import './Header.css';

function Header() {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <h1>Blog</h1>
        </div>
        <nav className="nav">
          <a href="#">
            <h4>Home</h4>
          </a>
          <a href="#">
            <h4>Create post</h4>
          </a>
        </nav>
      </header>
    </div>
  );
}
export default Header;
