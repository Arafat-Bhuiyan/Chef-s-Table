import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About/About'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Recipes from './components/Recipes/Recipes'
import Search from './components/Search/Search'

function App() {

  return (
    <>
      <BrowserRouter>
      <div className='max-w-screen-xl mx-auto'>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/recipes' element={<Recipes />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/search' element={<Search />}></Route>
        </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
