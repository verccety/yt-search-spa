import axios from 'axios';

const API_KEY = 'PASTE_YOUR_API';
// ! API СМЕНИТЬ

const API = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  responseType: 'json',
});

export const fetchData = async ({ sortBy, searchQuery, maxResults = '12' }) => {
  try {
    const searchResult = await API(
      `search?type=video&part=snippet&maxResults=${maxResults}&q=${searchQuery}&key=${API_KEY}&order=${sortBy}`
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
  } catch (error) {
    if (error.response) {
      // Request made and server responded
      throw error.response.data;
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
  }
};
