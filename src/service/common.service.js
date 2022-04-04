import httpClient from './http-common';
//const baseURL='http://localhost:8080/commondata/'
const getAllStates = () => {
  return httpClient.get(`http://localhost:8080/commondata/allstates`);
};


const getAllDistrictsByStateId = (stateId) => {
    return httpClient.get(`http://localhost:8080/commondata/districts/${stateId}`);
  };

  //http://localhost:8080/commondata/cities/'+districtId
  const getAllCitiesByDistricId = (districtId) => {
    return httpClient.get(`http://localhost:8080/commondata/cities/${districtId}`);
  };

// const create = (data) => {
//   return httpClient.post('', data);
// };

// const get = (id) => {
//   return httpClient.get(`${id}`);
// };

// const update = (data) => {
//   return httpClient.put('', data);
// };

// const remove = (id) => {
//   return httpClient.delete(`/${id}`);
// };
export default { getAllStates,getAllDistrictsByStateId, getAllCitiesByDistricId };
