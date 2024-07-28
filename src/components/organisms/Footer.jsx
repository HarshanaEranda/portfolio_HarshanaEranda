// import React from "react";
// import { FaLinkedin, FaGithub, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

// const Footer = () => {
//   const LinkedinUrl = process.env.REACT_APP_LINKEDIN_URL;
//   const GithubUrl = process.env.REACT_APP_GITHUB_URL;
//   const Email = process.env.REACT_APP_EMAIL;
//   return (
//     <footer className="bg-black py-6">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center">
//         <p className="text-white">© {new Date().getFullYear()} Your Portfolio. All rights reserved.</p>
//           <div className="grid grid-cols-3 pt-1">
//             <div className="col-start-2">
//               <div className="flex justify-center">
//               <a
//                 href={LinkedinUrl}
//                 className="flex justify-start p-3"
//               >
//                 <FaLinkedin size="1.5rem" color="white" />
//               </a>
//               <a
//                 href={GithubUrl}
//                 className="flex justify-center p-3"
//               >
//                 <FaGithub size="1.5rem" color="white" />
//               </a>
//               <a href={Email} className="flex justify-end p-3">
//                 <FaEnvelope size="1.5rem" color="white" />
//               </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaChevronUp, FaChevronDown } from "react-icons/fa";

const Footer = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const LinkedinUrl = process.env.REACT_APP_LINKEDIN_URL;
  const GithubUrl = process.env.REACT_APP_GITHUB_URL;
  const Email = process.env.REACT_APP_EMAIL;

  const toggleFooter = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <footer className={`fixed bottom-0 left-0 right-0 bg-black transition-all duration-1000 ease-in-out ${isExpanded ? 'py-6' : 'py-2'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={toggleFooter}
          className="w-full flex justify-center items-center text-white mb-2"
        >
          {isExpanded ? <FaChevronDown /> : <FaChevronUp />}
        </button>
        <div className={`text-center transition-all duration-1000 ease-in-out ${isExpanded ? 'opacity-100 h-30' : 'opacity-0 h-0 overflow-hidden'}`}>
          <p className="text-white">© {new Date().getFullYear()} Your Portfolio. All rights reserved.</p>
          <div className="grid grid-cols-3 pt-1">
            <div className="col-start-2">
              <div className="flex justify-center">
                <a href={LinkedinUrl} className="flex justify-start p-3">
                  <FaLinkedin size="1.5rem" color="white" />
                </a>
                <a href={GithubUrl} className="flex justify-center p-3">
                  <FaGithub size="1.5rem" color="white" />
                </a>
                <a href={`mailto:${Email}`} className="flex justify-end p-3">
                  <FaEnvelope size="1.5rem" color="white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;