import React from 'react';
import { useTestContext, usePostContext } from "./Test";

const Children = () => {
  const user = useTestContext()
  const post = usePostContext()
  return (
    <>
      <div>{user.name}</div>
      {post.map((ele, idx) => (
        <div key={idx}>
          <p>{ele.title}</p>
          <p>{ele.content}</p>
        </div>
      ))}
    </>
  )
}

export default Children;