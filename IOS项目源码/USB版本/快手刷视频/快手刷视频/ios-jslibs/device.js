function DeviceWrapper() {

}

var device = new DeviceWrapper();


/**
 * 获取设备的信息
 *  例如: {"orientation":"2","screenWidth":"1334",
 *  "productId":"4776","connectType":"USB","screenHeight":"750",
 *  "orientationClick":"1","scale":2,
 *  "deviceNo":"6a290cdc0b6db0565955355b157acc090e33f76e",
 *  "deviceId":"6a290cdc0b6db0565955355b157acc090e33f76e","deviceName":"iPhone7",
 *  "serialNo":"F4GSPUAZHG6W","mjpegPort":"18600","productVersion":"15.2",
 *  "osVersion":"15.2","port":"18500","model":"iPhone","productType":"iPhone9,1"}
 *  orientation：:方向 1 竖屏 2 横屏
 *  screenWidth：:屏幕宽度
 *  screenHeight：:屏幕高度
 *  orientationClick：当前坐标系方向，1竖屏 2横屏
 * deviceId：设备ID
 * serialNo：设备序列号
 * deviceName：设备名称
 * productVersion：设备版本
 * model：设备型号
 * @return JSON字符串
 */
DeviceWrapper.prototype.getDeviceInfo = function () {
    if (deviceWrapper == null) {
        return;
    }
    return deviceWrapper.getDeviceInfo();
};

/**
 * 取得屏幕宽度
 *
 * @return 整型
 */
DeviceWrapper.prototype.getScreenWidth = function () {
    if (deviceWrapper == null) {
        return;
    }
    return deviceWrapper.getScreenWidth();
};


/**
 * 取得屏幕高度
 * @return 整型
 */
DeviceWrapper.prototype.getScreenHeight = function () {
    if (deviceWrapper == null) {
        return;
    }
    return deviceWrapper.getScreenHeight();
};
/**
 * 获取设备号
 * @return string
 */
DeviceWrapper.prototype.getDeviceId = function () {
    if (deviceWrapper == null) {
        return null;
    }
    return javaString2string(deviceWrapper.getDeviceId());
};

/**
 * 获取中控设备号别名
 * @return string
 */
DeviceWrapper.prototype.getDeviceAlias = function () {
    if (deviceWrapper == null) {
        return null;
    }
    return javaString2string(deviceWrapper.getDeviceAlias());
};


/**
 * 获取iPhone设备的名称
 * @return string
 */
DeviceWrapper.prototype.getDeviceName = function () {
    if (deviceWrapper == null) {
        return null;
    }
    return javaString2string(deviceWrapper.getDeviceName());
};


/**
 * 获取设备序列号，在手机的设置中可以查询到
 * @return string
 */
DeviceWrapper.prototype.getSerialNo = function () {
    if (deviceWrapper == null) {
        return;
    }
    return javaString2string(deviceWrapper.getSerialNo());
};


/**
 * 获取屏幕缩放比
 * @return float
 */
DeviceWrapper.prototype.getScale = function () {
    if (deviceWrapper == null) {
        return;
    }
    return deviceWrapper.getScale();
};


/**
 * 取得手机机型
 * @return 字符串
 */
DeviceWrapper.prototype.getModel = function () {
    if (deviceWrapper == null) {
        return;
    }
    return javaString2string(deviceWrapper.getModel());
};

/**
 * 取得手机版本号,例如 6.0等字符串
 * @return 字符串
 */
DeviceWrapper.prototype.getOSVersion = function () {
    if (deviceWrapper == null) {
        return;
    }
    return javaString2string(deviceWrapper.getOSVersion());
};


/**
 * 取得电量
 * @return {int} 1 - 100
 */
DeviceWrapper.prototype.getBattery = function () {
    if (deviceWrapper == null) {
        return;
    }
    return deviceWrapper.getBattery();
};

/**
 * 获取当前设备的安装的程序列表
 * @return {string} json 字符串
 */
DeviceWrapper.prototype.applist = function () {
    if (deviceWrapper == null) {
        return;
    }
    return deviceWrapper.applist();
};

/**
 * 是否正在充电
 * @return {boolean} true 充电  false 不充电
 */
DeviceWrapper.prototype.isCharging = function () {
    if (deviceWrapper == null) {
        return;
    }
    return deviceWrapper.isCharging();
};




