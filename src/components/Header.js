import React from 'react'
import { Link } from 'gatsby'

function Header() {
  return (
    <header className="header">
      <Link className="header__brand" to="/">
        leonbrown.dev
      </Link>
      <div className="header__menu-button">
        <svg
          width="100%"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.83337 8.75H29.1667V11.6667H5.83337V8.75ZM11.6667 16.0417H29.1667V18.9583H11.6667V16.0417ZM18.9584 23.3333H29.1667V26.25H18.9584V23.3333Z"
            fill="black"
          />
        </svg>
      </div>
    </header>
  )
}

export default Header
