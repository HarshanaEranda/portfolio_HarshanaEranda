import React from "react";
import EduSubField from "../molecules/EduSubField";

const EduCard = ({ Education}) => {
    const renderEducation = () => {
        let educationItems = [];
        for (let i = 0; i < Education.length; i++) {
          const keys = Object.keys(Education[i]);
          let itemContent = keys.map((key, index) => (
            <EduSubField key={key} Title={key} Details={Education[i][key]}></EduSubField>
          ));
          educationItems.push(
            <div key={i}>
              {itemContent}
            </div>
          );
        }
        return educationItems;
      };
  return (
    <div className="max-w-screen-lg p-6 bg-white  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {renderEducation()}
    </div>
  );
};
export default EduCard;
