import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import {history} from '../_helpers';
import {LoginPage} from '../LoginPage';
import {Route, Router} from 'react-router-dom';
import { PrivateRoute } from '../component';
import { HomePage } from '../HomePage';
import {alertActions} from '../_actions';
import {connect} from 'react-redux';
import {RegisterPage} from '../RegisterPage';

class App extends Component {

  constructor(props){
    super(props);
    const {dispatch} = this.props;
    history.listen((location,action)=> {
      // Dispatch Action for alert
      dispatch(alertActions.clear());
    });
  }

  render() {
    const {alert} = this.props;
    return (
      <div className="jumbotron">
        <div className="container">
            <div>
                { alert.message &&  
                  <div className={`alert ${alert.type}`}>{alert.message}</div>
                }
            </div>
            <Router history={history}>
                <div>
                    <PrivateRoute exact path="/" component={HomePage}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/register" component={RegisterPage}/>
                </div>
            </Router>     
        </div>
     </div> 
    );
  }
}

function mapStateToProps(state){

  const {alert} = state;
  return {
    alert
  };
}

const connectedApp =  connect(mapStateToProps)(App);
export  {connectedApp as App} ;