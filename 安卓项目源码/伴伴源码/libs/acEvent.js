function AcEventWrapper() {

}

var acEvent = new AcEventWrapper();
/**
 * 当前Sdk的版本号
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @return string 例如1.0.1
 */
AcEventWrapper.prototype.version = function () {
    if (acEventWrapper == null) {
        return null;
    }
    return javaString2string(acEventWrapper.version());
};


/**
 * 将元素节点变成XML
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @return 字符串 所有节点的xml字符串
 */
AcEventWrapper.prototype.dumpXml = function () {
    if (acEventWrapper == null) {
        return null;
    }
    return javaString2string(acEventWrapper.dumpXml());
};

/**
 * 打开通知栏
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @return 布尔型 true if successful, else return false
 */
AcEventWrapper.prototype.openNotification = function () {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.openNotification();
};

/**
 * 打开快速设置
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @return 布尔型 true if successful, else return false
 */
AcEventWrapper.prototype.openQuickSettings = function () {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.openQuickSettings();
};


/**
 * 返回桌面
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @return 布尔型 true 成功 false 失败
 */
AcEventWrapper.prototype.home = function () {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.home();
};


/**
 * 分割屏幕
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @return 布尔型 true 成功 false 失败
 */
AcEventWrapper.prototype.splitScreen = function () {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.splitScreen();
};


/**
 * 模拟电源键
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @return 布尔型 true 成功 false 失败
 */
AcEventWrapper.prototype.power = function () {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.power();
};
/**
 * 返回键
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @return 布尔型 true 成功 false 失败
 */
AcEventWrapper.prototype.back = function () {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.back();
};

/**
 * 最近使用的APP
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @return 布尔型 true 成功 false 失败
 */
AcEventWrapper.prototype.recentApps = function () {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.recentApps();
};

/**
 * 通过选择器获取元素文本
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @param selectors 选择器的
 * @return 字符串数组 文本字符串
 */
AcEventWrapper.prototype.getText = function (selectors) {
    if (acEventWrapper == null) {
        return null;
    }
    var ds = acEventWrapper.getText(selectors.toJSONString());
    if (ds == null || ds=="") {
        return null;
    }
    return JSON.parse(ds);
};


AcEventWrapper.prototype.lockNode = function () {
    if (acEventWrapper == null) {
        return null;
    }
    acEventWrapper.lockNode();
};
AcEventWrapper.prototype.releaseNode = function () {
    if (acEventWrapper == null) {
        return null;
    }
    acEventWrapper.releaseNode();
};

/**
 * 设置无障碍模式下各种手势模式事件的操作类型，默认是异步
 * @param mode 1 代表异步，2代表同步
 * @param bool true代表成功 false代表失败
 */
AcEventWrapper.prototype.setAccActionMode = function (mode) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.setAccActionMode(mode);
}


/**
 * 通过选择器 获取节点信息
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @param selectors 选择器
 * @return 节点信息集合
 */
AcEventWrapper.prototype.getNodeInfo = function (selectors, timeout) {
    if (acEventWrapper == null) {
        return null;
    }
    var d = acEventWrapper.getNodeInfo(selectors.toJSONString(), timeout);
    return nodeInfoArray(d);
};


AcEventWrapper.prototype.getNodeInfoForNode = function (nid, selectors, timeout) {
    if (acEventWrapper == null) {
        return null;
    }
    var d = acEventWrapper.getNodeInfoForNode(nid, selectors.toJSONString(), timeout);
    return nodeInfoArray(d);
};

/**
 * 长点击选择器选中的元素
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @param selectors 选择器 {@link S}
 * @return 布尔型 true 成功 false 失败
 */
AcEventWrapper.prototype.longClick = function (selectors) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.longClick(selectors.toJSONString());
};


/**
 * <p>执行从一个坐标到另一个坐标的拖动</p>
 * </p>
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @param startX 起始坐标的X轴值
 * @param startY 起始坐标的Y轴值
 * @param endX   结束坐标的X轴值
 * @param endY   结束坐标的Y轴值
 * @param duration 持续时长 单位毫秒
 * @return 布尔型 true 拖动成功, false 拖动失败
 */
AcEventWrapper.prototype.drag = function (startX, startY, endX, endY, duration) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.drag(startX, startY, endX, endY, duration);
};

/**
 * 通过选择器拖动某个元素到目标元素
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @param selectors 选择器 {@link S}
 * @param destObj   目标元素选择器
 * @param duration 持续时长 单位毫秒
 * @return 布尔型 true 成功 false 失败
 */
AcEventWrapper.prototype.dragTo = function (selectors, destObj, duration) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.dragTo(selectors.toJSONString(), destObj.toJSONString(), duration);
};
/**
 * 通过选择器拖动某个元素到目标X Y 坐标
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @param selectors 原始元素选择器
 * @param endX      目标 X 坐标
 * @param endY      目标 Y 坐标
 * @param duration 持续时长 单位毫秒
 * @return 布尔型 true 成功 false 失败
 */
AcEventWrapper.prototype.dragToPoint = function (selectors, endX, endY, duration) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.dragToPoint(selectors.toJSONString(), endX, endY, duration);
};

/**
 * 点击某个坐标
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @param x X坐标
 * @param y Y坐标
 * @return  布尔型 true 成功，false 失败
 */
AcEventWrapper.prototype.clickPoint = function (x, y) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.clickPoint(x, y);
};

/**
 * 双击某个坐标
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @param x X坐标
 * @param y Y坐标
 * @return  布尔型 true 成功，false 失败
 */
AcEventWrapper.prototype.doubleClickPoint = function (x, y) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.doubleClickPoint(x, y);
};
/**
 * 点击某个区域中心坐标点
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @param rect 区域
 * @return  布尔型 true 成功，false 失败
 */
AcEventWrapper.prototype.clickCenter = function (rect) {
    if (acEventWrapper == null) {
        return null;
    }
    if (typeof rect == "string") {

    } else {
        rect = rect.toJSONString();
    }
    return acEventWrapper.clickCenter(rect);
};


/**
 * 长按点击某个坐标
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @param x X坐标
 * @param y Y坐标
 * @return 布尔型  true 代表成功，false 代表失败
 */
AcEventWrapper.prototype.longClickPoint = function (x, y) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.longClickPoint(x, y);
};

/**
 * 通过选择器点击元素
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @param selectors {@link S}数组
 * @return 布尔型 true 代表点击成功 false代表点击失败
 */
AcEventWrapper.prototype.click = function (selectors) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.click(selectors.toJSONString());
};
AcEventWrapper.prototype.clickEx = function (selectors) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.clickEx(selectors.toJSONString());
};
AcEventWrapper.prototype.longClickEx = function (selectors) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.longClickEx(selectors.toJSONString());
};

AcEventWrapper.prototype.clickExNodeInfo = function (uniqueId) {
    if (agentEventWrapper == null) {
        return null;
    }
    return acEventWrapper.clickExNodeInfo(uniqueId);
};

AcEventWrapper.prototype.longClickExNodeInfo = function (uniqueId) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.longClickExNodeInfo(uniqueId);
};

/**
 * 是否滚动到底部了，如果查不到元素也会返回false
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 * @param direction 滚动方向 UP,DOWN,LEFT,RIGHT
 * @param selectors 选择器
 * @return false 代表未滚动到位，true 代表滚动完成了
 */
AcEventWrapper.prototype.isScrollEnd = function (direction, selectors) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.isScrollEnd(direction, selectors.toJSONString());
};

/**
 * 通过选择器随机点击元素，有可能选中的是多个元素节点
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @param selectors {@link S}数组
 * @return 布尔型 true 代表点击成功 false代表点击失败
 */
AcEventWrapper.prototype.clickRandom = function (selectors) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.clickRandom(selectors.toJSONString());
};
AcEventWrapper.prototype.clickRandomEx = function (selectors) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.clickRandomEx(selectors.toJSONString());
};
/**
 * 随机点击区域中的坐标
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @param rect 区域 {@link Rect}
 * @return 布尔型 成功或者失败
 */
AcEventWrapper.prototype.clickRandomRect = function (rect) {
    if (acEventWrapper == null) {
        return;
    }
    if (rect == null) {
        return false;
    }
    if (typeof rect == "string") {

    } else {
        rect = rect.toJSONString();
    }
    return acEventWrapper.clickRandomRect(rect);
};
/**
 * 随机长点击区域中的坐标
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @param rect 区域 {@link Rect}
 * @return 布尔型 成功或者失败
 */
AcEventWrapper.prototype.longClickRandomRect = function (rect) {
    if (acEventWrapper == null) {
        return;
    }
    if (rect == null) {
        return false;
    }
    if (typeof rect == "string") {

    } else {
        rect = rect.toJSONString();
    }
    return acEventWrapper.longClickRandomRect(rect);
};


/**
 * 通过选择器输入数据
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @param selectors 选择器
 * @param content 数据字符串
 * @return 布尔型 true 代表成功 false代表失败
 */
AcEventWrapper.prototype.inputText = function (selectors, content) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.inputText(selectors.toJSONString(), content);
};
/**
 * 通过选择器粘贴数据
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @param selectors 选择器
 * @param content 数据字符串
 * @return 布尔型 true 代表成功 false代表失败
 */
AcEventWrapper.prototype.pasteText = function (selectors, content) {
    if (acEventWrapper == null) {
        return null;
    }
    utils.setClipboardText(content);
    return acEventWrapper.pasteText(selectors.toJSONString(), content);
};


/**
 * 当前是否是我们的输入法
 *
 * @return 布尔型 true代表是，false代表不是
 */
AcEventWrapper.prototype.currentIsOurIme = function () {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.currentIsOurIme();
};


/**
 * 使用输入法输入内容，前提是已经设置本程序的输入法为默认输入法
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @param content   数据字符串
 * @param selectors {@link S}
 * @return 布尔型 true 代表成功 false代表失败
 */
AcEventWrapper.prototype.imeInputText = function (selectors, content) {
    if (acEventWrapper == null) {
        return null;
    }
    if (selectors == null) {
        return acEventWrapper.imeInputText(null, content);
    }
    return acEventWrapper.imeInputText(selectors.toJSONString(), content);
};

AcEventWrapper.prototype.imeInputKeyCode = function (selectors, content) {
    if (acEventWrapper == null) {
        return null;
    }
    if (selectors == null) {
        return acEventWrapper.imeInputKeyCode(null, content);
    }
    return acEventWrapper.imeInputKeyCode(selectors.toJSONString(), content);
};


/**
 * 通过选择器判断元素是否存在
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @param selectors {@link S}
 * @return 布尔型 true 代表成功 false代表失败
 */
AcEventWrapper.prototype.has = function (selectors) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.has(selectors.toJSONString());
};

/**
 * 从一个坐标滑动到另一个坐标
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @param startX 起始坐标的X轴值
 * @param startY 起始坐标的Y轴值
 * @param endX   结束坐标的X轴值
 * @param endY   结束坐标的Y轴值
 * @param duration 持续时长 单位毫秒
 * @return 布尔型 true 滑动成功, false 滑动失败
 */
AcEventWrapper.prototype.swipeToPoint = function (startX, startY, endX, endY, duration) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.swipeToPoint(startX, startY, endX, endY, duration);
};

/**
 * 通过选择器从上往下滑动
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @param selectors 节点选择器
 * @param distance  滑动距离 单位是像素
 * @param duration 持续时长 单位毫秒
 * @return 布尔型 true 代表成功 false 代表失败
 */
AcEventWrapper.prototype.swipeFromUpToDown = function (selectors, distance, duration) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.swipeFromUpToDown(selectors.toJSONString(), distance, duration);
};

/**
 * 通过选择器从下往上滑动
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @param selectors 节点选择器
 * @param distance  滑动距离 单位是像素
 * @param duration 持续时长 单位毫秒
 * @return 布尔型 true 代表成功 false 代表失败
 */
AcEventWrapper.prototype.swipeFromDownToUp = function (selectors, distance, duration) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.swipeFromDownToUp(selectors.toJSONString(), distance, duration);
};

/**
 * 通过选择器从右往左滑动
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @param selectors 节点选择器
 * @param distance  滑动距离 单位是像素
 * @param duration 持续时长 单位毫秒
 * @return 布尔型 true 代表成功 false 代表失败
 */
AcEventWrapper.prototype.swipeFromRightToLeft = function (selectors, distance, duration) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.swipeFromRightToLeft(selectors.toJSONString(), distance, duration);
};

/**
 * 通过选择器从左往右滑动
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @param selectors 节点选择器
 * @param distance  滑动距离 单位是像素
 * @param duration 持续时长 单位毫秒
 * @return 布尔型 true 代表成功 false 代表失败
 */
AcEventWrapper.prototype.swipeFromLeftToRight = function (selectors, distance, duration) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.swipeFromLeftToRight(selectors.toJSONString(), distance, duration);
};


/**
 * 通过选择器滑动到某个坐标
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @param selectors 节点选择器
 * @param endX      结束的X坐标
 * @param endY      结束的Y坐标
 * @param duration 持续时长 单位毫秒
 * @return 布尔型 true 代表成功 false 代表失败
 */
AcEventWrapper.prototype.swipe = function (selectors, endX, endY, duration) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.swipe(selectors.toJSONString(), endX, endY, duration);
};


/**
 * 通过选择器清除文本数据
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @param selectors 节点选择器
 */
AcEventWrapper.prototype.clearTextField = function (selectors) {
    if (acEventWrapper == null) {
        return false;
    }
    return acEventWrapper.clearTextField(selectors.toJSONString());
};

/**
 * 向上滑动
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @param distance 滑动距离 单位像素
 * @param duration 持续时长 单位毫秒
 * @return 布尔型 true 代表成功 false 代表失败
 */
AcEventWrapper.prototype.swipeFromDownToUpInScreen = function (distance, duration) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.swipeFromDownToUpInScreen(distance, duration);
};
/**
 * 向下滑动
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @param distance 滑动距离 单位像素
 * @param duration 持续时长 单位毫秒
 * @return 布尔型 true 代表成功 false 代表失败
 */
AcEventWrapper.prototype.swipeFromUpToDownInScreen = function (distance, duration) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.swipeFromUpToDownInScreen(distance, duration);
};
/**
 * 向左滑动
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @param distance 滑动距离 单位像素
 * @param duration 持续时长 单位毫秒
 * @return 布尔型 true 代表成功 false 代表失败
 */
AcEventWrapper.prototype.swipeFromRightToLeftInScreen = function (distance, duration) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.swipeFromRightToLeftInScreen(distance, duration);
};


/**
 * 向右滑动
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @param distance 滑动距离 单位像素
 * @param duration 持续时长 单位毫秒
 * @return 布尔型 true 代表成功 false 代表失败
 */
AcEventWrapper.prototype.swipeFromLeftToRightInScreen = function (distance, duration) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.swipeFromLeftToRightInScreen(distance, duration);
};


/**
 * 取得当前运行的Activity类名
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @return string 类名字符串
 */
AcEventWrapper.prototype.getRunningActivity = function () {
    if (acEventWrapper == null) {
        return null;
    }
    return javaString2string(acEventWrapper.getRunningActivity());
};
/**
 * 取得当前运行的App包名
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @return string 包名字符串
 */
AcEventWrapper.prototype.getRunningPkg = function () {
    if (acEventWrapper == null) {
        return null;
    }
    return javaString2string(acEventWrapper.getRunningPkg());
};


/**
 * 将通知发射处理，相当于点击了通知栏
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @param seqId 通知栏的对象ID
 * @return 布尔型 true 代表发射通知成功
 */
AcEventWrapper.prototype.shotNotification = function (seqId) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.shotNotification(seqId);
};


/**
 * 通知取消处理
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @param seqId 通知栏的对象ID
 * @return 布尔型 true 代表取消通知成功
 */
AcEventWrapper.prototype.cancelNotification = function (seqId) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.cancelNotification(seqId);
};
AcEventWrapper.prototype.ignoreNotification = function (seqId) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.ignoreNotification(seqId);
};

/**
 * 从缓存中清除所有的Toast消息数据
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 */
AcEventWrapper.prototype.clearAllToast = function () {
    if (acEventWrapper == null) {
        return null;
    }
    acEventWrapper.clearAllToast();
};
/**
 * 从缓存中清除所有的通知栏消息数据
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 */
AcEventWrapper.prototype.clearAllNotification = function () {
    if (acEventWrapper == null) {
        return null;
    }
    acEventWrapper.clearAllNotification();
};


/**
 * 从通知栏取得多个消息
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @param pkg 包名
 * @param size 需要取得多少个消息
 * @return null 代表没有, 返回的是一个数组
 */
AcEventWrapper.prototype.getLastNotification = function (pkg, size) {
    if (acEventWrapper == null) {
        return;
    }
    var d = acEventWrapper.getLastNotification(pkg, size);
    if (d == null|| d=="") {
        return null;
    }
    d = JSON.parse(d);
    var x = [];
    for (var i = 0; i < d.length; i++) {
        x.push(new NotificationInfo(d[i]));
    }
    return x;
};


/**
 * 从Toast取得多个消息
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @param pkg 包名
 * @param size 需要取得多少个消息
 * @return null 代表没有
 */
AcEventWrapper.prototype.getLastToast = function (pkg, size) {
    if (acEventWrapper == null) {
        return;
    }
    var d = acEventWrapper.getLastToast(pkg, size);
    if (d == null || d=="") {
        return null;
    }
    d = JSON.parse(d);
    var x = [];
    for (var i = 0; i < d.length; i++) {
        x.push(new ToastInfo(d[i]));
    }
    return x;
};


/**
 * 请求监听状态栏的权限
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 * @param timeout 请求权限超时时间 单位是秒
 * @return true 代表请求权限成功，false代表失败
 */
AcEventWrapper.prototype.requestNotificationPermission = function (timeout) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.requestNotificationPermission(timeout);
};


/**
 * 检查是否含有状态栏监听权限
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 * @return true 有权限,false 代表无权限
 */
AcEventWrapper.prototype.hasNotificationPermission = function () {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.hasNotificationPermission();
};

//--2020-03-12 新增和NodeInfo相关的操作--//

/**
 * 通过选择器 获取第一个节点信息
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @param selectors 选择器
 * @return NodeInfo 对象或者null
 */
AcEventWrapper.prototype.getOneNodeInfo = function (selectors, timeout) {
    if (acEventWrapper == null) {
        return null;
    }
    var d = acEventWrapper.getOneNodeInfo(selectors.toJSONString(), timeout);
    if (d == null || d=="") {
        return null;
    }
    d = JSON.parse(d);
    return new NodeInfo(d);
};

AcEventWrapper.prototype.getOneNodeInfoForNode = function (nid, selectors, timeout) {
    if (acEventWrapper == null) {
        return null;
    }
    var d = acEventWrapper.getOneNodeInfoForNode(nid, selectors.toJSONString(), timeout);
    if (d == null || d=="") {
        return null;
    }
    d = JSON.parse(d);
    return new NodeInfo(d);
};


/**
 * 取得父级
 * @param uniqueId NodeInfo 中的uniqueId属性
 * @return NodeInfo {NodeInfo 对象|null}
 */
AcEventWrapper.prototype.getNodeInfoParent = function (uniqueId) {
    if (acEventWrapper == null) {
        return null;
    }
    var d = acEventWrapper.getNodeInfoParent(uniqueId);
    if (d == null || d=="") {
        return null;
    }
    d = JSON.parse(d);
    return new NodeInfo(d);
};


/**
 * 取得单个子节点
 * @param uniqueId NodeInfo 中的uniqueId属性
 * @param index 子节点的索引
 * @return NodeInfo {NodeInfo 对象|null}
 */
AcEventWrapper.prototype.getNodeInfoChild = function (uniqueId, index) {
    if (acEventWrapper == null) {
        return null;
    }
    var d = acEventWrapper.getNodeInfoChild(uniqueId, index);
    if (d == null || d=="") {
        return null;
    }
    d = JSON.parse(d);
    return new NodeInfo(d);
};


/**
 * 取得所有子节点
 * @param uniqueId NodeInfo 中的uniqueId属性
 * @return   NodeInfo 数组 选择到的节点集合
 */
AcEventWrapper.prototype.getNodeInfoAllChildren = function (uniqueId) {
    if (acEventWrapper == null) {
        return null;
    }
    var d = acEventWrapper.getNodeInfoAllChildren(uniqueId);
    return nodeInfoArray(d);
};


/**
 * 当前节点的所有兄弟节点
 * @param uniqueId NodeInfo 中的uniqueId属性
 * @return {Array} NodeInfo 数组
 */
AcEventWrapper.prototype.getSiblingNodeInfo = function (uniqueId) {
    if (acEventWrapper == null) {
        return null;
    }
    var d = acEventWrapper.getSiblingNodeInfo(uniqueId);
    return nodeInfoArray(d);
};


/**
 * 当前节点的所有兄弟节点
 * @param uniqueId NodeInfo 中的uniqueId属性
 * @return   NodeInfo 数组 选择到的节点集合
 */
AcEventWrapper.prototype.getSiblingNodeInfo = function (uniqueId) {
    if (acEventWrapper == null) {
        return null;
    }
    var d = acEventWrapper.getSiblingNodeInfo(uniqueId);
    return nodeInfoArray(d);
};


/**
 * 在当前节点前面的兄弟节点
 * @param uniqueId NodeInfo 中的uniqueId属性
 * @return   NodeInfo 数组 选择到的节点集合
 */
AcEventWrapper.prototype.getNextSiblingNodeInfo = function (uniqueId) {
    if (acEventWrapper == null) {
        return null;
    }

    var d = acEventWrapper.getNextSiblingNodeInfo(uniqueId);
    return nodeInfoArray(d);
};

/**
 * 在当前节点后面的兄弟节点
 * @param uniqueId NodeInfo 中的uniqueId属性
 * @return NodeInfo 数组 选择到的节点集合
 */
AcEventWrapper.prototype.getPreviousSiblingNodeInfo = function (uniqueId) {
    if (acEventWrapper == null) {
        return null;
    }
    var d = acEventWrapper.getPreviousSiblingNodeInfo(uniqueId);
    return nodeInfoArray(d);
};

/**
 * 对某个节点输入数据
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @param uniqueId NodeInfo 中的uniqueId属性
 * @param content 数据字符串
 * @return 布尔型 true 代表成功 false代表失败
 */
AcEventWrapper.prototype.inputTextNodeInfo = function (uniqueId, content) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.inputTextNodeInfo(uniqueId, content);
};
AcEventWrapper.prototype.pasteTextNodeInfo = function (uniqueId, content) {
    if (acEventWrapper == null) {
        return null;
    }
    utils.setClipboardText(content);
    return acEventWrapper.pasteTextNodeInfo(uniqueId, content);
};


/**
 * 使用输入法对某个节点输入数据
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @param uniqueId NodeInfo 中的uniqueId属性
 * @param content 数据字符串
 * @return 布尔型 true 代表成功 false代表失败
 */
AcEventWrapper.prototype.imeInputTextNodeInfo = function (uniqueId, content) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.imeInputTextNodeInfo(uniqueId, content);
};


AcEventWrapper.prototype.imeInputKeyCodeNodeInfo = function (uniqueId, content) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.imeInputKeyCodeNodeInfo(uniqueId, content);

};


/**
 * 清除节点文本数据
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @param uniqueId  NodeInfo 中的uniqueId属性
 *  @return bool 布尔型| true代表成功
 */
AcEventWrapper.prototype.clearTextFieldNodeInfo = function (uniqueId) {
    if (acEventWrapper == null) {
        return false;
    }
    return acEventWrapper.clearTextFieldNodeInfo(uniqueId);
};


/**
 * 刷新节点缓存
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @param uniqueId  NodeInfo 中的uniqueId属性
 */
AcEventWrapper.prototype.refreshNodeInfo = function (uniqueId) {
    if (acEventWrapper == null) {
        return null;
    }
    acEventWrapper.refreshNodeInfo(uniqueId);
};

/**
 * 节点信息是否有效
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @param uniqueId  NodeInfo 中的uniqueId属性
 * @return bool|布尔型 true代表有效
 */
AcEventWrapper.prototype.isValidNodeInfo = function (uniqueId) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.isValidNodeInfo(uniqueId);
};

/**
 * 设置获取节点的模式
 * @param mode 1 是增强型， 2 是快速型，默认是增强型
 * @param fetchInvisibleNode 是否抓取隐藏的元素
 * @param fetchNotImportantNode 是否抓取不重要的元素
 * @param algorithm 节点查找算法,默认是nsf，分别有 nsf = 节点静态算法，bsf= 广度优先， dsf=深度度优先
 * @return {boolean|*}
 */
AcEventWrapper.prototype.setFetchNodeMode = function (mode, fetchInvisibleNode, fetchNotImportantNode, algorithm) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.setFetchNodeMode(mode, fetchInvisibleNode, fetchNotImportantNode, algorithm);
};

AcEventWrapper.prototype.removeNodeFlag = function (flag) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.removeNodeFlag(flag);
};
AcEventWrapper.prototype.addNodeFlag = function (flag) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.addNodeFlag(flag);
};

/**
 * 多点触摸<br/>
 * 触摸参数: action :一般情况下 按下为0，弹起为1，移动为2<br/>
 * x: X坐标<br/>
 * y: Y坐标<br/>
 * pointer：设置第几个手指触摸点，分别是 1，2，3等，代表第n个手指<br/>
 * delay: 该动作延迟多少毫秒执行
 * @param touch1 第1个手指的触摸点数组,例如：[{"action":0,"x":1,"y":1,"pointer":1,"delay":20},
 * {"action":2,"x":1,"y":1,"pointer":1,"delay":20}
 * ]
 * @param touch2 第2个手指的触摸点数组
 * @param touch3 第3个手指的触摸点数组
 * @param timeout 多点触摸执行的超时时间，单位是毫秒
 * @return boolean|布尔型
 */
AcEventWrapper.prototype.multiTouch = function (touch1, touch2, touch3, timeout) {
    var x = [];
    if (touch1 != null) {
        x.push(touch1);
    }
    if (touch2 != null) {
        x.push(touch2);
    }
    if (touch3 != null) {
        x.push(touch3);
    }
    return this.multiTouch2(x, timeout);
};

AcEventWrapper.prototype.multiTouch2 = function (pointArrays, timeout) {
    if (acEventWrapper == null) {
        return null;
    }
    var x = JSON.stringify(pointArrays);
    return acEventWrapper.multiTouch(x, timeout);
};


AcEventWrapper.prototype.multiTouchEx = function (pointArrays, timeout) {
    if (acEventWrapper == null) {
        return null;
    }
    var x = JSON.stringify(pointArrays);
    return acEventWrapper.multiTouchEx(x, timeout);
};

/**
 * 向前滚动
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @param selectors {@link S}数组
 * @return 布尔型 true 代表点击成功 false代表点击失败
 */
AcEventWrapper.prototype.scrollForward = function (selectors) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.scrollForward(selectors.toJSONString());
};

AcEventWrapper.prototype.scrollForwardNodeInfo = function (uniqueId) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.scrollForwardNodeInfo(uniqueId);
};


/**
 * 向后滚动
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @param selectors {@link S}数组
 * @return 布尔型 true 代表点击成功 false代表点击失败
 */
AcEventWrapper.prototype.scrollBackward = function (selectors) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.scrollBackward(selectors.toJSONString());
};

AcEventWrapper.prototype.scrollBackwardNodeInfo = function (uniqueId) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.scrollBackwardNodeInfo(uniqueId);
};

/**
 * 向左滚动
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @param selectors {@link S}数组
 * @return 布尔型 true 代表点击成功 false代表点击失败
 */
AcEventWrapper.prototype.scrollLeft = function (selectors) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.scrollLeft(selectors.toJSONString());
};


AcEventWrapper.prototype.scrollLeftNodeInfo = function (uniqueId) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.scrollLeftNodeInfo(uniqueId);
};


/**
 * 向右滚动
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @param selectors {@link S}数组
 * @return 布尔型 true 代表点击成功 false代表点击失败
 */
AcEventWrapper.prototype.scrollRight = function (selectors) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.scrollRight(selectors.toJSONString());
};

AcEventWrapper.prototype.scrollRightNodeInfo = function (uniqueId) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.scrollRightNodeInfo(uniqueId);
};

/**
 * 向上滚动
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @param selectors {@link S}数组
 * @return 布尔型 true 代表点击成功 false代表点击失败
 */
AcEventWrapper.prototype.scrollUp = function (selectors) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.scrollUp(selectors.toJSONString());
};

AcEventWrapper.prototype.scrollUpNodeInfo = function (uniqueId) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.scrollUpNodeInfo(uniqueId);
};

/**
 * 向下滚动
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @param selectors {@link S}数组
 * @return 布尔型 true 代表点击成功 false代表点击失败
 */
AcEventWrapper.prototype.scrollDown = function (selectors) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.scrollDown(selectors.toJSONString());
};
AcEventWrapper.prototype.scrollDownNodeInfo = function (uniqueId) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.scrollDownNodeInfo(uniqueId);
};

AcEventWrapper.prototype.readResAutoImage = function (fileName) {
    if (acEventWrapper == null) {
        return null;
    }
    return acEventWrapper.readResAutoImage(fileName);
};
/**
 * 获取最近的节点事件出发的时间
 *
 * @return {long} 长整型时间，毫秒级别
 */
AcEventWrapper.prototype.lastNodeEventTime = function () {
    if (agentEventWrapper == null) {
        return null;
    }
    return acEventWrapper.lastNodeEventTime();
};


AcEventWrapper.prototype.press = function (x, y, delay) {
    if (agentEventWrapper == null) {
        return null;
    }
    return acEventWrapper.press(x, y, delay);
};


/**
 * 执行按下输入事件
 * @param x         x坐标
 * @param y         y坐标
 * @return 布尔型 true 代表成功 false代表失败
 */
AcEventWrapper.prototype.touchDown = function (x, y) {
    if (acEventWrapper == null) {
        return;
    }
    return acEventWrapper.touchDown(x, y,1);
};
/**
 * 执行移动输入事件
 * @param x         x坐标
 * @param y         y坐标
 * @return 布尔型 true 代表成功 false代表失败
 */
AcEventWrapper.prototype.touchMove = function (x, y) {
    if (acEventWrapper == null) {
        return;
    }
    return acEventWrapper.touchMove(x, y,1);
};
/**
 * 执行弹起输入事件
 * @param x         x坐标
 * @param y         y坐标
 * @return 布尔型 true 代表成功 false代表失败
 */
AcEventWrapper.prototype.touchUp = function (x, y) {
    if (acEventWrapper == null) {
        return;
    }
    return acEventWrapper.touchUp(x, y,1);
};