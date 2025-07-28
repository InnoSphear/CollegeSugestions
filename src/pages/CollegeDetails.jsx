import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiMapPin, FiUsers, FiDollarSign, FiStar, FiCalendar, FiTrendingUp, FiBookOpen, FiAward } from 'react-icons/fi';
import { collegesData } from '../data/collegesData';

const CollegeDetails = () => {
  const { id } = useParams();
  const college = collegesData.find(c => c.id === parseInt(id));

  if (!college) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">College Not Found</h1>
          <Link to="/search" className="text-blue-600 hover:text-blue-800">
            Back to Search
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={college.image}
          alt={college.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {college.name}
            </h1>
            <div className="flex items-center text-white text-lg">
              <FiMapPin className="mr-2" />
              <span>{college.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Overview</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {college.description}
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{college.rating}</div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{college.admissionRate}%</div>
                  <div className="text-sm text-gray-600">Acceptance Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{college.students.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{college.establishedYear}</div>
                  <div className="text-sm text-gray-600">Established</div>
                </div>
              </div>
            </div>

            {/* Programs */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Programs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {college.programs.map((program, index) => (
                  <div key={index} className="flex items-center p-4 bg-blue-50 rounded-lg">
                    <FiBookOpen className="text-blue-600 mr-3 h-5 w-5" />
                    <span className="font-medium text-gray-900">{program}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Highlights</h2>
              <div className="space-y-4">
                {college.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4"></div>
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Admissions */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Admissions Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{college.admissionRate}%</div>
                  <div className="text-sm text-gray-600">Acceptance Rate</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-lg font-bold text-blue-600 mb-2">{college.satRange}</div>
                  <div className="text-sm text-gray-600">SAT Range</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-lg font-bold text-blue-600 mb-2">{college.actRange}</div>
                  <div className="text-sm text-gray-600">ACT Range</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Facts */}
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Type</span>
                  <span className="font-medium">{college.type}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Size</span>
                  <span className="font-medium">{college.size}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Campus</span>
                  <span className="font-medium">{college.campus}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Students</span>
                  <span className="font-medium">{college.students.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Founded</span>
                  <span className="font-medium">{college.establishedYear}</span>
                </div>
              </div>

              <div className="border-t pt-6 mt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    ${college.tuition.toLocaleString()}
                  </div>
                  <div className="text-gray-600 mb-4">Annual Tuition</div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors">
                    Request Information
                  </button>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Student Reviews</h3>
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  <FiStar className="text-yellow-400 h-5 w-5" />
                  <span className="ml-1 text-lg font-bold">{college.rating}</span>
                </div>
                <span className="ml-2 text-gray-600">({college.reviews} reviews)</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Academic Quality</span>
                  <div className="flex items-center">
                    <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                    <span className="text-sm font-medium">4.5</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Campus Life</span>
                  <div className="flex items-center">
                    <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                    <span className="text-sm font-medium">4.2</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Value</span>
                  <div className="flex items-center">
                    <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '80%'}}></div>
                    </div>
                    <span className="text-sm font-medium">4.0</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Similar Colleges */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Similar Colleges</h3>
              <div className="space-y-3">
                {collegesData.filter(c => c.id !== college.id && c.type === college.type).slice(0, 3).map((similarCollege) => (
                  <Link
                    key={similarCollege.id}
                    to={`/college/${similarCollege.id}`}
                    className="block p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-medium text-gray-900">{similarCollege.name}</div>
                    <div className="text-sm text-gray-600">{similarCollege.location}</div>
                    <div className="flex items-center mt-1">
                      <FiStar className="text-yellow-400 h-4 w-4 mr-1" />
                      <span className="text-sm">{similarCollege.rating}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetails;