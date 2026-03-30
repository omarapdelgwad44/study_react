// ----- Old approach for your reference -----
// import { useState , useEffect } from 'react';
// import Spinner from './Spinner';
// import Error from './Error';
// import jobs from '../data/jobs.json'
// -------------------------------------------
import { useLoaderData , Link, useNavigate } from 'react-router-dom';
import {FaMapMarker} from 'react-icons/fa';
import GoBackBtn from '../components/GoBackBtn';


const ShowJob = ({ deleteJob }) => {
  const job = useLoaderData();
  const navigate = useNavigate();

  const onDeleteClick = async (jobId) => {
    const confirm = window.confirm('Are you sure you want to delete this job?');
    if (!confirm) return;

    await deleteJob(jobId);
    navigate('/jobs');
  };

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
      <>
      <GoBackBtn />
    <section className="bg-indigo-50">
      <div className="container m-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
          <main>
            <div
              className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
            >
              <div className="text-gray-500 mb-4">{job.data.type}</div>
              <h1 className="text-3xl font-bold mb-4">
                {job.data.title}
              </h1>
              <div
                className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
              >
                <FaMapMarker className="fa-solid fa-location-dot text-lg text-orange-700 mr-2" />
                <p className="text-orange-700">{job.data.location}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-indigo-800 text-lg font-bold mb-6">
                Job Description
              </h3>

              <p className="mb-4">
                {job.data.description}
              </p>

              <h3 className="text-indigo-800 text-lg font-bold mb-2">Salary</h3>

              <p className="mb-4">${job.data.salary}</p>
            </div>
          </main>

          {/* Sidebar */}
          <aside>
            {/* Company Info */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">Company Info</h3>

              <h2 className="text-2xl">{job.data.company.name}</h2>

              <p className="my-2">
                {job.data.company.description}
              </p>

              <hr className="my-4" />

              <h3 className="text-xl">Contact Email:</h3>

              <p className="my-2 bg-indigo-100 p-2 font-bold">
                {job.data.company.contactEmail}
              </p>

              <h3 className="text-xl">Contact Phone:</h3>

              <p className="my-2 bg-indigo-100 p-2 font-bold">{job.data.company.contactPhone}</p>
            </div>

            {/* Manage */}
            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-xl font-bold mb-6">Manage Job</h3>
              <Link
                to={`/edit-job/${job.data.id}`}
                className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >Edit Job
                </Link>
              <button
                onClick={() => onDeleteClick(job.data.id)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >
                Delete Job
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section> 
    </> 
    )
};

export default ShowJob;