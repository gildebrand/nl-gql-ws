import { CurrentUser } from '../CurrentUser/CurrentUser';
import React from 'react';
import "./Navbar.css";

export const Navbar = () => {
  return <div className="navbar card">
    <div className="navbar__pseudo"/>
    <div className="navbar__title">To Do</div>
    <div className="navbar__user">
      <CurrentUser/>
    </div>
  </div>;
};
