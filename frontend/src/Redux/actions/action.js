import ActionsUser from "../types/actionTypes";

const setttingUsers = (data) => {
    return {
        type: ActionsUser.SET_USERS,
        payload: data
    }
}
export default setttingUsers;