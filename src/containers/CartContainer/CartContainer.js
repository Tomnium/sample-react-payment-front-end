import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartList from '../../components/CartList/CartList';
import { getCartProducts } from '../../redux/actions';

const CartContainer = () => {
  const productsId = useSelector(state => state.cart.idList);
  const cartProducts = useSelector(state => state.cart.cartProducts);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartProducts(productsId))
  }, []);
  return (
    <Fragment>
      {
        cartProducts && cartProducts.length !== 0 ?
        <CartList products={cartProducts} total={totalPrice}/> :
        <h2>Your shopping cart is empty</h2>
      }
    </Fragment>
  )
}

export default CartContainer;