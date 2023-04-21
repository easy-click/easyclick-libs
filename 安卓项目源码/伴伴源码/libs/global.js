

/**
 * 检查apk主版本是否是8，如果不是会有异常发生
 * 该函数可以在程序中调用，防止iec和apk版本不一致
 * 适合版本 EC 8.2.0+
 */
function checkApkVersion8() {
    return configWrapper.checkApkVersion8();
}
/**
 * 检查apk主版本是否是9，如果不是会有异常发生
 * 该函数可以在程序中调用，防止iec和apk版本不一致
 * 适合版本 EC 9.1.0+
 */
function checkApkVersion9() {
    return configWrapper.checkApkVersion9();
}


/**
 * 读取JSON中的整型数据
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 * @param key        配置项目
 * @return 整型 JSON中key对应的整型数据
 */
function readConfigInt(key) {
    return configWrapper.getParamInt(key);
}

/**
 * 取得配置的JSON
 * @return {any} JSON数据
 */
function getConfigJSON() {
    var d = configWrapper.getParams();
    if (d == null || d=="") {
        return null;
    }
    return JSON.parse(d);
}


function readConfigDouble(key) {
    return configWrapper.getParamDouble(key);
}

function readConfigBoolean(key) {
    return configWrapper.getParamBoolean(key);
}

/**
 * 更新配置
 * @param key 键
 * @param value  值
 * @return {boolean} true 成功，false失败
 */
function updateConfig(key, value) {
    return configWrapper.updateConfig(key, value);
}

function readConfigLong(key) {
    return configWrapper.getParamLong(key);
}

/**
 * 读取JSON中的字符串数据
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param key        配置项目
 * @return string JSON中key对应的字符串数据
 */
function readConfigString(key) {
    return javaString2string(configWrapper.getParamString(key));
}

/**
 * 删除UI配置
 *
 * @param key        配置项目
 * @return {bool} true 代表成功 false 代表失败
 */
function deleteConfig(key) {
    return configWrapper.deleteConfig(key);
}

/**
 * 是否是agent模式
 */
function isAgentMode() {
    if (configWrapper == null) {
        return false;
    }
    return configWrapper.isAgentMode();
}

/**
 * 是否是无障碍模式
 */
function isAccMode() {
    if (configWrapper == null) {
        return false;
    }
    return configWrapper.isAccMode();
}


function isFastJs() {
    if (configWrapper == null) {
        return false;
    }
    //return configWrapper.isFastJs();
    return false;
}

function isStableJs() {
    if (configWrapper == null) {
        return false;
    }
    //return configWrapper.isStableJs();
    return true;
}


/**
 * 节点选择器集合
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
 * @return {S} 选择器对象
 */
S.get = function () {
    return new S();
};
/**
 * 获取节点信息
 * @param timeout 超时时间
 * @return {Array} 节点信息集合
 */
S.prototype.getNodeInfo = function (timeout) {
    return getNodeInfo(this, timeout);
};

/**
 * 通过选择器 获取第一个节点信息
 * @param timeout 等待时间，单位是毫秒
 * @return {NodeInfo} 对象或者null
 */
S.prototype.getOneNodeInfo = function (timeout) {
    return getOneNodeInfo(this, timeout);
};


/**
 * 创建一个子节点选择器
 * @return {S} 选择器对象
 */
S.prototype.child = function () {
    this.createSelector();
    return this;
};
S.prototype.row = function (row) {
    if (this.attr != null) {
        this.attr["row"] = row;
    }
    return this;
};
S.prototype.column = function (column) {
    if (this.attr != null) {
        this.attr["column"] = column;
    }
    return this;
};
S.prototype.rowSpan = function (rowSpan) {
    if (this.attr != null) {
        this.attr["rowSpan"] = rowSpan;
    }
    return this;
};
S.prototype.columnSpan = function (columnSpan) {
    if (this.attr != null) {
        this.attr["columnSpan"] = columnSpan;
    }
    return this;
};
S.prototype.rowCount = function (rowCount) {
    if (this.attr != null) {
        this.attr["rowCount"] = rowCount;
    }
    return this;
};
S.prototype.columnCount = function (columnCount) {
    if (this.attr != null) {
        this.attr["columnCount"] = columnCount;
    }
    return this;
};
/**
 * 按照属性 selected 进行选择
 *
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
 * 按照属性 visible 进行选择
 *
 * @param visible true 或者 false
 * @return {S}  节点选择器
 */
S.prototype.visible = function (visible) {
    if (this.attr != null) {
        this.attr["visible"] = visible;
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
 * 按照属性 focused 进行选择
 *
 * @param focused true 或者 false
 * @return {S}  节点选择器
 */
S.prototype.focused = function (focused) {
    if (this.attr != null) {
        this.attr["focused"] = focused;
    }
    return this;
};


/**
 * 按照属性 enabled 进行选择
 *
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
 * 按照属性 focusable 进行选择
 *
 * @param focusable true 或者 false
 * @return  {S} 节点选择器
 */
S.prototype.focusable = function (focusable) {

    if (this.attr != null) {
        this.attr["focusable"] = focusable;
    }
    return this;
};


/**
 * 按照属性 scrollable 进行选择
 *
 * @param scrollable true 或者 false
 * @return  {S} 节点选择器
 */
S.prototype.scrollable = function (scrollable) {
    if (this.attr != null) {
        this.attr["scrollable"] = scrollable;
    }
    return this;
};


/**
 * 按照属性 long-clickable 进行选择
 *
 * @param longClickable true 或者 false
 * @return {S} 节点选择器
 */
S.prototype.longClickable = function (longClickable) {

    if (this.attr != null) {
        this.attr["longClickable"] = longClickable;
    }
    return this;
};


/**
 * 按照属性 clickable 进行选择
 *
 * @param clickable true 或者 false
 * @return {S} 节点选择器
 */
S.prototype.clickable = function (clickable) {

    if (this.attr != null) {
        this.attr["clickable"] = clickable;
    }
    return this;
};


/**
 * 按照属性 checked 进行选择
 *
 * @param checked true 或者 false
 * @return  {S} 节点选择器
 */
S.prototype.checked = function (checked) {

    if (this.attr != null) {
        this.attr["checked"] = checked;
    }
    return this;
};


/**
 * 按照属性 checkable 进行选择
 *
 * @param checkable true 或者 false
 * @return {S} 节点选择器
 */
S.prototype.checkable = function (checkable) {

    if (this.attr != null) {
        this.attr["checkable"] = checkable;
    }
    return this;
};


/**
 * 按照属性 id 进行匹配
 *
 * @param id 字符串
 * @return {S} 节点选择器
 */
S.prototype.id = function (id) {
    if (this.attr != null) {
        this.attr["id"] = id;
    }
    return this;
};

/**
 * 按照属性 id 进行匹配, 支持正则
 *
 * @param id 字符串
 * @return {S} 节点选择器
 */
S.prototype.idMatch = function (id) {
    if (this.attr != null) {
        this.attr["idMatch"] = id;
    }
    return this;
};

/**
 * 按照属性 pkg 进行匹配
 *
 * @param pkg 字符串
 * @return {S} 节点选择器
 */
S.prototype.pkg = function (pkg) {

    if (this.attr != null) {
        this.attr["pkg"] = pkg;
    }
    return this;
};

/**
 * 按照属性 pkg 进行匹配，支持正则
 *
 * @param pkg 字符串
 * @return {S} 节点选择器
 */
S.prototype.pkgMatch = function (pkg) {

    if (this.attr != null) {
        this.attr["pkgMatch"] = pkg;
    }
    return this;
};

/**
 * 按照属性 desc 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
S.prototype.desc = function (value) {
    if (this.attr != null) {
        this.attr["desc"] = value;
    }
    return this;
};
/**
 * 按照属性 desc 进行匹配,支持正则
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
S.prototype.descMatch = function (value) {
    if (this.attr != null) {
        this.attr["descMatch"] = value;
    }
    return this;
};


/**
 * 按照属性 bounds 进行范围
 *
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
 * 按照属性 text 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
S.prototype.text = function (value) {
    if (this.attr != null) {
        this.attr["text"] = value;
    }
    return this;
};
/**
 * 按照属性 text 进行匹配,支持正则
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
S.prototype.textMatch = function (value) {
    if (this.attr != null) {
        this.attr["textMatch"] = value;
    }
    return this;
};
/**
 * 按照属性 clz 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
S.prototype.clz = function (value) {
    if (this.attr != null) {
        this.attr["clz"] = value;
    }
    return this;
};
/**
 * 按照属性 clz 进行匹配，支持正则
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
S.prototype.clzMatch = function (value) {
    if (this.attr != null) {
        this.attr["clzMatch"] = value;
    }
    return this;
};


/**
 * 按照属性 depth 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
S.prototype.depth = function (value) {

    if (this.attr != null) {
        this.attr["depth"] = value;
    }
    return this;
};

/**
 * 按照属性 index 进行匹配
 *
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
 * 按照属性 drawingOrder 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
S.prototype.drawingOrder = function (value) {

    if (this.attr != null) {
        this.attr["drawingOrder"] = value;
    }
    return this;
};
/**
 * 按照属性 childCount 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
S.prototype.childCount = function (value) {
    if (this.attr != null) {
        this.attr["childCount"] = value;
    }
    return this;
};
/**
 * 按照属性 editable 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
S.prototype.editable = function (value) {
    if (this.attr != null) {
        this.attr["editable"] = value;
    }
    return this;
};
/**
 * 按照属性 password 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
S.prototype.password = function (value) {
    if (this.attr != null) {
        this.attr["password"] = value;
    }
    return this;
};
/**
 * 按照属性 dismissable 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
S.prototype.dismissable = function (value) {
    if (this.attr != null) {
        this.attr["dismissable"] = value;
    }
    return this;
};
/**
 * 按照属性 multiLine 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
S.prototype.multiLine = function (value) {
    if (this.attr != null) {
        this.attr["multiLine"] = value;
    }
    return this;
};
S.prototype.toJSONString = function () {
    return JSON.stringify(this.selectors);
};


function NotificationInfo(javaNotification) {
    this.seqId = null;
    this.pkg = null;
    this.text = null;
    this.title = null;
    this.subText = null;
    this.infoText = null;
    this.time = 0;
    this.bigText = null;
    this.titleBig = null;
    this.summaryBig = null;
    this.key = null;
    if (javaNotification != null) {
        this.seqId = javaNotification['seqId'];
        this.pkg = javaNotification['pkg'];
        this.text = javaNotification["text"];
        this.title = javaNotification["title"];
        this.subText = javaNotification["subText"];
        this.tickerText = javaNotification["infoText"];
        this.time = javaNotification["time"];
        this.bigText = javaNotification["bigText"];
        this.titleBig = javaNotification["titleBig"];
        this.summaryBig = javaNotification["summaryBig"];
        this.key = javaNotification["key"];
    }
}


function ToastInfo(javaToast) {
    this.pkg = null;
    this.text = null;
    this.time = 0;
    if (javaToast != null) {
        this.pkg = javaToast["pkg"];
        this.text = javaToast["text"];
        this.time = javaToast["time"];

    }
}

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
    if (res == null || res=="") {
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
Rect.jsonToObject = function (res) {
    if (res == null || res=="") {
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

function NodeInfo(javaNodeInfo) {
    this.bounds = null;
    this.visibleBounds = null;
    this.childCount = 0;
    this.clz = null;
    this.desc = null;
    this.pkg = null;
    this.text = null;
    this.checkable = false;
    this.checked = false;
    this.clickable = false;
    this.enabled = false;
    this.focusable = false;
    this.focused = false;
    this.longClickable = false;
    this.scrollable = false;
    this.selected = false;
    this.id = null;
    this.nid = null;
    this.parentId = null;
    this.index = 0;
    this.depth = 0;
    this.visible = false;
    this.drawingOrder = 0;
    this.editable = false;
    this.password = false;
    this.multiLine = false;
    this.dismissable = false;

    this.row = 0;
    this.column = 0;
    this.rowSpan = 0;
    this.columnSpan = 0;
    this.rowCount = 0;
    this.columnCount = 0;

    if (javaNodeInfo != null) {
        if (javaNodeInfo["bounds"] != null) {
            this.bounds = new Rect(javaNodeInfo["bounds"]);
        }
        if (javaNodeInfo["visibleBounds"] != null) {
            this.visibleBounds = new Rect(javaNodeInfo["visibleBounds"]);
        }
        this.childCount = javaNodeInfo["childCount"];

        this.row = javaNodeInfo["row"];
        this.column = javaNodeInfo["column"];
        this.rowSpan = javaNodeInfo["rowSpan"];
        this.columnSpan = javaNodeInfo["columnSpan"];
        this.rowCount = javaNodeInfo["rowCount"];
        this.columnCount = javaNodeInfo["columnCount"];


        this.clz = javaNodeInfo["clz"];
        this.pkg = javaNodeInfo["pkg"];
        this.desc = javaNodeInfo["desc"];
        this.text = javaNodeInfo["text"];
        this.checkable = javaNodeInfo["checkable"];
        this.checked = javaNodeInfo["checked"];
        this.clickable = javaNodeInfo["clickable"];
        this.enabled = javaNodeInfo["enabled"];
        this.focusable = javaNodeInfo["focusable"];
        this.focused = javaNodeInfo["focused"];
        this.longClickable = javaNodeInfo["longClickable"];
        this.scrollable = javaNodeInfo["scrollable"];
        this.selected = javaNodeInfo["selected"];
        this.id = javaNodeInfo["id"];
        this.nid = javaNodeInfo["nid"];
        this.parentId = javaNodeInfo["parentId"];
        this.index = javaNodeInfo["index"];
        this.depth = javaNodeInfo["depth"];
        this.drawingOrder = javaNodeInfo["drawingOrder"];
        this.editable = javaNodeInfo["editable"];
        this.password = javaNodeInfo["password"];
        this.multiLine = javaNodeInfo["multiLine"];
        this.dismissable = javaNodeInfo["dismissable"];
        this.visible = javaNodeInfo["visible"];
    }
}

/**
 * 该节点的父级节点
 * @return NodeInfo 对象 或者null
 */
NodeInfo.prototype.parent = function () {
    return getNodeInfoParent(this);
};


/**
 * 取得单个子节点
 * @param index 子节点索引
 * @return NodeInfo 对象 或者null
 */
NodeInfo.prototype.child = function (index) {
    return getNodeInfoChild(this, index);
};


/**
 * 取得所有子节点
 * @return NodeInfo 节点集合
 */
NodeInfo.prototype.allChildren = function () {
    return getNodeInfoAllChildren(this);
};


/**
 * 当前节点的所有兄弟节点
 * @return NodeInfo 节点集合
 */
NodeInfo.prototype.siblings = function () {
    return getSiblingNodeInfo(this);
};


/**
 * 在当前节点前面的兄弟节点
 * @return NodeInfo 节点集合
 */
NodeInfo.prototype.previousSiblings = function () {
    return getPreviousSiblingNodeInfo(this);
};
/**
 * 点击中心点
 * @return 布尔型 true 成功
 */
NodeInfo.prototype.clickCenter = function () {
    return clickCenter(this.bounds);
};

/**
 * 通过选择器 获取第一个节点信息
 * @param selectors 选择器
 * @param timeout
 * @return {@link NodeInfo} 对象或者null
 */
NodeInfo.prototype.getOneNodeInfo = function (selectors, timeout) {
    if (isAccMode()) {
        return acEvent.getOneNodeInfoForNode(this.nid, selectors, timeout);
    } else if (isAgentMode()) {
        return agentEvent.getOneNodeInfoForNode(this.nid, selectors, timeout);
    }

    return null;
};


/**
 * 通过选择器 获取节点信息
 * @param selectors 选择器
 * @param timeout
 * @return {Array} NodeInfo 数组
 */
NodeInfo.prototype.getNodeInfo = function (selectors, timeout) {
    if (isAccMode()) {
        return acEvent.getNodeInfoForNode(this.nid, selectors, timeout);
    } else if (isAgentMode()) {
        return agentEvent.getNodeInfoForNode(this.nid, selectors, timeout);
    }
    return null;
};

/**
 * 在当前节点后面的兄弟节点
 * @return NodeInfo 节点集合
 */
NodeInfo.prototype.nextSiblings = function () {
    return getNextSiblingNodeInfo(this);
};

/**
 * 点击节点
 * @return boolean|布尔型 true 成功 ,false 失败
 */
NodeInfo.prototype.click = function () {
    return clickRandomRect(this.bounds);
};
/**
 * 无指针点击节点
 * @return boolean|布尔型 true 成功 ,false 失败
 */
NodeInfo.prototype.clickEx = function () {
    return clickExNodeInfo(this);
};
/**
 * 无指针长点击节点
 * @return boolean|布尔型 true 成功 ,false 失败
 */
NodeInfo.prototype.longClickEx = function () {
    return longClickExNodeInfo(this);
};

/**
 * 向前滚动
 * @return 布尔型 true 代表成功 false 代表失败
 */
NodeInfo.prototype.scrollForward = function () {
    return scrollForwardNodeInfo(this);
};
/**
 * 向后滚动
 * @return 布尔型 true 代表成功 false 代表失败
 */
NodeInfo.prototype.scrollBackward = function () {
    return scrollBackwardNodeInfo(this);
};
/**
 * 向下滚动
 * @return 布尔型 true 代表成功 false 代表失败
 */
NodeInfo.prototype.scrollDown = function () {
    return scrollDownNodeInfo(this);
};
/**
 * 向上滚动
 * @return 布尔型 true 代表成功 false 代表失败
 */
NodeInfo.prototype.scrollUp = function () {
    return scrollUpNodeInfo(this);
};
/**
 * 向左滚动
 * @return 布尔型 true 代表成功 false 代表失败
 */
NodeInfo.prototype.scrollLeft = function () {
    return scrollLeftNodeInfo(this);
};
/**
 * 向右滚动
 * @return 布尔型 true 代表成功 false 代表失败
 */
NodeInfo.prototype.scrollRight = function () {
    return scrollRightNodeInfo(this);
};

/**
 * 对某个节点粘贴数据
 * @param content 要输入的内容
 * @return boolean|布尔型 true 成功 ,false 失败
 */
NodeInfo.prototype.pasteText = function (content) {
    return pasteTextNodeInfo(this, content);
};


/**
 * 长点击节点
 * @return boolean|布尔型 true 成功 ,false 失败
 */
NodeInfo.prototype.longClick = function () {
    return longClickRandomRect(this.bounds);
};
/**
 * 对某个节点输入数据
 * @param content 要输入的内容
 * @return boolean|布尔型 true 成功 ,false 失败
 */
NodeInfo.prototype.inputText = function (content) {
    return inputTextNodeInfo(this, content);
};
/**
 * 使用输入法对某个节点输入数据，前提是已经设置本程序的输入法为默认输入法
 * @param content 要输入的内容
 * @return boolean|布尔型 true 成功 ,false 失败
 */
NodeInfo.prototype.imeInputText = function (content) {
    return imeInputTextNodeInfo(this, content);
};
/**
 * 使用输入法对某个节点输入数据，前提是已经设置本程序的输入法为默认输入法
 * @param content 具体请看 KeyEvent.KEYCODE_*的值，例如66 = enter 67=del,84=SEARCH
 * @return boolean|布尔型 true 成功 ,false 失败
 */
NodeInfo.prototype.imeInputKeyCode = function (content) {
    return imeInputKeyCodeNodeInfo(this, content);
};

/**
 * 清除节点文本数据
 *  @return boolean 布尔型| true代表成功
 */
NodeInfo.prototype.clearText = function () {
    return clearTextFieldNodeInfo(this);
};

/**
 * 该方法会刷新节点缓存
 */
NodeInfo.prototype.refresh = function () {
    refreshNodeInfo(this);
};

/**
 * 节点信息是否有效
 */
NodeInfo.prototype.isValid = function () {
    return isValidNodeInfo(this);
};

NodeInfo.prototype.toJSONString = function () {
    return JSON.stringify(this);
};


function AutoImage(uuid) {
    this.uuid = uuid;
}


/**
 * 点击文本
 * @param text 文本
 * @return boolean|布尔型
 */
function clickText(text) {
    if (isAccMode()) {
        return acEvent.click(S.get().text(text));
    } else if (isAgentMode()) {
        return agentEvent.click(S.get().text(text));
    }
    return false;
}

/**
 * 随机点击选择器的任意元素
 * @param selectors 选择器对象
 * @return boolean|布尔型
 */
function clickRandom(selectors) {
    if (isAccMode()) {
        return acEvent.clickRandom(selectors);
    } else if (isAgentMode()) {
        return agentEvent.clickRandom(selectors);
    }
    return false;
}

/**
 * 随机点击选择器的任意元素(无指针模式)
 * @param selectors 选择器对象
 * @return boolean|布尔型
 */
function clickRandomEx(selectors) {
    if (isAccMode()) {
        return acEvent.clickRandomEx(selectors);
    } else if (isAgentMode()) {
        return agentEvent.clickRandomEx(selectors);
    }
    return false;
}


/**
 * 随机点击区域中的坐标
 * @param rect 区域对象
 * @return boolean|布尔型
 */
function clickRandomRect(rect) {
    if (isAccMode()) {
        return acEvent.clickRandomRect(rect);
    } else if (isAgentMode()) {
        return agentEvent.clickRandomRect(rect);
    }

    return false;
}

/**
 * 随机长点击区域中的坐标
 * @param rect 区域对象
 * @return boolean|布尔型
 */
function longClickRandomRect(rect) {
    if (isAccMode()) {
        return acEvent.longClickRandomRect(rect);
    } else if (isAgentMode()) {
        return agentEvent.longClickRandomRect(rect);
    }
    return false;
}


/**
 * 点击选择器
 * @param selectors 选择器对象
 * @return boolean|布尔型
 */
function click(selectors) {
    if (isAccMode()) {
        return acEvent.click(selectors);
    } else if (isAgentMode()) {
        return agentEvent.click(selectors);
    }
    return false;
}


/**
 * 无指针模式点击选择器
 * @param selectors 选择器对象
 * @return boolean|布尔型
 */
function clickEx(selectors) {
    if (isAccMode()) {
        return acEvent.clickEx(selectors);
    } else if (isAgentMode()) {
        return agentEvent.clickEx(selectors);
    }
    return false;
}

/**
 * 无指针模式长按选择器
 * @param selectors 选择器对象
 * @return boolean|布尔型
 */
function longClickEx(selectors) {
    if (isAccMode()) {
        return acEvent.longClickEx(selectors);
    } else if (isAgentMode()) {
        return agentEvent.longClickEx(selectors);
    }
    return false;
}

/**
 * 点击某个区域中心坐标点
 * @param rect 区域
 * @return  布尔型 true 成功，false 失败
 */
function clickCenter(rect) {
    if (isAccMode()) {
        return acEvent.clickCenter(rect);
    } else if (isAgentMode()) {
        return agentEvent.clickCenter(rect);
    }
    return false;
}


/**
 * 点击坐标
 * @param x x坐标
 * @param y y坐标
 * @return boolean|布尔型
 */
function clickPoint(x, y) {
    if (isAccMode()) {
        return acEvent.clickPoint(x, y);
    } else if (isAgentMode()) {
        return agentEvent.clickPoint(x, y);
    }
    return false;
}

/**
 * 双击坐标
 * @param x x坐标
 * @param y y坐标
 * @return boolean|布尔型
 */
function doubleClickPoint(x, y) {
    if (isAccMode()) {
        return acEvent.doubleClickPoint(x, y);
    } else if (isAgentMode()) {
        return agentEvent.doubleClickPoint(x, y);
    }
    return false;
}

/**
 * 长点击选择器
 * @param selectors 选择器对象
 * @return boolean|布尔型
 */
function longClick(selectors) {
    if (isAccMode()) {
        return acEvent.longClick(selectors);
    } else if (isAgentMode()) {
        return agentEvent.longClick(selectors);
    }
    return false;
}

/**
 * 长点击坐标
 * @param x x坐标
 * @param y y坐标
 * @return boolean|布尔型
 */
function longClickPoint(x, y) {
    if (isAccMode()) {
        return acEvent.longClickPoint(x, y);
    } else if (isAgentMode()) {
        return agentEvent.longClickPoint(x, y);
    }
    return false;

}

/**
 * 获取选择器得到的文本数据
 * @param selectors 选择器
 * @return 字符串集合
 */
function getText(selectors) {
    if (isAccMode()) {
        return acEvent.getText(selectors);
    } else if (isAgentMode()) {
        return agentEvent.getText(selectors);
    }
    return null;
}

/**
 * 获取节点属性信息
 * @param selectors 选择器
 * @param attr 属性值,例如 text,className，更多的属性请参考NodeInfo对象属性
 * @return null|字符串数组|Rect对象数组
 */
function getNodeAttrs(selectors, attr) {
    if (selectors == null || attr == null) {
        return null;
    }
    var nodes = getNodeInfo(selectors, 0);
    if (nodes == null || nodes.length <= 0) {
        return null;
    }
    var x = [];
    for (var i = 0; i < nodes.length; i++) {
        var n = nodes[i];
        try {
            x.push(n[attr]);
        } catch (e) {
        }
    }
    return x;
}


/**
 * 锁定当前节点，锁定后，后面就算界面刷新，但是节点还是老的信息，需要和releaseNode进行配合才能进行解锁
 */
function lockNode() {
    if (isAccMode()) {
        acEvent.lockNode();
    } else if (isAgentMode()) {
        agentEvent.lockNode();
    }
}

/**
 * 释放节点的锁，释放后，当界面刷新的时候，节点信息会变成最新的
 */
function releaseNode() {
    if (isAccMode()) {
        acEvent.releaseNode();
    } else if (isAgentMode()) {
        agentEvent.releaseNode();
    }
}

/**
 * 设置各种手势模式事件的操作类型，默认是异步,目前只对无障碍模式有效
 * @param mode 1 代表异步，2代表同步
 * @param bool true代表成功 false代表失败
 */
function setGestureActionMode(mode) {
    if (isAccMode()) {
        return acEvent.setAccActionMode(mode);
    }
    return false;

}

/**
 * 获取节点信息
 * @param selectors 选择器
 * @param timeout 超时时间，单位是毫秒
 * @return {Array} NodeInfo 数组 节点信息集合
 */
function getNodeInfo(selectors, timeout) {
    if (isAccMode()) {
        return acEvent.getNodeInfo(selectors, timeout);
    } else if (isAgentMode()) {
        return agentEvent.getNodeInfo(selectors, timeout);
    }
    return null;
}

/**
 * 通过Selector 判断元素是否存在
 * @param selectors 选择器
 * @return bool|布尔型
 */
function has(selectors) {
    if (isAccMode()) {
        return acEvent.has(selectors);
    } else if (isAgentMode()) {
        return agentEvent.has(selectors);
    }
    return false;
}

/**
 * 通过Selector 判断并等待元素是否存
 * @param selectors 选择器
 * @param timeout 超时时间，单位毫秒
 * @return bool|布尔型
 */
function waitExistNode(selectors, timeout) {
    if (timeout <= 0) {
        if (isAccMode()) {
            return acEvent.has(selectors);
        } else if (isAgentMode()) {
            return agentEvent.has(selectors);
        }
    } else {
        var x = thread.execSync(function () {
            if (isAccMode()) {
                return acEvent.has(selectors);
            } else if (isAgentMode()) {
                return agentEvent.has(selectors);
            }
        }, timeout);
        if (x == null) {
            return false;
        }
        return x;
    }
}

/**
 *  等待activity界面出现
 * @param activity 界面名称
 * @param timeout 超时时间，单位毫秒
 * @return bool|布尔型
 */
function waitExistActivity(activity, timeout) {
    if (activity == null) {
        return false;
    }
    if (timeout <= 0) {
        var s = getRunningActivity();
        return s == activity;
    } else {
        return thread.execSync(function () {
            var s = getRunningActivity();
            return s == activity;
        }, timeout);
    }
}

/**
 * 将元素节点变成XML
 * @return string string|null
 */
function dumpXml() {
    if (isAccMode()) {
        return acEvent.dumpXml();
    } else if (isAgentMode()) {
        return agentEvent.dumpXml();
    }
    return null;
}


/**
 *  将通知发射处理，相当于点击了通知栏
 * @param seqId
 * @return bool|布尔型
 */
function shotNotification(seqId) {
    if (isAccMode()) {
        return acEvent.shotNotification(seqId);
    } else if (isAgentMode()) {
        return agentEvent.shotNotification(seqId);
    }
    return false;
}

/**
 * 将通知进行取消操作
 * @param seqId
 * @return bool|布尔型
 */
function cancelNotification(seqId) {
    if (isAccMode()) {
        return acEvent.cancelNotification(seqId);
    } else if (isAgentMode()) {
        return agentEvent.cancelNotification(seqId);
    }
    return false;
}

function ignoreNotification(seqId) {
    if (isAccMode()) {
        return acEvent.ignoreNotification(seqId);
    } else if (isAgentMode()) {
        return agentEvent.ignoreNotification(seqId);
    }
    return false;
}

/**
 * 获取toast数据
 *  @param pkg 指定包名
 * @param size 指定获取的条数
 * @return null|ToastInfo数组
 */
function getLastToast(pkg, size) {
    if (isAccMode()) {
        return acEvent.getLastToast(pkg, size);
    } else if (isAgentMode()) {
        return agentEvent.getLastToast(pkg, size);
    }
    return null;
}

/**
 * 获取最近通知栏对象
 * @param pkg 指定包名
 * @param size 指定获取的条数
 * @return NotificationInfo数组|null
 */
function getLastNotification(pkg, size) {
    if (isAccMode()) {
        return acEvent.getLastNotification(pkg, size);
    } else if (isAgentMode()) {
        return agentEvent.getLastNotification(pkg, size);
    }
    return null;
}

/**
 * 请求监听状态栏的权限
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * @param timeout 请求权限超时时间 单位是秒
 * @return true 代表请求权限成功，false代表失败
 */
function requestNotificationPermission(timeout) {
    if (isAccMode()) {
        return acEvent.requestNotificationPermission(timeout);
    } else if (isAgentMode()) {
        return agentEvent.requestNotificationPermission(timeout);
    }
    return null;
}

/**
 * 检查是否含有状态栏监听权限
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 * @return true 有权限,false 代表无权限
 */
function hasNotificationPermission() {
    if (isAccMode()) {
        return acEvent.hasNotificationPermission();
    } else if (isAgentMode()) {
        return agentEvent.hasNotificationPermission();
    }
    return null;
}


/**
 * 取得当前运行的Activity类名
 * @return {string}
 */
function getRunningActivity() {
    if (isAccMode()) {
        return acEvent.getRunningActivity();
    } else if (isAgentMode()) {
        return agentEvent.getRunningActivity();
    }
    return null;
}

/**
 * 取得当前运行的App包名
 * @return string
 */
function getRunningPkg() {
    if (isAccMode()) {
        return acEvent.getRunningPkg();
    } else if (isAgentMode()) {
        return agentEvent.getRunningPkg();
    }
    return null;
}

/**
 *
 *  @return bool 布尔型| true代表成功
 */
function home() {
    if (isAccMode()) {
        return acEvent.home();
    } else if (isAgentMode()) {
        return agentEvent.home();
    }
    return false;
}

/**
 * 分割屏幕
 * @return bool 布尔型| true代表成功
 */
function splitScreen() {
    if (isAccMode()) {
        return acEvent.splitScreen();
    } else if (isAgentMode()) {
        return agentEvent.splitScreen();
    }
    return false;
}


/**
 * 模拟电源键
 * @return 布尔型 true 成功 false 失败
 */
function power() {
    if (isAccMode()) {
        return acEvent.power();
    } else if (isAgentMode()) {
        return agentEvent.power();
    }
    return false;
}


/**
 * 打开快速设置
 * @return 布尔型 true 成功, else 失败
 */
function openQuickSettings() {
    if (isAccMode()) {
        return acEvent.openQuickSettings();
    } else if (isAgentMode()) {
        return agentEvent.openQuickSettings();
    }
    return false;
}

/**
 * 打开通知栏
 *
 * @return 布尔型 true 成功, else 失败
 */
function openNotification() {
    if (isAccMode()) {
        return acEvent.openNotification();
    } else if (isAgentMode()) {
        return agentEvent.openNotification();
    }
    return false;
}

/**
 * 返回按键
 * @return boolean|布尔型
 */
function back() {
    if (isAccMode()) {
        return acEvent.back();
    } else if (isAgentMode()) {
        return agentEvent.back();
    }
    return false;
}

/**
 * 最近APP任务按键
 * @return boolean|布尔型
 */
function recentApps() {
    if (isAccMode()) {
        return acEvent.recentApps();
    } else if (isAgentMode()) {
        return agentEvent.recentApps();
    }

    return false;
}

/**
 * 当前是否是我们的输入法
 * @return boolean|布尔型
 */
function currentIsOurIme() {
    if (isAccMode()) {
        return acEvent.currentIsOurIme();
    } else if (isAgentMode()) {
        return agentEvent.currentIsOurIme();
    }

    return false;
}

/**
 * 通过Selector输入数据
 * @param selectors  选择器
 * @param content 数据字符串
 * @return boolean|布尔型
 */
function inputText(selectors, content) {
    if (isAccMode()) {
        return acEvent.inputText(selectors, content);
    } else if (isAgentMode()) {
        return agentEvent.inputText(selectors, content);
    }

    return false;
}

/**
 * 通过选择器粘贴数据
 * @param selectors  选择器
 * @param content 数据字符串
 * @return boolean|布尔型
 */
function pasteText(selectors, content) {
    if (isAccMode()) {
        return acEvent.pasteText(selectors, content);
    } else if (isAgentMode()) {
        return agentEvent.pasteText(selectors, content);
    }
    return false;
}


/**
 * 使用输入法输入内容，前提是已经设置本程序的输入法为默认输入法
 * @param selectors  选择器
 * @param content 数据字符串
 * @return boolean|布尔型
 */
function imeInputText(selectors, content) {
    if (isAccMode()) {
        return acEvent.imeInputText(selectors, content);
    } else if (isAgentMode()) {
        return agentEvent.imeInputText(selectors, content);
    }
    return false;
}


/**
 * 使用输入法输入内容，前提是已经设置本程序的输入法为默认输入法
 * @param selectors  选择器
 * @param content 整型，具体请看 KeyEvent.KEYCODE_*的值，例如66 = enter 67=del,84=SEARCH
 * @return boolean|布尔型
 */
function imeInputKeyCode(selectors, content) {
    if (isAccMode()) {
        return acEvent.imeInputKeyCode(selectors, content);
    } else if (isAgentMode()) {
        return agentEvent.imeInputKeyCode(selectors, content);
    }
    return false;
}


/**
 * 清除文本数据
 * @param selectors 节点选择器
 *  @return boolean 布尔型| true代表成功
 */
function clearTextField(selectors) {
    if (isAccMode()) {
        return acEvent.clearTextField(selectors);
    } else if (isAgentMode()) {
        return agentEvent.clearTextField(selectors);
    }

}


/**
 * 通过选择器滑动节点
 * @param selectors 节点选择器
 * @param endX      结束的X坐标
 * @param endY      结束的Y坐标
 * @param duration 持续时长 单位毫秒
 * @return 布尔型 true 代表成功 false 代表失败
 */
function swipe(selectors, endX, endY, duration) {
    if (isAccMode()) {
        return acEvent.swipe(selectors, endX, endY, duration);
    } else if (isAgentMode()) {
        return agentEvent.swipe(selectors, endX, endY, duration);
    }
    return false;
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
    if (isAccMode()) {
        return acEvent.swipeToPoint(startX, startY, endX, endY, duration);
    } else if (isAgentMode()) {
        return agentEvent.swipeToPoint(startX, startY, endX, endY, duration);
    }
    return false;
}


/**
 * 通过选择器从下向上滑动
 * @param selectors 节点选择器
 * @param distance  滑动距离 单位是像素
 * @param duration 持续时长 单位毫秒
 * @return 布尔型 true 滑动成功，false 滑动失败
 */
function swipeFromDownToUp(selectors, distance, duration) {
    if (isAccMode()) {
        return acEvent.swipeFromDownToUp(selectors, distance, duration);
    } else if (isAgentMode()) {
        return agentEvent.swipeFromDownToUp(selectors, distance, duration);
    }
    return false;
}

/**
 * 通过选择器从上向下滑动
 * @param selectors 节点选择器
 * @param distance  滑动距离 单位是像素
 * @param duration 持续时长 单位毫秒
 * @return 布尔型 true 滑动成功，false 滑动失败
 */
function swipeFromUpToDown(selectors, distance, duration) {
    if (isAccMode()) {
        return acEvent.swipeFromUpToDown(selectors, distance, duration);
    } else if (isAgentMode()) {
        return agentEvent.swipeFromUpToDown(selectors, distance, duration);
    }
    return false;
}


/**
 * 通过选择器从右向左滑动
 * @param selectors 节点选择器
 * @param distance  滑动距离 单位是像素
 * @param duration 持续时长 单位毫秒
 * @return 布尔型 true 滑动成功，false 滑动失败
 */
function swipeFromRightToLeft(selectors, distance, duration) {
    if (isAccMode()) {
        return acEvent.swipeFromRightToLeft(selectors, distance, duration);
    } else if (isAgentMode()) {
        return agentEvent.swipeFromRightToLeft(selectors, distance, duration);
    }
    return false;
}

/**
 * 通过选择器从左向右滑动
 * @param selectors 节点选择器
 * @param distance  滑动距离 单位是像素
 * @param duration 持续时长 单位毫秒
 * @return 布尔型 true 滑动成功，false 滑动失败
 */
function swipeFromLeftToRight(selectors, distance, duration) {
    if (isAccMode()) {
        return acEvent.swipeFromLeftToRight(selectors, distance, duration);
    } else if (isAgentMode()) {
        return agentEvent.swipeFromLeftToRight(selectors, distance, duration);
    }
    return false;
}

/**
 * 向上滑动
 * @param distance 滑动距离 单位像素
 * @param duration 持续时长 单位毫秒
 * @return 布尔型 true 成功，false 失败
 */
function swipeFromDownToUpInScreen(distance, duration) {
    if (isAccMode()) {
        return acEvent.swipeFromDownToUpInScreen(distance, duration);
    } else if (isAgentMode()) {
        return agentEvent.swipeFromDownToUpInScreen(distance, duration);
    }
    return false;
}

/**
 * 向下滑动
 * @param distance 滑动距离 单位像素
 * @param duration 持续时长 单位毫秒
 * @return 布尔型 true 代表成功 false 代表失败
 */
function swipeFromUpToDownInScreen(distance, duration) {
    if (isAccMode()) {
        return acEvent.swipeFromUpToDownInScreen(distance, duration);
    } else if (isAgentMode()) {
        return agentEvent.swipeFromUpToDownInScreen(distance, duration);
    }
    return false;
}

/**
 * 向左滑动
 * @param distance 滑动距离 单位像素
 * @param duration 持续时长 单位毫秒
 * @return 布尔型 true 代表成功 false 代表失败
 */
function swipeFromRightToLeftInScreen(distance, duration) {
    if (isAccMode()) {
        return acEvent.swipeFromRightToLeftInScreen(distance, duration);
    } else if (isAgentMode()) {
        return agentEvent.swipeFromRightToLeftInScreen(distance, duration);
    }
    return false;
}

/**
 * 向右滑动
 * @param distance 滑动距离 单位像素
 * @param duration 持续时长 单位毫秒
 * @return 布尔型 true 代表成功 false 代表失败
 */
function swipeFromLeftToRightInScreen(distance, duration) {
    if (isAccMode()) {
        return acEvent.swipeFromLeftToRightInScreen(distance, duration);
    } else if (isAgentMode()) {
        return agentEvent.swipeFromLeftToRightInScreen(distance, duration);
    }
    return false;
}

/**
 * 是否滚动到底部了，如果查不到元素也会返回false
 * @param distance 滚动方向 UP,DOWN,LEFT,RIGHT
 * @param selectors 选择器
 * @return false 代表未滚动到位，true 代表滚动完成了
 */
function isScrollEnd(distance, selectors) {
    if (isAccMode()) {
        return acEvent.isScrollEnd(distance, selectors);
    } else if (isAgentMode()) {
        return agentEvent.isScrollEnd(distance, selectors);
    }
    return false;
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
    if (isAccMode()) {
        return acEvent.drag(startX, startY, endX, endY, duration);
    } else if (isAgentMode()) {
        return agentEvent.drag(startX, startY, endX, endY, duration);
    }
    return false;
}

/**
 * 通过选择器拖动某个元素到目标元素
 * @param selectors 选择器 {@link S}
 * @param destObj   目标元素选择器
 * @param duration 持续时长 单位毫秒
 * @return 布尔型 true 成功 false 失败
 */
function dragTo(selectors, destObj, duration) {
    if (isAccMode()) {
        return acEvent.dragTo(selectors, destObj, duration);
    } else if (isAgentMode()) {
        return agentEvent.dragTo(selectors, destObj, duration);
    }
    return false;
}

/**
 * 通过选择器拖动某个元素到目标X Y 坐标
 * @param selectors 原始元素选择器
 * @param endX      目标 X 坐标
 * @param endY      目标 Y 坐标
 * @param duration 持续时长 单位毫秒
 * @return 布尔型 true 成功 false 失败
 */
function dragToPoint(selectors, endX, endY, duration) {
    if (isAccMode()) {
        return acEvent.dragToPoint(selectors, endX, endY, duration);
    } else if (isAgentMode()) {
        return agentEvent.dragToPoint(selectors, endX, endY, duration);
    }
    return false;
}

/**
 * 请求展示浮窗的权限
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 * @param timeout 请求权限超时时间 单位是秒
 * @return true 代表请求权限成功，false代表失败
 */
function requestFloatViewPermission(timeout) {
    return utils.requestFloatViewPermission(timeout);
}

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
function showFloatView(params) {
    return utils.showFloatView(params);
}

/**
 * 关闭浮窗
 * @param tag showFloatView 使用的tag参数，对悬浮窗唯一定位的
 * @return true 成功，false代表失败
 */
function closeFloatView(tag) {
    return utils.closeFloatView(tag);
}

/**
 * 关闭所有悬浮窗，但不包含日志悬浮窗
 * @return true 成功，false代表失败
 */
function closeAllFloatView() {
    return utils.closeAllFloatView();
}

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
function setLogViewSize(w, h, textSize, backgroundColor) {
    utils.setLogViewSize(w, h, textSize, backgroundColor);
}



/**
 * 设置日志窗口大小扩展函数
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 * @param map 例如
 *  {
 *      "x":100,
 *      "y":100,
 *      "w":100,
 *      "h":200,
 *      "textSize":12,
 *      "backgroundColor":"#ffffff",
 *      "title":"我是日志",
 *      "showTitle":true
 *  }
 *  解释：
 *      x: 起始X位置
 *      y: 起始Y位置
 *      w:宽度
 *      h:高度
 *      textSize:日志的字体大小
 *      backgroundColor:背景颜色，例如#336699
 *      title:日志框标题
 *      showTitle：是否显示标题
 *      backgroundImg 背景图片，放到工程的res文件夹，录入填写res/a.png
 * @return bool true代表成功，false代表失败
 */
function setLogViewSizeEx(map) {
    return utils.setLogViewSizeEx(JSON.stringify(map));
}

/**
 * 设置日志固定栏目属性
 * 适合EC 6.17.0+
 * @param map 例如
 *  {
 *      "show":true,
 *      "h":200,
 *      "textSize":12,
 *      "backgroundColor":"#ffffff"
 *  }
 *  解释：
 *      show:是否展示
 *      h:高度
 *      textSize:日志的字体大小
 *      backgroundColor:背景颜色，例如#336699
 * @return bool true代表成功，false代表失败
 */
function setLogFixedViewEx(map) {
    return utils.setLogFixedViewEx(JSON.stringify(map));
}

function setFixedViewText(msg) {
    return utils.setFixedViewText(msg);
}


/**
 * 设置启停控制悬浮窗窗口位置扩展函数
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 * @param map 例如
 *  {
 *      "x":100,
 *      "y":100,
 *      "backgroundColor":"#99000000",
 *  }
 *  解释：
 *      x: 起始X位置
 *      y: 起始Y位置
 *      backgroundColor:背景颜色，例如#336699
 * @return bool true代表成功，false代表失败
 */
function setCtrlViewSizeEx(map) {
    return utils.setCtrlViewSizeEx(JSON.stringify(map));
}


/**
 * 检查是否含有浮窗权限
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 * @return true 有权限,false 代表无权限
 */
function hasFloatViewPermission() {
    return utils.hasFloatViewPermission();
}

/**
 * 展示日志浮窗
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 */
function showLogWindow() {
    return utils.showLogWindow();
}

/**
 * 展示启停浮窗
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 */
function showCtrlWindow() {
    return utils.showCtrlWindow();
}

/**
 * 关闭启停浮窗
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 */
function closeCtrlWindow() {
    return utils.hideCtrlWindow();
}


/**
 * 关闭日志浮窗
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 */
function closeLogWindow() {
    return utils.hideLogWindow();
}

/**
 * 展示消息到悬浮窗日志中，颜色是白色的
 * @param msg 消息
 * @param color 颜色值例如  #ffffff
 * @param size 字体大小
 * @return {*}
 */
function setLogText(msg, color, size) {
    return utils.setLogText(msg, color, size);
}

///// 2020312新增节点相关的快捷操作

/**
 * 通过选择器 获取第一个节点信息
 * @param selectors 选择器
 * @param timeout
 * @return {NodeInfo} 对象或者null
 */
function getOneNodeInfo(selectors, timeout) {
    if (isAccMode()) {
        return acEvent.getOneNodeInfo(selectors, timeout);
    } else if (isAgentMode()) {
        return agentEvent.getOneNodeInfo(selectors, timeout);
    }

    return null;
}

/**
 * 取得父级
 * @param nodeinfo NodeInfo对象
 * @return { NodeInfo} {NodeInfo 对象|null}
 */
function getNodeInfoParent(nodeinfo) {
    if (nodeinfo == null || nodeinfo.nid == null) {
        return null;
    }
    if (isAccMode()) {
        return acEvent.getNodeInfoParent(nodeinfo.nid);
    } else if (isAgentMode()) {
        return agentEvent.getNodeInfoParent(nodeinfo.nid);
    }
    return null;
}


/**
 * 取得单个子节点
 * @param nodeinfo NodeInfo对象
 * @param index 子节点索引
 * @return {NodeInfo} {NodeInfo 对象|null}
 */
function getNodeInfoChild(nodeinfo, index) {
    if (nodeinfo == null || nodeinfo.nid == null) {
        return null;
    }
    if (isAccMode()) {
        return acEvent.getNodeInfoChild(nodeinfo.nid, index);
    } else if (isAgentMode()) {
        return agentEvent.getNodeInfoChild(nodeinfo.nid, index);
    }
    return null;
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
    if (isAccMode()) {
        return acEvent.getNodeInfoAllChildren(nodeinfo.nid);
    } else if (isAgentMode()) {
        return agentEvent.getNodeInfoAllChildren(nodeinfo.nid);
    }
    return null;
}


/**
 * 当前节点的所有兄弟节点
 * @param nodeinfo NodeInfo对象
 * @return {Array} NodeInfo 数组
 */
function getSiblingNodeInfo(nodeinfo) {
    if (nodeinfo == null || nodeinfo.nid == null) {
        return null;
    }
    if (isAccMode()) {
        return acEvent.getSiblingNodeInfo(nodeinfo.nid);
    } else if (isAgentMode()) {
        return agentEvent.getSiblingNodeInfo(nodeinfo.nid);
    }
    return null;
}

/**
 * 在当前节点前面的兄弟节点
 * @param nodeinfo NodeInfo对象
 * @return NodeInfo 节点集合
 */
function getPreviousSiblingNodeInfo(nodeinfo) {
    if (nodeinfo == null || nodeinfo.nid == null) {
        return null;
    }
    if (isAccMode()) {
        return acEvent.getPreviousSiblingNodeInfo(nodeinfo.nid);
    } else if (isAgentMode()) {
        return agentEvent.getPreviousSiblingNodeInfo(nodeinfo.nid);
    }
    return null;
}

/**
 * 在当前节点后面的兄弟节点
 * @param nodeinfo NodeInfo对象
 * @return {Array} NodeInfo 数组
 */
function getNextSiblingNodeInfo(nodeinfo) {

    if (nodeinfo == null || nodeinfo.nid == null) {
        return null;
    }
    if (isAccMode()) {
        return acEvent.getNextSiblingNodeInfo(nodeinfo.nid);
    } else if (isAgentMode()) {
        return agentEvent.getNextSiblingNodeInfo(nodeinfo.nid);
    }
    return null;
}

/**
 * 对某个节点输入数据
 * @param nodeinfo NodeInfo对象
 * @param content 数据字符串
 * @return {boolean|布尔型}
 */
function inputTextNodeInfo(nodeinfo, content) {
    if (isAccMode()) {
        return acEvent.inputTextNodeInfo(nodeinfo.nid, content);
    } else if (isAgentMode()) {
        return agentEvent.inputTextNodeInfo(nodeinfo.nid, content);
    }

    return false;
}

/**
 * 对某个节点粘贴数据
 * @param nodeinfo NodeInfo对象
 * @param content 数据字符串
 * @return {boolean|布尔型}
 */
function pasteTextNodeInfo(nodeinfo, content) {
    if (isAccMode()) {
        return acEvent.pasteTextNodeInfo(nodeinfo.nid, content);
    } else if (isAgentMode()) {
        return agentEvent.pasteTextNodeInfo(nodeinfo.nid, content);
    }
    return false;
}

/**
 * 使用输入法对某个节点输入数据，前提是已经设置本程序的输入法为默认输入法
 * @param nodeinfo NodeInfo对象
 * @param content 数据字符串
 * @return boolean|布尔型
 */
function imeInputTextNodeInfo(nodeinfo, content) {
    if (isAccMode()) {
        return acEvent.imeInputTextNodeInfo(nodeinfo.nid, content);
    } else if (isAgentMode()) {
        return agentEvent.imeInputTextNodeInfo(nodeinfo.nid, nodeinfo.bounds, content);
    }
    return false;
}

/**
 * 使用输入法对某个节点输入数据，前提是已经设置本程序的输入法为默认输入法
 * @param nodeinfo NodeInfo对象
 * @param content 具体请看 KeyEvent.KEYCODE_*的值，例如66 = enter 67=del,84=SEARCH
 * @return boolean|布尔型
 */
function imeInputKeyCodeNodeInfo(nodeinfo, content) {
    if (isAccMode()) {
        return acEvent.imeInputKeyCodeNodeInfo(nodeinfo.nid, content);
    } else if (isAgentMode()) {
        return agentEvent.imeInputKeyCodeNodeInfo(nodeinfo.nid, nodeinfo.bounds, content);
    }
    return false;
}


/**
 * 清除节点文本数据
 *  @param nodeinfo NodeInfo对象
 *   @return bool 布尔型| true代表成功
 */
function clearTextFieldNodeInfo(nodeinfo) {
    if (isAccMode()) {
        return acEvent.clearTextFieldNodeInfo(nodeinfo.nid);
    } else if (isAgentMode()) {
        return agentEvent.clearTextFieldNodeInfo(nodeinfo.nid);
    }
}

/**
 *  刷新节点缓存
 *  @param nodeinfo NodeInfo对象
 */
function refreshNodeInfo(nodeinfo) {
    if (isAccMode()) {
        acEvent.refreshNodeInfo(nodeinfo.nid);
    } else if (isAgentMode()) {
        agentEvent.refreshNodeInfo(nodeinfo.nid);
    }
}

/**
 *  节点信息是否有效
 *  @param nodeinfo NodeInfo对象
 *  @return bool|布尔型 true代表有
 */
function isValidNodeInfo(nodeinfo) {
    if (isAccMode()) {
        return acEvent.isValidNodeInfo(nodeinfo.nid);
    } else if (isAgentMode()) {
        return agentEvent.isValidNodeInfo(nodeinfo.nid);
    }
    return false;
}



/**
 * 设置获取节点的模式
 * @param mode 1 是增强型， 2 是快速型，默认是增强型
 * @param fetchInvisibleNode 是否抓取隐藏的元素，默认不抓取
 * @param fetchNotImportantNode 是否抓取不重要的元素
 * @param algorithm 节点查找算法,默认是nsf，分别有 nsf = 节点静态算法，bsf= 广度优先， dsf=深度度优先
 * @return boolean|布尔型
 */
function setFetchNodeMode(mode, fetchInvisibleNode, fetchNotImportantNode, algorithm) {
    if (isAccMode()) {
        return acEvent.setFetchNodeMode(mode, fetchInvisibleNode, fetchNotImportantNode, algorithm);
    } else if (isAgentMode()) {
        return agentEvent.setFetchNodeMode(mode, fetchInvisibleNode, fetchNotImportantNode, algorithm);
    }
    return false;
}

/**
 * 加上节点获取的某个标志位
 * @param flag 参见 AccessibilityServiceInfo.FLAG_*，如果是0是强制刷新
 * @return {null|boolean}
 */
function addNodeFlag(flag) {
    if (isAccMode()) {
        return acEvent.addNodeFlag(flag);
    } else if (isAgentMode()) {
        return agentEvent.addNodeFlag(flag);
    }
    return false;
}

/**
 * 移除节点获取的某个标志位
 * @param flag 参见 AccessibilityServiceInfo.FLAG_*，如果是0是强制刷新
 */
function removeNodeFlag(flag) {
    if (isAccMode()) {
        acEvent.removeNodeFlag(flag);
    } else if (isAgentMode()) {
        agentEvent.removeNodeFlag(flag);
    }
}


/**
 * 转换成node inf的数组
 * @param d
 * @return NodeInfo {NodeInfo 数组 | null}
 */
function nodeInfoArray(d) {
    if (d == null || d=="") {
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
 * 多点触摸集合
 * @constructor
 */
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
 * 按照属性 id 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
function id(value) {
    return S.get().id(value);
}

/**
 * 按照属性 id 进行匹配, 支持正则
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
function idMatch(value) {
    return S.get().idMatch(value);
}

/**
 * 按照属性 clz 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
function clz(value) {
    return S.get().clz(value);
}

/**
 * 按照属性 clz 进行匹配, 支持正则
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
function clzMatch(value) {
    return S.get().clzMatch(value);
}

/**
 * 按照属性 pkg 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
function pkg(value) {
    return S.get().pkg(value);
}

/**
 * 按照属性 pkg 进行匹配, 支持正则
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
function pkgMatch(value) {
    return S.get().pkgMatch(value);
}

/**
 * 按照属性 desc 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
function desc(value) {
    return S.get().desc(value);
}

/**
 * 按照属性 desc 进行匹配, 支持正则
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
function descMatch(value) {
    return S.get().descMatch(value);
}

/**
 * 按照属性 text 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
function text(value) {
    return S.get().text(value);
}


function row(value) {
    return S.get().row(value);
}

function column(value) {
    return S.get().column(value);
}

function rowSpan(value) {
    return S.get().rowSpan(value);
}

function columnSpan(value) {
    return S.get().columnSpan(value);
}

function rowCount(value) {
    return S.get().rowCount(value);
}

function columnCount(value) {
    return S.get().columnCount(value);
}

/**
 * 按照属性 bounds 进行范围
 *
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
 * 按照属性 text 进行匹配, 支持正则
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
function textMatch(value) {
    return S.get().textMatch(value);
}

/**
 * 按照属性 visible 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
function visible(value) {
    return S.get().visible(value);
}

/**
 * 按照属性 depth 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
function depth(value) {
    return S.get().depth(value);
}


/**
 * 按照属性 checked 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
function checked(value) {
    return S.get().checked(value);
}

/**
 * 按照属性 drawingOrder 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
function drawingOrder(value) {
    return S.get().drawingOrder(value);
}

/**
 * 按照属性 checkable 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
function checkable(value) {
    return S.get().checkable(value);
}

/**
 * 按照属性 childCount 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
function childCount(value) {
    return S.get().childCount(value);
}

/**
 * 按照属性 clickable 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
function clickable(value) {
    return S.get().clickable(value);
}

/**
 * 按照属性 dismissable 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
function dismissable(value) {
    return S.get().dismissable(value);
}

/**
 * 按照属性 editable 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
function editable(value) {
    return S.get().editable(value);
}

/**
 * 按照属性 enabled 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
function enabled(value) {
    return S.get().enabled(value);
}

/**
 * 按照属性 focusable 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
function focusable(value) {
    return S.get().focusable(value);
}

/**
 * 按照属性 focused 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
function focused(value) {
    return S.get().focused(value);
}

/**
 * 按照属性 index 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
function index(value) {
    return S.get().index(value);
}

/**
 * 按照属性 longClickable 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
function longClickable(value) {
    return S.get().longClickable(value);
}

/**
 * 按照属性 multiLine 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
function multiLine(value) {
    return S.get().multiLine(value);
}

/**
 * 按照属性 password 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
function password(value) {
    return S.get().password(value);
}

/**
 * 按照属性 scrollable 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
function scrollable(value) {
    return S.get().scrollable(value);
}

/**
 * 按照属性 selected 进行匹配
 *
 * @param value 字符串
 * @return {S} 节点选择器
 */
function selected(value) {
    return S.get().selected(value);
}

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
 * @param timeout 多点触摸执行的超时时间，单位是毫秒，在无障碍模式下，这个参数不生效
 * @return boolean|布尔型
 */
function multiTouch(touch1, touch2, touch3, timeout) {
    if (isAccMode()) {
        return acEvent.multiTouch(touch1, touch2, touch3, timeout);
    } else if (isAgentMode()) {
        return agentEvent.multiTouch(touch1, touch2, touch3, timeout);
    }
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
 * 开启一个定时脚本任务
 * @param tag 任务的唯一标示，不能为空，脚本中可以使用readConfigString("jobTaskTag")获取当前tag值，判断是那个任务过来执行的
 * @param execTime 定时时间格式: 2020-04-17 19:20:00，或者直接是秒数字，例如 3，代表3秒后
 * @param cancelBeforeRunning
 * @return 整型 jobid
 */
function startJob(tag, execTime, cancelBeforeRunning) {
    return utilsWrapper.startJob(tag, execTime, cancelBeforeRunning);
}

/**
 * 取消所有定时任务
 * @return bool true 代表有任务被取消
 */
function cancelAllJob() {
    return utilsWrapper.cancelAllJob();
}

/**
 * 通过tag对定时任务进行取消
 * @param tag tag名称
 * @return bool true 代表有任务被取消
 */
function cancelJob(tag) {
    return utilsWrapper.cancelJob(tag);
}

/**
 * 取得所有的定时任务标签
 * @return 字符串数组或者null
 */
function getAllJobTag() {
    var x = utilsWrapper.getAllJobTag();
    if (x != null && x!="") {
        return JSON.parse(x);
    }
    return null;
}


//=====滚动相关
/**
 * 向前滚动
 * @param selectors 选择器对象
 * @return {boolean} true 成功，false 失败
 */
function scrollForward(selectors) {
    if (isAccMode()) {
        return acEvent.scrollForward(selectors);
    } else if (isAgentMode()) {
        return agentEvent.scrollForward(selectors);
    }
    return false;
}

/**
 * 向后滚动
 * @param selectors 选择器对象
 * @return {boolean} true 成功，false 失败
 */
function scrollBackward(selectors) {
    if (isAccMode()) {
        return acEvent.scrollBackward(selectors);
    } else if (isAgentMode()) {
        return agentEvent.scrollBackward(selectors);
    }
    return false;
}

/**
 * 向左滚动
 * @param selectors 选择器对象
 * @return {boolean} true 成功，false 失败
 */
function scrollLeft(selectors) {
    if (isAccMode()) {
        return acEvent.scrollLeft(selectors);
    } else if (isAgentMode()) {
        return agentEvent.scrollLeft(selectors);
    }
    return false;
}

/**
 * 向右滚动
 * @param selectors 选择器对象
 * @return {boolean} true 成功，false 失败
 */
function scrollRight(selectors) {
    if (isAccMode()) {
        return acEvent.scrollRight(selectors);
    } else if (isAgentMode()) {
        return agentEvent.scrollRight(selectors);
    }
    return false;
}


/**
 * 向上滚动
 * @param selectors 选择器对象
 * @return {boolean} true 成功，false 失败
 */
function scrollUp(selectors) {
    if (isAccMode()) {
        return acEvent.scrollUp(selectors);
    } else if (isAgentMode()) {
        return agentEvent.scrollUp(selectors);
    }
    return false;
}


/**
 * 向下滚动
 * @param selectors 选择器对象
 * @return {boolean} true 成功，false 失败
 */
function scrollDown(selectors) {
    if (isAccMode()) {
        return acEvent.scrollDown(selectors);
    } else if (isAgentMode()) {
        return agentEvent.scrollDown(selectors);
    }
    return false;
}


function clickExNodeInfo(nodeinfo) {
    if (isAccMode()) {
        return acEvent.clickExNodeInfo(nodeinfo.nid);
    } else if (isAgentMode()) {
        return agentEvent.clickExNodeInfo(nodeinfo.nid);
    }
}

function longClickExNodeInfo(nodeinfo) {
    if (isAccMode()) {
        return acEvent.longClickExNodeInfo(nodeinfo.nid);
    } else if (isAgentMode()) {
        return agentEvent.longClickExNodeInfo(nodeinfo.nid);
    }
}


function scrollForwardNodeInfo(nodeinfo) {
    if (isAccMode()) {
        return acEvent.scrollForwardNodeInfo(nodeinfo.nid);
    } else if (isAgentMode()) {
        return agentEvent.scrollForwardNodeInfo(nodeinfo.nid);
    }
}

function scrollBackwardNodeInfo(nodeinfo) {
    if (isAccMode()) {
        return acEvent.scrollBackwardNodeInfo(nodeinfo.nid);
    } else if (isAgentMode()) {
        return agentEvent.scrollBackwardNodeInfo(nodeinfo.nid);
    }
}

function scrollLeftNodeInfo(nodeinfo) {
    if (isAccMode()) {
        return acEvent.scrollLeftNodeInfo(nodeinfo.nid);
    } else if (isAgentMode()) {
        return agentEvent.scrollLeftNodeInfo(nodeinfo.nid);
    }
}

function scrollRightNodeInfo(nodeinfo) {
    if (isAccMode()) {
        return acEvent.scrollRightNodeInfo(nodeinfo.nid);
    } else if (isAgentMode()) {
        return agentEvent.scrollRightNodeInfo(nodeinfo.nid);
    }
}

function scrollUpNodeInfo(nodeinfo) {
    if (isAccMode()) {
        return acEvent.scrollUpNodeInfo(nodeinfo.nid);
    } else if (isAgentMode()) {
        return agentEvent.scrollUpNodeInfo(nodeinfo.nid);
    }
}

function scrollDownNodeInfo(nodeinfo) {
    if (isAccMode()) {
        return acEvent.scrollDownNodeInfo(nodeinfo.nid);
    } else if (isAgentMode()) {
        return agentEvent.scrollDownNodeInfo(nodeinfo.nid);
    }
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
 * 获取最近的节点事件处罚的时间，可通过时间判断节点服务是否可用
 *
 * @return {long} 长整型时间，毫秒级别
 */
function lastNodeEventTime() {

    if (isAccMode()) {
        return acEvent.lastNodeEventTime();
    } else if (isAgentMode()) {
        return agentEvent.lastNodeEventTime();
    }
    return 0;
}


/**
 * 长按住事件
 * @param x x坐标
 * @param y y坐标
 * @param delay 长按时间  毫秒
 * @return {bool} true 成功 false 失败
 */

function press(x, y, delay) {
    if (isAccMode()) {
        return acEvent.press(x, y, delay);
    } else if (isAgentMode()) {
        return agentEvent.press(x, y, delay);
    }
    return false;
}



/**
 * 执行按下事件
 * 适合EC 7.4.0+
 * @param x         x坐标
 * @param y         y坐标
 * @return 布尔型 true 代表成功 false代表失败
 */
function touchDown(x, y) {
    if (isAccMode()) {
        return acEvent.touchDown(x, y);
    } else if (isAgentMode()) {
        return agentEvent.touchDown(x, y);
    }
    return false;
}
/**
 * 执行移动事件
 * 适合EC 7.4.0+
 * @param x         x坐标
 * @param y         y坐标
 * @return 布尔型 true 代表成功 false代表失败
 */
function touchMove(x, y) {
    if (isAccMode()) {
        return acEvent.touchMove(x, y);
    } else if (isAgentMode()) {
        return agentEvent.touchMove(x, y);
    }
    return false;
}
/**
 * 执行弹起事件
 * 适合EC 7.4.0+
 * @param x         x坐标
 * @param y         y坐标
 * @return 布尔型 true 代表成功 false代表失败
 */
function touchUp(x, y) {
    if (isAccMode()) {
        return acEvent.touchUp(x, y);
    } else if (isAgentMode()) {
        return agentEvent.touchUp(x, y);
    }
    return false;
}
