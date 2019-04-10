import { SET_LIST_PLACE } from './actionTypes';
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
