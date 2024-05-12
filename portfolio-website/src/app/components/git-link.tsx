import React from 'react'
import { FaGithubSquare } from "react-icons/fa";

type propsType = {
  gitURL : string,
  iconColor : string
};

export default function GitLink( props : propsType ) {
  return (
    <div className="mx-[1px]">
        <a href={props.gitURL} target="_blank"><FaGithubSquare className={props.iconColor} size={28} /></a>
    </div>     
  )
}
