import React, { useRef } from 'react'
import { graphql } from 'gatsby'
import {
  LocomotiveScrollProvider,
} from 'react-locomotive-scroll'

// Components
import { StaticImage } from 'gatsby-plugin-image'

function Work({ data }) {
  const projects = data.allContentfulProject.nodes
  const containerRef = useRef(null)

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        direction: 'horizontal',
        scrollFromAnywhere: true,
      }}
      containerRef={containerRef}
    >
      <div className="work-screen">
        <div className="inner">
          <div className="statement">
            <span className="statement__line text--lg with-color-block--grey">
              I Like to create beautiful,
            </span>
            <span className="statement__line text--lg with-color-block--grey">
              intuitive and responsive
            </span>
            <span className="statement__line text--lg with-color-block--grey">
              stuffs on the web
            </span>
          </div>
          <div
            className="projects-wrapper"
            data-scroll-container
            ref={containerRef}
          >
            {projects.map((project, i) => (
              <div className="project" data-scroll-speed={i + 1}>
                <StaticImage
                  className="project__image"
                  src="../images/cherry-pie.jpg"
                  alt="cherry pie"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </LocomotiveScrollProvider>
  )
}

export default Work

export const query = graphql`
  query MyQuery {
    allContentfulProject {
      nodes {
        description {
          raw
        }
        githubLink
        liveLink
        title
        technologies
      }
    }
  }
`
