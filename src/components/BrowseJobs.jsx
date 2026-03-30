// ----- Old approach imports for your reference -----
// import { useState , useEffect } from 'react';
// import Spinner from './Spinner';
// import Error from './Error';
// import jobs from '../data/jobs.json'
// -------------------------------------------
import { useLoaderData } from 'react-router-dom';
import axios from "axios";
import JobCard from './JobCard';

const BrowseJobs = ({ IsHome = false, title = "Browse Jobs" }) => {
  const jobs = useLoaderData();
  const receentlyAddedJobs = IsHome ? jobs.data.slice(0, 3) : jobs.data;
  console.log(jobs);

  // ----- Old approach for your reference -----
  // const [jobs, setJobs] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  //   useEffect(() => {
  //       const fetchJobs = async () => {
  //         try {
  //           const response = await axios.get(`/api/jobs${IsHome ? '?per_page=3' : ''}`);
  //           setJobs(response.data);
  //           // console.log(response);
  //           setLoading(false);
  //         } catch (error) {
  //           setError(error);
  //           setLoading(false);
  //         }
  //       };
  //       fetchJobs();
  //   }, []);
  // if (loading) {
  //   return <Spinner loading={loading} />;
  // }
  // if (error) {
  //   return <Error />;
  // }
  // -------------------------------------------

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {receentlyAddedJobs.map((job) => (
            <JobCard job={job} key={job.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
const JobsLoader = async () => {
  const response = await axios.get('/api/jobs');
  return response.data;
}

export { BrowseJobs as default, JobsLoader };