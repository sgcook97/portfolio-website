import React from "react";
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-slate-50 justify-between fixed h-14 w-full
            py-2 px-2 flex items-center z-10 shadow-md">

            <h1 className="text-slate-700 text-2xl uppercase 
                font-extralight px-5 hover:cursor-default">
                Sam Cook
            </h1>

            <nav className="hidden sm:flex">
                <ul className="h-10 flex md:flex md:flex-grow 
                    flex-row space-x-1 justify-end items-center">
                    <li className="py-2 px-2 text-center hover:bg-slate-400
                        rounded-3xl hover:text-white text-slate-700 
                        transition duration-200 hover:ease-in">
                        <Link href="#home">Home</Link>
                    </li>
                    <li className="py-2 px-2 text-center hover:bg-slate-400
                        rounded-3xl hover:text-white text-slate-700  
                        transition duration-200 hover:ease-in">
                        <Link href="#about">About</Link>
                    </li>
                    <li className="py-2 px-2 text-center hover:bg-slate-400
                        rounded-3xl hover:text-white text-slate-700  
                        transition duration-200 hover:ease-in">
                        <Link href="#projects">Projects</Link>
                    </li>
                    <li className="py-2 px-2 text-center hover:bg-slate-400 
                        rounded-3xl hover:text-white text-slate-800  
                        transition duration-200 hover:ease-in">
                        <Link href="#contact">Contact</Link>
                    </li>
                </ul>
            </nav>
                            
        </header> 
    );
}