import BrowseJobs from "../components/BrowseJobs"
import jobs from "../data/jobs.json"

const Jobs = () => {
  return (
    <BrowseJobs NumberOfJobs={jobs.jobs.length} />
  )
}

export default Jobs