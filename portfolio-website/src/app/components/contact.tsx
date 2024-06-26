"use client";

import React, { useRef } from "react";
import { FaRegPaperPlane } from "react-icons/fa";
import { sendEmail } from "@/actions/sendEmail";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (formRef.current) {
            const formData = new FormData(formRef.current);
            try {
                await sendEmail(formData);
                formRef.current.reset();
                toast.success("Your message has been sent successfully!", {
                    position: 'top-center'
                });
            } catch (error) {
                toast.error("There was an error sending your message. Please try again.", {
                    position: 'top-center'
                });
            }
        }
    };
    return (
        <div className="flex flex-col justify-center items-center w-[min(100%, 40rem)] mb-[4rem]">
            <h1 className="font-semibold text-[34px]">Contact me!</h1>
            <p className="text-[16px] text-center">
                Please email me at <a className="underline hover:pointer font-medium hover:text-slate-500" href="mailto:sgcook97@gmail.com">sgcook97@gmail.com</a> or contact me below:
            </p>
            <form className="flex flex-col justify-center items-end w-full mt-8" 
                ref={formRef}
                onSubmit={handleSubmit}
            >
                <input className="w-full opacity-100 bg-slate-200 h-10 border border-black/10 rounded-lg pl-2 py-1
                    focus:border-slate-700 focus:border-[3px] focus:outline-none"
                    type="email" placeholder="Your email" required maxLength={250}
                    name="senderEmail"
                /> 
                <textarea className="w-full h-[10rem] border border-black/10 rounded-lg mt-4 pl-2 pt-1
                    focus:border-slate-700 focus:border-[3px] focus:outline-none" 
                    placeholder="Your message" required maxLength={500}
                    name="senderMessage"
                />
                <button className="group mt-2 flex justify-center items-center px-2 py-1 hover:bg-slate-900
                        bg-slate-800 text-slate-200 rounded-full hover:scale-[1.1] h-[2.5rem] w-[6.5rem]" 
                        type="submit"
                >
                    Send <FaRegPaperPlane className="transition group-hover:translate-x-[2px] group-hover:-translate-y-[3px] ml-2" />
                </button>  
            </form>  
            <ToastContainer />     
        </div>
    );
}