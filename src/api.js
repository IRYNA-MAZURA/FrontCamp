import { myApiKey } from './constants';

export const request = (url) => fetch(url)
  .then((res) => res.json());

export const getAllChannels = () => {
  const url = `https://newsapi.org/v2/sources?apiKey=${myApiKey}`;
  return request(url);
};

export const getNewsByChannel = (channelId) => {
  const url = `https://newsapi.org/v1/articles?source=${channelId}&apiKey=${myApiKey}`;
  return request(url);
};
