const initialState = []

export const reducer = (state=initialState, action) => {
    if(action.type === 'updateSearchResult' ){
        return action.payload 
    }
    return state
}

