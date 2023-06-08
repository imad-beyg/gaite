"use client"

import {useState} from 'react';
import Link from 'next/link';
import {Logo} from "@/app/components/logo";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-5 -dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link href="/" className="flex items-center">
                        <Logo />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link href="/demo"
                           className="hidden sm:block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get
                            started</Link>
                        <button className="block lg:hidden group space-y-1 hover:cursor-pointer"
                                aria-controls="mobile-menu-2" aria-expanded="false"
                                onClick={()=> setIsMenuOpen(!isMenuOpen)}

                        >
                            <span className="block w-5 h-0.5 bg-gray-600 group-hover:w-7 transition-all"></span>
                            <span className="block w-7 h-0.5 bg-gray-600"></span>
                            <span className="block w-5 h-0.5 bg-gray-600 group-hover:w-7 transition-all"></span>
                        </button>
                    </div>
                    <div className={`${isMenuOpen && 'hidden'} justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}>
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <Link href="/"
                                   className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Home</Link>
                            </li>
                            <li>
                                <Link href="/marketplace"
                                   className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Marketplace</Link>
                            </li>
                            <li>
                                <a href="#"
                                   className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Search</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}