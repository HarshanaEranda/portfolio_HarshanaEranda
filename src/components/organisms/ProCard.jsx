import React from "react";
import ProSubCard from "../molecules/ProSubCard";

const renderEducation = (Projects) => {
  return Projects.map((project, index) => {
    if (index % 2 === 0) {
     return (
        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-3">
          <div key={Projects[index].id}>
            <ProSubCard Project={project} />
          </div>
          {Projects[index + 1] && (
            <div key={Projects[index+1].id} >
              <ProSubCard Project={Projects[index + 1]} />
            </div>
          )}
        </div>
      );
    };
  }, []);
};

const ProjectCard = ({ Projects }) => {
  
  return (
    <div className="max-w-screen-lg p-6 bg-white  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {renderEducation(Projects)}
    </div>
  );
};
export default ProjectCard;
