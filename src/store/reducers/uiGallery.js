import { UI_START_LOADING_GALLERY, UI_STOP_LOADING_GALLERY, UI_NETWORK_ERROR_GALLERY } from '../actions/actionTypes';

const initialState = {
    isLoadingGallery: false,
    isNetworkError: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UI_START_LOADING_GALLERY:
            return {
                ...state,
                isLoadingGallery: true,
                isNetworkError: false
            }
        case UI_STOP_LOADING_GALLERY:
            return {
                ...state,
                isLoadingGallery: false
            }
        case UI_NETWORK_ERROR_GALLERY:
            return {
                ...state,
                isNetworkError: true
            }
        default:
            return state;
    }
}

export default reducer;
