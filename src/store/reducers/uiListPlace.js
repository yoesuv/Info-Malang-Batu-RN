import { UI_START_LOADING_LIST, UI_STOP_LOADING_LIST } from '../actions/actionTypes';

const initialState = {
    isLoading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UI_START_LOADING_LIST:
            return {
                ...state,
                isLoading: true
            }
        case UI_STOP_LOADING_LIST:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
}

export default reducer;
