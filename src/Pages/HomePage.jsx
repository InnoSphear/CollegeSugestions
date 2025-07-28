import React from "react";
import { IoMdSearch } from "react-icons/io";
import Carousel from "../components/Carousel";
import CareerSection from "../components/CareerSection";

const HomePage = () => {
  return (
    <>
    <section className="bg-[rgb(230,232,236)] mt-20 w-full">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-10 lg:py-16">

        {/* ✅ LEFT SECTION */}
        <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
          
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Your College <br /> Decision, Informed <br /> and Assured
          </h1>

          {/* Subtitle */}
          <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-lg mx-auto lg:mx-0">
            Search with confidence for colleges & courses backed by verified data on
            <span className="font-semibold"> Placements, Median Salary, Career Outcomes, Diversity, Faculty Excellence,</span> and more.
          </p>

          {/* ✅ Search Box */}
          <div className="mt-5 flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-gray-300 shadow-sm 
            hover:shadow-md focus-within:border-blue-500 transition-all max-w-md mx-auto lg:mx-0">
            <IoMdSearch className="text-gray-500 text-2xl" />
            <input
              placeholder="Search for colleges, courses..."
              type="search"
              className="flex-1 text-gray-700 placeholder-gray-400 bg-transparent outline-none text-sm sm:text-base"
            />
          </div>
        </div>

        {/* ✅ RIGHT SECTION (Image) */}
        <div className=" w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <img
            className="w-[70%] sm:w-[300px] md:w-[400px] lg:w-[480px] xl:w-[520px] object-contain"
            src="https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-medical-student-vector-concept-black-illustration-png-image_11905027.png"
            alt="College Stats"
          />
        </div>
      </div>
    </section>
    <Carousel/>
    <CareerSection/>
    </>
  );
};

export default HomePage;
