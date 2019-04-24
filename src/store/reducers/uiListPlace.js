import { UI_START_LOADING_LIST, UI_STOP_LOADING_LIST, UI_NETWORK_ERROR_LIST } from '../actions/actionTypes';

const initialState = {
    isLoading: false,
    isNetworkError: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UI_START_LOADING_LIST:
            return {
                ...state,
                isNetworkError: false,
                isLoading: true
            }
        case UI_STOP_LOADING_LIST:
            return {
                ...state,
                isLoading: false
            }
        case UI_NETWORK_ERROR_LIST:
            return {
                ...state,
                isNetworkError: true
            }
        default:
            return state;
    }
}

export default reducer;
