export interface InsertContact {
  name: string;
  phone: string;
  type: string;
  budget: string;
  message: string;
}

export interface ContactFormData extends InsertContact {
  agreedToPrivacy: boolean;
}
