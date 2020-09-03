import React, { useState } from 'react';
import Parent from './Parent'
// import User from './User'
import UserReducer from "./UserReducer";
import './App.css';

const App = () => {
  const [ items, setItems ] = useState([
    {
      name: 'apple',
      isActive: false,
    },
    {
      name: 'banna',
      isActive: false,
    },
    {
      name: 'pineapple',
      isActive: false,
    },
  ])

  const [ value, setValue ] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = () => {
    console.log(value)
  }

  const handleClick = (idx) => {
    setItems(
      items.map((ele, key) => (
        {
          ...ele,
          isActive: idx === key ? !ele.isActive : ele.isActive
        }
    )))
  }

  return (
    <div className="App">
      <div>
        <input type="text" onChange={handleChange} />
        <button onClick={handleSubmit}>submit</button>
      </div>
      <div>
        <table>
          <tbody>
            {items.map((ele, idx) => (
              <tr key={idx}>
                <td>{ele.name}</td>
                <td><button onClick={() => handleClick(idx)}>{ele.isActive ? '빼기' : '담기'}</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Parent />
      {/*<User />*/}
      <UserReducer />
    </div>
  )
}
export default App;
