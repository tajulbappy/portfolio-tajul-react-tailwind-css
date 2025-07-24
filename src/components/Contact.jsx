import React from "react";
import { assets } from "../assets/assets";
import { toast } from "react-toastify";

const AppContact = () => {
  const toastNoity = () => {
    toast("Successfully Submitted !!!");
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "041eef1f-4652-49d5-bd79-ae2aa7bcfeb0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      event.target.reset();
      console.log("Success", res);
    }
  };

  return (
    <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo leading-8">
        I'd love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </p>
      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
          <input
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white
            dark:bg-darkHover/30 dark:border-white/90"
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <input
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <textarea
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90"
          rows={6}
          name="message"
          placeholder="Enter your message"
          required
        ></textarea>

        <button
          onClick={toastNoity}
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer
        dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
        >
          Submit now
          <img
            className="w-4"
            src={assets.arrow_right_white}
            alt="arrow-right"
          />
        </button>
      </form>
    </div>
  );
};

export default AppContact;
