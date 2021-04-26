import React from 'react'
import { Link } from 'gatsby'

function Menu() {
  return (
    <div className="menu">
      <div className="links-wrapper">
        <Link
          className="link text--xl text--italic with-color-block--pink"
          to="/about"
        >
          About
        </Link>
        <Link
          className="link text--xl text--italic with-color-block--cyan"
          to="/work"
        >
          Work
        </Link>
        <Link
          className="link text--xl text--italic with-color-block--green"
          to="/blog"
        >
          Blog
        </Link>
      </div>
      <span className="copyright">&copy; 2021</span>
    </div>
  )
}

export default Menu
