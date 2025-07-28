import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import collegesData from './collegesData.json';

const CollegeProfile = () => {
  const { collegeSlug } = useParams();
  const [college, setCollege] = useState(null);
  const [activeTab, setActiveTab] = useState('Overview');
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top on initial render
    window.scrollTo(0, 0);
    
    const foundCollege = collegesData.colleges.find(
      c => c.slug === collegeSlug || slugify(c.name) === collegeSlug
    );
    
    if (!foundCollege) {
      navigate('/not-found');
      return;
    }
    
    setCollege(foundCollege);
  }, [collegeSlug, navigate]);

  const slugify = (str) => {
    return str
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "")
      .trim()
      .replace(/\s+/g, "-");
  };

  if (!college) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="-mb-px flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </div>
      {/* Breadcrumb Navigation */}
      <div className="bg-white py-3 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <div className="flex items-center">
                  <Link to="/" className="text-sm font-medium text-gray-500 hover:text-blue-600">
                    Home
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <Link to="/medical" className="ml-2 text-sm font-medium text-gray-500 hover:text-blue-600">
                    Medical
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2 text-sm font-medium text-gray-400">{college.name}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* College Header */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{college.name}</h1>
            <div className="mt-2 flex flex-col sm:flex-row sm:flex-wrap sm:mt-1 sm:space-x-4">
              <p className="text-sm text-gray-500">University Colleges in India</p>
              <p className="hidden sm:block text-sm text-gray-500">•</p>
              <p className="text-sm text-gray-500">{college.city}, {college.state}</p>
            </div>
          </div>
        </div>
      </div>

    

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Overview Tab */}
        {activeTab === 'Overview' && (
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-lg leading-6 font-medium text-gray-900">{college.name} Overview</h2>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">{college.overview}</p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Highlights</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Established in {college.established}</li>
                      <li>{college.ownership} ownership</li>
                      <li>Located in {college.city}, {college.state}</li>
                      <li>Offers {college.courses?.length || 0} courses</li>
                    </ul>
                  </dd>
                </div>
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Quick Facts</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>NIRF Ranking: #1 in Medical</li>
                      <li>Approved by: MCI</li>
                      <li>Campus Size: 100+ acres</li>
                      <li>Total Faculty: {college.faculty?.total || 'N/A'}</li>
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        )}

        {/* Courses & Fees Tab */}
        {activeTab === 'Course & Fees' && (
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-lg leading-6 font-medium text-gray-900">Courses and Fees</h2>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                {college.name} offers {college.courses?.length || 0} courses at both the undergraduate and postgraduate levels. 
                Admission to {college.courses?.join(', ')} programs are available at this institution.
              </p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <div className="space-y-4 px-4">
                {college.coursesAndFees?.map((course, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-medium text-gray-900">{course.name}</h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {course.level}
                      </span>
                    </div>
                    <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</p>
                        <p className="mt-1 font-medium text-gray-900">{course.duration}</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Total Fees</p>
                        <p className="mt-1 font-medium text-gray-900">{course.totalFees}</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Seats</p>
                        <p className="mt-1 font-medium text-gray-900">{course.seats}</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Affiliated by</p>
                        <p className="mt-1 font-medium text-gray-900">{college.name}</p>
                      </div>
                    </div>
                    <button className="mt-3 text-sm font-medium text-blue-600 hover:text-blue-500 flex items-center">
                      Read More
                      <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Placements Tab */}
        {activeTab === 'Placements' && (
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-lg leading-6 font-medium text-gray-900">Graduation & Placements</h2>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                There is no official placement data available for {college.name}. 
                But different sources say that the average placement package for students is between {college.placements?.averagePackage || 'N/A'}.
              </p>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
              <div className="space-y-8 px-4">
                <div>
                  <h3 className="text-base font-medium text-gray-900 mb-3">Graduation Percentage - UG 5 Years</h3>
                  <div className="h-64 bg-gray-50 rounded-lg p-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={graduationData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis dataKey="year" stroke="#6b7280" />
                        <YAxis stroke="#6b7280" />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: '#fff', 
                            border: '1px solid #e5e7eb', 
                            borderRadius: '0.375rem',
                            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
                          }}
                        />
                        <Legend />
                        <Line 
                          type="monotone" 
                          dataKey="ug" 
                          stroke="#3b82f6" 
                          strokeWidth={2}
                          dot={{ r: 4, stroke: '#3b82f6', strokeWidth: 2, fill: '#fff' }}
                          activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2, fill: '#fff' }}
                          name="UG Percentage" 
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-900 mb-3">Graduation Percentage - PG 2 Years</h3>
                  <div className="h-64 bg-gray-50 rounded-lg p-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={graduationData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis dataKey="year" stroke="#6b7280" />
                        <YAxis stroke="#6b7280" />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: '#fff', 
                            border: '1px solid #e5e7eb', 
                            borderRadius: '0.375rem',
                            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
                          }}
                        />
                        <Legend />
                        <Line 
                          type="monotone" 
                          dataKey="pg" 
                          stroke="#10b981" 
                          strokeWidth={2}
                          dot={{ r: 4, stroke: '#10b981', strokeWidth: 2, fill: '#fff' }}
                          activeDot={{ r: 6, stroke: '#10b981', strokeWidth: 2, fill: '#fff' }}
                          name="PG Percentage" 
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Tabs - Placeholder Content */}
        {['Student Strength', 'Admission & Eligibility', 'Amenities', 'Cutoff', 'Faculty', 'Review', 'Q&A'].includes(activeTab) && (
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-lg leading-6 font-medium text-gray-900">{activeTab}</h2>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">Content for {activeTab} will be displayed here.</p>
            </div>
          </div>
        )}
      </div>

      {/* Other Colleges Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Other Colleges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {collegesData.colleges
            .filter(c => c.id !== college.id)
            .slice(0, 2)
            .map(otherCollege => (
              <Link 
                to={`/college/${otherCollege.slug || slugify(otherCollege.name)}`} 
                key={otherCollege.id} 
                className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition"
              >
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-base font-medium text-gray-900">{otherCollege.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{otherCollege.city}</p>
                  <div className="mt-3">
                    <span className="text-sm font-medium text-blue-600 hover:text-blue-500">
                      View
                      <span aria-hidden="true"> &rarr;</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CollegeProfile;