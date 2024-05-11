"use client";

import { experience } from '@/lib/data';
import React, { ReactNode } from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
  return (
    <div className='w-full max-w-[60rem]'>
        <h1 className='text-center mb-10 font-bold text-[34px]'>My Experience</h1>
        <VerticalTimeline lineColor=''>
            {experience.map((item, index) => (
                <React.Fragment key={index}>
                    <VerticalTimelineElement
                        contentStyle={{
                            background: "rgb(241 245 249)",
                            boxShadow: "none",
                            border: "1px solid rgba(0, 0, 0, 0.05)",
                            textAlign: "left",
                            padding: "1.25rem 2rem",
                            visibility: "visible",
                        }}
                        contentArrowStyle={{
                            borderRight: "0.4rem solid rgb(100 116 139)"
                        }}
                        date={item.date}
                        icon={item.icon}
                        iconStyle={{
                            background: "rgb(241 245 249)",
                            fontSize: "1.7rem",
                            visibility: "visible"
                        }}
                    >
                        <h3 className='font-semibold text-[1.5rem]'>{item.title}</h3>
                        <p className='!mt-0 !font-semibold'>{item.location}</p>
                        <p className='!font-normal !mt-3 !text-[1.12rem]'>{item.description}</p>
                    </VerticalTimelineElement>
                </React.Fragment>
            ))}
        </VerticalTimeline>
    </div>
  )
}
