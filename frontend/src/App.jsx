import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import SignUp from './pages/SignUp';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path = "/" element={<Login/>}/>
          <Route exact path = "/signup" element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
