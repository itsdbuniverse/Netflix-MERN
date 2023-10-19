import { useContext } from "react";
import {AuthContext} from"../src/authContext/AuthContext" //for authentication
import "./app.scss"
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import Watch from "./components/pages/watch/Watch";
import Home from "./home/Home";
import { BrowserRouter as Router, Route, Routes , Navigate} from "react-router-dom";


const App = () => {
  const user = true;
  // const {user} = useContext(AuthContext);
  return (
    <Router>
      <Routes>

        <Route path="/" element={user ? <Home /> : <Navigate to="/register" /> } />

        <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />

        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        { user && (
          <>
        <Route path="/movies" element={<Home type="movie" />} />

        <Route path="/series" element={<Home type="series" />} />

        <Route path="/watch" element={<Watch />} />
          </>
        )}
        <Route path="/*" element={<>Page not Found</>}/>
      </Routes>
    </Router>
  )
}

export default App
