import { myApiKey } from './constants.js';
import { createArticleCard } from './createArticleCard.js';

const articlesPlaceholder = document.getElementById('placeholder');

export function selectChannel(node) {
    const channelId = node.srcElement.value;

    fetch(`https://newsapi.org/v1/articles?source=${channelId}&apiKey=${myApiKey}`)
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            articlesPlaceholder.innerHTML = "";

            res.status === "error" ?
                articlesPlaceholder.innerHTML = "There are no available articles for this channel." :
                res.articles.forEach(article => createArticleCard(article, articlesPlaceholder));
        });
}