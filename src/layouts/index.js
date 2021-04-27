import React, { useState, useEffect, useRef } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

// Components
import Header from '../components/Header'
import Menu from '../components/Menu'

function Layout({ children, location }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const scrollContainerRef = useRef(null)

  useEffect(() => {
    setMenuIsOpen(false)
  }, [location])

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        offset: ['30%', '80%'],
      }}
      containerRef={scrollContainerRef}
    >
      {menuIsOpen && <Menu />}
      <Header menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <main data-scroll-container ref={scrollContainerRef}>
        {children}
      </main>
    </LocomotiveScrollProvider>
  )
}

export default Layout
