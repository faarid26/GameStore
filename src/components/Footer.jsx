import React from "react";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <section className="footer">
        <div className="header-bg">
          <div className="footer-header container">
            <div className="header-left">
              <ul>
                <li>
                  <a href="#">Kupon kodu</a>
                </li>
                <li>
                  <a href="#">Əlaqə</a>
                </li>
                <li>
                  <a href="#">Karyera fürsətis</a>
                </li>
                <li>
                  <a href="#">Oyununuzu təqdim edin</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
            <div className="header-right">
              <ul>
                <li>
                  <a className="fa-brands fa-square-facebook" href="#"></a>
                </li>
                <li>
                  <a className="fa-brands fa-twitter" href="#"></a>
                </li>
                <li>
                  <a className="fa-brands fa-twitch" href="#"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="main-bg">
          <div className="footer-main container">
            <div className="main-left">
              <NavLink to="/" className="logo">
                <img id="footer-logo" src="/logo.png" alt="" />
              </NavLink>
              <div className="lists">
                <ul>
                  <li>
                    <h5>Dil:</h5>
                  </li>
                  <li id="active">
                    <h5>Azerbaijan</h5>
                  </li>
                  <li>
                    <h5>Turkish</h5>
                  </li>
                  <li>
                    <h5>English</h5>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h5>Valyuta:</h5>
                  </li>
                  <li id="active">
                    <h5>USD</h5>
                  </li>
                </ul>
              </div>
            </div>
            <div className="main-right">
              <div className="footer-logo-large">
                <a
                  href="https://youtube.com/shorts/sWBL1bFcv-E?feature=share"
                  target="_blank"
                  className="footer-lg"
                >
                  game store
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="middle-bg">
          <div className="footer-middle container">
            <div className="middle-left">
              <ul>
                <li>
                  <a href="#">Legal</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
                <li>
                  <a href="#">Our thanks</a>
                </li>
                <li>
                  <a href="#">Cookie Declaration</a>
                </li>
                <li>
                  <a href="#">Imprint</a>
                </li>
              </ul>
              <span>
                © GameHive sp. z o.o. All rights reserved. All trademarks and
                registered trademarks are the property of their respective
                owners.
              </span>
            </div>
            <div className="middle-right">
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
