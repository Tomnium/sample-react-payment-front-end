import React from 'react';
import './SignUp.scss';
import { reduxForm, Field } from "redux-form";
import RenderField from "../common/RenderField/RenderField";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faUserCircle);

let SignUp = () => {
  return(
    <div className="SignUp">
      <div className='card-title'>Registration</div>
      <form>
        <div className="form-group">
          <Field
            label="Username"
            name='username'
            component={RenderField}
            type="text"
            className="form-control field"
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
            Sign Up <FontAwesomeIcon icon='user-circle'/>
          </button>
        </div>
      </form>
    </div>
  )
}

SignUp = reduxForm ({
  form: 'registration',
}) (SignUp);

export default SignUp;