import React from "react";

const CareerSection = () => {
  return (
    <div className="bg-[rgb(242,244,245)] w-full py-10 px-6">
      {/* Title */}
      <div className="ml-20 px-4 lg:px-12">
        <h1 className="text-4xl font-bold">Explore Careers</h1>
        <p className="text-gray-700 mt-3 text-lg">
          Explore your preferred streams to learn about the relevant <br />
          colleges, places and more!
        </p>
      </div>

      {/* Cards */}
      <div className="mt-20 ml-24 flex flex-col lg:flex-row items-center justify-between gap-6 px-4 lg:px-8">
        {/* Card 1 */}
        <div className="bg-white rounded-xl w-full lg:w-[30%] shadow-md hover:shadow-lg transition p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Top Colleges in India
          </h2>
          <ul className="space-y-2 text-blue-600 text-lg">
            <li><a href="#">Top Engineering Colleges</a></li>
            <li><a href="#">Top Medical Colleges</a></li>
            <li><a href="#">Top Dental Colleges</a></li>
            <li><a href="#">Top Architecture Colleges</a></li>
            <li><a href="#">Top Pharmacy Colleges</a></li>
            <li><a href="#">Top IIT Colleges</a></li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl w-full lg:w-[30%] shadow-md hover:shadow-lg transition p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Top Places in India to Study
          </h2>
          <div className="grid grid-cols-2 gap-2 text-blue-600 text-lg">
            <a href="#">Chennai</a>
            <a href="#">Bangalore</a>
            <a href="#">Delhi</a>
            <a href="#">Mumbai</a>
            <a href="#">Pune</a>
            <a href="#">Coimbatore</a>
            <a href="#">Hyderabad</a>
            <a href="#">Calcutta</a>
            <a href="#">Tamil Nadu</a>
            <a href="#">Kerala</a>
            <a href="#">Maharashtra</a>
            <a href="#">Telangana</a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl mr-24 w-full lg:w-[30%] shadow-md hover:shadow-lg transition p-6">
          <h2 className="text-2xl font-bold  mb-4 text-center">
            Top Courses to Study
          </h2>
          <div className="grid grid-cols-2 gap-2 text-blue-600 text-lg">
            <a href="#">CSE</a>
            <a href="#">ECE</a>
            <a href="#">IT</a>
            <a href="#">Mechanical</a>
            <a href="#">Mechatronics</a>
            <a href="#">Civil</a>
            <a href="#">Aeronautical</a>
            <a href="#">Aerospace</a>
            <a href="#">Architecture</a>
            <a href="#">AI & ML</a>
            <a href="#">MBBS</a>
            <a href="#">Pharmacy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerSection;
