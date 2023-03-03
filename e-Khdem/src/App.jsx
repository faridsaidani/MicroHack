import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
