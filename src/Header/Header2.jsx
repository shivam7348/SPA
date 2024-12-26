import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { FcStumbleupon } from "react-icons/fc";

const Header = () => {

  const navigate =  useNavigate()
  
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <header className="px-5 py-2 shadow-xl	">
      <div className="flex items-center justify-between">
        <NavLink to="/" className="z-50">
          <img
            src="https://www.rstopcoder.com/images/logo.png"
            alt="Logo"
            className="h-11  ml-48 "
          />
        </NavLink>

        <button
          className="md:hidden z-50 p-2  ml-44 "
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className="hidden md:block">
          <ul className="flex items-center justify-end font-semibold text-black md:ml-48 cursor-pointer mr-52 	">
            <li className="relative group px-3 py-2 text-xl ">
              <NavLink to="/">Home</NavLink>
            </li>
            {/* About NavLink */}
            <li className="relative group px-3 py-2  z-50 ">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `transition duration-300 ${
                    isActive
                      ? "text-indigo-600 underline"
                      : "hover:text-indigo-500"
                  }`
                }
              >
                About
              </NavLink>

              <div className="absolute top-1 -left-96 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[900px] transform">
                <div className="relative top-7 p-6 bg-white rounded-xl shadow-xl w-full">
                  <div className="bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>
                  <div className="relative z-10">
                    <div className="grid grid-cols-4 gap-3">
                      <div>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI0s_hxu0VkOvjEmCzF5Dhn0W3pksSErsYMQ&s"
                          alt="About"
                        />
                      </div>
                      <div>
                        <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                          Services
                        </p>
                        <ul className="mt-3 text-[15px]">
                          <li>
                            <NavLink
                              to="/webdevlopemnt"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              <div className="flex space-x-1">
                                <span className="inline ">
                                  <FcStumbleupon size={28} />
                                </span>{" "}
                                <p>Web Development</p>
                              </div>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="#"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              <div className="flex space-x-1 ">
                                <span className="inline ">
                                  <img
                                    src="https://img.icons8.com/?size=100&id=67530&format=png&color=000000"
                                    alt=""
                                    className="h-7 w-7 "
                                  />
                                </span>{" "}
                                <p>Digital Marketing</p>
                              </div>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="#"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              <div className="flex space-x-1">
                                <span className="inline ">
                                  <img
                                    src="https://img.icons8.com/?size=100&id=sXa2ALwXqmUJ&format=png&color=000000"
                                    alt=""
                                    className="h-7 w-7 "
                                  />
                                </span>{" "}
                                <p>Software Developer</p>
                              </div>
                            </NavLink>
                            <NavLink
                              to="#"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              <div className="flex space-x-1">
                                <span className="inline ">
                                  <img
                                    src="https://img.icons8.com/?size=100&id=124194&format=png&color=000000"
                                    alt=""
                                    className="h-7 w-7"
                                  />
                                </span>{" "}
                                <p className="">Seo</p>
                              </div>
                            </NavLink>
                            <NavLink
                              to="#"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              <div className="flex space-x-1">
                                <span className="inline ">
                                  <img
                                    src="https://img.icons8.com/?size=100&id=124194&format=png&color=000000"
                                    alt=""
                                    className="h-7 w-7"
                                  />
                                </span>{" "}
                                <p className="">Health</p>
                              </div>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                          Others
                        </p>
                        <ul className="mt-3 text-[15px]">
                          <li>
                            <NavLink
                              to="#"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              <div className="flex space-x-1 ">
                                <span className="inline ">
                                  <img
                                    src="https://img.icons8.com/?size=100&id=6aAT39LSCsNR&format=png&color=000000"
                                    alt=""
                                    className="h-7 w-7 "
                                  />
                                </span>{" "}
                                <p>Health Care</p>
                              </div>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="#"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              <div className="flex space-x-1 ">
                                <span className="inline ">
                                  <img
                                    src="https://img.icons8.com/?size=100&id=wogrNmTvt9qn&format=png&color=000000"
                                    alt=""
                                    className="h-7 w-7 "
                                  />
                                </span>{" "}
                                <p>Education</p>
                              </div>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="#"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              <div className="flex space-x-1 ">
                                <span className="inline ">
                                  <img
                                    src="https://img.icons8.com/?size=100&id=Sff7VFAAS0lr&format=png&color=000000"
                                    alt=""
                                    className="h-7 w-7 "
                                  />
                                </span>{" "}
                                <p>Other Products</p>
                              </div>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                          Extensions
                        </p>
                        <ul className="mt-3 text-[15px]">
                          <li>
                            <NavLink
                              to="#"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              Plugins
                              <p className="text-gray-500 font-normal">
                                Tweak existing functionality
                              </p>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="#"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              Plugins
                              <p className="text-gray-500 font-normal">
                                Tweak existing functionality
                              </p>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center bg-green-400">
                  <h1 className="text-center">Book Free Demo</h1>
                </div>
              </div>
            </li>

            {/* Products NavLink */}
            <li className="relative group px-3 py-2">
              <NavLink to="/products" 
              className={({isActive}) => `trasition duration-500 ${
                isActive
                ? "text-indigo-800 underline"
                : "hover:text-indigo-500"
              }`}>
                <button>Products</button>
              </NavLink>
              <div className="absolute  top-1 -right-96 ht-   transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[1300px] transform">
                <div className="relative top-7 p-6 bg-gradient-to-tr from-[#6cbbb4] to-[#9089fc] rounded-xl shadow-xl w-full">
                  <div className="bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>
                  <div className="relative z-10">
                    <div className="grid grid-cols-4 gap-3">
                      <div>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJPZPI7CxFqrkJatzJy95_bzYMHK0Yb8ULvw&s"
                          alt="About"
                        />
                      </div>
                      <div>
                        <p className="uppercase tracking-wider text-gray-500 font-medium text-[20px] mr-32   ">
                          Health Care
                        </p>
                        <ul className="mt-3 text-[15px]">
                          <li>
                            <NavLink
                              to="/hospital"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600 justify-between"
                            >
                              <div className="flex ">
                                <span className="inline ">
                                  <img
                                    src="https://img.icons8.com/?size=100&id=ENrlMUJ4BgyP&format=png&color=000000"
                                    alt=""
                                    className="w-7 h-7"
                                  />
                                </span>
                                <p>Hospital Management System</p>
                              </div>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/pharmacy"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              <div className="flex ">
                                <span className="inline ">
                                  <img
                                    src="https://img.icons8.com/?size=100&id=XVAUxTAZ513j&format=png&color=000000"
                                    alt=""
                                    className="w-7 h-7"
                                  />
                                </span>{" "}
                                <p>Pharmacy Management System</p>
                              </div>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="Laboratory"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              <div className="flex ">
                                <span className="inline ">
                                  <img
                                    src="https://img.icons8.com/?size=100&id=67376&format=png&color=000000"
                                    alt=""
                                    className="w-7 h-7"
                                  />
                                </span>{" "}
                                <p> Laboratory Management System</p>
                              </div>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="bloodbank"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              <div className="flex ">
                                <span className="inline ">
                                  <img
                                    src="https://img.icons8.com/?size=100&id=fbfmUNq5qEyS&format=png&color=000000"
                                    alt=""
                                    className="w-7 h-7"
                                  />
                                </span>{" "}
                                <p> Blood Bank Management System</p>
                              </div>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p className="uppercase tracking-wider text-gray-500 font-medium text-[19px]">
                          Education
                        </p>
                        <ul className="mt-3 text-[15px]">
                          <li>
                            <NavLink
                              to="collegesystem"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              <div className="flex ">
                                <span className="inline ">
                                  <img
                                    src="https://img.icons8.com/?size=100&id=124187&format=png&color=000000"
                                    alt=""
                                    className="w-7 h-7 space-x-2"
                                  />
                                </span>{" "}
                                <p> College Management System</p>
                              </div>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="schoolsystem"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              <div className="flex ">
                                <span className="inline ">
                                  <img
                                    src="https://img.icons8.com/?size=100&id=Yu5Y72SHhS7-&format=png&color=000000"
                                    alt=""
                                    className="w-7 h-7 space-x-2"
                                  />
                                </span>{" "}
                                <p> School Management System</p>
                              </div>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/Librarysystem"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              <div className="flex ">
                                <span className="inline ">
                                  <img
                                    src="https://img.icons8.com/?size=100&id=6V0yFXlg4YDu&format=png&color=000000"
                                    alt=""
                                    className="w-7 h-7 space-x-2"
                                  />
                                </span>{" "}
                              <p> Library Management System</p>
                              </div>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/hostelsystem"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              <div className="flex ">
                                <span className="inline ">
                                  <img
                                    src="https://img.icons8.com/?size=100&id=117500&format=png&color=000000"
                                    alt=""
                                    className="w-7 h-7 space-x-2"
                                  />
                                </span>{" "}
                                <p> Hostel Management System</p>
                              </div>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="#"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              <div className="flex ">
                                <span className="inline ">
                                  <img
                                    src="https://img.icons8.com/?size=100&id=jnU5ze2ojiku&format=png&color=000000"
                                    alt=""
                                    className="w-7 h-7 space-x-2"
                                  />
                                </span>{" "}
                                <p> Learning Management System</p>
                              </div>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p className="uppercase tracking-wider text-gray-500 font-medium text-[19px]">
                          Web Based Solutions
                        </p>
                        <ul className="mt-3 text-[15px]">
                          <li>
                            <NavLink
                              to="#"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              <div className="flex ">
                                <span className="inline ">
                                  <img
                                    src="https://img.icons8.com/?size=100&id=jnU5ze2ojiku&format=png&color=000000"
                                    alt=""
                                    className="w-7 h-7 space-x-2"
                                  />
                                </span>{" "}
                                <p> E-Commerce Web Design</p>
                              </div>
                            </NavLink>
                          </li>

                          <li>
                            <NavLink
                              to="#"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              <div className="flex ">
                                <span className="inline ">
                                  <img
                                    src="https://img.icons8.com/?size=100&id=ToZ8IzST7w5T&format=png&color=000000"
                                    alt=""
                                    className="w-7 h-7 space-x-2"
                                  />
                                </span>{" "}
                                <p> Job Portal Web Design</p>
                              </div>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="#"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              <div className="flex ">
                                <span className="inline ">
                                  <img
                                    src="https://img.icons8.com/?size=100&id=MoWcmlsZb6j5&format=png&color=000000"
                                    alt=""
                                    className="w-7 h-7 space-x-2"
                                  />
                                </span>{" "}
                                <p> Jewellery Web Design</p>
                              </div>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="#"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              <div className="flex ">
                                <span className="inline ">
                                  <img
                                    src="https://img.icons8.com/?size=100&id=0mcyYaZoPqem&format=png&color=000000"
                                    alt=""
                                    className="w-7 h-7 space-x-2"
                                  />
                                </span>{" "}
                                <p> Toursim Web Design</p>
                              </div>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="#"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              <div className="flex ">
                                <span className="inline ">
                                  <img
                                    src="https://img.icons8.com/?size=100&id=v05jsvW3RprR&format=png&color=000000"
                                    alt=""
                                    className="w-7 h-7 space-x-2"
                                  />
                                </span>{" "}
                                <p> Corporate Web Design</p>
                              </div>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="#"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              <div className="flex ">
                                <span className="inline ">
                                  <img
                                    src="https://img.icons8.com/?size=100&id=M6Ps6biUL9KD&format=png&color=000000"
                                    alt=""
                                    className="w-7 h-7 space-x-2"
                                  />
                                </span>{" "}
                                <p> School Web Design</p>
                              </div>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="#"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              <div className="flex ">
                                <span className="inline ">
                                  <img
                                    src="https://img.icons8.com/?size=100&id=2WLcCor1cHKB&format=png&color=000000"
                                    alt=""
                                    className="w-7 h-7 space-x-2"
                                  />
                                </span>{" "}
                                <p> Real Estate Web Design</p>
                              </div>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="#"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              <div className="flex ">
                                <span className="inline ">
                                  <img
                                    src="https://img.icons8.com/?size=100&id=icAfWDXf0c4K&format=png&color=000000"
                                    alt=""
                                    className="w-7 h-7 space-x-2"
                                  />
                                </span>{" "}
                                <p> Construction Web Design</p>
                              </div>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="#"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              <div className="flex ">
                                <span className="inline ">
                                  <img
                                    src="https://img.icons8.com/?size=100&id=H6qyvoQLo8en&format=png&color=000000"
                                    alt=""
                                    className="w-7 h-7 space-x-2"
                                  />
                                </span>{" "}
                                <p> Fashion Web Design</p>
                              </div>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* Services NavLink */}
            <li className="relative group px-3 py-2">
              <NavLink to="/servicing"
              className={({isActive}) => `transition duration-300 ${
                isActive
                ? "text-indigo-800 underline"
                : "hover:text-indigo-600"
              }`}>
                <button>Services</button>
              </NavLink>
              <div className="absolute top-1 -right-72 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[800px] transform">
                <div className="relative top-7 p-6 bg-white rounded-xl shadow-xl w-full">
                  <div className=" bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>
                  <div className="relative z-10  ">
                    <div className="grid grid-cols-4 gap-10">
                      <div>
                        <img
                          src="https://png.pngtree.com/png-vector/20230416/ourmid/pngtree-our-service-label-vector-png-image_6709314.png"
                          alt=""
                        />
                      </div>

                      <div>
                        <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                          Services
                        </p>
                        <ul className="mt-3 text-[15px]">
                          <li>
                            <NavLink
                              to="#"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              Digital Marketing
                              <p className="text-gray-500 font-normal">
                                All-in-one editor
                              </p>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="#"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              Maintenence and Support
                              <p className="text-gray-500 font-normal">
                                Pre-build payments page
                              </p>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="#"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              Closed Captioning
                              <p className="text-gray-500 font-normal">
                                Use AI to generate captions
                              </p>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <div>
                          <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                            Others
                          </p>
                          <ul className="mt-3 text-[15px]">
                            <li>
                              <NavLink
                                to="#"
                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Course Editor
                                <p className="text-gray-500 font-normal">
                                  All-in-one editor
                                </p>
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="#"
                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Maintenence and Support
                                <p className="text-gray-500 font-normal">
                                  Pre-build payments page
                                </p>
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="#"
                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Closed Captioning
                                <p className="text-gray-500 font-normal">
                                  Use AI to generate captions
                                </p>
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div>
                        <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                          Extensions
                        </p>
                        <ul className="mt-3 text-[15px]">
                          <li>
                            <NavLink
                              to="#"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              Plugins
                              <p className="text-gray-500 font-normal">
                                Tweak existing functionality
                              </p>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="#"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              Batch uploads
                              <p className="text-gray-500 font-normal">
                                Get your time back
                              </p>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="#"
                              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                            >
                              Social sharing
                              <p className="text-gray-500 font-normal">
                                Generate content for socials
                              </p>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" text-center bg-green-400">
                  <h1 className="text-center"> Book Free Demo</h1>
                </div>
              </div>
            </li>

            {/* Pricing NavLink */}
            <li className="relative group px-3 py-2">
              <NavLink
                to="/pricing"
                className="hover:opacity-50 cursor-pointer"
              >
                Pricing
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`
          fixed inset-0 bg-white z-1000 transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:hidden
        `}
        >
          <div className="flex flex-col p-2 mt-11 ml-23 text-2xl">
            <NavLink to="/" className="py-2  text-2xl  ">
              Home
            </NavLink>
            <NavLink to="/about" className="py-2  text-2xl">
              About
            </NavLink>
            <NavLink to="/products" className="py-2  text-2xl">
              Products
            </NavLink>
            <NavLink to="/services" className="py-2  text-2xl">
              Services
            </NavLink>
            <NavLink to="/pricing" className="py-2  text-2xl">
              Pricing
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
