import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { connect } from "react-redux";
function ComingSoon({ products }) {
  // const [coming, setComing] = useState([]);
  const stop = (e) => {
    event.preventDefault();
  };
  const filteredProducts = products.filter((products) => products.id >=66 && products.id <= 108);
  return (
    <>
    <div data-aos="fade-up">
    <section style={window.innerWidth < 425 ? {display: "none"} : {}} className="products container">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          slidesPerView={4}
          breakpoints={{
            768: {
              slidesPerView: 4,
            },
          }}
          slidesPerGroup={4}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {filteredProducts.map((a) => (
            <SwiperSlide key={a.id}>
              <div className="product">
                <div className="product-image">
                  <img src={a.image} alt="" />
                </div>
                <div className="product-info">
                  <div className="product-title">
                    <h3>{a.title.slice(0, 22)}</h3>
                  </div>
                  <div className="product-title-info">
                    <div className="product-platforms">
                      <span className="fa-brands fa-windows"></span>
                    </div>
                    <div className="product-price">
                      <h4>{a.available}</h4>
                    </div>
                  </div>
                </div>  
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
    </>
  );
}
const t = (a) => a;
export default connect(t)(ComingSoon);
