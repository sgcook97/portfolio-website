import React from 'react'

type propType = {
    info : string
}

export default function DisplayInfo( props : propType ) {
  return (
    <div className=' text-left mb-10 min-w-[15rem] max-w-[40rem]'>
        {props.info}
    </div>
  )
}
