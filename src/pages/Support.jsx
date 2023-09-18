import { useEffect } from "react";
function Support() {
  const data = [
    {
      id: 1,
      icon: "https://theme.zdassets.com/theme_assets/987253/d29bef77a871cdbbe2ebc622e1a9a9ffe19bba48.png",
      title: "OYUNUN TEXNİKİ MƏSƏLƏLƏRİ",
      description:
        "Artıq satın aldığınız və endirdiyiniz oyun düzgün işləmir?",
    },
    {
      id: 2,
      icon: "https://theme.zdassets.com/theme_assets/987253/d8839459d9a17e4c79637547aca87ad086a48f14.png",
      title: "Sifarişlər və Ödənişlər",
      description: "Alış-veriş etməkdə çətinlik çəkirsiniz?",
    },
    {
      id: 3,
      icon: "https://theme.zdassets.com/theme_assets/987253/56a89880a1f23b1c0c862cc4410b3a854509d9cd.png",
      title: "Hesab və Mağaza",
      description:
        "Hesabınıza və ya mağazanın özünə daxil olmaqda probleminiz var?",
    },
    {
      id: 4,
      icon: "https://theme.zdassets.com/theme_assets/987253/9ce1f946081535570b25cb45846ca56c6c79e74a.png",
      title: "Yükləmələr və Quraşdırma",
      description:
        "Oyununuzu endirərkən və ya quraşdırarkən nəsə səhv oldu?",
    },
    {
      id: 5,
      icon: "https://theme.zdassets.com/theme_assets/987253/bc9b4df89e722b3cfc076c0e26d4e976fb42061a.png",
      title: "GOG GALAXY",
      description:
        "GOG GALAXY və ya onun hər hansı funksiyası düzgün işləmir?",
    },
    {
      id: 6,
      icon: "https://theme.zdassets.com/theme_assets/987253/ef2c21ba4b2dbf57b21488d87f7e920c1ef66f79.png",
      title: "Siyasətlər və Ümumi Məlumat",
      description:
        "Burada siz siyasətimizi oxuya və ya xidmətimiz haqqında ətraflı öyrənə bilərsiniz.",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <main role="main">
        <section>
          <div className="support-header-bg">
            <div className="header-title">
              <h1>game hive dəstək mərkəzi</h1>
              <input
                type="text"
                placeholder="Bütün oyunları və məqalələri axtarın"
              />
            </div>
          </div>
        </section>
        <section className="custom-blocks-container">
          <div className="custom-blocks">
            {data.map((a) => (
              <div key={a.id} className="custom-block">
                <div className="block-icon">
                  <img src={a.icon} alt="" />
                </div>
                <div className="block-title">
                  <h3>{a.title}</h3>
                </div>
                <div className="block-description">
                  <p>{a.description}</p>
                </div>
              </div>
            ))}
          </div>
          <section className="promoted-articles">
            <div className="promoted-articles__title">
              <h2>Populyar Dəstək Mövzuları</h2>
            </div>
            <ul className="promoted-articles__list">
              <li className="promoted-articles-item">
                <a target="_blank" href="https://support.gog.com/hc/en-us/articles/212778825-How-do-I-buy-a-game-?product=gog">Necə oyun ala bilərəm?</a>
              </li>
              <li className="promoted-articles-item">
                <a target="_blank" href="https://support.gog.com/hc/en-us/articles/212778825-How-do-I-buy-a-game-?product=gog">Kodu necə geri ala bilərəm?</a>
              </li>
              <li className="promoted-articles-item">
                <a target="_blank" href="https://support.gog.com/hc/en-us/articles/212778825-How-do-I-buy-a-game-?product=gog">Daxil ola bilmirəm. Nə edə bilərəm?</a>
              </li>
              <li className="promoted-articles-item">
                <a target="_blank" href="https://support.gog.com/hc/en-us/articles/212778825-How-do-I-buy-a-game-?product=gog">DLC-ni necə yükləyə bilərəm?</a>
              </li>
              <li className="promoted-articles-item">
                <a target="_blank" href="https://support.gog.com/hc/en-us/articles/212778825-How-do-I-buy-a-game-?product=gog">Necə hədiyyə ala bilərəm?</a>
              </li>
              <li className="promoted-articles-item">
                <a target="_blank" href="https://support.gog.com/hc/en-us/articles/212778825-How-do-I-buy-a-game-?product=gog">Ödəniş etməyə çalışdım, alınmadı. İndi nə edə bilərəm?</a>
              </li>
              <li className="promoted-articles-item">
                <a target="_blank" href="https://support.gog.com/hc/en-us/articles/212778825-How-do-I-buy-a-game-?product=gog">Parolu necə sıfırlaya bilərəm?</a>
              </li>
              <li className="promoted-articles-item">
                <a target="_blank" href="https://support.gog.com/hc/en-us/articles/212778825-How-do-I-buy-a-game-?product=gog">Oyunumu endirə bilmirəm - nə edə bilərəm?</a>
              </li>
              <li className="promoted-articles-item">
                <a target="_blank" href="https://support.gog.com/hc/en-us/articles/212778825-How-do-I-buy-a-game-?product=gog">Valyutamı necə dəyişə bilərəm?</a>
              </li>
              <li className="promoted-articles-item">
                <a target="_blank" href="https://support.gog.com/hc/en-us/articles/212778825-How-do-I-buy-a-game-?product=gog">Mən ittiham olundum və oyunumu ala bilmədim</a>
              </li>
              <li className="promoted-articles-item">
                <a target="_blank" href="https://support.gog.com/hc/en-us/articles/212778825-How-do-I-buy-a-game-?product=gog">Satın aldığım əşyalarımı necə yükləyə bilərəm?</a>
              </li>
              <li className="promoted-articles-item">
                <a target="_blank" href="https://support.gog.com/hc/en-us/articles/212778825-How-do-I-buy-a-game-?product=gog">İnteqrasiya məlumatımı necə silmək olar</a>
              </li>
            </ul>
          </section>
        </section>
      </main>
    </>
  );
}

export default Support;
