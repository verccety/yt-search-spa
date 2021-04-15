import axios from 'axios';
const API_KEY = 'APITESTSTRING';

const API = axios.create({
  baseURL: 'http://localhost:3004/',
  responseType: 'json',
});

//https://www.googleapis.com/youtube/v3/

export const fetchData = async ({ sortBy = 'relevance', searchQuery, maxResults = '12' }) => {
  try {
    const searchResult = await API(
      `search?part=snippet&maxResults=${maxResults}&q=${searchQuery}&key=${API_KEY}&order=${sortBy}`
    );
    const videoIds = searchResult.data.items.map((item) => item.id.videoId).toString();
    const statisticsResult = await API(`videos?id=${videoIds}&part=statistics&key=${API_KEY}`);

    // Для удобного merge статистики с объектом со списком видео
    const statisticsResultObj = {};
    statisticsResult.data.items.forEach((item) => {
      statisticsResultObj[item.id] = item.statistics;
    });

    searchResult.data.items.forEach((item) => {
      item.statistics = statisticsResultObj[item.id.videoId];
    });

    return searchResult.data;
  } catch (err) {
    console.log(err);
  }
};
