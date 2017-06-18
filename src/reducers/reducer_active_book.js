// state here represent only for this reducer not to be confused
// by application state
export default function (state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state;
}