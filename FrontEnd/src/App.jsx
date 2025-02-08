import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import CreateGod from './components/CreateGod/CreateGod'
import AllGods from './components/AllGods/AllGods'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={ <CreateGod/>} />
      <Route path="/getAll" element={ <AllGods/>} />

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
