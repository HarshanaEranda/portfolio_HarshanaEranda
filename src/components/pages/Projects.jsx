import React, { useState, useEffect } from "react";
import PageTemplate from "../templates/PageTemplate";
import ProjectCard from "../organisms/ProCard";
import fetchData from "../../services/api";

const Projects = () => {
  const [personalInfo, setPersonalInfo] = useState(null);

  useEffect(() => {
    const loadPersonalInfo = async () => {
      const data = await fetchData();
      setPersonalInfo(data);
    };
    loadPersonalInfo();
  }, []);

  return (
    <PageTemplate>
      <div className="container mx-auto py-12">
        <div className="max-w-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1">
            <div className="col-span-full md:col-start-2  md:col-span-4 flex justify-center">
              <h1 className="font-bold mb-4 text-white text-4xl md:text-6xl">
              Projects
              </h1>
            </div>
            <div className="col-span-full md:col-start-3 md:col-span-2">
              {personalInfo ? (
                <ProjectCard Projects={personalInfo.projects} />
              ) : (
                <div>Loading...</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Projects;
