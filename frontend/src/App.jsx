import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import SignUp from './pages/SignUp';
import Codeforces from './pages/Codeforces';
import Leetcode from './pages/Leetcode';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path = "/" element={<Login/>}/>
          <Route exact path = "/signup" element={<SignUp/>}/>
          <Route exact path = "/codeforces" element={<Codeforces/>}/>
          <Route exact path = "/leetcode" element={<Leetcode/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
