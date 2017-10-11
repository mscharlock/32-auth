import React from 'react';
import AuthForm from '../auth-form';
import {connect} from 'react-redux';
import * as utils from '../../lib/utils';
import {signupRequest, loginRequest} from '../../action/auth-actions';
import Dashboard from '../dashboard';

class LandingContainer extends React.Component {
  render() {
    let {params} = this.props.match;
    console.log(this.props);
    let handleComplete = params.auth === 'login' ?
    this.props.login :
    this.props.signup;

    return (
      <div>
        <h2>hello world from landing woooooo!</h2>
        // <AuthForm/>
          // auth={params.auth}
          // onComplete={handleComplete}/>

        <div>
        // {utils.renderIf(this.props.auth,
          <Dashboard />
        )}
        </div>
      </div>
    );
  }
}

let mapStateToProps = () => ({});
let mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signupRequest(user)),
  login: user => dispatch(loginRequest(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);
