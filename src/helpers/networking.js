module.exports = {

    /* Checks if an authToken is still valid. */
    verifyAuthToken: (authToken, cb) => {
        // @TODO - Mock API returns that token is always valid.
        setTimeout(() => cb(true), 2000);
    }

}