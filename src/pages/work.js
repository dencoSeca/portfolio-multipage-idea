import React, { useRef } from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
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
        multipler: 0.75,
      }}
      containerRef={scrollContainerRef}
    >
      <div
        className="work-screen"
        data-scroll-container
        ref={scrollContainerRef}
      >
        <div className="scroll-section-wrapper" data-scroll-section>
          <h2 className="statement">
            <span
              className="statement__line text--lg"
              data-scroll
              data-scroll-speed="4"
              data-scroll-position="left"
            >
              I like to create beautiful,
            </span>
            <span
              className="statement__line text--lg"
              data-scroll
              data-scroll-speed="2.5"
              data-scroll-position="left"
            >
              intuitive and responsive
            </span>
            <span
              className="statement__line text--lg"
              data-scroll
              data-scroll-speed="3"
              data-scroll-position="left"
            >
              stuffs on the web.
            </span>
          </h2>
          {projects.map((project, i) => (
            <div className="project" key={i} data-scroll data-scroll-speed="1">
              <div className="project__image">
                <GatsbyImage
                  image={project.image.gatsbyImageData}
                  alt={project.image.description}
                />
                <div
                  className="project__image-cover"
                  data-scroll
                  data-scroll-offset="10%"
                ></div>
              </div>
              <h3
                className="project__title text--md"
                data-scroll
                data-scroll-offset="10%"
              >
                {project.title}
              </h3>
              <p
                className="project__short-description text--sm"
                data-scroll
                data-scroll-offset="10%"
              >
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
    allContentfulProject(sort: { fields: createdAt, order: DESC }) {
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
        image {
          gatsbyImageData(layout: FULL_WIDTH)
          description
        }
      }
    }
  }
`
