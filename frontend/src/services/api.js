import axios from "axios";

// const api = axios.create({
//  baseUrl: "http://localhost:5000/api/"
// })

export default {
  async getAllNames() {
    return (await axios.get('http://localhost:5000/api/names')).data
  },
  async postNewName(newName) {
    return await axios.post("http://localhost:5000/api/names", newName);
  }
}

