import React from 'react'

export default function Footer() {
  return (
    <footer className='text-slate-900 mt-20 flex flex-col 
    justify-center items-center mb-8'>
        <small>
            &copy; 2030 Sam. All rights reserved
        </small>
        <p className='text-sm mt-[2px] w-[80%] text-center'>
            <span className='font-semibold'>About this website:</span> built with React and Next.js, TypeScript, Tailwind CSS, Framer Motion, React Email and Resend. Deployed on Vercel.
        </p>
    </footer>
  )
}
