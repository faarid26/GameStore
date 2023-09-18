import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
function News({ products }) {
  const data = [
    {
      id: 1,
      img: "https://images-2.gog-statics.com/ea2ea163fbefc2e5cbb76c02f57e0d474b858042633abd23a55a16e5050d42c4_news_tile.jpg",
      title: "Update: patch 4.03 for The Witcher 3: Wild Hunt",
      hour: "2 days ago",
      comment: 46,
    },
    {
      id: 2,
      img: "https://images-3.gog-statics.com/d5c29ada2bb0e623c8063f140e7ff798adbe779f5708e7d965ffe1c169a4700d.jpg",
      title:
        "Update: Cyberpunk 2077 with the patch 1.62 – technology preview of Ray Tracing: Overdrive Mode",
      hour: "1 hours ago",
      comment: 0,
    },
    {
      id: 3,
      img: "https://images-3.gog-statics.com/4690f4096a337c651e3180ba9a4befa89c52b629617b0335ec6c0a1272439148.jpg",
      title: "Release: Mechaneer Resta's Grand Adventure from Kagura Games",
      hour: "3 days ago",
      comment: 15,
    },
    {
      id: 4,
      img: "https://images-3.gog-statics.com/b1e2a8985b0c655d027e59d7dca234a5a3071fb44c5cbfd30cce39872600dae0_news_tile.jpg",
      title: "Release: Voodolls from Tate Multimedia with a -20% discount",
      hour: "2 days ago",
      comment: 3,
    },
    {
      id: 5,
      img: "https://images-2.gog-statics.com/f7956c44e0b9f113c76a14731ecdaae719858947b46aef02e16fb75cf728b800_news_tile.jpg",
      title: "Release: Paper Beast Soundtrack",
      hour: "4 days ago",
      comment: 3,
    },
    {
      id: 6,
      img: "https://images-4.gog-statics.com/c97b9cc9465cc9160bab7a089a36fa991b3c5439f8f2edb6933d4218a3d2f12a_news_tile.jpg",
      title: "Coming soon: Layers of Fear",
      hour: "5 days ago",
      comment: 2,
    },
    {
      id: 7,
      img: "https://images-3.gog-statics.com/9a5e141f3cc4cc2fc21c3e4f1d5d46277b877de77ae85992781c78e2a1078682_news_tile.jpg",
      title: "Release: Baby Storm",
      hour: "2 days ago",
      comment: 7,
    },
    {
      id: 8,
      img: "https://images-1.gog-statics.com/341fe5bda6b3e3a475d475c6aa5e3fb7e71602fe99312a44209f683d24177214.jpg",
      title: "Weekly Sale: deals up to -85% are up for grabs!",
      hour: "4 hours ago",
      comment: 1,
    },
    {
      id: 9,
      img: "https://images-2.gog-statics.com/85e728106e2dd0ff3761b3cb5cc7f6d4505bd1b6ac7f510ceb29874711c8b576_news_tile.jpg",
      title: "Coming soon: Vexlands!",
      hour: "12 hours ago",
      comment: 3,
    },
    {
      id: 10,
      img: "https://images-1.gog-statics.com/e49a98af5b7c638577b9149dd7e55e625f6b0aab7c07cbc6d9557b11c9667b18_news_tile.jpg",
      title: "Coming soon: Awesome news from Meridian4!",
      hour: "15 hours ago",
      comment: 4,
    },
    {
      id: 11,
      img: "https://cdn1.epicgames.com/spt-assets/152d740099ae45d9a69d0cfe6ea00771/download-nero-offer-uchok.png?h=480&quality=medium&resize=1&w=360",
      title: "Coming soon: N3Ro!",
      hour: "7 hours ago",
      comment: 12,
    },
    {
      id: 12,
      img: "https://cdn1.epicgames.com/spt-assets/22af81ed09734eafa9d7323981089be5/im-looking-for-3024-people-trzv6.jpg?h=480&quality=medium&resize=1&w=360",
      title: "Coming soon: I'm looking for 3024 people!",
      hour: "10 hours ago",
      comment: 15,
    },
  ];
  const filteredData = products.filter((products) => products.id >= 109 && products.id <= 117)
  return (
    <>
      <div data-aos="fade-down">
        <section className="news container">
          {/* {product.map((a) => (
          <div key={a.id} className="large-product">
            <div className="large-image">
              <img src={a.img} alt="" />
            </div>
            <div className="large-info-bg">
            <div className="large-info">
              <div className="large-title">
                <h2>{a.title}</h2>
              </div>
              <div className="large-data">
                <div className="large-comment">
                <i className="fa-solid fa-comment"></i><span>{a.comment}</span>
                </div>
             <div className="large-hour">
                <h3>{a.hour}</h3>
              </div>
             </div>
            </div>
            </div>
          </div>
        ))} */}
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            slidesPerView={4}
            slidesPerGroup={4}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            {filteredData.map((a) => (
              <SwiperSlide key={a.id}>
                <Link to={`/blogdetails/${a.id}`} className="new-product">
                  <div className="new-image">
                    <img src={a.image} alt="" />
                  </div>
                  <div className="new-info-bg">
                    <div className="new-info">
                      <div className="new-title">
                        <h2>{a.blogtitle}</h2>
                      </div>
                      <div className="new-data">
                        <div className="new-comment">
                          <i className="fa-solid fa-comment"></i>
                          <span>{a.comment}</span>
                        </div>
                        <div className="new-hour">
                          <h3>{a.hour}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </>
  );
}
const t = (a) => a;
export default connect(t) (News);
