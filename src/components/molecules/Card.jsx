import React from "react";

const Card = ({ MyInfo, Details }) => {
  return (
    <div className="max-w-screen-md p-6 bg-white  rounded-lg  dark:bg-gray-800 text-center">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {MyInfo}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {Details}
      </p>
    </div>
  );
};
export default Card;
