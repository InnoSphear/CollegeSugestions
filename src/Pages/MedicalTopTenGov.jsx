import React, { useState } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";

// Helper function to create slugs from college names
const slugify = (str) => {
  return str
    .toLowerCase()              // convert to lowercase
    .replace(/[^a-z0-9\s]/g, "") // remove all special characters
    .trim()                      // remove leading/trailing spaces
    .replace(/\s+/g, "-");       // replace spaces with hyphens
};

// ✅ Dummy college data
const allColleges = [
  {
    name: "Post Graduate Institute Of Medical Education And Research And Capital Hospital",
    ownership: "Government",
    established: "1954",
    state: "Chandigarh",
    city: "Chandigarh",
    category: "Medical",
    course: "MBBS",
    logo: "https://upload.wikimedia.org/wikipedia/en/a/a3/Postgraduate_Institute_of_Medical_Education_and_Research_Logo.png",
  },
  {
    name: "National Institute Of Mental Health And Neuro Sciences",
    ownership: "Government",
    established: "1925",
    state: "Karnataka",
    city: "Bangalore",
    category: "Medical",
    course: "MBBS",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Nimhans_logo.png/250px-Nimhans_logo.png",
  },
  {
    name: "Banaras Hindu University",
    ownership: "Government",
    established: "1916",
    state: "Uttar Pradesh",
    city: "Varanasi",
    category: "Medical",
    course: "MBBS",
    logo: "https://www.clipartmax.com/png/middle/323-3235972_banaras-hindu-university.png",
  },
  {
    name: "AIIMS Delhi",
    ownership: "Government",
    established: "1956",
    state: "Delhi",
    city: "Delhi",
    category: "Medical",
    course: "MBBS",
    logo: "https://www.aiimsraipur.edu.in/images/lg1.png",
  },
  {
    name: "King George's Medical University",
    ownership: "Government",
    established: "1911",
    state: "Uttar Pradesh",
    city: "Lucknow",
    category: "Medical",
    course: "MBBS",
    logo: "https://upload.wikimedia.org/wikipedia/en/9/93/King_George%27s_Medical_University_Logo.png",
  },
  {
    name: "JIPMER Pondicherry",
    ownership: "Government",
    established: "1823",
    state: "Puducherry",
    city: "Pondicherry",
    category: "Medical",
    course: "MBBS",
    logo: "https://upload.wikimedia.org/wikipedia/en/c/cf/JIPMER_Logo.png",
  },
  {
    name: "Madras Medical College",
    ownership: "Government",
    established: "1835",
    state: "Tamil Nadu",
    city: "Chennai",
    category: "Medical",
    course: "MBBS",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvVonZg7IvOd1ihubP4Js-VqlSaWb5RvZrAg&s",
  },
  {
    name: "Grant Medical College Mumbai",
    ownership: "Government",
    established: "1845",
    state: "Maharashtra",
    city: "Mumbai",
    category: "Medical",
    course: "MBBS",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQEJbO7ZwbHWNA/company-logo_200_200/company-logo_200_200/0/1630594424316?e=2147483647&v=beta&t=i7ejBuKCh-kSzscQeqoDXpNEvk9vhh-mQchtMzSxQ5g",
  },
  {
    name: "Seth GS Medical College Mumbai",
    ownership: "Government",
    established: "1926",
    state: "Maharashtra",
    city: "Mumbai",
    category: "Medical",
    course: "MBBS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Logo_gsmc_my_creation.png",
  },
  {
    name: "Osmania Medical College Hyderabad",
    ownership: "Government",
    established: "1846",
    state: "Telangana",
    city: "Hyderabad",
    category: "Medical",
    course: "MBBS",
    logo: "https://getmyuniversity.com/images/university_images/logo-osmania-medical-college-hyderabad.jpg",
  },
];

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

  // ✅ Filtering Logic
  const filteredColleges = allColleges.filter((college) => {
    return (
      (searchQuery === "" ||
        college.name.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (filters.state === "" || college.state === filters.state) &&
      (filters.city === "" || college.city === filters.city) &&
      (filters.ownership === "" || college.ownership === filters.ownership) &&
      (filters.category === "" || college.category === filters.category) &&
      (filters.course === "" || college.course === filters.course)
    );
  });

  // Sort the colleges based on the selected option
  const sortedColleges = [...filteredColleges].sort((a, b) => {
    if (sortBy === "Established Year") {
      return parseInt(a.established) - parseInt(b.established);
    } else if (sortBy === "Name") {
      return a.name.localeCompare(b.name);
    }
    // Default: NIRF Rank (since we don't have actual NIRF data, we'll sort by name)
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="flex flex-col items-center p-4">
      {/* ✅ TOP BANNER */}
      <div className="mt-20 bg-[rgb(44,225,220)] w-full max-w-6xl rounded-3xl flex flex-col md:flex-row items-center justify-between p-6 md:p-10 shadow-lg">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left leading-snug">
          Top 10 Government Medical <br /> Colleges in India
        </h2>
        <img
          className="h-40 sm:h-56 md:h-72 lg:h-80 w-auto object-contain mt-6 md:mt-0"
          src="https://medical.collegesuggest.com/_next/image?url=%2Fassets%2Fimages%2Fbanner_img.webp&w=828&q=75"
          alt="Top Government Medical Colleges"
        />
      </div>

      {/* ✅ MAIN SECTION - COLLEGE LIST + FILTERS */}
      <div className="flex flex-col md:flex-row gap-6 mt-10 w-full max-w-6xl">
        {/* LEFT SIDE - COLLEGE LIST */}
        <div className="flex-1">
          {/* Search + Sort */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
            <span className="px-4 py-2 bg-gray-100 rounded-lg font-semibold">
              Total Colleges: {filteredColleges.length}
            </span>

            <div className="flex flex-wrap gap-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border px-3 py-2 rounded-md"
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
                className="border px-3 py-2 rounded-md w-full sm:w-64"
              />
            </div>
          </div>

          {/* ✅ College Cards */}
          <div className="space-y-4">
            {sortedColleges.map((college, index) => {
              const collegeSlug = slugify(college.name);

              return (
                <Link to={`/college/${collegeSlug}`} key={index} className="block">
                  <div className="bg-white shadow-sm border rounded-xl p-5 flex flex-col gap-4 hover:shadow-md transition">
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
                        <h3 className="text-lg font-semibold">{college.name}</h3>
                        <p className="text-sm text-gray-600">
                          Ownership:{" "}
                          <span className="text-blue-500 font-medium">
                            {college.ownership}
                          </span>{" "}
                          • Established: {college.established}
                        </p>
                      </div>
                    </div>

                    {/* Middle Row: Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      {["Admissions", "Courses & Fees", "Cutoff", "Placements"].map(
                        (btn, i) => (
                          <button
                            key={i}
                            className="px-4 py-1.5 text-sm border rounded-full hover:bg-gray-50"
                          >
                            {btn}
                          </button>
                        )
                      )}
                    </div>

                    {/* Bottom Row: Compare + Bookmark */}
                    <div className="flex items-center gap-3">
                      <input type="checkbox" />
                      <span className="text-sm text-gray-600">Add to Compare</span>
                      <FaRegBookmark className="text-gray-500 cursor-pointer hover:text-blue-500" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* ✅ RIGHT SIDE - FILTER PANEL */}
        <div className="w-full md:w-72 flex-shrink-0">
          <div className="bg-white shadow-sm border rounded-xl p-5">
            <h4 className="font-semibold text-lg mb-4">Filter</h4>

            {[
              {
                key: "state",
                label: "State",
                options: Array.from(new Set(allColleges.map(c => c.state))),
              },
              {
                key: "city",
                label: "City",
                options: Array.from(new Set(allColleges.map(c => c.city))),
              },
              { 
                key: "ownership", 
                label: "Ownership", 
                options: Array.from(new Set(allColleges.map(c => c.ownership))) 
              },
              { 
                key: "category", 
                label: "Category", 
                options: Array.from(new Set(allColleges.map(c => c.category))) 
              },
              { 
                key: "course", 
                label: "Course", 
                options: Array.from(new Set(allColleges.map(c => c.course))) 
              },
            ].map((filter) => (
              <div key={filter.key} className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  {filter.label}
                </label>
                <select
                  value={filters[filter.key]}
                  onChange={(e) =>
                    setFilters({ ...filters, [filter.key]: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-lg text-sm"
                >
                  <option value="">All</option>
                  {filter.options.map((opt, idx) => (
                    <option key={idx} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            ))}

            {/* ✅ Reset Filters */}
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
              className="w-full mt-2 text-sm px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg"
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