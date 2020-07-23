require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Profesource`,
    description: `Some nice descripctin here please`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require('tailwindcss'),
          require('./tailwind.config.js'), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@components': 'src/components',
          '@buttons_f': 'src/components/Buttons_Folder',
          '@comments_f': 'src/components/Comments_Folder',
          '@help': 'src/components/Help',
          '@post_f': 'src/components/Post_Folder',
          '@search_f': 'src/components/Search_Folder',
          '@structure_f': 'src/components/Structure_Folder',
          '@user_f': 'src/components/User_Folder',
          '@welcome_m': 'src/components/Welcome_Message',
          '@Icons': 'src/Icons'
        },
        extensions: ['js'],
      },
    },
  ],
}
