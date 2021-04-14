import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/userSlice';
import searchReducer from './search/searchSlice';
import modalReducer from './modal/modalSlice';
import formReducer from './form/formSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const rootReducer = combineReducers({
  user: userReducer,
  search: searchReducer,
  modal: modalReducer,
  form: formReducer,
});

export default persistReducer(persistConfig, rootReducer);
