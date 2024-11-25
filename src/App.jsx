
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Project from './pages/Project'
import Pnf from './pages/Pnf'
import Footer from './components/Footer'
function App() {
 

  return (
    <>
     <Routes>
      <Route path='/' element={ <Home/> }/>
      <Route path='/login' element={ <Auth/> }/>
      <Route path='/register' element={ <Auth insideRegister={true}/> }/>
      <Route path='/dashboard' element={ <Dashboard/> }/>
      <Route path='/project' element={ <Project/> }/>
      <Route path='/*' element={ <Pnf/> }/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
