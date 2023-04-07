/**
 * 原作者QQ: 1438667453 楠桃
 * 本软件使用EasyClick iOS免越狱 USB版本开发，适配 v4.1中控台版本
 * 文档地址：https://ieasyclick.com/iosdocs/
 * EasyClick iOS免越狱 USB专业用于开发iOS自动化脚本、iOS免越狱投屏等的软件平台
 * EasyClick iOS免越狱还支持无需任何硬件直接打包ipa的自动化脚本方案
 * 官方地址：https://ieasyclick.com
 * QQ交流群： 
 * Q群1: 777164022 Q群2: 922739785 Q群3：647082990
 * Q群4: 772810035 Q群5: 484379843 Q群6：435253761
 */
function Start_function() {
}
let start = new Start_function();

Start_function.prototype.透明找图=function(name,x,y,x1,y1,dj){
    //申请完权限至少等1s(垃圾设备多加点)再截图,否则会截不到图
    let res = false;
    //从工程目录下res文件夹下读取sms.png文件
    let sms=readResAutoImage(name+".png");
    //抓取屏幕
    let aimage = image.captureFullScreen();
    if (aimage != null) {
        //在图片中查找
        let points = image.findImageByColor(aimage, sms,x,y,x1,y1,0.7, 1);
        if (points != null ) {
         //   logd(name + JSON.stringify(points));
        }else {
            sleep(100);
            logd("正在寻找"+name + JSON.stringify(points));
        }
        //这玩意是个数组
        if(points && points.length >0){
            for(let i=0;i<points.length;i++){
                if(dj===1){
                    sleep("100")
                    clickPoint(points[i].x,points[i].y);
                }
                if(dj===2){
                    sleep("100")
                    doubleClickPoint(points[i].x,points[i].y);
                }
            }
            res = true;
        }
        //图片要回收
        image.recycle(aimage)
    }else {
        image.recycle(aimage)
    }
    //图片要回收
    image.recycle(sms)
    return res;
}
Start_function.prototype.start=function(){
    while (true){
        let 删除过去 = start.透明找图("删除过去",0,0,0,0)
        if (删除过去) {
            logd("在粉丝页面");
            break;
        }else {
            logd("不是指定页面");
        }
    }
while (true) {
    let sms = readResAutoImage("关注" + ".png");
    let aimage = image.captureFullScreen();
    if (aimage != null) {
        let points = image.findImageByColor(aimage, sms, 16,343,1106,1469, 0.7, 7);
        if (points != null) {
        } else {
            sleep(100);
            logd("正在寻找" + name + JSON.stringify(points));
        }
        if (points && points.length > 0) {
            for (let i = 0; i < points.length; i++) {
                var 随机值 = random(250, 800);
                if (i === 0) {
                    logd(points[i])
                    let x = points[i].x - 随机值
                    let y = points[i].y
                    clickPoint(x, y)
                    logd(x, y);
                    start.implement()

                }
                if (i === 1) {
                    logd(points[i])
                    let x = points[i].x - 随机值
                    let y = points[i].y
                    clickPoint(x, y)
                    logd(x, y);
                    start.implement()

                } else if (i === 2) {
                    logd(points[i])
                    let x = points[i].x - 随机值
                    let y = points[i].y
                    clickPoint(x, y)
                    logd(x, y);
                    start.implement()

                } else if (i === 3) {
                    logd(points[i])
                    let x = points[i].x - 随机值
                    let y = points[i].y
                    clickPoint(x, y)
                    logd(x, y);
                    start.implement()

                } else if (i === 4) {
                    logd(points[i])
                    let x = points[i].x - 随机值
                    let y = points[i].y
                    clickPoint(x, y)
                    logd(x, y);
                    start.implement()

                } else if (i === 5) {
                    logd(points[i])
                    let x = points[i].x - 随机值
                    let y = points[i].y
                    clickPoint(x, y)
                    logd(x, y);
                    start.implement()

                } else if (i === 6) {
                    logd(points[i])
                    let x = points[i].x - 随机值
                    let y = points[i].y
                    clickPoint(x, y)
                    logd(x, y);
                    start.implement()

                } else if (i === 7) {
                    logd(points[i])
                    let x = points[i].x - 随机值
                    let y = points[i].y
                    clickPoint(x, y)
                    logd(x, y);
                    start.implement()
                }
            }
            //图片要回收
        }
        image.recycle(aimage)
    } else {
        image.recycle(aimage)
    }
    //图片要回收
    image.recycle(sms)
    let 到底判断 = start.透明找图("暂时没有更多了",30,1950,1095,2420)
    let 到底判断1 = start.透明找图("快手平台账号",30,1950,1095,2420)
    if (到底判断 || 到底判断1) {
        logi("到底了");
        exit();
        return;
    }
    let 拖动坐标 =  swipeToPoint(550,1500,533,376,1500);
    if (拖动坐标) {
        logd(拖动坐标);
    }else {
        logd("拖动坐标失败,再次拖动");
        swipeToPoint(550,1500,533,376,2000);
    }
    sleep(2000);
}
}
Start_function.prototype.implement=function() {
    sleep(3000);
    releaseNode();
    lockNode();
        let 性别查找 = label("男").bounds(3, 583, 1116, 2216).getOneNodeInfo(1000)
        if (性别查找) {
            while (true) {
                let 快手号 = label("快手号：").bounds(3, 583, 1116, 2216).getOneNodeInfo(1500)
                if (快手号) {
                    let 获取后面的兄弟节点 = 快手号.nextSiblings()[0]
                    let 转换 = JSON.stringify(获取后面的兄弟节点)
                    let 快手名称 = JSON.parse(转换).label
                    logd(快手名称)
                    releaseNode();
                    lockNode();
                    let 点击作品 = label(快手名称 + "的作品").getOneNodeInfo(1000)
                    if (点击作品 != null) {
                        clickPoint(点击作品.bounds.centerX(), 点击作品.bounds.centerY());
                        sleep("3000")
                        clickPoint(1073,1213)
                        sleep(1000);
                        releaseNode();
                        lockNode();
                        let node = label("返回").getOneNodeInfo(10000)
                        if (node) {
                            logd(node.clickRandom())
                        } else {
                            clickPoint(84, 186)
                        }
                        continue
                    }
                }
                releaseNode();
                lockNode();
                let 快手号1 = label("快手号：").bounds(3, 583, 1116, 2216).getOneNodeInfo(2000)
                if (快手号1) {
                    let 获取前面的兄弟节点 = 快手号1.previousSiblings()[0]
                    let 转换 = JSON.stringify(获取前面的兄弟节点)
                    let 快手名称 = JSON.parse(转换).label
                    logd(快手名称)
                    releaseNode();
                    lockNode();

                    let 点击作品 = label(快手名称 + "的作品").getOneNodeInfo(1000);
                    if (点击作品 != null) {
                        clickPoint(点击作品.bounds.centerX(), 点击作品.bounds.centerY());
                        sleep("3000")
                        clickPoint(1073,1213)
                        sleep(1000);
                        releaseNode();
                        lockNode();
                        let node = label("返回").getOneNodeInfo(10000)
                        if (node) {
                            logd(node.clickRandom())
                        } else {
                            clickPoint(84, 186)
                        }
                    }
                    break;
                }
            }
            sleep(2000);
            releaseNode();
            lockNode();
            let node = label("返回").getOneNodeInfo(10000)
            if (node) {
                logd(node.clickRandom())
            } else {
                clickPoint(84, 186)
            }
            logd("返回");
        } else {
               sleep(1000);
                releaseNode();
                lockNode();
                let node = label("返回").getOneNodeInfo(10000)
                if (node) {
                    logd(node.clickRandom())
                } else {
                    clickPoint(84, 186)
                }
                logd("性别不是男性返回");
        }
        sleep(4500);

}












