import React, { useState, useEffect,Fragment } from 'react';
import Jobs from './jobs'
import PrimaryAppBar from './header'
import axios from 'axios';
import BasisPaginationGrid from './pagination';


const App = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(12);


  const BASE_URL = 'https://secret-ocean-49799.herokuapp.com/https://jobs.github.com/positions.json'
  
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(BASE_URL);
      setJobs(res.data);
      setLoading(false);    
    };

    fetchPosts();
  }, []);
 

  // Get current posts
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);



  return (
  <div className='container mt-5'>
   <Fragment>

      <PrimaryAppBar /> 
      <BasisPaginationGrid
        jobsPerPage={jobsPerPage}
        totalJobs={jobs.length}
        paginate={paginate}
      />  
      <Jobs currentJobs={currentJobs} loading={loading} jobs = {jobs}/> 


  </Fragment>

 </div>
  );
};

export default App;