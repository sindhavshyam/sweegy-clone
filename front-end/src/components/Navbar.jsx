import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { MdHelpOutline } from "react-icons/md";
import { PiSignIn } from "react-icons/pi";
import { IoCartOutline } from "react-icons/io5";
import { TbRosetteDiscount } from "react-icons/tb";
import { TiThMenu } from "react-icons/ti";
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const nav = [
    {
      logo: <IoIosSearch />,
      name: "Search",
    },
    {
      logo: <TbRosetteDiscount />,
      name: "Offers",
      sup: "new",
    },
    {
      logo: <MdHelpOutline />,
      name: "Help",
    },
    {
      logo: <PiSignIn />,
      name: "Sign In",
    },
    {
      logo: <IoCartOutline />,
      name: "Cart",
    },
  ];
  return (
    <>
      <div className="hidden lg:flex max-w-[1200px]  items-center justify-between m-auto overflow-x-auto">
        <div className="w-full p-6 m-auto shadow flex items-center justify-between outline-none">
          <div className="flex gap-10">
            <div>
              <img
                className="w-[30px] h-[30px] object-fit"
                src="/Images/Logo.png"
                alt="Swiggy Logo"
              />
            </div>
            <div className=" text-lg text-zinc-500 border-b-2 border-zinc-300">
              Ahmedabad, India -380026
            </div>
          </div>
          <div className="flex items-center justify-center gap-10">
            {nav.map((elem, idx) => {
              return (
                <div
                  key={idx}
                  className="flex items-center justify-center gap-2"
                >
                  <h1 className="text-2xl">{elem.logo}</h1>
                  <li className="list-none text-lg">{elem.name}</li>
                  <sup className="text-orange-500">{elem.sup}</sup>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* this is responsive nav for mobile version  */}
      <div className="flex lg:hidden h-[60px] bg-white shadow-2xl items-center justify-between px-4">
        <div className="">
          <img
            className="h-[35px] w-[35px]"
            src="/Images/Logo.png"
            alt="sweegy logo"
          />
        </div>
        <h1 className="text-zinc-400">Delivery In 30 Minuts</h1>
        <div
          className="hover:cursor-pointer"
          onClick={() => setShowMenu(!showMenu)}
        >
          <TiThMenu size={30} />
        </div>
      </div>
      <div className="w-full text-2xl z-50">
        <div
          className={`w-full h-fit px-5 bg-white mt-1 py-8 ${
            showMenu
              ? "translate-x-[0%] "
              : "translate-x-[100%] hidden duration-700"
          } absolute duration-2000 z-50`}
        >
          {nav.map((elem, idx) => {
            return (
              <div
                key={idx}
                className="lg:hidden hover:cursor-pointer flex items-center gap-4 mx-4 my-4 hover:text-red-600"
              >
                <h1>{elem.logo}</h1>
                <li className="list-none ">
                  {elem.name} <sup>{elem.sup}</sup>
                </li>
              </div>
            );
          })}
        </div>
        
      </div>
    </>
  );
}

export default Navbar;
