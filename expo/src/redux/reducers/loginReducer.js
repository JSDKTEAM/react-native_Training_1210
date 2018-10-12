const initialState = {
    data: [],
    isFetching: false,
    isError: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "LOG_IN":
            return { ...state }
        case "LOG_IN_SUCCESS":
            return { ...state, isFetching: false, data: action.payload };
        case `LOG_IN_FAIL`:
            return { ...state, isFetching: false, isError: true };
        case "LOG_IN_IS_LOADING":
            return { ...state, isFetching: true, data: [] };
        default:
            return state
    }
}

// var dataupdate = state.data;
// dataupdate = dataupdate.concat(action.payload);
// return {
//     ...state,
//     data: dataupdate,
//     isFetching: false,
//     isLoadMore: true,
//     isFirstLoad: false,
//     isLast: action.isLast
// }