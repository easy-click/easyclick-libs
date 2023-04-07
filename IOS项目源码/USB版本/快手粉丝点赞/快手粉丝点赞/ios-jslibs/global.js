function Point(javaPoint) {
    this.x = 0;
    this.y = 0;
    if (javaPoint != null) {
        this.x = javaPoint["x"];
        this.y = javaPoint["y"];
    }
}

Point.get = function () {
    return new Point(null);
};
Point.jsonToObject = function (res) {
    if (res == null || res == "") {
        return null;
    }
    res = JSON.parse(res);
    if (res == null) {
        return null;
    }
    return new Point(res);
};
Point.prototype.setX = function (x) {
    this.x = x;
    return this;
};
Point.prototype.setY = function (y) {
    this.y = y;
    return this;
};
Point.prototype.toJSONString = function () {
    return JSON.stringify(this);
};


function Rect(javaRect) {
    this.top = 0;
    this.bottom = 0;
    this.left = 0;
    this.right = 0;
    if (javaRect != null) {
        this.top = javaRect["top"];
        this.bottom = javaRect["bottom"];
        this.left = javaRect["left"];
        this.right = javaRect["right"];
    }
}

/**
 * 取得中间的坐标点
 * @return Point 对象
 */
Rect.prototype.center = function () {
    var p = new Point(null);
    p.x = this.left + (this.right - this.left) / 2;
    p.y = this.top + (this.bottom - this.top) / 2;
    return p;
};

Rect.prototype.centerX = function () {
    return this.left + (this.right - this.left) / 2;
};
Rect.prototype.randomX = function () {
    return random(this.left + 1, this.right - 1);
};
Rect.prototype.randomY = function () {
    return random(this.top + 1, this.bottom - 1);
};
Rect.prototype.centerY = function () {
    return this.top + (this.bottom - this.top) / 2;
};
Rect.jsonToObject = function (res) {
    if (res == null || res == "") {
        return null;
    }
    res = JSON.parse(res);
    if (res == null) {
        return null;
    }
    return new Rect(res);
};


Rect.get = function () {
    return new Rect(null);
};
Rect.prototype.setLeft = function (left) {
    this.left = left;
    return this;
};
Rect.prototype.setTop = function (top) {
    this.top = top;
    return this;
};
Rect.prototype.setRight = function (right) {
    this.right = right;
    return this;
};
Rect.prototype.setBottom = function (bottom) {
    this.bottom = bottom;
    return this;
};
Rect.prototype.toJSONString = function () {
    return JSON.stringify(this);
};

function Match(javaMatch) {
    this.point = null;
    this.similarity = 0;
    if (javaMatch != null) {
        this.similarity = javaMatch["similarity"];
        var d = javaMatch["point"];
        if (d != null) {
            this.point = new Point(d);
        }
    }
}

Match.prototype.toJSONString = function () {
    return JSON.stringify(this);
};

function AutoImage(uuid) {
    this.uuid = uuid;
}

/**
 * 点击坐标
 * @param x x坐标
 * @param y y坐标
 * @return boolean|布尔型
 */
function clickPoint(x, y) {
    return agentEvent.clickPoint(x, y);
}


/**
 * 设置屏幕方向
 * 适配版本 EC iOS 中控 3.0.0+
 * @param orientation 1 正常的竖屏，2 向右旋转90度(顺时针)
 * @return boolean|布尔型
 */
function setOrientation(orientation) {
    return agentEvent.setOrientation(orientation);
}

/**
 * 获取屏幕方向
 * 适配版本 EC iOS 中控 3.0.0+
 * @return int| 1 竖屏，2 横屏 （向右旋转90度(顺时针)）
 */
function getOrientation() {
    return agentEvent.getOrientation();
}


/**
 * 校正屏幕方向，适配坐标系
 * 适配版本 EC iOS 中控 3.0.0+
 * @param orientation 0 自动校正坐标系 1 强制竖屏坐标系，2 强制向右旋转90度(顺时针)坐标系
 * @return JSON字符串，里面的key分别是  orientation, screenWidth, screenHeight
 */
function adjustScreenOrientation(orientation) {
    return agentEvent.adjustScreenOrientation(orientation);
}


/**
 * 模拟人机交互，例如键盘输入和快捷键，具体健值请看
 * 适配版本 EC iOS 中控 3.0.0+
 * <a href="http://ieasyclick.com/iosdocs/#/zh-cn/advance/keyboard">http://ieasyclick.com/iosdocs/#/zh-cn/advance/keyboard</a>
 * @param eventPageID 人机交互类型
 * @param eventUsageID 人机交互值
 * @param delay 时长一般设置为 0.2 即可，可能有延迟
 * @return boolean|布尔型
 */
function ioHIDEvent(eventPageID, eventUsageID, delay) {
    return agentEvent.ioHIDEvent(eventPageID, eventUsageID, delay);
}

/**
 * 双击坐标
 * @param x x坐标
 * @param y y坐标
 * @return boolean|布尔型
 */
function doubleClickPoint(x, y) {
    return agentEvent.doubleClickPoint(x, y);
}


/**
 * 长按某个坐标
 * @param x x坐标
 * @param y y坐标
 * @param duration 持续时长 单位是毫秒
 * @return {boolean} true 成功，false 失败
 */
function longClickPoint(x, y, duration) {
    return agentEvent.longClickPoint(x, y, duration);

}

/**
 * 输入文字
 * @param content 内容
 * @param duration 执行时间，单位是毫秒
 * @return {boolean} true 成功，false 失败
 */
function inputText(content, duration) {
    return agentEvent.inputText(content, duration);

}

/**
 * 将元素节点变成XML
 * @return string string|null
 */
function dumpXml() {
    return agentEvent.dumpXml();
}

/**
 *  home
 *  @return bool 布尔型| true代表成功
 */
function home() {
    return agentEvent.home();
}

/**
 * 重启设备
 * 适合 EC iOS 3.5.0+
 * @return boolean | true 成功 false 失败
 */
function reboot() {
    return agentEvent.reboot();
}

/**
 * 强制打开主页，和home不同
 * @return boolean | true 成功 false 失败
 */
function homeScreen() {
    return agentEvent.homeScreen();
}

/**
 * 屏幕是否是锁定状态
 * @return boolean | true 成功 false 失败
 */
function isLocked() {
    return agentEvent.isLocked();
}

/**
 * 锁定屏幕
 * @return boolean | true 成功 false 失败
 */
function lockScreen() {
    return agentEvent.lockScreen();
}

/**
 * 解锁屏幕，屏幕不能有密码等
 * @return boolean | true 成功 false 失败
 */
function unlockScreen() {
    return agentEvent.unlockScreen();
}

/**
 *  运行程序
 * @param bundleId app的 bundleID
 *  @return int 整型| true代表成功
 */
function appLaunch(bundleId) {
    return agentEvent.appLaunch(bundleId);
}

/**
 * 设置代理程序的配置
 * 适配版本 EC iOS 中控 3.0.0+
 * @param ext 是一个map，例如 {"screenStreamQuality":100}
 *  screenStreamQuality 代表投屏质量 1 - 100
 *  screenStreamFramerate 代表投屏帧率 10 - 60
 * @return {bool} true 成功，false 失败
 */
function setAgentSetting(ext) {
    return agentEvent.setAgentSetting(ext);
}

/**
 * 设置获取节点的基础参数，这个参数可以有效减少获取节点的数量和消耗的时间
 * 适配版本 EC iOS 中控 3.0.0+
 * @param ext 是一个map，例如 {"visibleFilter":1}
 *  visibleFilter 1 代表不管visible是true还是false都获取，2 代表只获取 visible=true的节点
 *  labelFilter 1 代表不管label是否有值都获取，2 代表只获取label有值的节点
 *  maxDepth 代表要获取节点的层级，越少速度越快，建议  1 - 500
 *  excludedAttributes 代表要过滤的属性，用英文逗号分割，可以增加抓取速度，例如 visible,selected,enable
 * @return {bool} true 成功，false 失败
 */
function setFetchNodeParam(ext) {
    return agentEvent.setFetchNodeParam(ext);
}


/**
 * 使用bundleID杀死一个进程
 * @param bundleId app的 bundleID
 * @return {boolean} true 成功，false 失败成功
 */
function appKillByBundleId(bundleId) {
    return agentEvent.appKillByBundleId(bundleId);
}

/**
 * 重置USB链接，如果开起来自动化可以使用这个尝试
 * @return {boolean} true 成功，false 失败
 */
function resetUsbConn() {
    return agentEvent.resetUsbConn();
}


/**
 * 使用bundleID 打开App, 这个不同于appLaunch函数，这个通过命令进行的 (无需启动自动化)
 * @param bundleId app的 bundleID
 * @return {boolean} true 成功，false 失败
 */
function openApp(bundleId) {
    return agentEvent.openApp(bundleId);
}

/**
 * 使用bundleID 停止App, 这个不同于 appKillByBundleId 函数，这个通过命令进行的 (无需启动自动化)
 * @param bundleId app的 bundleID
 * @return {boolean} true 成功，false 失败
 */
function stopApp(bundleId) {
    return agentEvent.stopApp(bundleId);
}

/**
 * 使用 路径 安装app (无需启动自动化)
 * 注意：有的app安装时间过长  需要调用 setAgentTimeout(30*1000,30*1000) 设置下超时
 * @param bundleId app的 bundleID
 * @param path ipa的路径 和桥接在同一个电脑上
 * @return {string} ok 代表 成功，其他字符串 失败
 */
function installApp(bundleId, path) {
    return agentEvent.installApp(bundleId, path) + "";
}


/**
 * 使用bundleID 卸载app (无需启动自动化)
 * @param bundleId app的 bundleID
 * @return {string} ok 代表 成功，其他字符串 失败
 */
function uninstallApp(bundleId) {
    return agentEvent.uninstallApp(bundleId) + "";
}


/**
 * 从一个坐标滑动到另一个坐标
 * @param startX 起始坐标的X轴值
 * @param startY 起始坐标的Y轴值
 * @param endX   结束坐标的X轴值
 * @param endY   结束坐标的Y轴值
 * @param duration 持续时长 单位毫秒
 * @return 布尔型 true 滑动成功, false 滑动失败
 */
function swipeToPoint(startX, startY, endX, endY, duration) {
    return agentEvent.swipeToPoint(startX, startY, endX, endY, duration);
}


/**
 * <p>执行从一个坐标到另一个坐标的拖动</p>
 * </p>
 * @param startX 起始坐标的X轴值
 * @param startY 起始坐标的Y轴值
 * @param endX   结束坐标的X轴值
 * @param endY   结束坐标的Y轴值
 * @param duration 持续时长 单位毫秒
 * @return 布尔型 true 拖动成功, false 拖动失败
 */
function drag(startX, startY, endX, endY, duration) {
    return agentEvent.drag(startX, startY, endX, endY, duration);
}

function MultiPoint() {
    this.mps = [];
    this.m = {};
    this.create();
}

MultiPoint.prototype.create = function () {
    this.m = {};
    this.mps.push(this.m);
};
/**
 * 多点触摸对象
 * @return {MultiPoint} 选择器对象
 */
MultiPoint.get = function () {
    return new MultiPoint();
};
/**
 * 创建一个多点触摸下一个对象
 *
 * @return MultiPoint 选择器对象
 */
MultiPoint.prototype.next = function () {
    this.create();
    return this;
};
/**
 * 动作，可以参考android的MotionEvent.ACTION_*
 * @param value 一般情况下 按下为0，弹起为1，移动为2
 * @return MultiPoint
 */
MultiPoint.prototype.action = function (value) {
    if (this.m != null) {
        this.m["action"] = value;
    }
    return this;
};

/**
 * 按下动作
 * @return MultiPoint
 */
MultiPoint.prototype.downAction = function () {
    this.action(0);
    return this;
};

/**
 * 弹起动作
 * @return MultiPoint
 */
MultiPoint.prototype.upAction = function () {
    this.action(1);
    return this;
};

/**
 * 移动动作
 * @return MultiPoint
 */
MultiPoint.prototype.moveAction = function () {
    this.action(2);
    return this;
};


/**
 * 设置X坐标
 * @param value X坐标
 * @return MultiPoint
 */
MultiPoint.prototype.x = function (value) {
    if (this.m != null) {
        this.m["x"] = value;
    }
    return this;
};
/**
 * 设置X坐标
 * @param value X坐标
 * @return MultiPoint
 */
MultiPoint.prototype.y = function (value) {
    if (this.m != null) {
        this.m["y"] = value;
    }
    return this;
};
/**
 * 设置第几个手指触摸点，分别是 1，2，3等，代表第n个手机
 * @param value 整型
 * @return MultiPoint
 */
MultiPoint.prototype.pointer = function (value) {
    if (this.m != null) {
        this.m["pointer"] = value;
    }
    return this;
};
/**
 * 该动作延迟多少毫秒执行
 * @param value 延迟时间，单位是毫秒
 * @return MultiPoint
 */
MultiPoint.prototype.delay = function (value) {
    if (this.m != null) {
        this.m["delay"] = value;
    }
    return this;
};
/**
 * meta / modifier 键的状态，一般设置为0
 * @param value
 * @return MultiPoint
 */
MultiPoint.prototype.metaState = function (value) {
    if (this.m != null) {
        this.m["metaState"] = value;
    }
    return this;
};

MultiPoint.prototype.toJSON = function () {
    return this.mps;
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
 * @param touch4 第4个手指的触摸点数组
 * @param touch5 第5个手指的触摸点数组
 * @param timeout 多点触摸执行的超时时间，单位是毫秒，在无障碍模式下，这个参数不生效
 * @return boolean|布尔型
 */
function multiTouch(touch1, touch2, touch3, touch4, touch5, timeout) {
    return agentEvent.multiTouch(touch1, touch2, touch3, touch4, touch5, timeout);
}

/**
 * 取得某个范围的随机值
 * @param min 最小值
 * @param max 最大值
 * @return 整型 在min和max中间的值, 包含最大和最小值
 */
function random(min, max) {
    return utils.getRangeInt(min, max);
}


/**
 * 读取res文件夹中的资源文件，并返 AutoImage 图片对象
 * @param fileName 文件名称，不要加res前缀
 * @return AutoImage 如果是null代表没内容
 */
function readResAutoImage(fileName) {
    var id = null;
    id = image.readResAutoImage(fileName);
    if (id == null) {
        return null;
    }
    return new AutoImage(javaString2string(id));
}


/**
 * 长按住事件
 * @param x x坐标
 * @param y y坐标
 * @param delay 长按时间  毫秒
 * @return {bool} true 成功 false 失败
 */

function press(x, y, delay) {
    return agentEvent.press(x, y, delay);
}


/**
 * 执行按下事件
 * 适合EC 7.4.0+
 * @param x         x坐标
 * @param y         y坐标
 * @return 布尔型 true 代表成功 false代表失败
 */
function touchDown(x, y) {
    return agentEvent.touchDown(x, y);
}

/**
 * 执行移动事件
 * 适合EC 7.4.0+
 * @param x         x坐标
 * @param y         y坐标
 * @return 布尔型 true 代表成功 false代表失败
 */
function touchMove(x, y) {
    return agentEvent.touchMove(x, y);
}

/**
 * 执行弹起事件
 * 适合EC 7.4.0+
 * @param x         x坐标
 * @param y         y坐标
 * @return 布尔型 true 代表成功 false代表失败
 */
function touchUp(x, y) {
    return agentEvent.touchUp(x, y);
}


/**
 * 取得父级
 * 适配版本 EC iOS 中控 3.0.0+
 * @param nodeinfo NodeInfo对象
 * @return { NodeInfo} {NodeInfo 对象|null}
 */
function getNodeInfoParent(nodeinfo) {
    if (nodeinfo == null || nodeinfo.nid == null) {
        return null;
    }
    return agentEvent.getNodeInfoParent(nodeinfo.nid);
}

/**
 * 取得单个子节点
 * 适配版本 EC iOS 中控 3.0.0+
 * @param nodeinfo NodeInfo对象
 * @param index 子节点索引
 * @return {NodeInfo} {NodeInfo 对象|null}
 */
function getNodeInfoChild(nodeinfo, index) {
    if (nodeinfo == null || nodeinfo.nid == null) {
        return null;
    }
    return agentEvent.getNodeInfoChild(nodeinfo.nid, index);
}

/**
 * 取得所有子节点
 * @param nodeinfo NodeInfo对象
 * @return {Array} NodeInfo 数组
 */
function getNodeInfoAllChildren(nodeinfo) {
    if (nodeinfo == null || nodeinfo.nid == null) {
        return null;
    }
    return agentEvent.getNodeInfoAllChildren(nodeinfo.nid);
}

/**
 * 当前节点的所有兄弟节点
 * 适配版本 EC iOS 中控 3.0.0+
 * @param nodeinfo NodeInfo对象
 * @return {Array} NodeInfo 数组
 */
function getSiblingNodeInfo(nodeinfo) {
    if (nodeinfo == null || nodeinfo.nid == null) {
        return null;
    }
    return agentEvent.getSiblingNodeInfo(nodeinfo.nid);
}

/**
 * 在当前节点前面的兄弟节点
 * 适配版本 EC iOS 中控 3.0.0+
 * @param nodeinfo NodeInfo对象
 * @return NodeInfo 节点集合
 */
function getPreviousSiblingNodeInfo(nodeinfo) {
    if (nodeinfo == null || nodeinfo.nid == null) {
        return null;
    }
    return agentEvent.getPreviousSiblingNodeInfo(nodeinfo.nid);
}

/**
 * 在当前节点后面的兄弟节点
 * 适配版本 EC iOS 中控 3.0.0+
 * @param nodeinfo NodeInfo对象
 * @return {Array} NodeInfo 数组
 */
function getNextSiblingNodeInfo(nodeinfo) {

    if (nodeinfo == null || nodeinfo.nid == null) {
        return null;
    }
    return agentEvent.getNextSiblingNodeInfo(nodeinfo.nid);
}


function NodeInfo(javaNodeInfo) {
    this.bounds = null;
    this.childCount = 0;
    this.type = null;
    this.name = null;
    this.depth = null;
    this.id = null;
    this.selected = false;
    this.label = null;
    this.enable = false;
    this.value = null;
    this.accessible = false;
    this.visible = false;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.nid = null;
    this.parentId = null;
    this.index = 0;

    if (javaNodeInfo != null) {
        if (javaNodeInfo["bounds"] != null) {
            this.bounds = new Rect(javaNodeInfo["bounds"]);
        }
        this.childCount = javaNodeInfo["childcount"];
        this.type = javaNodeInfo["type"];
        this.value = javaNodeInfo["value"];
        this.name = javaNodeInfo["name"];
        this.label = javaNodeInfo["label"];
        this.enable = javaNodeInfo["enable"];
        this.accessible = javaNodeInfo["accessible"];
        this.id = javaNodeInfo["id"];
        this.selected = javaNodeInfo["selected"];
        this.visible = javaNodeInfo["visible"];
        this.nid = javaNodeInfo["nid"];
        this.parentId = javaNodeInfo["parentId"];
        this.index = javaNodeInfo["index"];
        this.depth = javaNodeInfo["depth"];
        this.x = javaNodeInfo["x"];
        this.y = javaNodeInfo["y"];
        this.width = javaNodeInfo["width"];
        this.height = javaNodeInfo["height"];
    }
}

/**
 * 该节点的父级节点
 * 适配版本 EC iOS 中控 3.0.0+
 * @return NodeInfo 对象 或者null
 */
NodeInfo.prototype.parent = function () {
    return getNodeInfoParent(this);
};


/**
 * 取得单个子节点
 * 适配版本 EC iOS 中控 3.0.0+
 * @param index 子节点索引
 * @return NodeInfo 对象 或者null
 */
NodeInfo.prototype.child = function (index) {
    return getNodeInfoChild(this, index);
};


/**
 * 取得所有子节点
 * 适配版本 EC iOS 中控 3.0.0+
 * @return NodeInfo 节点集合
 */
NodeInfo.prototype.allChildren = function () {
    return getNodeInfoAllChildren(this);
};


/**
 * 当前节点的所有兄弟节点
 * 适配版本 EC iOS 中控 3.0.0+
 * @return NodeInfo 节点集合
 */
NodeInfo.prototype.siblings = function () {
    return getSiblingNodeInfo(this);
};


/**
 * 在当前节点前面的兄弟节点
 * 适配版本 EC iOS 中控 3.0.0+
 * @return NodeInfo 节点集合
 */
NodeInfo.prototype.previousSiblings = function () {
    return getPreviousSiblingNodeInfo(this);
};

/**
 * 通过选择器 获取第一个节点信息
 * 适配版本 EC iOS 中控 3.0.0+
 * @param selectors 选择器
 * @param timeout
 * @return {@link NodeInfo} 对象或者null
 */
NodeInfo.prototype.getOneNodeInfo = function (selectors, timeout) {
    return agentEvent.getOneNodeInfoForNode(this.nid, selectors, timeout);
};

/**
 * 点击中心点
 * @return 布尔型 true 成功
 */
NodeInfo.prototype.clickCenter = function () {
    return clickCenter(this.bounds);
};
/**
 * 点击随机的点
 * @return 布尔型 true 成功
 */
NodeInfo.prototype.clickRandom = function () {
    return clickPoint(this.bounds.randomX(), this.bounds.randomY());
};

/**
 * 点击某个区域中心坐标点
 * @param rect 区域
 * @return  布尔型 true 成功，false 失败
 */
function clickCenter(rect) {
    if (rect == undefined) {
        return false;
    }
    return agentEvent.clickPoint(rect.centerX(), rect.centerY());
}

/**
 * 通过选择器 获取节点信息
 * 适配版本 EC iOS 中控 3.0.0+
 * @param selectors 选择器
 * @param timeout
 * @return {Array} NodeInfo 数组
 */
NodeInfo.prototype.getNodeInfo = function (selectors, timeout) {
    return agentEvent.getNodeInfoForNode(this.nid, selectors, timeout);
};

/**
 * 在当前节点后面的兄弟节点
 * 适配版本 EC iOS 中控 3.0.0+
 * @return NodeInfo 节点集合
 */
NodeInfo.prototype.nextSiblings = function () {
    return getNextSiblingNodeInfo(this);
};


NodeInfo.prototype.toJSONString = function () {
    return JSON.stringify(this);
};

/**
 * 转换成nodeinfo的数组
 * @param d
 * @return NodeInfo {NodeInfo 数组 | null}
 */
function nodeInfoArray(d) {
    if (d == null || d == "") {
        return null;
    }
    d = JSON.parse(d);
    var x = [];
    for (var i = 0; i < d.length; i++) {
        x.push(new NodeInfo(d[i]));
    }
    return x;
}

/**
 * 获取节点信息
 * 适配版本 EC iOS 中控 3.0.0+
 * @param selectors 选择器
 * @param timeout 超时时间，单位是毫秒
 * @return {Array} NodeInfo 数组 节点信息集合
 */
function getNodeInfo(selectors, timeout) {
    return agentEvent.getNodeInfo(selectors, timeout);
}

/**
 * 锁定当前节点，锁定后，后面就算界面刷新，但是节点还是老的信息，需要和releaseNode进行配合才能进行解锁
 * 适配版本 EC iOS 中控 3.0.0+
 */
function lockNode() {
    agentEvent.lockNode();
}

/**
 * 释放节点的锁，释放后，当界面刷新的时候，节点信息会变成最新的
 * 适配版本 EC iOS 中控 3.0.0+
 */
function releaseNode() {
    agentEvent.releaseNode();
}

/**
 * 通过选择器 获取第一个节点信息
 * 适配版本 EC iOS 中控 3.0.0+
 * @param selectors 选择器
 * @param timeout
 * @return {NodeInfo} 对象或者null
 */
function getOneNodeInfo(selectors, timeout) {
    return agentEvent.getOneNodeInfo(selectors, timeout);
}

/**
 * 节点选择器集合
 * 适配版本 EC iOS 中控 3.0.0+
 * @constructor
 */
function S() {
    this.selectors = [];
    this.attr = {};
    this.createSelector();
}

S.prototype.createSelector = function () {
    this.attr = {};
    this.selectors.push(this.attr);
};
/**
 * 获取节点选择器集合的对象
 * 适配版本 EC iOS 中控 3.0.0+
 * @return {S} 选择器对象
 */
S.get = function () {
    return new S();
};
/**
 * 获取节点信息
 * 适配版本 EC iOS 中控 3.0.0+
 * @param timeout 超时时间
 * @return {Array} 节点信息集合
 */
S.prototype.getNodeInfo = function (timeout) {
    return getNodeInfo(this, timeout);
};

/**
 * 通过选择器 获取第一个节点信息
 * 适配版本 EC iOS 中控 3.0.0+
 * @param timeout 等待时间，单位是毫秒
 * @return {NodeInfo} 对象或者null
 */
S.prototype.getOneNodeInfo = function (timeout) {
    return getOneNodeInfo(this, timeout);
};


/**
 * 创建一个子节点选择器
 * 适配版本 EC iOS 中控 3.0.0+
 * @return {S} 选择器对象
 */
S.prototype.child = function () {
    this.createSelector();
    return this;
};
/**
 * 按照属性 visible 进行选择
 * 适配版本 EC iOS 中控 3.0.0+
 * @param visible true 或者 false
 * @return {S}  节点选择器
 */
S.prototype.visible = function (visible) {
    if (this.attr != null) {
        this.attr["visible"] = visible;
    }
    return this;
};

/**
 * 按照属性 selected 进行选择
 * 适配版本 EC iOS 中控 3.0.0+
 * @param selected true 或者 false
 * @return {S}  节点选择器
 */
S.prototype.selected = function (selected) {
    if (this.attr != null) {
        this.attr["selected"] = selected;
    }
    return this;
};

/**
 * 按照属性 depth 进行选择
 * 适配版本 EC iOS 中控 3.0.0+
 * @param depth
 * @return {S}  节点选择器
 */
S.prototype.depth = function (depth) {
    if (this.attr != null) {
        this.attr["depth"] = depth;
    }
    return this;
};

/**
 * 按照属性 enable 进行选择
 * 适配版本 EC iOS 中控 3.0.0+
 * @param enabled true 或者 false
 * @return {S}  节点选择器
 */
S.prototype.enable = function (enable) {
    if (this.attr != null) {
        this.attr["enable"] = enable;
    }
    return this;
};

/**
 * 按照属性 accessible 进行选择
 * 适配版本 EC iOS 中控 3.0.0+
 * @param accessible true 或者 false
 * @return {S}  节点选择器
 */
S.prototype.accessible = function (accessible) {
    if (this.attr != null) {
        this.attr["accessible"] = accessible;
    }
    return this;
};


S.prototype.nid = function (nid) {
    if (this.attr != null) {
        this.attr["nid"] = nid;
    }
    return this;
};


/**
 * 按照属性 enabled 进行选择
 * 适配版本 EC iOS 中控 3.0.0+
 * @param enabled true 或者 false
 * @return {S} 节点选择器
 */
S.prototype.enabled = function (enabled) {
    if (this.attr != null) {
        this.attr["enabled"] = enabled;
    }
    return this;
};


/**
 * 按照属性 bounds 进行范围
 * 适配版本 EC iOS 中控 3.0.0+
 * @param left 范围左边数值
 *  @param top 范围上边数值
 *  @param right 范围右边数值
 *  @param bottom 范围底边数值
 * @return {S} 节点选择器
 */
S.prototype.bounds = function (left, top, right, bottom) {
    if (this.attr != null) {
        this.attr["bounds"] = left + "," + top + "," + right + "," + bottom;
    }
    return this;
};


/**
 * 按照属性 label 进行匹配
 * 适配版本 EC iOS 中控 3.0.0+
 * @param value 字符串
 * @return {S} 节点选择器
 */
S.prototype.label = function (value) {
    if (this.attr != null) {
        this.attr["label"] = value;
    }
    return this;
};
/**
 * 按照属性 label 进行匹配,支持正则
 * 适配版本 EC iOS 中控 3.0.0+
 * @param value 字符串
 * @return {S} 节点选择器
 */
S.prototype.labelMatch = function (value) {
    if (this.attr != null) {
        this.attr["labelMatch"] = value;
    }
    return this;
};


/**
 * 按照属性 type 进行匹配
 * 适配版本 EC iOS 中控 3.0.0+
 * @param value 字符串
 * @return {S} 节点选择器
 */
S.prototype.type = function (value) {
    if (this.attr != null) {
        this.attr["type"] = value;
    }
    return this;
};
/**
 * 按照属性 type 进行匹配,支持正则
 * 适配版本 EC iOS 中控 3.0.0+
 * @param value 字符串
 * @return {S} 节点选择器
 */
S.prototype.typeMatch = function (value) {
    if (this.attr != null) {
        this.attr["typeMatch"] = value;
    }
    return this;
};


/**
 * 按照属性 id 进行匹配
 * 适配版本 EC iOS 中控 3.0.0+
 * @param value 字符串
 * @return {S} 节点选择器
 */
S.prototype.id = function (value) {
    if (this.attr != null) {
        this.attr["id"] = value;
    }
    return this;
};
/**
 * 按照属性 id 进行匹配，支持正则
 * 适配版本 EC iOS 中控 3.0.0+
 * @param value 字符串
 * @return {S} 节点选择器
 */
S.prototype.idMatch = function (value) {
    if (this.attr != null) {
        this.attr["idMatch"] = value;
    }
    return this;
};
/**
 * 按照属性 value 进行匹配
 * 适配版本 EC iOS 中控 3.0.0+
 * @param value 字符串
 * @return {S} 节点选择器
 */
S.prototype.value = function (value) {
    if (this.attr != null) {
        this.attr["value"] = value;
    }
    return this;
};
/**
 * 按照属性 value 进行匹配，支持正则
 * 适配版本 EC iOS 中控 3.0.0+
 * @param value 字符串
 * @return {S} 节点选择器
 */
S.prototype.valueMatch = function (value) {
    if (this.attr != null) {
        this.attr["valueMatch"] = value;
    }
    return this;
};

/**
 * 按照属性 name 进行匹配
 * 适配版本 EC iOS 中控 3.0.0+
 * @param value 字符串
 * @return {S} 节点选择器
 */
S.prototype.name = function (value) {
    if (this.attr != null) {
        this.attr["name"] = value;
    }
    return this;
};
/**
 * 按照属性 name 进行匹配，支持正则
 * 适配版本 EC iOS 中控 3.0.0+
 * @param value 字符串
 * @return {S} 节点选择器
 */
S.prototype.nameMatch = function (value) {
    if (this.attr != null) {
        this.attr["nameMatch"] = value;
    }
    return this;
};


/**
 * 按照属性 index 进行匹配
 * 适配版本 EC iOS 中控 3.0.0+
 * @param value 字符串
 * @return {S} 节点选择器
 */
S.prototype.index = function (value) {
    if (this.attr != null) {
        this.attr["index"] = value;
    }
    return this;
};

/**
 * 按照属性 childCount 进行匹配
 * 适配版本 EC iOS 中控 3.0.0+
 * @param value 字符串
 * @return {S} 节点选择器
 */
S.prototype.childCount = function (value) {
    if (this.attr != null) {
        this.attr["childcount"] = value;
    }
    return this;
};


S.prototype.toJSONString = function () {
    return JSON.stringify(this.selectors);
};


/**
 * 按照属性 label 进行匹配
 * 适配版本 EC iOS 中控 3.0.0+
 * @param value 字符串
 * @return {S} 节点选择器
 */
function label(value) {
    return S.get().label(value);
}

/**
 * 按照属性 label 进行匹配, 支持正则
 * 适配版本 EC iOS 中控 3.0.0+
 * @param value 字符串
 * @return {S} 节点选择器
 */
function labelMatch(value) {
    return S.get().labelMatch(value);
}

/**
 * 按照属性 name 进行匹配
 * 适配版本 EC iOS 中控 3.0.0+
 * @param value 字符串
 * @return {S} 节点选择器
 */
function name(value) {
    return S.get().name(value);
}

/**
 * 按照属性 id 进行匹配
 * 适配版本 EC iOS 中控 3.0.0+
 * @param value 字符串
 * @return {S} 节点选择器
 */
function id(value) {
    return S.get().id(value);
}

/**
 * 按照属性 id 进行匹配, 支持正则
 * 适配版本 EC iOS 中控 3.0.0+
 * @param value 字符串
 * @return {S} 节点选择器
 */
function idMatch(value) {
    return S.get().idMatch(value);
}

/**
 * 按照属性 value 进行匹配
 * 适配版本 EC iOS 中控 3.0.0+
 * @param value 字符串
 * @return {S} 节点选择器
 */
function value(value) {
    return S.get().value(value);
}

/**
 * 按照属性 value 进行匹配, 支持正则
 * 适配版本 EC iOS 中控 3.0.0+
 * @param value 字符串
 * @return {S} 节点选择器
 */
function valueMatch(value) {
    return S.get().valueMatch(value);
}

/**
 * 按照属性 name 进行匹配, 支持正则
 * 适配版本 EC iOS 中控 3.0.0+
 * @param value 字符串
 * @return {S} 节点选择器
 */
function nameMatch(value) {
    return S.get().nameMatch(value);
}

/**
 * 按照属性 type 进行匹配
 * 适配版本 EC iOS 中控 3.0.0+
 * @param value 字符串
 * @return {S} 节点选择器
 */
function type(value) {
    return S.get().type(value);
}


/**
 * 按照属性 bounds 进行范围
 * 适配版本 EC iOS 中控 3.0.0+
 * @param left 范围左边数值
 *  @param top 范围上边数值
 *  @param right 范围右边数值
 *  @param bottom 范围底边数值
 * @return {S} 节点选择器
 */
function bounds(left, top, right, bottom) {
    return S.get().bounds(left, top, right, bottom);
}


/**
 * 按照属性 type 进行匹配, 支持正则
 * 适配版本 EC iOS 中控 3.0.0+
 * @param value 字符串
 * @return {S} 节点选择器
 */
function typeMatch(value) {
    return S.get().typeMatch(value);
}

/**
 * 按照属性 visible 进行匹配
 * 适配版本 EC iOS 中控 3.0.0+
 * @param value 字符串
 * @return {S} 节点选择器
 */
function visible(value) {
    return S.get().visible(value);
}

/**
 * 按照属性 selected 进行匹配
 * 适配版本 EC iOS 中控 3.0.0+
 * @param value 字符串
 * @return {S} 节点选择器
 */
function selected(value) {
    return S.get().selected(value);
}

/**
 * 按照属性 depth 进行匹配
 * 适配版本 EC iOS 中控 3.0.0+
 * @param value 字符串
 * @return {S} 节点选择器
 */
function depth(value) {
    return S.get().depth(value);
}

/**
 * 按照属性 enable 进行匹配
 * 适配版本 EC iOS 中控 3.0.0+
 * @param value 字符串
 * @return {S} 节点选择器
 */
function enable(value) {
    return S.get().enable(value);
}


/**
 * 按照属性 childCount 进行匹配
 * 适配版本 EC iOS 中控 3.0.0+
 * @param value 字符串
 * @return {S} 节点选择器
 */
function childCount(value) {
    return S.get().childCount(value);
}


/**
 * 按照属性 accessible 进行匹配
 * 适配版本 EC iOS 中控 3.0.0+
 * @param value 字符串
 * @return {S} 节点选择器
 */
function accessible(value) {
    return S.get().accessible(value);
}


/**
 * 按照属性 index 进行匹配
 * 适配版本 EC iOS 中控 3.0.0+
 * @param value 字符串
 * @return {S} 节点选择器
 */
function index(value) {
    return S.get().index(value);
}
