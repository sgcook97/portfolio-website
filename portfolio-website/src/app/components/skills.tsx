"use client";

import React from 'react';
import { skills } from '@/lib/data';
import { delay, motion } from 'framer-motion';

const fadeInVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.03
        }
    }
};

export default function Skills() {
  return (
    <div>
        <h1 className='text-center mb-10 font-bold text-[34px]'>My Skills</h1>
        <ul className='flex flex-wrap gap-2 max-w-[40rem]'>
            {skills.map((skill, index) => (
                <motion.li 
                    key={index}
                    className='bg-slate-100 text-slate-700 py-2 px-3 
                    font-semibold rounded-lg shadow-lg 
                    hover:cursor-default'
                    variants={fadeInVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true,
                    }}
                >
                    {skill}
                </motion.li>
            ))}
        </ul>
    </div>
    
  )
}
