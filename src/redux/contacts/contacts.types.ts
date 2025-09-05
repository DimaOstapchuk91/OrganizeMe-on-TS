import { ContactData } from '../../types/contacts.types';

export type ContactResponse = ContactData;

export type AddContactPayload = Pick<ContactData, 'name' | 'number'>;

export type UpdateContactPayload = Partial<Omit<ContactData, 'id'>> & {
  id: string;
};

// Slice Types
export interface ContactsState {
  contacts: {
    items: ContactData[];
    loading: boolean;
    error: string | null;
  };
}
