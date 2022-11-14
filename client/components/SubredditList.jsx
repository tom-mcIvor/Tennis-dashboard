import React from 'react'
import { useSelector } from 'react-redux'

import Post from './Post'



function Subreddit() {
  const subreddits = useSelector((state) => state.subreddits)
  console.log(subreddits[0]);


  return (
    <div>
      {subreddits.map((post, i) => (
        <Post key={i} title={post.title} date={post.created} />
      ))}
    </div>
  )
}

export default Subreddit
