import "../app/style.css";
import Link from "next/link";

const Welcome = () => {
  return (
    <main className="center">
      <div className="flex-row justify-center items-center mt-10">
        <h1 className="text-3xl font-extrabold text-center">
          Welcome to Missing Grade Reporting System
        </h1>
        <p className="text-base text-center mt-2">Continue to dashboard</p>
      </div>
      <div className="flex justify-center items-center mt-3">
        <button className="py-5 px-32 bg-white text-black rounded-xl">
          <Link href="/login">Dashboard</Link>
        </button>
      </div>
    </main>
  );
};

export default Welcome;
