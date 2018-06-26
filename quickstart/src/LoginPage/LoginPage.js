import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { userActions } from '../_actions/user.actions';

class LoginPage extends Component {

    constructor(props){
        super(props);

        //Reset Login status
        this.props.dispatch(userActions.logout());
        this.state ={
            username:'',
            password:'',
            submitted:false

        };
    }

    handleChange(e){
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    handleSubmit(e){
        e.preventDefault();
        this.setState({ submitted:true});
        const {username, password} = this.state;
        const {dispatch} = this.props;
        if(username && password){
            // dispatch user login action
            dispatch(userActions.login(username,password));
        }
    }

    render() {
        const { loggingIn } = this.props;
        const {username, password, submitted} = this.state;

        return (
                <div className="col-md-6 mx-auto">
                    <div className="card">
                        <article className="card-body">
                            <Link to="/register"  className="float-right btn btn-outline-primary">Sign up </Link>
                            <h4 className="card-title text-center mb-4 mt-1">Sign in</h4>
                            <hr/>
                            <p className="text-success text-center">Some message goes here</p>
                            <form name="form" onSubmit={(e)=>this.handleSubmit(e)}>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                        </div>
                                        <input name="username" className={'form-control ' + (submitted && !username?'is-invalid':'')} placeholder="Username" type="text" value={username} onChange={(e)=>this.handleChange(e)}/>
                                        {
                                            submitted && !username && 
                                            <div className="invalid-feedback">Username is required</div>
                                        }
                                    </div> 
                                </div> 
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                        </div>
                                        <input name="password" className={'form-control ' + (submitted && !password?'is-invalid':'')} placeholder="******" type="password" value={password} onChange={(e)=>this.handleChange(e)}/>
                                        {
                                            submitted && !password && 
                                            <div className="invalid-feedback">Password is required</div>
                                        }
                                    </div> 
                                </div> 
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block"> Login  </button>
                                    {loggingIn &&
                                        <img alt="loading" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                    }
                                </div> 
                                <p className="text-center">
                                    <Link className="btn" to="/">Forgot password?</Link>
                                </p>
                            </form>
                        </article>
                    </div>
                </div>     
        );
    }
}

function mapStateToProps(state){

    const {loggingIn} = state.authentication;
    return {
        loggingIn
    }
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export {connectedLoginPage as LoginPage};