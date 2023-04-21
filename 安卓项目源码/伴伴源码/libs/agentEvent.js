function EventWrapper() {

}

var agentEvent = new EventWrapper();

/**
 * 当前Sdk的版本号
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @return string ，例如1.0.1
 */
EventWrapper.prototype.version = function () {
    if (agentEventWrapper == null) {
        return;
    }
    return javaString2string(agentEventWrapper.version());
};






/**
 * 点击坐标点
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param x X坐标
 * @param y Y坐标
 * @return 布尔型 true 点击成功，false点击失败
 */
EventWrapper.prototype.clickPoint = function (x, y) {
    if (agentEventWrapper == null) {
        return;
    }
    return agentEventWrapper.clickPoint(x, y);
};

/**
 * 双击某个坐标
 *
 * @param x X坐标
 * @param y Y坐标
 * @return  布尔型 true 成功，false 失败
 */
EventWrapper.prototype.doubleClickPoint = function (x, y) {
    if (agentEventWrapper == null) {
        return null;
    }
    return agentEventWrapper.doubleClickPoint(x, y);
};
/**
 * 点击某个区域中心坐标点
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param rect 区域
 * @return  布尔型 true 成功，false 失败
 */
EventWrapper.prototype.clickCenter = function (rect) {
    if (agentEventWrapper == null) {
        return null;
    }
    if (typeof rect == "string") {

    } else {
        rect = rect.toJSONString();
    }
    return agentEventWrapper.clickCenter(rect);
};

/**
 * 当前是否是我们的输入法
 *
 * @return 布尔型 true代表是，false代表不是
 */
EventWrapper.prototype.currentIsOurIme = function () {
    if (agentEventWrapper == null) {
        return;
    }
    return agentEventWrapper.currentIsOurIme();
};


/**
 * <p>从一个坐标到另一个坐标的拖动
 * </p>
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param startX 起始坐标的X轴值
 * @param startY 起始坐标的Y轴值
 * @param endX   结束坐标的X轴值
 * @param endY   结束坐标的Y轴值
 * @param duration 持续时长 单位毫秒
 * @return 布尔型 true 拖动成功, false 拖动失败
 */
EventWrapper.prototype.drag = function (startX, startY, endX, endY, duration) {
    if (agentEventWrapper == null) {
        return;
    }
    return agentEventWrapper.drag(startX, startY, endX, endY, duration);
};

/**
 * <p>
 * 从一个坐标到另一个坐标的滑动
 * </p>
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param startX 起始坐标的X轴值 X-axis value for the starting coordinate
 * @param startY 起始坐标的Y轴值 Y-axis value for the starting coordinate
 * @param endX   结束坐标的X轴值  X-axis value for the ending coordinate
 * @param endY   结束坐标的Y轴值 Y-axis value for the ending coordinate
 * @param duration 持续时长 单位毫秒
 * @return 布尔型 true 滑动成功, false 滑动失败
 */
EventWrapper.prototype.swipeToPoint = function (startX, startY, endX, endY, duration) {
    if (agentEventWrapper == null) {
        return;
    }
    return agentEventWrapper.swipeToPoint(startX, startY, endX, endY, duration);
};
/**
 * 执行输入事件
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param action    动作，请看类:  MotionEvent.ACTION_*
 * @param x         x坐标    x coordinate
 * @param y         y坐标    y coordinate
 * @param metaState 控制按键，比如说shift键，alt键，ctrl键等控制键, 0或者 1 any meta info
 * @return 布尔型 true 代表成功 false代表失败
 */
EventWrapper.prototype.inputEvent = function (action, x, y, metaState) {
    if (agentEventWrapper == null) {
        return;
    }
    return agentEventWrapper.injectInputEvent(action, x, y, metaState);
};

/**
 * 执行按下输入事件
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param x         x坐标
 * @param y         y坐标
 * @return 布尔型 true 代表成功 false代表失败
 */
EventWrapper.prototype.touchDown = function (x, y) {
    if (agentEventWrapper == null) {
        return;
    }
    return agentEventWrapper.injectTouchDown(x, y);
};
/**
 * 执行移动输入事件
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param x         x坐标
 * @param y         y坐标
 * @return 布尔型 true 代表成功 false代表失败
 */
EventWrapper.prototype.touchMove = function (x, y) {
    if (agentEventWrapper == null) {
        return;
    }
    return agentEventWrapper.injectTouchMove(x, y);
};
/**
 * 执行弹起输入事件
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param x         x坐标
 * @param y         y坐标
 * @return 布尔型 true 代表成功 false代表失败
 */
EventWrapper.prototype.touchUp = function (x, y) {
    if (agentEventWrapper == null) {
        return;
    }
    return agentEventWrapper.injectTouchUp(x, y);
};
/**
 * <p>
 * 获取当前的视图为XML格式，并保存到文件中
 * </p>
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param compressed 是否压缩
 * @return string 文件路径
 */
EventWrapper.prototype.dumpWindowHierarchy = function (compressed) {
    if (agentEventWrapper == null) {
        return;
    }
    return javaString2string(agentEventWrapper.dumpWindowHierarchy(compressed));
};

/**
 * 将元素节点变成XML
 * @return string xml数据
 */
EventWrapper.prototype.dumpXml = function () {
    if (agentEventWrapper == null) {
        return;
    }
    return javaString2string(agentEventWrapper.dumpXml());
};


/**
 * 取得一张屏幕的截图
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param filename 文件路径
 * @param scale    缩放比例 0 ~ 1
 * @param quality  图片质量 0 - 100
 * @return string 截图的路径
 */
EventWrapper.prototype.takeScreenshotMore = function (filename, scale, quality) {
    if (agentEventWrapper == null) {
        return;
    }
    return javaString2string(agentEventWrapper.takeScreenshotMore(filename, scale, quality));
};
/**
 * 快速截屏幕的截图
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param filename 文件路径
 * @return string 截图的路径
 */
EventWrapper.prototype.fastScreenshot = function (filename) {
    if (agentEventWrapper == null) {
        return;
    }
    return javaString2string(agentEventWrapper.fastScreenshot(filename));
};
/**
 * 截图为bitmap
 * @return bitmap null或者bitmap对象
 */
EventWrapper.prototype.fastScreenshotBitmap = function () {
    if (agentEventWrapper == null) {
        return;
    }
    return agentEventWrapper.fastScreenshotBitmap();
};


/**
 * 冻结设备旋转
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param freeze true 禁止旋转，false 可以旋转
 */
EventWrapper.prototype.freezeRotation = function (freeze) {
    if (agentEventWrapper == null) {
        return;
    }
    agentEventWrapper.freezeRotation(freeze);
};


/**
 * 模拟旋转设备
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param dir Left 或者 l, Right 或者 r, Natural 或者 n
 */
EventWrapper.prototype.setOrientation = function (dir) {
    if (agentEventWrapper == null) {
        return;
    }
    agentEventWrapper.setOrientation(dir);
};
/**
 * 打开通知栏
 *
 * @return 布尔型 true 成功, else 失败
 */
EventWrapper.prototype.openNotification = function () {
    if (agentEventWrapper == null) {
        return;
    }
    return agentEventWrapper.openNotification();
};

/**
 * 打开快速设置
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @return 布尔型 true 成功, else 失败
 */
EventWrapper.prototype.openQuickSettings = function () {
    if (agentEventWrapper == null) {
        return;
    }
    return agentEventWrapper.openQuickSettings();
};

/**
 * 返回桌面
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @return boolean | true 成功 false 失败
 */
EventWrapper.prototype.home = function () {
    if (agentEventWrapper == null) {
        return;
    }
    return agentEventWrapper.home();
};

/**
 * 分割屏幕
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @return 布尔型 true 成功 false 失败
 */
EventWrapper.prototype.splitScreen = function () {
    if (acEventWrapper == null) {
        return null;
    }
    return agentEventWrapper.splitScreen();
};

/**
 * 模拟电源键
 * @return 布尔型 true 成功 false 失败
 */
EventWrapper.prototype.power = function () {
    if (agentEventWrapper == null) {
        return null;
    }
    return agentEventWrapper.power();
};

/**
 * 返回键
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @return  布尔型 true 成功 false 失败
 */
EventWrapper.prototype.back = function () {
    if (agentEventWrapper == null) {
        return;
    }
    return agentEventWrapper.back();
};

/**
 * 打开菜单
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @return 布尔型 true 成功 false 失败
 */
EventWrapper.prototype.menu = function () {
    if (agentEventWrapper == null) {
        return;
    }
    return agentEventWrapper.menu();
};


/**
 * Enter键
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @return 布尔型 true 成功 false 失败
 */
EventWrapper.prototype.enter = function () {
    if (agentEventWrapper == null) {
        return;
    }
    return agentEventWrapper.enter();
};


/**
 * 删除键
 *
 * @return 布尔型 true 成功 false 失败
 */
EventWrapper.prototype.delete = function () {
    if (agentEventWrapper == null) {
        return;
    }
    return agentEventWrapper.delete();
};

/**
 * 最近使用的APP
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @return 布尔型 true 成功 false 失败
 */
EventWrapper.prototype.recentApps = function () {
    if (agentEventWrapper == null) {
        return;
    }
    return agentEventWrapper.recentApps();
};

/**
 * 搜索
 *
 * @return 布尔型 true 成功 false 失败
 */
EventWrapper.prototype.search = function () {
    if (agentEventWrapper == null) {
        return;
    }
    return agentEventWrapper.search();
};


/**
 * 获取屏幕截图并保存到文件中 ,(底层命令截图 速度大概1-2秒)
 *
 * @param fileName 文件路径
 * @return 布尔型 截图成功返回 true
 */
EventWrapper.prototype.takeScreenshot = function (fileName) {
    if (agentEventWrapper == null) {
        return;
    }
    return agentEventWrapper.takeScreenshot(fileName);
};


/**
 * 截图返回autoimage对象 ,(底层命令截图 速度大概1-2秒)
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @return AutoImage 对象或者null
 */
EventWrapper.prototype.takeScreenshotImage = function () {
    if (agentEventWrapper == null) {
        return;
    }
    return agentEventWrapper.takeScreenshotImage();
};

/**
 * 模拟按键,例如home back等
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param key 对应的值分别为 home, back, left, right, up, down, center, menu, search, enter, delete(or del), recent(recent apps), volume_up, volume_down, volume_mute, camera, power
 * @return 布尔型 true 成功, false 失败
 */
EventWrapper.prototype.pressKey = function (key) {
    if (agentEventWrapper == null) {
        return;
    }
    return agentEventWrapper.pressKey(key);
};

/**
 * 模拟键盘输入
 *
 * @param keyCode 键盘的key，参见KeyEvent.KEYCODE_*
 * @return 布尔型 true 代表成功，false 代表失败
 */
EventWrapper.prototype.pressKeyCode = function (keyCode) {
    if (agentEventWrapper == null) {
        return;
    }
    return agentEventWrapper.pressKeyCode(keyCode);
};
/**
 * 模拟键盘输入
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param keyCode   keyCode 键盘的key，参见KeyEvent.KEYCODE_*
 * @param metaState metaState  控制按键，比如说shift键，alt键，ctrl键等控制键, 0或者 1
 * @return 布尔型 true 代表成功，false 代表失败。
 */
EventWrapper.prototype.pressKeyCodeWithMetaState = function (keyCode, metaState) {
    if (agentEventWrapper == null) {
        return;
    }
    return agentEventWrapper.pressKeyCodeWithMetaState(keyCode, metaState);
};


/**
 * 唤醒设备
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 */
EventWrapper.prototype.wakeUp = function () {
    if (agentEventWrapper == null) {
        return;
    }
    agentEventWrapper.wakeUp();
};

/**
 * 检查屏幕是否是点亮的
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @return 布尔型 true 是，false 否
 */
EventWrapper.prototype.isScreenOn = function () {
    if (agentEventWrapper == null) {
        return;
    }
    return agentEventWrapper.isScreenOn();
};

/**
 * 熄灭屏幕
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @return 布尔型 true 成功 false 失败
 */
EventWrapper.prototype.sleepScreen = function () {
    if (agentEventWrapper == null) {
        return;
    }
    return agentEventWrapper.sleepScreen();
};


/**
 * 通过选择器清除输入框的文字
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param selectors 选择器数组
 * @return boolean 布尔型| true代表成功
 */
EventWrapper.prototype.clearTextField = function (selectors) {
    if (agentEventWrapper == null) {
        return;
    }
    return agentEventWrapper.clearTextField(selectors.toJSONString());
};


/**
 * 通过选择器滑动元素到某个坐标点
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param selectors 节点选择器
 * @param endX      结束的X坐标
 * @param endY      结束的Y坐标
 * @param duration 持续时长 单位毫秒
 * @return 布尔型 true 滑动成功，false 滑动失败
 */
EventWrapper.prototype.swipe = function (selectors, endX, endY, duration) {
    if (agentEventWrapper == null) {
        return;
    }
    return agentEventWrapper.swipe(selectors.toJSONString(), endX, endY, duration);
};


/**
 * 通过选择器获取元素文本
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param selectors 节点选择器
 * @return 字符串集合 文本字符串
 */
EventWrapper.prototype.getText = function (selectors) {
    if (agentEventWrapper == null) {
        return;
    }
    var ds = agentEventWrapper.getText(selectors.toJSONString());
    if (ds == null|| ds=="") {
        return null;
    }
    return JSON.parse(ds);
};

EventWrapper.prototype.lockNode = function () {
    if (agentEventWrapper == null) {
        return null;
    }
    agentEventWrapper.lockNode();
};
EventWrapper.prototype.releaseNode = function () {
    if (agentEventWrapper == null) {
        return null;
    }
    agentEventWrapper.releaseNode();
};
/**
 * 通过选择器获取节点信息
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param selectors 节点选择器
 * @return 节点信息集合 节点对象的信息
 */
EventWrapper.prototype.getNodeInfo = function (selectors, timeout) {
    if (agentEventWrapper == null) {
        return;
    }
    var d = agentEventWrapper.getNodeInfo(selectors.toJSONString(), timeout);
    return nodeInfoArray(d);
};
EventWrapper.prototype.getNodeInfoForNode = function (nid, selectors, timeout) {
    if (agentEventWrapper == null) {
        return;
    }
    var d = agentEventWrapper.getNodeInfoForNode(nid, selectors.toJSONString(), timeout);
    return nodeInfoArray(d);
};


/**
 * 长点击选择器选中的元素
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param selectors 选择器 {@link SelectorList}
 * @return 布尔型 true 成功 false 失败
 */
EventWrapper.prototype.longClick = function (selectors) {
    if (agentEventWrapper == null) {
        return;
    }
    return agentEventWrapper.longClick(selectors.toJSONString());
};
EventWrapper.prototype.longClickEx = function (selectors) {
    if (agentEventWrapper == null) {
        return null;
    }
    return agentEventWrapper.longClickEx(selectors.toJSONString());
};

/**
 * 长按某个坐标
 *
 * @param x x坐标
 * @param y y坐标
 * @return 布尔型 true 成功，false 失败
 */
EventWrapper.prototype.longClickPoint = function (x, y) {
    if (agentEventWrapper == null) {
        return;
    }
    return agentEventWrapper.longClickPoint(x, y);
};


/**
 * 随机长点击区域中的坐标
 * @param rect 区域 {@link Rect}
 * @return 布尔型 成功或者失败
 */
EventWrapper.prototype.longClickRandomRect = function (rect) {
    if (agentEventWrapper == null) {
        return;
    }
    if (rect == null) {
        return false;
    }
    if (typeof rect == "string") {

    } else {
        rect = rect.toJSONString();
    }
    return agentEventWrapper.longClickRandomRect(rect);
};


/**
 * 通过选择器拖动某个元素到目标元素
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param selectors 选择器 {@link SelectorList}
 * @param destObj   目标元素选择器
 * @param duration 持续时长 单位毫秒
 * @return 布尔型 true 成功 false 失败
 */
EventWrapper.prototype.dragTo = function (selectors, destObj, duration) {
    if (agentEventWrapper == null) {
        return;
    }
    return agentEventWrapper.dragTo(selectors.toJSONString(), destObj, duration);
};


/**
 * 通过选择器拖动某个元素到目标X Y 坐标
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param selectors 原始元素选择器
 * @param destX     目标 X 坐标
 * @param destY     目标 Y 坐标
 * @param duration 持续时长 单位毫秒
 * @return 布尔型 true 成功 false 失败
 */
EventWrapper.prototype.dragToPoint = function (selectors, destX, destY, duration) {
    if (agentEventWrapper == null) {
        return;
    }
    return agentEventWrapper.dragToPoint(selectors.toJSONString(), destX, destY, duration);
};

/**
 * 通过选择器进行缩小手势
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param selectors 元素选择器
 * @param percent   对象斜线长度对夹手势的百分比  0.0f and 1.0f
 * @return 布尔型 true 此手势的所有触摸事件都成功注入 false 失败
 */
EventWrapper.prototype.pinchIn = function (selectors, percent) {
    if (agentEventWrapper == null) {
        return;
    }
    return agentEventWrapper.pinchIn(selectors.toJSONString(), percent);
};
/**
 * 通过选择器进行放大手势
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param selectors 元素选择器
 * @param percent   对象斜线长度对夹手势的百分比 0.0f and 1.0f
 * @return 布尔型 true 此手势的所有触摸事件都成功注入 false 失败
 */
EventWrapper.prototype.pinchOut = function (selectors, percent) {
    if (agentEventWrapper == null) {
        return;
    }
    return agentEventWrapper.pinchOut(selectors.toJSONString(), percent);
};


/**
 * 通过选择器点击元素
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param selectors {@link SelectorList} 元素选择器
 * @return 布尔型 true 代表点击成功 false代表点击失败
 */
EventWrapper.prototype.click = function (selectors) {
    if (agentEventWrapper == null) {
        return;
    }
    return agentEventWrapper.click(selectors.toJSONString());
};

EventWrapper.prototype.clickEx = function (selectors) {
    if (agentEventWrapper == null) {
        return null;
    }
    return agentEventWrapper.clickEx(selectors.toJSONString());
};
EventWrapper.prototype.clickExNodeInfo = function (uniqueId) {
    if (agentEventWrapper == null) {
        return null;
    }
    return agentEventWrapper.clickExNodeInfo(uniqueId);
};
EventWrapper.prototype.longClickExNodeInfo = function (uniqueId) {
    if (agentEventWrapper == null) {
        return null;
    }
    return agentEventWrapper.longClickExNodeInfo(uniqueId);
};


/**
 * 是否滚动到底部了，如果查不到元素也会返回false
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 * @param direction 滚动方向 UP,DOWN,LEFT,RIGHT
 * @param selectors 选择器
 * @return false 代表未滚动到位，true 代表滚动完成了
 */
EventWrapper.prototype.isScrollEnd = function (direction, selectors) {
    if (agentEventWrapper == null) {
        return null;
    }
    return agentEventWrapper.isScrollEnd(direction, selectors.toJSONString());
};


/**
 * 通过选择器随机点击元素，有可能选中的是多个元素节点
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param selectors {@link SelectorList}元素选择器
 * @return 布尔型 true 代表点击成功 false代表点击失败
 */
EventWrapper.prototype.clickRandom = function (selectors) {
    if (agentEventWrapper == null) {
        return;
    }
    return agentEventWrapper.clickRandom(selectors.toJSONString());
};
EventWrapper.prototype.clickRandomEx = function (selectors) {
    if (agentEventWrapper == null) {
        return;
    }
    return agentEventWrapper.clickRandomEx(selectors.toJSONString());
};

/**
 * 通过选择器输入数据
 * <p>
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param selectors {@link SelectorList}元素选择器
 * @param content   数据字符串
 * @return 布尔型 true 代表成功 false代表失败
 */
EventWrapper.prototype.inputText = function (selectors, content) {
    if (agentEventWrapper == null) {
        return;
    }
    return agentEventWrapper.inputText(selectors.toJSONString(), content);
};
EventWrapper.prototype.pasteText = function (selectors, content) {
    if (agentEventWrapper == null) {
        return;
    }
    utils.setClipboardText(content);
    return agentEventWrapper.pasteText(selectors.toJSONString(), content);
};


/**
 * 使用输入法输入内容
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param content   数据字符串
 * @param selectors {@link SelectorList}元素选择器
 * @return 布尔型 true 代表成功 false代表失败
 */
EventWrapper.prototype.imeInputText = function (selectors, content) {
    if (agentEventWrapper == null) {
        return;
    }
    if (selectors == null) {
        return agentEventWrapper.imeInputText(null, content);
    }
    return agentEventWrapper.imeInputText(selectors.toJSONString(), content);
};

EventWrapper.prototype.imeInputKeyCode = function (selectors, content) {
    if (agentEventWrapper == null) {
        return null;
    }
    if (selectors == null) {
        return agentEventWrapper.imeInputKeyCode(null, content);
    }
    return agentEventWrapper.imeInputKeyCode(selectors.toJSONString(), content);
};

/**
 * 设置当前的输入法，用于输入数据
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @return 布尔型 true 代表成功 false代表失败
 */
EventWrapper.prototype.setCurrentIme = function () {
    if (agentEventWrapper == null) {
        return;
    }
    return agentEventWrapper.setCurrentIme();
};

/**
 * 恢复到之前的输入法
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @return 布尔型 true 代表成功 false代表失败
 */
EventWrapper.prototype.restoreIme = function () {
    if (agentEventWrapper == null) {
        return;
    }
    return agentEventWrapper.restoreIme();
};

/**
 * 通过选择器判断元素是否存在
 *
 * @param selectors {@link SelectorList}元素选择器
 * @return 布尔型 true 代表成功 false代表失败
 */
EventWrapper.prototype.has = function (selectors) {
    if (agentEventWrapper == null) {
        return;
    }
    return agentEventWrapper.has(selectors.toJSONString());
};

/**
 * 通过选择器截取选中的元素截图,(底层命令截图 速度大概1-2秒)
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param selectors {@link SelectorList}元素选择器
 * @param filePath  最终文件路径
 * @return 布尔型 true 代表成功 false代表失败
 */
EventWrapper.prototype.takeNodeScreenshot = function (selectors, filePath) {
    if (agentEventWrapper == null) {
        return;
    }
    return agentEventWrapper.takeNodeScreenshot(selectors.toJSONString(), filePath);
};

/**
 * 执行shell命令
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param command 命令字符串
 * @return 字符串 shell结果
 */
EventWrapper.prototype.execShellCommand = function (command) {
    if (agentEventWrapper == null) {
        return;
    }
    return javaString2string(agentEventWrapper.execShellCommand(command));
};


/**
 * 执行shell命令，包含正常和错误结果，返回的是JSON数组，自己判断正确还是错误
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param command 命令字符串
 * @return JSON数组 shell结果
 */
EventWrapper.prototype.execShellCommandEx = function (command) {
    if (agentEventWrapper == null) {
        return;
    }
    let d = agentEventWrapper.execShellCommandEx(command);
    if(d!=null ){
        try{
            return JSON.parse(d)
        }catch(e){
        }
    }
    return d;
};

/**
 * 取得当前运行的Activity类名
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @return string 类名字符串
 */
EventWrapper.prototype.getRunningActivity = function () {
    if (agentEventWrapper == null) {
        return;
    }
    return javaString2string(agentEventWrapper.getRunningActivity());
};
/**
 * 取得当前运行的App包名
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @return string 包名字符串
 */
EventWrapper.prototype.getRunningPkg = function () {
    if (agentEventWrapper == null) {
        return null;
    }
    return javaString2string(agentEventWrapper.getRunningPkg());
};

/**
 * 随机点击区域中的坐标
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param rect 区域 {@link Rect}
 * @return 布尔型 成功或者失败
 */
EventWrapper.prototype.clickRandomRect = function (rect) {
    if (agentEventWrapper == null) {
        return;
    }
    if (rect == null) {
        return false;
    }
    if (typeof rect == "string") {

    } else {
        rect = rect.toJSONString();
    }
    return agentEventWrapper.clickRandomRect(rect);
};

/**
 * 将通知发射处理，相当于点击了通知栏
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param seqId 通知信息的序列号
 * @return 布尔型 true 代表发射通知成功
 */
EventWrapper.prototype.shotNotification = function (seqId) {
    if (agentEventWrapper == null) {
        return;
    }
    return agentEventWrapper.shotNotification(seqId);
};


/**
 * 通知取消处理
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param seqId 通知栏的对象ID
 * @return 布尔型 true 代表取消通知成功
 */
EventWrapper.prototype.cancelNotification = function (seqId) {
    if (agentEventWrapper == null) {
        return null;
    }
    return agentEventWrapper.cancelNotification(seqId);
};

EventWrapper.prototype.ignoreNotification = function (seqId) {
    if (agentEventWrapper == null) {
        return null;
    }
    return agentEventWrapper.ignoreNotification(seqId);
};


/**
 * 从缓存中清除所有的Toast消息数据
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 */
EventWrapper.prototype.clearAllToast = function () {
    if (agentEventWrapper == null) {
        return;
    }
    agentEventWrapper.clearAllToast();
};

/**
 * 从缓存中清除所有的通知栏消息数据
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 */
EventWrapper.prototype.clearAllNotification = function () {
    if (agentEventWrapper == null) {
        return;
    }
    agentEventWrapper.clearAllNotification();
};


/**
 * 从通知栏取得多个消息
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 * @param pkg 包名
 * @param size 需要取得多少个消息
 * @return null 代表没有
 */
EventWrapper.prototype.getLastNotification = function (pkg, size) {
    if (agentEventWrapper == null) {
        return;
    }
    var d = agentEventWrapper.getLastNotification(pkg, size);
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
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param pkg 包名
 * @param size 需要取得多少个消息
 * @return null 代表没有
 */
EventWrapper.prototype.getLastToast = function (pkg, size) {
    if (agentEventWrapper == null) {
        return;
    }
    var d = agentEventWrapper.getLastToast(pkg, size);
     if (d == null|| d=="") {
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
 * 关闭屏幕，屏幕不亮，但是依然可以自动点击，不同于sleepScreen
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @return 布尔型 true 成功，false 失败
 */
EventWrapper.prototype.closeScreen = function () {
    if (agentEventWrapper == null) {
        return;
    }
    return agentEventWrapper.closeScreen();
};
/**
 * 点亮屏幕，和closeScreen相反的动作
 * <Br/>
 * 运行环境: 代理模式
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @return 布尔型 true 成功，false 失败
 */
EventWrapper.prototype.lightScreen = function () {
    if (agentEventWrapper == null) {
        return;
    }
    return agentEventWrapper.lightScreen();
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
EventWrapper.prototype.requestNotificationPermission = function (timeout) {
    if (agentEventWrapper == null) {
        return null;
    }
    return agentEventWrapper.requestNotificationPermission(timeout);
};


/**
 * 检查是否含有状态栏监听权限
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 * @return true 有权限,false 代表无权限
 */
EventWrapper.prototype.hasNotificationPermission = function () {
    if (agentEventWrapper == null) {
        return null;
    }
    return agentEventWrapper.hasNotificationPermission();
};

//--2020-03-12 新增和NodeInfo相关的操作--//
/**
 * 通过选择器 获取第一个节点信息
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本:  Android 5.0 以上
 *
 * @param selectors 选择器
 * @return {@link NodeInfo} 对象或者null
 */
EventWrapper.prototype.getOneNodeInfo = function (selectors, timeout) {
    if (agentEventWrapper == null) {
        return null;
    }
    var d = agentEventWrapper.getOneNodeInfo(selectors.toJSONString(), timeout);
     if (d == null|| d=="") {
        return null;
    }
    d = JSON.parse(d);
    return new NodeInfo(d);
};

EventWrapper.prototype.getOneNodeInfoForNode = function (nid, selectors, timeout) {
    if (agentEventWrapper == null) {
        return null;
    }
    var d = agentEventWrapper.getOneNodeInfoForNode(nid, selectors.toJSONString(), timeout);
    if (d == null|| d=="") {
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
EventWrapper.prototype.getNodeInfoParent = function (uniqueId) {
    if (agentEventWrapper == null) {
        return null;
    }
    var d = agentEventWrapper.getNodeInfoParent(uniqueId);
     if (d == null|| d=="") {
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
EventWrapper.prototype.getNodeInfoChild = function (uniqueId, index) {
    if (agentEventWrapper == null) {
        return null;
    }
    var d = agentEventWrapper.getNodeInfoChild(uniqueId, index);
     if (d == null|| d=="") {
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
EventWrapper.prototype.getNodeInfoAllChildren = function (uniqueId) {
    if (agentEventWrapper == null) {
        return null;
    }
    var d = agentEventWrapper.getNodeInfoAllChildren(uniqueId);
    return nodeInfoArray(d);
};


/**
 * 当前节点的所有兄弟节点
 * @param uniqueId NodeInfo 中的uniqueId属性
 * @return NodeInfo 节点集合
 */
EventWrapper.prototype.getSiblingNodeInfo = function (uniqueId) {
    if (agentEventWrapper == null) {
        return null;
    }
    var d = agentEventWrapper.getSiblingNodeInfo(uniqueId);
    return nodeInfoArray(d);
};


/**
 * 当前节点的所有兄弟节点
 * @param uniqueId NodeInfo 中的uniqueId属性
 * @return   NodeInfo 数组 选择到的节点集合
 */
EventWrapper.prototype.getSiblingNodeInfo = function (uniqueId) {
    if (agentEventWrapper == null) {
        return null;
    }
    var d = agentEventWrapper.getSiblingNodeInfo(uniqueId);
    return nodeInfoArray(d);
};


/**
 * 在当前节点前面的兄弟节点
 * @param uniqueId NodeInfo 中的uniqueId属性
 * @return   NodeInfo 数组 选择到的节点集合
 */
EventWrapper.prototype.getNextSiblingNodeInfo = function (uniqueId) {
    if (agentEventWrapper == null) {
        return null;
    }
    var d = agentEventWrapper.getNextSiblingNodeInfo(uniqueId);
    return nodeInfoArray(d);
};

/**
 * 在当前节点后面的兄弟节点
 * @param uniqueId NodeInfo 中的uniqueId属性
 * @return NodeInfo 数组 选择到的节点集合
 */
EventWrapper.prototype.getPreviousSiblingNodeInfo = function (uniqueId) {
    if (agentEventWrapper == null) {
        return null;
    }
    var d = agentEventWrapper.getPreviousSiblingNodeInfo(uniqueId);
    return nodeInfoArray(d);
};

/**
 * 对某个节点输入数据
 * @param uniqueId NodeInfo 中的uniqueId属性
 * @param content 数据字符串
 * @return 布尔型 true 代表成功 false代表失败
 */
EventWrapper.prototype.inputTextNodeInfo = function (uniqueId, content) {
    if (agentEventWrapper == null) {
        return null;
    }
    return agentEventWrapper.inputTextNodeInfo(uniqueId, content);
};

EventWrapper.prototype.pasteTextNodeInfo = function (uniqueId, content) {
    if (agentEventWrapper == null) {
        return null;
    }
    utils.setClipboardText(content);
    return agentEventWrapper.pasteTextNodeInfo(uniqueId, content);
};

/**
 * 使用输入法对某个节点输入数据
 * @param uniqueId NodeInfo 中的uniqueId属性
 * @param rect  NodeInfo 中的rect属性
 * @param content 数据字符串
 * @return 布尔型 true 代表成功 false代表失败
 */
EventWrapper.prototype.imeInputTextNodeInfo = function (uniqueId, rect, content) {
    if (agentEventWrapper == null) {
        return false;
    }
    if (rect == null) {
        return false;
    }
    return agentEventWrapper.imeInputTextNodeInfo(uniqueId, rect.toJSONString(), content);
};


EventWrapper.prototype.imeInputKeyCodeNodeInfo = function (uniqueId, rect, content) {
    if (agentEventWrapper == null) {
        return null;
    }
    if (rect == null) {
        return false;
    }
    return agentEventWrapper.imeInputKeyCodeNodeInfo(uniqueId, rect.toJSONString(), content);
};


/**
 * 清除节点文本数据
 * <Br/>
 * 运行环境: 无障碍模式
 * <Br/>
 * 兼容版本: Android 7.0 以上
 *
 * @param uniqueId  NodeInfo 中的uniqueId属性
 */
EventWrapper.prototype.clearTextFieldNodeInfo = function (uniqueId) {
    if (agentEventWrapper == null) {
        return false;
    }
    return agentEventWrapper.clearTextFieldNodeInfo(uniqueId);
};


/**
 * 刷新节点缓存
 * @param uniqueId  NodeInfo 中的uniqueId属性
 */
EventWrapper.prototype.refreshNodeInfo = function (uniqueId) {
    if (agentEventWrapper == null) {
        return null;
    }
    agentEventWrapper.refreshNodeInfo(uniqueId);
};

/**
 * 节点信息是否有效
 * @param uniqueId  NodeInfo 中的uniqueId属性
 * @return bool|布尔型 true代表有效
 */
EventWrapper.prototype.isValidNodeInfo = function (uniqueId) {
    if (agentEventWrapper == null) {
        return null;
    }
    return agentEventWrapper.isValidNodeInfo(uniqueId);
};

/**
 * 设置获取节点的模式
 * @param mode 1 是增强型， 2 是快速型，默认是增强型
 * @param fetchInvisibleNode 是否抓取隐藏的元素
 * @param fetchNotImportantNode 是否抓取不重要的元素
 * @param algorithm 节点查找算法,默认是nsf，分别有 nsf = 节点静态算法，bsf= 广度优先， dsf=深度度优先
 * @return {boolean|*}
 */
EventWrapper.prototype.setFetchNodeMode = function (mode, fetchInvisibleNode, fetchNotImportantNode, algorithm) {
    if (agentEventWrapper == null) {
        return null;
    }
    return agentEventWrapper.setFetchNodeMode(mode, fetchInvisibleNode, fetchNotImportantNode, algorithm);
};


EventWrapper.prototype.removeNodeFlag = function (flag) {
    if (agentEventWrapper == null) {
        return null;
    }
    return agentEventWrapper.removeNodeFlag(flag);
};
EventWrapper.prototype.addNodeFlag = function (flag) {
    if (agentEventWrapper == null) {
        return null;
    }
    return agentEventWrapper.addNodeFlag(flag);
};


/**
 * 多点触摸<br/>
 * 触摸参数: action :一般情况下 按下为0，弹起为1，移动为2<br/>
 * x: X坐标<br/>
 * y: Y坐标<br/>
 * pointer：设置第几个手指触摸点，分别是 1，2，3等，代表第n个手指<br/>
 * delay: 该动作延迟多少毫秒执行
 * @param touch1 第1个手指的触摸点数组,例如：[{"action":0,"x":1,"y":1,"pointer":1,"delay":20},{"action":2,"x":1,"y":1,"pointer":1,"delay":20}]
 * @param touch2 第2个手指的触摸点数组
 * @param touch3 第3个手指的触摸点数组
 * @param timeout 多点触摸执行的超时时间，单位是毫秒
 * @return boolean|布尔型
 */
EventWrapper.prototype.multiTouch = function (touch1, touch2, touch3, timeout) {
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


EventWrapper.prototype.multiTouch2 = function (pointArrays, timeout) {
    if (agentEventWrapper == null) {
        return null;
    }
    var x = JSON.stringify(pointArrays);
    return agentEventWrapper.multiTouch(x, timeout);
};


/**
 * 向前滚动
 *
 * @param selectors {@link S}数组
 * @return 布尔型 true 代表点击成功 false代表点击失败
 */
EventWrapper.prototype.scrollForward = function (selectors) {
    if (agentEventWrapper == null) {
        return null;
    }
    return agentEventWrapper.scrollForward(selectors.toJSONString());
};

EventWrapper.prototype.scrollForwardNodeInfo = function (uniqueId) {
    if (agentEventWrapper == null) {
        return null;
    }
    return agentEventWrapper.scrollForwardNodeInfo(uniqueId);
};


/**
 * 向后滚动
 *
 * @param selectors {@link S}数组
 * @return 布尔型 true 代表点击成功 false代表点击失败
 */
EventWrapper.prototype.scrollBackward = function (selectors) {
    if (agentEventWrapper == null) {
        return null;
    }
    return agentEventWrapper.scrollBackward(selectors.toJSONString());
};


EventWrapper.prototype.scrollBackwardNodeInfo = function (uniqueId) {
    if (agentEventWrapper == null) {
        return null;
    }
    return agentEventWrapper.scrollBackwardNodeInfo(uniqueId);
};


/**
 * 向左滚动
 * @param selectors {@link S}数组
 * @return 布尔型 true 代表点击成功 false代表点击失败
 */
EventWrapper.prototype.scrollLeft = function (selectors) {
    if (agentEventWrapper == null) {
        return null;
    }
    return agentEventWrapper.scrollLeft(selectors.toJSONString());
};


EventWrapper.prototype.scrollLeftNodeInfo = function (uniqueId) {
    if (agentEventWrapper == null) {
        return null;
    }
    return agentEventWrapper.scrollLeftNodeInfo(uniqueId);
};


/**
 * 向右滚动
 * @param selectors {@link S}数组
 * @return 布尔型 true 代表点击成功 false代表点击失败
 */
EventWrapper.prototype.scrollRight = function (selectors) {
    if (agentEventWrapper == null) {
        return null;
    }
    return agentEventWrapper.scrollRight(selectors.toJSONString());
};


EventWrapper.prototype.scrollRightNodeInfo = function (uniqueId) {
    if (agentEventWrapper == null) {
        return null;
    }
    return agentEventWrapper.scrollRightNodeInfo(uniqueId);
};

/**
 * 向上滚动
 *
 * @param selectors {@link S}数组
 * @return 布尔型 true 代表点击成功 false代表点击失败
 */
EventWrapper.prototype.scrollUp = function (selectors) {
    if (agentEventWrapper == null) {
        return null;
    }
    return agentEventWrapper.scrollUp(selectors.toJSONString());
};

EventWrapper.prototype.scrollUpNodeInfo = function (uniqueId) {
    if (agentEventWrapper == null) {
        return null;
    }
    return agentEventWrapper.scrollUpNodeInfo(uniqueId);
};

/**
 * 向下滚动
 *
 * @param selectors {@link S}数组
 * @return 布尔型 true 代表点击成功 false代表点击失败
 */
EventWrapper.prototype.scrollDown = function (selectors) {
    if (agentEventWrapper == null) {
        return null;
    }
    return agentEventWrapper.scrollDown(selectors.toJSONString());
};


EventWrapper.prototype.scrollDownNodeInfo = function (uniqueId) {
    if (agentEventWrapper == null) {
        return null;
    }
    return agentEventWrapper.scrollDownNodeInfo(uniqueId);
};

EventWrapper.prototype.readResAutoImage = function (fileName) {
    if (agentEventWrapper == null) {
        return null;
    }
    return agentEventWrapper.readResAutoImage(fileName);
};


/**
 * 获取最近的节点事件出发的时间
 *
 * @return {long} 长整型时间，毫秒级别
 */
EventWrapper.prototype.lastNodeEventTime = function () {
    if (agentEventWrapper == null) {
        return null;
    }
    return agentEventWrapper.lastNodeEventTime();
};


/**
 * 长按住事件
 * @param x x坐标
 * @param y y坐标
 * @param delay 长按时间  毫秒
 * @return {bool} true 成功 false 失败
 */
EventWrapper.prototype.press = function (x, y, delay) {
    if (agentEventWrapper == null) {
        return null;
    }
    let d = [
        {"action": 0, "x": x, "y": y, "pointer": 1, "delay": 1},
        {"action": 1, "x": x, "y": y, "pointer": 1, "delay": delay}]
    return multiTouch(d, null, null, delay + 2);
};

/**
 * 设置代理模式参数
 * @param data 参数表
 *  例子: {"remoteCallTimeout":10000}
 * remoteCallTimeout: 代理调用的超时时间，单位是毫秒，默认是10秒
 * @return {bool} true 成功 false 失败
 */
EventWrapper.prototype.setAgentCallParam = function (data) {
    if (agentEventWrapper == null) {
        return false;
    }
    if(data==null){
        return false;
    }
    let d = JSON.stringify(data)
    return agentEventWrapper.setAgentCallParam(d);
};


