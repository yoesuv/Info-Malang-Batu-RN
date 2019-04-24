import { UI_START_LOADING_GALLERY, UI_STOP_LOADING_GALLERY, UI_NETWORK_ERROR_GALLERY } from './actionTypes';

export const uiStartLoadingGallery = () => {
    return {
        type: UI_START_LOADING_GALLERY
    };
};

export const uiStopLoadingGallery = () => {
    return {
        type: UI_STOP_LOADING_GALLERY
    };
};

export const uiNetworkErrorGallery = () => {
    return {
        type: UI_NETWORK_ERROR_GALLERY
    };
};
