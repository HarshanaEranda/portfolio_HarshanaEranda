import React from "react";
import PageTemplate from "../templates/PageTemplate";
import { FaLinkedin, FaGithub, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "../../styles/components/pages/Home.css"; // Import the custom styles
import profile from "../../asses/profile.jpeg";
const Home = () => {
  const Name = process.env.REACT_APP_NAME;
  const LinkedinUrl = process.env.REACT_APP_LINKEDIN_URL;
  const GithubUrl = process.env.REACT_APP_GITHUB_URL;
  const Email = process.env.REACT_APP_EMAIL;
  const Position = process.env.REACT_APP_POSITION;
  return (
    <PageTemplate>
      <div className="grid md:grid-cols-2 md:grid-rows-1 md:grid-flow-col">
        <div className="md:col-span-1 ... flex justify-end">
          <div className="pt-6">
            <div className="text-white">
              <h2 className="text-center pt-10 text-3xl">Hi I am</h2>
              <h1 className="text-center  text-6xl">{Name}</h1>
              <h3 className="text-center  pt-2 text-3xl pb-2">{Position}</h3>
            </div>
            <div className="pt-2">
              <div className="grid grid-cols-3">
                <a
                  href={LinkedinUrl}
                  className="flex justify-start col-start-2 row-start-1 pl-1"
                >
                  <FaLinkedin size="2rem" color="white" />
                </a>
                <a
                  href={GithubUrl}
                  className="flex justify-center col-start-2 row-start-1"
                >
                  <FaGithub size="2rem" color="white" />
                </a>
                <a href={Email} className="flex justify-end col-start-2 row-start-1 pr-1">
                  <FaEnvelope size="2rem" color="white" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 ... ">
          <div className="pt-8">
            <div className=" pb-4 flex justify-center">
              <img
                className="rounded-full object-cover w-96 h-96 ..."
                src={profile}
                alt="image description"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Home;
