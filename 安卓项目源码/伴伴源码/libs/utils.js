function UtilsWrapper() {

}


var utils = new UtilsWrapper();

/**
 * 请求展示浮窗的权限
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 * @param timeout 请求权限超时时间 单位是秒
 * @return true 代表请求权限成功，false代表失败
 */
UtilsWrapper.prototype.requestFloatViewPermission = function (timeout) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.requestFloatViewPermission(timeout);
};

/**
 * 展示浮窗
 * @param params js的map对象，包含的
 * var map = {"path":"main.html","tag":"test"};  类似这样的参数
 * <br/>
 * 参数解析:
 * tag:字符串 悬浮窗唯一定位的标示
 * path:字符串 IEC 中的布局文件
 * title:字符串 悬浮窗标题
 * titleBg:字符串 悬浮窗背景，16进制，例如#888888，或者#88000000
 * x:整型 悬浮窗起始X坐标
 * y:整型 悬浮窗起始Y坐标
 * w:整型 悬浮窗起始宽度
 * h:整型 悬浮窗起始高度
 * @return true 代表请求权限成功，false代表失败
 */
UtilsWrapper.prototype.showFloatView = function (params) {
    if (utilsWrapper == null || params == null) {
        return false;
    }
    if (String == (typeof params)) {
        return utilsWrapper.showFloatView(params);
    } else {
        return utilsWrapper.showFloatView(JSON.stringify(params));
    }

};

/**
 * 关闭浮窗
 * @param tag showFloatView 使用的tag参数，对悬浮窗唯一定位的
 * @return true 成功，false代表失败
 */
UtilsWrapper.prototype.closeFloatView = function (tag) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.closeFloatView(tag);
};


/**
 * 关闭所有悬浮窗，但不包含日志悬浮窗
 * @return true 成功，false代表失败
 */
UtilsWrapper.prototype.closeAllFloatView = function () {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.closeAllFloatView();
};


/**
 * 检查是否含有浮窗权限
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 * @return true 有权限,false 代表无权限
 */
UtilsWrapper.prototype.hasFloatViewPermission = function () {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.hasFloatViewPermission();
};

/**
 * 设置日志窗口大小
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 * @param w 宽度
 * @param h 高度
 * @param textSize 日志的字体大小
 * @param backgroundColor 背景颜色，例如#336699
 */
UtilsWrapper.prototype.setLogViewSize = function (w, h, textSize, backgroundColor) {
    if (utilsWrapper == null) {
        return null;
    }
    utilsWrapper.setLogViewSize(w, h, textSize, backgroundColor);
};



/**
 * 设置日志顶部固定窗口属性
 * 适合EC 6.17.0+
 * @param show 是否展示
 * @param h 高度
 * @param textSize 日志的字体大小
 * @param textColor 日志的字体颜色，例如#336699
 * @param backgroundColor 背景颜色，例如#336699
 */
UtilsWrapper.prototype.setLogFixedViewEx = function (p) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.setLogFixedViewEx(p);
};


/**
 * 设置日志顶部固定窗口属性
 * 适合EC 6.17.0+
 * @param msg 消息
 * @return true代表成功 false代表失败
 */
UtilsWrapper.prototype.setFixedViewText = function (p) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.setFixedViewText(p);
};




UtilsWrapper.prototype.setLogViewSizeEx = function (p) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.setLogViewSizeEx(p);
};


UtilsWrapper.prototype.setCtrlViewSizeEx = function (p) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.setCtrlViewSizeEx(p);
};

/**
 * 展示日志浮窗
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 */
UtilsWrapper.prototype.showLogWindow = function () {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.showLogWindow();
};
UtilsWrapper.prototype.showCtrlWindow = function () {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.showCtrlWindow();
};

UtilsWrapper.prototype.hideCtrlWindow = function () {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.hideCtrlWindow();
};


/**
 * 展示日志到浮窗中
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 * @param log 日志
 */
UtilsWrapper.prototype.setLogText = function (log, color, size) {
    if (utilsWrapper == null) {
        return null;
    }
    utilsWrapper.setLogText(log, color, size);
};


/**
 * 隐藏日志浮窗
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 */
UtilsWrapper.prototype.hideLogWindow = function () {
    if (utilsWrapper == null) {
        return null;
    }
    utilsWrapper.hideLogWindow();
};

/**
 * 显示消息
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param msg 消息内容
 */
UtilsWrapper.prototype.toast = function (msg) {
    if (utilsWrapper == null) {
        return null;
    }
    utilsWrapper.toast(msg);
};
/**
 * 打开APP
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param packageName 程序的包名
 * @return 布尔型 true 代表成功，false 代表失败
 */

UtilsWrapper.prototype.openApp = function (packageName) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.openApp(packageName);
};

/**
 * 拼接打开APP命令
 *
 * @param packageName 程序的包名
 * @return {string} 命令字符串
 */

UtilsWrapper.prototype.getStartAppCmd = function (packageName) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.getStartAppCmd(packageName);
};




/**
 * 拼接启动activity命令，通过map参数
 * @param map 例如{"action":""},key的固定只有
 * action,
 * uri,pkg,className,flag,其他的都是参数了
 * @return {string} 命令字符串
 */
UtilsWrapper.prototype.getStartActivityCmd = function (map) {
    if (utilsWrapper == null) {
        return null;
    }
    map = JSON.stringify(map);
    return utilsWrapper.getStartActivityCmd(map);
};


/**
 * 打开一个activity，通过map参数
 * @param map 例如{"action":""},key的固定只有
 * action,
 * uri,pkg,className,flag,其他的都是参数了
 * @return 布尔型 true 代表成功，false 代表失败
 */
UtilsWrapper.prototype.openActivity = function (map) {
    if (utilsWrapper == null) {
        return null;
    }
    map = JSON.stringify(map);
    return utilsWrapper.openActivity(map);
};

/**
 * 通过Action打开某个界面
 * @param action action动作，例如 android.settings.ACCESSIBILITY_SETTINGS = 辅助功能，
 * 如果改方法不满足要求，可以直接使用intent进行打开：
 * 常用的action有：
 * android.settings.ACCESSIBILITY_SETTINGS //辅助功能
 * android.settings.ADD_ACCOUNT_SETTINGS //添加账户
 * android.settings.AIRPLANE_MODE_SETTINGS //系统设置首页
 * android.settings.APN_SETTINGS //APN设置
 * android.settings.APPLICATION_SETTINGS //应用管理
 * android.settings.BATTERY_SAVER_SETTINGS //节电助手
 * android.settings.BLUETOOTH_SETTINGS //蓝牙
 * android.settings.CAPTIONING_SETTINGS //字幕
 * android.settings.CAST_SETTINGS //无线显示
 * android.settings.DATA_ROAMING_SETTINGS //移动网络
 * android.settings.DATE_SETTINGS //日期和时间设置
 * android.settings.DEVICE_INFO_SETTINGS //关于手机
 * android.settings.DISPLAY_SETTINGS //显示设置
 * android.settings.DREAM_SETTINGS //互动屏保设置
 * android.settings.HARD_KEYBOARD_SETTINGS //实体键盘
 * android.settings.HOME_SETTINGS //应用权限,默认应用设置,特殊权限
 * android.settings.IGNORE_BATTERY_OPTIMIZATION_SETTINGS //忽略电池优化设置
 * android.settings.INPUT_METHOD_SETTINGS //可用虚拟键盘设置
 * android.settings.INPUT_METHOD_SUBTYPE_SETTINGS //安卓键盘语言设置(AOSP)
 * android.settings.INTERNAL_STORAGE_SETTINGS //内存和存储
 * android.settings.LOCALE_SETTINGS //语言偏好设置
 * android.settings.LOCATION_SOURCE_SETTINGS //定位服务设置
 * android.settings.MANAGE_ALL_APPLICATIONS_SETTINGS //所有应用
 * android.settings.MANAGE_APPLICATIONS_SETTINGS //应用管理
 * android.settings.MANAGE_DEFAULT_APPS_SETTINGS //与ACTION_HOME_SETTINGS相同
 * android.settings.action.MANAGE_OVERLAY_PERMISSION //在其他应用上层显示,悬浮窗
 * android.settings.MANAGE_UNKNOWN_APP_SOURCES //安装未知应用 安卓8.0
 * android.settings.action.MANAGE_WRITE_SETTINGS //可修改系统设置 权限
 * android.settings.MEMORY_CARD_SETTINGS //内存与存储
 * android.settings.NETWORK_OPERATOR_SETTINGS //可用网络选择
 * android.settings.NFCSHARING_SETTINGS //NFC设置
 * android.settings.NFC_SETTINGS //网络中的 更多设置
 * android.settings.ACTION_NOTIFICATION_LISTENER_SETTINGS //通知权限设置
 * android.settings.NOTIFICATION_POLICY_ACCESS_SETTINGS //勿扰权限设置
 * android.settings.ACTION_PRINT_SETTINGS //打印服务设置
 * android.settings.PRIVACY_SETTINGS //备份和重置
 * android.settings.SECURITY_SETTINGS //安全设置
 * android.settings.SHOW_REGULATORY_INFO //监管信息
 * android.settings.SOUND_SETTINGS //声音设置
 * android.settings.SYNC_SETTINGS //添加账户设置
 * android.settings.USAGE_ACCESS_SETTINGS //有权查看使用情况的应用
 * android.settings.USER_DICTIONARY_SETTINGS //个人词典
 * android.settings.VOICE_INPUT_SETTINGS //辅助应用和语音输入
 * android.settings.VPN_SETTINGS //VPN设置
 * android.settings.VR_LISTENER_SETTINGS //VR助手
 * android.settings.WEBVIEW_SETTINGS //选择webview
 * android.settings.WIFI_IP_SETTINGS //高级WLAN设置
 * android.settings.WIFI_SETTINGS //选择WIFI,连接WIFI
 * com.android.settings.Settings$DevelopmentSettingsActivity
 * @return {null|boolean|*}
 */
UtilsWrapper.prototype.openIntentAction = function (action) {
    if (utilsWrapper == null) {
        return null;
    }
    importClass(android.content.Intent);
    var intent = new Intent();
    intent.setAction(action);
    intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
    try {
        return context.startActivity(intent);
    } catch (e) {
        loge(e)
        return false;
    }
};

/**
 * 打开APP，通过应用名称
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param appName 程序名称，比如今日头条
 * @return 布尔型 true 代表成功，false 代表失败
 */
UtilsWrapper.prototype.openAppByName = function (appName) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.openAppByName(appName);
};
/**
 * App是否已经安装
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param packageName 应用程序的包名
 * @return 布尔型 true 代表已经安装，false代表未安装
 */
UtilsWrapper.prototype.isAppExist = function (packageName) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.isAppExist(packageName);
};


/**
 * 取得已安装的程序的版本整型标示
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param packageName 应用程序的包名
 * @return 整型 返回版本代码
 */
UtilsWrapper.prototype.getAppVersionCode = function (packageName) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.getAppVersionCode(packageName);
};

/**
 * 取得已安装的程序的版本字符串标示
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param packageName 应用程序的包名
 * @return string 例如 1.0.0
 */
UtilsWrapper.prototype.getAppVersionName = function (packageName) {
    if (utilsWrapper == null) {
        return null;
    }
    var x = utilsWrapper.getAppVersionName(packageName);
    return javaString2string(x);
};
/**
 * 取得App文件的包名
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param filePath 文件路径
 * @return string 例如com.tencent.mm
 */
UtilsWrapper.prototype.getApkPkgName = function (filePath) {
    if (utilsWrapper == null) {
        return null;
    }
    var x = utilsWrapper.getApkPkgName(filePath);
    return javaString2string(x);
};


/**
 * 将图片插入到相册中，此方法会立刻更新相册数据
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param path 图片路径
 */
UtilsWrapper.prototype.insertImageToAlbum = function (path) {
    if (utilsWrapper == null) {
        return null;
    }
    utilsWrapper.insertImageToAlbum(path);
};

/**
 * 将视频插入到相册中，此方法会立刻更新相册数据
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param path 视频路径
 */
UtilsWrapper.prototype.insertVideoToAlbum = function (path) {
    if (utilsWrapper == null) {
        return null;
    }
    utilsWrapper.insertVideoToAlbum(path);
};


/**
 * 文件的MD5
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param filePath 文件路径
 * @return string 文件MD5字符串或者null
 */
UtilsWrapper.prototype.fileMd5 = function (filePath) {
    if (utilsWrapper == null) {
        return null;
    }
    var x = utilsWrapper.fileMd5(filePath);
    return javaString2string(x);
};
/**
 * 数据计算出来的MD5
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param data 数据
 * @return string 数据MD5字符串或者null
 */
UtilsWrapper.prototype.dataMd5 = function (data) {
    if (utilsWrapper == null) {
        return null;
    }
    var x = utilsWrapper.dataMd5(data);
    return javaString2string(x);
};


/**
 * 读取JSON中的整型数据
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param jsonObject JSON对象
 * @param key        配置项目
 * @return 整型 JSON中key对应的整型数据
 */
UtilsWrapper.prototype.readJSONInt = function (jsonObject, key) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.readJSONInt(jsonObject, key);
};

/**
 * 读取JSON中的字符串数据
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param jsonObject JSON对象
 * @param key        配置项目
 * @return string JSON中key对应的字符串数据
 */
UtilsWrapper.prototype.readJSONString = function (jsonObject, key) {
    if (utilsWrapper == null) {
        return null;
    }
    var x = utilsWrapper.readJSONString(jsonObject, key);
    return javaString2string(x);
};

/**
 * 判断一个对象为空
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param obj 对象
 * @return 布尔型 true或者false
 */
UtilsWrapper.prototype.isObjectNull = function (obj) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.isObjectNull(obj);
};

/**
 * 判断一个对象不为空
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param obj 对象
 * @return 布尔型 true或者false
 */
UtilsWrapper.prototype.isObjectNotNull = function (obj) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.isObjectNotNull(obj);
};
/**
 * 判断布尔型对象是否为真
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param r 布尔型对象
 * @return 布尔型 true 或者 false
 */
UtilsWrapper.prototype.isTrue = function (r) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.isTrue(r);
};

/**
 * 取得比例，例如10参数，就是返回10%的比例，如果是true，说明随机比例正确，否则不正确
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param ratio 浮点型 1-100
 * @return 布尔型 true或者false
 */
UtilsWrapper.prototype.getRatio = function (ratio) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.getRatio(ratio);
};
/**
 * 随机整型数据，参数是整型长度
 *
 * @param length 位数，要随机产生多少位的整型数据
 * @return 整型 返回指定长度的整型数据
 */
UtilsWrapper.prototype.randomInt = function (length) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.randomInt(length);
};


/**
 * 取得随机的数字和字母，参数是长度
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param length 长度
 * @return string 字符串数字混合
 */
UtilsWrapper.prototype.randomCharNumber = function (length) {
    if (utilsWrapper == null) {
        return null;
    }
    var x = utilsWrapper.randomCharNumber(length);
    return javaString2string(x);
};

/**
 * 取得某个范围的随机值
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param min 最小值
 * @param max 最大值
 * @return 整型 在min和max中间的值, 包含最大和最小值
 */
UtilsWrapper.prototype.getRangeInt = function (min, max) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.getRangeInt(min, max);
};
/**
 * 设置剪贴板文本
 * @param text 文本
 * @return boolean
 */
UtilsWrapper.prototype.setClipboardText = function (text) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.setClipboardText(text);
};


/**
 * 读取剪贴板文本
 * @return string
 */
UtilsWrapper.prototype.getClipboardText = function () {
    if (utilsWrapper == null) {
        return null;
    }
    return javaString2string(utilsWrapper.getClipboardText());
};

/**
 * 播放mp3音乐
 * @param path 文件路径 例如 /sdcard/a.mp3
 * @param loop 是否循环播放 true代表是
 * @return {bool} true 代表成功 false 代表失败
 */
UtilsWrapper.prototype.playMp3 = function (path,loop) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.playMp3(path,loop);
};


/**
 * 停止播放mp3音乐
 * @return {bool} true 代表成功 false 代表失败
 */
UtilsWrapper.prototype.stopMp3 = function () {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.stopMp3();
};





/**
 * 生成一个二维码
 * @param content 二维码字符串内容
 * @param width 图像宽度
 * @param height 图像高度
 * @param logo 图像中心的logo，非必填项，Bitmap 对象，文件转Bitmap请看image模块
 * @return {Bitmap} Android的Bitmap对象，保存到文件请看image模块
 */
UtilsWrapper.prototype.createQRCode = function ( content,  width,  height,  logo) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.createQRCode(content,width,height,logo);
};

/**
 * 解析一个二维码
 * @param src 图像 Bitmap 对象，文件转Bitmap请看image模块
 * @return {string} 解析后的字符串
 */
UtilsWrapper.prototype.decodeQRCode = function (  src) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.decodeQRCode(src);
};



/**
 * 将zip文件解压到一个文件夹中
 * @param zipFile 目标zip文件的路径
 * @param passwd 目标ip文件密码
 * @param destDir 要解压到的目标文件夹
 * @return {bool} true 代表成功  false代表失败
 */
UtilsWrapper.prototype.unzip = function (  zipFile,  passwd, destDir) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.unzip(zipFile,passwd,destDir);
};
/**
 * 将多个文件压缩成一个zip文件
 * @param zipFile 目标zip文件的路径
 * @param passwd 目标ip文件密码
 * @param files 要压缩的文件或者文件夹，文件数组例如: ["/sdcard/a.txt","/sdcard/bb/"]
 * @return {bool} true 代表成功  false代表失败
 */
UtilsWrapper.prototype.zip = function (  zipFile,  passwd, files) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.zip(zipFile,passwd,JSON.stringify(files));
};


/**
 * 从zip文件中读取数据
 * @param zipFile zip文件的路径
 * @param passwd zip文件密码
 * @param filePathInZip 文件在zip中的路径，例如 a/b.txt
 * @return {string} 解析后的字符串
 */
UtilsWrapper.prototype.readFileInZip = function (  zipFile,  passwd,  filePathInZip) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.readFileInZip(zipFile,passwd,filePathInZip);
};



function EncodeDecodeWrapper() {

}

var encodeDecoder = new EncodeDecodeWrapper();
/**
 * 获取上一次加解密的错误信息
 * @return {string} null代表无错误
 */
EncodeDecodeWrapper.prototype.getErrorMsg = function () {
    return utilsWrapper.getLastEncDeErrorMsg();
}


/**
 * AES加密
 * @param data 数据字符串
 * @param password 密码，至少8个字符
 * @return {string} 加密后的base64字符串
 */
EncodeDecodeWrapper.prototype.aesEncrypt = function ( data,  password) {
    return utilsWrapper.aesEncrypt(data,password);
}

/**
 * AES解密
 * @param data 加密后的base64字符串
 * @param password 密码，至少8个字符
 * @return {string} 解密后的字符串
 */
EncodeDecodeWrapper.prototype.aesDecrypt = function ( data,  password) {
     return utilsWrapper.aesDecrypt(data,password);
}



/**
 * DES加密
 * @param data 数据字符串
 * @param password 密码，至少8个字符
 * @return {string} 加密后的base64字符串
 */
EncodeDecodeWrapper.prototype.desEncrypt = function ( data,  password) {
    return utilsWrapper.desEncrypt(data,password);
}

/**
 * DES解密
 * @param data 加密后的base64字符串
 * @param password 密码，至少8个字符
 * @return {string} 解密后的字符串
 */
EncodeDecodeWrapper.prototype.desDecrypt = function ( data,  password) {
     return utilsWrapper.desDecrypt(data,password);
}

/**
 * 3DES加密,算法是 DESede/CBC/PKCS5Padding
 * @param data 数据字符串
 * @param password 密码
 * @return {string} 加密后的base64字符串
 */
EncodeDecodeWrapper.prototype.des3Encrypt = function ( data,  password) {
    return utilsWrapper.des3Encrypt(data,password);
}

/**
 * 3DES解密，算法是 DESede/CBC/PKCS5Padding
 * @param data 加密后的base64字符串
 * @param password 密码
 * @return {string} 解密后的字符串
 */
EncodeDecodeWrapper.prototype.des3Decrypt = function ( data,  password) {
    return utilsWrapper.des3Decrypt(data,password);
}

/**
 * RSA 私钥加密，算法是RSA/ECB/PKCS1Padding
 * @param data 数据字符串
 * @param password 私钥
 * @return {string} 加密后的base64字符串
 */
EncodeDecodeWrapper.prototype.rsaEncryptByPrivate = function ( data,  password) {
    return utilsWrapper.rsaEncryptByPrivate(data,password);
}

/**
 * RSA 私钥解密，算法是RSA/ECB/PKCS1Padding
 * @param data 加密后的base64字符串
 * @param password 私钥
 * @return {string} 解密后的字符串
 */
EncodeDecodeWrapper.prototype.rsaDecryptByPrivate = function ( data,  password) {
    return utils.rsaDecryptByPrivate(data,password);
}

/**
 * RSA 公钥加密，算法是RSA/ECB/PKCS1Padding
 * @param data 数据字符串
 * @param password 私钥
 * @return {string} 加密后的base64字符串
 */
EncodeDecodeWrapper.prototype.rsaEncryptByPublic = function ( data,  password) {
    return utilsWrapper.rsaEncryptByPublic(data,password);
}
/**
 * RSA 公钥解密，算法是RSA/ECB/PKCS1Padding
 * @param data 加密后的base64字符串
 * @param password 私钥
 * @return {string} 解密后的字符串
 */
EncodeDecodeWrapper.prototype.rsaDecryptByPublic = function ( data,  password) {
    return utilsWrapper.rsaDecryptByPublic(data,password);
}



function FloatyWrapper() {

}

var floaty = new FloatyWrapper();


FloatyWrapper.prototype.requestFloatViewPermission = function (timeout) {
    return utils.requestFloatViewPermission(timeout);
}

FloatyWrapper.prototype.hasFloatViewPermission = function () {
    return utils.hasFloatViewPermission();
}


/**
 * 显示一个XML悬浮窗
 * @param tag 悬浮窗的标签
 * @param xml xml路径或者内容
 * @param x 起始X位置
 * @param y 起始Y位置
 * @return {View} android的View对象
 */
FloatyWrapper.prototype.showFloatXml = function (tag, xml, x, y) {
    return utilsWrapper.showFloatXml_floaty(tag, xml, x, y);
}
/**
 * 显示一个View悬浮窗
 * @param tag 悬浮窗的标签
 * @param view android的View对象
 * @param x 起始X位置
 * @param y 起始Y位置
 * @return {View} android的View对象
 */
FloatyWrapper.prototype.showFloatView = function (tag, view, x, y) {
    return utilsWrapper.showFloatView_floaty(tag, view, x, y);
}

/**
 * 设置悬浮窗X坐标
 * @param tag 悬浮窗的标签
 * @param x X位置
 * @return {bool} true成功 false 失败
 */
FloatyWrapper.prototype.updateX = function (tag, x) {
    return utilsWrapper.updateX_floaty(tag, x);
}
/**
 * 设置悬浮窗Y坐标
 * @param tag 悬浮窗的标签
 * @param y Y位置
 * @return {bool} true成功 false 失败
 */
FloatyWrapper.prototype.updateY = function (tag, y) {
    return utilsWrapper.updateY_floaty(tag, y);
}

/**
 * 获取浮窗位置X坐标
 * @param tag 悬浮窗的标签
 * @return {int} -1 代表失败 其他都是坐标
 */
FloatyWrapper.prototype.getX = function (tag) {
    return utilsWrapper.getX_floaty(tag);
}

/**
 * 获取浮窗位置Y坐标
 * @param tag 悬浮窗的标签
 * @return {int} -1 代表失败 其他都是坐标
 */
FloatyWrapper.prototype.getY = function (tag) {
    return utilsWrapper.getY_floaty(tag);
}


/**
 * 获取浮窗宽度
 * @param tag 悬浮窗的标签
 * @return {int} -1 代表失败 其他都是坐标
 */
FloatyWrapper.prototype.getWidth = function (tag) {
    return utilsWrapper.getWidth_floaty(tag);
}
/**
 * 获取浮窗高度
 * @param tag 悬浮窗的标签
 * @return {int} -1 代表失败 其他都是坐标
 */
FloatyWrapper.prototype.getHeight = function (tag) {
    return utilsWrapper.getHeight_floaty(tag);
}



/**
 * 设置悬浮窗大小
 * @param tag 悬浮窗的标签
 * @param w 宽度
 * @param h 高度
 * @return {bool} true成功 false 失败
 */
FloatyWrapper.prototype.updateSize = function (tag, w, h) {
    return utilsWrapper.updateSize_floaty(tag, w, h);
}

/**
 * 关闭悬浮窗
 * @param tag 悬浮窗的标签
 * @return {bool} true成功 false 失败
 */
FloatyWrapper.prototype.close = function (tag) {
    return utilsWrapper.closeFloatView_floaty(tag);
}
/**
 * 设置悬浮窗聚焦
 * @param focusable 是否聚焦
 * @return {bool} true成功 false 失败
 */
FloatyWrapper.prototype.focusable = function (tag, focusable) {
    return utilsWrapper.focusable_floaty(tag, focusable);
}
/**
 * 设置悬浮窗可触摸
 * @param touchable 是否可触摸
 * @return {bool} true成功 false 失败
 */
FloatyWrapper.prototype.touchable = function (tag, touchable) {
    return utilsWrapper.touchable_floaty(tag, touchable);
}

FloatyWrapper.prototype.showLogWindow = function () {
    return utils.showLogWindow();
}
FloatyWrapper.prototype.closeLogWindow = function () {
    return utils.hideLogWindow();
}
FloatyWrapper.prototype.setLogViewSizeEx = function (p) {
    return utils.setLogViewSizeEx(p);
}




/**
 * 数据存储类
 */
function StoragesWrapper() {

}
var storages = new StoragesWrapper();
/**
 * 创建存储对象
 * @param name 存储对象名称
 * @return {StorageApiWrapper} 存储对象实例
 */
StoragesWrapper.prototype.create = function (name) {
    return new StorageApiWrapper(name);
}

function StorageApiWrapper(name) {
    this.name = name;
}

/**
 * 清空存储
 * @return {bool} true成功 false 失败
 */
StorageApiWrapper.prototype.clear = function () {
    return  storageWrapper.clear(this.name);
}
/**
 * 是否包含某个key
 * @param key 键
 * @return {bool} true成功 false 失败
 */
StorageApiWrapper.prototype.contains = function (key) {
    return storageWrapper.contains(this.name,key);
}
/**
 * 移出key对应的值
 * @param key 键
 * @return {bool} true成功 false 失败
 */
StorageApiWrapper.prototype.remove = function (key) {
    return storageWrapper.remove(this.name,key);
}
/**
 * 存储字符串
 * @param key 键
 * @param value 字符串
 * @return {bool} true成功 false 失败
 */
StorageApiWrapper.prototype.putString = function (key,value) {
    return storageWrapper.putString(this.name,key,value);
}
/**
 * 存储整型数据
 * @param key 键
 * @param value 整型数据
 * @return {bool} true成功 false 失败
 */
StorageApiWrapper.prototype.putInt = function (key,value) {
    return storageWrapper.putInt(this.name,key,value);
}
/**
 * 存储布尔型数据
 * @param key 键
 * @param value 布尔型数据
 * @return {bool} true成功 false 失败
 */
StorageApiWrapper.prototype.putBoolean = function (key,value) {
    return storageWrapper.putBoolean(this.name,key,value);
}
/**
 * 存储浮点型数据
 * @param key 键
 * @param value 浮点型数据
 * @return {bool} true成功 false 失败
 */
StorageApiWrapper.prototype.putFloat = function (key,value) {
    return storageWrapper.putFloat(this.name,key,value);
}
/**
 * 存储并加密字符串数据
 * @param key 键
 * @param value 字符串数据
 * @return {bool} true成功 false 失败
 */
StorageApiWrapper.prototype.putEncrypt = function (key,value) {
    return storageWrapper.putEncrypt(this.name,key,value);
}

/**
 * 获取解密字符串数据
 * @param key 键
 * @return {string} 解密后的字符串
 */
StorageApiWrapper.prototype.getDecryptString = function (key) {
    return storageWrapper.getDecryptString(this.name,key);
}

/**
 * 获取字符串数据
 * @param key 键
 * @return {string} 字符串
 */
StorageApiWrapper.prototype.getString = function (key,defaultValue) {
    return storageWrapper.getString(this.name,key,defaultValue);
}

/**
 * 获取整型数据
 * @param key 键
 * @return {string} 整型
 */
StorageApiWrapper.prototype.getInt = function (key,defaultValue) {
    return storageWrapper.getInt(this.name,key,defaultValue);
}
/**
 * 获取布尔型数据
 * @param key 键
 * @return {string} 布尔型
 */
StorageApiWrapper.prototype.getBoolean = function (key,defaultValue) {
    return storageWrapper.getBoolean(this.name,key,defaultValue);
}
/**
 * 获取浮点型数据
 * @param key 键
 * @return {string} 浮点型
 */
StorageApiWrapper.prototype.getFloat = function (key,defaultValue) {
    return storageWrapper.getFloat(this.name,key,defaultValue);
}


/**
 * 获取所有的key
 * @return {string} JSON字符串
 */
StorageApiWrapper.prototype.keys = function () {
    return storageWrapper.keys(this.name);
}


/**
 * 获取所有的key和值
 * @return {string} JSON字符串
 */
StorageApiWrapper.prototype.all = function () {
    return storageWrapper.all(this.name);
}






