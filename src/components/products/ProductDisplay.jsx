import React, { useEffect, useRef, useState } from "react";
import { Query } from "appwrite";
import { databases } from "../../appwrite/service";
import Filter from "./Filter";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../hooks/productSlice";

const brands = [
  "Samsung",
  "Apple",
  "Rog",
  "Asus",
  "Oppo",
  "Oneplus",
  "Motorola",
  "Google",
  "Xiaomi",
  "Vivo",
  "Realme",
];

const DB_ID = import.meta.env.VITE_AW_PHONE_DB_ID;
const COLLECTION_ID = import.meta.env.VITE_AW_PHONE_COLLECTION_ID;

const ProductDisplay = () => {
  const dispatch = useDispatch();

  const filterData = useSelector((state) => {
    return state.filter;
  });

  const sortData = useSelector((state) => {
    return state.sort;
  });

  const products = useSelector((state) => {
    return state.products;
  });

  useEffect(() => {
    try {
      const res = databases.listDocuments(
        DB_ID,
        COLLECTION_ID,
        filterData.length === 0
          ? [
              Query.equal("brand", brands),
              sortData !== "" && sortData === "orderAsc"
                ? Query.orderAsc("price")
                : Query.orderDesc("price"),
            ]
          : [
              Query.equal("brand", filterData),
              sortData !== "" && sortData === "orderAsc"
                ? Query.orderAsc("price")
                : Query.orderDesc("price"),
            ]
      );
      res.then((data) => {
        dispatch(setProducts(data.documents));
        console.log(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [filterData, sortData]);

  console.log(products);

  return (
    <>
      <Filter />
      <div className="flex justify-center">
        <div className="lg:px-24 md:px-20 sm:px-6 lg:max-w-full md:max-w-3xl sm:max-w-xl">
          <span className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl my-2">
            All
          </span>
          <span className="text-4xl font-bold tracking-tight text-red-500 sm:text-6xl my-2">
            {" "}
            Deals
          </span>
          <div className="mt-8 grid grid-cols-2 gap-x-5 sm:gap-y-8 gap-y-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8 justify-evenly w-full">
            {products.map((product) => (
              <ProductCard
                key={product.$id}
                id={product.$id}
                imgUrl={product.imgUrl}
                imgalt={product.name}
                brandName={product.brand.toUpperCase()}
                productName={product.name}
                productPrice={product.price}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDisplay;
