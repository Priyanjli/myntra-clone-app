import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Kides from "../component/Kides";
import Login from "../component/Login";
import Man from "../component/Man";
import Women from "../component/Women";
import HomeAndLiving from "../component/HomeAndLiving";
import Stiudio from "../component/Stiudio";
import SlideShow from "../commen/SlideShow";
const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <h1>Welcome to Home</h1>
        <SlideShow></SlideShow>
      </Route>
      <Route exact path="/login">
        <Login></Login>
      </Route>
      <Route exact path="/men">
        <h1>Welcome to Men</h1>
      </Route>
      <Route exact path="/women">
        <h1>Welcome to women</h1>
      </Route>
      <Route exact path="/homeandliving"></Route>
      <Route exact path="/kides"></Route>
      <Route exact path="/stiudio"></Route>
      <Route exact path="/butey"></Route>
      {/* <Route exact path="/profile">
        <h1>Welcome to profile</h1> */}
      {/* </Route> */}
    </Switch>
  );
};
export default Router;
