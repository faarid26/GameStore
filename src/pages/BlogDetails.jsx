import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogNav from "../components/BlogNav";
import { connect } from "react-redux";
function BlogDetails({products}) {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  let data = products.find((product) => product.id === +id)
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`https://api.npoint.io/58d96803e22aac86a471/blogcomments`)
      .then((res) => res.json())
      .then((a) => {
        setComments(a);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      name,
      surname,
      comment,
    };

    fetch("https://api.npoint.io/58d96803e22aac86a471/blogcomments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });

    setComments([...comments, newComment]);
    setName("");
    setSurname("");
    setComment("");
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };
  return (
    <>
      <main role="blog-details">
        <div className="detail-container">
          <BlogNav />
          <div className="breadcrumb-trail">
            <ul>
              <li>
                <a href="#">home</a>
              </li>
              <li>
                <a href="#">classic pc gaming</a>
              </li>
              <li>
                <a href="#">{data.title}</a>
              </li>
            </ul>
          </div>
          <div className="entry-meta-category">
            <div className="cat-links">
              <a href="#">{data.category1}</a>
              <a href="#">{data.category2}</a>
            </div>
          </div>
          <div className="entry-header">
            <h1>{data.title}</h1>
            <div className="entry-meta-author-con">
              <div className="entry-meta-author">
                <div className="author-img">
                  <img src="/logo.png" alt="" />
                </div>
                <div className="byline">
                  <span>GH Team</span>
                </div>
                <div className="sep-date-author">
                  <i className="fa-solid fa-minus"></i>
                </div>
                <div className="entry-date">
                  <time className="entry-time">{data.time}</time>
                </div>
              </div>
            </div>
          </div>
          <div className="background-thumbnail">
            <img src={data.bg} alt="" />
          </div>
          <div className="post-detail">
            <p>{data.description}</p>
          </div>
          <div className="table-of-comments-container">
            <div className="table-of-comments">
              <div className="table-of-comments-header-container">
                <div className="table-of-comments-header">
                  <div className="table-title">Şərhlər</div>
                </div>
              </div>
              <div className="table-of-comments-extra-container">
                {comments.length ? (
                  <ul className="comments-col">
                    {comments.map((comment, index) => (
                      <p key={index}>
                        <li>
                          <span>
                            {comment.name} {comment.surname}
                          </span>
                          : {comment.comment}
                        </li>
                      </p>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
            <div className="blog-prime">
              <div className="widget-title-container">
                <h2 className="widget-title">Haqqında GH</h2>
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
                      GH internetdə klassik PC oyunlarını tapmaq və oynamaq üçün
                      ən yaxşı platformadır. Biz DRM-siz klassik və yeni PC
                      oyunları, əla sövdələşmələr, mehriban heyət və 30 günlük
                      tam geri ödənişlər təklif edən rəqəmsal oyun
                      platformasıyıq!
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
          <div className="comment-post-container">
            <div className="comment-post">
              <div className="name-inputs">
                <div className="comment-input">
                  <textarea
                    onChange={handleCommentChange}
                    name="comment"
                    id="comment-area"
                    cols="70"
                    rows="10"
                    placeholder="Şərhinizi qeyd edin"
                  ></textarea>
                </div>
                <input
                  onChange={handleNameChange}
                  type="text"
                  placeholder="Ad"
                />
                <input
                  onChange={handleSurnameChange}
                  type="text"
                  placeholder="Soyad"
                />
              </div>
              <button className="submitbtn" onClick={handleSubmit}>
                Send
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
const t = (a) => a;
export default connect(t)(BlogDetails);
