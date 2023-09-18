import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
function BestRow() {
    const post = [
        {
            "id": 1,
            "img": "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg",
            "title": "Read Dead Redemption 2",
            "des": "Check out Read Dead Redemption 2 and feel the spring with these Devolver Digital games!",
            "simg": "https://wallpapers.com/images/featured/z2k9m7covvnglatm.jpg",
            "category1": "ADVENTURE GAMES",
            "category2": "ACTION GAMES"
        },
        {
            "id": 2,
            "img": "https://i.ytimg.com/vi/mhKBeFlZ0bw/maxresdefault.jpg",
            "title": "Terra Nil",
            "des": "Check out Terra Nil and feel the spring with these Devolver Digital games!",
            "simg": "https://cdn1.epicgames.com/spt-assets/54e27bdb65a74f6f899f2d8edfbaa4dd/terra-nil-video-sh3by.png",
            "category1": "ADVENTURE GAMES",
            "category2": "PUZZLE GAMES"
        },
        {
            "id": 3,
            "img": "https://cdn1.epicgames.com/offer/e97659b501af4e3981d5430dad170911/EGS_HogwartsLegacy_AvalancheSoftware_S1_2560x1440-2baf3188eb3c1aa248bcc1af6a927b7e",
            "title": "Hogwarts Legacy",
            "des": "Check out Hogwarts Legacy and feel the spring with these Devolver Digital games!",
            "simg": "https://rare-gallery.com/mocahbig/1345970-Hogwarts-Legacy-HD-Wallpaper.jpg",
            "category1": "ADVENTURE GAMES",
            "category2": "ACTION GAMES"
        },
        {
            "id": 4,
            "img": "https://modyolo.com/wp-content/uploads/2021/10/grand-theft-auto-v-ngh-thu-t-in-l-a-v-i-poster-game-hot-gta.webp",
            "title": "Grand Theft Auto 5",
            "des": "Check out Grand Theft Auto 5 and feel the spring with these Devolver Digital games!",
            "simg": "https://i.pinimg.com/originals/b3/41/0a/b3410a93baab7154a78187222b753f27.jpg",
            "category1": "OPEN WORLD GAMES",
            "category2": "ACTION GAMES"
        },
    ]
  return (
    <>
    <div data-aos="fade-up">
    <div className="best-row">
            <div className="column">
                    <h2 className="wrapper-title">
                    Klassik PC Oyunlarının Ən Yaxşısı
                    </h2>
            </div>
            <div className="recommended-posts">
                {post.slice(0,3).map((a) => (
                    <div key={a.id} className="rec-post">
                    <div className="rec-img">
                        <img src={a.img} alt="" />
                    </div>
                    <div className="entry-meta">
                    <div className="cat-links">
                <a href="#">{a.category1}</a>
                <a href="#">{a.category2}</a>
            </div>
                    </div>
                    <div className="entry-content">
                    <div className="entry-title">
                {a.des}
            </div>
                    </div>
                </div>
                ))}
            </div>
            <a className="load-btn">
              <h4>load more posts</h4>  
            </a>
        </div>
    </div>
    </>
  )
}

export default BestRow