import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import { Navigation } from "swiper";
import { Autoplay } from "swiper";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function SlickList() {
    const post = [
        {
            "id": 1,
            "img": "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg",
            "title": "Read Dead Redemption 2",
            "des": "Red Dead Redemption 2-ni kəşf edin və Devolver Digital oyunları ilə baharı hiss edin!",
            "simg": "https://wallpapers.com/images/featured/z2k9m7covvnglatm.jpg",
            "category1": "ADVENTURE GAMES",
            "category2": "ACTION GAMES"
        },
        {
            "id": 2,
            "img": "https://i.ytimg.com/vi/mhKBeFlZ0bw/maxresdefault.jpg",
            "title": "Terra Nil",
            "des": "Terra Nil kəşf edin və Devolver Digital oyunları ilə baharı hiss edin!",
            "simg": "https://cdn1.epicgames.com/spt-assets/54e27bdb65a74f6f899f2d8edfbaa4dd/terra-nil-video-sh3by.png",
            "category1": "ADVENTURE GAMES",
            "category2": "PUZZLE GAMES"
        },
        {
            "id": 3,
            "img": "https://cdn1.epicgames.com/offer/e97659b501af4e3981d5430dad170911/EGS_HogwartsLegacy_AvalancheSoftware_S1_2560x1440-2baf3188eb3c1aa248bcc1af6a927b7e",
            "title": "Hogwarts Legacy",
            "des": "Hogwarts Legacy kəşf edin və Devolver Digital oyunları ilə baharı hiss edin!",
            "simg": "https://rare-gallery.com/mocahbig/1345970-Hogwarts-Legacy-HD-Wallpaper.jpg",
            "category1": "ADVENTURE GAMES",
            "category2": "ACTION GAMES"
        },
        {
            "id": 4,
            "img": "https://modyolo.com/wp-content/uploads/2021/10/grand-theft-auto-v-ngh-thu-t-in-l-a-v-i-poster-game-hot-gta.webp",
            "title": "Grand Theft Auto 5",
            "des": "Grand Theft Auto 5 kəşf edin və Devolver Digital oyunları ilə baharı hiss edin!",
            "simg": "https://i.pinimg.com/originals/b3/41/0a/b3410a93baab7154a78187222b753f27.jpg",
            "category1": "OPEN WORLD GAMES",
            "category2": "ACTION GAMES"
        },
    ]
  return (
    <>
     <div className="slick-list">
                    <div className="slick-track">
                        <div className="slick-swip">
                        <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 3500,
        }}
        className="mySwiper"
      >
        {post.map((a) => (
          <SwiperSlide key={a.id}>
            <div className="slick-img">
                <img src={a.simg} alt="" />
            </div>
            <div className="cat-links">
                <a href="#">{a.category1}</a>
                <a href="#">{a.category2}</a>
            </div>
            <h2 className="entry-title">
                <a href="#">{a.des}</a>
            </h2>
          </SwiperSlide>
        ))}
      </Swiper>
                        </div>
                    </div>
                    <div className={window.pageYOffset > 100 ? "blog-prime fixed" : "blog-prime"}>
                        <div className="widget-title-container">
                        <h2 className="widget-title">
                        Haqqında GH
                        </h2>
                        </div>
                        <div className="author-info-container">
                        <div className="author-info">
                            <div className="author-background"></div>
                            <div className="img-container">
                            <div className="profile-img">
                                <img src="/logo.png" alt="" />
                            </div>
                            </div>
                            <div className="author-details">
                                <h3 className="author-name">-</h3>
                                <div className="author-bio">
                                GH internetdə klassik PC oyunlarını tapmaq və oynamaq üçün ən yaxşı platformadır.

Biz DRM-siz klassik və yeni PC oyunları, əla sövdələşmələr, mehriban heyət və 30 günlük tam geri ödənişlər təklif edən rəqəmsal oyun platformasıyıq!
                                </div>
                                <div className="author-social">
                                    <a href="#">
                                        <i className="fa-brands fa-facebook"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fa-brands fa-twitter"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default SlickList