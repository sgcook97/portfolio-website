"use client";

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/lib/data'
import DisplayInfo from './displayInfo';
import GitLink from './git-link';
import ExternalLink from './external-link';

type propsType = {
    projectId : number
};

export default function FullProject( props : propsType ) {

    const projectId = props.projectId;
    const { title, description, tags, imgUrl, pageUrl, gitUrl, fullInfo } = projects[projectId];

    return (
        <>
            <div className='flex justify-center items-center mb-4'>
                <h1 className='text-[44px] font-semibold hover:scale-[1.03] hover:text-slate-600 mr-2'>
                    <Link href={pageUrl} target='_blank'>
                        {title}
                    </Link>
                </h1>
                {gitUrl.map((url, index) => (
                    (index % 2 === 0) ? 
                    <React.Fragment key={index}>
                        <GitLink gitURL={url} iconColor='text-slate-900'/>
                    </React.Fragment>
                    :
                    <React.Fragment key={index}>
                        <GitLink gitURL={url} iconColor='text-slate-900'/>
                    </React.Fragment>
                ))}
                <ExternalLink url={String(pageUrl)} />
            </div>
            <ul className='flex flex-wrap mt-4 gap-1'>
                {tags.map((tag, index) => (
                    <li className='bg-slate-500 text-slate-200
                    rounded-xl py-1 px-2 uppercase text-[12px]' 
                    key={index}>
                        {tag}
                    </li>
                ))}
            </ul>
            <div className='mt-10 text-center flex flex-col justify-center items-center'>
                {fullInfo.map((info, index) => (
                    <React.Fragment key={index}>
                        <DisplayInfo info={info} />
                    </React.Fragment>
                ))}
            </div>
            <Image 
                src={imgUrl}
                alt='A project I made'
                quality={95}
                className='my-10 w-full max-w-[40rem]
                rounded-3xl'
                priority
            />
        </>
    )
}
