import httpClient from './http-common';

const getByEmail = (email) => {
    return httpClient.get(`http://localhost:8080/stock/${email}`);
  };

  


  export default { getByEmail};