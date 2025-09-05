import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice';
import { filtersReducer } from './filters/slice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { themeReducer } from './theme/slice';
import { contactReducer } from './contacts/slice';
import { AuthState } from './auth/auth.types';

const persistAuthConfig = {
  key: 'userToken',
  storage,
  whitelist: ['token'],
};

const persistThemeConfig = {
  key: 'theme',
  storage,
};

const persistedAuthReducer = persistReducer<AuthState>(
  persistAuthConfig,
  authReducer
);
const persistedThemeReducer = persistReducer(persistThemeConfig, themeReducer);

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filters: filtersReducer,
    auth: persistedAuthReducer,
    theme: persistedThemeReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware<{ serializableCheck: { ignoredActions: string[] } }>({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);

export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
