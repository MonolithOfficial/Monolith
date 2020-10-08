import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Navbar from './components/Navbar';
import Home from './pages/Home'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <link href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap" rel="stylesheet"/> 
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
