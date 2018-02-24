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
          dbName: `gatsbydb`,
          collection: `user`,
          server: { address:"https://gatsby-api.herokuapp.com"  port: 80 }
        },
    },
    `gatsby-transformer-remark`,
  ],
};
