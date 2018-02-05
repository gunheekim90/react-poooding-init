import { handleActions, createAction } from 'redux-actions';
import { Map, List } from 'immutable';
import isEmpty from 'lodash/isEmpty';

export const SET_CURRENT_DATA = 'Data/SET_CURRENT_DATA';
export const PUSH_CURRENT_DATA ='Data/PUSH_CURRENT_DATA';

export const setCurrentData = createAction(SET_CURRENT_DATA);
export const pushCurrentData = createAction(PUSH_CURRENT_DATA);

const initialState = Map({
	data : List([])
})

export default handleActions({
	
	[SET_CURRENT_DATA]:(state, action) =>{
		console.log("[SET_CURRENT_DATA] in reducer");
		return state.set('data',action.payload);
		
	}

},initialState)

