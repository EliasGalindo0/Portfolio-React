import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import colorguess from "../gifs/colorguess.gif";


export default function Projects() {
  // const { showCertificate, toogleCertificates } = useContext(Context)
  return(
    <div className="home">
      <h1>Projects</h1>
      <div className="projects">
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/EliasGalindo0/Trybe-projects/tree/elias-galindo-project-color-guess"
            >
              <img
                className="project"
                src={ colorguess }
                alt="Color-Guess"
              />
            </a>
            <p>Color Guess</p>
            </div>
        </div>
        <Link to="/Portfolio-React/" ><h1>Return to Home 🔙</h1></Link>
      <Footer />
    </div>
  );
}
