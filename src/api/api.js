import { myApiKey, status, methods } from '../constants/constants';
import { handler } from './handlers/proxyHandler';

const proxy = new Proxy({ type: methods.GET }, handler);

export const request = (url) => fetch(url, proxy[methods.GET])
  .then((res) => {
    console.log(res);
    if (res.statusText === status.error) {
      throw new Error(res.statusText);
    } else { return res.json(); }
  })
  .catch((error) => { throw error; });

export const getAllChannels = () => {
  const url = `https://newsapi.org/v2/sources?apiKey=${myApiKey}`;
  return request(url);
};

export const getNewsByChannel = (channelId) => {
  const url = `https://newsapi.org/v1/articles?source=${channelId}&apiKey=${myApiKey}`;
  return request(url);
};
