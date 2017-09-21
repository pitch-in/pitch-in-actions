import { Status } from 'app/goal/goal.model';

export interface Action {
  name: string;
  notes: string;
  startDaysBefore: number;
  finishDaysBefore: number;
  status: Status;
}
