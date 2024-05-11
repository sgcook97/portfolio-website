import React from "react";
import Link from "next/link";
import Dropdown from "./dropdown";

export default function Header() {
    return (
        <header className="bg-slate-50 justify-between fixed h-14 w-full
            py-2 px-2 flex items-center z-10 shadow-md text-slate-900">

            <h1 className="text-2xl uppercase 
                font-extralight px-5 hover:cursor-default">
                <Link href='/'>Sam Cook</Link>
            </h1>

            <nav className="hidden md:flex">
                <ul className="h-10 flex md:flex md:flex-grow 
                    flex-row space-x-1 justify-end items-center">
                    <li className="py-2 px-2 text-center hover:bg-slate-400
                        rounded-3xl hover:text-white
                        transition duration-200 hover:ease-in">
                        <Link href="/#home">Home</Link>
                    </li>
                    <li className="py-2 px-2 text-center hover:bg-slate-400
                        rounded-3xl hover:text-white  
                        transition duration-200 hover:ease-in">
                        <Link href="/#about">About</Link>
                    </li>
                    <li className="py-2 px-2 text-center hover:bg-slate-400
                        rounded-3xl hover:text-white  
                        transition duration-200 hover:ease-in">
                        <Link href="/#projects">Projects</Link>
                    </li>
                    <li className="py-2 px-2 text-center hover:bg-slate-400
                        rounded-3xl hover:text-white  
                        transition duration-200 hover:ease-in">
                        <Link href="/#skills">Skills</Link>
                    </li>
                    <li className="py-2 px-2 text-center hover:bg-slate-400
                        rounded-3xl hover:text-white  
                        transition duration-200 hover:ease-in">
                        <Link href="/#experience">Experience</Link>
                    </li>
                    <li className="py-2 px-2 text-center hover:bg-slate-400 
                        rounded-3xl hover:text-white  
                        transition duration-200 hover:ease-in">
                        <Link href="/#contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <nav className="flex md:hidden">
                <Dropdown />
            </nav>
                            
        </header> 
    );
}