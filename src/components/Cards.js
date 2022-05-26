import { doc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import ClassDataService from "../services/classservices";
const Cards = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getClasses();
  }, []);

  const getClasses = async () => {
    const data = await ClassDataService.getAllClasses();
    console.log(data.docs);
    setClasses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setLoading(true);
  };

  //   const docs = [
  //     {
  //       id: 1,
  //       name: "Mr awwal",
  //       href: "#",
  //       price: "Mthematics",
  //       imageSrc:
  //         "https://images.unsplash.com/3/doctype-hi-res.jpg?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165",
  //       imageAlt:
  //         "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  //     },
  //     {
  //       id: 2,
  //       name: "Mr awwal",
  //       href: "#",
  //       price: "  English",
  //       imageSrc:
  //         "https://images.unsplash.com/3/doctype-hi-res.jpg?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165",
  //       imageAlt:
  //         "Olive drab green insulated bottle with flared screw lid and flat top.",
  //     },
  //     {
  //       id: 3,
  //       name: "Mr awwal",
  //       href: "#",
  //       price: "Physics",
  //       imageSrc:
  //         "https://images.unsplash.com/3/doctype-hi-res.jpg?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165",
  //       imageAlt: "Person using a pen to cross a task off a docivity paper card.",
  //     },
  //     {
  //       id: 4,
  //       name: "Mr awwal",
  //       href: "#",
  //       price: "Chemistry",
  //       imageSrc:
  //         "https://images.unsplash.com/3/doctype-hi-res.jpg?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165",
  //       imageAlt:
  //         "Hand holding black machined steel mechanical pencil with brass tip and top.",
  //     },
  //     {
  //       id: 4,
  //       name: "Mr awwal",
  //       href: "#",
  //       price: "Chemistry",
  //       imageSrc:
  //         "https://images.unsplash.com/3/doctype-hi-res.jpg?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165",
  //       imageAlt:
  //         "Hand holding black machined steel mechanical pencil with brass tip and top.",
  //     },
  //     {
  //       id: 4,
  //       name: "Mr awwal",
  //       href: "#",
  //       price: "Chemistry",
  //       imageSrc: "",
  //       imageAlt:
  //         "Hand holding black machined steel mechanical pencil with brass tip and top.",
  //     },
  //     // More docs...
  //   ];
  return (
    <div>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">docs</h2>
          <div className="grid grid-cols-2 w-9/12 ml-10 absolute gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {loading ? (
              <>
                {classes.map((doc, index) => (
                  <a key={doc.id} href={doc.href} className="group">
                    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                      <img
                        src="https://images.unsplash.com/3/doctype-hi-res.jpg?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165"
                        alt={doc.imageAlt}
                        className="w-full h-full object-center object-cover group-hover:opacity-75"
                      />
                    </div>
                    <h3 className="mt-4 text-sm text-gray-700">{doc.title}</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">
                      {doc.teacher}
                    </p>
                    <p className="mt-1 text-lg font-medium text-gray-900">
                      {doc.course}
                    </p>
                  </a>
                ))}
              </>
            ) : (
            
              <div className="flex w-96 mx-96   justify-center">
                <div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
                  <div className="h-48 rounded-t bg-gray-700"></div>
                  <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-900">
                    <div className="w-full h-6 rounded bg-gray-700"></div>
                    <div className="w-full h-6 rounded bg-gray-700"></div>
                    <div className="w-3/4 h-6 rounded bg-gray-700"></div>
                  </div>
                </div>{" "}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
