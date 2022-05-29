import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
import { storage } from "../firebase";

import ClassDataService from "../services/classservices";
const AddClass = () => {
  const [title, setTitle] = useState("");
  const [teacher, setTeacher] = useState("");
  const [course, setCourse] = useState("");
  const [image, setImage] = useState("");
  const [cancel, setCancel] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imgUpload, setImgUpload] = useState(null);
  const [imgList, setImgList] = useState([]);
  const [message, setMessage] = useState({ error: false, msg: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (title === "" || course === "" || teacher === "" || image === "") {
      setMessage({ error: true, msg: "all fiels ness" });
      return;
    }
    const newClass = {
      title,
      course,
      teacher,
      image,
    };
    console.log(newClass);
    try {
      setLoading(true);
      await ClassDataService.addClass(newClass);
      setMessage({ error: false, msg: "New Class Added Sucessfully" });

      // if (imgUpload === null) return;

      // const imageRef = ref(storage, `classes/${imgUpload.name + v4()}`);
      // uploadBytes(imageRef, imgUpload).then((snapshot) => {
      //   getDownloadURL(snapshot.ref).then((url) => {
      //     setImgList((prev) => [...prev, url]);addclass
      //   });
      // });
      setCancel(true);
      setLoading(false);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
      console.log(err);
      setLoading(false);
    }
    setTitle("");
    setCourse("");
    setTeacher("");
    setImage("");
  };

  const imageListRef = ref(storage, "classes");
  // const uploadFile = () => {
  //   if (imgUpload === null) return;

  //   const imageRef = ref(storage, `classes/${imgUpload.name + v4()}`);
  //   uploadBytes(imageRef, imgUpload).then((snapshot) => {
  //     getDownloadURL(snapshot.ref).then((url) => {
  //       setImgList((prev) => [...prev, url]);
  //     });
  //   });
  // };
  // useEffect(() => {
  //   listAll(imageListRef).then((response) => {
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImgList((prev) => [...prev, url]);
  //       });
  //     });
  //   });
  // }, []);
  const cancelDe = () => {
    setCancel(false);
  };
  return (
    <>
      {message?.msg && (
        <div>
          {/* <h1 className="cursor-pointer" onClick={() => setMessage("")}>
            {message?.msg}
          </h1> */}
          {cancel && (
            <>
              <div class="w-full text-white bg-yellow-400">
                <div class="container flex items-center justify-between px-6 py-4 mx-auto">
                  <div class="flex">
                    <svg viewBox="0 0 40 40" class="w-6 h-6 fill-current">
                      <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"></path>
                    </svg>

                    <p class="mx-3">{message?.msg}</p>
                  </div>

                  <button
                    onClick={cancelDe}
                    class="p-1 transition-colors duration-200 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none"
                  >
                    <svg
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 18L18 6M6 6L18 18"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
      <div className=" flex justify-center">
        {/* <button className="bg-yellow-300 shadow ">Add Class</button> */}
        <div className="flex flex-col lg:w-1/2 p-6  rounded-md sm:p-10  dark:text-gray-100">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl text-yellow-300 font-bold">
              Add a Class
            </h1>
            {/* <p className="text-sm dark:text-gray-400">Add Your Course</p> */}
          </div>
          <form className="space-y-12 ng-untouched ng-pristine ng-valid">
            <div className="space-y-4 ">
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
                  className="w-full px-3 py-2 border lg:h-14 rounded-md border-gray-700  dark:text-gray-100"
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
                  className="w-full px-3 py-2 border lg:h-14 rounded-md border-gray-700  dark:text-gray-100"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label for="password" className="text-sm">
                    Image URL
                  </label>
                </div>
                <input
                  type="text"
                  name="image"
                  id="image"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="Your image url //"
                  className="w-full px-3 py-2 border lg:h-14 rounded-md border-gray-700  dark:text-gray-100"
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
                  className="w-full px-3 py-2 border lg:target:h-14 rounded-md border-gray-700  dark:text-gray-100"
                />
              </div>
              {/* <input
                type="file"
                onChange={(e) => {
                  setImgUpload(e.target.files[0]);
                }}
              /> */}
              {/* <button onClick={uploadFile}>Upload</button> */}
              {/* 
              {imgList.map((url) => {
                return (
                  <img
                    src={url}
                    alt=""
                    style={{ width: 40, height: 40, borderRadius: "50%" }}
                  />
                );
              })} */}
            </div>
            <div className="space-y-2">
              {/* <div>
                <button
                  onClick={handleSubmit}
                  className="w-full px-8 py-3 font-semibold rounded-md bg-yellow-300 text-white"
                >
                  Add Class
                </button>
              </div> */}
              <div class="block">
                {!loading && (
                  <button
                    onClick={handleSubmit}
                    className="w-full px-8 py-3 font-semibold rounded-md bg-yellow-300 text-white"
                  >
                    Add Class
                  </button>
                )}
                {loading && (
                  <button
                    disabled
                    className="w-full px-8 py-3 font-semibold rounded-md bg-yellow-300 text-white"
                  >
                    <div className="w-5 h-5 text-center border-4 border-dashed rounded-full animate-spin border-white-400"></div>
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddClass;
