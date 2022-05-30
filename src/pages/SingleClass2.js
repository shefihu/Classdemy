import React from "react";
import Navbar from "../components/Navbar";
import Dashboardf2 from "./Dashboardf2";
import SingleClass from "./SingleClass";

const SingleClass2 = () => {
  return (
    <div>
      <div className="lg:flex hidden  ">
        <div className="">
          <Dashboardf2 />
        </div>
      </div>
      <div className="lg:hidden">
        <Navbar />
        <SingleClass />
      </div>
    </div>
  );
};

export default SingleClass2;
