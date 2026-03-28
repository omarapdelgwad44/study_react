 import Hero from '../components/Hero';
 import DevelopersAndEmployers from '../components/Cards';
 import BrowseJobs from '../components/BrowseJobs';
 import ViewAll from '../components/ViewAll';

const Home = () => {
  return (
     <>
     <Hero/>
     <DevelopersAndEmployers/>   
     <BrowseJobs title='Recent Jobs'/>
     <ViewAll/>
     </>
  )
}

export default Home