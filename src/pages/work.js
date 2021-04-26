import React, { useRef } from 'react'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

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
        <div className="statement__wrapper">
          <div className="statement__line text--lg">
            I like to make beautiful,
          </div>
          <div className="statement__line text--lg">
            intuitive and responsive
          </div>
          <div className="statement__line text--lg">stuffs on the web.</div>
        </div>
        <div className="projects">
          {projects.map((project, i) => (
            <div className="project__wrapper" key={i}>
              <div className="project__text">
                <h3 className="project__title text--md">{project.title}</h3>
                <p className="project__tagline">Marketing website for Bragazzi's cafe and delicatessen.</p>
              </div>
              <StaticImage
                className="project__image"
                src="../images/cherry-pie.jpg"
                alt="cherry pie"
              />
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
