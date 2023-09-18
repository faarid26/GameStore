import { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Pagination from './Pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
function ArticleWrapper({products}) {
    const filteredProducts = products.filter((products) => products.id >= 109 && products.id <= 117);
    const [activePage, setActivePage] = useState(1);
    const recordPerPage = 4;
    const totalPageCount = Math.ceil(filteredProducts.length / recordPerPage);
    let start = (activePage - 1) * recordPerPage;
    let end = start + recordPerPage;
  return (
    <>
    <div data-aos="fade-up">
    <div className="article-wrapper">
                    {filteredProducts.slice(start,end).map((a) => (
                        <Link to ={`/blogdetails/${a.id}`} key={a.id} className="post-entry">
                        <div className="post-thumbnail">
                            <img src={a.image} alt="" />
                        </div>
                        <div className="post-details">
                        <div className="cat-links">
                    <a href="#">{a.category1}</a>
                    <a href="#">{a.category2}</a>
                </div>
                <div className="entry-title">
                    <a href="#">{a.title}</a>
                </div>
                <div className="entry-meta">
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
                            <time className="entry-time">{a.time}</time>
                        </div>
                </div>
                <div className="entry-content">
                            <p>{a.description.slice(0,110)}...</p>
                        </div>
                        </div>
                        </Link>
                    ))}
                </div>
    </div>
                <div className="pagination-container">
                <Pagination
                  activePage={activePage}
                  totalPageCount={totalPageCount}
                  setActivePage={setActivePage}
                />
                </div>
    </>
  )
}
const t = (a) => a;
export default connect(t)(ArticleWrapper);