import axios from "axios";

const API_URL = "http://localhost:3000/superheroes";

const create = async (god) => {
  const res = await axios.post(API_URL + "/superheroes", god);
  return res.data; //payload
};

const getAll = async () => {
  const res = await axios.get(API_URL + "/superheroes");
  return res.data;
};
const erase = async(id) => {
  const res = await axios.delete(API_URL + "/superheroes/"+id);
  return res.data;
}

const godService = {
  create,
  getAll,
  erase
};

export default godService;
