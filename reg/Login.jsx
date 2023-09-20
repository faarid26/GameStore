import React, { useEffect, useRef } from "react";
function Login({ login, handleLogin }) {
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
        className={login ? "login-container active-login" : "login-container"}
      >
        <div ref={loginRef} className={login ? "login active-login" : "login"}>
          <i
            id="close"
            ref={closeRef}
            onClick={handleLogin}
            className="fa-solid fa-xmark"
          ></i>
          <h1>daxil ol</h1>
          <form>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Şifrə" />
            <button className="login-btn">daxil ol</button>
          </form>
          <div className="or">or</div>
          <div className="login-fb">
            <button className="fb-btn">facebookla davam et</button>
            <span>
              Facebook ilə daxil olmaq hazırda mümkün deyil. Əgər siz GOG-a bu
              şəkildə daxil olmusunuzsa və köməyə ehtiyacınız varsa, bu məqaləni
              oxuyun.
            </span>
          </div>
        </div>
        <div className="login-footer">
          <a href="/password/request">Şifrəni yenilə</a>
          <a href="/sign">Qeydiyyatdan keç</a>
        </div>
      </div>
    </>
  );
}

export default Login;
