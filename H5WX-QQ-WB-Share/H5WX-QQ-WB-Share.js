(function (window) {
  var u = {};
  u.wxShare = function (type, title, description, imgUrl, url) {
    var wx = api.require('wx');
    wx.isInstalled(function (ret, err) {
      if (ret.installed) {
        wx.shareWebpage({
          scene: type,
          title: title,
          description: description,
          thumb: imgUrl,
          contentUrl: url
        }, function (ret, err) {
          if (ret.status) {
            // $api.toast('分享成功');
            api.toast({
              msg: '分享成功',
              duration: 1500,
              location: 'middle'
            });
          } else {
            alert(err.code);
          }
        });
      } else {
        $api.toast('当前设备未安装微信客户端');
      }
    });
  };
  u.QQShare = function (type, title, description, imgUrl, url) {
    var qq = api.require('QQPlus');
    qq.installed(function (ret, err) {
      if (ret.status) {
        qq.shareNews({
          url: url,
          title: title,
          description: description,
          imgUrl: imgUrl,
          type: type
        }, function (ret, err) {
          if (ret.status) {
            api.toast({
              msg: '分享成功',
              duration: 1500,
              location: 'middle'
            });
          } else {
            // api.alert({ msg: JSON.stringify(err) });
          }
        });
      } else {
        $api.toast('当前设备未安装QQ客户端');
      }
    });
  }

  u.weibo = function (text, title, description, imgUrl, url) {
    var weiboPlus = api.require('weiboPlus');
    weiboPlus.isInstalled(
      function (ret) {
        if (ret.status) {
          weiboPlus.shareWebPage({
            text: text,
            title: title,
            description: description,
            thumb: imgUrl,
            contentUrl: url
          }, function (ret, err) {
            if (ret.status) {
              api.toast({
                msg: '分享成功',
                duration: 1500,
                location: 'middle'
              });
            }
          });
        } else {
          $api.toast('未安装新浪微博客户端');
        }
      }
    );
  }

  window.$H5WXQQWBShare = u;
})(window);
