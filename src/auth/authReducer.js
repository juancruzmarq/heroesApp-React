import { types } from "../types/types";

// const state = {
//     name: '',
//     email: '',
//     password: '',
//     loggedIn: false,
//     uid: ''
// }

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            };
        case types.logout:
            return {};
        default:
            return state;
    }
}
