import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LogIn from './Components/LogIn'
import Dashboard from './Components/Dashboard'
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css'
import M  from 'materialize-css';


class App extends Component {

 
  render(){

    return (
      <BrowserRouter>

        <div className="App">

        
        <Switch>
        <Route exact path ="/" component={LogIn}/>
        <Route exact path ="/Dashboard" component={Dashboard}/>
        </Switch>
        
      
        </div>

      </BrowserRouter>
      
    );

  }
  
}

export default App;
