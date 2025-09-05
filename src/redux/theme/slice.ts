import { createSlice } from '@reduxjs/toolkit';
import { ThemeState } from './theme.types';

const initialState: ThemeState = {
  theme: 'light',
};
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
