import React, { useEffect } from 'react';
import { ProductList } from '../../components';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions';

const HomeContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts())
  }, []);

  return (
    <ProductList />
  )
}

export default HomeContainer;