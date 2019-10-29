import { myApiKey } from './constants';
import { createArticleCard } from './createArticleCard';
import { getNewsByChannel } from './api';

const articlesPlaceholder = document.getElementById('placeholder');

export default async function selectChannel(node) {
  const channelId = node.srcElement.value;
  const news = await getNewsByChannel(channelId, myApiKey);
  articlesPlaceholder.innerHTML = '';
  if (news.status === 'error') {
    articlesPlaceholder.innerHTML = 'There are no available articles for this channel.';
  } else {
    news.articles.forEach((article) => createArticleCard(article, articlesPlaceholder));
  }
}
