import React from 'react';
import { useDispatch } from 'react-redux';
import { SignUp } from '../../components';
import { signUp } from '../../redux/actions';

const SignUpContainer = props => {
  const dispatch = useDispatch();
  const submit = form => {
    dispatch(signUp(form.username, form.email, form.password));
    // console.log(form.username, form.email, form.password)
  }

  return (
    <SignUp onSubmit={submit} />
  )
}

export default SignUpContainer;