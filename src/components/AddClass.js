import React, { useState } from "react";
import ClassDataService from "../services/classservices";
const AddClass = () => {
  const [title, setTitle] = useState("");
  const [teacher, setTeacher] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (title === "" || course === "" || teacher === "") {
      setMessage({ error: true, msg: "all fiels ness" });
      return;
    }
    const newClass = {
      title,
      course,
      teacher,
    };
    console.log(newClass);
    try {
      await ClassDataService.addClass(newClass);
      setMessage({ error: false, msg: "ne Class Added Sucessfully" });
    } catch (err) {
      setMessage({ error: true, msg: err.message });
      console.log(err);
    }
    setTitle("");
    setCourse("");
    setTeacher("");
  };

  return (
    <>
      {message?.msg && (
        <h1 className="cursor-pointer" onClick={() => setMessage("")}>
          {message?.msg}
        </h1>
      )}
      <div>
        <button className="bg-yellow-300 shadow ">Add Class</button>
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign in</h1>
            <p className="text-sm dark:text-gray-400">Add Your Course</p>
          </div>
          <form className="space-y-12 ng-untouched ng-pristine ng-valid">
            <div className="space-y-4">
              <div>
                <label for="email" className="block mb-2 text-sm">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Title of your course"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label for="password" className="text-sm">
                    Course
                  </label>
                </div>
                <input
                  type="text"
                  name="course"
                  id="course"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  placeholder="Which course"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label for="password" className="text-sm">
                    Teacher
                  </label>
                </div>
                <input
                  type="text"
                  name="teacher"
                  id="teacher"
                  value={teacher}
                  onChange={(e) => setTeacher(e.target.value)}
                  placeholder="Your Name"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <button
                  onClick={handleSubmit}
                  className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900"
                >
                  Add Class
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddClass;
