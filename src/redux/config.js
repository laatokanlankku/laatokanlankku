import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import localeReducer from './reducers/localeReducer';

const persistConfig = {
  key: 'root',
  // blacklist: ['item'],
  storage,
};

const rootReducer = combineReducers({
  localeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
