import React from 'react'
import { graphql } from 'gatsby'

// Components
import Project from '../components/Project'

function Work({ data }) {
  const projects = data.allContentfulProject.nodes

  return (
    <div className="work">
      <div className="work__inner">
        <div className="work__statement">
          <span className="work__statement-line text--lg with-color-block--grey">
            I Like to create beautiful,
          </span>
          <span className="work__statement-line text--lg with-color-block--grey">
            intuitive and responsive
          </span>
          <span className="work__statement-line text--lg with-color-block--grey">
            stuffs on the web
          </span>
        </div>
        <div className="work__projects">
          {projects.map((project, i) => (
            <Project key={i} />
          ))}
        </div>
      </div>{' '}
    </div>
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
