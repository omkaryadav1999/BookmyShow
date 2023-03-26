import { SINGLEVALUE } from "../Constant/constant";

const initaialvalue = [];

function SingleReducer(state = initaialvalue, action) {
    switch (action.type) {
        case SINGLEVALUE:
            return [action.data];
        default:
            return state
    }
}

export default SingleReducer