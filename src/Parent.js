import React, {createContext, useContext} from 'react';
import Children from './Children';

const ParentContext = createContext()
const useParentContext = () => useContext(ParentContext)

const Parent = () => {
  const user = {
    name: 'emma',
    isAdmin: true
  }

  return (
    <ParentContext.Provider value={user}>
      <div>
        <Posts />
      </div>
    </ParentContext.Provider>
  )
}

const PostsContext = createContext()
const usePostContext = () => useContext(PostsContext)

const Posts = () => {
  const posts = [
    {
      title: 'useContext 알아보기',
      content: '이번 편에서는 ...'
    },
  ]

  return (
    <PostsContext.Provider value={posts}>
      <Children />
    </PostsContext.Provider>
  )
}

export default Parent

export { useParentContext, usePostContext }