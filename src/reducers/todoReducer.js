

export const todoReducer = ( initialState = [], action) => {
    switch ( action.type ) {
        case '[TODO] add todo' :
            return [ action.payload, ...initialState ];
        case '[TODO] delete todo' :
            return initialState.filter( todo => todo.description !== action.payload.description );
        case '[TODO] delete all todos' :
            return []
        case '[TODO] patch todo' :
            return initialState.map( todo => todo.id === action.payload.id ? ({...todo, done : !action.payload.done }) : (todo));
        default:
            return initialState;
    }
}