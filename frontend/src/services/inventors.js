import axios from 'axios'

const getInventors = async () => {
    return axios.get('http://localhost:5000/inventors')
}


export default getInventors;