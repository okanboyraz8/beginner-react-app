import React from 'react'

export default function BlogList(props) {

    const course = props.blogs;

  return (
    <div className='blog-list'>
      {
        course.map((c) => (
          <div className='course-preview' key={c.id}>
            <h2>{c.name}</h2>
            <p>Writer: {c.writer}</p>
          </div>
        ))
      }
    </div>
  )
}
