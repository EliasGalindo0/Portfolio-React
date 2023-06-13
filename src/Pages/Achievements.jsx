import React from 'react';
import Footer from '../Components/Footer';
import Basics from '../Components/basics/Basics';
import Front from '../Components/front/Front';
import Back from '../Components/back/Back';
import Cs from '../Components/cs/Cs';
import Certificates from '../Components/certificates/Certificates';

export default function Projects() {
  return (
    <div className="home">
      <Basics />
      <Front />
      <Back />
      <Cs />
      <Certificates />
      <Footer />
    </div>
  );
}
