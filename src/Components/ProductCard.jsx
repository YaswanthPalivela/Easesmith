import React from "react";
import Rating from "../assets/Rating.jpg";

const ProductCard = ({ image, image2 }) => {
  return (
    <div className="w-[265px] h-[320px] mt-3 items-center">
      <div className="flex flex-col justify-center items-center gap-3 mt-5">
        <img src={image} className=" w-[255px] h-[246px]" />
        <button className="w-full bg-green-700 p-3 text-white font-semibold  ">
          View Product
        </button>
      </div>
      <div className="mb-3">
        <h2 className="text-xl font-semibold">Monsterra</h2>
        <p>Indoor Plant, Low maintenance</p>
        <div className="flex items-center gap-2 mb-3 ">
          <img src={Rating} />
          <h5>4.9</h5>
        </div>
        <h3 className="text-xl font-semibold">$ 15</h3>
      </div>
      <div className="mb-5 flex justify-between gap-4">
        <button className="bg-green-700 text-center">
          <span> + </span>Add to cart <span> - </span>
        </button>
        <button className="border-2 border-green-300 text-center">
          {" "}
          Buy on Rent
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
