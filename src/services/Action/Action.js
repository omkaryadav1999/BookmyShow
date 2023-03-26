import { GetData, UPDATETIME, SEATS, FINALDATA, UPDATESEAT, SINGLEVALUE, LOGOUT } from "../Constant/constant";


export const ActiongetData = (obj) => {

    return {
        type: GetData,
        data: obj
    }
}

export const updateTime = (time,) => {
    return {
        type: UPDATETIME,
        time,
    }
}

export const actionSeats = (data) => {
    console.log(data)
    return {
        type: SEATS,
        data
    }
}
export const updateSeat = (seatArray) => {

    return {
        type: UPDATESEAT,
        seatArray
    }
}

export const finalTiketData = (ticket, food, foodPrice, total) => {
    return {
        type: FINALDATA,
        ticket,
        food,
        foodPrice,
        total
    }
}

export const singleData = (data) => {
    console.log(data)
    return {
        type: SINGLEVALUE,
        data
    }
}

export const logout = (data) => {
    console.log("login data", data)
    return {
        type: LOGOUT,
        data
    }

}