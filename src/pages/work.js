import React from 'react'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

function Work({ data }) {
  const projects = data.allContentfulProject.nodes

  return (
    <div className="work-screen">
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
          <div className="project__wrapper" key={i} data-scroll-section>
            <div className="project__text" data-scroll data-scroll-speed="-1.5">
              <h3 className="project__title text--md text--italic with-color-block--grey">
                {project.title}
              </h3>
              <p className="project__tagline">
                {project.shortDescription.shortDescription}
              </p>
            </div>
            <div className="project__image-wrapper">
              <div
                className="project__image-cover"
                data-scroll
                data-scroll-offset="30%, 80%"
              ></div>
              <StaticImage
                className="project__image"
                src="../images/cherry-pie.jpg"
                alt="cherry pie"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
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
