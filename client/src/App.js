import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import Nomatch from './components/shared/Nomatch';
import Navbar from '/components/shared/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

const App = () => (
<>
<Routes>
<Route path ='/' element={<Home/>} />

</Routes>

</>

)

export default App;
