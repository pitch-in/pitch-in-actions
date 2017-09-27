import { Status } from 'app/goal/goal.model';

export interface Action {
  id: string;
  name: string;
  notes: string;
  startDaysBefore: number;
  finishDaysBefore: number;
  status: Status;
}
