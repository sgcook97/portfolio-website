import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/lib/data'
import DisplayInfo from './displayInfo';

type propsType = {
    projectId : number
};

export default function FullProject( props : propsType ) {

    const projectId = props.projectId;
    const { title, description, tags, imgUrl, pageUrl, gitUrl, fullInfo } = projects[projectId];

    return (
        <>
            <h1 className='text-[44px] font-semibold hover:scale-[1.03] hover:text-slate-600'>
                <Link href={pageUrl} target='_blank'>
                    {title}
                </Link>
            </h1>
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
                    <DisplayInfo info={info} />
                ))}
            </div>
            <Image 
                src={imgUrl}
                alt='A project I made'
                quality={95}
                className='my-10 w-full max-w-[40rem]
                rounded-3xl'
            />
        </>
    )
}
