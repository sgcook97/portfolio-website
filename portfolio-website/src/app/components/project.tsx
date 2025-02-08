"use client";

import React from 'react';
import { projects } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

type ProjectType = (typeof projects)[number];

type propsType = {
    project : ProjectType,
    idx : number
}

export default function Project( props : propsType ) {

    const { title, description, tags, imgUrl } = props.project
    const idx = props.idx

    return (
        <>
                <div className='flex min-w-[20rem] h-[18rem] m-3 overflow-hidden border-2
                bg-slate-400 border-black/5 rounded-3xl
                hover:bg-slate-900/30 transition flex-grow-0 flex-shrink-0
                sm:max-w-[30%] hover:scale-[1.05] relative group'>
                    <div className='p-4 absolute flex-col opacity-0
                    bg-slate-900 text-slate-100 h-full
                    group-hover:transition group-hover:opacity-100'>
                        <h3 className='text-[24px] font-bold'>{title}</h3>
                        <p className='pt-4 pb-2'>{description}</p>
                        <ul className='flex flex-wrap mt-4 gap-1'>
                        {tags.map((tag, index) => (
                            <li className='bg-slate-500/90 text-slate-200
                            rounded-xl py-1 px-2 uppercase text-[12px]' 
                            key={index}>
                                {tag}
                            </li>
                        ))}
                        </ul>
                    </div>
                    <Link
                        href={{
                            pathname: '/project',
                            query: { projectId : idx },
                        }}
                    >
                        <Image
                            src={imgUrl}
                            alt='A project I made'
                            quality={95}
                            className='rounded-t-3xl w-full h-max group-hover:opacity-10'
                        />
                    </Link>
                </div>
        </>
    )
}
