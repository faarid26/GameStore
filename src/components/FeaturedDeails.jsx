import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
function FeaturedDetails({ products, dispatch }) {
  const filteredProducts = products.filter(
    (product) =>
      product.id === 22 ||
      product.id === 21 ||
      product.id === 23 ||
      product.id === 120
  );

  return (
    <section className="featured-deals-container">
      <div className="featured-deals">
        {filteredProducts.map((a) => (
          <div className="featured-product" key={a.id}>
            <Link to={`/details/${a.id}`} className="featured-image">
              <img src={a.image} alt="" />
            </Link>
            <div className="featured-about">
              <div className="featured-title">
                <h2>{a.title.slice(0, 16)}</h2>
              </div>
              <div className="featured-discount">
                <span>Up To</span>
                <h4>-90%</h4>
              </div>
              <div className="featured-btn">
                <Link to={`/details/${a.id}`} href="#">
                  Browse Deals
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const t = (a) => a;
export default connect(t)(FeaturedDetails);
