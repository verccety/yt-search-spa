import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchData } from 'utils/fetchData';

const initialState = {
  status: 'idle',
  searchQuery: null,
  order: 'relevance',
  maxResults: 12,
  error: null,
  fetchedVideos: {
    queryName: null,
    videoList: {},
  },
};

export const fetchVideosByQuery = createAsyncThunk(
  'search/fetchVideos',
  async ({ ...query }, { rejectWithValue }) => {
    try {
      const response = await fetchData({ ...query });
      return response;
    } catch (err) {
      let error = err; // cast the error for access
      if (!error.error) {
        throw err;
      }
      return rejectWithValue(err.error.message);
    }
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchParams(state, { payload: { searchQuery, sortBy, maxItems } }) {
      state.searchQuery = searchQuery;
      state.maxResults = maxItems || 12;
      state.order = sortBy || 'relevance';
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
    [fetchVideosByQuery.rejected]: (state, action) => {
      state.status = 'idle';
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = action.error.message;
      }
    },
  },
});

export const { setSearchParams } = searchSlice.actions;

export default searchSlice.reducer;

export const selectSearchQuery = (state) => state.search.searchQuery;
export const selectQueryName = (state) => state.search.fetchedVideos.queryName;
export const selectVideoList = (state) => state.search.fetchedVideos.videoList;
