import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
        const companyname = 'AMZ';
        const categoryname = 'Laptop'
      const response = await axios.get(`http://20.244.56.144/test/companies/${companyname}/categories/${categoryname}/products?top=10&minPrice=1&maxPrice=10000`, {
        headers: {
            Authorization: 'Bearer ' +'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIxMDM0Nzc2LCJpYXQiOjE3MjEwMzQ0NzYsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjUwNDc1ZjUwLTc0YmMtNDY5NC1hODdkLTI0MDAzM2Q4N2Y4MiIsInN1YiI6ImFrc2hheUBhYmMuZWR1In0sImNvbXBhbnlOYW1lIjoiZ29NYXJ0IiwiY2xpZW50SUQiOiI1MDQ3NWY1MC03NGJjLTQ2OTQtYTg3ZC0yNDAwMzNkODdmODIiLCJjbGllbnRTZWNyZXQiOiJLZnVyaGx4TkV4T2tQRUNKIiwib3duZXJOYW1lIjoiQWtzaGF5Iiwib3duZXJFbWFpbCI6ImFrc2hheUBhYmMuZWR1Iiwicm9sbE5vIjoiMSJ9.XzKahBionZ7kOVXvhXlMOHNlthLWMQNwa-r2jQzeWTU'
        }
      });
      setProducts(response.data);
    };
    fetchProducts();
  }, []);


  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
