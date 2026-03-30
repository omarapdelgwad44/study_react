// ----- Old approach for your reference -----
// import { useState , useEffect } from 'react';
// import Spinner from './Spinner';
// import Error from './Error';
// import jobs from '../data/jobs.json'
// -------------------------------------------
import { useLoaderData } from 'react-router-dom';
import axios from "axios";

const ShowJob = () => {
  const job = useLoaderData();

  // ----- Old approach for your reference -----
  // const [jobs, setJobs] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  //
  // useEffect(() => {
  //   const fetchJobs = async () => {
  //     try {
  //       const response = await axios.get(`/api/jobs/${id}`);
  //       setJobs(response.data);
  //       setLoading(false);
  //     } catch (error) {
  //       setError(error);
  //       setLoading(false);
  //     }
  //   };
  //   fetchJobs();
  // }, []);
  //
  // if (loading) return <Spinner loading={loading} />;
  // if (error) return <Error />;
  // -------------------------------------------
  
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {job.data.title}
        </h2>
        <p className='text-gray-700 text-lg'>{job.data.description}</p>
      </div>
    </section>
  )
};

const JobLoader = async ({ params }) => {
  const response = await axios.get(`/api/jobs/${params.id}`);
  console.log(response);
  return response.data;
};

export { ShowJob as default , JobLoader };