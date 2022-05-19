import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
const Test2 = () => {
  const [header, setHeader] = useState();
  let newValue = () => {
    setHeader(Cookies.get("power"));
  };
  useEffect(() => {
    setHeader(newValue);
  }, []);
  return (
    <div>
      <h1>{header}</h1>
    </div>
  );
};

export default Test2;
