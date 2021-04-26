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
      }}
      containerRef={scrollContainerRef}
    >
      <div
        className="work-screen"
        data-scroll-container
        ref={scrollContainerRef}
      >
        <div className="statement__wrapper" data-scroll-section>
          <div
            className="statement__line text--lg"
            data-scroll
            data-scroll-speed="2.5"
            data-scroll-position="top"
          >
            I like to make beautiful,
          </div>
          <div
            className="statement__line text--lg"
            data-scroll
            data-scroll-speed="1.75"
            data-scroll-position="top"
          >
            intuitive and responsive
          </div>
          <div
            className="statement__line text--lg"
            data-scroll
            data-scroll-speed="1"
            data-scroll-position="top"
          >
            stuffs on the web.
          </div>
        </div>
        <div className="projects">
          {projects.map((project, i) => (
            <div
              className="project__wrapper"
              id={`sticky${i}`}
              key={i}
              data-scroll-section
            >
              <div
                className="project__text"
                data-scroll
                data-scroll-sticky
                data-scroll-target={`#sticky${i}`}
              >
                <h3 className="project__title text--md text--italic with-color-block--grey">
                  {project.title}
                </h3>
                <p className="project__tagline">
                  {project.shortDescription.shortDescription}
                </p>
              </div>
              <StaticImage
                className="project__image"
                src="../images/cherry-pie.jpg"
                alt="cherry pie"
                data-scroll
                data-scroll-speed="-3"
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
