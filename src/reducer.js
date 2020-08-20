export const initialState = {
    basket: [],
};

function reducer(state, action) {
    switch(action.type) {
        case 'ADD TO BASKET':
            //LOGIC FOR ADDING ITEM TO BASKET
            return { state };
            break;
        case 'REMOVE_FROM_BASKET':
            //LOGIC TO REMOVE FROM BASKET
            return { state };
            break;
        default:
            return state;
    }
}

export default reducer;