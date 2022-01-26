import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cars: ["RoadRunner", "StarZap", "Black Hawk", "Vibranium"]
}

const carSlice = createSlice({
    name : "car",
    initialState,
    reducers: {}
})



export const selectCars = state => state.car.cars
export default carSlice.reducer
