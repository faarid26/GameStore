import React from "react";

function GearDrop({ handleLogin, handleRegister, gear }) {
  return (
    <>
      <div
        className={
          gear ? "gear-drop-container active-login" : "gear-drop-container"
        }
      >
        <div className={gear ? "gear-drop active-login" : "gear-drop"}>
          <h3>Hesab</h3>
          <ul>
            <li>
              <a onClick={handleLogin} href="#">
                Giriş
              </a>
            </li>
            <li>
              <a onClick={handleRegister} href="#">
                Qeydiyyat
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default GearDrop;
