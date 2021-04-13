import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',

  initialState: {
    currentUser: null,
  },

  reducers: {
    addFavorite: {
      reducer: (state, { payload: { favoriteObj } }) => {
        state[state.currentUser] = state[state.currentUser]
          ? [...state[state.currentUser], favoriteObj]
          : [favoriteObj];
      },
      prepare: ({ favoriteObj }) => {
        const id = new Date().getTime();
        favoriteObj.id = id;
        return { payload: { favoriteObj } };
      },
    },
    editFavorite(state, { payload: { favoriteObj, id } }) {
      const findIndex = state[state.currentUser].findIndex((x) => x.id === id);
      state[state.currentUser][findIndex] = { ...favoriteObj, id };
    },
    removeFavorite(state, { payload: { favoriteId } }) {
      state[state.currentUser] = state[state.currentUser].filter(
        (favorite) => favorite.id !== favoriteId
      );
    },
    setCurrentUser(state, { payload: username }) {
      state.currentUser = username;
    },
  },
});

export const { addFavorite, editFavorite, removeFavorite, setCurrentUser } = userSlice.actions;

export default userSlice.reducer;

export const selectCurrentUser = (state) => state.user.currentUser;
export const selectCurrentFavorites = (state) => state.user[state.user.currentUser];
