import React from "react";

const EduSubField = ({ Title, Details }) => {
  return (
    <div className="text-center">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {Title}
      </h5>
      <p className=" mt-3 mb-3 font-normal text-gray-700 dark:text-gray-400">
        {Details}
      </p>
    </div>
  );
};
export default EduSubField;
