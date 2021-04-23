import React from 'react'
import { Link } from 'gatsby'

function Menu() {
  return (
    <div className="menu">
      <div className="menu__links-wrapper">
        <Link
          className="menu__link text--xl with-color-block--pink"
          to="/about"
        >
          About
        </Link>
        <Link className="menu__link text--xl with-color-block--cyan" to="/work">
          Work
        </Link>
        <Link
          className="menu__link text--xl with-color-block--green"
          to="/blog"
        >
          Blog
        </Link>
      </div>
      <span className="menu__copyright">
        &copy; 2021
      </span>
    </div>
  )
}

export default Menu
