module.exports = {

    /* Checks if an authToken is still valid. */
    /* Callback with validity: [ true, false ] */
    verifyAuthToken: (authToken, cb) => {
        // @TODO - Mock API returns that token is always valid.
        setTimeout(() => cb(true), 2000);
    },

    /* Submits username and password to backend. */
    /* Callback with authToken: [ null, authToken ] */
    postLogin: (email, password, cb) => {
        setTimeout(() => {
            cb(null, 'dummyAuthToken');
        }, 2000);
    },

    postRegister: (first_name, last_name, email, password, cb) => {
        setTimeout(() => {
            cb(null, 'dummyAuthToken');
        }, 2000);
    }

}