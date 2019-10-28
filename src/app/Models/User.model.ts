import {Pattern} from './Pattern.model';
import {Address} from './Adresse.model';

export interface User {
  id: number;
  username: string;
  firstname: string;
  lastname: string;
  birthday: string;
  email: string;
  adresse: Address;
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
  patterns: Pattern[];
  doctolib: string;
  paymentMethod: string;
  officeAdress: string;
  remboursement: string;
  website: string;
  office_Number: string;
  spec:string;
  speciality: {
    speciality: string
  };
}
