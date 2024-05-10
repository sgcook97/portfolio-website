import React from 'react'
import Image from 'next/image'
import samnrollImg from '/public/samnroll.png'
import blackjackImg from '/public/blackjack.png'
import movieexplorerImg from '/public/movie-explorer.png'
import { projects } from '@/lib/data'
import Project from './project'


export default function Projects() {
  return (
    <section>
      <h1 className='text-center my-4 font-bold text-[34px]'>My Projects</h1>
      <div>
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section> 
  )
}
