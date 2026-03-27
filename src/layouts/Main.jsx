import {Outlet} from 'react-router-dom';
 import Nav from '../components/NavBar';


const Main = () => {
  return (
    <>  
    <Nav/>
    <Outlet/>
    </>
  )
}

export default Main