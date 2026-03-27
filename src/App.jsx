 import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom';
 import Main from './layouts/Main';
 import Home from './pages/Home';
 import Jobs from './pages/Jobs';
 import ShowJob from './pages/ShowJob';
 import NotFoundPage from './pages/NotFoundPage';
 
 const router = createBrowserRouter(
   createRoutesFromElements(
    <Route path='/' element={<Main/>} >
      <Route index element={<Home/>} />
      <Route path='jobs' element={<Jobs/>} />
      <Route path='job/:id' element={<ShowJob/>} />
      <Route path='*' element={<NotFoundPage/>} />
      
    </Route>
   )
 )
 const App = () => {
   return (
      <RouterProvider router={router} />
    )
 }
 
 
 export default App