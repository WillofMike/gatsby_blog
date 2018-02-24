import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => (<div>
  <h1>Hello Bloggers</h1>
  <p>Welcome to your Gatsby Blog!</p>
  <p>Now do some bloggin!</p>
  <h3>
    <Link
      to="/page-2/"
      style={{
        textDecoration: 'none',
      }}
    >
      Create a Post!
    </Link>
  </h3>

<div id="allPosts">
  <h2>All Posts</h2>
</div>
  <ul>
    { data.allMongodbGatsbyBlogPosts.edges.map(edge => (
      <li key={edge.node.id}>
        <Link
          to={`/posts/${edge.node.id}`}
          style={{ textDecoration: 'none' }}
          >
            {edge.node.title}
        </Link>
      </li>
    )) }
  </ul>
</div>)

export const pageQuery = graphql `
  query AllQuery {
    allMongodbGatsbyBlogPosts {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`

export default IndexPage
