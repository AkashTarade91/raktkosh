import httpClient from './http-common';

const getVerifyEmail = (email) => {
    return httpClient.get(`http://localhost:8080/bank/verifyemail/${email}`);
  };

  const getVerifyMobile = (mobile) => {
    return httpClient.get(`http://localhost:8080/bank/verifycontact/${mobile}`);
  };


  const getAllBank = () => {
    return httpClient.get(`http://localhost:8080/bank/info`);
  };

  const getAllPendingReqBank = () => {
    return httpClient.get(`http://localhost:8080/bank/pendinginfo`);
  };

  export default { getVerifyEmail, getVerifyMobile, getAllBank, getAllPendingReqBank};