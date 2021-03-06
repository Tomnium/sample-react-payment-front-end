import React from 'react';
import './SignUp.scss';
import { reduxForm, Field } from "redux-form";
import RenderField from "../common/RenderField/RenderField";
import { required, password, username, email } from './validation';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faUserCircle);

let SignUp = props => {
  return(
    <div className="SignUp">
      <div className='card-title'>Registration</div>
      <form onSubmit={props.handleSubmit}>
        <div className="form-group">
          <Field
            label="Username"
            name='username'
            component={RenderField}
            type="text"
            className="form-control field"
            validate={[required, username]}
          />
        </div>
        <div className="form-group">
          <Field
            name="email"
            component={RenderField}
            type="email"
            placeholder="Email"
            label="Email"
            className="form-control field"
            validate={[required, email]}
          />
        </div>
        <div className="form-group">
          <Field
            name="password"
            component={RenderField}
            type="password"
            placeholder="Password"
            label="Password"
            className="form-control field"
            validate={[required, password]}
          />
        </div>
        <div className='d-flex flex-row-reverse'>
          <button
            className="btn btn-success"
            type='submit'
          >
            Sign Up <FontAwesomeIcon icon='user-circle'/>
          </button>
        </div>
      </form>
    </div>
  )
}

SignUp = reduxForm ({
  form: 'registration',
  enableReinitialize: true
}) (SignUp);

export default SignUp;