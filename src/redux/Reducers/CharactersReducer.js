import { CharactersAPI } from "../../api/Api";
import { characterConst } from "../Constants/Constant";

let initialState = {
    characters: [],
    pageSize: 20,
    totalCharactersCount: 0,
    currentPage: 1,
    isFetching: false
};

const characterReducer = (state = initialState, action) => {
    switch (action.type) {
        case characterConst.SET_CHARACTERS: {
            return { ...state, characters: action.characters }
        };
        case characterConst.SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        };
        case characterConst.SET_TOTAL_CHARCTERS_COUNT: {
            return { ...state, totalCharactersCount: action.totalCharactersCount }
        };
        case characterConst.TOOGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        };
        default:
            return state;
    }
}

export const setCharacters = (characters) => ({ type: characterConst.SET_CHARACTERS, characters });
export const setCurrentPage = (currentPage) => ({ type: characterConst.SET_CURRENT_PAGE, currentPage });
export const setTotalCharactersCount = (totalCharactersCount) => ({ type: characterConst.SET_TOTAL_CHARCTERS_COUNT, totalCharactersCount });
export const toggleIsFetching = (isFetching) => ({ type: characterConst.TOOGLE_IS_FETCHING, isFetching });

function isInteger(num) {
    return (num ^ 0) === num;
};

export const getCharactersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        CharactersAPI.getCharacters(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setCharacters(data.results));
                dispatch(setTotalCharactersCount(data.info.count));

            })
    }
}

export const getCharactersThunkCreatorWithFilter = (filter) => {
    return async (dispatch) => {
        CharactersAPI.getCharactersWithFilter(filter)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setCharacters(data.results));
                dispatch(setTotalCharactersCount(data.info.count));
            })
    }
}

export const fetchCharactersFromPageWithFilter = (filter, page) => {
    return async (dispatch) => {
        const partOfCharacters = page;
        if (isInteger(partOfCharacters)) {
            fetch(`https://rickandmortyapi.com/api/character${filter}&page=${Math.ceil(partOfCharacters)}`)
                .then(response => response.json())
                .then(data => {
                    dispatch(toggleIsFetching(false));
                    dispatch(setCharacters(data.results));
                    dispatch(setTotalCharactersCount(data.info.count));
                })
        } else {
            fetch(`https://rickandmortyapi.com/api/character${filter}&page=${Math.ceil(partOfCharacters)}`)
                .then(response => response.json())
                .then(data => {
                    dispatch(toggleIsFetching(false));
                    dispatch(setCharacters(data.results));
                    dispatch(setTotalCharactersCount(data.info.count));
                })
        }
    }
}

export const fetchCharactersFromPage = (page) => {
    return async (dispatch) => {
        const partOfCharacters = page;
        if (isInteger(partOfCharacters)) {
            fetch(`https://rickandmortyapi.com/api/character/?page=${Math.ceil(partOfCharacters)}`)
                .then(response => response.json())
                .then(data => {
                    dispatch(toggleIsFetching(false));
                    dispatch(setCharacters(data.results));
                    dispatch(setTotalCharactersCount(data.info.count));

                })
        } else {
            fetch(`https://rickandmortyapi.com/api/character/?page=${Math.ceil(partOfCharacters)}`)
                .then(response => response.json())
                .then(data => {
                    dispatch(toggleIsFetching(false));
                    dispatch(setCharacters(data.results));
                    dispatch(setTotalCharactersCount(data.info.count));
                })
        }
    }
}

export default characterReducer;