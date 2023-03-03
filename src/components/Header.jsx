import { React, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function Header({ setData }) {
  const [city, setCity] = useState("");
  const search = () => {
    // toast("Saving...");
    toast.loading("Waiting...");
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=47bad347e61e61373d9926e220f894fd&units=metric`
      )
      .then((res) => {
        toast.dismiss();
        setData(res.data);
        toast.success("Successfully created!");
      });
  };

  const handleChange = (e) => {
    setCity(e.target.value);
    e.keyCode === 13 && search();
  };

  return (
    <>
      <Toaster position="top-left" reverseOrder={false} />

      <header className="flex z-40 absolute justify-center items-center w-full h-16 bg-white shadow-lg dark:bg-gray-700 gap-4">
        <h1 className="absolute text-lg font-semibold italic left-5 text-gray-300">
          Weather Search
        </h1>
        <div className="flex items-center lg:w-64">
          <svg
            className="absolute z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
          </svg>
          <input
            type="text"
            className="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input"
            onKeyUp={handleChange}
            typeof="text"
            placeholder="Enter city"
          />
        </div>
        <button
          type="search"
          className="py-1.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-gray-100 rounded-full"
          onClick={() => search()}
        >
          Search
        </button>
      </header>
    </>
  );
}

export default Header;
