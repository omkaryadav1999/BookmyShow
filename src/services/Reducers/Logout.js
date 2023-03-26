import { LOGOUT } from "../Constant/constant"

const initialState = [];

function Logout(state = initialState, action) {
    switch (action.type) {
        case LOGOUT:
            return [action.data]
        default:
            return state
    }
}

export default Logout