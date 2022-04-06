import httpClient from './http-common';

const acceptBankRequest = (selectedArray) => {
    return httpClient.post('http://localhost:8080/admin/registerbank' , selectedArray);
  };

  const rejectBankRequest = (selectedArray) => {
    return httpClient.post('http://localhost:8080/admin/rejectbank' , selectedArray);
  };

  export default { acceptBankRequest, rejectBankRequest};