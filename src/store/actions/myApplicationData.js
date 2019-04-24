import { SET_LIST_PLACE, SET_GALLERY, SET_MAP_PINS } from './actionTypes';
import { BASE_URL } from '../../data/Constants';

import { uiStartLoadingList, uiStopLoadingList, uiNetworkErrorList,
    uiStartLoadingGallery, uiStopLoadingGallery } from './index';

export const getListPlace = () => {
    return dispatch => {
        dispatch(uiStartLoadingList());
        fetch(BASE_URL+"List_place_malang_batu.json")
        .then((response) => response.json())
        .then((responseJson) => {
            dispatch(uiStopLoadingList());
            dispatch(setListPlace(responseJson))
        })
        .catch((err) => {
            dispatch(uiStopLoadingList());
            dispatch(uiNetworkErrorList());
            console.log(err);
        });
    };
};

export const setListPlace = places => {
        return {
            type: SET_LIST_PLACE,
            places: places
        }
};

export const getGallery = () => {
    return dispatch => {
        dispatch(uiStartLoadingGallery());
        fetch(BASE_URL+"Gallery_Malang_Batu.json")
        .then((response) => response.json())
        .then((responseJson) => {
            dispatch(uiStopLoadingGallery());
            dispatch(setGallery(responseJson))

        })
        .catch((err) => {
            dispatch(uiStopLoadingGallery());
            console.log(err);
        });
    };
}

export const setGallery = galleries => {
    return {
        type: SET_GALLERY,
        galleries: galleries
    }
}

export const getPins = () => {
    return dispatch => {
        fetch(BASE_URL+"Maps_Malang_Batu.json")
        .then((response) => response.json())
        .then((responseJson) => dispatch(setPins(responseJson)))
        .catch((err) => {
            console.log(err);
        });
    };
}

export const setPins = pins => {
    return {
        type: SET_MAP_PINS,
        pins: pins
    }
}
