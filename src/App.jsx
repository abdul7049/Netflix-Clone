import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'

function App() {
  

  return (
    <>
    <BrowserRouter>
       <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
        
  </Routes>
       
      </BrowserRouter>
    </>
  )
}

export default App
