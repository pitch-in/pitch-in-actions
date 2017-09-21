import { Action } from 'app/action/action.model';

export type Status = 'not-started' | 'in-progress' | 'ready' | 'done';

export interface Goal {
  name: string;
  notes: string;
  deadline: string;
  status: Status;
  actions: Action[];
}
