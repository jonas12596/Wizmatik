"use client";
import React, { useState } from "react";
import NavbarComponent from "../components/navbarComponent";

const Page = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactInfo({ ...contactInfo, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would usually send the data to a server
    console.log("Form submitted with data:", contactInfo);
    // Reset form fields
    setContactInfo({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="container">
      <NavbarComponent />
      <main className="py-6 container">
        <section className="pt-[12rem] min-w-full h-full flex items-center justify-center">
          <form
            className="min-w-[80%] lg:min-w-[75%] xl:min-w-[50%] flex items-start justify-center flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <input
              className="p-2 border text-[calc(1rem_+_1vw)] outline-none border-black w-full placeholder:text-black rounded-sm"
              type="text"
              placeholder="Name"
              autoComplete="off"
              required
              name="name"
              value={contactInfo.name}
              onChange={handleChange}
            />
            <input
              className="p-2 border text-[calc(1rem_+_1vw)] outline-none border-black w-full placeholder:text-black rounded-sm"
              type="email"
              placeholder="Email"
              autoComplete="off"
              required
              name="email"
              value={contactInfo.email}
              onChange={handleChange}
            />
            <input
              className="p-2 border text-[calc(1rem_+_1vw)] outline-none border-black w-full placeholder:text-black rounded-sm"
              type="text"
              placeholder="Subject"
              autoComplete="off"
              required
              name="subject"
              value={contactInfo.subject}
              onChange={handleChange}
            />
            <textarea
              className="p-2 resize-none border text-[calc(1rem_+_1vw)] outline-none placeholder:text-black/30 border-black w-full rounded-sm"
              placeholder="Your Message"
              autoComplete="off"
              rows="6"
              required
              name="message"
              value={contactInfo.message}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="w-full text-center text-[calc(1rem_+_1vw)] p-3 bg-black rounded-sm text-white uppercase font-medium"
            >
              Submit
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Page;