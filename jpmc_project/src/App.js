import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LogIn from './Components/LogIn/LogIn'
import Dashboard from './Components/Dashboard/Dashboard'



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
