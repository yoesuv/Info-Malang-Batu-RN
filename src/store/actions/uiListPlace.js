import { UI_START_LOADING_LIST, UI_STOP_LOADING_LIST } from './actionTypes';

export const uiStartLoadingList = () => {
        return {
            type: UI_START_LOADING_LIST
        };
};

export const uiStopLoadingList = () => {
        return {
            type: UI_STOP_LOADING_LIST
        };
};
