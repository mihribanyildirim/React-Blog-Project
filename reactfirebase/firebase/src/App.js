import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import CreatePost from './pages/CreatePost';
import {useState} from 'react';
import {signOut} from 'firebase/auth';
import {auth} from './firebase-config';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const signUserOut =() => {
    signOut(auth).then (() => {
      localStorage.clear()
      setIsAuth(false);
      window.location.pathname = '/login';
    });
  };

  return (
  <Router>
    <nav>
      <Link to='/'>Home</Link>
      <Link to="/about">About</Link>
      <Link to='/createpost'>Create Post</Link>
      {!isAuth ? <Link to='/login'>Login</Link> : <button onClick={signUserOut}>Log out</button>}
    </nav>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login setIsAuth={setIsAuth}/>}></Route>
      <Route path='/createpost' element={<CreatePost/>}></Route>
      <Route path='/about' element={<About />} />
    </Routes>
  </Router>
  );
}

export default App;
