import React from 'react'
import { TbExternalLink } from "react-icons/tb";

type propsType = {
    url : string
};

export default function ExternalLink( props : propsType) {
    return (
        <div className="mx-[1px]">
              <a href={props.url} target="_blank"><TbExternalLink size={24} /></a>
        </div> 
    )
}
