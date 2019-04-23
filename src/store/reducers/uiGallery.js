import { UI_START_LOADING_GALLERY, UI_STOP_LOADING_GALLERY } from '../actions/actionTypes';

const initialState = {
    isLoadingGallery: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UI_START_LOADING_GALLERY:
            return {
                ...state,
                isLoadingGallery: true
            }
        case UI_STOP_LOADING_GALLERY:
            return {
                ...state,
                isLoadingGallery: false
            }
        default:
            return state;
    }
}

export default reducer;
