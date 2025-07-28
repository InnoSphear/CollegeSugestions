import React, { useState } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";
import collegesData from "./collegesData.json";

// Helper function to create slugs from college names
const slugify = (str) => {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .trim()
    .replace(/\s+/g, "-");
};

const MedicalTopTenGov = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    state: "",
    city: "",
    ownership: "",
    category: "",
    course: "",
  });
  const [sortBy, setSortBy] = useState("NIRF Rank");

  // Get all colleges from data
  const allColleges = collegesData.colleges;

  // Filtering Logic
  const filteredColleges = allColleges.filter((college) => {
    return (
      (searchQuery === "" ||
        college.name.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (filters.state === "" || college.state === filters.state) &&
      (filters.city === "" || college.city === filters.city) &&
      (filters.ownership === "" || college.ownership === filters.ownership) &&
      (filters.category === "" || college.category === filters.category) &&
      (filters.course === "" || 
        (college.courses && college.courses.includes(filters.course)))
    );
  });

  // Sort the colleges
  const sortedColleges = [...filteredColleges].sort((a, b) => {
    if (sortBy === "Established Year") {
      return parseInt(a.established) - parseInt(b.established);
    } else if (sortBy === "Name") {
      return a.name.localeCompare(b.name);
    }
    // Default: NIRF Rank (using ID as proxy)
    return a.id - b.id;
  });

  // Get unique filter options
  const getUniqueOptions = (key) => {
    const options = new Set();
    allColleges.forEach(college => {
      if (key === 'course') {
        college.courses?.forEach(course => options.add(course));
      } else {
        if (college[key]) options.add(college[key]);
      }
    });
    return Array.from(options).sort();
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-50 min-h-screen">
      {/* TOP BANNER */}
      <div className="mt-20 bg-gradient-to-r from-blue-500 to-teal-400 w-full max-w-6xl rounded-3xl flex flex-col md:flex-row items-center justify-between p-6 md:p-10 shadow-lg">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center md:text-left leading-snug">
          Top Government Medical <br /> Colleges in India
        </h2>
        <img
          className="h-40 sm:h-56 md:h-72 lg:h-80 w-auto object-contain mt-6 md:mt-0"
          src="https://medical.collegesuggest.com/_next/image?url=%2Fassets%2Fimages%2Fbanner_img.webp&w=828&q=75"
          alt="Top Government Medical Colleges"
        />
      </div>

      {/* MAIN SECTION */}
      <div className="flex flex-col md:flex-row gap-6 mt-10 w-full max-w-6xl">
        {/* LEFT SIDE - COLLEGE LIST */}
        <div className="flex-1">
          {/* Search + Sort */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
            <span className="px-4 py-2 bg-white rounded-lg font-semibold shadow-sm">
              Total Colleges: {filteredColleges.length}
            </span>

            <div className="flex flex-wrap gap-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="NIRF Rank">NIRF Rank</option>
                <option value="Established Year">Established Year</option>
                <option value="Name">Name</option>
              </select>

              <input
                type="text"
                placeholder="Search your college"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border px-3 py-2 rounded-md w-full sm:w-64 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* College Cards */}
          <div className="space-y-4">
            {sortedColleges.map((college) => (
              <Link 
                to={`/college/${college.slug || slugify(college.name)}`} 
                key={college.id} 
                className="block"
              >
                <div className="bg-white shadow-sm border rounded-xl p-5 flex flex-col gap-4 hover:shadow-md transition hover:border-blue-300">
                  {/* Top Row: Logo + Name */}
                  <div className="flex items-center gap-4">
                    <img
                      src={college.logo}
                      alt={college.name}
                      className="w-14 h-14 rounded-full object-contain border"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/56";
                      }}
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{college.name}</h3>
                      <p className="text-sm text-gray-600">
                        <span className="text-blue-500 font-medium">{college.ownership}</span> • 
                        Established: {college.established} • 
                        {college.city}, {college.state}
                      </p>
                    </div>
                  </div>

                  {/* Middle Row: Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    {["Admissions", "Courses & Fees", "Cutoff", "Placements"].map(
                      (btn) => (
                        <button
                          key={btn}
                          className="px-4 py-1.5 text-sm border rounded-full hover:bg-gray-50 text-gray-700 hover:text-blue-600 hover:border-blue-300"
                        >
                          {btn}
                        </button>
                      )
                    )}
                  </div>

                  {/* Bottom Row: Compare + Bookmark */}
                  <div className="flex items-center gap-3">
                    <input 
                      type="checkbox" 
                      className="rounded text-blue-500 focus:ring-blue-400"
                    />
                    <span className="text-sm text-gray-600">Add to Compare</span>
                    <FaRegBookmark className="text-gray-500 cursor-pointer hover:text-blue-500 ml-auto" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - FILTER PANEL */}
        <div className="w-full md:w-72 flex-shrink-0">
          <div className="bg-white shadow-sm border rounded-xl p-5 sticky top-24">
            <h4 className="font-semibold text-lg mb-4 text-gray-800">Filter</h4>

            {[
              { key: "state", label: "State" },
              { key: "city", label: "City" },
              { key: "ownership", label: "Ownership" },
              { key: "category", label: "Category" },
              { key: "course", label: "Course" },
            ].map((filter) => (
              <div key={filter.key} className="mb-4">
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  {filter.label}
                </label>
                <select
                  value={filters[filter.key]}
                  onChange={(e) =>
                    setFilters({ ...filters, [filter.key]: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All {filter.label}</option>
                  {getUniqueOptions(filter.key).map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            ))}

            {/* Reset Filters */}
            <button
              onClick={() =>
                setFilters({
                  state: "",
                  city: "",
                  ownership: "",
                  category: "",
                  course: "",
                })
              }
              className="w-full mt-2 text-sm px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 transition"
            >
              Reset Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalTopTenGov;