import React from 'react'
import { projects } from '@/lib/data'
import Project from './project'


export default function Projects() {
  return (
    <section>
      <h1 className='text-center my-4 font-bold text-[34px]'>My Projects</h1>
      <div className='flex flex-wrap justify-center items-center'>
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <Project project={project} idx={index} />
          </React.Fragment>
        ))}
      </div>
    </section> 
  )
}
