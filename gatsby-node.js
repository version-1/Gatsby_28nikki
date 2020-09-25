const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

const categoryMap = {
  "プログラミング": {
      url: "programming",
      name: "プログラミング",
      group: "programmingBlogs",
    },
    "留学" : {
      url: "study-abroad",
      name: "英語学習",
      group: "englishBlogs",
    } ,
    "英語学習" : {
      url: "english",
      name: "英語学習",
      group: "englishBlogs",
    } ,
    "レシピ": {
      url: "recipe",
      name: "レシピ",
      group: "recipeBlogs",
    },
    "健康管理": {
      url: "health",
      name: "健康管理",
      group: "healthBlogs",
    },
    "その他":{ 
      url: "others",
      name: "その他",
      group: "otherBlogs",
    }
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "pages" })
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
       categoriesAllMarkdownRemark: allMarkdownRemark {
         group(field: frontmatter___categories) {
           category: fieldValue
           totalCount
         }
       }
       tagsAllMarkdownRemark: allMarkdownRemark {
        group(field: frontmatter___tags) {
          tag: fieldValue
          totalCount
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic(result.errors)
  }
  
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve("./src/pages/templates/blog-post.jsx"),
      context: {
        // GraphQLのクエリの $slug 変数に設定する値
        slug: node.fields.slug,
      },
    })
  })

   result.data.categoriesAllMarkdownRemark.group.forEach(({ category }) => {
     createPage({
       path: `/category/${category}/`,
       component: path.resolve("./src/pages/templates/categories.jsx"),
       context: {
         // GraphQLのクエリの $category 変数に設定する値
         category,
       },
     })
   })

   const tags = result.data.tagsAllMarkdownRemark.group.forEach(({ tag }) => {
    createPage({
      path: `/tag/${tag}/`,
      component: path.resolve("./src/pages/templates/tags.jsx"),
      context: {
        // GraphQLのクエリの $tag 変数に設定する値
        tag,
      },
    })
  })
}