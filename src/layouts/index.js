import React, { useState } from 'react'

// Components
import Header from '../components/Header'
import Menu from '../components/Menu'

function Layout({ children }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <>
      {menuIsOpen && <Menu />}
      <Header menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      {children}
    </>
  )
}

export default Layout
