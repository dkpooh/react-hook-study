import React from 'react';
import { useParentContext, usePostContext } from "./Parent";

const Children = () => {
  const user = useParentContext()
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