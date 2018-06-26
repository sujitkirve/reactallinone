import React, { Component } from 'react';

import { connect } from 'react-redux';


class EvalPage extends Component {
    render() {
        const { user } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi {user.firstName}!</h1>
                <p>Start Evaluation</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { authentication } = state;
    const { user } = authentication;
    return {
        user
    };
}

const connectedEvalPage = connect(mapStateToProps)(EvalPage);
export { connectedEvalPage as EvalPage };