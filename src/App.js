import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Rooms from './components/Rooms';
import IndividualRoom from './components/IndividualRoom';
import Error from './components/Error';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={IndividualRoom} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
