import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/'
});

export const CharactersAPI = {
    getCharacters(currentPage, pageSize) {
        return instance.get(`character?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    getCharactersWithFilter(filter) {
        return instance.get(`character${filter}`)
            .then(response => response.data)
    }
};

export const EpisodesAPI = {
    getEpisodes(currentPage, pageSize) {
        return instance.get(`episode?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
};

export const LocationsAPI = {
    getLocations(currentPage, pageSize) {
        return instance.get(`location?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
};
