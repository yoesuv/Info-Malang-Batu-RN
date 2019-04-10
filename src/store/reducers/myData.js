import { SET_LIST_PLACE, SET_GALLERY } from '../actions/actionTypes';

const initialState = {
    places: [],
    galleries: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LIST_PLACE:
            return {
                ...state,
                places: action.places
            }
        case SET_GALLERY:
            return {
                ...state,
                galleries: action.galleries
            }
        default:
            return state;
    }
};

export default reducer;
