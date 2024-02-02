const studentAuthService = require('../services/studentAuthService');
const { studentResponse } = require('../utils/studentResponseUtil');
const passport = require('passport');
require('../utils/auth');

function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
}

//------------------- Auth Homepage -------------------//

const homePage = async (req, res) => {
    res.send('<a href="/Student/Auth/Login">Authenticate with Google</a>');
}

//------------------- login -------------------//

const login = async (req, res) => {
    passport.authenticate('facebook', { scope: ['email'] })(req, res);
}

//------------------- login callback -------------------//
const callback = async (req, res, next) => {
    passport.authenticate('google', {
        successRedirect: '/Student/Auth/list',
        failureRedirect: '/Student/Auth'
    })(req, res, next);
}

//------------------- log out  -------------------//
const logout = async (req, res) => {
    let user = req.user;
    
    console.log(JSON.stringify({
        displayName: user.displayName,
        email: user.emails[0].value
    }));


    req.logout((err) => {
        if (err) {
            console.error('Error logging out:', err);
            return res.status(500).send('Internal Server Error');
        }
        req.session.destroy((err) => {
            if (err) {
                console.error('Error destroying session:', err);
                return res.status(500).send('Internal Server Error');
            }
            res.send(`${JSON.stringify({
                displayName: user.displayName,
                email: user.emails[0].value
            })} Goodbye !`);
        });
    });
}

//------------------- Get all students with Auth-------------------//

const getAllStudents = async (req, res) => {
    try {
        studentResponse.sendAllStudents(res, await studentAuthService.getAllStudents());
    } catch (error) {
        studentResponse.sendServerError(res);
    }
}

module.exports = { getAllStudents, login, homePage, callback, isLoggedIn, logout };
