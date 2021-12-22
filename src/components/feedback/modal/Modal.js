import React from "react";
import { FaStar } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import Trophy from "../../../assets/svg/trophy.svg";

export const Modal = ({ modalRef, title, description, children }) => {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 z-50 p-10 md:pt-24">
      <div className=" md:w-1/2 w-full mx-auto bg-primary rounded-lg md:rounded-lg">
        <div ref={modalRef}>
          <div className="p-4 lg:p-5">
            <h2>{title}</h2>
            <p>{description}</p>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ModalTrophy = ({ modalRef, title, description, children }) => {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 z-50 p-10 md:pt-24">
      <div className="md:w-80 relative w-full mx-auto bg-primary rounded-lg md:rounded-lg">
        <div ref={modalRef}>
          <FaStar className="absolute top-10 left-5 text-xs text-yellow-400" />
          <FaStar className="absolute top-20 left-16 text-xs text-yellow-400" />
          <FaStar className="absolute top-5 right-20 text-xs text-yellow-400" />
          <FaStar className="absolute top-14 right-5 text-xs text-yellow-400" />
          <BsStars className="absolute top-20 right-20 text-yellow-400" />
          <BsStars className="absolute top-32 left-20 text-yellow-400" />
          <div className="text-center pb-5">
            <div className="p-4 rounded-lg shadow-none bg-gray-900 mb-5">
              <Trophy className="w-20 mx-auto m-10" />
            </div>
            <h2 className="font-primary text-lg font-bold tracking-wider">
              {title}
            </h2>
            <p>{description}</p>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
