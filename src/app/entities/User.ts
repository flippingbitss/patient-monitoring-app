import { Visit } from "@app/entities/Visit";

export class User {
  firstName: string;
  lastName: string;
  email: string;
  dob: Date;
  created: Date;
  visits: Visit[];
}

export interface ILocalUser {
  email: string;
  token: string;
  id: string;
}
