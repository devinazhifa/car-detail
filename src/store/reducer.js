// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
// import axios from 'axios'

// export const fetchCar = createAsyncThunk(
//     'car/fetchCar', 
//     async () => {
//         const response = await axios.get('https://625d73e74c36c753577540cb.mockapi.io/fejs2/api/c5-carss')
//         return response.data
//     }
// )

// const carSlice = createSlice({
//     name: 'car',
//     initialState: {
//         cars: []
//     },
//     reducers: {}
// })

// export default carSlice

const reducer = (state = [], action) => {
    switch (action.type) {
        case 'populateCar':
            const newState = [...action.payload.car]
            return newState
        default:
            return state
    }
    return state
}

export default reducer