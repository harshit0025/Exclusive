// pages/products.tsx

import { GetServerSideProps } from 'next';

// Define the Product type for TypeScript
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

interface ProductsProps {
  products: Product[];
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  return (
    <div>
      <h1>Fake Store Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p><strong>${product.price}</strong></p>
            <img src={product.image} alt={product.title} style={{ width: '100px' }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

// Fetch data with getServerSideProps (SSR)
export const getServerSideProps: GetServerSideProps<ProductsProps> = async () => {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }
    const data: Product[] = await res.json();
    return {
      props: { products: data }, // Pass the fetched data as props
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return {
      props: { products: [] }, // Return an empty array in case of an error
    };
  }
}

export default Products;
