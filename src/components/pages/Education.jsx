import React, { useState, useEffect } from "react";
import PageTemplate from "../templates/PageTemplate";
import EduCard from "../organisms/EduCard";
import fetchData from "../../services/api";

const Education = () => {
  const [personalInfo, setPersonalInfo] = useState(null);

  useEffect(() => {
    const loadPersonalInfo = async () => {
      const data = await fetchData();
      setPersonalInfo(data);
    };
    loadPersonalInfo();
  }, []); 
  return(
    <PageTemplate>
        <div className="container mx-auto py-8 md:py-12">
        <div className="max-w-max mx-auto sm:px-6 lg:px-6">
          <div className="grid grid-cols-1">
            <div className="col-span-full md:col-start-1  md:col-span-5 flex justify-center">
              <h1 className="font-bold mb-4 text-white text-4xl md:text-6xl">
                Education
              </h1>
            </div>
            <div className="col-span-full md:col-start-1 md:col-span-6">
              {personalInfo ? (
                <EduCard  Education={personalInfo.education} />
              ) : (
                <div>Loading...</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
export default Education;