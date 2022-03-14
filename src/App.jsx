import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Navbar} from "./components/Navbar/Navbar.jsx";
import {Home, routes} from "./pages";
import "./App.css";
import {Playground} from "./utils/playground";
import { Favorites } from "./pages/Favorites/Favorites.jsx";

/*
  This is the entry point of the application, the magic starts here
  The Navbar Component is responsible for the Top Menu links
  The Routes Component is responsible to display a different page Component for each route path displayed in the url
*/

const App = () => {

  // Once you complete your first task, remove this call
  Playground.runPlayground();

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path={routes.home}
               element={<Home/>}/>
        <Route path={routes.favorites}
                element={<Favorites/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
