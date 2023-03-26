import { GetData, UPDATETIME, SEATS, UPDATESEAT } from "../Constant/constant";

const initailState = [];


const Reducer = (state = initailState, action) => {
    switch (action.type) {
        case GetData:
            return [action.data];
        case UPDATETIME:
            const update = state.map((item) => {
                if (item.userSelectedTime !== action.time) {
                    return {
                        ...item,
                        userSelectedTime: action.time,

                    }
                }
            })

            return update;

        case UPDATESEAT:
            console.log("hello22")
            const update2 = state.map((item) => {
                if (item) {
                    return {
                        ...item,
                        seatNumber: action.seatArray
                    }
                }
            })
            console.log(update2)
            return update2

        case SEATS:
            const newData = state.map((item) => {
                if (item) {
                    return {
                        ...item,
                        seats: action.data
                    }
                }
                return item
            })
            return newData
        default:
            return state
    }

}

export default Reducer