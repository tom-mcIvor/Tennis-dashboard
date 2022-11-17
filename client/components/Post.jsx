import React from 'react'

function Post({ title, date, url }) {

  let thisdate = new Date(date * 1000).toLocaleString()

  return (
    <>
      <a href={url} >
        <div>{title}</div>
      </a>
      <div >{thisdate}</div>

    </>
  )
}

// date time short sumarry
//

export default Post
