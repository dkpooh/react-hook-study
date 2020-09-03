import React, {useReducer} from 'react';

const initialState = {
  isAdmin: false,
  nickname: '',
  email: ''
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'reset':
      return initialState
    case 'toggleAdmin':
      return {
        ...state,
        isAdmin: !state.isAdmin
      }
    case 'updateNickname':
      return {
        ...state,
        nickname: action.nickname
      }
    case 'updateEmail':
      return {
        ...state,
        email: action.email
      }
    default: throw new Error()
  }
}

const UserReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div style={{ padding: '20px', textAlign: 'left' }}>
      <h3>{state.isAdmin ? 'admin' : 'user'}</h3>
      <h3>{`nickname: ${state.nickname}`}</h3>
      <h3>{`email: ${state.email}`}</h3>
      <button style={{ marginBottom: '10px' }} onClick={() => dispatch({ type: 'reset' })}>RESET</button><br />
      <button style={{ marginBottom: '10px' }} onClick={() => dispatch({ type: 'toggleAdmin' })}>toggle admin mode</button><br />
      <input type="text" value={state.nickname} placeholder='nickname' onChange={e => dispatch({ type: 'updateNickname', nickname: e.target.value })} />
      <input type="text" value={state.email} placeholder='email' onChange={e => dispatch({ type: 'updateEmail', email: e.target.value })} />
    </div>
  );
};

export default UserReducer;