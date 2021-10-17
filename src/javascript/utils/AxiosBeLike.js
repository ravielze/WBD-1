/**
 *
 * @param {string} url
 * @param {object} body
 */

const postFunction = (url, body, option = {}) => new Promise((resolve, reject) => {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", "php/" + url);
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlHttp.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE && this.status == 200) {
            resolve(xmlHttp.responseText)
            return
        } else if (this.readyState === XMLHttpRequest.DONE) {
            reject(xmlHttp.responseText)
        }
    }
    const bodyData = new URLSearchParams();
    bodyData.set("data", JSON.stringify(body));
    xmlHttp.send(bodyData.toString());
})

/**
 *
 * @param {string} url
 * @param {object} params
 */

const getFunction = (url, params) => new Promise((resolve, reject) => {
    const xmlHttp = new XMLHttpRequest();
    const parameterData = new URLSearchParams();
    Object.keys(params).forEach((key) => {
        parameterData.set(key, params[key].toString());
    });
    const parameter = parameterData.toString();
    xmlHttp.open("GET", "php/" + url + (parameter.length > 0 ? "?" + parameter : ""));
    xmlHttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status == 200) {
            resolve(xmlHttp.responseText)
        } else if (this.readyState === XMLHttpRequest.DONE) {
            reject(xmlHttp.responseText)
        }
    }
    xmlHttp.send();
})


export default {
    Post: postFunction,
    Get: getFunction,
};
