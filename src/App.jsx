import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, useRouteError } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import AddJob from './pages/AddJob';
import ShowJob from './pages/ShowJob';
import NotFoundPage from './pages/NotFoundPage';
import ErrorComponent from './components/Error';
import { addJob, deleteJob, updateJob, JobsLoader, JobLoader } from './api/jobs';

const JobErrorBoundary = () => {
  const error = useRouteError();
  return <ErrorComponent error={error} />;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Main/>}>
      <Route index element={<Home/>} loader={JobsLoader} />
      <Route path='jobs' element={<Jobs/>} loader={JobsLoader} />
      <Route path='job/:id' element={<ShowJob deleteJob={deleteJob} />} loader={JobLoader} errorElement={<JobErrorBoundary />} />
      <Route path='add-job' element={<AddJob addJobSubmit={addJob} />} loader={() => null} />
      <Route path='edit-job/:id' element={<AddJob updateJobSubmit={updateJob} />} loader={JobLoader} />
      <Route path='*' element={<NotFoundPage/>} />
    </Route>
  )
);


const App = () => {


  return (
    <RouterProvider router={router} />
  )
}

export default App