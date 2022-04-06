import httpClient from './http-common';

const getVerifyEmail = (email) => {
    return httpClient.get(`http://localhost:8080/bank/verifyemail/${email}`);
  };

  const getVerifyMobile = (mobile) => {
    return httpClient.get(`http://localhost:8080/bank/verifycontact/${mobile}`);
  };

  const getVerifyLicence = (licence) => {
    return httpClient.get(`http://localhost:8080/bank/verifylicence/${licence}`);
  };


  const getAllBank = () => {
    return httpClient.get(`http://localhost:8080/bank/info`);
  };

  const getAllPendingReqBank = () => {
    return httpClient.get(`http://localhost:8080/bank/pendinginfo`);
  };

  const getAllAcceptedBank = () => {
    return httpClient.get(`http://localhost:8080/bank/acceptedinfo`);
  };

  const getAllAcceptedBankByCity = (cityId) => {
    return httpClient.get(`http://localhost:8080/bank/acceptedinfo/city/${cityId}`);
  };

  const getAllAcceptedBankByDistrict = (districtId) => {
    return httpClient.get(`http://localhost:8080/bank/acceptedinfo/district/${districtId}`);
  };

  const getAllAcceptedBankByState = (stateId) => {
    return httpClient.get(`http://localhost:8080/bank/acceptedinfo/state/${stateId}`);
  };


  export default { getVerifyEmail, getVerifyMobile, getAllBank, getAllPendingReqBank, 
    getVerifyLicence, getAllAcceptedBank, getAllAcceptedBankByCity,getAllAcceptedBankByDistrict, getAllAcceptedBankByState};