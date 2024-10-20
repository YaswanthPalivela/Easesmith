import React from "react";
import plant1 from "../assets/plant1.png";
import plant2 from "../assets/plant2.png";
import plant3 from "../assets/plant3.png";
import plant5 from "../assets/plant5.png";
import plant6 from "../assets/plant6.png";
import plant7 from "../assets/plant7.png";

const Main = () => {
  return (
    <section className="ml-12 mt-6">
      <div>
        <button className="border-2 p-2 text-center m-3 bg-green-700 font-semibold text-white  w-28">
          Plants
        </button>
        <button className="border-2 w-28 p-2 m-3 bg-transparent border-slate-400 text-slate-400 font-semibold ">
          Pots
        </button>
      </div>
      <div>
        <p className=" text-slate-400 font-medium">
          Aliqua exercitation reprehenderit anim dolore exercitation elit ea
          consequat cupidatat sit Lorem irure. Id duis laborum ullamco Lorem ea
          sint nisi id excepteur amet ut occaecat. Adipisicing duis sint fugiat
          dolore veniam magna. Quis ex sint adipisicing eu deserunt do eiusmod
          voluptate occaecat deserunt cupidatat non aliqua deserunt.
        </p>
      </div>

      <div className="mt-5 font-semibold">
        <h1 className="text-2xl font-bold">Nursery</h1>
        <div className="flex m-2 overflow-x-auto">
          {[
            {
              Image: plant1,
              Description:
                "Dolor aliquip eiusmod id elit id id proident consectetur id.",
            },
            {
              Image: plant2,
              Description:
                "Dolor aliquip eiusmod id elit id id proident consectetur id.",
            },
            {
              Image: plant3,
              Description:
                "Dolor aliquip eiusmod id elit id id proident consectetur id.",
            },
            {
              Image: plant5,
              Description:
                "Dolor aliquip eiusmod id elit id id proident consectetur id.",
            },
            {
              Image: plant6,
              Description:
                "Dolor aliquip eiusmod id elit id id proident consectetur id.",
            },
            {
              Image: plant7,
              Description:
                "Dolor aliquip eiusmod id elit id id proident consectetur id.",
            },
          ].map((item) => (
            <div className="flex flex-col items-center m-2 p-2 cursor-pointer">
              <img src={item.Image} className=" h-32 m-3" />
              <h2 className="text-xl font-semibold">{item.Name}</h2>
              <p className="text-center">{item.Description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Main;
