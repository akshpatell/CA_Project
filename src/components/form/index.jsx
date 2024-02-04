"use client";
import React, { useState } from "react";

const Form = () => {
  return (
    <div className="px-container pt-4 pb-8 flex flex-col gap-6">
      <h4 className="text-heading4 text-center">
        Get Personal Assistance With Our Exclusive Services
      </h4>
      <div className="flex gap-6 max-md:flex-col shadow-lg rounded-xl p-4 bg-gradient-to-l from-gray-100 via-[#bce1ff] to-gray-100">
        <div className="flex flex-col gap-4 sm:justify-between w-1/2 max-md:w-full">
          <div className="text-center p-2 text-subtitle1">Taxation</div>
          <p className="text-center text-heading3">
            1800$<span className="text-subtitle1">only</span>
          </p>
          <div>
            <div className="text-xl font-semibold">Perks:-</div>
            <ul className="flex flex-col gap-2">
              <li>1. Awesome services</li>
              <li>2. You will get this</li>
              <li>3. Get lifetime assistance on</li>
            </ul>
          </div>
          <div>
            <div className="text-xl font-semibold">Term And Conditions</div>
            <ul className="flex flex-col gap-2">
              <li>1. Not refundable</li>
              <li>2. Do not share the contact</li>
              <li>3. Services are subject to market risk</li>
            </ul>
          </div>
        </div>
        <form className="flex flex-col gap-4 w-1/2 max-md:w-full justify-center md:px-14">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="shadow-lg rounded p-2"
            placeholder="Enter Your Name"
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="shadow-lg rounded p-2"
            placeholder="Enter Your Email"
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows={3}
            className="shadow-lg rounded p-2"
            placeholder="Any Query? So Please Write a Message in This Text Area"
          />
          {/* <label className="block">Upload File</label>

          <div>
            <input type="file" name="file" id="file" className="sr-only" />
            <label
              htmlFor="file"
              className="relative flex items-center justify-center rounded-md border border-dashed border-black p-10 text-center"
            >
              <div>
                <button className="mb-2 block text-xl font-semibold">
                  Drop files here
                </button>
                <span className="mb-2 block text-base font-medium">Or</span>
                <button className="inline-flex rounded border border-black py-2 px-7 text-base font-medium">
                  Browse
                </button>
              </div>
            </label>
          </div> */}
          <button
            type="submit"
            className="bg-black text-white p-2 rounded w-1/4 hover:bg-transparent hover:border hover:border-black hover:text-black"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
