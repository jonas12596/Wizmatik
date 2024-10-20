import React from "react";
import NavbarComponent from "../components/navbarComponent";

const page = () => {
  return (
    <div className="container">
      <NavbarComponent />
      <main className="py-6 container">
        <section className="absolute left-0 top-0 min-w-full h-screen flex items-center justify-center">
          <h1 className="text-center text-[calc(3rem_+_1vw)] leading-[calc(3rem_+_1vw)] font-medium">
            COMING SOON
          </h1>
        </section>
      </main>
    </div>
  );
};

export default page;
