import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiFilter, FiMapPin, FiUsers, FiDollarSign, FiStar, FiChevronDown } from 'react-icons/fi';
import { collegesData } from '../data/collegesData';

const CollegeSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    state: '',
    type: '',
    tuitionRange: '',
    size: '',
    rating: ''
  });
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('name');

  const filteredColleges = useMemo(() => {
    let filtered = collegesData.filter(college => {
      const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           college.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           college.programs.some(program => program.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesState = !filters.state || college.state === filters.state;
      const matchesType = !filters.type || college.type === filters.type;
      const matchesSize = !filters.size || college.size === filters.size;
      const matchesRating = !filters.rating || college.rating >= parseInt(filters.rating);

      let matchesTuition = true;
      if (filters.tuitionRange) {
        const [min, max] = filters.tuitionRange.split('-').map(Number);
        matchesTuition = college.tuition >= min && college.tuition <= max;
      }

      return matchesSearch && matchesState && matchesType && matchesSize && matchesRating && matchesTuition;
    });

    // Sort results
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'tuition-low':
          return a.tuition - b.tuition;
        case 'tuition-high':
          return b.tuition - a.tuition;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchTerm, filters, sortBy]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      state: '',
      type: '',
      tuitionRange: '',
      size: '',
      rating: ''
    });
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Your Perfect College</h1>
          <p className="text-gray-600">Search through thousands of colleges and universities</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                  <FiFilter className="mr-2" />
                  Filters
                </h2>
                <button
                  onClick={clearFilters}
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Clear All
                </button>
              </div>

              {/* Search Input */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search
                </label>
                <div className="relative">
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="College name, location, or program..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* State Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  State
                </label>
                <select
                  value={filters.state}
                  onChange={(e) => handleFilterChange('state', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">All States</option>
                  <option value="California">California</option>
                  <option value="New York">New York</option>
                  <option value="Texas">Texas</option>
                  <option value="Florida">Florida</option>
                  <option value="Illinois">Illinois</option>
                  <option value="Massachusetts">Massachusetts</option>
                </select>
              </div>

              {/* College Type Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  College Type
                </label>
                <select
                  value={filters.type}
                  onChange={(e) => handleFilterChange('type', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">All Types</option>
                  <option value="Public">Public</option>
                  <option value="Private">Private</option>
                  <option value="Community">Community College</option>
                </select>
              </div>

              {/* College Size Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  College Size
                </label>
                <select
                  value={filters.size}
                  onChange={(e) => handleFilterChange('size', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">All Sizes</option>
                  <option value="Small">Small (Under 5,000)</option>
                  <option value="Medium">Medium (5,000-15,000)</option>
                  <option value="Large">Large (15,000+)</option>
                </select>
              </div>

              {/* Tuition Range Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Tuition
                </label>
                <select
                  value={filters.tuitionRange}
                  onChange={(e) => handleFilterChange('tuitionRange', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">All Ranges</option>
                  <option value="0-10000">Under $10,000</option>
                  <option value="10000-30000">$10,000 - $30,000</option>
                  <option value="30000-50000">$30,000 - $50,000</option>
                  <option value="50000-100000">$50,000+</option>
                </select>
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Minimum Rating
                </label>
                <select
                  value={filters.rating}
                  onChange={(e) => handleFilterChange('rating', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Any Rating</option>
                  <option value="4">4+ Stars</option>
                  <option value="3">3+ Stars</option>
                  <option value="2">2+ Stars</option>
                </select>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Sort and Results Count */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="text-gray-600">
                  Showing {filteredColleges.length} colleges
                </div>
                <div className="flex items-center gap-2">
                  <label className="text-sm font-medium text-gray-700">Sort by:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="name">Name</option>
                    <option value="rating">Rating</option>
                    <option value="tuition-low">Tuition (Low to High)</option>
                    <option value="tuition-high">Tuition (High to Low)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* College Results */}
            <div className="space-y-6">
              {filteredColleges.length === 0 ? (
                <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                  <div className="text-gray-400 text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No colleges found</h3>
                  <p className="text-gray-600">Try adjusting your search criteria or filters</p>
                </div>
              ) : (
                filteredColleges.map((college) => (
                  <div key={college.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="lg:w-1/4">
                        <img
                          src={college.image}
                          alt={college.name}
                          className="w-full h-48 lg:h-32 object-cover rounded-lg"
                        />
                      </div>
                      <div className="lg:w-3/4">
                        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                              <Link to={`/college/${college.id}`} className="hover:text-blue-600">
                                {college.name}
                              </Link>
                            </h3>
                            <div className="flex items-center text-gray-600 mb-2">
                              <FiMapPin className="mr-1 h-4 w-4" />
                              <span>{college.location}</span>
                            </div>
                            <div className="flex items-center mb-3">
                              <div className="flex items-center mr-4">
                                <FiStar className="text-yellow-400 mr-1 h-4 w-4" />
                                <span className="font-medium">{college.rating}</span>
                                <span className="text-gray-500 ml-1">({college.reviews} reviews)</span>
                              </div>
                              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                                {college.type}
                              </span>
                            </div>
                            <p className="text-gray-600 mb-4 line-clamp-2">{college.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {college.programs.slice(0, 3).map((program, index) => (
                                <span
                                  key={index}
                                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                                >
                                  {program}
                                </span>
                              ))}
                              {college.programs.length > 3 && (
                                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                                  +{college.programs.length - 3} more
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="lg:text-right lg:ml-6">
                            <div className="text-2xl font-bold text-blue-600 mb-2">
                              ${college.tuition.toLocaleString()}
                            </div>
                            <div className="text-sm text-gray-600 mb-4">per year</div>
                            <div className="flex items-center text-gray-600 mb-4">
                              <FiUsers className="mr-1 h-4 w-4" />
                              <span>{college.students.toLocaleString()} students</span>
                            </div>
                            <Link
                              to={`/college/${college.id}`}
                              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                            >
                              View Details
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeSearch;