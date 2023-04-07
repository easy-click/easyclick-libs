function EventWrapper() {

}

var agentEvent = new EventWrapper();


/**
 * 点击坐标点
 * @param x X坐标
 * @param y Y坐标
 * @return 布尔型 true 点击成功，false点击失败
 */
EventWrapper.prototype.clickPoint = function (x, y) {
    if (agentEventWrapper == null) {
        return false;
    }
    return agentEventWrapper.clickPoint(x, y);
};


/**
 * 设置屏幕旋转
 * @param orientation 1 正常的竖屏，1 向右旋转90度(顺时针)
 * @return boolean|布尔型
 */
EventWrapper.prototype.setOrientation = function (orientation) {
    if (agentEventWrapper == null) {
        return false;
    }
    return agentEventWrapper.setOrientation(orientation);
}

/**
 * 校正屏幕方向，适配坐标系
 * @param orientation 0 自动校正坐标系 1 强制竖屏坐标系，2 强制向右旋转90度(顺时针)坐标系
 * @return JSON字符串，里面的key分别是  orientation, screenWidth, screenHeight
 */
EventWrapper.prototype.adjustScreenOrientation = function (orientation) {
    if (agentEventWrapper == null) {
        return false;
    }
    return agentEventWrapper.adjustScreenOrientation(orientation) + "";
}

/**
 * 获取屏幕方向
 * @return int| 1 竖屏，2 横屏 （向右旋转90度(顺时针)）
 */
EventWrapper.prototype.getOrientation = function () {
    if (agentEventWrapper == null) {
        return false;
    }
    return agentEventWrapper.getOrientation();
}


/**
 * 模拟人机交互，例如键盘输入和快捷键，具体健值请看
 * <a href="http://ieasyclick.com/iosdocs/#/zh-cn/advance/keyboard">http://ieasyclick.com/iosdocs/#/zh-cn/advance/keyboard</a>
 * @param eventPageID 人机交互类型
 * @param eventUsageID 人机交互值
 * @param delay 时长一般设置为 0.2 即可，可能有延迟
 * @return boolean|布尔型
 */
EventWrapper.prototype.ioHIDEvent = function (eventPageID, eventUsageID, delay) {
    if (agentEventWrapper == null) {
        return false;
    }
    return agentEventWrapper.ioHIDEvent(eventPageID, eventUsageID, delay);
}

/**
 * 双击某个坐标
 *
 * @param x X坐标
 * @param y Y坐标
 * @return  布尔型 true 成功，false 失败
 */
EventWrapper.prototype.doubleClickPoint = function (x, y) {
    if (agentEventWrapper == null) {
        return false;
    }
    return agentEventWrapper.doubleClickPoint(x, y);
};


/**
 * <p>从一个坐标到另一个坐标的拖动
 * </p>
 * @param startX 起始坐标的X轴值
 * @param startY 起始坐标的Y轴值
 * @param endX   结束坐标的X轴值
 * @param endY   结束坐标的Y轴值
 * @param duration 持续时长 单位毫秒
 * @return 布尔型 true 拖动成功, false 拖动失败
 */
EventWrapper.prototype.drag = function (startX, startY, endX, endY, duration) {
    if (agentEventWrapper == null) {
        return false;
    }
    return agentEventWrapper.drag(startX, startY, endX, endY, duration);
};

/**
 * <p>
 * 从一个坐标到另一个坐标的滑动
 * </p>
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
 *
 * @param action    动作，请看类:  MotionEvent.ACTION_*
 * @param x         x坐标    x coordinate
 * @param y         y坐标    y coordinate
 * @param metaState 控制按键，比如说shift键，alt键，ctrl键等控制键, 0或者 1 any meta info
 * @return 布尔型 true 代表成功 false代表失败
 */
EventWrapper.prototype.inputEvent = function (action, x, y, metaState) {
    if (agentEventWrapper == null) {
        return false;
    }
    return agentEventWrapper.injectInputEvent(action, x, y, metaState);
};

/**
 * 执行按下输入事件
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
 * @param x         x坐标
 * @param y         y坐标
 * @return 布尔型 true 代表成功 false代表失败
 */
EventWrapper.prototype.touchMove = function (x, y) {
    if (agentEventWrapper == null) {
        return false;
    }
    return agentEventWrapper.injectTouchMove(x, y);
};
/**
 * 执行弹起输入事件
 *
 * @param x         x坐标
 * @param y         y坐标
 * @return 布尔型 true 代表成功 false代表失败
 */
EventWrapper.prototype.touchUp = function (x, y) {
    if (agentEventWrapper == null) {
        return false;
    }
    return agentEventWrapper.injectTouchUp(x, y);
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
 * 重启设备
 * 适合 EC iOS 3.5.0+
 * @return boolean | true 成功 false 失败
 */
EventWrapper.prototype.reboot = function () {
    if (agentEventWrapper == null) {
        return false;
    }
    return agentEventWrapper.reboot();
};

/**
 * 关机设备
 * 适合 EC iOS 3.5.0+
 * @return boolean | true 成功 false 失败
 */
EventWrapper.prototype.shutdown = function () {
    if (agentEventWrapper == null) {
        return false;
    }
    return agentEventWrapper.shutdown();
};


/**
 * 返回桌面
 * @return boolean | true 成功 false 失败
 */
EventWrapper.prototype.home = function () {
    if (agentEventWrapper == null) {
        return false;
    }
    return agentEventWrapper.home();
};


/**
 * 强制打开主页，和home不同
 * @return boolean | true 成功 false 失败
 */
EventWrapper.prototype.homeScreen = function () {
    if (agentEventWrapper == null) {
        return false;
    }
    return agentEventWrapper.homeScreen();
};

/**
 * 屏幕是否是锁定状态
 * @return boolean | true 成功 false 失败
 */
EventWrapper.prototype.isLocked = function () {
    if (agentEventWrapper == null) {
        return false;
    }
    return agentEventWrapper.isLocked();
};


/**
 * 锁定屏幕
 * @return boolean | true 成功 false 失败
 */
EventWrapper.prototype.lockScreen = function () {
    if (agentEventWrapper == null) {
        return false;
    }
    return agentEventWrapper.lockScreen();
};
/**
 * 解锁屏幕，屏幕不能有密码等
 * @return boolean | true 成功 false 失败
 */
EventWrapper.prototype.unlockScreen = function () {
    if (agentEventWrapper == null) {
        return false;
    }
    return agentEventWrapper.unlockScreen();
};

/**
 * 模拟按键,例如home back等
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
 * 长按某个坐标
 * @param x x坐标
 * @param y y坐标
 * @param duration 持续时长 单位是毫秒
 * @return {boolean} true 成功，false 失败
 */
EventWrapper.prototype.longClickPoint = function (x, y, duration) {
    if (agentEventWrapper == null) {
        return false;
    }
    return agentEventWrapper.longClickPoint(x, y, duration);
};

/**
 * 输入文字
 * @param content 内容
 * @param duration 执行时间，单位是毫秒
 * @return {boolean} true 成功，false 失败
 */
EventWrapper.prototype.inputText = function (content, duration) {
    if (agentEventWrapper == null) {
        return false;
    }
    return agentEventWrapper.inputText(content, duration);
};

/**
 * 打开一个app
 * @param bundleId app的bundleID
 * @return {int} 进程的ID，如果是0，代表未打开
 */
EventWrapper.prototype.appLaunch = function (bundleId) {
    if (agentEventWrapper == null) {
        return 0;
    }
    return agentEventWrapper.appLaunch(bundleId);
};

/**
 * 设置代理程序的配置
 * @param ext 是一个map，例如 {"screenStreamQuality":100}
 *  screenStreamQuality 代表投屏质量 1 - 100
 *  screenStreamFramerate 代表投屏帧率 10 - 60
 * @return {bool} true 成功，false 失败
 */
EventWrapper.prototype.setAgentSetting = function (ext) {
    if (agentEventWrapper == null) {
        return false;
    }
    return agentEventWrapper.setAgentSetting(JSON.stringify(ext));
};


/**
 * 设置获取节点的基础参数，这个参数可以有效减少获取节点的数量和消耗的时间
 * @param ext 是一个map，例如 {"visibleFilter":100}
 *  visibleFilter 1 代表不管visible是true还是false都获取，2 代表只获取 visible=true的节点
 *  labelFilter 1 代表不管label是否有值都获取，2 代表只获取label有值的节点
 *  maxDepth 代表要获取节点的层级，建议  1 - 500
 * @return {bool} true 成功，false 失败
 */
EventWrapper.prototype.setFetchNodeParam = function (ext) {
    if (agentEventWrapper == null) {
        return false;
    }
    return agentEventWrapper.setFetchNodeParam(JSON.stringify(ext));
}


/**
 * 杀死一个进程
 * @param pid 进程ID
 * @return {bool} true 成功，false 失败
 */
EventWrapper.prototype.appKillByPid = function (pid) {
    if (agentEventWrapper == null) {
        return false;
    }
    return agentEventWrapper.appKillByPid(pid);
};

/**
 * 使用bundleID杀死一个进程
 * @param bundleId app的 bundleID
 * @return {boolean} true 成功，false 失败
 */
EventWrapper.prototype.appKillByBundleId = function (bundleId) {
    if (agentEventWrapper == null) {
        return false;
    }
    return agentEventWrapper.appKillByBundleId(bundleId);
};

/**
 * 重置USB链接，如果开起来自动化可以使用这个尝试
 * @return {boolean} true 成功，false 失败
 */
EventWrapper.prototype.resetUsbConn = function () {
    if (agentEventWrapper == null) {
        return false;
    }
    return agentEventWrapper.resetUsbConn();
}


/**
 * 使用bundleID 打开App, 这个不同于appLaunch函数，这个通过命令进行的 (无需启动自动化)
 * @param bundleId app的 bundleID
 * @return {boolean} true 成功，false 失败
 */
EventWrapper.prototype.openApp = function (bundleId) {
    if (agentEventWrapper == null) {
        return false;
    }
    return agentEventWrapper.openApp(bundleId);
}

/**
 * 使用 路径 安装app (无需启动自动化)
 * @param bundleId app的 bundleID
 * @param path ipa的路径 和桥接在同一个电脑上
 * @return {string} ok 代表 成功，其他字符串 失败
 */
EventWrapper.prototype.installApp = function (bundleId, path) {
    if (agentEventWrapper == null) {
        return false;
    }
    return agentEventWrapper.installApp(bundleId, path) + "";
}


/**
 * 使用bundleID 卸载app (无需启动自动化)
 * @param bundleId app的 bundleID
 * @return {string} ok 代表 成功，其他字符串 失败
 */
EventWrapper.prototype.uninstallApp = function (bundleId) {
    if (agentEventWrapper == null) {
        return false;
    }
    return agentEventWrapper.uninstallApp(bundleId) + "";
}


/**
 * 使用bundleID 停止App, 这个不同于 appKillByBundleId 函数，这个通过命令进行的 (无需启动自动化)
 * @param bundleId app的 bundleID
 * @return {boolean} true 成功，false 失败成功
 */
EventWrapper.prototype.stopApp = function (bundleId) {
    if (agentEventWrapper == null) {
        return false;
    }
    return agentEventWrapper.stopApp(bundleId);
}

/**
 * 设置剪贴板的值
 * @param content 内容
 * @param contentType 内容类型，分别是text或者url
 * @return {boolean} true 成功，false 失败
 */
EventWrapper.prototype.setPasteboard = function (content, contentType) {
    if (agentEventWrapper == null) {
        return false;
    }
    return agentEventWrapper.setPasteboard(content, contentType);
};

/**
 * 取得剪贴板的值
 * @param contentType 内容类型，分别是text或者url
 * @return {string} 字符串
 */
EventWrapper.prototype.getPasteboard = function (contentType) {
    if (agentEventWrapper == null) {
        return;
    }
    return agentEventWrapper.getPasteboard(contentType);
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
 * @param touch4 第4个手指的触摸点数组
 * @param touch5 第5个手指的触摸点数组
 * @param timeout 多点触摸执行的超时时间，单位是毫秒
 * @return boolean|布尔型
 */
EventWrapper.prototype.multiTouch = function (touch1, touch2, touch3, touch4, touch5, timeout) {
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
    if (touch4 != null) {
        x.push(touch4);
    }
    if (touch5 != null) {
        x.push(touch5);
    }
    return this.multiTouch2(x, timeout);
};


EventWrapper.prototype.multiTouch2 = function (pointArrays, timeout) {
    if (agentEventWrapper == null) {
        return false;
    }
    var x = JSON.stringify(pointArrays);
    return agentEventWrapper.multiTouch(x, timeout);
};


EventWrapper.prototype.readResAutoImage = function (fileName) {
    if (agentEventWrapper == null) {
        return null;
    }
    return agentEventWrapper.readResAutoImage(fileName);
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
        return false;
    }
    return agentEventWrapper.press(x, y, delay)
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
    if (data == null) {
        return false;
    }
    let d = JSON.stringify(data)
    return agentEventWrapper.setAgentCallParam(d);
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
    if (d == null || d == "") {
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
    if (d == null || d == "") {
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
    if (d == null || d == "") {
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
    if (d == null || d == "") {
        return null;
    }
    d = JSON.parse(d);
    return new NodeInfo(d);
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
    if (ds == null || ds == "") {
        return null;
    }
    return JSON.parse(ds);
};