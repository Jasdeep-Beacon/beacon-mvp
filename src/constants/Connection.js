/*
 * @file: Connection.js
 * @description: Connection file for the application
 * @date: 17 June 2018
 * @author: Monika Rani
 * */

'use strict';

let runningUrl  = "localhost:4101",
    zomatoApp  = `${window.location.protocol}//developers.zomato.com`,
    httpUrl     = `${window.location.protocol}//${runningUrl}`;

class Connection {

    static getResturl() {
        return `${httpUrl}/`
    };

    static getBaseUrl() {
        return httpUrl;
    };
}

module.exports = Connection; 
