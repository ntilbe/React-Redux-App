import { FETCH_JOKE_START } from '../actions/actions'
import { FETCH_JOKE_SUCCESS } from '../actions/actions'
import {ADD_TO_FAVORITES} from '../actions/actions'

const initialState = {
    jokes: [],
    isLoading: false,
    error: '',
    favoriteJokes: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_JOKE_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCH_JOKE_SUCCESS:
            return {
                ...state, 
                isLoading: false,
                jokes: action.payload
            }
        case ADD_TO_FAVORITES:
            return {
                ...state,
                favoriteJokes: [...state.favoriteJokes, action.payload]
            }        
        default:
            return state
    }
}