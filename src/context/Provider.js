/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import React from 'react';
import Context from './Context';

function Provider({ children }) {
  const [tech, setTech] = React.useState([]);
  const [showAbout, setShowAbout] = React.useState('false');
  const [showSocial, setShowSocial] = React.useState('false');
  const [showSkills, setShowSkills] = React.useState('false');

  const toogleAbout = () => {
    setShowAbout(!showAbout);
  };

  const toogleSocial = () => {
    setShowSocial(!showSocial);
  };

  const toogleSkills = () => {
    setShowSkills(!showSkills);
  };

  const resetAllToogles = () => {
    setShowAbout('false');
    setShowRepo('false');
    setShowSkills('false');
    setShowSocial('false');
  };

  const contextValue = React.useMemo(() => ({
    tech,
    setTech,
    showAbout,
    showSocial,
    showSkills,
    toogleAbout,
    toogleSocial,
    toogleSkills,
    resetAllToogles,
  }), [showAbout,
    showSocial,
    showSkills,
    toogleAbout,
    toogleSocial,
    toogleSkills,
    tech]);

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
