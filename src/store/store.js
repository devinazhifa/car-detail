// import { configureStore } from "@reduxjs/toolkit";
// import carSlice from "./reducer";

// const store = configureStore({
//     reducer: {
//         car: carSlice.reducer
//     }
// })

// export default store

import { combineReducers, createStore } from 'redux'

import carReducer from './reducer'

const reducers = combineReducers({
    car: carReducer
})

const store = createStore(reducers)

export default store