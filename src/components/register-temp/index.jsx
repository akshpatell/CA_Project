import Image from "next/image";
import React from "react";

const RegisterTemp = () => {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col gap-6 bg-gradient-to-l from-gray-100 via-[#bce1ff] to-gray-100 p-4 rounded-lg">
          <div>
            <a href="/" className="flex items-center justify-center">
              <span className="sr-only">Your Company</span>
              <Image
                src={"/images/caprojectlogo3.png"}
                alt="image"
                height={10}
                width={80}
                className="object-cover"
              />
            </a>
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign up to your account
            </h2>
          </div>

          <form className="space-y-6" action="#" method="POST">
            <div className="flex gap-2">
              <div>
                <label
                  htmlFor="first name"
                  className="block text-sm font-medium leading-6"
                >
                  First Name
                </label>
                <div className="mt-2">
                  <input
                    id="first name"
                    name="first name"
                    type="first name"
                    autoComplete="first name"
                    required
                    placeholder="First Name"
                    className="block w-full rounded-md border-0 p-2 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last name"
                  className="block text-sm font-medium leading-6"
                >
                  Last Name
                </label>
                <div className="mt-2">
                  <input
                    id="last name"
                    name="last name"
                    type="last name"
                    autoComplete="last name"
                    required
                    placeholder="Last Name"
                    className="block w-full rounded-md border-0 p-2 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Enter Your Email"
                  className="block w-full rounded-md border-0 p-2 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="Enter Password"
                  className="block w-full rounded-md border-0 p-2 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="text-center text-sm text-gray-500">
            Back to
            <a
              href="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 underline"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
export default RegisterTemp;
