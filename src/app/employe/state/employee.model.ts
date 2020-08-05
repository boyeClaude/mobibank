import { ID } from '@datorama/akita';

export interface IEmployee {
  id: ID;
  nom: string;
  prenoms: string;
  email: string;
  salaire: number;
  lieuDeResidence: string;
  contact: number[];
}
