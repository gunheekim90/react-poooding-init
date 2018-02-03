import { handleActions, createAction } from 'redux-actions';
import { Map } from 'immutable';
import isEmpty from 'lodash/isEmpty';

export const SET_CURRENT_DATA = 'Data/SET_CURRENT_DATA';

export const setCurrentData = createAction(SET_CURRENT_DATA);
// export function setCurrentUser(user){
// 	return {
// 		type : SET_CURRENT_USER,
// 		user : user
// 	}
// }

const initialState = Map({

		data : Map({
			
		})
})

export default handleActions({
	
	[SET_CURRENT_DATA]: (state, action) =>{
		console.log("[SET_CURRENT_DATA] in reducer");

		return state.set('data',action.payload)
	}

},initialState)

