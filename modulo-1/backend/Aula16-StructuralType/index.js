"use strict";
const verifyUser = (user, sentValue) => {
    return (user.username === sentValue.username &&
        user.password === sentValue.password);
};
const bdUser = { username: 'Lucas', password: '123456' };
const sentUser = {
    username: 'Lucas',
    password: '123456',
    permissions: '?',
};
const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
