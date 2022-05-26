import React from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
const Classes = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <h1 className="font-bold text-4xl mx-6 my-6">
          Welcome to your Space,{" "}
          <span className="text-yellow-300 text-3xl font-extrabold">User</span>{" "}
        </h1>
      </div>
      <div className="w-screen flex items-center justify-center ">
        <Cards />
        {/* <div className='border-gray-300 border-2  justify-center place-items-center grid grid-cols-5 gap-2  h-96 w-11/12 rounded-md'>
               <div className='border-gray-200  border-2 h-60 w-52 rounded-md'>
<img style={{width:"210px", height:"139px"}} src="https://images.unsplash.com/3/doctype-hi-res.jpg?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165" alt="" />
<h1 className='mx-2 my-2'>Course: Physics 101</h1>
</div>
               <div className='border-gray-200  border-2 h-60 w-52 rounded-md'>
<img style={{width:"210px", height:"139px"}} src="https://images.unsplash.com/3/doctype-hi-res.jpg?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165" alt="" />
<h1 className='mx-2 my-2'>Course: Physics 101</h1>
</div>
               <div className='border-gray-200  border-2 h-60 w-52 rounded-md'>
<img style={{width:"210px", height:"139px"}} src="https://images.unsplash.com/3/doctype-hi-res.jpg?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165" alt="" />
<h1 className='mx-2 my-2'>Course: Physics 101</h1>
</div>
               <div className='border-gray-200  border-2 h-60 w-52 rounded-md'>
<img style={{width:"210px", height:"139px"}} src="https://images.unsplash.com/3/doctype-hi-res.jpg?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165" alt="" />
<h1 className='mx-2 my-2'>Course: Physics 101</h1>
</div>
               <div className='border-gray-200  border-2 h-60 w-52 rounded-md'>
<img style={{width:"210px", height:"139px"}} src="https://images.unsplash.com/3/doctype-hi-res.jpg?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165" alt="" />
<h1 className='mx-2 my-2'>Course: Physics 101</h1>
</div>
           </div> */}
      </div>
    </div>
  );
};

export default Classes;
