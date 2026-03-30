import axios from 'axios';

// Get as many jobs as possible or limited by IsHome
const JobsLoader = async () => {
    const response = await axios.get('/api/jobs');
    return response.data;
};

// Get single job by ID
const JobLoader = async ({ params }) => {
    const response = await axios.get(`/api/jobs/${params.id}`);
    return response.data;
};

const addJob = async (newJob) => {
    try {
        const companyData = {
            name: newJob.company,
            description: newJob.companyDescription,
            contactEmail: newJob.contactEmail,
            contactPhone: newJob.contactPhone,
        };
        const res = await axios.post('/api/companies', companyData);
        const jobData = {
            type: newJob.type,
            title: newJob.title,
            description: newJob.description,
            salary: newJob.salary,
            location: newJob.location,
            company_id: res.data.data.id,
        };
        await axios.post('/api/jobs', jobData);
    } catch (error) {
        console.error('Error adding job:', error);
        throw error;
    }
};

const deleteJob = async (id) => {
    try {
        await axios.delete(`/api/jobs/${id}`);
    } catch (error) {
        console.error('Error deleting job:', error);
        throw error;
    }
};

const updateJob = async (job) => {
    try {
        const jobData = {
            type: job.type,
            title: job.title,
            description: job.description,
            salary: job.salary,
            location: job.location,
            company_id: job.company_id,
        };
        await axios.put(`/api/jobs/${job.id}`, jobData);

        const companyData = {
            name: job.company,
            description: job.companyDescription,
            contactEmail: job.contactEmail,
            contactPhone: job.contactPhone,
        };
        await axios.put(`/api/companies/${job.company_id}`, companyData);
    } catch (error) {
        console.error('Error updating job:', error);
        throw error;
    }
};

export { addJob, deleteJob, updateJob, JobsLoader, JobLoader };
