import React from "react"
import PropTypes from "prop-types"
import { Link, graphql, StaticQuery } from "gatsby"
import styles from "../css/blogRoll.module.css"
class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className={styles.parent}>
        {posts &&
          posts.map(({ node: post }) => (
            <div className={styles.postContainer} key={post.id}>
              <article className={styles.blogListItem}>
                <header className={styles.postHeader}>
                  <p className={styles.postTitle}>
                    {post.frontmatter.title}

                    <span className={styles.bull}> &bull; </span>
                    <span className={styles.date}>{post.frontmatter.date}</span>
                  </p>
                </header>
                <p className={styles.postBody}>
                  {post.excerpt}
                  <br />
                  <br />
                </p>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              frontmatter {
                path
                title
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
