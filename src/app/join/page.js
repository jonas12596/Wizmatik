"use client";
import React, { useState } from "react";
import NavbarComponent from "../components/navbarComponent";
import Image from "next/image";
import wizmatikLogo from "../WIZ.png";

const Page = () => {
  const [subscribeInfo, setSubscribeInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubscribeInfo({ ...subscribeInfo, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would usually send the data to a server
    console.log("Form submitted with data:", subscribeInfo);
    // Reset form fields
    setSubscribeInfo({ name: "", email: "", phone: "" });
  };

  return (
    <div className="container">
      <NavbarComponent />
      <main className="py-6 container">
        <section className="px-6 pt-[4rem] flex items-center justify-center flex-col">
          <figure className="pt-8 min-w-full h-auto flex items-center justify-center">
            <Image
              className="w-full h-auto md:w-1/2 lg:w-1/3 xl:w-1/4"
              src={wizmatikLogo}
              alt="Wizmatik logo"
            />
          </figure>
          <p className="capitalize font-medium text-[calc(.75rem_+_1vw)] leading-[calc(1.25rem_+_1vw)] text-center py-4">
            Stay in the loop
            <br />
            with exclusive content,
            <br />
            events, updates, and more.
          </p>
          <form
            className="min-w-[80%] lg:min-w-[75%] xl:min-w-[50%] flex items-start justify-center flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <input
              className="p-2 border text-[calc(.675rem_+_1vw)] outline-none border-black w-full placeholder:text-black rounded-sm"
              type="text"
              placeholder="Name"
              autoComplete="off"
              required
              name="name"
              value={subscribeInfo.name}
              onChange={handleChange}
            />
            <input
              className="p-2 border text-[calc(.675rem_+_1vw)] outline-none border-black w-full placeholder:text-black rounded-sm"
              type="email"
              placeholder="Email"
              autoComplete="off"
              required
              name="email"
              value={subscribeInfo.email}
              onChange={handleChange}
            />
            <div className="w-full flex items-center justify-center">
              <p className="text-[calc(.675rem_+_1vw)] leading-[calc(1rem_+_1vw)] font-medium">
                Or
              </p>
            </div>
            <input
              className="p-2 border text-[calc(.675rem_+_1vw)] outline-none border-black w-full placeholder:text-black rounded-sm"
              type="tel"
              placeholder="Phone Number"
              autoComplete="off"
              name="phone"
              value={subscribeInfo.phone}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="w-full text-center text-[calc(.675rem_+_1vw)] p-3 bg-black rounded-sm text-white uppercase font-medium"
            >
              Subscribe
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Page;
