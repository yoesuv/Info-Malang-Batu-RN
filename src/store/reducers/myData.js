import { SET_LIST_PLACE, SET_GALLERY, SET_MAP_PINS } from '../actions/actionTypes';

const initialState = {
    places: [{nama:'', lokasi:'', gambar:''}],
    galleries: [{caption:'', image:'', thumbnail:''}],
    pins: [{name:'', latitude:0, longitude:0}]
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
        case SET_MAP_PINS:
            return {
                ...state,
                pins: action.pins
            }
        default:
            return state;
    }
};

export default reducer;
