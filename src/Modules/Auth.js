import { handleActions, createAction } from 'redux-actions';
import { Map } from 'immutable';
import isEmpty from 'lodash/isEmpty';

export const SET_CURRENT_USER = 'Auth/SET_CURRENT_USER';

export const setCurrentUser = createAction(SET_CURRENT_USER);
// export function setCurrentUser(user){
// 	return {
// 		type : SET_CURRENT_USER,
// 		user : user
// 	}
// }

const initialState = Map({
		isAuthenticated : false,
		user : Map({
	})
})


export default handleActions({
	
	[SET_CURRENT_USER]: (state, action) =>{
	

		return state.set('isAuthenticated',!isEmpty(action.payload))
		  			.set('user',action.payload)
	}

},initialState)

