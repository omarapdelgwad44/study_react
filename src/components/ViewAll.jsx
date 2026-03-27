import {Link} from 'react-router-dom'
const ViewAll = ({btn="View All Jobs "}) => {
  return (
       <section className="m-auto max-w-lg my-10 px-6">
      <link
        to="/jobs"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >{btn}
        </link>
    </section>
  )
}

export default ViewAll