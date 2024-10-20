import React from "react";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <section className="ml-12 mt-16 flex">
      <div className="h-[715px] w-[304px] bg-green-100">
        {[
          { id: 1, name: "Type of Plants" },
          { id: 2, name: "Price" },
          { id: 3, name: "Nursery" },
          { id: 4, name: "Plant size" },
          { id: 5, name: "Water Schedule" },
          { id: 6, name: "Color" },
          { id: 7, name: "Seasonal" },
          { id: 1, name: "Type of Plants" },
          { id: 8, name: "Light Efficient" },
        ].map((filter) => (
          <div className="flex justify-between  p-5 text-lg font-semibold">
            <div>{filter.name}</div>
            <div> + </div>
          </div>
        ))}
      </div>

      <div className="m-3">
        <div className="flex gap-3 ">
          <h3>300 Products</h3>
          <select className="bg-green-700 text-white p-2 font-semibold ">
            <option>Sort By</option>
          </select>
        </div>

        <div className="flex">
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                id: 1,
                image: product1,
              },
              {
                id: 2,
                image: product2,
              },
              {
                id: 3,
                image: product3,
              },
              {
                id: 4,
                image: product1,
              },
              {
                id: 5,
                image: product2,
              },
              {
                id: 6,
                image: product3,
              },
              {
                id: 7,
                image: product1,
              },
              {
                id: 8,
                image: product2,
              },
              {
                id: 9,
                image: product3,
              },
              {
                id: 10,
                image: product1,
              },
              {
                id: 11,
                image: product2,
              },
            ].map((product) => (
              <div key={product.id} className="m-3">
                <ProductCard image={product.image} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
