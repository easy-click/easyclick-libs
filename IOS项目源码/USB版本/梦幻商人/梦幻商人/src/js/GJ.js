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

function Gj_function() {
}
let GJ = new Gj_function();
var 仓库满判断 = 0;
var 获取设备 = device.getDeviceAlias();

Gj_function.prototype.透明找图=function(name,x,y,x1,y1,dj) {
    //申请完权限至少等1s(垃圾设备多加点)再截图,否则会截不到图
    let res = false;
    //从工程目录下res文件夹下读取sms.png文件
    let sms=readResAutoImage(name+".png");
    //抓取屏幕
    let aimage = image.captureFullScreen();
   // logd(aimage)
    if (aimage != null) {
        //在图片中查找
        let points = image.findImageByColor(aimage, sms,x,y,x1,y1,0.7,1);
        if (null !=points) {
            logd(name + JSON.stringify(points));
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
    }
    //图片要回收
    image.recycle(sms)
    return res;
};

Gj_function.prototype.图片查找=function(name,x,y,x1,y1,dd){
    let iszd=false;
    let sms=readResAutoImage(name+".png");
//抓取屏幕
    let aimage = image.captureFullScreen();
   // logd(name + aimage);
    if (aimage != null) {
        //在图片中查找
        let points = image.findImage(aimage, sms,x,y,x1,y1,0.7, 0.7, 1, 5);
       // logd(name  + JSON.stringify(points));
        //这玩意是个数组
        if(points && points.length > 0){
            for(let i=0;i<points.length;i++){
             //   logd(points[i])
                let x = parseInt((points[i].left + points[i].right)/2)
                let y = parseInt((points[i].top + points[i].bottom)/2)
                //点击坐标
                if (dd === 1){
                    clickPoint(x,y)
                }
                if (dd === 2){
                    doubleClickPoint(x,y)
                }
            }
            iszd=true;
        }
        //图片要回收
        image.recycle(aimage)
    }
//图片要回收
    image.recycle(sms)
    return iszd;
}

Gj_function.prototype.打开道具=function() {
    clickPoint(63, 1176);
    sleep("500");
    let ix = 0;
    while (true) {
        sleep("200")
        let 道具人物 = GJ.透明找图("道具人物", 414, 942, 724, 1290)
        let 打开道具 = GJ.透明找图("道具",637, 454, 746, 816)
        if (打开道具 === true || 道具人物 === true) {
            logd("打开道具");
            sleep(50)
            clickPoint(574, 1165)
            return;
        } else {
            clickPoint(63, 1176);
        }
    }
}

Gj_function.prototype.红色旗子商人=function() {
    GJ.打开道具()
    sleep(800)
    let 红旗子 = GJ.透明找图("红旗子", 163, 576, 599, 1136)
    if (红旗子) {
        GJ.透明找图("红旗子", 163, 576, 599, 1136, 2)
        sleep(1000)
        let iix = 0 ;
        while (true) {
            let 红旗子判断 = GJ.透明找图("红旗子判断",528,776,710,1214)
            if (红旗子判断) {
                logd("点击或滑动可查看坐标");
                sleep(800)
                doubleClickPoint(372,1054)
                sleep(800)
                clickPoint(690,1110)
                sleep(800)
                clickPoint(484,42)
                sleep(300)
                GJ.屏蔽判断()
                sleep(800)
                GJ.商人点击()
                return;
            } else {
                sleep(800)
                iix++;
                if (iix===8){
                    GJ.透明找图("红旗子", 163, 576, 599, 1136, 2)
                    return;
                }
            }
        }
    } else {
        sleep(200)
        clickPoint(524,662)
        sleep(500)
        clickPoint(326,276)
        sleep(500)
        clickPoint(608,856)
        sleep(500)
        clickPoint(595, 907)
        //打开行囊
        sleep("500")
        let 红旗子1 = GJ.透明找图("红旗子", 163, 576, 599, 1136, 2)
        if (红旗子1) {
            logd("找到");
            GJ.透明找图("红旗子", 163, 576, 599, 1136, 2)
            sleep("500")
            //点击道具
            clickPoint(604, 678)
            sleep("500")
        }else {
            logd("没有红色旗子")
            stopApp("com.netease.mhxyhtb");
        }
    }
}
Gj_function.prototype.屏蔽判断=function(){
    let ixx = 0;
    let ixxx = 0;
    let ixxxx = 0;
    while (true) {
        sleep(300)
        let 隐藏界面 = GJ.透明找图("隐藏界面", 34, 2, 552, 116, 1)
        if (隐藏界面) {
            logd("关闭隐藏界面")
            break;
        }else{
            ixx++
            sleep(500)
            if (ixx===3){
                break;
            }
        }
        sleep(300)
        let 隐藏摊位 = GJ.透明找图("隐藏摊位", 34, 2, 552, 116, 1)
        if (隐藏摊位) {
            logd("开启隐藏摊位")
            break;
        }else{
            ixxx++
            sleep(500)
            if (ixxx===3){
                break;
            }
        }
        sleep(300)
        let 隐藏玩家 = GJ.透明找图("隐藏玩家", 34, 2, 552, 116)
        if (隐藏玩家) {
            logd("隐藏玩家开启状态")
           return;
        }else{
            ixxxx++
            sleep(500)
            if (ixxxx===3){
                return;
            }
        }

    }
}
Gj_function.prototype.商人点击=function(){
    clickPoint(289,720)
    let ix = 0 ;
    while (true) {
        sleep(1500)
        let 请选择要做的事 = GJ.透明找图("请选择要做的事", 266,893,722,1321)
        if (请选择要做的事) {
            logd("请选择要做的事");
            sleep(1000)
            let 购买珍品 = GJ.图片查找("购买珍品", 266,893,722,1321, 1)
            if (购买珍品) {
                logd("购买珍品")
                sleep(500)
                clickPoint(77,47)
                sleep(300)
            } else {
                sleep("100")
                clickPoint(581,1075)
                sleep(500)
                clickPoint(77,47)
                sleep(300)
            }
            return;
        } else {
            sleep(3000)
            clickPoint(289,720)

            ix++
            if (ix===8){
                GJ.红色旗子商人()
                return;
            }
        }
    }
}
Gj_function.prototype.红色旗子进入商人=function() {
    GJ.打开道具()
    sleep(800)
    let 红旗子 = GJ.透明找图("红旗子", 163, 576, 599, 1136)
    if (红旗子) {
        GJ.透明找图("红旗子", 163, 576, 599, 1136, 2)
        sleep(1000)
        let iix = 0 ;
        while (true) {
            let 红旗子判断 = GJ.透明找图("红旗子判断",528,776,710,1214)
            if (红旗子判断) {
                logd("点击或滑动可查看坐标");
                sleep(800)
                doubleClickPoint(372,1054)
                sleep(800)
                clickPoint(690,1110)
                sleep(800)
                clickPoint(484,42)
                sleep(300)
                GJ.屏蔽判断()
                sleep(800)
                GJ.商人点击定时()
                return;
            } else {
                sleep(800)
                iix++;
                if (iix===8){
                    GJ.透明找图("红旗子", 163, 576, 599, 1136, 2)
                    return;
                }
            }
        }
    } else {
        clickPoint(595, 907)
        //打开行囊
        sleep("500")
        let 红旗子1 = GJ.透明找图("红旗子", 163, 576, 599, 1136, 2)
        if (红旗子1) {
            logd("找到");
            GJ.透明找图("红旗子", 163, 576, 599, 1136, 2)
            sleep("500")
            //点击道具
            clickPoint(604, 678)
            sleep("500")
        }else {
            logd("没有红色旗子")
            stopApp("com.netease.mhxyhtb");
        }
    }
}
Gj_function.prototype.商人点击定时=function(){
    clickPoint(289,720)
    let ix = 0 ;
    while (true) {
        sleep(1500)
        let 请选择要做的事 = GJ.透明找图("请选择要做的事", 266,893,722,1321)
        if (请选择要做的事) {
            logd("请选择要做的事");
            sleep(1000)
            let 购买珍品 = GJ.图片查找("购买珍品", 266,893,722,1321)
            if (购买珍品) {

                while (true) {
                    if (timeFormat("mm:ss")==timeFormat("mm:10")) {
                        logd("10秒进行")
                        break
                    }else {
                        logd("等待购买"+timeFormat("mm:ss"))
                        sleep(1000)
                    }
                }

                sleep(1000)
                GJ.图片查找("购买珍品", 266,893,722,1321,1)
                logd("购买珍品")
                sleep(500)
                clickPoint(77,47)
                sleep(300)
            } else {
                sleep("100")
                clickPoint(581,1075)
                sleep(500)
                clickPoint(77,47)
                sleep(300)
            }
            return;
        } else {
            sleep(3000)
            clickPoint(289,720)

            ix++
            if (ix===8){
                GJ.红色旗子商人()
                return;
            }
        }
    }
}


Gj_function.prototype.红色旗子仓库=function(){
    GJ.打开道具()
    let 红旗子 = GJ.透明找图("红旗子", 163, 576, 599, 1136)
    if (红旗子) {
        sleep(1000)
        GJ.透明找图("红旗子", 163, 576, 599, 1136, 2)
        sleep(500)
        let iix = 0 ;
        while (true) {
            let 红旗子判断 = GJ.透明找图("红旗子判断",528,776,710,1214)
            if (红旗子判断) {
                logd("点击或滑动可查看坐标");
                sleep(100)
                doubleClickPoint(305,419)
                sleep(800)
                clickPoint(690,1110)
                sleep(800)
                clickPoint(484,42)
                sleep(200)
                GJ.仓库点击()
                return;
            } else {
                sleep(500)
                iix++;
                if (iix===5){
                    GJ.透明找图("红旗子", 163, 576, 599, 1136, 2)
                    return;
                }
            }
        }
    } else {
        clickPoint(595, 907)
        //打开行囊
        sleep("500")
        let 红旗子1 = GJ.透明找图("红旗子", 163, 576, 599, 1136, 2)
        if (红旗子1) {
            logd("找到");
            GJ.透明找图("红旗子", 163, 576, 599, 1136, 2)
            sleep("500")
            //点击道具
            clickPoint(604, 678)
            sleep("500")
        }else {
            loge("没有红色旗子")
            stopApp("com.netease.mhxyhtb");
        }
    }
}
Gj_function.prototype.仓库点击=function(){
    clickPoint(428,609)
    let ix = 0 ;
    while (true) {
        sleep(1000)
        let 我要进行仓库操作 = GJ.透明找图("我要进行仓库操作", 90,872,602,1324,1)
        if (我要进行仓库操作) {
            logd("我要进行仓库操作");
            sleep("500")
            let ixx = 0 ;
            while (true) {
                let 购买珍品 = GJ.透明找图("双击道具可快速转移", 0, 742, 217, 1139)
                if (购买珍品) {
                    logd("双击道具可快速转移")
                    sleep(300)
                    clickPoint(77, 47)
                    sleep(300)
                    GJ.仓库存储()
                    break;
                } else {
                    sleep(2000)
                    ixx++
                    if (ixx===5){
                        GJ.红色旗子仓库()
                        break;
                    }
                }
            }
            return;
        } else {
            let 我现在交清欠费 = GJ.透明找图("我现在交清欠费", 90,872,602,1324,0)
            if (我现在交清欠费) {
                stopApp("com.netease.mhxyhtb");
                home()
                logd("仓库余额不足，结束");
            }

            sleep(2000)
            clickPoint(428,609)

            ix++
            if (ix===8){
                GJ.红色旗子仓库()
                return;
            }
        }
    }
}
Gj_function.prototype.仓库存储=function(){
    if (仓库满判断===0){
    logd("仓库1")
    }if (仓库满判断===1){
        sleep(100)
        clickPoint(96, 378)
        sleep(100)
    }if (仓库满判断===2){
        sleep(100)
        clickPoint(96, 378)
        sleep(300)
        clickPoint(96, 378)
        sleep(100)
    }if (仓库满判断===3){
        sleep(100)
        clickPoint(96, 378)
        sleep(300)
        clickPoint(96, 378)
        sleep(300)
        clickPoint(96, 378)
        sleep(100)
    }if (仓库满判断===4){
        sleep(100)
        clickPoint(96, 378)
        sleep(300)
        clickPoint(96, 378)
        sleep(300)
        clickPoint(96, 378)
        sleep(300)
        clickPoint(96, 378)
        sleep(100)
    }if (仓库满判断===5){
        sleep(100)
        clickPoint(95,275)
        sleep(500)
        clickPoint(490,208)
        sleep(100)
    }
    if (仓库满判断===6){
        sleep(100)
        clickPoint(95,275)
        sleep(500)
        clickPoint(488,301)
        sleep(100)
    }if (仓库满判断===7){
        sleep(100)
        clickPoint(95,275)
        sleep(500)
        clickPoint(491,400)
        sleep(100)
    }if (仓库满判断===8){
        sleep(100)
        clickPoint(95,275)
        sleep(500)
        clickPoint(486,496)
        sleep(100)
    }if (仓库满判断===9){
        sleep(100)
        clickPoint(95,275)
        sleep(500)
        clickPoint(485,595)
        sleep(100)
    }if (仓库满判断===10){
        sleep(100)
        clickPoint(95,275)
        sleep(500)
        clickPoint(388,211)
        sleep(100)
    }if (仓库满判断===11){
        sleep(100)
        clickPoint(95,275)
        sleep(500)
        clickPoint(390,310)
        sleep(100)
    }if (仓库满判断===12){
        sleep(100)
        clickPoint(95,275)
        sleep(500)
        clickPoint(393,403)
        sleep(100)
    } if (仓库满判断===13){
        sleep(100)
        clickPoint(95,275)
        sleep(500)
        clickPoint(395,495)
        sleep(100)
    }if (仓库满判断===14){
        sleep(100)
        clickPoint(95,275)
        sleep(500)
        clickPoint(393,596)
        sleep(100)
    }if (仓库满判断===15){
        sleep(100)
        clickPoint(95,275)
        sleep(500)
        clickPoint(298,211)
        sleep(100)
    }if (仓库满判断===16){
        sleep(100)
        clickPoint(95,275)
        sleep(500)
        clickPoint(296,305)
        sleep(100)
    }if (仓库满判断===17){
        sleep(100)
        clickPoint(95,275)
        sleep(500)
        clickPoint(295,401)
        sleep(100)
    }if (仓库满判断===18){
        sleep(100)
        clickPoint(95,275)
        sleep(500)
        clickPoint(296,496)
        sleep(100)
    }if (仓库满判断===19){
        sleep(100)
        clickPoint(95,275)
        sleep(500)
        clickPoint(298,595)
        sleep(100)
    }if (仓库满判断===20){
        sleep(100)
        clickPoint(95,275)
        sleep(500)
        clickPoint(206,208)
        sleep(100)
    }if (仓库满判断===21){
        sleep(100)
        clickPoint(95,275)
        sleep(500)
        clickPoint(205,308)
        sleep(100)
    }if (仓库满判断===22){
        sleep(100)
        clickPoint(95,275)
        sleep(500)
        clickPoint(201,401)
        sleep(100)
    }if (仓库满判断===23){
        sleep(100)
        clickPoint(95,275)
        sleep(500)
        clickPoint(205,496)
        sleep(100)
    }if (仓库满判断===24){
        logd("仓库存满了")
        stopApp("com.netease.mhxyhtb");
        home()
        exit();
    }
    //1为红色旗子

    while (true) {
        sleep(200)
        doubleClickPoint(490,785)
        sleep(300)
        doubleClickPoint(490,885)
        sleep(300)
        doubleClickPoint(485,977)
        sleep(2000)
        let 该仓库已满3 = GJ.透明找图("该仓库已满", 120, 187, 725, 774)
        if (该仓库已满3) {
            仓库满判断++
            sleep(100)
            clickPoint(96, 378)
        }else {
            sleep(200)
            doubleClickPoint(490,785)
            sleep(300)
            doubleClickPoint(490,885)
            sleep(300)
            doubleClickPoint(485,977)
            sleep(200)
            break;
        }
    }
    //2

    //3

    //4
    sleep(300)
    doubleClickPoint(485,1065)
    //5
    sleep(300)
    doubleClickPoint(390,692)
    //6
    sleep(300)
    doubleClickPoint(387,787)
    //7
    sleep(300)
    doubleClickPoint(392,882)
    //8
    sleep(300)
    doubleClickPoint(395,980)
    //9
    sleep(300)
    doubleClickPoint(390,1072)
    //10
    sleep(300)
    doubleClickPoint(302,692)
    //11

    sleep(1500)
    let 该仓库已满1 = GJ.透明找图("该仓库已满",120,187,725,774)
    if (该仓库已满1){
        仓库满判断++
        sleep(50)
        clickPoint(96,378)
        sleep(200)
        doubleClickPoint(485,977)
        //4
        sleep(300)
        doubleClickPoint(485,1065)
        //5
        sleep(300)
        doubleClickPoint(390,692)
        //6
        sleep(300)
        doubleClickPoint(387,787)
        //7
        sleep(300)
        doubleClickPoint(392,882)
        //8
        sleep(300)
        doubleClickPoint(395,980)
        //9
        sleep(300)
        doubleClickPoint(390,1072)
        //10
        sleep(300)
        doubleClickPoint(302,692)
        //11
    }
    sleep(300)
    doubleClickPoint(305,787)
    //12

    sleep(300)
    doubleClickPoint(305,885)
    //13
    sleep(300)
    doubleClickPoint(305,977)
    //14
    sleep(300)
    doubleClickPoint(300,1072)
    //15
    sleep(300)
    doubleClickPoint(210,692)
    //16
    sleep(300)
    doubleClickPoint(202,787)
    //17
    sleep(300)
    doubleClickPoint(210,880)
    //18
    sleep(300)
    doubleClickPoint(210,972)
    //19
    sleep(300)
    doubleClickPoint(207,1075)

    sleep(1500)
    let 该仓库已满2 = GJ.透明找图("该仓库已满",120,187,725,774)
    if (该仓库已满2){
        仓库满判断++
        sleep(50)
        clickPoint(96,378)
        sleep(200)
        doubleClickPoint(305,787)
        //12

        sleep(300)
        doubleClickPoint(305,885)
        //13
        sleep(300)
        doubleClickPoint(305,977)
        //14
        sleep(300)
        doubleClickPoint(300,1072)
        //15
        sleep(300)
        doubleClickPoint(210,692)
        //16
        sleep(300)
        doubleClickPoint(202,787)
        //17
        sleep(300)
        doubleClickPoint(210,880)
        //18
        sleep(300)
        doubleClickPoint(210,972)
        //19
        sleep(300)
        doubleClickPoint(207,1075)
    }
    //20
    sleep(500)
    clickPoint(687,1117)
}

Gj_function.prototype.数字识别 = function (name) {
    let isa = false
    let src=imageHandlerIOS.captureScreenMat();
    imageHandlerIOS.saveMat(src,"C:/temp.png");
    let  剪切 = imageHandlerIOS.cropMat(src,132,866,203,1049);
    if (!剪切) {logi("剪切失败");}
    let 旋转 = imageHandlerIOS.rotateMat(剪切,270);
    if (!旋转) {logi("旋转失败");}
    imageHandlerIOS.saveMat(旋转,"C:/b1.png");
    let rects = imageHandlerIOS.getWords(旋转,"",-1,0,0,0,0.8,false)

        if (rects) {
            //logd(JSON.stringify(rects[0].info));
            isa = true
           let 数字 = JSON.stringify(rects[0].info-0)
                        if (数字 <= name) {
                            logd(数字)
                        } else {
                            logd("价格"+数字)
                            isa = false;
                        }
        } else {
            logw("未识别到结果");
        }
        imageHandlerIOS.recycle(src,剪切,旋转);
        return isa;
    }

Gj_function.prototype.未激活符石=function(){
    let 符石 = false
    let 未激活符石 = GJ.图片查找("未激活的符石",27, 795, 707, 1297,1)
    if (未激活符石){
        sleep(800)
        let 文件判断 = WJ.未激活符石1()
        if (文件判断) {
            符石 = true
            sleep(100)
            clickPoint(60, 1048)
            //sleep(500)
        }else {
            符石 = false
        }
    }
    return 符石
}
Gj_function.prototype.黑宝石=function(){
    let 宝石 = false

    let 黑宝石 = GJ.图片查找("黑宝石",27, 795, 707, 1297,1)
    if (黑宝石){
        sleep(800)
        let 文件判断 = WJ.黑宝石1()
        if (文件判断) {
            宝石 = true
            sleep(100)
            clickPoint(60, 1048)
            //sleep(300)
        }else {
            宝石 = false
        }
    }
    return 宝石
}
Gj_function.prototype.清灵净瓶=function(){
    let 净瓶 = false

    let 清灵净瓶 = GJ.图片查找("清灵净瓶",27, 795, 707, 1297,1)
    if (清灵净瓶){
        sleep(800)
        let 文件判断 = WJ.清灵净瓶1()
        if (文件判断) {
            净瓶 = true
            sleep(100)
            clickPoint(60, 1048)
            //sleep(300)
        }else {
            净瓶 = false
        }
    }
    return 净瓶
}
Gj_function.prototype.速度红色=function() {
    let 速度 = false
    let sms = readResAutoImage("速度红色.png");
    //抓取屏幕
    let aimage = image.captureFullScreen();
 //   logd("aimage " + aimage);
    if (aimage != null) {
        //在图片中查找
        let points = image.findImage(aimage, sms, 27, 795, 707, 1297, 0.7, 0.9, 2, 5);
        logd("速度红色 " + JSON.stringify(points));
       // logd(JSON.stringify(points[0]))
       // logd(JSON.stringify(points[1]))
        //这玩意是个数组
        if (points && points.length > 0) {
            let x = parseInt((points[0].left + points[0].right) / 2)
            let y = parseInt((points[0].top + points[0].bottom) / 2)
            clickPoint(x, y)
            sleep(500)
            let 速度红色 = GJ.透明找图("增加6点速度", 312, 396, 589, 763)
            if (速度红色) {
                sleep(800)
                let 文件判断 = WJ.速度红色1()
                if (文件判断) {
                    速度 = true
                    sleep(500)
                    clickPoint(60, 1048)
                    sleep(500)
                }else {
                    速度 = false
                }
            } else {
                let x = parseInt((points[1].left + points[1].right) / 2)
                let y = parseInt((points[1].top + points[1].bottom) / 2)
                clickPoint(x, y)
                let 速度红色 = GJ.透明找图("增加6点速度", 312, 396, 589, 763)
                if (速度红色) {
                    sleep(800)
                    let 文件判断 = WJ.速度红色1()
                    if (文件判断) {
                        速度 = true
                        sleep(500)
                        clickPoint(60, 1048)
                        sleep(500)
                    }else {
                        速度 = false
                    }
                }
            }
        }
        image.recycle(aimage)
    }
    image.recycle(sms)
    return 速度;
}
Gj_function.prototype.黄色伤害 = function () {
    let 速度 = false

    let sms = readResAutoImage("黄色伤害.png");
    //抓取屏幕
    let aimage = image.captureFullScreen();
//    logd("aimage " + aimage);
    if (aimage != null) {
        //在图片中查找
        let points = image.findImage(aimage, sms, 27, 795, 707, 1297, 0.7, 0.9, 2, 5);
        logd("黄色伤害 " + JSON.stringify(points));
//        logd(JSON.stringify(points[0]))
 //       logd(JSON.stringify(points[1]))
        //这玩意是个数组
        if (points && points.length > 0) {
            let x = parseInt((points[0].left + points[0].right) / 2)
            let y = parseInt((points[0].top + points[0].bottom) / 2)
            clickPoint(x, y)
            sleep(500)
            let 速度红色 = GJ.透明找图("增加10点伤害", 312, 396, 589, 763)
            if (速度红色) {
                sleep(800)
                let 文件判断 = WJ.黄色伤害1()
                if (文件判断) {
                    速度 = true
                    sleep(500)
                    clickPoint(60, 1048)
                    sleep(500)
                }else {
                    速度 = false
                }
            } else {
                let x = parseInt((points[1].left + points[1].right) / 2)
                let y = parseInt((points[1].top + points[1].bottom) / 2)
                clickPoint(x, y)
                let 速度红色 = GJ.透明找图("增加10点伤害", 312, 396, 589, 763)
                if (速度红色) {
                    sleep(800)
                    let 文件判断 = WJ.黄色伤害1()
                    if (文件判断) {
                        速度 = true
                        sleep(500)
                        clickPoint(60, 1048)
                        sleep(500)
                    }else {
                        速度 = false
                    }
                }
            }
        }
        image.recycle(aimage)
    }
    image.recycle(sms)
    return 速度;
}
Gj_function.prototype.灵篆=function(){
    let 篆 = false

    let 灵篆 = GJ.图片查找("灵篆",27, 795, 707, 1297,1)
    if (灵篆){
        sleep(800)
        let 文件判断 = WJ.灵篆1()
        if (文件判断) {
            篆 = true
            sleep(100)
            clickPoint(60, 1048)
           // sleep(300)
        }else {
            篆 = false
        }
    }
    return 篆
}