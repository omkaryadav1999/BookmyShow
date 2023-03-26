import { FINALDATA } from "../Constant/constant"

const initialState = [];


function FinaleReducer(state = initialState, action) {
    switch (action.type) {
        case FINALDATA:
            let foodname = action.food.map((item) => {
                return item.name
            })
            let finalFood = foodname.toString()

            let finalData = action.ticket.map((item) => {
                if (item) {
                    return {
                        ...item,
                        food: finalFood,
                        foodPrice: action.foodPrice,
                        total: action.total
                    }
                }
            })

            return [finalData];
        default:
            return state

    }
}

export default FinaleReducer