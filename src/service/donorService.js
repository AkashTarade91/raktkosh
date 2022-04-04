import httpClient from './http-common';

const getVerifyEmail = (email) => {
    return httpClient.get(`http://localhost:8080/donor/verifyemail/${email}`);
  };

  const getVerifyMobile = (mobile) => {
    return httpClient.get(`http://localhost:8080/donor/verifymobile/${mobile}`);
  };

  export default { getVerifyEmail, getVerifyMobile};