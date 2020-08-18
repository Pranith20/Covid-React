import React, { useEffect, useState } from "react";
import Home from "./pages/Home";

import Graph from "./pages/Graph";
import weather from "./pages/weather";
import Nav from "./Nav";

import Symptom from "./pages/Symptom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/symptom" component={Symptom} />
          <Route path="/graph" component={Graph} />
          <Route path="/weather" component={weather} />
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
