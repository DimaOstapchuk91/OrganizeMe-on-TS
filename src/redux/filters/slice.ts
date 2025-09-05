import { createSlice } from '@reduxjs/toolkit';
import { FiltersState } from './filters.types';

const initialState: FiltersState = {
  filters: {
    name: '',
  },
};

const slice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filters.name = action.payload;
    },
  },
});

export const filtersReducer = slice.reducer;

export const { changeFilter } = slice.actions;
