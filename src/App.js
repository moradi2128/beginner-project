import React from 'react'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignInPage from './pages/SignInPage'



const App = (props) => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={Home()} />
        <Route path="/signin" element={SignInPage()} />
      </Routes>

    </Router>
  )
}

export default App
