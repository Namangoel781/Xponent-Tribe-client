"use client";
import React, { useState } from "react";
import Navbar from "./ui/Floating-navbar";
import Footer from "./Footer";
import "./Letter.css";
import { letter } from "@/data";
import EmailPopupForm from "./EmailPopupForm";

const Letter = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  // const handleSaveToCloudinary = async (content: string) => {
  //   try {
  //     await axios.post("http://localhost:3000/api/uploadToCloudinary", {
  //       content,
  //     });
  //     alert("File uploaded to Cloudinary successfully!");
  //   } catch (error) {
  //     alert("Failed to upload file to Cloudinary");
  //   }
  // };

  // const [text, setText] = useState("");

  // const handleSubmit = async (event: React.FormEvent) => {
  //   event.preventDefault();

  //   const response = await fetch("/api/save-text", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ text }),
  //   });

  //   if (response.ok) {
  //     alert("Text saved successfully!");
  //   } else {
  //     alert("Failed to save text.");
  //   }
  // };
  return (
    <>
      <Navbar />

      <div className="pt-28 bg-white">
        <div>
          <h1 className="text-center text-black leading-snug font-bold tracking-wide text-[40px] md:text-5xl lg:text-6xl">
            Our <span className="text-teal-400">Letters</span>
          </h1>
        </div>

        <div></div>

        <div className="grid place-items-center lg:pt-16 lg:px-48 md:pt-8 md:px-24 px-8">
          {letter.map((item) => (
            <div
              className="p-6 bg-white border sm:mx-8 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-12
            "
              key={item.id}
            >
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.heading}
                </h5>
              </a>
              <hr className="" />
              <p className="mb-3 pt-4 font-normal text-gray-700 dark:text-gray-400 text-justify">
                {item.desc}
              </p>
              <p className="mb-3 font-normal text-gray-900 dark:text-gray-400">
                {item.date}
              </p>
              <a
                href={item.link}
                target="_blank"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-400 rounded-lg hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
              <button
                onClick={togglePopup}
                className="bg-red-500 text-white p-2 rounded-lg m-4 text-sm"
              >
                Subscribe Us
              </button>
              {showPopup && <EmailPopupForm onClose={closePopup} />}
            </div>
          ))}
        </div>
        <div>
          {/* <form onSubmit={handleSubmit}>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={10}
              cols={50}
            />
            <br />
            <button type="submit">Save Text</button>
          </form> */}
          {/* <div>
            <h1>Add Message to .txt File on Cloudinary</h1>
            <TextareaComponent onSave={handleSaveToCloudinary} />
          </div> */}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Letter;
