import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Home from "./pages/home/Home"
import Hotel from "./pages/hotel/Hotel";
import Redirect1 from "./components/redirect pages/Redirect1";
import Main from "./pages/main/Main";
import Login from "./pages/login/Login";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Home/>}/>
        <Route path="/" element={<Main/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/Redirect" element={<Redirect1/>}/>
        <Route path="/login" element={<Login/>}/>

      </Routes>
    </BrowserRouter>


  );
}

export default App;
