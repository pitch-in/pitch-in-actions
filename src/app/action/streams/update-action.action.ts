import { SubjectWrapper } from './../../shared/stream.helpers';

import { Action } from '../action.model';

export class UpdateActionAction extends SubjectWrapper<[string, Action]> {}
