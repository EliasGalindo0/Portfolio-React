import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Basics from '../Components/bascis/Basics';
import Front from '../Components/front/Front';
import Certificates from '../Components/certificates/Certificates';

export default function Projects() {
  return (
    <div className="home">
      <Header />
      <Basics />
      <Front />
      <Certificates />
      <Footer />
      <div>
        <span>All rights reserved ©</span>
      </div>
    </div>
  );
}
