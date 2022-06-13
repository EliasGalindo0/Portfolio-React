import React, { useState } from "react";
import Context from "./Context";

function Provider({ children }) {
  const [tech, setTech] = useState([]);
  const [showAbout, setShowAbout] = useState('false');
  const [showRepo, setShowRepo] = useState('false');
  const [showSocial, setShowSocial] = useState('true');
  const [showSkills, setShowSkills] = useState('false');
  
  const toogleAbout = () => {
    setShowAbout(!showAbout);
  };

  const toogleRepo = () => {
    setShowRepo(!showRepo);
  };

  const toogleSocial = () => {
    setShowSocial(!showSocial);
  };

  const toogleSkills = () => {
    setShowSkills(!showSkills);
  };

  const contextValue = {
    tech,
    setTech,
    showAbout,
    showRepo,
    showSocial,
    showSkills,
    toogleAbout,
    toogleRepo,
    toogleSocial,
    toogleSkills,
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};

export default Provider;