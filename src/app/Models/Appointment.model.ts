import {User} from './User.model';

export interface Appointement {
  id: number;
  date: Date;
  status: string;
  rated: boolean;
  description: string;
  doctor: User;
  patient: User;
}
