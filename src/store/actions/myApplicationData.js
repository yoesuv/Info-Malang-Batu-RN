import { SET_LIST_PLACE, SET_GALLERY } from './actionTypes';
import { BASE_URL } from '../../data/Constants';

export const getListPlace = () => {
    return dispatch => {
        fetch(BASE_URL+"List_place_malang_batu.json")
        .then((response) => response.json())
        .then((responseJson) => dispatch(setListPlace(responseJson)))
        .catch((err) => {
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
        fetch(BASE_URL+"Gallery_Malang_Batu.json")
        .then((response) => response.json())
        .then((responseJson) => dispatch(setGallery(responseJson)))
        .catch((err) => {
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
