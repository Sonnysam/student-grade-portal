import React from "react";
import Link from "next/link";

const GradeReport = () => {
  return (
    <div>
      <h1 className="text-base cursor-pointer m-3 font-extrabold flex items-center lg:text-3xl md:text-2xl sm:text-xl">
        <Link href="/">MGRS</Link>
      </h1>

      <div className="mt-5">
        <h1 className="flex items-center justify-center text-2xl font-bold">
          Grade Report
        </h1>
        <p className="text-lg flex items-center justify-center">
          Please contact your instructor for any questions or concerns.
        </p>
      </div>
      <section className="w-full mt-8 bg-white rounded-md shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-12 py-3 border-b">
          <p className="text-xl text-black">CSCI 1010</p>
          <p className="text-xl text-black">A</p>
        </div>
        <div className="flex items-center justify-between px-12 py-3 border-b">
          <p className="text-xl text-black">CSCI 1020</p>
          <p className="text-xl text-black">A</p>
        </div>
        <div className="flex items-center justify-between px-12 py-3 border-b">
          <p className="text-xl text-black">CSCI 1030</p>
          <p className="text-xl text-black">A</p>
        </div>
        <div className="flex items-center justify-between px-12 py-3 border-b">
          <p className="text-xl text-black">CSCI 1040</p>
          <p className="text-xl text-black">A</p>
        </div>
        <div className="flex items-center justify-between px-12 py-3 border-b">
          <p className="text-xl text-black">CSCI 1050</p>
          <p className="text-xl text-black">A</p>
        </div>
      </section>

      <div className="mx-36">
        <h1
          className="
            flex
            items-center
            justify-center
            text-2xl
            font-bold
            mt-10
            text-white
        "
        >
          Grade Report Form
        </h1>
        <p
          className="
            text-lg
            flex
            items-center
            justify-center
            text-white
            mb-10  
        "
        >
          Please fill out the form below to report a missing grade.
        </p>

        <form className="space-y-6 mb-10" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-white"
            >
              Course Code
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
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-white px-3 py-3 text-sm font-semibold leading-6 text-black shadow-2xl  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <Link href="/dashboard">Submit</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GradeReport;
