

export const todoReducer = ( initialState = [], action) => {
    switch ( action.key ) {
        case '[TODO] add todo' :
            throw '[TODO] add todo - not implement yet'
            break;
        case '[TODO] delete todo' :
            throw '[TODO] delete todo - not implement yet'
        case '[TODO] delete all todos' :
            throw '[TODO] delete all todos - not implement yet'
        case '[TODO] patch todo' :
            throw '[TODO] patch todo - not implement yet'
        default:
            return initialState;
    }
}