import { counterActions, counterInitialState } from './counterActions';
import { userInitialState, userActions } from './userActions';


export const initialState = {
    ...counterInitialState,
    ...userInitialState
};


export const actions = {
    ...counterActions,
    ...userActions
};