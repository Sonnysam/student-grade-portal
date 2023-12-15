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
    </div>
  );
};

export default GradeReport;
