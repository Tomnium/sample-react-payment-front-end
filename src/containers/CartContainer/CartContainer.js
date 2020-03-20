import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartList from '../../components/CartList/CartList';
import { getCartProducts } from '../../redux/actions';

const CartContainer = () => {
  const cartProducts = useSelector(state => state.cart.idList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartProducts(cartProducts))
  }, []);
  return (
    <CartList />
  )
}

export default CartContainer;