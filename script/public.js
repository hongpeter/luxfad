// var new_element = document.createElement("script");
// new_element.setAttribute("type", "text/javascript");
// new_element.setAttribute("src", "/script/api.js");
// document.body.appendChild(new_element);
const requestUrl = 'http://192.168.1.97:8010/';
//const requestUrl = 'http://api.luxfad.com/';

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
            //callback(data);
            if (data.code == 110110) {
                setTimeout(() => {
                    openUrl("./login.html", {})
                }, 500);
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
    console.log('pageParam', JSON.stringify(pageParam));
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
wxSessionShare = function () {
    var H5WXQQWBShareType = 'session';
    var H5WXQQWBShareTitle = '微信好友';
    var H5WXQQWBShareDescription = 'description';
    var H5WXQQWBShareImgurl = '../H5WX-QQ-WB-Share/image/wx-share.png';
    var H5WXQQWBShareUrl = 'https://www.apicloud.com/';
    $H5WXQQWBShare.wxShare(H5WXQQWBShareType, H5WXQQWBShareTitle, H5WXQQWBShareDescription, H5WXQQWBShareImgurl,
        H5WXQQWBShareUrl);
}

wxTimelineShare = function () {
    var H5WXQQWBShareType = 'timeline';
    var H5WXQQWBShareTitle = '微信朋友圈';
    var H5WXQQWBShareDescription = 'description';
    var H5WXQQWBShareImgurl = '../H5WX-QQ-WB-Share/image/timeline.png';
    var H5WXQQWBShareUrl = 'https://www.apicloud.com/';
    $H5WXQQWBShare.wxShare(H5WXQQWBShareType, H5WXQQWBShareTitle, H5WXQQWBShareDescription, H5WXQQWBShareImgurl,
        H5WXQQWBShareUrl);
}

QFriend = function () {
    var H5WXQQWBShareType = 'QFriend';
    var H5WXQQWBShareitle = 'QQ朋友';
    var H5WXQQWBShareDescription = 'description';
    var H5WXQQWBShareImgurl =
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574316643090&di=f21979ef445826d4f547d8b20088b456&imgtype=0&src=http%3A%2F%2Fpic2.cxtuku.com%2F00%2F16%2F04%2Fb163c9e46800.jpg';
    var H5WXQQWBShareUrl = 'https://www.apicloud.com/';
    $H5WXQQWBShare.QQShare(H5WXQQWBShareType, H5WXQQWBShareTitle, H5WXQQWBShareDescription, H5WXQQWBShareImgurl,
        H5WXQQWBShareUrl);
}

QZone = function () {
    var H5WXQQWBShareType = 'QZone';
    var H5WXQQWBShareTitle = 'QQ空间';
    var H5WXQQWBShareDescription = 'description';
    var H5WXQQWBShareImgurl =
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574316643090&di=f21979ef445826d4f547d8b20088b456&imgtype=0&src=http%3A%2F%2Fpic2.cxtuku.com%2F00%2F16%2F04%2Fb163c9e46800.jpg';
    var H5WXQQWBShareUrl = 'https://www.apicloud.com/';
    $H5WXQQWBShare.QQShare(H5WXQQWBShareType, H5WXQQWBShareTitle, H5WXQQWBShareDescription, H5WXQQWBShareImgurl,
        H5WXQQWBShareUrl);
}

weibo = function () {
    var weiboText = '111111111111';
    var H5WXQQWBShareTitle = 'QQ朋友';
    var H5WXQQWBShareDescription = 'description';
    var H5WXQQWBShareImgurl = '../H5WX-QQ-WB-Share/image/timeline.png';
    var H5WXQQWBShareUrl = 'https://www.apicloud.com/';
    $H5WXQQWBShare.weibo(weiboText, H5WXQQWBShareTitle, H5WXQQWBShareDescription, H5WXQQWBShareImgurl,
        H5WXQQWBShareUrl);
}

function cleanArray(actual) {
    const newArray = []
    for (let i = 0; i < actual.length; i++) {
        if (actual[i]) {
            newArray.push(actual[i])
        }
    }
    return newArray
}

function param(json) {
    if (!json) return ''
    return cleanArray(Object.keys(json).map(key => {
        if (json[key] === undefined) return ''
        return encodeURIComponent(key) + '=' +
            encodeURIComponent(json[key])
    })).join('&')
}


function goBack(extra){
  api.closeWin();
  api.sendEvent({
    name: 'refreshData',
    extra: extra
  });
};
