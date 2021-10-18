/**
 *
 * @param {string} url
 * @param {object} body
 */
const postFunction = (url, body) => {
    return new Promise((resolve, reject) => {
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.open("POST", "php/" + url);
        xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        const bodyData = new URLSearchParams();
        bodyData.set("data", JSON.stringify(body));
        xmlHttp.onload = () => {
            if (xmlHttp.status >= 200 && xmlHttp.status < 300) {
                resolve(xmlHttp.responseText);
            } else {
                reject(xmlHttp.statusText);
            }
        };
        xmlHttp.onerror = () => reject(xmlHttp.statusText);
        xmlHttp.send(bodyData.toString());
    });
};

/**
 *
 * @param {string} url
 * @param {object} params
 */
const getFunction = (url, params) => {
    return new Promise((resolve, reject) => {
        const xmlHttp = new XMLHttpRequest();
        const parameterData = new URLSearchParams();
        Object.keys(params).forEach((key) => {
            parameterData.set(key, params[key].toString());
        });
        const parameter = parameterData.toString();
        xmlHttp.open("GET", "php/" + url + (parameter.length > 0 ? "?" + parameter : ""));
        xmlHttp.onload = () => {
            if (xmlHttp.status >= 200 && xmlHttp.status < 300) {
                resolve(xmlHttp.responseText);
            } else {
                reject(xmlHttp.statusText);
            }
        };
        xmlHttp.onerror = () => reject(xmlHttp.statusText);
        xmlHttp.send();
    });
};

export default {
    Post: postFunction,
    Get: getFunction,
};
