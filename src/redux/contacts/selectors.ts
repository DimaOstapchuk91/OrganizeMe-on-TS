import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/selectors';
import { RootState } from '../store';
import { ContactData } from '../../types/contacts.types';

export const selectContacts = (state: RootState) =>
  state.contacts.contacts.items;
export const selectIsLoading = (state: RootState) =>
  state.contacts.contacts.loading;
export const selectError = (state: RootState): string | null =>
  state.contacts.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter): ContactData[] => {
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter) ||
        contact.number.includes(filter)
    );
  }
);
