import React, { useEffect, useRef } from "react";
function Register({ register, handleRegister }) {
  const loginRef = useRef(null);
  const closeRef = useRef(null);
  const contRef = useRef(null);
  useEffect(() => {
    const close = closeRef.current;
    const login = loginRef.current;
    const container = contRef.current;
    close.addEventListener("click", (e) => {
      login.classList.remove("login-active");
      container.classList.remove("login-active");
    });
  }, []);
  return (
    <>
      <div
        ref={contRef}
        className={register ? "login-container active-login" : "login-container"}
      >
        <div ref={loginRef} className={register ? "login active-login" : "login"}>
          <i
            id="close"
            ref={closeRef}
            onClick={handleRegister}
            className="fa-solid fa-xmark"
          ></i>
          <h1>SIGN UP</h1>
          <form className="registerForm">
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="login-btn">Sign up now</button>
          </form>
          <div className="or">or</div>
          <div className="login-fb" id="fb1">
            <button className="fb-btn">continue with facebook</button>
            <span>
              Log in with Facebook is currently unavailable. If you logged in to
              GOG this way and need help, please read this article.
            </span>
          </div>
        </div>
        <div className="login-footer">
          <a href="/password/request">Password reset</a>
          <a href="/sign">Sign up now</a>
        </div>
      </div>
    </>
  );
}

export default Register;
