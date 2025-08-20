import React, { useState } from "react";
import TimeTableComp from "../components/TimeTableComp";

const Timetable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timetableData, setTimetableData] = useState([]);
  const [newTimetable, setNewTimetable] = useState({
    title: "",
    day: "",
    startTime: "",
    endTime: "",
    course: "",
    courseTitle: "",
  });

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTimetable({ ...newTimetable, [name]: value });
  };

  const handleAddTimetable = () => {
    setTimetableData([...timetableData, newTimetable]);
    setNewTimetable({ title: "", day: "", startTime: "", endTime: "", course: "", courseTitle: "" });
    toggleModal();
  };

  return (
    <div className="p-8">
      <TimeTableComp/>

      <h1 className="text-3xl font-bold text-blue-600 mb-6">Timetable</h1>

      {/* Display Timetable */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {timetableData.map((entry, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-xl font-bold text-blue-600">{entry.title}</h3>
            <p>{entry.day}</p>
            <p>
              {entry.startTime} - {entry.endTime}
            </p>
            <p>{entry.course}</p>
            <p>{entry.courseTitle}</p>
          </div>
        ))}
      </div>

      {/* Add Timetable Button */}
      <button
        className="fixed bottom-8 right-8 bg-blue-600 text-white text-3xl rounded-full w-16 h-16 shadow-lg hover:bg-blue-700 transition"
        onClick={toggleModal}
      >
        +
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Add Timetable Entry</h2>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={newTimetable.title}
              onChange={handleInputChange}
              className="w-full mb-4 p-2 border rounded"
            />
            <select
              name="day"
              value={newTimetable.day}
              onChange={handleInputChange}
              className="w-full mb-4 p-2 border rounded"
            >
              <option value="">Select Day</option>
              {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
            <div className="flex gap-4 mb-4">
              <input
                type="time"
                name="startTime"
                value={newTimetable.startTime}
                onChange={handleInputChange}
                className="w-1/2 p-2 border rounded"
              />
              <input
                type="time"
                name="endTime"
                value={newTimetable.endTime}
                onChange={handleInputChange}
                className="w-1/2 p-2 border rounded"
              />
            </div>
            <input
              type="text"
              name="course"
              placeholder="Course Code"
              value={newTimetable.course}
              onChange={handleInputChange}
              className="w-full mb-4 p-2 border rounded"
            />
            <input
              type="text"
              name="courseTitle"
              placeholder="Course Title"
              value={newTimetable.courseTitle}
              onChange={handleInputChange}
              className="w-full mb-4 p-2 border rounded"
            />
            <div className="flex justify-end gap-4">
              <button
                onClick={toggleModal}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleAddTimetable}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timetable;
