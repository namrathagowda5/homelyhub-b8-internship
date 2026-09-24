// propertyDetails
// create a slice name
// create a initial state
// property data recived
// error occurs
// export actions
// export slice
import { createSlice } from "@reduxjs/toolkit";

const propertyDetailsSlice = createSlice({
    name: "propertyDetails",
    initialState: {
        propertyDetails: null,
        error: null,
        loading: false,
    },
    reducers: {
        getListingRequest: (state) => {
            state.loading = true;
        },
        getPropertyDetails(state, action) {
            state.propertyDetails = action.payload;
            state.loading = false
        },
        getError(state, action) {
            state.error = action.payload;
            state.loading = false
        }
    }
})

export const propertyDetailsAction = propertyDetailsSlice.actions;
export default propertyDetailsSlice;