import React from "react";
import { useContext } from "react";
import Context from "../context/Context";
import Trybe from "../images/Trybe.png";
import Treinaweb from "../images/Treinaweb.png";

export default function Certificates() {
  const { showCertificate, toogleCertificates } = useContext(Context)
  return(
    <>
    <div onClick={toogleCertificates}>
        {showCertificate ? <h1>Certificates ⏬</h1> : <h1>Certificates ⏫</h1>}
      </div>
      {!showCertificate ? (
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
          </div>
        </div>
      ) : null}
    </>
  );
}
