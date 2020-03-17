import React, { useState, useEffect } from 'react';
import { ProductList } from '../../components';
import axios from 'axios';

const HomeContainer = () => {
  // const [data, setData] = useState({ products: [] });
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(
  //       'http://localhost:3000/api/product/getAll',
  //     );
  //     setData(result.data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <ProductList />
  )
}

export default HomeContainer;