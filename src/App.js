import React, {useState} from 'react';
import Home from './components/Home';
import Header from './components/Header';
import SingleGenre from './components/SingleGenre';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Genres from './components/Genres';
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  const callbackFunction = (childData) => {
    setLoading(childData)
  };

  return (  
    <div>
    <Router>
    <div className="App">
      <header className="App-header">
        <Header parentCallback = {loading} />
      </header>   
        <div id="scroll"> 
          <Switch>
            <Route render={() => <Home parentCallback = {callbackFunction}/>} exact path="/"  />
            <Route exact path="/genres" render={() => <Genres parentCallback = {callbackFunction} />}  />
            <Route path="/genres/:id" component={SingleGenre} />
          </Switch>
        </div>
    </div>
    </Router> 
    </div> 
  );
}

export default App;