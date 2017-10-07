module.exports = {

    /* Checks if an authToken is still valid. */
    /* Callback with validity: [ true, false ] */
    verifyAuthToken: (authToken, cb) => {
        // @TODO - Mock API returns that token is always valid.
        setTimeout(() => cb(true), 2000);
    },

    /* Submits username and password to backend. */
    /* Callback with authToken: [ null, authToken ] */
    postLogin: (username, password, cb) => {
        setTimeout(() => {
            cb(null, 'dummyAuthToken');
        }, 3000);
    }

}