import React, { useState, useCallback } from 'react';
import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
import logo from './images/ca phe mock client profile transparent.png';
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <div className="App">
      <LandingPage/>
    </div>
  );
}

export default App;
