import React from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

const PageTemplate = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-800">
      <Header />
      <main className="flex-grow pt-32">{children}</main>
      <Footer />
    </div>
  );
};

export default PageTemplate;