import React from 'react'
import { Link } from 'react-router-dom'
function NotFound() {
  return (
    <>
    <section className='notfound'>
        <div className="notfound-con">
            <div className="notfound-bg">
              <img src="https://www4-static.gog-statics.com/bundles/gogwebsitecommon/img/404/bear.png" alt="" />
              <Link to="/">Əsas səhifəyə qayıt</Link>
            </div>
        </div>
    </section>
    </>
  )
}

export default NotFound