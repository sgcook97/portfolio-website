"use server";

import { Resend } from "resend";
import { getErrorMessage, validateString } from "@/lib/utils";
import { error } from "console";
import ContactFormEmail from "@/email/contact-form-email";
import React, { ReactNode, ReactPortal } from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData : FormData) => {

    const senderEmail = formData.get("senderEmail");
    const senderMessage = formData.get("senderMessage");

    if (!validateString(senderEmail, 250)) {
        return {
            error: "Invalid sender email",
        }
    }

    if (!validateString(senderMessage, 500)) {
        return {
            error: "Invalid message.",
        };
    }

    try {
        await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: "sgcook97@gmail.com",
        subject: "Message",
        reply_to: senderEmail as string,
        react: React.createElement(ContactFormEmail, {
            message: senderMessage as string,
            sender: senderEmail as string,
        })
    });
    } catch (error : unknown) {
        return {
            error: getErrorMessage(error),
        }
    }
    
}