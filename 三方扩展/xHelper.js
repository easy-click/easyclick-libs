/*

XHelperWrapper 版本: 1.0.0

 使用方法:
 在 main.js 中 实例化

    var h = new XHelperWrapper();
    h.ToastLog("测试")
    h.ClickTextOrDesc("测试")

*/


function XHelperWrapper() {
    this._findNodeOutTime = 0;
}

XHelperWrapper.prototype.ToastLog = function (msg) {
    toast(msg)
    logd(msg)
}

// region 简单的点击节点  (复杂节点信息  请查看文档,使用 clickObj 点击)

XHelperWrapper.prototype.ClickTextOrDesc = function (content) {
    var res = this.ClickText(content);

    if (!res) {
        res = this.ClickDesc(content)
    }

    if (res) {
        logd("ClickTextOrDesc 点击成功: " + content)
    }

    return res;
}

XHelperWrapper.prototype.ClickId = function (content) {

    var obj = null;
    if (this.IsRegEx(content)) {
        obj = idMatch(content).getOneNodeInfo(this._findNodeOutTime)
    } else {
        obj = id(content).getOneNodeInfo(this._findNodeOutTime)
    }

    return this.ClickObj(obj)
}

XHelperWrapper.prototype.ClickText = function (content) {

    var obj = null;
    if (this.IsRegEx(content)) {
        obj = textMatch(content).getOneNodeInfo(this._findNodeOutTime)
    } else {
        obj = text(content).getOneNodeInfo(this._findNodeOutTime)
    }

    return this.ClickObj(obj)
}

XHelperWrapper.prototype.ClickDesc = function (content) {
    var obj = null;
    if (this.IsRegEx(content)) {
        obj = descMatch(content).getOneNodeInfo(this._findNodeOutTime)
    } else {
        obj = desc(content).getOneNodeInfo(this._findNodeOutTime)
    }
    return this.ClickObj(obj)
}

XHelperWrapper.prototype.ClickClz = function (content) {
    var obj = null;
    if (this.IsRegEx(content)) {
        obj = clzMatch(content).getOneNodeInfo(this._findNodeOutTime)
    } else {
        obj = clz(content).getOneNodeInfo(this._findNodeOutTime)
    }
    return this.ClickObj(obj)

}

XHelperWrapper.prototype.ClickPkg = function (content) {
    var obj = null;
    if (this.IsRegEx(content)) {
        obj = pkgMatch(content).getOneNodeInfo(this._findNodeOutTime)
    } else {
        obj = pkg(content).getOneNodeInfo(this._findNodeOutTime)
    }
    return this.ClickObj(obj)
}

/**
 * 判断是否是 正则
 * @param content
 * @return {boolean}
 * @constructor
 */
XHelperWrapper.prototype.IsRegEx = function (content) {
    return content.indexOf(".*") > -1
}

XHelperWrapper.prototype.ClickObj = function (obj) {
    var res = false;
    if (obj) {
        try {
            var item = obj.bounds.center();
            var x = item.x;
            var y = item.y;
            res = clickPoint(x, y) // 改成 范围随机点击 也可以
            //sleep(500)

        } catch (e) {
            loge("ClickObj 异常:" + e.message)
            loge(e.track);
        }
    }
    return res
}

// endregion

// region 简单判断节点是否存在
XHelperWrapper.prototype.IsExistTextOrDesc = function (content) {
    var res = this.IsExistText(content);
    if (!res) {
        res = this.IsExistDesc(content)
    }
    return res;
}

XHelperWrapper.prototype.IsExistId = function (content) {
    return this.IsNotNull(id(content).getOneNodeInfo(this._findNodeOutTime))
}

XHelperWrapper.prototype.IsExistText = function (content) {
    return this.IsNotNull(text(content).getOneNodeInfo(this._findNodeOutTime))
}

XHelperWrapper.prototype.IsExistDesc = function (content) {
    return this.IsNotNull(desc(content).getOneNodeInfo(this._findNodeOutTime))
}

XHelperWrapper.prototype.IsExistClz = function (content) {
    return this.IsNotNull(clz(content).getOneNodeInfo(this._findNodeOutTime))
}

XHelperWrapper.prototype.IsExistPkg = function (content) {
    return this.IsNotNull(pkg(content).getOneNodeInfo(this._findNodeOutTime))
}

XHelperWrapper.prototype.IsNotNull = function (data) {
    return data != null
}

// endregion

// region 计时器(一般用来 查看某段代码的耗时)
/**
 * 开始计时
 * @return {Date}
 * @constructor
 */
XHelperWrapper.prototype.StartTime = function () {
    return new Date();
}

/**
 * 停止 计时
 * @param startTime 开始的时间 请使用 @StartTime() 获取
 * @returns {number} 单位: 毫秒
 * @constructor
 */
XHelperWrapper.prototype.StopTime = function (startTime) {
    var endTime = new Date();
    return endTime - startTime;
}
// endregion


/**
 * 曲线 仿真滑动
 * @param x1  起始 x
 * @param y1  起始 y
 * @param x2 结束x
 * @param y2 结束y
 * @param time  大概消耗的时间 (单位: 毫秒)
 * @return {Boolean}  true 成功  false 失败
 * @constructor
 */
XHelperWrapper.prototype.SwipeCurve = function (x1, y1, x2, y2, time) {

    /**
     * 生成随机 xy
     * @param qx 起始x
     * @param qy 起始y
     * @param zx 终点x
     * @param zy 终点y
     * @return {Array} 路径点  数组
     */
    function randomPoint(qx, qy, zx, zy) {

        var point = [];

        var dx0 = {
            "x": random(qx, qx + 50),
            "y": random(qy, qy + 50)
        }

        var dx1 = {
            "x": random(qx - 100, qx + 100),
            "y": random(qy, qy + 50)
        }
        var dx2 = {
            "x": random(zx - 100, zx + 100),
            "y": random(zy, zy + 50),
        }
        var dx3 = {
            "x": random(zx - 100, zx + 100),
            "y": random(zy, zy + 50),
        }
        var dx4 = {
            "x": random(zx - 100, zx + 100),
            "y": random(zy, zy + 50),
        }
        var dx5 = {
            "x": random(zx - 100, zx + 100),
            "y": random(zy, zy + 50),
        }
        var dx6 = {
            "x": random(zx - 100, zx + 100),
            "y": random(zy, zy + 50),
        }
        var dx7 = {
            "x": zx,
            "y": zy
        }

        for (var i = 0; i < 8; i++) {

            eval("point.push(dx" + i + ")");

        }

        var res = [];

        for (let i = 0; i < 1; i += 0.08) {
            res.push([parseInt(bezierCurves(point, i).x), parseInt(bezierCurves(point, i).y)]);
        }

        return res
    }

    /**
     * 贝塞尔曲线
     * @param cp
     * @param t
     * @return {*}
     */
    function bezierCurves(cp, t) {
        var cx, bx, ax, cy, by, ay, tSquared, tCubed, result
        cx = 3.0 * (cp[1].x - cp[0].x);
        bx = 3.0 * (cp[2].x - cp[1].x) - cx;
        ax = cp[3].x - cp[0].x - cx - bx;
        cy = 3.0 * (cp[1].y - cp[0].y);
        by = 3.0 * (cp[2].y - cp[1].y) - cy;
        ay = cp[3].y - cp[0].y - cy - by;

        tSquared = t * t;
        tCubed = tSquared * t;
        result = {
            "x": 0,
            "y": 0
        }
        result.x = (ax * tCubed) + (bx * tSquared) + (cx * t) + cp[0].x;
        result.y = (ay * tCubed) + (by * tSquared) + (cy * t) + cp[0].y;
        return result;
    }

    /**
     * 多点触摸
     * @param pointList xy坐标集合
     * @param time 滑动消耗的时长
     * @param outTime 超时时间
     * @return {boolean}
     */
    function gesture(pointList, time, outTime) {
        var res = false

        // 随机 停顿时间
        var left = (time / 10) - 10
        var min = left < 0 ? 0 : left;
        var max = (time / 10) + 10

        var touch1 = [{
            "action": 0,
            "x": pointList[0][0],
            "y": pointList[0][1],
            "pointer": 1,
            "delay": random(min, max)
        }]

        for (var i in pointList) {
            ++i;
            if (i === pointList.length - 2) {
                break;
            }
            touch1.push({
                "action": 2,
                "x": pointList[i][0],
                "y": pointList[i][1],
                "pointer": 1,
                "delay": random(min, max)
            });

        }
        touch1.push({
            "action": 1,
            "x": pointList[pointList.length - 1][0],
            "y": pointList[pointList.length - 1][1],
            "pointer": 1,
            "delay": random(min, max)
        })

        res = multiTouch(touch1, null, null, outTime);

        return res
    }

    return gesture(randomPoint(x1, y1, x2, y2), time, 9999)
}



