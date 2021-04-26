import React, { useRef } from 'react'
import { graphql } from 'gatsby'
import {
  LocomotiveScrollProvider,
  useLocomotiveScroll,
} from 'react-locomotive-scroll'

// Components
import { StaticImage } from 'gatsby-plugin-image'

function Work({ data }) {
  const projects = data.allContentfulProject.nodes
  const containerRef = useRef(null)

  const { scroll } = useLocomotiveScroll()

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        direction: 'horizontal',
        lerp: 0.1,
        scrollFromAnywhere: true,
      }}
      containerRef={containerRef}
    >
      <div className="work">
        <div className="inner">
          <div className="statement">
            <span className="statement-line text--lg with-color-block--grey">
              I Like to create beautiful,
            </span>
            <span className="statement-line text--lg with-color-block--grey">
              intuitive and responsive
            </span>
            <span className="statement-line text--lg with-color-block--grey">
              stuffs on the web
            </span>
          </div>
          <div
            className="projects-wrapper"
            data-scroll-container
            ref={containerRef}
          >
            {projects.map((project, i) => (
              <div className="project">
                <StaticImage
                  className="project__image"
                  src="../images/cherry-pie.jpg"
                  alt="cherry pie"
                  // data-scroll
                  data-scroll-speed="1"
                  data-scroll-delay="2"
                />
              </div>
            ))}
          </div>
        </div>
        {/* <div data-scroll-container ref={containerRef}>
          <div data-scroll-section>
            <h1 data-scroll>Hey</h1>
            <p data-scroll>👋</p>
          </div>
          <div data-scroll-section>
            <h2 data-scroll data-scroll-speed="1">
              What's up?
            </h2>
            <p data-scroll data-scroll-speed="2">
              😬
            </p>
          </div>
        </div> */}
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
