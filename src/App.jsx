import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, useRouteError } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import { JobsLoader } from './components/BrowseJobs';
import ShowJob, { JobLoader } from './pages/ShowJob';
import NotFoundPage from './pages/NotFoundPage';
import ErrorComponent from './components/Error';

const JobErrorBoundary = () => {
  const error = useRouteError();
  return <ErrorComponent error={error} />;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Main/>}>
      <Route index element={<Home/>} loader={JobsLoader} />
      <Route path='jobs' element={<Jobs/>} loader={JobsLoader} />
      <Route path='job/:id' element={<ShowJob/>} loader={JobLoader} errorElement={<JobErrorBoundary />} />
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