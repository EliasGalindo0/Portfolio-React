import React, { useContext } from "react";
import Context from "../context/Context";

export default function Repositories() {
  const { showRepo, toogleRepo } = useContext(Context);

  return (
    <>
      <div onClick={toogleRepo}>
        {showRepo ? <h1>Repositories ⏬</h1> : <h1>Repositories ⏫</h1>}
      </div>
      {!showRepo ? (
        <div className='repo'>
          <div className='card'>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://github.com/EliasGalindo0'
            >
              <img
                className='tech-img'
                src='https://cdn-icons-png.flaticon.com/512/25/25231.png'
                alt='GitHub'
              />
            </a>
            <p className='tech-img'>GitHub</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
