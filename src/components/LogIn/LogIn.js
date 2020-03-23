import React from 'react';
import './LogIn.scss';
import { Field, reduxForm } from 'redux-form';
import RenderField from '../common/RenderField/RenderField';
import { required, email, password } from './validation';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faSignInAlt);

let LogIn = props => {
  return(
    <div className="LogIn">
      <div className='card-title'>Log In</div>
      <form onSubmit={props.handleSubmit}>
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
            Log In <FontAwesomeIcon icon='sign-in-alt'/>
          </button>
        </div>
      </form>
    </div>
  )
}

LogIn = reduxForm ({
  form: 'login',
  enableReinitialize: true
}) (LogIn);

export default LogIn;