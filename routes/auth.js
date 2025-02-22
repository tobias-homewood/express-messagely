const jwt = require("jsonwebtoken");
const authRoutes = require("express").Router();
const { SECRET_KEY } = require("../config");
const User = require("../models/user");
const ExpressError = require("../expressError");

/** POST /login - login: {username, password} => {token}
 *
 * Make sure to update their last-login!
 *
 **/
authRoutes.post("/login", async function(req, res, next) {
    try {
        const { username, password } = req.body;
        if (await User.authenticate(username, password)) {
            User.updateLoginTimestamp(username);
            const token = jwt.sign({ username }, SECRET_KEY);
            return res.json({ token });
        } else {
            throw new ExpressError("Invalid username/password", 400);
        }
    } catch (err) {
        return next(err);
    }
});


/** POST /register - register user: registers, logs in, and returns token.
 *
 * {username, password, first_name, last_name, phone} => {token}.
 *
 *  Make sure to update their last-login!
 */
authRoutes.post("/register", async function(req, res, next) {
    try {
        const { username } = await User.register(req.body);
        const token = jwt.sign({ username }, SECRET_KEY);
        return res.json({ token });
    } catch (err) {
        return next(err);
    }
});


module.exports = authRoutes;