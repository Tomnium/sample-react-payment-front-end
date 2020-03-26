import React from 'react';
import LogIn from '../../components/LogIn/LogIn';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/actions';

const LogInContainer = props => {
  const dispatch = useDispatch();

  const submit = form => {
    dispatch(logIn(form.email, form.password));
    props.history.push('/');
  }
  
  return (
    <LogIn onSubmit={submit} />
  )
}

export default LogInContainer;