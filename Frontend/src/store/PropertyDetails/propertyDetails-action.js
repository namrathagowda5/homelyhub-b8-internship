import{propertyDetailsAction} from "./propertyDetails-slice.js"
import {axiosInstance} from "../../utils/axios.js"

// fetch details of one specific property using the property id

// recy property id
// start loading
// call backend api
// wait for response
// get the property data
// store details in redux
// if error occurs store error in redux

export const getPropertyDetails = (Id) => async (dispatch) => {
    try {
        console.log("PROPERTY ID:", Id);
        dispatch(propertyDetailsAction.getListingRequest());
        const response = await axiosInstance.get(`/v1/rent/listing/${Id}`)
        console.log(response );
        if(!response){
            throw new Error("No response from server")

        }
        const{data} = response.data;
        dispatch(propertyDetailsAction.getPropertyDetails(data))
    } catch (error) {
        dispatch(propertyDetailsAction.getError(error.response.data.message))
    }
}
