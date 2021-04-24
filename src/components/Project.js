import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

function Project() {
  return (
    <div className="project">
      <StaticImage
        className="project__image"
        src="../images/cherry-pie.jpg"
        alt="cherry pie"
      />
    </div>
  )
}

export default Project
