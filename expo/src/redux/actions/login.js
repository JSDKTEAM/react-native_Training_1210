
export const setAction = (actionName = '', payload = []) => {
    console.log(actionName);
    return {
        type: actionName,
        payload: payload
    };
};


export const setLogin = (data) => {
    return (dispatch) => {
        dispatch(setAction("LOG_IN_IS_LOADING"));
        getUserProfile(data)
            .then(result => {
                console.log(result);
                dispatch(setAction("LOG_IN_SUCCESS", result));
            })
            .catch(error => {
                dispatch(setAction("LOG_IN_FAIL"))
            })
    }
}


export const getUserProfile = (data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(getUserProfileApi(data))
        }, 0)
    });
};

function getUserProfileApi(data) {
    console.log(data);
    if (data.username == "auchaphon" && data.password == "P@ssw0rd") {
        return { data: { username: "auchaphon", email: 'auchaphon@gmail.com', telephone: "0982856576" } }
    } else {
        Promise.reject;
    }
}

