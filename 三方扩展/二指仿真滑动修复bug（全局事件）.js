//(二指仿真滑动) qx, qy, zx, zy, time 代表起点x,起点y,终点x,终点y,times,timess =随机时间(times,timess)
function rnd_SwipeTwo(qx,qy,zx,zy,time,time1,times) {
    var x=[],ti
    ti=random(time,time1)
    x.push(rndSwipe(qx,qy,zx,zy),rndSwipe(qx,qy,zx,zy))
    gestureTwo(x,ti,times)
}
//(仿真滑动)qx, qy, zx, zy, time 代表起点x,起点y,终点x,终点y,times,timess =随机时间(times,timess)
function rnd_Swipe(qx,qy,zx,zy,time,time1,times) {
    var ti
    ti=random(time,time1)
    gesture(rndSwipe(qx,qy,zx,zy),ti,times)
}








function bezier_curves(cp, t) {
    var cx,bx,ax,cy,by,ay,tSquared,tCubed,result
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
    var time1,xxy,point,dx0,dx1,dx2,dx3,xxyy,xxxy=[]


    xxy = [];
    point = [];
    dx0 = {
        "x": random(qx,qx+50),
        "y":  random(qy,qy+50)
    }

    dx1 = {
        "x": random(qx - 100, qx + 100),
        "y": random(qy , qy + 50)
    }
    dx2 = {
        "x": random(zx - 100, zx + 100),
        "y": random(zy , zy + 50),
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





function gesture(swipeList,time,time1) {
    var touch1 ,touch2,x,i
    touch1 = [{"action": 0, "x": swipeList[0][0], "y": swipeList[0][1], "pointer": 1, "delay": time}]

    for (i in swipeList){
        ++i;
        if (i===swipeList.length-2) {break;}

        touch1.push({"action": 2, "x": swipeList[i][0], "y": swipeList[i][1], "pointer": 1, "delay": time});

    }
    touch1.push({"action": 1, "x": swipeList[swipeList.length-1][0], "y": swipeList[swipeList.length-1][1], "pointer": 1, "delay": time})

    x = multiTouch(touch1, null, null, time1);
    logd('仿真滑动:'+x);
}
function gestureTwo(swipeList,time,time1) {
    var swipe=swipeList[0]
    var swipe1=swipeList[1]

    var touch1 ,touch2,x,i
    touch1 = [{"action": 0, "x": swipe[0][0], "y": swipe[0][1], "pointer": 1, "delay": time}]
    touch2 = [{"action": 0, "x": swipe1[0][0], "y": swipe1[0][1], "pointer": 2, "delay": time}]
    for (i in swipe){
        ++i;
        if (i===swipe.length-2) {break;}
        touch1.push({"action": 2, "x": swipe[i][0], "y": swipe[i][1], "pointer": 1, "delay": time});
        touch2.push({"action": 2, "x": swipe1[i][0], "y": swipe1[i][1], "pointer": 2, "delay": time});
    }
    touch1.push({"action": 1, "x": swipe[swipe.length-1][0], "y": swipe[swipe.length-1][1], "pointer": 1, "delay": time})
    touch2.push({"action": 1, "x": swipe1[swipe1.length-1][0], "y": swipe1[swipe1.length-1][1], "pointer": 2, "delay": time})

    x = multiTouch(touch1, touch2, null, time1);

    logd('仿真滑动:'+x);
}

//qx, qy, zx, zy, time 代表起点x,起点y,终点x,终点y,times,timess =随机时间(times,timess)
// rnd_Swipe(600,1800,300,400,30,100,500)