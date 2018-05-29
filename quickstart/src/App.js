import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {history} from './_helpers';
import {LoginPage} from './LoginPage';
import {Route, Router} from 'react-router-dom';
import { PrivateRoute } from './component';
import { HomePage } from './HomePage';

class App extends Component {

  constructor(props){
    super(props);
    const {dispatch} = this.props;
    history.listen((location,action)=> {
      // Dispatch Action for alert
    });
  }

  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">
            <Router history={history}>
                <div>
                    <PrivateRoute exact path="/" component={HomePage}/>
                    <Route path="/login" component={LoginPage}/>
                </div>
            </Router>     
          </div>  
        </div>
     </div> 
    );
  }
}

export default App;
