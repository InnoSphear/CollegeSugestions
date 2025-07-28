import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import collegesData from './collegesData.json';

const CollegeProfile = () => {
  const { collegeSlug } = useParams();
  const [college, setCollege] = useState(null);
  const [activeTab, setActiveTab] = useState('Overview');

  useEffect(() => {
    const foundCollege = collegesData.colleges.find(
      c => c.slug === collegeSlug || slugify(c.name) === collegeSlug
    );
    setCollege(foundCollege);
  }, [collegeSlug]);

  const slugify = (str) => {
    return str
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "")
      .trim()
      .replace(/\s+/g, "-");
  };

  if (!college) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  // Prepare data for charts
  const graduationData = college.placements?.graduationPercentage?.years.map((year, index) => ({
    year,
    ug: college.placements.graduationPercentage.ug[index],
    pg: college.placements.graduationPercentage.pg[index]
  }));

  const tabs = [
    'Overview', 'Course & Fees', 'Placements', 'Student Strength',
    'Admission & Eligibility', 'Amenities', 'Cutoff', 'Faculty', 'Review', 'Q&A'
  ];

  return (
    <div className="bg-gray-50 min-h-screen mt-24">
          {/* Tabs Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs.map(tab => (
              <button
                key={tab}
                className={`px-4 py-3 whitespace-nowrap font-medium text-sm ${activeTab === tab ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Breadcrumb Navigation */}
      <div className="bg-white shadow-sm py-2 border-b">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/medical" className="hover:text-blue-600">Medical</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-400">{college.name}</span>
          </nav>
        </div>
      </div>

      {/* College Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-800">{college.name}</h1>
          <div className="flex flex-wrap items-center mt-2 text-gray-600 text-sm">
            <span>University Colleges in India</span>
            <span className="mx-2 hidden sm:inline">•</span>
            <span className="block sm:inline">{college.city}, {college.state}</span>
          </div>
        </div>
      </div>

    

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Overview Tab */}
        {activeTab === 'Overview' && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">{college.name} Overview</h2>
            <p className="text-gray-700 mb-6">{college.overview}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Highlights</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Established in {college.established}</li>
                  <li>{college.ownership} ownership</li>
                  <li>Located in {college.city}, {college.state}</li>
                  <li>Offers {college.courses?.length || 0} courses</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Quick Facts</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>NIRF Ranking: #1 in Medical</li>
                  <li>Approved by: MCI</li>
                  <li>Campus Size: 100+ acres</li>
                  <li>Total Faculty: {college.faculty?.total || 'N/A'}</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Courses & Fees Tab */}
        {activeTab === 'Course & Fees' && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Courses and Fees</h2>
            <p className="text-gray-700 mb-6">
              {college.name} offers {college.courses?.length || 0} courses at both the undergraduate and postgraduate levels. 
              Admission to {college.courses?.join(', ')} programs are available at this institution.
            </p>
            
            <div className="space-y-4">
              {college.coursesAndFees?.map((course, index) => (
                <div key={index} className="border rounded-lg p-4 hover:shadow-md transition">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-lg text-gray-800">{course.name}</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {course.level}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3 text-sm">
                    <div>
                      <p className="text-gray-500">Duration</p>
                      <p className="font-medium">{course.duration}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Total Fees</p>
                      <p className="font-medium">{course.totalFees}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Seats</p>
                      <p className="font-medium">{course.seats}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Affiliated by</p>
                      <p className="font-medium">{college.name}</p>
                    </div>
                  </div>
                  <button className="mt-3 text-blue-600 text-sm font-medium hover:underline flex items-center">
                    Read More <span className="ml-1">▼</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Placements Tab */}
        {activeTab === 'Placements' && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Graduation & Placements</h2>
            <p className="text-gray-700 mb-6">
              There is no official placement data available for {college.name}. 
              But different sources say that the average placement package for students is between {college.placements?.averagePackage || 'N/A'}.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-medium text-gray-800 mb-4">Graduation Percentage - UG 5 Years</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={graduationData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="year" stroke="#888" />
                      <YAxis stroke="#888" />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '0.375rem' }}
                      />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="ug" 
                        stroke="#3b82f6" 
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                        name="UG Percentage" 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-4">Graduation Percentage - PG 2 Years</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={graduationData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="year" stroke="#888" />
                      <YAxis stroke="#888" />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '0.375rem' }}
                      />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="pg" 
                        stroke="#10b981" 
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                        name="PG Percentage" 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Tabs - Placeholder Content */}
        {['Student Strength', 'Admission & Eligibility', 'Amenities', 'Cutoff', 'Faculty', 'Review', 'Q&A'].includes(activeTab) && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">{activeTab}</h2>
            <p className="text-gray-700">Content for {activeTab} will be displayed here.</p>
          </div>
        )}
      </div>

      {/* Other Colleges Section */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <h2 className="text-xl font-semibold mb-4">Other Colleges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {collegesData.colleges
            .filter(c => c.id !== college.id)
            .slice(0, 2)
            .map(otherCollege => (
              <Link 
                to={`/college/${otherCollege.slug || slugify(otherCollege.name)}`} 
                key={otherCollege.id} 
                className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition"
              >
                <h3 className="font-medium text-gray-800">{otherCollege.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{otherCollege.city}</p>
                <span className="mt-2 inline-block text-blue-600 text-sm font-medium hover:underline">
                  View
                </span>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CollegeProfile;