import React from "react";
import NavbarComponent from "../components/navbarComponent";
import Image from "next/image";
import wizmatikLogo from "../WIZ.png";
const page = () => {
  return (
    <div className="container">
      <NavbarComponent />
      <main className="py-6 container">
        <section
          className="
        px-6 py-[4rem] flex items-center justify-center flex-col"
        >
          <figure className="py-8 min-w-full h-auto flex items-center justify-center">
            <Image
              className="w-full h-auto md:w-3/4 lg:w-1/2"
              src={wizmatikLogo}
              alt="Wizmatik logo"
            />
          </figure>
          <h1 className="text-center px-4 text-[calc(.375rem_+_1vw)] leading-[calc(.85rem_+_1vw)] font-light">
            <strong>Wizmatik</strong> is where the untold stories of New York City&apos;s graffiti
            culture come to life. Through the lens of urban exploration, we
            capture the raw essence of the streets— documenting iconic tags,
            throw-ups, and murals that define the city’s underground art scene.
            With a deep respect for the pioneers who paved the way and the new
            generation pushing the culture forward, Wizmatik showcases graffiti
            in its purest form. More than just photography, Wizmatik is a
            tribute to the legends of the past and the trailblazers of today.
            Our platform brings you closer to the heart of the graffiti world,
            with exclusive content that blends visuals with impactful
            storytelling. Whether it&apos;s through TikTok, YouTube, or our
            soon-to-be-released zine, we are dedicated to preserving and sharing
            the vibrant history of street art in NYC. Every image is not just a
            photograph— it&apos;s a piece of the city&apos;s artistic soul, captured,
            curated, and shared by Wizmatik. Stay connected as we continue to
            document the art that makes the streets of New York a living canvas.
          </h1>
        </section>
      </main>
    </div>
  );
};

export default page;
