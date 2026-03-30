import { Outlet, useNavigation } from 'react-router-dom';
import Nav from '../components/NavBar';
import Spinner from '../components/Spinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Main = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <>  
      <Nav />
      {isLoading ? <Spinner loading={true} /> : <Outlet />}
      <ToastContainer position="top-right" autoClose={3000} />
    </>

  )
}

export default Main