let lgUtils = function () {
}
/**
 * 蛇形滑动 x轴方向四阶赛贝尔蛇形滑动 EC改良版
 * @param qx 起点X 坐标
 * @param qy 起点Y 坐标
 * @param zx 终点X 坐标
 * @param zy 终点Y 坐标
 * @param time 滑动分段停留时间 （单位：毫秒）
 *
 *例子：lgBaseUtil.moveFun(126,1442,130,1442+random(-10,10),random(20,60));
 */
lgUtils.prototype.moveFun = function (qx, qy, zx, zy, time) {
    if (qx === undefined && qy === undefined && zx === undefined && zy === undefined && time === undefined) {
        loge("参数不完整请检查参数");
        return null;
    }
    var xxy = [];
    var points = [];
    var point1 = {
        "x": random(qx, qx + 50),
        "y": random(qy, qy + 50)
    };

    var point2 = {
        "x": random(zx - 100, zx + 100),
        "y": random(zy, zy + 50),
    };

    var point3 = {
        "x": random(zx - 100, zx + 100),
        "y": random(zy, zy + 50),
    };
    var point4 = {
        "x": zx,
        "y": zy
    };

    points.push(point1);
    points.push(point2);
    points.push(point3);
    points.push(point4);
    let targetP;
    for (let i = 0; i < 1; i += 0.08) {
        targetP = bezier_curves(points, i);
        xxy.push([parseInt(targetP["x"]), parseInt(targetP["y"])]);
    }
    let touch1 = [];
    let _time = time;// / xxy.length;
    touch1.push({"action": 0, "x": xxy[0][0], "y": xxy[0][1], "pointer": 1, "delay": _time})
    for (let i = 2; i < xxy.length - 1; i++) {
        touch1.push({"action": 2, "x": xxy[i][0], "y": xxy[i][1], "pointer": 1, "delay": _time})
    }
    touch1.push({
        "action": 1,
        "x": xxy[xxy.length - 1][0],
        "y": xxy[xxy.length - 1][1],
        "pointer": 1,
        "delay": _time
    })
    let guiret = multiTouch(touch1, null, null, 300);
    if (guiret) {
        return true
    }

    /**
     * 贝塞尔曲线 EC改良版
     * @param cp
     * @param t
     * @returns {{x: number, y: number}}
     */
    function bezier_curves(cp, t) {
        let cx = 3.0 * (cp[1]["x"] - cp[0]["x"]);
        let bx = 3.0 * (cp[2]["x"] - cp[1]["x"]) - cx;
        let ax = cp[3]["x"] - cp[0]["x"] - cx - bx;
        let cy = 3.0 * (cp[1]["y"] - cp[0]["y"]);
        let by = 3.0 * (cp[2]["y"] - cp[1]["y"]) - cy;
        let ay = cp[3]["y"] - cp[0]["y"] - cy - by;
        let tSquared = t * t;
        let tCubed = tSquared * t;
        let result = {
            "x": 0,
            "y": 0
        };
        result["x"] = (ax * tCubed) + (bx * tSquared) + (cx * t) + cp[0]["x"];
        result["y"] = (ay * tCubed) + (by * tSquared) + (cy * t) + cp[0]["y"];
        return result;
    }
}

//----------------------------------------滑动2----------------------------------------
//(二指仿真滑动) qx, qy, zx, zy, time 代表起点x,起点y,终点x,终点y,times,timess =随机时间(times,timess)
function rnd_SwipeTwo(qx, qy, zx, zy, time, time1, times) {
    var x = [], ti
    ti = random(time, time1)
    x.push(rndSwipe(qx, qy, zx, zy), rndSwipe(qx, qy, zx, zy))
    gestureTwo(x, ti, times)
}

//(仿真滑动)qx, qy, zx, zy, time 代表起点x,起点y,终点x,终点y,times,timess =随机时间(times,timess)
function rnd_Swipe(qx, qy, zx, zy, time, time1, times) {
    var ti
    ti = random(time, time1)
    gesture(rndSwipe(qx, qy, zx, zy), ti, times)
}

function bezier_curves(cp, t) {
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

function rndSwipe(qx, qy, zx, zy) {
    var time1, xxy, point, dx0, dx1, dx2, dx3, xxyy, xxxy = []
    xxy = [];
    point = [];
    dx0 = {
        "x": random(qx, qx + 50),
        "y": random(qy, qy + 50)
    }
    dx1 = {
        "x": random(qx - 100, qx + 100),
        "y": random(qy, qy + 50)
    }
    dx2 = {
        "x": random(zx - 100, zx + 100),
        "y": random(zy, zy + 50),
    }
    dx3 = {
        "x": zx,
        "y": zy
    }
    for (var i = 0; i < 4; i++) {
        eval("point.push(dx" + i + ")");
    }
    for (let i = 0; i < 1; i += 0.08) {
        xxyy = [parseInt(bezier_curves(point, i).x), parseInt(bezier_curves(point, i).y)]
        xxy.push(xxyy);
    }
    return xxy
}

function gesture(swipeList, time, time1) {
    var touch1, touch2, x, i
    touch1 = [{"action": 0, "x": swipeList[0][0], "y": swipeList[0][1], "pointer": 1, "delay": time}]

    for (i in swipeList) {
        ++i;
        if (i === swipeList.length - 2) {
            break;
        }
        touch1.push({"action": 2, "x": swipeList[i][0], "y": swipeList[i][1], "pointer": 1, "delay": time});
    }
    logd(time1);
    touch1.push({
        "action": 1,
        "x": swipeList[swipeList.length - 1][0],
        "y": swipeList[swipeList.length - 1][1],
        "pointer": 1,
        "delay": time
    })
    x = multiTouch(touch1, null, null, time1);
    logd('仿真滑动:' + x);
}

function gestureTwo(swipeList, time, time1) {
    var swipe = swipeList[0]
    var swipe1 = swipeList[1]
    var touch1, touch2, x, i
    touch1 = [{"action": 0, "x": swipe[0][0], "y": swipe[0][1], "pointer": 1, "delay": time}]
    touch2 = [{"action": 0, "x": swipe1[0][0], "y": swipe1[0][1], "pointer": 2, "delay": time}]
    for (i in swipe) {
        ++i;
        if (i === swipe.length - 2) {
            break;
        }
        touch1.push({"action": 2, "x": swipe[i][0], "y": swipe[i][1], "pointer": 1, "delay": time});
        touch2.push({"action": 2, "x": swipe1[i][0], "y": swipe1[i][1], "pointer": 2, "delay": time});
    }
    touch1.push({
        "action": 1,
        "x": swipe[swipe.length - 1][0],
        "y": swipe[swipe.length - 1][1],
        "pointer": 1,
        "delay": time
    })
    touch2.push({
        "action": 1,
        "x": swipe1[swipe1.length - 1][0],
        "y": swipe1[swipe1.length - 1][1],
        "pointer": 2,
        "delay": time
    })


    x = multiTouch(touch1, touch2, null, time1);
    logd('仿真滑动:' + x);
}

//qx, qy, zx, zy, time 代表起点x,起点y,终点x,终点y,times,timess =随机时间(times,timess)
//rnd_Swipe(600,1800,300,400,30,100,500)


//点击方式选择
function main_clickfs(clicknr) {
    if (clicknr != null) {
        let clickfanhui = false
        if (true) {
            clickfanhui = kuaishou_huoquexdianji(clicknr)
            if (clickfanhui != false && clickfanhui != null) {
                let qa = clickfanhui.clickEx()
                if (qa) {
//		  logd ("通用的点击Ex：true");
                    return true
                } else {
                    logd("通用的点击Ex：false");
                    return false
                }
            } else {
                return false
            }
        }
    }


}

function kuaishou_huoquexdianji(jied) {
    if (jied != null) {
        if (!jied.clickable) {
            let a = jied.parent()
            if (a != null && !a.clickable) {
                let b = a.parent()
                if (b != null && !b.clickable) {
                    let c = b.parent()
                    if (c != null && !c.clickable) {
                        let d = c.parent()
                        if (d != null && !d.clickable) {
                            logd("click all  false");
                            return false
                        } else {
                            //	  logd ("d  true");
                            return d
                        }
                    } else {
                        //	logd ("c  true");
                        return c
                    }
                } else {
                    //	  logd ("b  true");
                    return b
                }
            } else {
                //	logd ("a  true");
                return a
            }
        } else {
//	  logd ("jied  true");
            return jied
        }
    }
}

//随机等待
function main_suijidengdai() {
    let a = random(2500, 4500)
    sleep(a);
}

//文字界面界面滑动
function red_yanghao_jingxuanmoveup() {
    for (let i = 0; i < 1150; i++) {
        let stx = shebei.weigth * 0.25
        let stx1 = shebei.weigth * 0.75
        let sty = shebei.heigth * 0.85
        let sty1 = shebei.heigth * 0.2
        let finalx = random(stx, stx1)
        let finalx1 = finalx + random(-50, 50)
        let finaly = random(sty, sty1)
        let finaly1 = random(sty1, finaly)
        let finanlyju = (finaly - finaly1)
        if (finanlyju > 1000 && finanlyju < 1920) {
            logd("短视屏：" + "滑动 true   " + i);
            //  logd (finalx, finaly, finalx1, finaly1);
            let istrue = lgUtils.prototype.moveFun(finalx, finaly, finalx1, finaly1, 35)
            if (istrue) {
                main_suijidengdai()
                return true
            }
        } else {
        }
    }
}


//处理1和0
function red_main_do_1(i) {
    if (i === 0) {
        return false
    } else {
        return true
    }
}

