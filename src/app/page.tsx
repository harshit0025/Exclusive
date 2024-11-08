import Link from "next/link";
// import { useEffect, useState } from "react";
import SaleWithTimer from "@/components/SaleWithTimer";
import CategoryCard from "@/components/CategoryCard";
import Button from "@/components/Button";

import { IoPhonePortraitOutline } from "react-icons/io5";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { FaHeadphones } from "react-icons/fa";
import { SiYoutubegaming } from "react-icons/si";



// import { GetStaticProps } from "next";
// import { fetchProducts, Product } from "../lib/api";
import ProductCard from "../components/ProductCard";


// import Banner from '../../public/Images/Banner.jpg'
import Headings from "@/components/Headings";



// interface HomeProps {
//   products: Product[];
// }



const Home = async () => {

  // try {
  //   const res = await fetch('https://fakestoreapi.com/products');
  //   if (!res.ok) {
  //     throw new Error('Failed to fetch products');
  //   }
  //   const data = await res.json();
  //   return {
  //     props: { products: data }, // Pass the fetched data as props to the page
  //   };
  // } catch (error) {
  //   console.error('Error fetching products:', error);
  //   return {
  //     props: { products: [] }, // In case of an error, return an empty array
  //   };
  // }

  async function getProducts (limit: number) {
    const response = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
    const data = await response.json();
    return data;
  }

  const products1 = await getProducts(4);
  const products2 = await getProducts(4);
  const products3 = await getProducts(8);

  return (
    <>
      <section className="flex justify-start items-start">
        <div className="flex items-center w-[180px] h-[344px]  mx-20 my-10">
          <ul className="flex items-start text-base flex-col space-y-4 text-lg font-medium">
            <li>
              <Link href="/link1" className="text-gray-600 hover:text-gray-900">
                Women's Fashion
              </Link>
            </li>
            <li>
              <Link href="/link2" className="text-gray-600 hover:text-gray-900">
                Men's Fashion
              </Link>
            </li>
            <li>
              <Link href="/link3" className="text-gray-600 hover:text-gray-900">
                Electronics
              </Link>
            </li>
            <li>
              <Link href="/link4" className="text-gray-600 hover:text-gray-900">
                Home & Lifestyle
              </Link>
            </li>
            <li>
              <Link href="/link5" className="text-gray-600 hover:text-gray-900">
                Medicine
              </Link>
            </li>
            <li>
              <Link href="/link6" className="text-gray-600 hover:text-gray-900">
                SPorts & Outdoor
              </Link>
            </li>
            <li>
              <Link href="/link7" className="text-gray-600 hover:text-gray-900">
                Baby's & Toys
              </Link>
            </li>
            <li>
              <Link href="/link8" className="text-gray-600 hover:text-gray-900">
                Groceries & Pets
              </Link>
            </li>
            <li>
              <Link href="/link9" className="text-gray-600 hover:text-gray-900">
                Health & Beauty
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-[1px] h-[400px] bg-gray-300 mx-4" />
        <div className="flex items-center py-10 w-[892px] h-[344px] bg-gray-200 mx-auto my-10 rounded-lg shadow-md">
          {/* <div className="flex items-center justify-center h-full text-gray-600">
            Carousel Banner
          </div> */}
        </div>
      </section>
      <SaleWithTimer />
      

      <section className="flex-auto mx-20 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 px-4 py-8">
          {products1.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      

        <section>
          {/* View all products section */ }
        </section>

        <section className="mx-20 my-16">
          <Headings heading1="Categories" heading2="Browse By Category"/>
          <div className="flex justify-between my-10">
            <CategoryCard text="Phones" icon={<IoPhonePortraitOutline className="size-12" />} />
            <CategoryCard text="Computers" icon={<HiOutlineDesktopComputer className="size-12" />} />
            <CategoryCard text="SmartWatch" icon={<BsSmartwatch className="size-12" />} />
            <CategoryCard text="Camera" icon={<IoCameraOutline className="size-12" />} />
            <CategoryCard text="Headphones" icon={<FaHeadphones className="size-12" />} />
            <CategoryCard text="Gaming" icon={<SiYoutubegaming className="size-12" />} />
          </div>
          
        </section>
        <div className="h-[1px] w-cover bg-gray-300 my-16 mx-20"/>

        <section className="flex justify-between mx-20 w-cover">
          <Headings heading1="This Month" heading2="Best Selling Products" />
          <Button text="View All" />
        </section>

        <section className="flex-auto mx-20 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 px-4 py-8">
          {products2.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
        

        <section>
          {/* API CALL for products */}
        </section>

        <section className="flex mx-20 my-16 justify-center w-cover">
        {/* <Banner /> */}
        <img src='/Images/Banner.jpg'/>
      </section>

      <section className="mx-20">
        <Headings heading1="Our Products" heading2="Explore Our Products" />
        {/* API CALL   */}
      </section>

      <section className="flex-auto mx-20 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 py-8">
          {products3.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <div className="flex items-center justify-center my-10">
        <Button text="View All Products" />
      </div>

        <section className="mx-20 my-16">
          <Headings heading1="Featured" heading2="New Arrival" />
        </section>
        

    </>
  );
};

export default Home;
