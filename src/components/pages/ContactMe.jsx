import React from "react";
import Form from "../organisms/Form";
import PageTemplate from "../templates/PageTemplate";

const ContactMe = () => {
  return (
    <PageTemplate>
      <div className="container mx-auto py-8 md:py-12 pt-20">
        <div className="max-w-3xl mx-auto sm:px-6 lg:px-6 p-3">
          <div className="grid grid-cols-1 ">
            <div className="col-span-full md:col-start-1  md:col-span-5 flex justify-center">
              <h1 className="font-bold mb-4 text-white text-4xl md:text-6xl">
              Contact Me
              </h1>
            </div>
            <div className="col-span-full md:col-start-1 md:col-span-6">
            <Form />
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default ContactMe;
