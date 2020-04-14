import axios from 'axios'


const getProjects = async () => {
    return axios.get('http://localhost:5000/projects')
}


export default getProjects;