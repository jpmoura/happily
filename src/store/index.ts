import { compose, createStore } from 'redux';
import IRootState from '../domain/model/IRootState';
import reducer from './reducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

function saveToLocalStorage(state: IRootState): void {
  const serializedState = JSON.stringify(state);
  localStorage.setItem('happily', serializedState);
}

function loadFromLocalStorage(): IRootState | object {
  const serializedState = localStorage.getItem('happily');

  if (serializedState === null) {
    return {};
  }

  return JSON.parse(serializedState);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadFromLocalStorage();
const store = createStore(reducer, persistedState, composeEnhancers());
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
