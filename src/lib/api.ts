// lib/api.ts

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

//To fetch few products products
export async function fetchProducts(limit: number): Promise<Product[]> {
  const res = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

//To fetch a single product by ID
export async function fetchProductById(id: number): Promise<Product> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }
  return res.json();
}
