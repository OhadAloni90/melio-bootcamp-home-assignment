import React from "react";
import {NavbarLink} from "../NavbarLink/NavbarLink";
import { routes } from "../../pages/index";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div id="navbar">
      <NavbarLink  label="Home" to={routes.home}/>
      <NavbarLink  label="Favorites" to={routes.favorites}/>
    </div>
  );
};
