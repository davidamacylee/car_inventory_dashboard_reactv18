import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: "root",
    initialState: {
        make: "Make",
        model: "Model",
        year: "Year",
        mileage: "Mileage",
    },
    reducers: {
        chooseMake: (state, action) => { state.make = action.payload },
        chooseModel: (state, action) => { state.model = action.payload },
        chooseYear: (state, action) => { state.year = action.payload },
        chooseMileage: (state, action) => { state.mileage = action.payload }
    }
    })

    export const reducer = rootSlice.reducer;
    export const { chooseMake, chooseModel, chooseYear, chooseMileage } = rootSlice.actions