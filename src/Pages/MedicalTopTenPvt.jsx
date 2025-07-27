import React, { useState } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";

// Helper function to create slugs from college names
const slugify = (str) => {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove non-word characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/--+/g, "-"); // Replace multiple hyphens with single
};

// ✅ Dummy college data for Private Medical Colleges
const allColleges = [
  {
    name: "Kasturba Medical College, Manipal",
    ownership: "Private",
    established: "1953",
    state: "Karnataka",
    city: "Manipal",
    category: "Medical",
    course: "MBBS",
    logo: "https://manipal.edu/content/dam/manipal/mu/images/logo.png",
  },
  {
    name: "Christian Medical College, Vellore",
    ownership: "Private",
    established: "1900",
    state: "Tamil Nadu",
    city: "Vellore",
    category: "Medical",
    course: "MBBS",
    logo: "https://www.cmch-vellore.edu/images/logo.png",
  },
  {
    name: "Sri Ramachandra Medical College and Research Institute",
    ownership: "Private",
    established: "1985",
    state: "Tamil Nadu",
    city: "Chennai",
    category: "Medical",
    course: "MBBS",
    logo: "https://www.sriramachandra.edu.in/wp-content/uploads/2020/06/sri-ramachandra-university-logo.png",
  },
  {
    name: "Amrita Vishwa Vidyapeetham, Kochi",
    ownership: "Private",
    established: "1998",
    state: "Kerala",
    city: "Kochi",
    category: "Medical",
    course: "MBBS",
    logo: "https://www.amrita.edu/sites/default/files/amrita-new-logo.svg",
  },
  {
    name: "JSS Medical College, Mysuru",
    ownership: "Private",
    established: "1984",
    state: "Karnataka",
    city: "Mysuru",
    category: "Medical",
    course: "MBBS",
    logo: "https://jssuni.edu.in/JSSWeb/images/logo.png",
  },
  {
    name: "Manipal Tata Medical College, Jamshedpur",
    ownership: "Private",
    established: "2019",
    state: "Jharkhand",
    city: "Jamshedpur",
    category: "Medical",
    course: "MBBS",
    logo: "https://www.tmh-jamshedpur.com/images/logo.png",
  },
  {
    name: "Bharati Vidyapeeth Medical College, Pune",
    ownership: "Private",
    established: "1989",
    state: "Maharashtra",
    city: "Pune",
    category: "Medical",
    course: "MBBS",
    logo: "https://www.bharatividyapeeth.edu/images/logo.png",
  },
  {
    name: "Dr. D. Y. Patil Medical College, Pune",
    ownership: "Private",
    established: "1996",
    state: "Maharashtra",
    city: "Pune",
    category: "Medical",
    course: "MBBS",
    logo: "https://dpu.edu.in/wp-content/uploads/2018/08/dpu-logo.png",
  },
  {
    name: "MS Ramaiah Medical College, Bangalore",
    ownership: "Private",
    established: "1979",
    state: "Karnataka",
    city: "Bangalore",
    category: "Medical",
    course: "MBBS",
    logo: "https://www.msrmc.ac.in/images/logo.png",
  },
  {
    name: "Hamdard Institute of Medical Sciences, New Delhi",
    ownership: "Private",
    established: "2011",
    state: "Delhi",
    city: "New Delhi",
    category: "Medical",
    course: "MBBS",
    logo: "https://www.jamiahamdard.edu/images/logo.png",
  },
];

const MedicalTopTenPvt = () => {
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
      <div className="mt-20 bg-[rgb(255,165,0)] w-full max-w-6xl rounded-3xl flex flex-col md:flex-row items-center justify-between p-6 md:p-10 shadow-lg">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left leading-snug">
          Top 10 Private Medical <br /> Colleges in India
        </h2>
        <img
          className="h-40 sm:h-56 md:h-72 lg:h-80 w-auto object-contain mt-6 md:mt-0"
          src="https://medical.collegesuggest.com/_next/image?url=%2Fassets%2Fimages%2Fbanner_img_private.webp&w=828&q=75"
          alt="Top Private Medical Colleges"
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
                          <span className="text-orange-500 font-medium">
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
                      <FaRegBookmark className="text-gray-500 cursor-pointer hover:text-orange-500" />
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

export default MedicalTopTenPvt;