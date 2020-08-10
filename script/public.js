// var new_element = document.createElement("script");
// new_element.setAttribute("type", "text/javascript");
// new_element.setAttribute("src", "/script/api.js");
// document.body.appendChild(new_element);
const requestUrl = 'http://192.168.1.97:8010/';

function request(type, url, data, callback) {
    $.ajax({
        type: type,
        url: url,
        beforeSend: function (request) {
            request.setRequestHeader("token", localStorage.getItem("fToken"));
        },
        dataType: "json",
        contentType: "application/json",
        data: data,
        success: function (data) {
            if (data.code == 110110) {
                openUrl("login.html", {})
            } else {
                callback(data);
            }
        },
        error: function (data) {
            callback(data);
        },
    });
};

function openUrl(url, pageParam) {
    console.log('url', url);
    console.log('pageParam', pageParam);
    api.openWin({
        name: 'public',
        url: url,
        rect: {
            x: 0,
            y: 0,
            w: 'auto',
            h: 'auto'
        },
        pageParam: pageParam,
        // pageParam: {
        //   name: 'test'
        // }
    });
}