import ActionsUser from "../types/actionTypes";

const initialState = {
    listOfUsers: [],
};

const Reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionsUser.SET_USERS:
            return { ...state, listOfUsers: payload };
        default:
            return state;
    }
};
export default Reducer;