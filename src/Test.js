import React, {createContext, useContext} from 'react';
import Children from './Children';

const TestContext = createContext()
const useTestContext = () => useContext(TestContext)

const Test = () => {
  const user = {
    name: 'emma',
    isAdmin: true
  }

  return (
    <TestContext.Provider value={user}>
      <div>
        <Posts />
      </div>
    </TestContext.Provider>
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

// const Children = () => {
//   const useTestContext = useContext(TestContext)
//   const usePostContext = useContext(PostsContext)
//   return (
//     <>
//       <div>{useTestContext.name}</div>
//       {usePostContext.map((ele, idx) => (
//         <div key={idx}>
//           <p>{ele.title}</p>
//           <p>{ele.content}</p>
//         </div>
//       ))}
//     </>
//   )
// }

export default Test

export { useTestContext, usePostContext }