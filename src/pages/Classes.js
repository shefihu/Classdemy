import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import Test9 from "./Test9";
import ClassDataService from "../services/classservices";

const Classes = () => {
  //   const [classes, setClasses] = useState([]);
  //   const getClasses = async () => {
  //     const data = await ClassDataService.getAllClasses();
  //     console.log(data.docs);
  //   };

  //   useEffect(() => {
  //     getClasses();
  //   }, []);

  return (
    <div>
      <div className="lg:flex hidden">
        <div className="">
          <Test9 />
        </div>
      </div>
      <div className="lg:hidden">
        <Navbar />
        <div>
          <div className="">
            <h1 className="font-bold text-4xl mx-6 my-6">
              Welcome to your Space,{" "}
              <span className="text-yellow-300 text-3xl font-extrabold">
                User
              </span>{" "}
            </h1>
          </div>
          <div className=" ">
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
