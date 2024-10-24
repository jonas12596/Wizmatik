"use client";
import React, { useState, useEffect } from "react";
import NavbarComponent from "../components/navbarComponent";

const Page = () => {
  const [verificationCode, setVerificationCode] = useState("");
  const [inputVerificationCode, setInputVerificationCode] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // Track button disabled state
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Generate verification code on client side after component mounts
  useEffect(() => {
    setVerificationCode(createRandomString(5));
  }, []);

  // Watch for changes in verification code and input verification code
  useEffect(() => {
    // Debounce check for matching verification code
    const timeoutId = setTimeout(() => {
      if (inputVerificationCode === verificationCode) {
        setIsButtonDisabled(false); // Enable button if codes match
      } else {
        setIsButtonDisabled(true); // Keep button disabled if codes don't match
      }
    }, 300); // 300ms delay to ensure state is updated

    return () => clearTimeout(timeoutId); // Clean up previous timeout if input changes
  }, [inputVerificationCode, verificationCode]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactInfo({ ...contactInfo, [name]: value });
  };

  // Handle verification input change (using `onInput` for more reliable detection)
  const handleVerificationChange = (e) => {
    setInputVerificationCode(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if verification code matches
    if (inputVerificationCode !== verificationCode) {
      alert("Verification code does not match. Please try again.");
      return;
    }

    // Here you would usually send the data to a server
    console.log("Form submitted with data:", contactInfo);

    // Reset form fields
    setContactInfo({ name: "", email: "", subject: "", message: "" });
    setInputVerificationCode(""); // Reset verification input
    setVerificationCode(createRandomString(5)); // Generate new verification code
  };

  function createRandomString(length) {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const randomArray = new Uint8Array(length);
    crypto.getRandomValues(randomArray);
    randomArray.forEach((number) => {
      result += chars[number % chars.length];
    });
    return result;
  }

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
              className="p-2 border text-[calc(.675rem_+_1vw)] outline-none border-black w-full placeholder:text-black rounded-sm"
              type="text"
              placeholder="Name"
              autoComplete="off"
              required
              name="name"
              value={contactInfo.name}
              onChange={handleChange}
            />
            <input
              className="p-2 border text-[calc(.675rem_+_1vw)] outline-none border-black w-full placeholder:text-black rounded-sm"
              type="email"
              placeholder="Email"
              autoComplete="off"
              required
              name="email"
              value={contactInfo.email}
              onChange={handleChange}
            />
            <input
              className="p-2 border text-[calc(.675rem_+_1vw)] outline-none border-black w-full placeholder:text-black rounded-sm"
              type="text"
              placeholder="Subject"
              autoComplete="off"
              required
              name="subject"
              value={contactInfo.subject}
              onChange={handleChange}
            />
            <textarea
              className="p-2 resize-none border text-[calc(.675rem_+_1vw)] outline-none placeholder:text-black/30 border-black w-full rounded-sm"
              placeholder="Your Message"
              autoComplete="off"
              rows="6"
              required
              name="message"
              value={contactInfo.message}
              onChange={handleChange}
            />
            <div className="flex items-start justify-center flex-col">
              <p className="text-[calc(.675rem_+_1vw)]">
                Type in {" "}
                <span className="text-red-500">{verificationCode}</span>
              </p>
              <input
                className="p-2 border text-[calc(.675rem_+_1vw)] outline-none border-black w-full rounded-sm"
                type="text"
                autoComplete="off"
                required
                value={inputVerificationCode}
                onInput={handleVerificationChange} // Use onInput for more reliable event handling
              />
            </div>
            <button
              type="submit"
              className="w-full text-center text-[calc(.675rem_+_1vw)] p-3 bg-black rounded-sm text-white uppercase font-medium"
              disabled={isButtonDisabled} // Use isButtonDisabled to control the disabled state
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
