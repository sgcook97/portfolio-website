import React from 'react'
import { FaFileDownload } from "react-icons/fa";
import { MdDownload } from "react-icons/md";

export default function DownloadResume() {
  return (
    <div className='flex justify-center 
    items-center mx-2 my-1 bg-slate-900 text-slate-200 
    h-[30px] w-[6.4rem] rounded-full hover:bg-slate-700 hover:scale-[1.05]'>
      <a className='w-full h-full flex justify-center
      gap-1 items-center' href="/SamCook-Resume.pdf" 
      download="samcook-resume">
        {/* <FaFileDownload size={25} /> */}
        Resume
        <MdDownload size={18} />
      </a>
    </div>
  )
}
