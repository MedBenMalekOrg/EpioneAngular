export interface User {
  id: number;
  username: string;
  firstname: string;
  lastname: string;
  birthday: string;
  email: string;
  adresse: {
    street_name: string;
    postal_code: string;
    city: string;
  };
  ville: string;
  sexe: string;
  civil_status: string;
  password: string;
  picture: string;
  phone: string;
  created_at: string;
  active: string;
  token: string;
  lastConnect: string;
  connected: string;
  type: string;
  biography: string;
  patterns: [
    {
      id: string;
      price: string;
      label: string;
      periode: string;
      actif: string;
    }
    ];
  doctolib: string;
  paymentMethod: string;
  officeAdress: string;
  remboursement: string;
  website: string;
  office_Number: string;
}
