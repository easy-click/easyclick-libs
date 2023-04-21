

function DeviceWrapper() {

}

var device = new DeviceWrapper();
/**
 * 取得屏幕宽度
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
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
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @return 整型
 */
DeviceWrapper.prototype.getScreenHeight = function () {
    if (deviceWrapper == null) {
        return;
    }
    return deviceWrapper.getScreenHeight();
};
/**
 * 获取imei号
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @return string
 */
DeviceWrapper.prototype.getIMEI = function () {
    if (deviceWrapper == null) {
        return;
    }
    return javaString2string(deviceWrapper.getIMEI());
};
/**
 * 取得手机品牌
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @return string
 */
DeviceWrapper.prototype.getBrand = function () {
    if (deviceWrapper == null) {
        return;
    }
    return javaString2string(deviceWrapper.getBrand());
};
/**
 * 取得手机机型
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @return 字符串
 */
DeviceWrapper.prototype.getModel = function () {
    if (deviceWrapper == null) {
        return;
    }
    return javaString2string(deviceWrapper.getModel());
};

/**
 * 取得手机卡号
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @return 字符串
 */
DeviceWrapper.prototype.getImsi = function () {
    if (deviceWrapper == null) {
        return;
    }
    return javaString2string(deviceWrapper.getImsi());
};
/**
 * 取得手机ROM序列号
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @return 字符串
 */
DeviceWrapper.prototype.getSerial = function () {
    if (deviceWrapper == null) {
        return;
    }
    return javaString2string(deviceWrapper.getSerial());
};
/**
 * 取得手机SDK版本号，例如 23
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @return 整型
 */
DeviceWrapper.prototype.getSdkInt = function () {
    if (deviceWrapper == null) {
        return;
    }
    return deviceWrapper.getSdkInt();
};
/**
 * 取得手机版本号,例如 6.0等字符串
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @return 字符串
 */
DeviceWrapper.prototype.getOSVersion = function () {
    if (deviceWrapper == null) {
        return;
    }
    return javaString2string(deviceWrapper.getOSVersion());
};

/**
 * 取得Android ID
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @return 字符串
 */
DeviceWrapper.prototype.getAndroidId = function () {
    if (deviceWrapper == null) {
        return;
    }
    return javaString2string(deviceWrapper.getAndroidId());
};
/**
 * 取得屏幕的亮度
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @return 整型
 */
DeviceWrapper.prototype.getBrightness = function () {
    if (deviceWrapper == null) {
        return;
    }
    return deviceWrapper.getBrightness();
};
/**
 * 设置屏幕的亮度
 *
 * @param b 整型
 */
DeviceWrapper.prototype.setBrightness = function (b) {
    if (deviceWrapper == null) {
        return;
    }
    deviceWrapper.setBrightness(b);
};
/**
 * 取得屏幕亮度模式
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @return 整型， 0 手动调节，1 自动调节
 */
DeviceWrapper.prototype.getBrightnessMode = function () {
    if (deviceWrapper == null) {
        return;
    }
    return deviceWrapper.getBrightnessMode();
};
/**
 * 设置屏幕亮度调节模式
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param b 0 手动调节，1 自动调节
 */
DeviceWrapper.prototype.setBrightnessMode = function (b) {
    if (deviceWrapper == null) {
        return;
    }
    deviceWrapper.setBrightnessMode(b);
};

/**
 * 取得音乐的音量
 * @return {undefined}
 */
DeviceWrapper.prototype.getMusicVolume = function () {
    if (deviceWrapper == null) {
        return;
    }
    return deviceWrapper.getMusicVolume();
};
/**
 * 设置音乐的音量
 * @param b 整型
 */
DeviceWrapper.prototype.setMusicVolume = function (b) {
    if (deviceWrapper == null) {
        return;
    }
    deviceWrapper.setMusicVolume(b);
};

/**
 * 获取通知的音量
 * @return {undefined}
 */
DeviceWrapper.prototype.getNotificationVolume = function () {
    if (deviceWrapper == null) {
        return;
    }
    return deviceWrapper.getNotificationVolume();
};
/**
 * 设置通知的音量
 * @param b 整型
 */
DeviceWrapper.prototype.setNotificationVolume = function (b) {
    if (deviceWrapper == null) {
        return;
    }
    deviceWrapper.setNotificationVolume(b);
};

/**
 * 获取闹钟的音量
 * @return {undefined}
 */
DeviceWrapper.prototype.getAlarmVolume = function () {
    if (deviceWrapper == null) {
        return;
    }
    return deviceWrapper.getAlarmVolume();
};

/**
 * 设置闹钟的音量
 * @param b 整型
 */
DeviceWrapper.prototype.setAlarmVolume = function (b) {
    if (deviceWrapper == null) {
        return;
    }
    deviceWrapper.setAlarmVolume(b);
};
/**
 * 获取音乐最大音量
 * @return {undefined}
 */
DeviceWrapper.prototype.getMusicMaxVolume = function () {
    if (deviceWrapper == null) {
        return;
    }
    return deviceWrapper.getMusicMaxVolume();
};

/**
 * 获取通知最大音量
 * @return {undefined}
 */
DeviceWrapper.prototype.getNotificationMaxVolume = function () {
    if (deviceWrapper == null) {
        return;
    }
    return deviceWrapper.getNotificationMaxVolume();
};
/**
 * 获取闹钟最大音量
 * @return {undefined}
 */
DeviceWrapper.prototype.getAlarmMaxVolume = function () {
    if (deviceWrapper == null) {
        return;
    }
    return deviceWrapper.getAlarmMaxVolume();
};

/**
 * 取得电量
 * @return {undefined}
 */
DeviceWrapper.prototype.getBattery = function () {
    if (deviceWrapper == null) {
        return;
    }
    return deviceWrapper.getBattery();
};

/**
 * 取得总内存
 * @return {undefined}
 */
DeviceWrapper.prototype.getTotalMem = function () {
    if (deviceWrapper == null) {
        return;
    }
    return deviceWrapper.getTotalMem();
};

/**
 * 取得可用内存
 * @return {undefined}
 */
DeviceWrapper.prototype.getAvailMem = function () {
    if (deviceWrapper == null) {
        return;
    }
    return deviceWrapper.getAvailMem();
};
/**
 * 是否正在充电
 * @return {undefined}
 */
DeviceWrapper.prototype.isCharging = function () {
    if (deviceWrapper == null) {
        return;
    }
    return deviceWrapper.isCharging();
};


/**
 * 发出震动 单位是毫秒
 * @param millis
 */
DeviceWrapper.prototype.vibrate = function (millis) {
    if (deviceWrapper == null) {
        return;
    }
    deviceWrapper.vibrate(millis);
};

/**
 * 取消震动
 */
DeviceWrapper.prototype.cancelVibration = function () {
    if (deviceWrapper == null) {
        return;
    }
    deviceWrapper.cancelVibration();
};
/**
 * 获取mac地址
 * @return 字符串或者null
 */
DeviceWrapper.prototype.getMacAddress = function () {
    if (deviceWrapper == null) {
        return;
    }
    return javaString2string(deviceWrapper.getMacAddress());
};

/**
 * 保持屏幕唤醒状态
 */
DeviceWrapper.prototype.keepScreenOn = function () {
    if (deviceWrapper == null) {
        return;
    }
    deviceWrapper.keepScreenOn();
};

/**
 * 保持设备唤醒
 * @param flag 参考安卓PowerManager中的唤醒标准
 */
DeviceWrapper.prototype.keepAwake = function (flag) {
    if (deviceWrapper == null) {
        return;
    }
    deviceWrapper.keepAwake(flag);
};

/**
 * 保持设备昏暗状态
 */
DeviceWrapper.prototype.keepScreenDim = function () {
    if (deviceWrapper == null) {
        return;
    }
    deviceWrapper.keepScreenDim();
};
/**
 * 取消保持唤醒状态
 */
DeviceWrapper.prototype.cancelKeepingAwake = function () {
    if (deviceWrapper == null) {
        return;
    }
    deviceWrapper.cancelKeepingAwake();
};



/**
 * 取得talkingdata三方统计定义的唯一设备标识
 * @return {字符串}
 */
DeviceWrapper.prototype.tcDeviceId = function () {
    if (deviceWrapper == null) {
        return;
    }
    return deviceWrapper.tcDeviceId();
};


