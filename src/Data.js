import axios from "axios";
const baseURL = 'http://localhost:3001/api/persons'

const getALL = () => {
    return axios.get(baseURL)
}

const addPerson = (newObj) => {
    return axios.post(baseURL + '/add', newObj)
}

const deletePerson = (id) => {
    return axios.delete(baseURL + '/' + id)
}

// const updatePhone = (id, newObj) => {
//     return axios.put(baseURL + '/' + id, newObj)
// }

const personService = {
    getALL: getALL,
    addPerson: addPerson,
    deletePerson: deletePerson,
};

export default personService;
