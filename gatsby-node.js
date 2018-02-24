const path = require('path');

exports.createPages = ({boundActionCreators, graphql}) => {
  const {createPage} = boundActionCreators;

  const postTemplate = path.resolve('src/templates/blog-post.js');

  return graphql(`{
    allMongodbGatsbyBlogPosts {
      edges {
        node {
          id
        }
      }
    }
  }`)
  .then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }

    res.data.allMongodbGatsbyBlogPosts.edges.forEach(({node})=> {
      createPage({
        path: `/posts/${node.id}`,
        component: postTemplate,
        context: {
          id: node.id
        },
      })
    })
  })
}
