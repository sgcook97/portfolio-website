"use client";

import React from 'react';
import { useSearchParams } from "next/navigation";
import Image from 'next/image';
import Link from 'next/link';
import FullProject from '../components/full-project';


export default function ProjectPage() {
    const searchParams = useSearchParams();
    const projectId = Number(searchParams.get('projectId'))
    

    return (
        <div className="relative top-14 w-full text-slate-900 flex flex-col my-4 max-w-[80%] justify-center items-center">
            <FullProject projectId={projectId}/>
        </div>
    )
}
