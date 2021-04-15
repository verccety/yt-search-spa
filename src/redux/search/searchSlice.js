import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchData } from 'utils/fetchData';

const initialState = {
  status: 'idle',
  searchQuery: null,
  order: 'relevance',
  maxResults: 12,
  fetchedVideos: {
    queryName: null,
    videoList: {},
  },
};

export const fetchVideosByQuery = createAsyncThunk('search/fetchVideos', async ({ ...query }) => {
  const response = await fetchData({ ...query });
  return response;
});

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: {
    [fetchVideosByQuery.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchVideosByQuery.fulfilled]: (state, action) => {
      state.status = 'idle';
      state.fetchedVideos.videoList = action.payload;
      state.fetchedVideos.queryName = state.searchQuery;
    },
  },
});

export const { setSearchQuery, setVideoList } = searchSlice.actions;

export default searchSlice.reducer;

export const selectSearchQuery = (state) => state.search.searchQuery;
export const selectQueryName = (state) => state.search.fetchedVideos.queryName;
export const selectVideoList = (state) => state.search.fetchedVideos.videoList;
