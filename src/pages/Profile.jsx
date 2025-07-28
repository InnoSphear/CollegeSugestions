import React, { useState } from 'react';
import { FiUser, FiMail, FiPhone, FiMapPin, FiEdit3, FiSave, FiHeart, FiBookmark, FiTrendingUp } from 'react-icons/fi';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    bio: 'High school senior interested in computer science and engineering programs. Looking for universities with strong research opportunities.',
    graduationYear: '2024',
    gpa: '3.8',
    interests: ['Computer Science', 'Engineering', 'Mathematics', 'Research']
  });

  const savedColleges = [
    { id: 1, name: 'Stanford University', status: 'Applied' },
    { id: 2, name: 'MIT', status: 'Wishlist' },
    { id: 3, name: 'UC Berkeley', status: 'Applied' },
  ];

  const recentActivity = [
    { action: 'Saved', item: 'Harvard University', date: '2 days ago' },
    { action: 'Applied to', item: 'Stanford University', date: '1 week ago' },
    { action: 'Viewed', item: 'MIT', date: '1 week ago' },
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Save profile changes
    console.log('Profile saved:', profile);
  };

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Profile Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Header */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {profile.firstName[0]}{profile.lastName[0]}
                  </div>
                  <div className="ml-6">
                    <h1 className="text-2xl font-bold text-gray-900">
                      {profile.firstName} {profile.lastName}
                    </h1>
                    <p className="text-gray-600">Class of {profile.graduationYear}</p>
                    <p className="text-gray-600">GPA: {profile.gpa}</p>
                  </div>
                </div>
                <button
                  onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {isEditing ? (
                    <>
                      <FiSave className="mr-2 h-4 w-4" />
                      Save
                    </>
                  ) : (
                    <>
                      <FiEdit3 className="mr-2 h-4 w-4" />
                      Edit Profile
                    </>
                  )}
                </button>
              </div>

              {isEditing ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={profile.firstName}
                        onChange={handleChange}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={profile.lastName}
                        onChange={handleChange}
                        className="input-field"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Bio
                    </label>
                    <textarea
                      name="bio"
                      value={profile.bio}
                      onChange={handleChange}
                      rows={3}
                      className="input-field"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Graduation Year
                      </label>
                      <input
                        type="text"
                        name="graduationYear"
                        value={profile.graduationYear}
                        onChange={handleChange}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        GPA
                      </label>
                      <input
                        type="text"
                        name="gpa"
                        value={profile.gpa}
                        onChange={handleChange}
                        className="input-field"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <p className="text-gray-700 mb-4">{profile.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {profile.interests.map((interest, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h2>
              {isEditing ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={profile.email}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={profile.phone}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={profile.location}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center">
                    <FiMail className="h-5 w-5 text-gray-400 mr-3" />
                    <span>{profile.email}</span>
                  </div>
                  <div className="flex items-center">
                    <FiPhone className="h-5 w-5 text-gray-400 mr-3" />
                    <span>{profile.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <FiMapPin className="h-5 w-5 text-gray-400 mr-3" />
                    <span>{profile.location}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0">
                    <div className="flex items-center">
                      <FiTrendingUp className="h-5 w-5 text-blue-600 mr-3" />
                      <div>
                        <span className="font-medium">{activity.action}</span>
                        <span className="text-blue-600 ml-1">{activity.item}</span>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{activity.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Dashboard Stats */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Your Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Saved Colleges</span>
                  <span className="font-bold text-blue-600">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Applications</span>
                  <span className="font-bold text-green-600">5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Profile Views</span>
                  <span className="font-bold text-purple-600">248</span>
                </div>
              </div>
            </div>

            {/* Saved Colleges */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <FiBookmark className="mr-2" />
                Saved Colleges
              </h3>
              <div className="space-y-3">
                {savedColleges.map((college) => (
                  <div key={college.id} className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">{college.name}</span>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      college.status === 'Applied' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {college.status}
                    </span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium">
                View All Saved Colleges
              </button>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                  Search Colleges
                </button>
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg font-medium transition-colors">
                  Find Scholarships
                </button>
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg font-medium transition-colors">
                  Application Tracker
                </button>
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-3">Recommended for You</h3>
              <p className="text-blue-800 text-sm mb-4">
                Based on your profile, we think you'd be interested in these colleges.
              </p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                View Recommendations
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;