import React from 'react'

function BlogNav({openModal}) {
    return(
        <>
        <div className="nagivation">
                        <div className="navigation-area">
                        <div className="nav-left">
                            <ul>
                                <li><a href="#">home</a></li>
                                <li><a href="#">classic pc games</a></li>
                                <li><a href="#">action games</a></li>
                                <li><a href="#">open world games</a></li>
                                <li><a href="#">adventure games</a></li>
                            </ul>
                        </div>
                        <div className="nav-right">
                            <ul>
                                <li><span onClick={openModal} className="fa-solid fa-magnifying-glass"></span></li>
                            </ul>
                        </div>
                        </div>
                    </div>
      </>
    )
}

export default BlogNav;