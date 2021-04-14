import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchQuery: null,
    fetchedVideos: {
      queryName: null,
      videoList: {},
    },
  },
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    setVideoList(state, action) {
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
