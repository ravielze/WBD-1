/**
 *
 * @param {string} url
 * @param {object} body
 * @param {function} onReadyFunction
 */
const postFunction = (url, body, onReadyFunction) => {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", "php/" + url);
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlHttp.onreadystatechange = onReadyFunction;
    const bodyData = new URLSearchParams();
    bodyData.set("data", JSON.stringify(body));
    xmlHttp.send(bodyData.toString());
};

/**
 *
 * @param {string} url
 * @param {object} params
 * @param {function} onReadyFunction
 */
const getFunction = (url, params, onReadyFunction) => {
    const xmlHttp = new XMLHttpRequest();
    const parameterData = new URLSearchParams();
    Object.keys(params).forEach((key) => {
        parameterData.set(key, params[key].toString());
    });
    const parameter = parameterData.toString();
    xmlHttp.open("GET", "php/" + url + "?" + (parameter.length > 0 ? parameter : ""));
    xmlHttp.onreadystatechange = onReadyFunction;
    xmlHttp.send();
};

export default {
    Post: postFunction,
    Get: getFunction,
};
