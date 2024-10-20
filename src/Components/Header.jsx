import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <section>
      <div className="bg-green-800 font-semibold flex justify-around p-2">
        <div>
          <p className="text-white">Free shipping on order above 999/-</p>
        </div>
        <div>
          <p className="text-white flex text-right">
            Call us on: +918498060XXX
          </p>
        </div>
      </div>
      <header className="h-24 p-3 font-semibold">
        <nav className="flex justify-around items-center">
          <div className="flex justify-center items-center gap-5">
            <img src={logo} alt="Chaperone Company Image" className="h-16" />
            <h1 className="text-2xl">Chaperone</h1>
          </div>
          <div className="flex text-lg">
            {[
              ,
              { Id: 1, Link: "Home" },
              { Id: 2, Link: "Plants & Pots" },
              { Id: 3, Link: "Tools" },
              { Id: 4, Link: "Our Services" },
              { Id: 5, Link: "Blog" },
              { Id: 6, Link: "Our Story" },
              { Id: 7, Link: "FAQs" },
            ].map((link) => (
              <ul>
                <li
                  key={link.Id}
                  className="m-3 cursor-pointer hover:text-orange-400 duration-300"
                >
                  {link.Link}
                </li>
              </ul>
            ))}
          </div>
          <div className="flex justify-around gap-3 text-lg">
            <div>
              <p>Profile</p>
            </div>
            <div>
              <p>Cart</p>
            </div>
          </div>
        </nav>
      </header>

      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search Plant"
          className=" border-b-2 border-slate-600 text-center rounded-md w-[370px]"
        />
      </div>
    </section>
  );
};

export default Header;
