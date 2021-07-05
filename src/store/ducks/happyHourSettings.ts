import { Action } from 'redux';

// Action Types
export const SET_BEER_PRICE = 'happyHourSettings/SET_BEER_PRICE';
export const TOGGLE_HAS_COVERT = 'happyHourSettings/TOGGLE_HAS_COVERT';
export const SET_COVERT_PRICE = 'happyHourSettings/SET_COVERT';
export const TOGGLE_HAS_SERVICE_FEE = 'happyHourSettings/TOGGLE_HAS_SERVICE_FEE';
export const SET_SERVICE_FEE = 'happyHourSettings/SET_SERVICE_FEE';

interface SetBeerPriceAction extends Action {
  type: typeof SET_BEER_PRICE,
  payload: {
    price: number,
  },
}

interface ToggleHasCovertAction extends Action {
  type: typeof TOGGLE_HAS_COVERT,
}

interface SetCovertPriceAction extends Action {
  type: typeof SET_COVERT_PRICE,
  payload: {
    price: number,
  },
}

interface ToggleHasServiceFeeAction extends Action {
  type: typeof TOGGLE_HAS_SERVICE_FEE,
}

interface SetServiceFeeAction extends Action {
  type: typeof SET_SERVICE_FEE,
  payload: {
    fee: number,
  },
}

export type HappyHourSettingsActions = SetBeerPriceAction | ToggleHasCovertAction |
SetCovertPriceAction | ToggleHasServiceFeeAction | SetServiceFeeAction;

// Reducer
export interface IHappyHourSettingsState {
  beerPrice?: number;

  hasCovert: boolean;

  covertPrice?: number;

  hasServiceFee: boolean,

  serviceFee?: number;
}

const initialState: IHappyHourSettingsState = {
  beerPrice: undefined,
  hasCovert: false,
  covertPrice: undefined,
  hasServiceFee: false,
  serviceFee: undefined,
};

export default function reducer(
  state: IHappyHourSettingsState = initialState,
  action: HappyHourSettingsActions,
) {
  switch (action.type) {
    case SET_BEER_PRICE:
      return {
        ...state,
        beerPrice: action.payload.price,
      };
    case TOGGLE_HAS_COVERT:
      return {
        ...state,
        hasCovert: !state.hasCovert,
      };
    case SET_COVERT_PRICE:
      return {
        ...state,
        covertPrice: action.payload.price,
      };
    case TOGGLE_HAS_SERVICE_FEE:
      return {
        ...state,
        hasServiceFee: !state.hasServiceFee,
      };
    case SET_SERVICE_FEE:
      return {
        ...state,
        serviceFee: action.payload.fee,
      };
    default:
      return state;
  }
}

// Action Creators
export function setBeerPrice(price: number): SetBeerPriceAction {
  return {
    type: SET_BEER_PRICE,
    payload: {
      price,
    },
  };
}

export function toggleHasCovert(): ToggleHasCovertAction {
  return {
    type: TOGGLE_HAS_COVERT,
  };
}

export function setCovertPrice(price: number): SetCovertPriceAction {
  return {
    type: SET_COVERT_PRICE,
    payload: {
      price,
    },
  };
}

export function toggleHasServiceFee(): ToggleHasServiceFeeAction {
  return {
    type: TOGGLE_HAS_SERVICE_FEE,
  };
}

export function setServiceFee(fee: number): SetServiceFeeAction {
  return {
    type: SET_SERVICE_FEE,
    payload: {
      fee,
    },
  };
}
