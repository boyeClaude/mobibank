import { ID } from '@datorama/akita';

export interface IEmployee {
  id: number;
  nom: string;
  prenoms: string;
  email: string;
  salaire: number;
  lieuDeResidence: string;
  contacts?: number[];
}
