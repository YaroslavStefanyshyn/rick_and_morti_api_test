import { applyMiddleware, combineReducers, createStore } from "redux";
import characterReducer from "../Reducers/CharactersReducer";
import thunkMiddleware from "redux-thunk";
import episodesReducer from "../Reducers/EpisodesReducer";
import locationReducer from "../Reducers/LocationReducer";

let reducers = combineReducers({
    charactersPage: characterReducer,
    episodesPage: episodesReducer,
    locationsPage: locationReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;