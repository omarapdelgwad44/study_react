import Card from './card';
const forDevelopers = {
  title: "For Developers",
  description: "Browse our React jobs and start your career today",
  link: "/jobs.html",
  linkText: "Browse Jobs"
}
const forDevelopersStyles = {
  backgroundColor: "bg-gray-100",
  padding: "p-6",
  borderRadius: "rounded-lg",
  shadow: "shadow-md"
}
const forEmployers = {
  title: "For Employers",
  description: "List your job to find the perfect developer for the role",
  link: "/add-job.html",
  linkText: "Add Job"
}
const forEmployersStyles = {
  backgroundColor: "bg-indigo-100",
  padding: "p-6",
  borderRadius: "rounded-lg",
  shadow: "shadow-md"
}
const Cards = () => {
  return (
    <>
     <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <Card data={forDevelopers} styles={forDevelopersStyles}/>
        <Card data={forEmployers} styles={forEmployersStyles}/>  
      </div>
      </div>
    </section>
    </>
  )
}

export default Cards