"use client"
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

import { Toaster, toast } from "sonner";
import { redirect } from "next/navigation";
/* import { complileReachoutTemplate, sendMail } from "@/lib/actions/sendmail";
 */



const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters long." })
    .max(50, { message: "Username must be no longer than 50 characters." }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address." })
    .max(100, { message: "Email must be no longer than 100 characters." }),
  message: z
    .string()
    .min(5, { message: "Message must be at least 5 characters long." }),
});


export default function Page() {
  useEffect(() => {
    // Only runs in the browser
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Set the initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [isMobile, setIsMobile] = useState(false);

  

  return (
    <main className="overflow-x-hidden">
      <section
        className="w-screen max-w-screen-sm lg:max-w-screen-lg h-fit flex flex-col lg:flex-row p-4 space-y-6 lg:pl-6 lg:p-20
      xl:max-w-screen-2xl xl:justify-around"
      >
        
        <Toaster position={isMobile ? "bottom-center" : "top-right"} />
        <div className="flex flex-col space-y-3 lg:w-1/2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-screen-sm">
            Reach out ✦
          </h1>
          <p className=" text-xs md:text-md text-pretty py-4">
  I am always eager to connect with forward-thinking individuals and organizations that value innovation, automation, and data-driven decision-making.
  <br />
  <br />
  As a Business Analyst with a passion for process optimization and RPA, I welcome opportunities for collaboration, mentorship, and projects that drive efficiency and smarter business solutions.
  <br />
  <br />
  If you are looking for a strategic, analytical, and technology-driven professional, I&apos;d love to connect and explore ways we can create impactful solutions together.
</p>

        </div>
        <div className="md:pl-10 lg:pl-0 lg:w-1/2 max-w-screen-sm">
          <ProfileForm />
        </div>
      </section>
    </main>
  );
}

function ProfileForm  ()  {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const email = values.email;
    const username = values.username;
    const message = values.message;
   /*  await sendMail({
      to: "zulusibusiso81@gmail.com",
      name: `${values.email}going by:${values.username}`,
      subject: `${values.username} Reached Out!`,
      body: await complileReachoutTemplate({ email, username, message }),
    }); */
    toast.success("Email sent!");

    console.log("Form submitted:", values);
    setTimeout(() => {
      redirect("/");
    }, 300);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 lg:space-y-8"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  className="p-4"
                  placeholder="Enter your name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your email"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Type your message here."
                  rows={7}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          variant={'default'}
          className=" p-4 w-full  text-white"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};