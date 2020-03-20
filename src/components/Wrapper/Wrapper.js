import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkCartStorage } from '../../redux/actions';

const Wrapper = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkCartStorage());
  }, []);
  return (
    <Fragment>
      { props.children }
    </Fragment>
  )
}

export default Wrapper;