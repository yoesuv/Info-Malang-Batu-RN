import { UI_START_LOADING_GALLERY, UI_STOP_LOADING_GALLERY } from './actionTypes';

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
