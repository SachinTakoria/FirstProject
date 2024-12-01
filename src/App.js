'use client'
import React from 'react'
import Header from './components/Header'
// import Blogitem from './components/Blogitem'
import Bloglist from './components/Bloglist'
import Footer from './components/Footer'

const App = () => {

  return (
    <div>
      <h1>Heelo</h1>
     <Header/>
     {/* <Blogitem/> */}
     <Bloglist/>
     <Footer/>
      
    </div>
  )
}

export default App
