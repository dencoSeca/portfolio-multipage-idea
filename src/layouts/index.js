import React, { useState, useEffect } from 'react'

// Components
import Header from '../components/Header'
import Menu from '../components/Menu'

function Layout({ children, location }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  useEffect(() => {
    setMenuIsOpen(false)
  }, [location])

  return (
    <>
      {menuIsOpen && <Menu />}
      <Header menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      {children}
    </>
  )
}

export default Layout
