const initialState = false

export const themeReducer = (state=initialState, action) => {
    if(action.type === 'toggleTheme' ){
        return action.payload 
    }
    return state
}

