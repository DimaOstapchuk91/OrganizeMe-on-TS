import { RootState } from '../../redux/store';

export interface RejectValue {
  message: string;
}

export interface ThunkConfig {
  state: RootState;
  rejectValue: RejectValue;
}
