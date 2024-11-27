import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Webcam from 'react-webcam';  // Import react-webcam

const AttendanceSection = () => {
  const [attendance, setAttendance] = useState([
    { id: 1, date: '2024-05-01', time: '10:00 AM', present: true, selfie: '/images/selfie1.jpg' },
    { id: 2, date: '2024-05-02', time: '10:15 AM', present: false, selfie: '/images/selfie2.jpg' },
    // Initial data can be fetched from the server
  ]);

  const [newSelfie, setNewSelfie] = useState(null);
  const [showWebcam, setShowWebcam] = useState(false);
  const webcamRef = React.useRef(null); // Reference to the webcam

  // Function to handle punch-in and selfie capture
  const handlePunchIn = () => {
    setShowWebcam(true); // Show the webcam for capturing the selfie
  };

  // Capture the selfie image from the webcam
  const captureSelfie = () => {
    const imageSrc = webcamRef.current.getScreenshot(); // Capture the screenshot from webcam
    const currentTime = new Date().toLocaleTimeString();
    const currentDate = new Date().toLocaleDateString();

    const newAttendance = {
      id: attendance.length + 1,
      date: currentDate,
      time: currentTime,
      present: true,  // Mark as present
      selfie: imageSrc  // The captured selfie
    };

    setAttendance([newAttendance, ...attendance]); // Add new attendance to the top
    setNewSelfie(imageSrc); // Set the captured selfie
    setShowWebcam(false); // Hide the webcam after capturing
  };

  return (
    <div className="flex">
      <div className="w-1/4">
        <Sidebar />
      </div>
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-semibold mb-6">Attendance</h1>

        {/* Punch-In Button */}
        <button
          onClick={handlePunchIn}
          className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-700 mb-4"
        >
          Punch In
        </button>

        {/* Show Webcam to capture selfie */}
        {showWebcam && (
          <div className="mb-4">
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width="100%"
              videoConstraints={{
                facingMode: "user", // Use the front camera
              }}
            />
            <button
              onClick={captureSelfie}
              className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-700 mt-4"
            >
              Capture Selfie
            </button>
          </div>
        )}

        {/* Display Selfie Preview after punch-in */}
        {newSelfie && (
          <div className="mb-4">
            <h3 className="text-lg font-medium">Your Selfie Preview:</h3>
            <img src={newSelfie} alt="Selfie" className="w-24 h-24 object-cover rounded-md mt-2" />
          </div>
        )}

        {/* Attendance List (History) */}
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="py-3 px-4 text-sm font-medium text-gray-600">Date</th>
              <th className="py-3 px-4 text-sm font-medium text-gray-600">Punch-In Time</th>
              <th className="py-3 px-4 text-sm font-medium text-gray-600">Selfie</th>
            </tr>
          </thead>
          <tbody>
            {attendance.map(({ id, date, time, selfie }) => (
              <tr key={id} className="border-b border-gray-200">
                <td className="py-3 px-4 text-sm">{date}</td>
                <td className="py-3 px-4 text-sm">{time}</td>
                <td className="py-3 px-4 text-sm">
                  <img src={selfie} alt="Selfie Thumbnail" className="w-12 h-12 object-cover rounded-md" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination (optional, can be implemented later) */}
        <div className="flex justify-center mt-6">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
            Previous
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 ml-4">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttendanceSection;
