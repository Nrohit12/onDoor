import {configureStore} from '@reduxjs/toolkit';
import {initialState} from './User/initialState';
import user from './User/reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import {persistStore} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, user);

export const store = configureStore({
  reducer: persistedReducer,
  preloadedState: initialState,
});

export const persistor = persistStore(store);
