/* eslint-env node */

const path = require(`path`)
const { readFileSync } = require(`fs`)
const yaml = require(`js-yaml`)
const { createFilePath } = require('gatsby-source-filesystem')
const { registerLocalFs } = require('netlify-cms-proxy-server/dist/middlewares')

const { relative, dirname } = path
const cwd = process.cwd()

const { media_folder: mediaPath, public_folder: publicPath } = yaml.load(
  readFileSync('static/admin/config.yml', 'utf8'),
)

function traverse(object, fn) {
  const keys = Object.keys(object)
  for (let i = 0, l = keys.length; i < l; i += 1) {
    const key = keys[i]
    const value = object[key]
    fn(key, value, object)
    if (value !== null && typeof value === 'object') {
      traverse(value, fn)
    }
  }
}

function createSlugField({ node, actions, getNode }) {
  const { createNodeField } = actions
  const value = createFilePath({ node, getNode })
  createNodeField({
    name: `slug`,
    node,
    value,
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const picTemplate = path.resolve(`./src/templates/pic.tsx`)
  const result = await graphql(
    `
      {
        allPicturesJson(limit: 1000) {
          nodes {
            id
            image {
              id
            }
            fields {
              slug
            }
          }
        }
      }
    `,
  )

  if (result.errors) {
    reporter.panicOnBuild(`There was an error loading your pics`, result.errors)
    return
  }

  // filter out text only nodes
  const pictures = result.data.allPicturesJson.nodes.filter((node) => {
    return node.image
  })

  if (pictures.length > 0) {
    pictures.forEach((picture, index) => {
      const previousPicId = index === 0 ? null : pictures[index - 1].id
      const nextPicId =
        index === pictures.length - 1 ? null : pictures[index + 1].id

      createPage({
        path: `/pics${picture.fields.slug}`,
        component: picTemplate,
        context: {
          id: picture.id,
          previousPicId,
          nextPicId,
        },
      })
    })
  }
}

exports.onCreateNode = async ({ node, actions, getNode }) => {
  if (
    node.internal.type === `AlbumsJson` ||
    node.internal.type === `PicturesJson`
  ) {
    createSlugField({ node, actions, getNode })
  }

  if (/^\w+(Yaml|Json)$/.test(node.internal.type)) {
    const { absolutePath } = getNode(node.parent)
    traverse(node, (key, value, obj) => {
      // skip internals
      if (['id', 'parent', 'children', 'internal'].includes(key)) return
      // skip objects
      if (typeof value !== 'string') return
      // skip non images
      if (!/\.(png|jpg|jpeg)$/i.test(value)) return
      // skip images that are not public
      if (value.indexOf(`${publicPath}/`) !== 0) return
      // eslint-disable-next-line no-param-reassign
      obj[key] = relative(
        dirname(absolutePath).replace(`${cwd}`, ``),
        value.replace(publicPath, mediaPath),
      )
    })
  }
}

exports.onCreateDevServer = async ({ app }) => {
  await registerLocalFs(app)
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // https://github.com/dotansimha/graphql-code-generator/issues/5748
  const gatsbyImageDataType = `
    scalar GatsbyImageData

    type ImageSharp {
      gatsbyImageData(
        aspectRatio: Float
        avifOptions: AVIFOptions
        backgroundColor: String
        blurredOptions: BlurredOptions
        breakpoints: [Int]
        formats: [ImageFormat]
        height: Int
        jpgOptions: JPGOptions
        layout: ImageLayout = CONSTRAINED
        outputPixelDensities: [Float]
        placeholder: ImagePlaceholder
        pngOptions: PNGOptions
        quality: Int
        sizes: String
        tracedSVGOptions: Potrace
        transformOptions: TransformOptions
        webpOptions: WebPOptions
        width: Int
      ): GatsbyImageData!
    }
  `

  // https://www.gatsbyjs.org/docs/schema-customization/#foreign-key-fields
  const albumLinkType = `
    type SeriesJson implements Node {
      albums: [AlbumsJson] @link(by: "title")
    }
  `
  const picLinkType = `
    type PicsJson implements Node {
      pictures: [PicturesJson] @link(by: "title")
    }
  `

  createTypes([gatsbyImageDataType, albumLinkType, picLinkType])
}
