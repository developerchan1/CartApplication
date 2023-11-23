// showLastCommitMessageForThisLibrary.js
import {create} from 'apisauce';

// define the api
const dummyJsonApi = create({
  baseURL: 'https://dummyjson.com',
  headers: {Accept: 'application/json'},
});

// start making calls
export const getProducts = async () => {
  return await dummyJsonApi.get('/products');
};
