var modules = {};

function Console() {
    this.timerMap = {}
}

Console.prototype.log = function (msg) {
    var s = [];
    for (var i = 1; i < arguments.length; i++) {
        s.push(arguments[i]);
    }
    ecImporter.logd(formatlog(msg), s);
}

Console.prototype.logLine = function (line, msg) {
    var s = [];
    for (var i = 2; i < arguments.length; i++) {
        s.push(arguments[i]);
    }
    ecImporter.logdLine(line, formatlog(msg), s);
}

/**
 * 计时开始
 * @param label 标签
 * @return  {long} 当前时间
 */
Console.prototype.time = function (label) {
    let t = ecImporter.time();
    this.timerMap[label] = t;
    return t;
}

/**
 * 计时结束
 * @param label 标签
 * @return {long} 与计时开始的差值
 */
Console.prototype.timeEnd = function (label) {
    let t1 = ecImporter.time();
    let d2 = this.timerMap[label];
    if (d2 == null || d2 == undefined) {
        return 0;
    }
    let t2 = t1 - d2;
    delete this.timerMap[label];
    return t2;
}

var console = new Console();


function HotUpdateWrapper() {

}

var hotupdater = new HotUpdateWrapper();

/**
 * 获取热更新得请求结果
 * @return {string} 字符串
 */
HotUpdateWrapper.prototype.getUpdateResp = function () {
    return ecImporter.getHotUpdateResp();
}

/**
 * 获取热更新重新的错误
 * @return {string} 字符串
 */
HotUpdateWrapper.prototype.getErrorMsg = function () {
    return ecImporter.hotUpdateErrorMsg();
}

/**
 * 请求热更新接口，如果是false，也有可能是无需更新，可以使用getErrorMsg查看具体得信息
 * @return {bool} true 代表需要更新 false代表无需更新
 */
HotUpdateWrapper.prototype.updateReq = function () {
    return ecImporter.hotUpdateReq();
}


/**
 * 下载热更新请求到得IEC文件
 * @return {string} 下载后热更新文件得路径，如果为空，也有可能是无需更新
 */
HotUpdateWrapper.prototype.updateDownload = function () {
    return ecImporter.hotUpdateDownload();
}


/**
 * 休眠
 * @param miSecond 毫秒
 */
function sleep(miSecond) {
    ecImporter.sleep(miSecond);
}

function toast(msg, extra) {
    if (extra) {
        ecImporter.toastWithSetting(msg, JSON.stringify(extra));
    } else {
        ecImporter.toast(msg);
    }

}

function toast1(msg) {
    ecImporter.toast1(msg);
}

function toast2(msg) {
    ecImporter.toast2(msg);
}

function getHandler() {
    return ecImporter.getHandler();
}


function formatlog(obj) {
    return obj;
}

/**
 * 设置日志等级,可用于关闭或开启日志
 * @param level 日志等级，值分别是 debug,info,warn,error,off，排序分别是debug<info<warn<error<off，
 * 例如 off代表关闭所有级别日志，debug代表打印包含logd,logi,logw,loge的日志，info代表打印包含logi,logw,loge的日志，warn 代表打印包含logw,loge的日志
 * @param displayToast 是否展示toast消息
 * @return {bool} 布尔型 true代表成功 false代表失败
 */
function setLogLevel(level, displayToast) {
    ecImporter.setLogLevel(level, displayToast);
    return true;
}


/**
 * 调试日志
 * @param msg
 */
function logd(msg) {
    var s = [];
    for (var i = 1; i < arguments.length; i++) {
        s.push(arguments[i]);
    }
    ecImporter.logd(formatlog(msg), s);
}


function logdLine(line, msg) {
    var s = [];
    for (var i = 2; i < arguments.length; i++) {
        s.push(arguments[i]);
    }
    ecImporter.logdLine(line, formatlog(msg), s);
}


/**
 * 信息日志
 * @param msg
 */
function logi(msg) {
    var s = [];
    for (var i = 1; i < arguments.length; i++) {
        s.push(arguments[i]);
    }
    ecImporter.logi(formatlog(msg), s);
}


function logiLine(line, msg) {
    var s = [];
    for (var i = 2; i < arguments.length; i++) {
        s.push(arguments[i]);
    }
    ecImporter.logiLine(line, formatlog(msg), s);
}


/**
 * 错误日志
 * @param msg
 */
function loge(msg) {
    var s = [];
    for (var i = 1; i < arguments.length; i++) {
        s.push(arguments[i]);
    }
    ecImporter.loge(formatlog(msg), s);
}


function logeLine(line, msg) {
    var s = [];
    for (var i = 2; i < arguments.length; i++) {
        s.push(arguments[i]);
    }
    ecImporter.logeLine(line, formatlog(msg), s);
}

/**
 * 警告日志
 * @param msg
 */
function logw(msg) {
    var s = [];
    for (var i = 1; i < arguments.length; i++) {
        s.push(arguments[i]);
    }
    ecImporter.logw(formatlog(msg), s);
}


function logwLine(line, msg) {
    var s = [];
    for (var i = 2; i < arguments.length; i++) {
        s.push(arguments[i]);
    }
    ecImporter.logwLine(line, formatlog(msg), s);
}


/**
 * 设置保存日志信息到文件中
 * @param save 是否保存
 * @param path 自定义的文件夹
 * @param size 每个文件分隔的尺寸
 * @return 保存日志文件的目录
 */
function setSaveLogEx(save, path, size, fileName) {
    return ecImporter.setSaveLog(save, path, fileName, size);
}

function setSaveLog(save, path, size) {
    return ecImporter.setSaveLog(save, path, null, size);
}

/**
 * 打印日志的时候，悬浮窗是否展示行号，正式发布，可以不展示行号，不影响调试和保存在文件的日志
 * @param ds  true 代表显示， false 不显示
 */
function setFloatDisplayLineNumber(ds) {
    return ecImporter.setFloatDisplayLineNumber(ds);
}


/**
 * 清除日志
 * @param lines 整型，要清除的行数，-1 代表全部清除
 */
function clearLog(lines) {
    ecImporter.clearLog(lines);
}

/**
 * 打开EC系统设置页面
 * @return true 成功 false 失败
 */
function openECSystemSetting() {
    return ecImporter.openECSystemSetting();
}

/**
 * 打开EC云控设置
 * @return true 成功 false 失败
 */
function openECloudSetting() {
    return ecImporter.openECloudSetting();
}


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
function setECSystemConfig(params) {
    return ecImporter.setECSystemConfig(JSON.stringify(params));
}


/**
 * 载入dex文件
 * @param path 路径，加载顺序分别是插件目录(例如 ab.apk)或者是文件路径(例如 /sdcard/ab.apk)加载
 * @return true 载入成功， false载入失败
 */
function loadDex(path) {
    return ecImporter.loadDex(path);
}

/**
 * 设置重复加载dex，apk，防止插件过大导致加载时间过长
 * @param r 是否重复加载，true 可以重复加载，false 不可以重复加载
 * @return true 载入成功， false载入失败
 */
function setRepeatLoadDex(r) {
    return ecImporter.setRepeatLoadDex(r);
}


/**
 * 执行JS文件或者内容
 * @param type 1=文件，2=直接是JS内容
 * @param content 路径例如/sdcard/a.js或者js的内容
 * @return 布尔型，true代表执行成功， false代表失败
 */
function execScript(type, content) {
    if (type == 1) {
        content = file.readFile(content);
    }
    if (content != undefined && content != null) {
        if (content.length > 0) {
            eval(content);
            return true;
        }
    }
    return false;
    //return ecImporter.execScript(type, content);

}

/**
 * 载入jar文件
 * @param path 路径，加载顺序分别是插件目录(例如 ab.jar)或者是文件路径(例如 /sdcard/ab.jar)加载
 * @return true 载入成功， false载入失败
 */
function loadJar(path) {
    return ecImporter.loadJar(path);
}

/**
 * 退出脚本执行
 */
function exit() {
    ecImporter.exit();
}


/**
 * 判断EC运行的当前线程是否处于退出状态，可用判断脚本是否退出，或者子线程是否退出
 * @return true 已退出
 */
function isScriptExit() {
        return ecImporter.isScriptExit();
}

/**
 * 重启脚本，适合无限循环，或者有异常的情况可以下载最新的iec再次执行，避免进入UI才能热更新,
 * 注意: 该方法威力巨大，请自行控制好是否自动重启，否则只能强杀进程才能停止
 * @param path 新的IEC路径，如果不需要可以填写null
 * @param stopCurrent 是否停止当前的脚本
 * @param delay 延迟多少秒后执行
 * @return bool true 代表成功 false 代表失败
 */
function restartScript(path, stopCurrent, delay) {
    return ecImporter.restartScript(path, stopCurrent, delay);
}


/**
 * 保存res文件夹中的资源文件到指定的路径
 * @param fileName 文件名称，不要加res前缀
 * @param path 要保存到的路径地址，例如/sdcard/aa.txt
 * @return boolean|布尔型 true代表保存成功
 */
function saveResToFile(fileName, path) {
    return ecImporter.saveResToFile(fileName, path);
}

/**
 * 读取res文件夹中的资源文件，并返回字符串
 * @param fileName 文件名称，不要加res前缀
 * @return {string} 如果是null代表没内容
 */
function readResString(fileName) {
    return javaString2string(ecImporter.readResString(fileName));
}

/**
 * 查找IEC的文件
 * 适合版本 EC 8.0.0+
 * @param dir       文件夹名称，null代表只读res/文件夹，没有默认是res文件夹，可以是类似 res/aaa/这样的文件夹
 * @param names     文件名称前缀,null代表不匹配， 例如aaa,多个前缀用|分割，例如 aaa|bb|cc
 * @param ext       文件扩展名 ,null代表不匹配，例如.png,多个扩展用|分割，例如 .png|.jpg|.bmp
 * @param recursion 是否递归子目录，true代表递归
 * @return {array} 文件名称JSON数组
 */
function findIECFile(dir, names, ext, recursion) {
    let s = ecImporter.findIECFile(dir, names, ext, recursion);
    if (s == null) {
        return null;
    }
    s = javaString2string(s);
    try {
        return JSON.parse(s);
    } catch (e) {
        return null;
    }
    return null;
}


/**
 * 读取IEC文件中的资源文件，并返回字符串
 * @param fileName 文件名称，如果放在某个文件夹下 需要加上文件名称
 * @return {string} 如果是null代表没内容
 */
function readIECFileAsString(fileName) {
    return javaString2string(ecImporter.getPkgContent(fileName));
}

/**
 * 读取IEC文件中的资源文件，并返回java的直接数组
 * @param fileName 文件名称，如果放在某个文件夹下 需要加上文件名称
 * @return {字节数组} 如果是null代表没内容
 */
function readIECFileAsByte(fileName) {
    return ecImporter.getPkgContentAsByte(fileName);
}


/**
 * 读取res文件夹中的资源文件，并返Bitmap图片对象
 * @param fileName 文件名称，不要加res前缀
 * @return {Bitmap} 如果是null代表没内容
 */
function readResBitmap(fileName) {
    return ecImporter.readResBitmap(fileName);
}


/**
 * 启动自动化环境
 * @return 布尔型  true代表启动成功，false代表启动失败
 */
function startEnv() {
    return ecImporter.startEnv();
}

/**
 * 守护自动化环境,
 * 如果是激活或者无障碍保活的情况下，尽量保证自动服务不掉线
 * @param daemon 是否守护自动化环境 true 是，false 否
 * @return 布尔型  true代表启动成功，false代表启动失败
 */
function daemonEnv(daemon) {
    return ecImporter.setDaemonAutoService(daemon);
}


/**
 * 关闭自动化环境
 * @param skinAccPage 无障碍模式停止失败 是否跳转到开启无障碍页面
 * @return 布尔型  true代表启动成功，false代表启动失败
 */
function closeEnv(skinAccPage) {
    return ecImporter.closeEnv(skinAccPage);
}

/**
 * 设置壁纸服务函数
 * @return 布尔型  true代表启动成功，false代表启动失败
 */
function setWallpaperService() {
    return ecImporter.setWallpaperService();
}

/**
 * 是否设置壁纸成功
 * @return 布尔型  true代表成功，false代表失败
 */
function isWallpaperServiceSet() {
    return ecImporter.isWallpaperServiceSet();
}


/**
 * 自动化服务是否正常
 * @return 布尔型  true代表正常，false代表不正常
 */
function isServiceOk() {
    return ecImporter.isServiceOk();
}

/**
 * 设置要执行的IEC文件路径
 * @param path 文件路径
 * @return 布尔型，true代表成功  false代表失败
 */
function setIECPath(path) {
    return ecImporter.setIECPath(path);
}


/**
 * 获取要执行的IEC文件路径
 * @return {string}，null代表无。ts.iec 代表是包内iec文件，其他代代表存储路径中的文件
 */
function getIECPath() {
    return ecImporter.getIECPath();
}

function javaString2string(x) {
    if (x == null) {
        return null;
    }
    return "" + x;
}

function setStopCallback(callback) {
    ecImporter.onScriptStopCallback(callback);
}

function setExceptionCallback(callback) {
    ecImporter.onScriptExCallback(callback);
}

/**
 * 对事件进行监听
 * @param event 事件类型 类型有:
 * activity-change 页面切换，OK
 * notification-show：状态栏通知展示， OK
 * toast-show：Toast消息展示， OK
 * key-down：按键按下， OK
 * key-up：按键弹起 OK
 * acc-service-interrupt：无障碍服务被中断 OK
 * acc-service-destroy： 无障碍服务被销毁 OK
 * acc-event：无障碍节点事件 OK
 * acc-service-connected: 无障碍服务连接成功 OK
 * auto-service-status: 自动化服务可用状态
 *
 * @param callback 事件回调
 * @return {bool}  | true 成功，false失败
 */
function observeEvent(event, callback) {
    return observeEvents.on(event, callback);
}

/**
 * 取消事件监听
 * @param event 事件类型
 * @return {bool} | true 成功，false失败
 */
function cancelObserveEvent(event) {
    return observeEvents.cancelEvent(event);
}

/**
 * 时间函数
 * @return {long} 毫秒级别的long时间
 */
function time() {
    return ecImporter.time();
}

/**
 * 申请动态权限
 * 适合版本 EC 7.9.0+
 * @param permissionArray 动态权限数组，可以是多个
 * @timeout 申请超时时间 单位是毫秒
 * @return {bool} true 代表有权限  false代表无权限或申请失败
 */
function requestRuntimePermission(permissionArray, timeout) {
    if (permissionArray == null || permissionArray == undefined) {
        return false;
    }
    let d = JSON.stringify(permissionArray)
    return ecImporter.requestRuntimePermission(d, timeout);
}


/**
 * 格式化时间函数例如：yyyy-MM-dd HH:mm:ss
 * @return {string} 格式话之后的当前时间
 */
function timeFormat(format) {
    return ecImporter.timeFormat(format);
}

function object2JsonString(o) {
    if (o == null) {
        return "{}";
    }
    if ((typeof o) === 'string') {
        return o;
    }
    return JSON.stringify(o);
}

/**
 * 激活自己
 * @param activeType 激活类型，0 自动，1 模式1 2 模式2
 * @param timeout 超时时间
 * @return {string} 激活成功：代表成功，其他都是错误消息
 */
function activeSelf(activeType, timeout) {
    return ecImporter.activeSelf(activeType, timeout);
}

/**
 * 通过IP激活其他设备
 * @param ip 设备的IP
 * @param activeType 激活类型，0 自动，1 模式1 2 模式2
 * @param timeout 超时时间
 * @return {string} 激活成功：代表成功，其他都是错误消息
 */
function activeDevice(ip, activeType, timeout) {
    return ecImporter.activeDevice(ip, activeType, timeout);
}



