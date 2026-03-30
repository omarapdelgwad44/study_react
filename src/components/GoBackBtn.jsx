import { FaArrowLeft } from "react-icons/fa";
const GoBackBtn = () => {
  return (
    <>
      <div className="container m-auto py-6 px-6">
        <a
          href="/jobs"
          className="text-indigo-500 hover:text-indigo-600 flex items-center"
        >
          <FaArrowLeft className="mr-2" /> Back to Job Listings
        </a>
      </div>
    </>
  )
}

export default GoBackBtn