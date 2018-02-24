import React from 'react'
import Link from 'gatsby-link'

const BlogPage = ({data}) => (
  <div>
    <h1>{data.mongodbGatsbyBlogPosts.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: data.mongodbGatsbyBlogPosts.description.childMarkdownRemark.html }} />
  </div>
)

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    mongodbGatsbyBlogPosts(id: { eq: $id }) {
      id
      title
      description {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

export default BlogPage
