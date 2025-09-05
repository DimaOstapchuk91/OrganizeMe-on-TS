import { createAsyncThunk } from '@reduxjs/toolkit';
import { goitApi } from '../auth/operations';
import { handleAsyncError } from '../config/asyncError';
import { ThunkConfig } from '../../types/reduxTypes/common.types';
import {
  AddContactPayload,
  ContactResponse,
  UpdateContactPayload,
} from './contacts.types';

export const fetchContacts = createAsyncThunk<
  ContactResponse[],
  void,
  ThunkConfig
>('contacts/fetchAll', async (_, thunkApi) => {
  try {
    const { data } = await goitApi.get<ContactResponse[]>('/contacts');
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(handleAsyncError(error));
  }
});

export const addContact = createAsyncThunk<
  ContactResponse,
  AddContactPayload,
  ThunkConfig
>('contacts/addContact', async (newContact, thunkApi) => {
  try {
    const { data } = await goitApi.post<ContactResponse>(
      '/contacts',
      newContact
    );
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(handleAsyncError(error));
  }
});

export const deleteContact = createAsyncThunk<string, string, ThunkConfig>(
  'contacts/deleteContact',
  async (id, thunkApi) => {
    try {
      throw new Error('Test error');

      const { data } = await goitApi.delete<ContactResponse>(`/contacts/${id}`);

      return data.id;
    } catch (error) {
      console.log('Thunk:', error);
      return thunkApi.rejectWithValue(handleAsyncError(error));
    }
  }
);

export const updateContact = createAsyncThunk<
  ContactResponse,
  UpdateContactPayload,
  ThunkConfig
>('contacts/updateContact', async ({ id, name, number }, thunkApi) => {
  try {
    const { data } = await goitApi.patch<ContactResponse>(`/contacts/${id}`, {
      name,
      number,
    });

    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(handleAsyncError(error));
  }
});
