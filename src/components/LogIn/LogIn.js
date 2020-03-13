import React from 'react';
import './LogIn.scss';
import { Field, reduxForm } from 'redux-form';
import RenderField from '../common/RenderField/RenderField';
import { validate } from './validation';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faSignInAlt);

let LogIn = () => {
  return(
    <div className="LogIn">
      <div className='card-title'>Log In</div>
      <form>
        <div className="form-group">
          <Field
            name="email"
            component={RenderField}
            type="email"
            placeholder="Email"
            label="Email"
            className="form-control field"
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
  validate
}) (LogIn);

export default LogIn;