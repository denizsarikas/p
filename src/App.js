
import './App.css';
import Login from '../src/pages/Login/Login'
import Register from '../src/pages/Register/Register'
import Home from '../src/pages/Home/Home'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


function App() {

  const userData = ''

  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={ userData ? <Home /> : <Navigate to="/login" />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
          </Routes>  
      </BrowserRouter>
    </div>

  );
}

export default App;
