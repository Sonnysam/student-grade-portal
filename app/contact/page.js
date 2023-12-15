import React from "react";
import Link from "next/link";
// import { Textarea } from "@material-tailwind/react";

const Contact = () => {
  return (
    <div className="m-3">
      <h1 className="text-base cursor-pointer font-extrabold flex items-center lg:text-3xl md:text-2xl sm:text-xl">
        <Link href="/">MGRS</Link>
      </h1>

      <div className="mt-5">
        <h1 className="flex items-center justify-center text-2xl font-bold">
          Instructor Contact
        </h1>
        <p className="text-lg flex items-center justify-center">
          Please contact your instructor for any questions or concerns.
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-white"
            >
              Student ID
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-white"
              >
                PIN
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* textarea */}
          <div>
            <label
              htmlFor="about"
              className="block text-sm font-medium leading-6 text-white"
            >
              Message
            </label>
            <div className="mt-2">
              <textarea
                id="about"
                name="about"
                rows="5"
                placeholder="
                Write your message here...
                "
                required
                color="gray"
                size="regular"
                outline={false}
                className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-white px-3 py-3 text-sm font-semibold leading-6 text-black shadow-2xl  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <Link href="#">Send Message</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
