import React from 'react';
import {
    Link
} from "react-router-dom";

export default function Navbar() {
    return (
        <div className=" w-full z-10 md:sticky  bg-white top-0 border-b border-grey-light p-2">
            <div className="w-full flex flex-wrap items-center lg:justify-between mt-0 py-4 justify-center">
                <div className=" mx-0 px-0 lg:pl-4 flex items-center lg:mx-4 m-0 justify-around">
                    <span className=" no-underline hover:no-underline font-bold text-xl text-purple-800">
                        <Link to="/">Artificial Intelligence</Link>
                    </span>
                </div>
                <div className="w-full flex-grow lg:flex lg:flex-1 lg:content-center lg:justify-end lg:w-auto h-0 lg:h-auto overflow-hidden mt-2 lg:mt-0 z-20 transition-all" id="nav-content">
                    <ul className="flex items-center flex-col lg:flex-row">
                        <li className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center mx-1">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="mx-2 my-2 text-white hover:text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center "><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
