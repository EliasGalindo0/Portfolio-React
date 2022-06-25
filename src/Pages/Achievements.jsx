import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import colorguess from "../projects/colorguess.gif";
import unitTests from "../projects/unitTests.png";
import Trybe from "../images/Trybe.png";
import TrybeFrontEnd from "../images/TrybeFrontEnd.png";
import Treinaweb from "../images/Treinaweb.png";
import lessonsLearned from "../projects/lessonsLearned.gif";
import memeGenerator from "../projects/memeGenerator.gif";
import misteryLetter from "../projects/misteryLetter.gif";
import pixelArt from "../projects/pixelArt.gif";
import playgroundFunction from "../projects/playgroundFunction.png";
import shoppingCart from "../projects/shoppingCart.gif";
import toDoList from "../projects/toDoList.gif";

export default function Projects() {
  return(
    <div className="home">
      <h1>Projects 🚧</h1>
      <div className="projects">
      <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/EliasGalindo0/Trybe-projects/tree/elias-galindo-lessons-learned"
            >
              <img
                className="project"
                src={ lessonsLearned }
                alt="lessonsLearned"
              />
            </a>
            <p className="name">#1 Project</p>
          </div>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/EliasGalindo0/Trybe-projects/tree/elias-galindo-color-guess"
            >
              <img
                className="project"
                src={ colorguess }
                alt="Color-Guess"
              />
            </a>
            <p className="name">Color Guess</p>
          </div>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/EliasGalindo0/Trybe-projects/tree/elias-galindo-js-unit-tests"
            >
              <img
                className="project"
                src={ unitTests }
                alt="unitTests"
              />
            </a>
            <p className="name">Unit Tests</p>
          </div>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/EliasGalindo0/Trybe-projects/tree/elias-galindo-meme-generator-project"
            >
              <img
                className="project"
                src={ memeGenerator }
                alt="memeGenerator"
              />
            </a>
            <p className="name">Meme generator</p>
          </div>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/EliasGalindo0/Trybe-projects/tree/elias-galindo-mistery-letter"
            >
              <img
                className="project"
                src={ misteryLetter }
                alt="misteryLetter"
              />
            </a>
            <p className="name">Mistery Letter</p>
          </div>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/EliasGalindo0/Trybe-projects/tree/elias-galindo-pixels-art"
            >
              <img
                className="project"
                src={ pixelArt }
                alt="pixelArt"
              />
            </a>
            <p className="name">Pixels Art</p>
          </div>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/EliasGalindo0/Trybe-projects/tree/elias-galindo-playground-functions"
            >
              <img
                className="project"
                src={ playgroundFunction }
                alt="playgroundFunctions"
              />
            </a>
            <p className="name">Playground Functions</p>
          </div>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/EliasGalindo0/Trybe-projects/tree/elias-galindo-shopping-cart"
            >
              <img
                className="project"
                src={ shoppingCart }
                alt="shoppingCart"
              />
            </a>
            <p className="name">Shopping Cart</p>
          </div>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/EliasGalindo0/Trybe-projects/tree/elias-galindo-todo-list-project"
            >
              <img
                className="project"
                src={ toDoList }
                alt="toDoList"
              />
            </a>
            <p className="name">To Do List</p>
          </div>
        </div>

      <h1>Certificates 📜</h1>
      <div className="certificates">
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.credential.net/90f8e256-8639-4455-88a9-016533f03914#gs.3t98j5"
            >
              <img
                className="certificate"
                src={ Trybe }
                alt="Trybe"
              />
            </a>
            <p className="name">Basics</p>
            </div>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.credential.net/9ec5de57-1c95-48ab-bc39-557870129c5a#gs.4fs5yl"
            >
              <img
                className="certificate"
                src={ TrybeFrontEnd }
                alt="Trybe"
              />
            </a>
            <p className="name">Front-end</p>
            </div>
            <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.treinaweb.com.br/certificado/FYIXGLIVDRA4"
            >
              <img
                className="certificate"
                src={ Treinaweb }
                alt="Treinaweb"
              />
            </a>
          <p className="name">TreinaWeb</p>
          </div>
        </div>
        <div className="return-btn">
          <Link to="/Portfolio-React/" ><h1>Return to Home 🔙</h1></Link>
        </div>
          <Footer />
      <div>
        <span>All rights reserved ©</span>
      </div>
    </div>
  );
}
