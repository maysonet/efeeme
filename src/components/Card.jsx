import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Card = props => {
  const { name, slug, summary, thumbnail } = props

  return (
    <div className="bg-white h-full shadow-xl rounded-md overflow-hidden group">
      <Link to={`/${slug}`}>
        <div className="group-hover:opacity-75 transition duration-150 ease-in-out relative">
          <Img fluid={thumbnail.localFile.childImageSharp.fluid} alt={name} />
        </div>
        <h1 className="text-white text-3xl font-bold opacity-0 group-hover:opacity-100 absolute -mt-48 px-8">{name}</h1>
        <p className="text-white text-md opacity-0 group-hover:opacity-100 absolute -mt-40 px-8">{summary}</p>
   
      </Link>

      
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  thumbnail: PropTypes.shape({
    localFile: PropTypes.object,
  }),
}

export default Card

export const query = graphql`
  fragment PortfolioCard on ContentfulPortfolio {
    id
    name
    slug
    thumbnail {
      localFile {
        childImageSharp {
          fluid(maxWidth: 444, maxHeight: 342, quality: 85) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    summary
  }
`
