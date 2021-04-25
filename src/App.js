import React, { useState, useEffect } from 'react';
import Jobs from './component/jobs'
import Pagination from './component/pagination'
import Home from './component/Home'
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  
  return (
    <Router className = "container">
      <>
        
    
        <Route  path = "/Jobs" component = { Jobs } />
        <Route  path="/Pagination" component={Pagination} />
        <Route exact path="/" component={Home} />    
          
      


      </>
    </Router>
  );
}

export default App;