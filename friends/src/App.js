import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';
import Login from './Components/login';
import PrivateRoute from './Components/PrivateRoute';


function App() {
  return (
    <div className="App">
     <Login />
    </div>
  );
}

export default App;
