"use client";
import React, { useState } from "react";

const Form = () => {
  return (
    <div className="px-container py-4 flex flex-col gap-6">
      <h4 className="text-heading4 text-center">
        Get Personal Assistance With Our Exclusive Services
      </h4>
      <div className="flex gap-6 max-md:flex-col">
        <div className="flex flex-col gap-4 sm:justify-between shadow-lg border border-black p-4 w-1/2 rounded-xl max-md:w-full">
          <div className="border text-center p-2 border-black rounded text-subtitle1">
            Taxation
          </div>
          <p className="text-center text-heading3">
            1800$<span className="text-subtitle1">only</span>
          </p>
          <div>
            <p className="text-heading4">Perks:-</p>
            <div className="flex flex-col gap-2 text-subtitle1">
              <p>1. you will get this</p>
              <p>2. awesome services</p>
              <p>3. get lifetime assistance on</p>
            </div>
          </div>
          <div>
            <p className="text-heading4">Term And Conditions</p>
            <div className="flex flex-col gap-2 text-subtitle1">
              <p>1. Not refundable</p>
              <p>2. Do not share the contact</p>
              <p>3. Services are subject to market risk</p>
            </div>
          </div>
        </div>
        <form className="flex flex-col gap-4 shadow-lg border border-black p-4 w-1/2 rounded-xl max-md:w-full">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="border border-black rounded p-2"
            placeholder="Enter Your Name"
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-black rounded p-2"
            placeholder="Enter Your Email"
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows={3}
            className="border border-black rounded p-2"
            placeholder="Any Query? So Please Write a Message in This Text Area"
          />
          <label className="block">Upload File</label>

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
          </div>
          <button
            type="submit"
            className="border border-black p-2 rounded w-full hover:bg-black hover:text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
