import { useState } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';

const Register = ({handleRegister}) => {
  const [user,setUser] = usestate({email: '', password: '', passwordConfirmation: ''})

  const handleSubmit = (e) => {
    e.preventDefault()
    if (user.password === user.passwordConfirmation) {
    handleRegister(user)
    setUser({email: '', password: '', passwordConfirmation: ''})
  } else {
    alert('Password does not Match!')
  }

  <>
  <h1>Register</h1>
  <form onSubmit={handleSubmit}>
    <label>Email</label>
<input
name='email'
value={user.email}
onChange={(e) => setUser({...user, email, e.target.value})}
type= 'email'
required
/>
<label>Password</label>
<input
name='password'
value={user.password}
onChange={(e) => setUser({...user, password, e.target.value})}
type= 'password'
required
/>
<label>Password Confirmation</label>
<input
name='passwordConfirmation'
value={user.passwordConfirmation}
onChange={(e) => setUser({...user, passwordConfirmation, e.target.value})}
type= 'password'
required
/>
<button type='submit'>Submit</button>
  </form>
  </>
)

}

const ConnectedRegister = (props) => (
  <AuthConsumer>
    { value => <Login {...props}{...value} /> }
  </AuthConsumer>
)

export default ConnectedRegister;