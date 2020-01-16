const request = require('request');
const baseUrl = "https://www.randomtext.me/api";

exports.getRandomText = () => {
    return new Promise((resolve, reject) => {
        request(baseUrl + "/lorem", (error, response, result) => {
            try {
                console.log(result);
                result = JSON.parse(result);
                resolve(result.text_out);
            } catch (e) {
                console.log(e);
                reject(false);
            }
        })
    })
}