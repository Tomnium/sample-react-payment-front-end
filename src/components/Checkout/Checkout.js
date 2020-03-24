import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import StripeCheckout from 'react-stripe-checkout';
import { STRIPE_PUBLISHABLE, CURRENCY } from '../../helpers/stripeConfig';
import { pay } from '../../redux/actions';

const Checkout = props => {
  const dispatch = useDispatch();
  const idList = useSelector(state => state.idList);

  const fromUahToCop = amount => amount * 100;

  return (
    <StripeCheckout 
      name={props.name}
      description={props.description}
      amount={fromUahToCop(props.amount)}
      currency={CURRENCY}
      stripeKey={STRIPE_PUBLISHABLE}
      token={(token) => dispatch(pay(idList, props.amount, props.description, token)).then(props.history.push('/'))}
    />
  )
}

export default withRouter(Checkout);