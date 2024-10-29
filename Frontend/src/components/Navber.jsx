import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiBars3CenterLeft, HiOutlineShoppingCart } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { HiUser } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import avatarIcon from "../assets/avatar.png";

// dropdown
const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Orders", href: "/order" },
  { name: "Cart page", href: "/cart" },
  { name: "Check Out", href: "/check out" },
];

// quest :
// const Navber = () => {
//   const currentUser = true;
//   console.log("currentUser:  ", currentUser);

//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   console.log("isDropdownOpen  :", isDropdownOpen);

//   return (
//     <header className="px-4 py-6">
//       <nav className="flex justify-between items-center ">
//         {/* left side  */}
//         <div className="flex">
//           <HiBars3CenterLeft className="size-6" />
//           {/* search  */}
//           {/* 640px w the search button hidden */}

//           <div className="flex relative space-x-2 sm:w-72 w-40">
//             {/* after using the absolute, the search button overlap with input box */}
//             {/* left 3 moves the search icon 13 px left  */}
//             {/* inset-y-2 make the icon down  */}
//             <IoSearch className=" absolute inline-block left-3 inset-y-2 " />
//             {/* md:px-8 ( if small then 768px )make the input box little small on right and left side */}
//             <input
//               type="text"
//               placeholder="Search here"
//               className="bg-[#EAEAEA] w-full py-1 px-6 md:px-8 rounded-md focus:outline-none"
//             />
//           </div>
//         </div>

//         {/* right side  */}
//         <div className="flex">
//           <>
//             {currentUser ? (
//               <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
//                 <img src={avatarIcon} alt="" />
//               </button>
//             ) : (
//               <HiUser className="size-6" />
//             )}
//             {isDropdownOpen ? (
//               <ul>
//                 {navigation.map((x) => (
//                   <li key={x.name}>
//                     <Link to={x.href}>{x.name}</Link>
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               " "
//             )}
//           </>

//           <FaRegHeart className="size-6" />
//           <div>
//             <button>
//               <HiOutlineShoppingCart className="size-6" />
//             </button>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navber;

// code from the tutorial:
const Navber = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  console.log("Dropdown: ", isDropdownOpen);
  const currantUser = true;
  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        {/* left side */}
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <HiBars3CenterLeft className="size-6" />
          </Link>

          {/* search input  */}
          <div className="relative sm:w-72 w-40 space-x-2 ">
            <IoSearch className="absolute inline-block left-3 inset-y-2" />
            <input
              type="text"
              placeholder="Search here"
              className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md  focus:outline-none"
            />
          </div>
        </div>
        {/* right side  */}
        <div className="relative flex items-center md:space-x-3 space-x-2">
          <div>
            {currantUser ? (
              <>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <img
                    src={avatarIcon}
                    alt=""
                    className={`size-7 rounded-full ${
                      currantUser ? "ring-2 ring-blue-500" : ""
                    }`}
                  />
                </button>
                {/* show dropdown */}
                {isDropdownOpen && (
                  <div>
                    <ul>
                      {navigation.map((item) => (
                        <li key={item.name}>
                          <Link to={item.href}>{item.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login">
                <HiUser className="size-6" />
              </Link>
            )}
          </div>

          <button className="hidden sm:block">
            <FaRegHeart className="size-6" />
          </button>

          <Link
            to="/cart"
            className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm"
          >
            <HiOutlineShoppingCart className="" />
            <span className="text-sm  font-semibold sm:ml-1">0</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navber;
