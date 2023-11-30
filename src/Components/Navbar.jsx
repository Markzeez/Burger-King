import React,{useState} from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { IoMdHelpCircle } from "react-icons/io";
import { FaUserGroup } from "react-icons/fa6";
import { MdMoveToInbox } from "react-icons/md";
import { FaBoxTissue } from "react-icons/fa";



const Navbar = () => {
  const [nav, SetNav] = useState (false)



  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/*left side */}
      <div onClick={()=> SetNav(!nav)} className="flex items-center">
        <div className="cursor-pointer">
        <CiMenuBurger size={30} />  
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] ">
          <p className="bg-black text-white rounded-full p-2" >Delivery</p> 
          <p className="p-2">Pick up</p>
        </div>
      </div>

      {/**Search Input */}

        <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <CiSearch  size={20} /> 
            <input className="bg-transparent p-2 focus:outline-none" type="text" placeholder="Search Foods" />
        </div>
        {/**Cart button */}
        <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
        <IoCartOutline size={20} className="mr-2"/> 
        </button>

        {/**Mobile Menu */}
        {/*Overlay */}
        {nav ?  <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0">
        </div> : ""}
       
        {/**side drawer menu */}

        <div className={nav ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300" : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300" }>
        <MdClose onClick={()=> SetNav(!nav)} size={30} className="absolute right-4 top-4 cursor-pointer" />
        <h2 className="text-2xl p-4">Best <span className="font-bold">Eats</span></h2>
       <nav>
        <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex "> <CiDeliveryTruck size={25} className="mr-4" />Orders</li>
            <li className="text-xl py-4 flex "> <MdFavorite size={25} className="mr-4"/>Favorites</li>
            <li className="text-xl py-4 flex "> <FaWallet size={25} className="mr-4" />Wallet</li>
            <li className="text-xl py-4 flex "> <IoMdHelpCircle size={25} className="mr-4"/>Help</li>
            <li className="text-xl py-4 flex "> <FaBoxTissue size={25} className="mr-4"/>Promotion</li>
            <li className="text-xl py-4 flex "> <MdMoveToInbox size={25} className="mr-4"/>Best Ones</li>
            <li className="text-xl py-4 flex "> <FaUserGroup size={25} className="mr-4"/>Invite Friends</li>

        </ul>
       </nav>
       </div>

    </div>
  );
};

export default Navbar;
 