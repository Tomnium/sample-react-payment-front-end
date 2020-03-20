import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkCartStorage } from '../../redux/actions';
import { withRouter } from 'react-router';

const Wrapper = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkCartStorage());
  }, [dispatch]);
  return (
    <Fragment>
      { props.children }
    </Fragment>
  )
}

export default withRouter(Wrapper);