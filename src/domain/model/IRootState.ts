import { IHappyHourSettingsState } from '../../store/ducks/happyHourSettings';
import { IPeopleState } from '../../store/ducks/people';

export default interface IRootState {
  people: IPeopleState;

  happyHourSettings: IHappyHourSettingsState;
}
