import React, { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";
function SpotDemo({products}) {
  const filteredProducts = products.filter((products) => (products.id >=21 && products.id <=23));
  const [spot, setSpot] = useState([]);
  return (
    <>
     <section className="spot-overview">
              <img src="https://images-1.gog-statics.com/d4d1947c0802d7190cf63e5fd31d70033bf8252f874077c8f8d5fcfac75c0759_takeover_bg_1680.webp"alt="" />
              <div className="overview__title container">
                <h2>asdasd</h2>
                <a href="#" className="custom__btn">
                  İndi Al
                </a>
              </div>
            </section>
    </>
  );
}
const t = (a) => a;
export default connect(t)(SpotDemo);
