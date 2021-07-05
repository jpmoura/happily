import { Action } from 'redux';
import ConsumptionModificationType from '../../domain/enum/ConsumptionModificationType';
import IPerson from '../../domain/model/IPerson';

// Action Types
export const ADD_PERSON = 'person/ADD';
export const REMOVE_PERSON = 'person/REMOVE';
export const INCREMENT_CONSUMPTION = 'person/INCREMENT_CONSUMPTION';
export const DECREMENT_CONSUMPTION = 'person/DECREMENT_CONSUMPTION';
export const TOGGLE_SHOW_ADD_PERSON_DIALOG = 'person/TOGGLE_SHOW_ADD_PERSON_DIALOG';

interface AddPersonAction extends Action {
  type: typeof ADD_PERSON,
  payload: {
    person: IPerson,
  },
}

interface RemovePersonAction extends Action {
  type: typeof REMOVE_PERSON,
  payload: {
    person: IPerson,
  },
}

interface IncrementPersonConsumptionAction extends Action {
  type: typeof INCREMENT_CONSUMPTION,
  payload: {
    person: IPerson,
  }
}

interface DecrementPersonConsumptionAction extends Action {
  type: typeof DECREMENT_CONSUMPTION,
  payload: {
    person: IPerson,
  }
}

interface ToggleShowAddPersonDialogAction extends Action {
  type: typeof TOGGLE_SHOW_ADD_PERSON_DIALOG,
}

export type PeopleActions = AddPersonAction | RemovePersonAction |
IncrementPersonConsumptionAction | DecrementPersonConsumptionAction |
ToggleShowAddPersonDialogAction;

// Reducer
export interface IPeopleState {
  people: Array<IPerson>;

  showAddPersonDialog: boolean;
}

const initialState: IPeopleState = {
  people: [],
  showAddPersonDialog: false,
};

function findPerson(name: string, people: Array<IPerson>): IPerson | undefined {
  return people.find((person) => person.name === name);
}

function modifyConsumption(
  personName: string, modificationType: ConsumptionModificationType, state: IPeopleState,
): IPeopleState {
  const person = findPerson(personName, state.people);

  if (!person) {
    return state;
  }

  if (modificationType === ConsumptionModificationType.Decrement && person.consumption > 0) {
    person.consumption -= 1;
  }

  if (modificationType === ConsumptionModificationType.Increment) {
    person.consumption += 1;
  }

  return {
    ...state,
    people: state.people.map(
      (currentPerson) => (currentPerson.name === personName ? person : currentPerson),
    ),
  };
}

export default function reducer(state = initialState, action: PeopleActions): IPeopleState {
  switch (action.type) {
    case ADD_PERSON: {
      const person = findPerson(action.payload.person.name, state.people);

      if (person) {
        return state;
      }

      return {
        ...state,
        people: [...state.people, action.payload.person],
      };
    }
    case REMOVE_PERSON:
      return {
        ...state,
        people: state.people.filter((person) => person.name !== action.payload.person.name),
      };
    case INCREMENT_CONSUMPTION:
      return modifyConsumption(
        action.payload.person.name, ConsumptionModificationType.Increment, state,
      );
    case DECREMENT_CONSUMPTION:
      return modifyConsumption(
        action.payload.person.name, ConsumptionModificationType.Decrement, state,
      );
    case TOGGLE_SHOW_ADD_PERSON_DIALOG:
      return {
        ...state,
        showAddPersonDialog: !state.showAddPersonDialog,
      };
    default:
      return state;
  }
}

// Action Creators
export function addPerson(person: IPerson): AddPersonAction {
  return {
    type: ADD_PERSON,
    payload: {
      person,
    },
  };
}

export function removePerson(person: IPerson): RemovePersonAction {
  return {
    type: REMOVE_PERSON,
    payload: {
      person,
    },
  };
}

export function incrementConsumption(person: IPerson): IncrementPersonConsumptionAction {
  return {
    type: INCREMENT_CONSUMPTION,
    payload: {
      person,
    },
  };
}

export function decrementConsumption(person: IPerson): DecrementPersonConsumptionAction {
  return {
    type: DECREMENT_CONSUMPTION,
    payload: {
      person,
    },
  };
}

export function toggleShowAddPersonDialog(): ToggleShowAddPersonDialogAction {
  return {
    type: TOGGLE_SHOW_ADD_PERSON_DIALOG,
  };
}
