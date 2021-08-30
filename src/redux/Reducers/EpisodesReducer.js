import { EpisodesAPI } from "../../api/Api";
import { EpisodesConstants } from "../Constants/Constant";

let initialState = {
    episodes: [],
    pageSize: 20,
    totalEpisodesCount: 0,
    currentPage: 1
};

const episodesReducer = (state = initialState, action) => {
    switch (action.type) {
        case EpisodesConstants.SET_EPISODES: {
            return { ...state, episodes: action.episodes }
        };
        case EpisodesConstants.SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        };
        case EpisodesConstants.SET_TOTAL_EPISODES_COUNT: {
            return { ...state, totalEpisodesCount: action.totalEpisodesCount }
        };
        default:
            return state;
    }
}

export const setEpisodes = (episodes) => ({ type: EpisodesConstants.SET_EPISODES, episodes });
export const setCurrentPage = (currentPage) => ({ type: EpisodesConstants.SET_CURRENT_PAGE, currentPage });
export const setTotalEpisodesCount = (totalEpisodesCount) => ({ type: EpisodesConstants.SET_TOTAL_EPISODES_COUNT, totalEpisodesCount });

export const getEpisodes = (currentPage, pageSize) => {
    return (dispatch) => {
        EpisodesAPI.getEpisodes(currentPage, pageSize)
            .then(data => {
                dispatch(setEpisodes(data.results));
                dispatch(setTotalEpisodesCount(data.info.count));
            })
    }
}

export default episodesReducer;