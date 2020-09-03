import React, {useState} from 'react';

const User = () => {
  const [user, setUser] = useState({
    isAdmin: false,
    nickname: '',
    email: ''
  })

  const handleReset = () => {
    setUser({
      isAdmin: false,
      nickname: '',
      email: ''
    })
  }

  const toggleAdmin = () => {
    setUser({
      ...user,
      isAdmin: true,
    })
  }

  const updateNickname = (e) => {
    setUser({
      ...user,
      nickname: e.target.value,
    })
  }

  const updateEmail = (e) => {
    setUser({
      ...user,
      email: e.target.value,
    })
  }

  return (
    <div style={{ padding: '20px', textAlign: 'left' }}>
      <h3>{user.isAdmin ? 'admin' : 'user'}</h3>
      <h3>{`nickname: ${user.nickname}`}</h3>
      <h3>{`email: ${user.email}`}</h3>
      <button style={{ marginBottom: '10px' }} onClick={handleReset}>RESET</button><br />
      <button style={{ marginBottom: '10px' }} onClick={toggleAdmin}>toggle admin mode</button><br />
      <input type="text" placeholder='nickname' onChange={updateNickname} />
      <input type="text" placeholder='email' onChange={updateEmail} />
    </div>
  );
};

export default User;