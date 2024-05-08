import React from "react";
import LinkedInLink from "./linkedin-link";
import GitLink from "./git-link";

export default function Contact() {
    return (
        <div className="flex flex-col justify-center items-center">
            <span className="font-semibold text-xl">Contact me!</span>
            <p className="text-[14px] text-center">
                Please email me at <a className="underline hover:pointer" href="mailto:sgcook97@gmail.com">sgcook97@gmail.com</a> or contact me below:
            </p>       
        </div>
    );
}