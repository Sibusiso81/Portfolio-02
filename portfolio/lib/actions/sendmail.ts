"use server";
/* 
Pages to build 
1)About
-Inspiration from ultra framer temp
2)Sign in /log in 
use shadcn components
-use next.js auth
3)Contact 
-use shadcn components 
4)Dashboard

*/

import nodemailer from 'nodemailer'
import Handlebars from "handlebars";
import { reachEoutTemplate } from './Templates/userReachOut';
type Mail = {
  to?: string;
  name?: string;
  subject?: string;
  body?: string;
  username?: string;
  email?: string;
};
type responseFromUser = {
  email: string;
  message: string;
  username: string;
};

export async function sendMail({ to, name, subject, body }: Mail) {
  const { SMTP_PASSWORD, SMTP_EMAIL } = process.env;
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    console.log(error);
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to: to || SMTP_EMAIL,
      subject: subject || "No Subject",
      text: body || "No Body",
    });
    console.log(sendResult);
    console.log(`name:${name},To:${to}`);
  } catch (error) {
    console.log(error);
  }
}

export async function complileReachoutTemplate({
  email,
  message,
  username,
}: responseFromUser) {
  const template = Handlebars.compile(reachEoutTemplate);
  const htmlBody = template({
    email: email,
    username: username,
    message: message,
  });

  return htmlBody;
}