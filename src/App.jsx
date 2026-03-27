 import React from 'react'
 import Nav from './components/NavBar';
 import Hero from './components/Hero';
 import DevelopersAndEmployers from './components/Cards';
 import BrowseJobs from './components/BrowseJobs';
 import Footer from './components/footer';
 
 const App = () => {
   return (
     <>
     <Nav/>
     <Hero/>
     <DevelopersAndEmployers/>   
     <BrowseJobs/>
     <Footer/>
     </>
    )
 }
 
 
 export default App