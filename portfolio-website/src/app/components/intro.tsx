"use client";

import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RxDotFilled } from 'react-icons/rx';
import GitLink from './git-link';
import LinkedInLink from './linkedin-link';
import DownloadResume from './download';

export default function Intro() {
  const images = [
    { imgPath : "/me.jpeg" },
    { imgPath : "/gamer.jpeg" },
    { imgPath : "/balling.jpeg" }
  ];

  const titles = [
    "Developer.", "Gamer.", "Baller."
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [highlightedTitle, setHighlightedTitle] = useState(0);

  const goToImage = (imgIndex : number) => {
    setCurrentIndex(imgIndex);
    setHighlightedTitle(imgIndex);
  };

  const goToPrev = () => {
    const firstImg = currentIndex === 0;
    const newIndex = firstImg ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  
  const goToNext = () => {
    const lastImg = currentIndex === images.length - 1;
    const newIndex = lastImg ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='flex flex-wrap items-center justify-center w-full'>
      <div className='flex-col mr-5 my-10 sm:text-start'>
        <p className='font-bold text-[24px]'>Nice to meet you! I'm Sam.</p>
        <div className='flex'>
          {titles.map((title, titleIndex) => (
            titleIndex === currentIndex ? 
            <p key={titleIndex} className='font-bold'>{title + " "}</p> :
            <p key={titleIndex}>{title}</p>
          ))}
        </div>
        <div className='flex w-full justify-center items-center'>
          <LinkedInLink />
          <GitLink />
          <DownloadResume />
        </div>
      </div>
      <div className='flex-col'>
        <Image 
          src={images[currentIndex].imgPath}
          alt={`IMG ${currentIndex + 1}`}
          width={250}
          height={250}
          className='rounded-[50%] border-slate-800 border-solid border-2 h-[200px] w-[215px]'
        />
        <div className='flex top-4 justify-center py-2 items-center'>
          <div>
            <IoIosArrowBack onClick={goToPrev} className='hover:cursor-pointer hover:size-[20px] select-none' />
          </div>
          {images.map((img, imgIndex) => (
            <div key={imgIndex} onClick={() => goToImage(imgIndex)} className='text-2xl cursor-pointer mx-[2px]'>
                <RxDotFilled size={20}/>
            </div>
          ))}
          <div>
            <IoIosArrowForward size={15} onClick={goToNext} className='hover:cursor-pointer hover:size-[20px] select-none' />
          </div>
        </div>
      </div>
      
    </div>
  )
}
