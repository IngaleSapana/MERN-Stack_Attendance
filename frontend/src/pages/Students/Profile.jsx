import React, { useState } from 'react';
import Sidebar from './Sidebar';

const ProfileSection = () => {
  // Sample student profile data
  const initialProfile = {
    name: 'John Doe',
    age: 18,
    grade: '12th',
    school: 'Example High School',
    email: 'john.doe@example.com',
    profilePicture: '/path/to/default-profile-pic.jpg', // Default profile picture
  };

  const [studentProfile, setStudentProfile] = useState(initialProfile);
  const [isEditing, setIsEditing] = useState(false); // State to toggle between view and edit mode
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [newProfilePic, setNewProfilePic] = useState(null);

  // Handle profile updates (name, email, etc.)
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setStudentProfile({
      ...studentProfile,
      [name]: value,
    });
  };

  // Handle password change
  const handlePasswordChange = (e) => {
    const { value } = e.target;
    if (e.target.name === 'newPassword') {
      setNewPassword(value);
    } else {
      setConfirmPassword(value);
    }
  };

  const handleSaveChanges = () => {
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Save the profile changes (can integrate with backend)
    alert('Profile updated successfully!');
    setIsEditing(false); // Switch back to view mode
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewProfilePic(URL.createObjectURL(file)); // Preview the image
    }
  };

  return (
    <div className="flex flex-col md:flex-row p-4">
      {/* Sidebar (Can be a separate component) */}
      <div className="w-full md:w-1/4 p-4 bg-gray-100 border-r">
        {/* Add sidebar content here */}
        <h2 className="text-xl font-semibold text-gray-800">Profile Sidebar</h2>
        {/* Sidebar content */}
      </div>

      {/* Profile Content */}
      <div className="w-full md:w-3/4 p-6">
        <h1 className="text-2xl font-semibold mb-4">{isEditing ? 'Edit Profile' : 'Profile'}</h1>

        {/* Profile Information */}
        <div className="space-y-6">
          {isEditing ? (
            <>
              {/* Editable Profile Fields */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={studentProfile.name}
                  onChange={handleProfileChange}
                  className="mt-2 p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={studentProfile.email}
                  onChange={handleProfileChange}
                  className="mt-2 p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Age:</label>
                <input
                  type="number"
                  name="age"
                  value={studentProfile.age}
                  onChange={handleProfileChange}
                  className="mt-2 p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Grade:</label>
                <input
                  type="text"
                  name="grade"
                  value={studentProfile.grade}
                  onChange={handleProfileChange}
                  className="mt-2 p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">School:</label>
                <input
                  type="text"
                  name="school"
                  value={studentProfile.school}
                  onChange={handleProfileChange}
                  className="mt-2 p-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* Profile Picture Upload */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Profile Picture:</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePicChange}
                  className="mt-2 p-2 border border-gray-300 rounded-md"
                />
                {newProfilePic && (
                  <img
                    src={newProfilePic}
                    alt="New Profile"
                    className="w-24 h-24 rounded-full mt-4 object-cover"
                  />
                )}
              </div>

              {/* Password Change Section */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">New Password:</label>
                <input
                  type="password"
                  name="newPassword"
                  value={newPassword}
                  onChange={handlePasswordChange}
                  className="mt-2 p-2 border border-gray-300 rounded-md"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Confirm Password:</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handlePasswordChange}
                  className="mt-2 p-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* Save Changes Button */}
              <button
                onClick={handleSaveChanges}
                className="mt-6 bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
              >
                Save Changes
              </button>
            </>
          ) : (
            <>
              {/* View Profile Fields */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Name:</label>
                <p className="text-gray-900">{studentProfile.name}</p>
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Email:</label>
                <p className="text-gray-900">{studentProfile.email}</p>
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Age:</label>
                <p className="text-gray-900">{studentProfile.age}</p>
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Grade:</label>
                <p className="text-gray-900">{studentProfile.grade}</p>
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">School:</label>
                <p className="text-gray-900">{studentProfile.school}</p>
              </div>

              {/* Profile Picture */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">Profile Picture:</label>
                <img
                  src={newProfilePic || studentProfile.profilePicture}
                  alt="Profile"
                  className="w-24 h-24 rounded-full mt-4 object-cover"
                />
              </div>

              {/* Edit Button */}
              <button
                onClick={() => setIsEditing(true)}
                className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
              >
                Edit Profile
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
