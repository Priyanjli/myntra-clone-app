import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Header from "../component/Header";
import Login from "../component/Login";
import { BrowserRouter } from "react-router-dom";
import Router from "./route";

const App = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <main>
        <Router />
      </main>
    </BrowserRouter>
  );
};
export default App;
