import React, { useEffect } from 'react';
import { ProductList } from '../../components';
import { useDispatch } from 'react-redux';
import { productsRequest } from '../../redux/actions/index';

const HomeContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsRequest())
  }, [dispatch]);

  return (
    <ProductList />
  )
}

export default HomeContainer;