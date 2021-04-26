import React, { useRef } from 'react'
import { graphql } from 'gatsby'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

// Components
import { StaticImage } from 'gatsby-plugin-image'

function Work({ data }) {
  const projects = data.allContentfulProject.nodes
  const scrollContainerRef = useRef(null)

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        scrollFromAnywhere: true,
      }}
      containerRef={scrollContainerRef}
    >
      <div
        className="work-screen"
        data-scroll-container
        ref={scrollContainerRef}
      >
        <div className="statement">
          <div className="statement__line text--lg with-color-block--grey">
            I like to make beautiful,
          </div>
          <div className="statement__line text--lg with-color-block--grey">
            intuitive and responsive
          </div>
          <div className="statement__line text--lg with-color-block--grey">
            stuffs on the web
          </div>
        </div>
        <div className="projects">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <StaticImage src="../images/cherry-pie.jpg" alt="cherry pie" />
            </div>
          ))}
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
