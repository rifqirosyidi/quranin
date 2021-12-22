import React from "react";
import { FaBookmark } from "react-icons/fa";

const CardJelajah = () => {
  return (
    <div className="bg-primary p-6 relative rounded-xl shadow-none w-full cursor-pointer transition duration-1000 transform hover:-translate-y-2 hover:shadow-primary">
      <div className="flex flex-col items-start space-y-5">
        <p className="font-secondary text-secondary text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          asperiores omnis debitis,
        </p>
        <p className="font-primary text-lg font-medium tracking-wider text-emerald-400">
          Challenge
        </p>
        <FaBookmark className="absolute bottom-5 right-5 text-6xl text-green-500 text-opacity-5 " />
      </div>
    </div>
  );
};

export default CardJelajah;
