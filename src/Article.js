import React from 'react'
import moment from 'moment'

const Article = ({ date, snippet, title, length }) => {
  return (
    <article className="post">
      <h2>{title}</h2>
      <div className="post-info">
        <span>{moment(date).format('MMMM Do, YYYY ddd')}</span>
        <span>{length} min read</span>
      </div>
      <p>{snippet}</p>
    </article>
  )
}

export default Article
