import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import Settings from "./Pages/settings/Settings";
import Single from "./Pages/single/Single";
import Write from "./Pages/Write/Write";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { useContext } from "react";
import { Context } from "./context/Context";
import Contact from "./Pages/Contact";



function App() {
  const {user} = useContext(Context)
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="login" element={ user ? <Home/> : <Login/>}/>
        <Route path="register" element={ user ? <Home/> : <Register/>}/>
        <Route path="write" element={user ? <Write/> : <Register/>} />
        <Route path="settings" element={user ? <Settings/> : <Home/>}/>
        <Route path="/post/:postId" element={<Single/>} />
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
