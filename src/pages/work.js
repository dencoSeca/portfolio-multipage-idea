import React from 'react'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

function Work({ data }) {
  const projects = data.allContentfulProject.nodes

  return (
    <div className="work-screen">
      <div className="title__wrapper" data-scroll-section>
        <div
          className="title text--xl with-color-block--cyan text--italic"
          data-scroll
          data-scroll-speed="6"
          data-scroll-position="top"
        >
          Work
        </div>
      </div>
      <div className="statement__wrapper text--lg" data-scroll-section>
        <div
          className="statement__line"
          data-scroll
          data-scroll-speed="4"
          data-scroll-position="top"
        >
          I like to make beautiful,
        </div>
        <div
          className="statement__line"
          data-scroll
          data-scroll-speed="3"
          data-scroll-position="top"
        >
          intuitive and responsive
        </div>
        <div
          className="statement__line"
          data-scroll
          data-scroll-speed="2.5"
          data-scroll-position="top"
        >
          stuffs on the web.
        </div>
      </div>
      <div className="projects">
        {projects.map((project, i) => (
          <div className="project__wrapper" key={i} data-scroll-section>
            <div className="project__text">
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
                data-scroll-offset="20%"
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
