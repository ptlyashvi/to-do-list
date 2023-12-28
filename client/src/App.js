import './App.css';
import Register from './components/register/register';
import Login from './components/Login/login';
import Home from './components/Home/Home'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
//import TodoForm from './components/TodoForm/TodoForm';
import { useEffect, useState } from 'react'
import Header from './components/Header/Header.jsx'


function App() {

  const [user, setLoginUser] = useState(null);
  

  useEffect(() => {
    console.log("useEffect called");
    console.log(user);
  }, [user]);

  function loggedinHandler(user) {
    console.log("user : ", user);
    setLoginUser(user);
  }

  return (
    <div className='App'>
      <Router>
        <Routes>
          {/* <Route exact path="/" element={<Home/>}></Route> */}
          <Route path="/" element={
            user?<Header></Header>:<Navigate to={<Home/>}/>
          }>
          </Route>
          <Route path="/login" element={<Login onLogin={loggedinHandler}/>}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
