export interface ContactData {
  id: string;
  name: string;
  number: string;
}

export type ContactFormValues = Omit<ContactData, 'id'>;
