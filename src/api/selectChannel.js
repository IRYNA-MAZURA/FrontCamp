import { myApiKey } from '../constants/constants';
import { createArticleCard } from '../components/createArticleCard';
import { getNewsByChannel } from './api';
import errorsHandler from '../components/errorsHandler';

const articlesPlaceholder = document.getElementById('placeholder');

export default async function selectChannel(node) {
  const channelId = node.srcElement.value;
  articlesPlaceholder.innerHTML = '';
  try {
    const news = await getNewsByChannel(channelId, myApiKey);
    news.articles.forEach((article) => createArticleCard(article, articlesPlaceholder));
  } catch (error) {
    errorsHandler.generateErrorMessage(articlesPlaceholder, error);
  }
}
