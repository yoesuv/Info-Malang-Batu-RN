import { BASE_URL } from '../../data/Constants';

export const getData = () => {
    return dispatch => {
        fetch(BASE_URL+"List_place_malang_batu.json")
        .then((response) => response.json())
        .then((responseJson) => console.log(responseJson))
        .catch((err) => {
            console.log(err);
        });
    };
};
