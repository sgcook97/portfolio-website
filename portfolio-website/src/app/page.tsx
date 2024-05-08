"use client";

import Image from "next/image";
import NavBar from "./components/header";
import Contact from "./components/contact";
import About from "./components/about";
import Intro from "./components/intro";
import Projects from "./components/projects";

export default function Home() {
	return (
		<div className="relative top-14 w-[80%]">
			<div className="text-slate-700 flex h-auto min-h-[30rem] 
				items-center justify-center w-full">
				<Intro />
			</div>
			<div className="text-slate-700 flex h-auto min-h-[30rem] 
				items-center justify-center w-full" id="about">
				<About />
			</div>
			<div className="text-slate-700 flex h-auto min-h-[30rem] 
				items-center justify-center w-full" id="projects">
				<Projects />
			</div>
			<div className="text-slate-700 flex h-auto min-h-[100vh] 
				items-center justify-center w-full" id="contact">
				<Contact />
			</div>
		</div>
	);
}
