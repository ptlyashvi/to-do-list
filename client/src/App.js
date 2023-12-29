import "./App.css";
import Register from "./components/register/register";
import Login from "./components/Login/login";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header.jsx";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              Boolean(localStorage.getItem("loggedin")) ? (
                <Header />
              ) : (
                <Navigate to={"/home"} />
              )
            }
          ></Route>
          <Route
            exact
            path="/home"
            element={
              !Boolean(localStorage.getItem("loggedin")) ? (
                <Home />
              ) : (
                <Navigate to={"/"} />
              )
            }
          ></Route>
          <Route
            path="/login"
            element={
              !Boolean(localStorage.getItem("loggedin")) ? (
                <Login />
              ) : (
                <Navigate to={"/"} />
              )
            }
          ></Route>

          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
