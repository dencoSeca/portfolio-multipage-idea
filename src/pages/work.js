import React, { useRef } from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { AnimatePresence, motion } from 'framer-motion'

// Animations
const statementWrapperVariants = {
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const statementVariants = {
  initial: {
    opacity: 0,
    x: '-10vw',
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.25, 1, 0.5, 1],
    },
  },
}

function Work({ data }) {
  const projects = data.allContentfulProject.nodes
  const scrollContainerRef = useRef(null)

  return (
    <AnimatePresence>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          direction: 'horizontal',
          scrollFromAnywhere: true,
          multipler: 0.75,
          lerp: 0.1,
        }}
        containerRef={scrollContainerRef}
      >
        <div
          className="work-screen"
          data-scroll-container
          ref={scrollContainerRef}
        >
          <div className="scroll-section-wrapper" data-scroll-section>
            <motion.h2
              className="statement"
              initial="initial"
              animate="animate"
              variants={statementWrapperVariants}
            >
              <motion.span
                className="statement__line text--lg text--italic with-color-block--grey"
                variants={statementVariants}
                data-scroll
                data-scroll-speed="4"
                data-scroll-position="left"
              >
                I like to create beautiful,
              </motion.span>
              <motion.span
                className="statement__line text--lg text--italic with-color-block--grey"
                variants={statementVariants}
                data-scroll
                data-scroll-speed="2.5"
                data-scroll-position="left"
              >
                intuitive and responsive
              </motion.span>
              <motion.span
                className="statement__line text--lg text--italic with-color-block--grey"
                variants={statementVariants}
                data-scroll
                data-scroll-speed="3"
                data-scroll-position="left"
              >
                stuffs on the web.
              </motion.span>
            </motion.h2>
            {projects.map((project, i) => (
              <div
                className="project"
                key={i}
                data-scroll
                data-scroll-speed="1"
              >
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
    </AnimatePresence>
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
