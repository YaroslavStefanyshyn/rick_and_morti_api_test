import { LocationsAPI } from "../../api/Api";
import { locationsConstants } from "../Constants/Constant";

let initialState = {
    locations: [],
    pageSize: 20,
    totalLocationsCount: 0,
    currentPage: 1
};

const locationReducer = (state = initialState, action) => {
    switch (action.type) {
        case locationsConstants.SET_LOCATIONS: {
            return { ...state, locations: action.locations }
        };
        case locationsConstants.SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        };
        case locationsConstants.SET_TOTAL_LOCATIONS_COUNT: {
            return { ...state, totalLocationsCount: action.totalLocationsCount }
        };
        default:
            return state;
    }
}

export const setLocations = (locations) => ({ type: locationsConstants.SET_LOCATIONS, locations });
export const setCurrentPage = (currentPage) => ({ type: locationsConstants.SET_CURRENT_PAGE, currentPage });
export const setTotalLocationsCount = (totalLocationsCount) => ({ type: locationsConstants.SET_TOTAL_LOCATIONS_COUNT, totalLocationsCount });

export const getLocations = (currentPage, pageSize) => {
    return (dispatch) => {
        LocationsAPI.getLocations(currentPage, pageSize)
            .then(data => {
                dispatch(setLocations(data.results));
                dispatch(setTotalLocationsCount(data.info.count));
            })
    }
}

export default locationReducer;