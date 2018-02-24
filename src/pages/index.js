import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => (<div>
  <h1>Hi people</h1>
  <p>Welcome to your new Gatsby site.</p>
  <p>Now go build something great.</p>
<Link
  to="/page-2/"
  style={{
    textDecoration: 'none',
  }}
>Create a Post!</Link>
  <h2>All Posts</h2>
<ul>
  {data.allMarkdownRemark.edges.map(post => (
    <li>
      <Link
        key={post.node.id}
        to={post.node.frontmatter.path}
        style={{
          textDecoration: 'none',
        }}
        >{post.node.frontmatter.title}
      </Link>
    </li>
  ))}
</ul>
</div>)

export const pageQuery = graphql `
  query AllQuery {
    allMarkdownRemark(
      limit: 15
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`

export default IndexPage
