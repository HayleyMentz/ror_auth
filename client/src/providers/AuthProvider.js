import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AuthContext = React.createContext();

export const AuthConsumer = AuthContext.Consumer;


const AuthProvider = ({ children}) => {
const [user, setUser ] = useState(null)
const navigate = useNavigate()

const handleRegister = (user) => {

axios.post('/api/auth', user)
.then( res =>{
  setUser(res.data.dats)
  navigate('/')
})
.catch( res => {
  console.group(res)
})
}

const handleLogin = (user) => {
axios.post('/api/auth/sign_in', user)
.then( res =>{
  setUser(res.data.dats)
  navigate('/')
})
.catch( res => {
  console.group(res)
})
}
const handleLogout = () => {
  axios.delete('/api/auth/sign_out')
  .then(res => {
    setUser(null)
    navigate('/')

  })
  .catch( res => {
    console.group(res)
})
}
  return(

    <AuthContext.Provider value={{
user,
handleRegister,
handleLogin,
handleLogout,
authenticated: user !== null, 
setUser: (user) => setUser(user),

    }}>
  { children }

</AuthContext.Provider>
  )
}