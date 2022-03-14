import React from "react";
import {useNavigate, useLocation } from "react-router-dom";
import "./NavbarLink.css";

export const NavbarLink = (props) => {
  const navigate = useNavigate();
  const {pathname} = useLocation();
  const isActive = pathname === props.to; // use this property to highlight the active navLink

  const handleClick = () => {
    navigate(props.to);
  };

  return (
    <div className='Link' onClick={handleClick}>
      {props.label}
    </div>
  );
};
