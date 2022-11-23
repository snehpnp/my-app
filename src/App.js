import React, {  Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import Home from './components/Home'
import Blogs from './components/Blogs'
import Contact from './components/Contact'
import Login from './components/Login'
import { A, B, C, D } from './components/Dropdown'
import Search from './components/Search'
import Filterpage from './components/Filterpage'
import Projected from './components/Projected'
import User from './components/User'
import Sneh from './components/Sneh'
import Kika from './components/Kika'
import Close from './components/Close'
import Theme from './Components1/Theme'
// import Datatable from './components/Datatable'

const Datatable =lazy(() => import('./components/Datatable'))

function App() {
  return (
    <>
      {/* <Home /> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Projected Component={Home} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/blogs/" element={<Blogs />}>
                 <Route path="user" element={<User />} />
                 <Route path="kika" element={<Kika />} />
                 <Route path="sneh" element={<Sneh />} />
            </Route>
            <Route path="/contact/:name" element={<Projected Component={Contact} />}/>
            <Route path="/textform" element={<Textform />} />
            <Route path="/search-engine" element={<Search />} />
            <Route path="/theme" element={<Theme />} />
            
            <Route path="/datatable" element={<Suspense fallback={console.log("Loading")}><Datatable /></Suspense>} />
            <Route path="/filter-page" element={<Filterpage />} />
            <Route path="/close" element={<Close />} />
            {/* Drop down */}
            <Route path="/A" element={<Projected Component={A} />} />
            <Route path="/B" element={<Projected Component={B} />} />
            <Route path="/C" element={<Projected Component={C} />} />
            <Route path="/D" element={<Projected Component={D} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
