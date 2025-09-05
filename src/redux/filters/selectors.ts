import { RootState } from '../store';

export const selectNameFilter = (state: RootState) =>
  state.filters.filters.name;
