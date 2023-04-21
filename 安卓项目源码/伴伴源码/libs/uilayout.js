function UIWrapper() {

}

var ui = new UIWrapper();



/**
 * 显示Toast信息
 * @param msg 信息
 */
UIWrapper.prototype.toast = function (msg) {
    if (uiWrapper == null) {
        return null;
    }
    uiWrapper.toast(msg);
};
/**
 * 读取IEC包中的res文件夹某个文件资源，并变成android的Bitmap对象返回
 * @param path res文件夹中的资源文件路径
 * @return Bitmap 图像对象或者null
 */
UIWrapper.prototype.resResAsBitmap = function (path) {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.resResAsBitmap(path);
};
/**
 * 读取IEC包中的res文件夹某个文件资源，并变成android的Drawable对象返回
 * @param path res文件夹中的资源文件路径
 * @return Drawable 图像对象或者null
 */
UIWrapper.prototype.resResAsDrawable = function (path) {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.resResAsDrawable(path);
};


/**
 * 调试日志打印
 * @param msg 打印的消息
 * @return {null}
 */
UIWrapper.prototype.logd = function (msg) {
    if (uiWrapper == null) {
        return null;
    }
    uiWrapper.logd(msg);
};
/**
 * 创建一个布局并设置到当前的页面中
 * @param name tab标签的名称
 * @param content 可以是layout文件夹中的文件名称，也可以直接是xml文件的内容
 * @return 布尔型 true代表成功， false代表失败
 */
UIWrapper.prototype.layout = function (name, content) {
    if (uiWrapper == null) {
        return null;
    }
    var r = uiWrapper.layout(name, content);
    this.setUIvar();
    return r;
};


/**
 * 解析布局并返回
 * @param content 可以是layout文件夹中的文件名称，也可以直接是xml文件的内容
 * @return View android的View对象，解析有问题就是null
 */
UIWrapper.prototype.parseView = function (content) {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.parseView(content);
};


/**
 * 通过tag查找到一个视图
 * @param tag 标签值
 * @return View android原生的View对象
 */
UIWrapper.prototype.findViewByTag = function (tag) {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.findViewByTag(tag);
};
/**
 * 设置事件
 * @param view 要设置事件的视图，可以是事件的tag值
 * @param eventType 时间类型： click：点击，checkedChange：单选和多选按钮的选中状态改变事件，itemClick：列表的项目点击，itemSelected：列表的项目选中
 * @param eventCallback 事件回调函数
 * @return 布尔型 true代表设置成功， false代表设置失败
 */
UIWrapper.prototype.setEvent = function (view, eventType, eventCallback) {
    if (uiWrapper == null || view == null) {
        return false;
    }
    if (typeof view == 'string') {
        view = this.findViewByTag(view);
    }
    if (eventType === "click") {
        return uiWrapper.setClickEvent(view, eventCallback);
    }
    if (eventType === "checkedChange") {
        return uiWrapper.setCheckedChangeEvent(view, eventCallback);
    }
    if (eventType === "itemClick") {
        return uiWrapper.setItemClickEvent(view, eventCallback);
    }
    if (eventType === "itemSelected") {
        return uiWrapper.setItemSelectedEvent(view, eventCallback);
    }
    return false;
};


UIWrapper.prototype.setUIvar = function () {
    this.resetUIVar();
}
/**
 * 存储数据到存储区中，脚本可以使用
 * @param key 键
 * @param value 值
 * @return 布尔型 true成功 false失败
 */
UIWrapper.prototype.putShareData = function (key, value) {
    return uiWrapper.putShareData2(key, value);
}
/**
 * 从存储区获取在UI模块存储的数据
 * @param key 键
 * @return 存储的数据
 */
UIWrapper.prototype.getShareData = function (key) {
    return uiWrapper.getShareData2(key);
}

/**
 * 清理所有存储区的数据
 * @return true 或者 false
 */
UIWrapper.prototype.clearAllShareData = function () {
    return uiWrapper.clearAllShareData();
}
/**
 * 将所有的tag转换成UI的对象直接调用
 * @return {null}
 */
UIWrapper.prototype.resetUIVar = function () {
    if (this.getActivity() == null) {
        return null;
    }
    var tags = uiWrapper.findAllTags();
    if (tags == null || tags=="") {
        return null;
    }
    tags = JSON.parse(tags);
    if (tags != null) {
        for (var i = 0; i < tags.length; i++) {
            ui[tags[i]] = this.findViewByTag(tags[i]);
        }
    }
};

/**
 * 取得当前的activity对象
 * @return Activity 对象或者null
 */
UIWrapper.prototype.getActivity = function () {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.getActivity();
};
UIWrapper.prototype.getContext = function () {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.getContext();
};
/**
 * 取得当前的Handler对象
 * @return Handler 对象或者null
 */
UIWrapper.prototype.getHandler = function () {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.getHandler();
};

/**
 * 取得当前的根视图对象，因为有可能是多标签的页面，返回的有可能是个集合
 * @return View 对象列表
 */
UIWrapper.prototype.getRootView = function () {
    if (uiWrapper == null) {
        return null;
    }
    var ls = uiWrapper.getRootView();
    if (ls == null) {
        return null;
    }
    var r = [];
    for (var i = 0; i < ls.size(); i++) {
        var va = ls.get(i);
        r.push(va);
    }
    return r;
};

/**
 * 启动脚本
 * @return 布尔型 true代表成功  false代表失败
 */
UIWrapper.prototype.start = function () {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.start();
};

/**
 * 是否有浮窗权限
 * @return 布尔型 true代表有权限 false代表无权限
 */
UIWrapper.prototype.hasFloatViewPermission = function () {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.hasFloatViewPermission();
};


/**
 * 异步请求浮窗权限
 * @param timeout 超时时间
 * @param callback 回调函数
 * @return 布尔型 true代表有权限 false代表无权限
 */
UIWrapper.prototype.requestFloatViewPermissionAsync = function (timeout, callback) {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.requestFloatViewPermissionAsync(timeout, callback);
};
/**
 * 取得所有UI配置
 * @return JSON字符串
 */
UIWrapper.prototype.getConfigJSON = function () {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.getConfigJSON();
};
/**
 * 取得单个UI配置项
 * @param key 配置的key
 * @return 字符串
 */
UIWrapper.prototype.getConfig = function (key) {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.getConfig(key);
};
/**
 * 打开EC的系统设置
 * @return 布尔型 true代表成功 false代表失败
 */
UIWrapper.prototype.openECSystemSetting = function () {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.openECSystemSetting();
};
/**
 * 保存UI参数值
 * @param key UI的key
 * @param value UI的值
 * @return 布尔型 true代表成功 false代表失败
 */
UIWrapper.prototype.saveConfig = function (key, value) {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.saveConfig(key, value);
};
/**
 * 移出所有保存的UI参数值
 * @return 布尔型 true代表成功 false代表失败
 */
UIWrapper.prototype.removeAllUIConfig = function () {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.removeAllUIConfig();
};



/**
 * 根据设置的tag，保存所有配置
 * @return 布尔型 true 保存成功，false 保存失败
 */
UIWrapper.prototype.saveAllConfig = function () {
    if (uiWrapper == null) {
        return false;
    }
    return uiWrapper.saveAllConfig();
};
/**
 * 设置视图的值
 * @param tagOrView 视图的tag或者视图对象
 * @param value 值，字符串或者是布尔型
 * @return 布尔型 true代表成功 false代表失败
 */
UIWrapper.prototype.setViewValue = function (tagOrView, value) {
    if (uiWrapper == null) {
        return;
    }
    return uiWrapper.setViewValue(tagOrView, value);
}
/**
 * 取得视图的值
 * @param tagOrView 视图的tag或者视图对象
 * @return 字符串或者布尔型
 */
UIWrapper.prototype.getViewValue = function (tagOrView) {
    if (uiWrapper == null) {
        return null;
    }
    var x = uiWrapper.getViewValue(tagOrView);
    try {
        x = JSON.parse(x);
        var type = x["type"] + "";
        var value = x["value"] + "";
        if (type === "string") {
        } else if (type === "boolean") {
            if (value === "true") {
                return true;
            } else {
                return false;
            }
        } else if (type === "int") {
            return parseInt(value);
        } else if (type === "float") {
            return parseFloat(value);
        }
        return value;
    } catch (e) {

    }
    return null;

};


/**
 * 是否是无障碍运行模式
 * @return 布尔型 true 是 false 否
 */
UIWrapper.prototype.isAccMode = function () {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.isAccMode();
};
/**
 * 是否是代理运行模式
 * @return 布尔型 true 是 false 否
 */
UIWrapper.prototype.isAgentMode = function () {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.isAgentMode();
};
/**
 * 自动化服务是否正常
 * @return 布尔型 true 是 false 否
 */
UIWrapper.prototype.isServiceOk = function () {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.isServiceOk();
};
/**
 * 设置运行模式
 * @param mode 1 代表是代理模式  2 代表无障碍模式
 * @return 布尔型 true 是 false 否
 */
UIWrapper.prototype.setRunningMode = function (mode) {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.setRunningMode(mode);
};
/**
 * 设置EC的系统参数
 * @param params  map形式例如 {"running_mode":"无障碍"},<br/>
 * {<br/>
 *     "node_service":"需要",<br/>
 *     "proxy_service":"不需要",<br/>
 *     "running_mode":"无障碍",<br/>
 *     "auto_start_service":"是",<br/>
 *     "daemon_service":"是",<br/>
 *      "volume_start_tc":"否",<br/>
 *      "log_float_window":"否",<br/>
 *      "ctrl_float_window":"否"<br/>
 * }<br/>
 *  参数解释有：<br/>
 *  node_service : 是否需要启动节点获取服务 值有 需要，不需要两种
 *  proxy_service : 是否需要启动底层代理服务 值有 需要，不需要两种
 *  running_mode : 手势执行服务 值有 无障碍，代理两种
 *  auto_start_service : 开机启动服务 值有 是，否 两种
 *  daemon_service : 守护服务 值有 是，否 两种
 *  volume_start_tc : 音量键启停 值有 是，否 两种
 *  log_float_window : 日志悬浮窗展示 值有 是，否 两种
 *  ctrl_float_window : 启停控制悬浮窗展示 值有 是，否 两种
 *
 * @return 布尔型 true 是 false 否
 */
UIWrapper.prototype.setECSystemConfig = function (params) {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.setECSystemConfig(JSON.stringify(params));
};


/**
 * 启动环境
 * @return 布尔型 true代表启动成功，false代表启动失败
 */
UIWrapper.prototype.startEnv = function () {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.startEnv();
};


/**
 * 开启一个定时任务
 * @param tag
 * @param execTime 定时时间格式: 2020-04-17 19:20:00，或者直接是秒数字，例如 3，代表3秒后
 * @param cancelBeforeRunning 是否取消之前的任务
 * @return 整型 jobid
 */
UIWrapper.prototype.startJob = function (tag, execTime, cancelBeforeRunning) {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.startJob(tag, execTime, cancelBeforeRunning);
};
/**
 * 取消所有的定时任务
 * @return 布尔型 true代表成功，false代表失败
 */
UIWrapper.prototype.cancelAllJob = function () {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.cancelAllJob();
};
/**
 * 取消指定标签的任务
 * @param tag 标签
 * @return 布尔型 true代表成功，false代表失败
 */
UIWrapper.prototype.cancelJob = function (tag) {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.cancelJob(tag);
};
/**
 * 获取所有定时任务TAG
 * @return JSON字符串
 */
UIWrapper.prototype.getAllJobTag = function () {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.getAllJobTag();
};
/**
 * 停止当前运行的测试任务
 * @return 布尔型 true代表成功，false代表失败
 */
UIWrapper.prototype.stopTask = function () {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.stopTask();
};
/**
 * 显示日志浮窗
 * @return 布尔型 true代表成功，false代表失败
 */
UIWrapper.prototype.showLogWindow = function () {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.showLogWindow();
};


/**
 * 关闭日志浮窗
 * @return 布尔型 true代表成功，false代表失败
 */
UIWrapper.prototype.closeLogWindow = function () {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.closeLogWindow();
};




/**
 * 新增启停浮窗按钮
 * @param tag 按钮的标签
 * @param icon 按钮的图标路径，工程中的res/文件下的图片，例如填写 res/a.png
 * @param width 按钮的宽度，单位是dp，系统按钮是36
 * @param height 按钮的高度，单位是dp，系统按钮是36
 * @param index 按钮的加入索引，-1代表往后添加，0代表的是加入到第一位
 * @param onClickListener 按钮的点击回调
 * @return 布尔型 true代表成功，false代表失败
 */
UIWrapper.prototype.addCtrlView = function ( tag, icon,width,  height,index,onClickListener) {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.addCtrlView(tag,icon,width,height,index,onClickListener);
};



/**
 * 更新启停浮窗按钮
 * @param tag 按钮的标签
 * @param icon 按钮的图标路径，工程中的res/文件下的图片，例如填写 res/a.png
 * @param onClickListener 按钮的点击回调
 * @return 布尔型 true代表成功，false代表失败
 */
UIWrapper.prototype.updateCtrlView = function ( tag, icon,onClickListener) {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.updateCtrlView(tag,icon,onClickListener);
};

/**
 * 删除启停浮窗按钮
 * @param tag 按钮的标签，默认都有main_page_ctrl: 主页，log_window_ctrl:日志窗口控制，script_status_ctrl:脚本启停，log_close_ctrl: 日志框关闭
 * @return 布尔型 true代表成功，false代表失败
 */
UIWrapper.prototype.removeCtrlView = function ( tag) {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.removeCtrlView(tag);
};

/**
 * 删除所有启停浮窗按钮
 * @return 布尔型 true代表成功，false代表失败
 */
UIWrapper.prototype.removeAllCtrlView = function () {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.removeAllCtrlView();
};
/**
 * 重置启停浮窗按钮
 * @return 布尔型 true代表成功，false代表失败
 */
UIWrapper.prototype.resetDefaultCtrlView = function () {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.resetDefaultCtrlView();
};

/**
 * 显示启停浮窗
 * @return 布尔型 true代表成功，false代表失败
 */
UIWrapper.prototype.showCtrlWindow = function () {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.showCtrlWindow();
};
/**
 * 关闭启停浮窗
 * @return 布尔型 true代表成功，false代表失败
 */
UIWrapper.prototype.closeCtrlWindow = function () {
    if (uiWrapper == null) {
        return null;
    }
    return uiWrapper.closeCtrlWindow();
};

/**
 * 异步启动环境
 * @param callback
 */
UIWrapper.prototype.startEnvAsync = function (callback) {
    if (uiWrapper == null) {
        return;
    }
    uiWrapper.startEnvAsync(callback);
};

/**
 * 监听UI所在的activity事件
 * @param eventType 事件类型，分别为：onResume：Activity恢复时， onPause: Activity暂停时， onStop：Activity停止时， onDestroy：Activity销毁时
 * @param callback 回调函数
 */
UIWrapper.prototype.onActivityEvent = function (eventType, callback) {
    if (uiWrapper == null) {
        return;
    }
    if("onActivityResult"==eventType){
        uiWrapper.setActivityResultEvent(eventType, callback);
    }else{
        uiWrapper.setActivityEvent(eventType, callback);
    }

};


/**
 * 打开一个activity，通过map参数
 * @param map 例如{"action":""},key的固定只有
 * action,
 * uri,pkg,className,flag,其他的都是参数了
 * @return 布尔型 true 代表成功，false 代表失败
 */
UIWrapper.prototype.openActivity = function (map) {
    if (uiWrapper == null) {
        return;
    }
    map = JSON.stringify(map);
    return uiWrapper.openActivity(map);
};

/**
 * alert，弹窗
 * @param map 例如{"title":""},key的固定只有
 * title 标题
 * msg: 消息
 * cancelText: 取消按钮文字
 * okText: 确定按钮文字
 * cancelable: 是否可取消
 * @param okBtnCallback 点击确认按钮的回调
 * @param cancelBtnCallback 点击取消按钮的回调
 * @param dismissListener 对话框消失的回调
 * @return 布尔型 true 代表成功，false 代表失败
 */
UIWrapper.prototype.alert = function (map, okBtnCallback, cancelBtnCallback, dismissListener) {
    if (uiWrapper == null) {
        return;
    }
    map = JSON.stringify(map);
    return uiWrapper.alert(map, okBtnCallback, cancelBtnCallback, dismissListener);
};

/**
 * inputDialog 输入框弹窗
 * @param map 例如{"title":""},key的固定只有
 * title 标题
 * msg: 消息
 * cancelText: 取消按钮文字
 * okText: 确定按钮文字
 * cancelable: 是否可取消
 * @param okBtnCallback 点击确认按钮的回调
 * @param cancelBtnCallback 点击取消按钮的回调
 * @param dismissListener 对话框消失的回调
 * @return 布尔型 true 代表成功，false 代表失败
 */
UIWrapper.prototype.inputDialog = function (map, okBtnCallback, cancelBtnCallback, dismissListener) {
    if (uiWrapper == null) {
        return;
    }
    map = JSON.stringify(map);
    return uiWrapper.inputDialog(map, okBtnCallback, cancelBtnCallback, dismissListener);
};

/**
 * 自定义对话框
 *  @param params 例如{"cancelable":""},key的固定只有
 * fullScreen 是否全屏
 * cancelable: 是否可取消
 * @param view 原生的视图
 * @param onViewBind 视图绑定时候回调函数
 * @param dismissListener 对话框消失的回调
 * @return 布尔型 true 代表成功，false 代表失败
 */
UIWrapper.prototype.customDialog = function (params, view, onViewBind, dismissListener) {
    if (uiWrapper == null) {
        return;
    }
    return uiWrapper.customDialog(JSON.stringify(params), view, onViewBind, dismissListener);
};

/**
 * 在主线程进行运行函数，相当于 getHandler.post
 * @param delayTime 延迟时间，单位毫秒，如果是0就是理解执行
 * @param callback 回调
 */
UIWrapper.prototype.run = function (delayTime, callback) {
    if (uiWrapper == null) {
        return;
    }
    return uiWrapper.run(delayTime, callback);
};

/**
 * 向网页中注入一个JS函数，H5可以调用该函数，以实现脚本和HTML的互通扩展
 * @param funcName 注入的函数名称
 * @param callback 回调
 * @return 布尔型 true 代表成功，false 代表失败
 */
UIWrapper.prototype.registeH5Function = function (funcName, callback) {
    if (uiWrapper == null) {
        return;
    }
    return uiWrapper.registeH5Function(funcName, callback);
};


/**
 * 取消向网页中注入一个JS函数
 * @param funcName 注入的函数名称
 * @return 布尔型 true 代表成功，false 代表失败
 */
UIWrapper.prototype.unregisteH5Function = function (funcName) {
    if (uiWrapper == null) {
        return;
    }
    return uiWrapper.unregisteH5Function(funcName);
};


/**
 * 设置加载网页的webview组件组件类型，默认是X5浏览器
 * @param type 1：系统自带的webview， 2：X5浏览器
 * @return 布尔型 true 代表成功，false 代表失败
 */
UIWrapper.prototype.setWebViewType = function (type) {
    if (uiWrapper == null) {
        return;
    }
    return uiWrapper.setWebViewType(type);
};

/**
 * 脚本是否正在运行
 * @return 布尔型 true 代表成功，false 代表失败
 */
UIWrapper.prototype.isScriptRunning = function () {
    if (uiWrapper == null) {
        return;
    }
    return uiWrapper.isScriptRunning();
};


