import { doc } from "firebase/firestore";
import { produceWithPatches } from "immer";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ClassDataService from "../services/classservices";
const Cards = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  useEffect(() => {
    getClasses();
  }, []);

  const getClasses = async () => {
    const data = await ClassDataService.getAllClasses();
    console.log(data.docs);
    setLoading(false);
    setClasses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setLoading(true);
  };
  const navigate = useNavigate();
  const addClass = () => {
    navigate("/addclass");
  };
  const deleteHandler = async (id) => {
    setLoading2(true);
    await ClassDataService.deleteClass(id);
    setLoading2(false);
    getClasses();
  };
  const docs = [
    {
      id: 1,
      name: "Mr awwal",
      href: "#",
      price: "Mthematics",
      imageSrc:
        "https://images.unsplash.com/3/doctype-hi-res.jpg?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165",
      imageAlt:
        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    },
    {
      id: 2,
      name: "Mr awwal",
      href: "#",
      price: "  English",
      imageSrc:
        "https://images.unsplash.com/3/doctype-hi-res.jpg?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165",
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
      id: 3,
      name: "Mr awwal",
      href: "#",
      price: "Physics",
      imageSrc:
        "https://images.unsplash.com/3/doctype-hi-res.jpg?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165",
      imageAlt: "Person using a pen to cross a task off a docivity paper card.",
    },
    {
      id: 4,
      name: "Mr awwal",
      href: "#",
      price: "Chemistry",
      imageSrc:
        "https://images.unsplash.com/3/doctype-hi-res.jpg?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
      id: 4,
      name: "Mr awwal",
      href: "#",
      price: "Chemistry",
      imageSrc:
        "https://images.unsplash.com/3/doctype-hi-res.jpg?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
      id: 4,
      name: "Mr awwal",
      href: "#",
      price: "Chemistry",
      imageSrc: "",
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    // More docs...
  ];
  return (
    <div>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className=" ml-10 hidden  lg:flex justify-end ">
            <button
              onClick={addClass}
              class="bg-yellow-300   hover:bg-yellow-300 mb-10 text-white font-bold py-2 px-4 rounded"
            >
              Add Classes
            </button>
          </div>
          <div className=" lg:hidden  lgflex justify-end ">
            <button
              onClick={addClass}
              class="bg-yellow-300  hover:bg-yellow-300 mb-10 text-white font-bold py-2 px-4 rounded"
            >
              Add Classes
            </button>
          </div>
          <div className="grid grid-cols-1 ml-4  w-10/12 absolute gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {loading ? (
              <>
                {classes.map((doc, index) => (
                  <div
                    key={doc.id}
                    // to={`/singleclass?id=${doc.id}`}
                    // className="group"
                  >
                    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                      <Link to={`/dash?id=${doc.id}`}>
                        <img
                          src={doc.image}
                          alt={doc.imageAlt}
                          className="w-full h-full object-center object-cover group-hover:opacity-75"
                        />
                      </Link>
                    </div>
                    <h3 className="mt-4 text-sm text-gray-700">{doc.title}</h3>
                    <div className="flex justify-between ">
                      <p className="mt-1 text-lg font-medium text-gray-900">
                        {doc.teacher}
                      </p>
                      {!loading2 && (
                        <>
                          <button
                            onClick={(e) => deleteHandler(doc.id)}
                            className="bg-green-300 px-4 rounded-lg text-white font-bold"
                          >
                            Delete
                          </button>
                        </>
                      )}
                      {loading2 && (
                        <>
                          {" "}
                          <button
                            disabled
                            className="bg-green-300 px-4 rounded-lg text-white font-bold"
                          >
                            <div className="w-5 h-5 text-center border-4 border-dashed rounded-full animate-spin border-white-400"></div>
                          </button>
                        </>
                      )}
                    </div>
                    <p className="mt-1 text-lg font-medium text-gray-900">
                      {doc.course}
                    </p>
                  </div>
                ))}
              </>
            ) : (
              <>
                <div className="w-10/12 mx-auto my-auto ">
                  {" "}
                  <div className="w-12 h-12 border-4  border-dashed rounded-full animate-spin dark:border-violet-400"></div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
