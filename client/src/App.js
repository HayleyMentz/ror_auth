import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import Nomatch from './components/shared/Nomatch';
import Navbar from '/components/shared/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';

const App = () => (
<>
<NavBar />
<FetchUser>
<Routes>
<Route path ='/' element={<Home/>} />
<Route path ='/' element={<ProtectedRoute/>} />

</Route> 

<Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/*' element={<Nomatch />} />
</Routes>
</FetchUser>
</>

)

export default App;
