"use client";

import React, { useState, useEffect, useRef } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { CgMenu } from "react-icons/cg";

export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        let handler = (e: MouseEvent) => {
          if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
              setIsOpen(false)
          }
        }
        document.addEventListener('mousedown', handler);
      
        return () => {
          document.removeEventListener('mousedown', handler);
        }
    });

    return (
        <div ref={menuRef}>
            <CiMenuBurger 
                size={25}
                className='text-slate-800 hover:text-slate-400 
                    transition duration-100 hover:ease-in' 
                onClick={toggleMenu}
            />
            { isOpen && (
                <div className="absolute right-0 mt-2 mr-2 w-44 rounded-md border-solid 
                    border-slate-600 border-[0.5px] bg-slate-50 flex">
                    <ul className='w-full'>
                        <li>
                            <a
                                href="#home" 
                                onClick={closeMenu}
                                className='hover:text-slate-400 text-slate-800  
                                transition duration-200 hover:ease-in pl-1'
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about" 
                                onClick={closeMenu}
                                className='hover:text-slate-400 text-slate-800  
                                transition duration-200 hover:ease-in pl-1'
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects" 
                                onClick={closeMenu}
                                className='hover:text-slate-400 text-slate-800  
                                transition duration-200 hover:ease-in pl-1'
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact" 
                                onClick={closeMenu}
                                className='hover:text-slate-400 text-slate-800  
                                transition duration-200 hover:ease-in pl-1'
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}
