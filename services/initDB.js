const newsData = require('../db/newsData');
const News = require('../db/models/News');

module.exports = () => {

  News.collection.remove({}, (error, result) => {
    console.log(result);
    console.error(error);
  });

  News.collection.insertMany(newsData.sources, (error, result) => {
    console.log(result);
    console.error(error);
  });
};
