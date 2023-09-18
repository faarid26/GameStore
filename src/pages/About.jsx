import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollUpButton from "../components/ScrollUpButton";
import { motion } from "framer-motion";
function About() {
  const data = [
    {
      id: 1,
      icon: "/icons/first.png",
      title: "Seçilmiş oyun seçimi",
      des: "Qeyri-adi AAA-lardan, unikal hind oyunlarından klassik oyunların ən yaxşısına qədər. Hər oyun buradadır, çünki biz onu sizin üçün seçmişik.",
    },
    {
      id: 2,
      icon: "/icons/star.png",
      title: "Daxili kollektorunuzu qidalandırmaq",
      des: "Mümkün qədər çox gözəl oyun təklif etmək GH üsuludur - hətta bu, çoxdan unudulmuş zirzəmilərimizi və çardaqlarımızı araşdırmaq deməkdir.",
    },
    {
      id: 3,
      icon: "/icons/heart.png",
      title: "Oyun yaradıcılarına hörmət",
      des: "Bizimlə olduğunuz zaman bütün oyunların qanuni olduğuna və satınalmalarınızın qanuni sahibləri və yaradıcıları dəstəklədiyinə əmin ola bilərsiniz.",
    },
    {
      id: 4,
      icon: "/icons/support.png",
      title: "Müasir dövr üçün klassiklərin təkmilləşdirilməsi",
      des: "Oyun sizdən daha köhnə olsa belə, biz onu hərtərəfli sınaqdan keçiririk, bütün səhvləri düzəldirik və yeni nəsil kompüterinizdə və müasir əməliyyat sistemlərində qüsursuz işləməsi üçün yamalar tətbiq edirik.",
    },
    {
      id: 5,
      icon: "/icons/diamond.png",
      title: "Hər oyun parlaq olmağa layiqdir",
      des: "Mükəmməl oyunların seçilməsinə nə qədər diqqət yetiririksə, eyni şey onları GOG-da vurğulamaq üçün də gedir - hər buraxılışı bayram kimi qəbul edirik.",
    },
  ];
  const data2 = [
    {
      id: 1,
      icon: "/icons/support.png",
      title: "Ulduz dəstəyi",
      des: "İstənilən vaxt köməyə ehtiyacınız olduğunu bilməklə sizə rahatlıq gətiririk, biz sizin üçün buradayıq. Müştəri dəstəyi komandamız bütün oyunlarla bağlı problemləri həll etmək üçün gecə-gündüz evdə işləyir.",
    },
    {
      id: 2,
      icon: "/icons/coin.png",
      title: "Risk yoxdur, tam geri qaytarılır",
      des: "Alış-verişinizdə özünüzü təhlükəsiz və məmnun hiss edin. Əgər oyun gözlədiyiniz kimi işləmirsə, satın alındıqdan sonra 30 gün ərzində tam geri qaytarma siyasətimizlə pulunuzu geri alın - heç bir problem yoxdur.",
    },
    {
      id: 3,
      icon: "/icons/messenger.png",
      title: "GH Komandası ilə birbaşa əlaqə",
      des: "Sualınız var, köməyə ehtiyacınız var və ya sadəcə əla PC oyunları haqqında danışmaq istəyirsiniz? GOG forumlarında əlaqə saxlayın, bizə tvit yazın və ya Facebook-da bizə mesaj göndərin, biz sizə cavab verəcəyik.",
    },
  ];
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 30 }}
      animate={{ opacity: 1, translateY: 0 }}
    >
      <main role="about">
        <div className="intro-section">
          <div className="section-texts container">
            <div className="about-header-text">
              <h2>Biz oyunların əbədi qalmasını təmin edirik</h2>
              <p>
                Seçilmiş oyun kolleksiyanızı qurmaq və oynamaq üçün ev olan GH
                oyunçuları birinci yerə qoyan və onların oyuna sahib olmaq
                ehtiyaclarına hörmət edən rəqəmsal paylama platformasıdır.
              </p>
            </div>
            <div className="about-middle-text">
              <p>
                Oyunçulara yaxşı oyunlar tapmağa kömək etmək məqsədi daşıyan
                onlayn oyun platforması
              </p>
            </div>
          </div>
        </div>
        <div className="games-sec"></div>
        <div className="best-container">
          <div className="best-gaming-sec">
            <div className="sec-icon">
              <img
                src="https://www.gog.com/bundles/gogwebsitestaticpages/images/icon_section1-header.png"
                alt=""
              />
            </div>
            <div className="sec-text">
              <h2>Oyun dünyasında ən yaxşısını seçmək</h2>
              <h3>
                Müasir hitlərdən tutmuş tarixi klassiklərə qədər DRM-siz
                oyunların böyük seçimi qaçırmamalı olduğunuz oyunlardır.
              </h3>
            </div>
            <div className="gaming-info">
              {data.map((a) => (
                <div key={a.id} className="gaming-box">
                  <div className="gaming-icon">
                    <img src={a.icon} alt="" />
                  </div>
                  <div className="title">
                    <h3>{a.title}</h3>
                  </div>
                  <div className="gaming-des">
                    <p>{a.des}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="screen-sec">
          <div className="game-screen"></div>
          <div className="game-screen2"></div>
        </div>
        <div className="customer-container">
          <div className="customer-sec">
            <div className="sec-icon">
              <img
                src="https://www.gog.com/bundles/gogwebsitestaticpages/images/icon_section2-header.png"
                alt=""
              />
            </div>
            <div className="sec-text">
              <h2>Müştəriyə ilk yanaşma</h2>
              <h3>
                Əlavə müştəri üstünlükləri ilə zənginləşdirilmiş istifadəçi
                dostu dəstəyin təqdim edilməsi.
              </h3>
            </div>
            <div className="gaming-info">
              {data2.map((a) => (
                <div key={a.id} className="gaming-box">
                  <div className="gaming-icon">
                    <img src={a.icon} alt="" />
                  </div>
                  <div className="title">
                    <h3>{a.title}</h3>
                  </div>
                  <div className="gaming-des">
                    <p>{a.des}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <ScrollUpButton />
    </motion.div>
  );
}

export default About;
