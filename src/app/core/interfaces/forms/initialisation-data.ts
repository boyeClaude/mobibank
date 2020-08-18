import { FormGroup } from '@angular/forms';

export interface IInitialisationData<T> {
  initialisationData(data?: T): FormGroup;
}
