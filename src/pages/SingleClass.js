import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ClassDataService from "../services/classservices";
import CommentDataService from "../services/commentservices";
import Dashboardf2 from "./Dashboardf2";
const SingleClass = () => {
  const [teacher, setTeacher] = useState();
  const [course, setCourse] = useState();
  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const [uname, setUname] = useState("");
  const [ucomment, setUcomment] = useState("");
  const [comment, setComment] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ error: false, msg: "" });

  const location = useLocation();
  useEffect(() => {
    getOneClass();
  }, []);
  useEffect(() => {
    getComments();
  }, []);

  const getOneClass = async () => {
    const search = location.search;
    const id = new URLSearchParams(search).get("id");
    console.log(id);
    try {
      const docSnap = await ClassDataService.getClass(id);
      setTitle(docSnap.data().title);
      setCourse(docSnap.data().course);
      setTeacher(docSnap.data().teacher);
      setImage(docSnap.data().image);
    } catch (error) {}
  };
  const getComments = async () => {
    const data = await CommentDataService.getAllComments();
    console.log(data.docs);
    setComment(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    // setLoading(true);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title === "" || course === "" || teacher === "") {
      setMessage({ error: true, msg: "all fiels ness" });
      return;
    }
    const newComment = {
      uname,
      ucomment,
    };
    console.log(newComment);
    try {
      await CommentDataService.addComment(newComment);
      setMessage({ error: false, msg: "ne Class Added Sucessfully" });
      getComments();
    } catch (err) {
      console.log(err);
    }
    setUname("");
    setUcomment("");
    // setTeacher("");
  };

  return (
    <>
      <div className="w-full ">
        {/* <div className="lg:flex hidden">
          <div className="">
            <Dashboardf2 /> 
          </div> 
        </div> */}
        <div>
          <img className="h-96 w-screen object-cover" src={image} alt="" />
          <div className="text-4xl font-bold">
            <h1> {course}</h1>
          </div>
          <div className="text-2xl">
            <h1>{teacher}</h1>
          </div>
          <div className="text-xl">
            <h1>{title}</h1>
          </div>
          <div className="w-full ">
            {/* <button className="bg-yellow-300 shadow ">Add Class</button> */}
            <div className="flex flex-col w-full  p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
              {/* {message?.msg && (
              <h1 className="cursor-pointer" onClick={() => setMessage("")}>
                {message?.msg}
              </h1>
            )} */}
              <div className="w-full ">
                {comment.map((item) => {
                  return (
                    <>
                      <div className="w-full ">
                        <div className=" w-full  h-10 flex">
                          <img
                            alt="avatar"
                            width="48"
                            height="48"
                            class="rounded-full w-10 h-10 mr-4 shadow-lg mb-4"
                            src="https://cdn1.iconfinder.com/data/icons/technology-devices-2/100/Profile-512.png"
                          />
                          <h1 className="font-bold text-xl">{item.uname}</h1>
                        </div>
                        <div className="h-20">
                          <h4 className="text-lg mt-3">{item.ucomment}</h4>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="mb-8 text-center">
              <p className="text-sm dark:text-gray-400">
                Add Your Comment here
              </p>
            </div>
            <form className="space-y-12 ng-untouched ng-pristine ng-valid">
              <div className="space-y-4">
                {/* <div>
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
              </div> */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label for="password" className="text-sm">
                      Your Name
                    </label>
                  </div>
                  <input
                    type="text"
                    name="uname"
                    id="uname"
                    value={uname}
                    onChange={(e) => setUname(e.target.value)}
                    placeholder="Which course"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                  />
                </div>
                <div>
                  <label for="password" className="text-sm">
                    Your Comment Goes here
                  </label>
                  <textarea
                    name="ucomment"
                    value={ucomment}
                    onChange={(e) => setUcomment(e.target.value)}
                    class="w-full h-16 px-3 py-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
                  ></textarea>
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <button
                    onClick={handleSubmit}
                    className="w-full px-8 py-3 font-semibold rounded-md bg-yellow-300 text-white"
                  >
                    Post your comment
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleClass;
