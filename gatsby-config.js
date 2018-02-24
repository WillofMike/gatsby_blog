module.exports = {
  siteMetadata: {
    title: 'Gatsby blog',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve:'gatsby-source-filesystem',
      options: {
       path: `${__dirname}/src/pages`,
       name: 'pages',
      }
    },
    {
      resolve: `gatsby-source-mongodb`,
        options: {
          map: { posts: { description: `text/markdown`}},
          dbName: `gatsby_blog`,
          collection: `posts`,
          server: {
            address: "ds147668.mlab.com",
            port: 47668,
          },
          auth: {
            user: 'admin',
            password: 'yes'
          },
        },
    },
    `gatsby-transformer-remark`,
  ],
};
