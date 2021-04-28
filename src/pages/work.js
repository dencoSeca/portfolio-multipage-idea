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
        direction: 'horizontal',
        scrollFromAnywhere: true,
      }}
      containerRef={scrollContainerRef}
    >
      <div
        className="work-screen"
        data-scroll-container
        ref={scrollContainerRef}
      >
        <div className="scroll-section-wrapper" data-scroll-section>
          <h2 className="statement" data-scroll data-scroll-speed="1">
            <span className="statement__line text--lg ">
              I like to create beautiful,
            </span>
            <span className="statement__line text--lg ">
              intuitive and responsive
            </span>
            <span className="statement__line text--lg ">
              stuffs on the web.
            </span>
          </h2>
          {projects.map((project, i) => (
            <div className="project" key={i} data-scroll data-scroll-speed="1">
              <StaticImage
                className="project__image"
                src="../images/cherry-pie.jpg"
                alt="cherry pie"
              />
              <h3 className="project__title">{project.title}</h3>
              <p className="project__short-description">
                {project.shortDescription.shortDescription}
              </p>
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
        githubLink
        liveLink
        title
        technologies
        longDescription {
          longDescription
        }
        shortDescription {
          shortDescription
        }
      }
    }
  }
`
