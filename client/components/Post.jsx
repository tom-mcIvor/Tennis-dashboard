import React from 'react'

function Post({ title, date }) {

 let thisdate = new Date(date * 1000).toLocaleString()

  return (
    <>
  <div>{title}</div>
  <div >{thisdate}</div>
  </>
  )
}

// date time short sumarry
//

export default Post
