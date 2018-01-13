import { handleActions } from 'redux-actions';
import { Map } from 'immutable';
import isEmpty from 'lodash/isEmpty';

export const SET_CURRENT_USER = 'Auth/SET_CURRENT_USER';

const initialState = Map({
	isAthenticated : false,
	user : Map({

	})
})

export function setCurrentUser(user){
	return {
		type : SET_CURRENT_USER,
		user
	}
}

export default handleActions({
	
	[SET_CURRENT_USER]: (state, action) =>{
		console.log("[SET_CURRENT_USER] in reducer");
		console.log(state);
		console.log(action);
		return state.set('isAthenticated',!isEmpty(action.user))
		  			.set('user',action.user)
	}

},initialState)

