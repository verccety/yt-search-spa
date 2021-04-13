import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3004/',
  responseType: 'json',
});

//https://www.googleapis.com/youtube/v3/

//search?part=snippet&maxResults=12&q=${searchQuery}&key=${API_KEY}

//videos?id=${videoIds}&part=statistics&key=${API_KEY}

export const fetchData = async () => {
  try {
    const searchResult = await API(`search`);
    const videoIds = searchResult.data.items.map((item) => item.id.videoId).toString();
    const statisticsResult = await API(`videos`);

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
