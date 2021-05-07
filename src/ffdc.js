"use strict";
const axios = require('axios');

class FFDC {
    constructor(token) {
        this.token = token;
    }
    async callAPI(url, data) {
        console.log("Sending FFDC Request");
        const headers = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+this.token
            }
        }
        try {
            const res = await axios.post(url, data, headers);
            if(res.status == '200'){
                return(res.data);
            }else {
                throw(res);
            }
        } catch (err) {
            console.error(err);
            throw(err);
        }; 
    }
}

module.exports = FFDC;