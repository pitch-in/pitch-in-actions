import * as moment from 'moment';

import { Status, Goal } from 'app/goal/goal.model';
import { parseDate } from 'app/shared/date.helpers';

export interface Action {
  id: string;
  name: string;
  notes: string;
  startDaysBefore: number;
  finishDaysBefore: number;
  status: Status;
}

export type ActionParent = Goal;

export const dymamicDate = (
  parent: { deadline: string },
  daysBefore: number
): moment.Moment => {
  if (!parent) return;

  const momentDeadline = parseDate(parent.deadline);

  return momentDeadline.subtract(daysBefore, 'days');
};
