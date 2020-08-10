# 功能描述

    微信,QQ,微博分享
    

# 依赖的模块

  QQPlus,wxPlus,weiboPlus 

# 快速使用
    weiboText：

      类型：字符串
      描述：（可选项）分享的文本，微博分享接口专用,长度小于140个汉字

    H5WXQQWBShareType:
      类型：字符串
      描述：微信,QQ必填,微博不用填, 微信取值范围:
                                        session（会话）
                                        timeline（朋友圈）
                                QQ取值范围:
                                        QZone：分享到 QQ 空间
                                        QFriend：分享到好友、讨论组、群聊（在 iOS 平台此分享成功后无回调）

    H5WXQQWBShareTitle:
      类型：字符串
      描述：要分享的标题
    

    H5WXQQWBShareDescription:
      类型：字符串
      描述：要分享的描述(QQ分享到空间无效),由于微信平台限制，对不同平台部分场景本参数无效

    H5WXQQWBShareImgurl:
      类型：字符串
      描述：（可选项）分享的缩略图地址，大小不能超过32K,需要路径包含图片格式后缀，否则如果原图片为非png格式，会分享失败,(微信要求本地路径要求本地路径（fs://、widget://）,[QQ分享Android平台只支持网络图片])

    H5WXQQWBShareUrl:
      类型：字符串
      描述：要分享的链接地址
# 特别说明
  使用前,请先在模块库中添加 QQPlus,wxPlus,weiboPlus 模块,否则无法使用,使用到那用添加哪个,不用全部添加