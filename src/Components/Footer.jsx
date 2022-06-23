import React, { useEffect, useState } from "react";

export default function Footer() {
  const [isVisible, setVisible] = useState(false);

  const toogleVisible = () => {
    if(window.pageYOffset > 500) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

useEffect(() => {
  window.addEventListener('scroll', toogleVisible);

  return () => {
    window.removeEventListener('scroll', toogleVisible);
  }
}, []);

  return(
    <> 
    { isVisible ?   <h1
      className="footer"
      onClick={ () => { window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      document.location.reload(true);
    } 
  }
    >
        Back to top ⏫
    </h1> 
    : null }
    </>
  );
}
