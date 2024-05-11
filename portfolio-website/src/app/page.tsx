import Contact from "./components/contact";
import About from "./components/about";
import Intro from "./components/intro";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Experience from "./components/experience";

export default function Home() {
	return (
		<div className="relative top-14 w-[80%] text-slate-900">
			<div className="flex min-h-[25rem] 
				items-center justify-center w-full mb-20 sm:mb-0 scroll-mt-28" 
				id="home">
				<Intro />
			</div>
			<div className="flex min-h-[20rem] 
				items-center justify-center w-full mb-16 scroll-mt-10" id="about">
				<About />
			</div>
			<div className="flex min-h-[25rem] 
				items-center justify-center w-full scroll-mt-28" id="projects">
				<Projects />
			</div>
			<div className="mt-[2rem] flex min-h-[25rem] 
				items-center justify-center w-full scroll-mt-28" id="skills">
				<Skills />
			</div>
			<div className="mt-[3rem] flex min-h-[25rem] 
				items-center justify-center w-full scroll-mt-28" id="experience">
				<Experience />
			</div>
			<div className="mt-[8rem] flex min-h-[25rem] 
				items-center justify-center w-full scroll-mt-28" id="contact">
				<Contact />
			</div>
		</div>
		
	);
}
