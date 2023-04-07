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


/**
 * 休眠
 * @param miSecond 毫秒
 */
function sleep(miSecond) {
    ecImporter.sleep(miSecond);
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
 * 获取中控版本
 * @return {string} 字符串 例如 2.9.0
 */
function version() {
    return ecImporter.version();
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
 * 设置代理请求超时
 * @param envTimeout 启动自动化超时时间，单位是毫秒，可以设置为 10000 - 15000
 * @param readTimeout 其他的请求超时时间，单位是毫秒，可以设置为 2000 - 5000
 * @return {boolean} true代表成功
 */
function setAgentTimeout(envTimeout, readTimeout) {
    return ecImporter.setAgentTimeout(envTimeout, readTimeout);
}

/**
 * 执行JS文件或者内容
 * @param type 1=文件，2=直接是JS内容
 * @param content 路径例如c:/a.js或者js的内容
 * @return 布尔型，true代表执行成功， false代表失败
 */
function execScript(type, content) {
    if (type == 1) {
        if (file.exists(content)) {
            let c = file.readFile(content);
            if (c != null && c != undefined && c.length > 0) {
                content = c;
            }
        }
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
 * 获取沙盒的文件夹路径
 * @return {string} 字符串
 */
function getSandBoxDir() {
    return ecImporter.getSandBoxDir();
}


/**
 * 判断EC运行的当前线程是否处于退出状态，可用判断脚本是否退出，或者子线程是否退出
 * @return true 已退出
 */
function isScriptExit() {
    return java.lang.Thread.currentThread().getName().contains("-interrupt")
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
 * @return {BufferedImage} 如果是null代表没内容
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
 * 获取启动自动化的错误消息
 * @return {string} 消息字符串
 */
function getStartEnvMsg() {
    return ecImporter.getStartEnvMsg();
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
 * @return 布尔型  true代表启动成功，false代表启动失败
 */
function closeEnv() {
    return ecImporter.closeEnv();
}

/**
 * 当前运行的程序 bundleId
 * @return {string} 当前运行的程序 bundleId
 */
function activeAppInfo() {
    return ecImporter.activeAppInfo();
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
 * 时间函数
 * @return {long} 毫秒级别的long时间
 */
function time() {
    return ecImporter.time();
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




