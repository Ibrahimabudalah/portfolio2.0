import React from "react";
import emailjs from "@emailjs/browser";
import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactMe() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_jsdnsdp",
        "template_wayhy3l",
        e.target,
        "tIPwJvxbCFPQqe9GD"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    toast.success("Your Message Has Been Sent");
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-6 2xl:space-y-10">
        <h4 className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-darkGreen/50 underline">Lets talk.</span>
        </h4>

        <div className="space-y-1 md:space-y-3 lg:space-y-3 xl:space-y-3 2xl:space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl lg:text-2xl">
              ibrahimibrahim578@yahoo.com
            </p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl lg:text-2xl">
              British Columbia, Canada
            </p>
          </div>
        </div>
        <form
          onSubmit={sendEmail}
          className="flex flex-col space-y-2 w-80 md:w-fit mx-auto"
        >
          <div className="md:flex md:space-x-2 space-y-2 md:space-y-0 ">
            <input
              name="name"
              placeholder="Name"
              className="contactInput w-80 md:w-auto"
              type="text"
              required
            />
            <input
              name="email"
              placeholder="Email"
              className="contactInput w-80 md:w-auto"
              type="email"
              required
            />
          </div>
          <input
            name="subject"
            placeholder="Subject"
            className="contactInput "
            type="text"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            className="contactInput"
            required
          />
          <button className="bg-[#F7AB0A] py-3 md:py-5 px-10 rounded-lg text-white font-bold text-lg animate-pulse">
            {" "}
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
