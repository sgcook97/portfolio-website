import React from "react";

export default function About() {
    return (
        <div className="flex-col justify-center items-center align-middle text-center">
            <div className="text-center w-full mb-10">
                <span className="font-bold text-[34px] text-center">
                About Me
                </span>
            </div>
            <div className="min-w-[300px] flex flex-wrap justify-center w-full text-center items-center max-w-[750px]">
                <p>Hey there! I'm Sam Cook, a recent Computer 
                    Science graduate from Texas State University, 
                    currently based in Austin, Texas. I'm very passionate about 
                    coding and have gained hands-on experience 
                    through numerous academic and personal projects.
                    Outside of coding, you can find me 
                    enjoying volleyball or diving into the 
                    latest video game releases. Let's connect and 
                    discuss how we can collaborate on exciting 
                    tech ventures!</p>
            </div>
        </div>
        
    );
}