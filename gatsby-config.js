// module.exports = {
//   plugins: [
//     `gatsby-transformer-sharp`,
//     `gatsby-plugin-sharp`,
//     "gatsby-plugin-sass",
//     "gatsby-plugin-netlify-cms-paths",
//     {
//       resolve: "gatsby-transformer-remark",
//       options: {
//         plugins: [
//           {
//             resolve: "gatsby-remark-normalize-paths",
//             options: {
//                 pathFields: ["uploads", "pages", "images"],
//             },
//           },
//           {
//             resolve: "gatsby-remark-relative-images",
//           },
//           {
//             resolve: "gatsby-remark-images",
//             options: {
//               // It's important to specify the maxWidth (in pixels) of
//               // the content container as this plugin uses this as the
//               // base for generating different widths of each image.
//               maxWidth: 2048
//             }
//           },
//           {
//             resolve: "gatsby-remark-copy-linked-files",
//             options: {
//               destinationDir: "static"
//             }
//           }
//         ]
//       }
//     },
//     {
//       resolve: `gatsby-transformer-remark`,
//       options: {
//         plugins: [
//           {
//             resolve: `gatsby-remark-images`,
//             options: {
//               // It's important to specify the maxWidth (in pixels) of
//               // the content container as this plugin uses this as the
//               // base for generating different widths of each image.
//               maxWidth: 930,
//               backgroundColor: 'transparent', // required to display blurred image first
//             },
//           },
//         ],
//       }
//     },
//     `gatsby-plugin-netlify-cms`,
//   ],
// }

module.exports = {
  siteMetadata: {
    title: "Heritage Engineering North West LTD."
  },
  plugins: [
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
          plugins: [
            'gatsby-remark-relative-images',
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 590,
              },
            },
          ],
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",   
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/img/favicon.png",

        // WebApp Manifest Configuration
        appName: "Heritage Engineering North West LTD.", // Inferred with your package.json
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: "auto",
        lang: "en-US",
        background: "#232e3a",
        theme_color: "#232e3a",
        display: "standalone",
        orientation: "any",
        start_url: "/",
        version: "1.0",

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    // {
    //   resolve: "gatsby-plugin-collections",
    //   options: {
    //     collections: [
    //       {
    //         name: "basicpage",
    //         folder: "src/pages/basicpage",
    //         permalink: "/:title",
    //         template: "basicpage"
    //       }
    //     ]
    //   }
    // },
    "gatsby-plugin-netlify-cms",
    // "gatsby-plugin-netlify" // make sure to keep it last in the array
  ]
};


// module.exports = {
//   plugins: [
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         path: `${__dirname}/static/img`,
//         name: 'assets',
//       },
//     },
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         path: `${__dirname}/src/pages`,
//         name: 'pages',
//       },
//     },
//     `gatsby-transformer-sharp`,
//     `gatsby-plugin-sharp`,
//     {
//       resolve: `gatsby-transformer-remark`,
//       options: {
//         plugins: [
//           `gatsby-remark-relative-images`,
//           {
//             resolve: `gatsby-remark-images`,
//             options: {},
//           },
//         ],
//       },
//     },
//     `gatsby-plugin-netlify-cms`,
//   ],
// }