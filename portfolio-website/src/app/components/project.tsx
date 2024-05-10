"use client";

import React from 'react';
import { projects } from '@/lib/data';
import Image from 'next/image';

type ProjectType = (typeof projects)[number];

export default function Project({ title, description, tags, imgUrl } : ProjectType) {
    return (
        <div className='flex m-3 overflow-hidden border-2
        bg-slate-400 border-slate-900/5 rounded-3xl
        pt-4 pl-4 hover:bg-slate-900/30 transition hover:scale-[1.03]'>
            <div>
                <h3 className='text-[24px] font-bold'>{title}</h3>
                <p className='pt-6 pb-2'>{description}</p>
                <ul className='flex flex-wrap mt-4 gap-1'>
                {tags.map((tag, index) => (
                    <li className='bg-slate-700/90 text-slate-300
                    rounded-xl py-1 px-2 uppercase text-[12px]' 
                    key={index}>
                        {tag}
                    </li>
                ))}
                </ul>
            </div>
            <Image
                src={imgUrl}
                alt='A project I made'
                quality={95}
                className='rounded-t-3xl'
            />
        </div>
    )
}
