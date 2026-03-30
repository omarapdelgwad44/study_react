import { Outlet, useNavigation } from 'react-router-dom';
import Nav from '../components/NavBar';
import Spinner from '../components/Spinner';

const Main = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <>  
      <Nav />
      {isLoading ? <Spinner loading={true} /> : <Outlet />}
    </>
  )
}

export default Main