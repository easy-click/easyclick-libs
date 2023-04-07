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


function Start_function(){
}
 let start = new Start_function();
// var 一 = 1,二 = 2,三 = 3,四 = 4,五 = 5,六 = 6,七 = 7,八 = 8,九 = 9,十 = 10, 十一 = 11,十二 = 12,十三 = 13,十四 = 14,十五 = 15,十六 = 16,十七 = 17,十八 = 18,十九 = 19,二十 = 20;
// var 二十一 = 21,二十二=22,二十三=23,二十四=24,二十五=25,二十六=26,二十七=27,二十八=28,二十九=29,三十,,,,,,,,
var pr
Start_function.prototype.dzbs=function(name,name1) {
    let res = false
    let tmpImage = image.captureFullScreenEx({"type": "1", "quality": 100});
    if (tmpImage != null) {
        let firstColor = (name);
        let multiColor = (name1);
        let points = image.findMultiColor(tmpImage, firstColor, multiColor, 0.8, 0, 0, 0, 0, 1, 5);
        //这玩意是个数组

        logd("points " + JSON.stringify(points));
        if (points && points.length) {
            for (let i = 0; i < points.length; i++) {
                let x = points[i].x
                let y = points[i].y
                //点击坐标
                clickPoint(x, y)
            }
            res = true
        } else {
            logd("没找到");
        }
        //图片要回收

        image.recycle(tmpImage)
    }
    image.recycle(tmpImage)
    return res;
};
Start_function.prototype.透明找图=function(name,name1,x,y,x1,y1,dj,ss) {
    //申请完权限至少等1s(垃圾设备多加点)再截图,否则会截不到图
    let res = false;
    //从工程目录下res文件夹下读取sms.png文件
    let sms=readResAutoImage(name+".png");
    //抓取屏幕
    let aimage = image.captureFullScreen();
    if (aimage != null) {
        //在图片中查找
        let points = image.findImageByColor(aimage, sms,x,y,x1,y1,ss, 1);
        if (points != null ) {
            logd(name1 + JSON.stringify(points));
        }else {
            //sleep(100);
            logd("正在寻找"+name1 + JSON.stringify(points));
        }
        //这玩意是个数组
        if(points && points.length >0){
            for(let i=0;i<points.length;i++){
                if(dj===1){
                    //sleep("100")
                    clickPoint(points[i].x,points[i].y);
                }
                if(dj===2){
                    //sleep("100")
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
};
Start_function.prototype.多点找色=function(dj,firstColor,colorMulyi,x,y,ex,ey){
    let zd = false
    // let img =image.captureFullScreen();
    // let bitmap=image.imageToBitmap(img);
    // let srcMat=imageHandlerIOS.bitmapToMat(bitmap);
    let srcMat = imageHandlerIOS.captureScreenMat();

    let points = imageHandlerIOS.findMultiColor(srcMat, firstColor,colorMulyi, 0.8, x,y,ex,ey, 1, 1);
    // logd(points);
    if (points) {
        zd = true
        logd(" 找色结果:" + JSON.stringify(points));
        if (dj===1) {
            clickPoint(points[0].x, points[0].y)
        }else if (dj===2) {
            doubleClickPoint(points[0].x, points[0].y)
        }
    }
    imageHandlerIOS.recycle(srcMat);
    return zd;
}
Start_function.prototype.精准找图=function(name,x,y,x1,y1,ss,dj){
    let zd = false
    let  srcMat = imageHandlerIOS.captureScreenMat();
    let  tempMat = imageHandlerIOS.readResMat(name+".png");
    let  rects = imageHandlerIOS.findImg(srcMat,tempMat,1,0.8,x,y,x1,y1,ss,null);
        if(rects && rects.length >0) {
            let zd = true
            logd("找图结果:" + JSON.stringify(rects));
            for (var ii = 0; ii < rects.length; ii++) {
                if (dj === 1) {
                    clickPoint(rects[ii].left + 50, rects[ii].top + 50)
                } else if (dj === 2) {
                    doubleClickPoint(rects[ii].left + 50, rects[ii].top + 50)
                }
            }
            logd("找到"+ii+"个");
        }
    //回收图片
    imageHandlerIOS.recycle(srcMat);
    imageHandlerIOS.recycle(tempMat);
    return zd
}
Start_function.prototype.打开道具=function(){
    clickPoint(63, 1176);
    while (true) {
        sleep("200")
        let 道具人物 = start.透明找图("道具人物","打开道具",414,942,724,1290,0,0.6)
        let 打开道具 = start.透明找图("道具", "打开道具", 637, 454, 746, 816, 0, 0.6)
        if (打开道具 === true  || 道具人物 === true) {
            logd("打开道具");
            sleep("50")
            clickPoint(574,1165)
            return;
        } else {
            sleep("200");
            clickPoint(63, 1176);
        }
    }
}

Start_function.prototype.蓝色旗商会=function(){
    let 白 = start.透明找图("蓝旗子", "蓝旗子", 163, 576, 599, 1136, 2, 0.7)
    if (白) {
        logd("点击蓝色旗子");
    }
    while (true) {
        sleep(800);
        let 白色旗 = start.透明找图("蓝旗子判断","蓝旗子判断",513,703,739,1323,0,0.7)
        if (白色旗) {
            sleep("100")
            doubleClickPoint(144,754)
            sleep(200);
            clickPoint(690,1110)
            sleep(800);
            clickPoint(486,38)
            sleep(500);
            clickPoint(496,615)
            return;
        } else {
            sleep(300);
            let 白 = start.透明找图("蓝旗子", "蓝旗子1", 163, 576, 599, 1136, 2, 0.7)
            if (白) {
                logd("点击蓝色旗子");
            }
        }
    }


}
Start_function.prototype.蓝色旗罗道人=function(){
    let 白 = start.透明找图("蓝旗子", "蓝旗子", 163, 576, 599, 1136, 2, 0.7)
    if (白) {
        logd("点击蓝色旗子");
    }
    while (true) {
        sleep(300);
        let 白色旗 = start.透明找图("蓝旗子判断","蓝旗子判断",513,703,739,1323,0,0.7)
        if (白色旗) {
            sleep("100")
            doubleClickPoint(184,636)
            sleep(200);
            clickPoint(690,1110)
            sleep(800);
            clickPoint(486,38)
            sleep(500);
            clickPoint(474,616)
            sleep(800);
            return;
        } else {
            sleep(300);
            let 白 = start.透明找图("蓝旗子", "蓝旗子1", 163, 576, 599, 1136, 2, 0.7)
            if (白) {
                logd("点击蓝色旗子");
            }
        }
    }


}
Start_function.prototype.罗道人点击=function(){
    while (true){
        let 罗道人 = start.透明找图("请选择","请选择",113,860,729,1326,0,0.7)
        if (罗道人) {
            sleep(100);
            clickPoint(573,1020)
            break
        }else {
            sleep(300);
        }
    }
    while (true){
        let 罗道人 = start.透明找图("单价","单价",13,663,706,1113,0,0.7)
        if (罗道人) {
            logd("飞行符购买");
            break
        }else {
            sleep(300);
        }
    }

}
Start_function.prototype.飞行符购买=function(){
    while (true) {
        let 飞行符 = start.透明找图("飞行符", "飞行符", 16, 743, 736, 1323, 1, 0.7)
        if (飞行符) {
            sleep(500);
            clickPoint(206, 1203)
            sleep(500);
            clickPoint(513, 1246)
            sleep(100);
            clickPoint(513, 1246)
            sleep(200);
            clickPoint(506, 1136)
            sleep(200);
            clickPoint(393, 1250)
            sleep(200);
            clickPoint(303, 1240)
            sleep(300);
            clickPoint(66, 1043)
            sleep(500);
            clickPoint(316,1040)
            break
        } else {
            sleep(300);
        }
    }
}

Start_function.prototype.蓝色旗仓库=function(){
    let 白 = start.透明找图("蓝旗子", "蓝旗子", 163, 576, 599, 1136, 2, 0.7)
    if (白) {
        logd("点击蓝色旗子");
    }else {
        sleep(300);
        clickPoint(603,680)
    }
    while (true) {
        sleep(300);
        let 白色旗 = start.透明找图("蓝旗子判断","蓝旗子判断",513,703,739,1323,0,0.7)
        if (白色旗) {
            sleep("100")
            doubleClickPoint(304,414)
            sleep(200);
            clickPoint(690,1110)
            sleep(800);
            clickPoint(486,38)
            sleep(500);
            clickPoint(496,665)
            return;
        } else {
            sleep(300);
            let 白 = start.透明找图("蓝旗子", "蓝旗子1", 163, 576, 599, 1136, 2, 0.7)
            if (白) {
                logd("点击蓝色旗子");
            }
        }
    }


}
Start_function.prototype.仓库识别=function() {
    let ixx = 0;
    while (true) {
        let 仓库判断 = start.透明找图("仓库判断", "仓库判断", 1,612,159,1137, 0, 0.7)
        if (仓库判断) {
            logd("仓库");
            sleep("300")
            clickPoint(74,47)
            return;
        } else {
            sleep("300")
            ixx++
            if (ixx === 10) {
                start.蓝色旗仓库点击()
            }
        }
    }
}
Start_function.prototype.蓝色旗仓库点击=function(){
    let ixx = 0 ;
    while (true) {
        sleep(1000)
        let 仓库操作 = start.透明找图("仓库操作","仓库操作", 85,805,520,1315,0,0.7)
        if (仓库操作)
        {
            start.透明找图("仓库操作","仓库操作", 85,805,520,1315,1,0.7)
            return;
        } else
        {
            sleep("1000")
            let 判断仓库重叠 = start.透明找图("请选择一个角色","请选择一个角色", 22,507,582,1097,0, 0.7)
            if (判断仓库重叠){
                start.dzbs( "#FDFDFD-#101010", "-1|7|#B7C2C8-#101010,22|-116|#416571-#101010,-41|-116|#30505F-#101010,-40|125|#30546A-#101010,25|124|#385867-#101010,0|7|#FFFFFF-#101010,0|0|#FDFDFD-#101010,-18|5|#456679-#101010,-10|6|#426374-#101010,-1|61|#385469-#101010,-17|61|#7F95A2-#101010,-6|61|#3B586A-#101010,-1|34|#395469-#101010,-6|33|#3B566B-#101010")
            }else {
                clickPoint(470,619)
            }
            ixx++;
            if (ixx === 5){
                start.打开道具();
                start.透明找图("蓝旗子","蓝旗子", 163, 576, 599, 1136,2, 0.7)
                sleep("300");
                //ocrjq.白色旗();
                sleep("1500");
                doubleClickPoint(304,414)
                sleep(200);
                clickPoint(690,1110)
                sleep(800);
                clickPoint(486,38)
                sleep(500);
                clickPoint(496,665)
            }
            if(ixx===10){
                return;
            }
        }

        sleep("300")
    }
}
Start_function.prototype.检测飞行符=function(){
    sleep(100);
    clickPoint(92,267)
    sleep(300);
    clickPoint(300,210)
    sleep(1500);
    let  srcMat = imageHandlerIOS.captureScreenMat();
    let  tempMat = imageHandlerIOS.readResMat("飞行符.png");
    let  rects = imageHandlerIOS.findImg(srcMat,tempMat,1,0.8,143,136,553,626,20,null);
    if(rects && rects.length >0) {
        for (var ii = 0; ii < rects.length; ii++) {
            //logd("找图结果:" + JSON.stringify(rects));
        }
        logd("找到"+ii+"个");
    }
    if (rects===null) {
            ii=0
    }
    //回收图片
    imageHandlerIOS.recycle(srcMat);
    imageHandlerIOS.recycle(tempMat);
    let 需要 = 20-ii
    logd("差"+需要);



    if (rects===null) {
        sleep(100);
        clickPoint(686,1113)
        sleep(500);
        start.打开道具()
        start.蓝色旗罗道人()
        start.罗道人点击()
        for (let ic = 0;ic < 19; ic++) {
            start.飞行符购买()
        }
        sleep(300);
        clickPoint(700,1286)
        sleep(300);
        start.打开道具()
        while (true){
           let 道具飞行符 = start.透明找图("飞行符", "飞行符", 16, 743, 736, 1323, 1, 0.7)
            if (道具飞行符) {
                logd("点击道具飞行符");
                sleep(500);
                clickPoint(313,286)
                //移动
                sleep(500);
                clickPoint(603,853)
                //行囊
                let 道具 = start.透明找图("飞行符", "飞行符", 16, 743, 736, 1323, 1, 0.7)
                if (道具) {
                    sleep(500);
                    clickPoint(313,286)
                    //移动
                    sleep(500);
                    clickPoint(603,853)
                    //行囊
                }
                sleep(500);
                clickPoint(690,1113)
                //关闭道具
                sleep(500);
                clickPoint(474,616)
                //点击npc
                sleep(500);
                start.罗道人点击()
                start.飞行符购买()
                start.飞行符购买()
                sleep(300);
                clickPoint(700,1286)
                sleep(300);
                break;
            }else {
                sleep(300);
            }
        }

       
    }else if (需要>0) {
        sleep(100);
        clickPoint(686,1113)
        sleep(500);
        start.打开道具()
        start.蓝色旗罗道人()
        start.罗道人点击()
        for (let ic = 0;ic < 需要; ic++) {
            start.飞行符购买()
        }
        sleep(500);
        clickPoint(700,1286)
        sleep(300);
    }

    if (需要===0) {
        return
    }

    start.打开道具()
    start.蓝色旗仓库()
    start.蓝色旗仓库点击()
    start.仓库识别()
    start.存飞行符()


}
Start_function.prototype.存飞行符=function(){
    sleep(100);
    clickPoint(92,267)
    sleep(300);
    clickPoint(300,210)
    sleep(300);
    clickPoint(603,916)
    sleep(300);
    let 飞 = start.透明找图("飞行符", "仓库行囊飞行符", 143,633,559,1136, 2, 0.7)
    if (飞) {
        logd("仓库行囊存飞行符");
    }
    sleep(500);
    let 飞行 = start.透明找图("飞行符", "仓库行囊飞行符1", 143,633,559,1136, 2, 0.7)
    if (飞行) {
        logd("仓库行囊存飞行符");
    }
    sleep(500);
    clickPoint(596,730)
    //道具页
    sleep(300);
    doubleClickPoint(488,880)
    sleep(300);
    doubleClickPoint(491,975)
    sleep(300);
    doubleClickPoint(488,1070)
    sleep(300);
    doubleClickPoint(400,1071)
    sleep(300);
    doubleClickPoint(396,978)
    sleep(300);
    doubleClickPoint(396,881)
    sleep(300);
    doubleClickPoint(396,788)
    sleep(300);
    doubleClickPoint(395,693)
    sleep(300);
    doubleClickPoint(298,1073)
    sleep(300);
    doubleClickPoint(300,975)
    sleep(300);
    doubleClickPoint(305,881)
    sleep(300);
    doubleClickPoint(305,785)
    sleep(300);
    doubleClickPoint(303,696)
    sleep(300);
    doubleClickPoint(208,1068)
    sleep(300);
    doubleClickPoint(203,976)
    sleep(300);
    doubleClickPoint(213,881)
    sleep(300);
    doubleClickPoint(205,791)
    sleep(300);
    doubleClickPoint(201,690)
    sleep(300);
    //
    //clickPoint(690,1117)
}
Start_function.prototype.宝象国仓库=function(){



}

Start_function.prototype.飞行宝象国 =function(){
    sleep(300);
    doubleClickPoint(160,1080)
    while (true) {
        sleep("800")
        let jy = start.透明找图("建邺判断", "建邺判断1", 202, 680, 384, 922, 0, 0.7)
        if (jy) {
            sleep("100")
            clickPoint(332,512)
            sleep("300")
            break
        }
    }
    sleep(200);
    while (true) {
       let 宝象国 = start.透明找图("宝象国", "宝象国", 571,13,739,416, 0, 0.7)
        if (宝象国) {
            logd("在宝象国");
            sleep(100);
            clickPoint(696,48)
            sleep(800);

            clickPoint(620,390)
            //点击坐标点
            sleep(500);
            clickPoint(496,356)
            sleep(500);
            clickPoint(391,356)
            sleep(500);
            clickPoint(390,460)
            sleep(500);
            doubleClickPoint(618,525)
            sleep(500);
            clickPoint(390,595)
            sleep(500);
            clickPoint(386,808)
            sleep(500);
            doubleClickPoint(615,661)
            sleep(10000);
            clickPoint(648,1078)
            sleep(500);
            clickPoint(483,41)
            sleep(300);
            clickPoint(430,980)
            //点击药店老板
            break;
        }
    }
    sleep(500);
    while (true){
        let 药店老板 = start.透明找图("请选择", "请选择", 113, 860, 729, 1326, 0, 0.7)
        let 药店 = start.透明找图("给我", "给我", 113, 860, 729, 1326, 0, 0.7)
        if (药店老板||药店) {
            sleep(100);
            clickPoint(390,1030)
            break
        }else {
            sleep(300);
            let 重复 = start.透明找图("重复", "重复", 113, 860, 729, 1326, 0, 0.7)
            if (重复) {
                sleep(200);
                start.透明找图("药店老板", "药店老板", 16,845,548,1308, 1, 0.7)
                sleep(300);
                break
            }
        }
    }
    let io = 0
    while (true){
        let 罗道人 = start.透明找图("单价","单价",52,737,472,1107,0,0.7)
        if (罗道人) {
            logd("血色茶花购买");
            break
        }else {
            sleep(300);
            io++
            if (io===8) {
                start.飞行宝象国()
                return
            }
        }
    }

}
Start_function.prototype.药店老板点击 =function() {
    sleep(500);
    while (true){
        let 药店老板 = start.透明找图("请选择", "请选择", 113, 860, 729, 1326, 0, 0.7)
        let 药店 = start.透明找图("给我", "给我", 113, 860, 729, 1326, 0, 0.7)
        if (药店老板||药店) {
            sleep(100);
            clickPoint(390,1030)
            break
        }else {
            sleep(300);
            let 重复 = start.透明找图("重复", "重复", 113, 860, 729, 1326, 0, 0.7)
            if (重复) {
                sleep(200);
                start.透明找图("药店老板", "药店老板", 16,845,548,1308, 1, 0.7)
                sleep(300);
                break
            }
        }
    }
    let io = 0
    while (true) {
        let 罗道人 = start.透明找图("单价", "单价", 52, 737, 472, 1107, 0, 0.7)
        if (罗道人) {
            logd("血色茶花购买");
            break
        } else {
            sleep(300);
            io++
            if (io === 8) {
                start.飞行宝象国()
                return
            }
        }
    }
}
var iccc = 0;
Start_function.prototype.仓库血色 =function(){

}
Start_function.prototype.检测血色茶花 =function(){
    // let icc = 0
    for (let ic = 0; ic < 5; ic++) {
        sleep(300);
        clickPoint(95, 280)
        sleep(300);
        if (iccc === 0) {
            clickPoint(298, 591)
            sleep(1500);
        } else if (iccc === 1) {
            clickPoint(203, 203)
            sleep(1500);
        } else if (iccc === 2) {
            clickPoint(200, 306)
            sleep(1500);
        } else if (iccc === 3) {
            clickPoint(206, 403)
            sleep(1500);
        } else if (iccc === 4) {
            clickPoint(206, 500)
            sleep(1500);
        }


        let srcMat = imageHandlerIOS.captureScreenMat();
        let tempMat = imageHandlerIOS.readResMat("血色茶花.png");
        let rects = imageHandlerIOS.findImg(srcMat, tempMat, 1, 0.8, 143, 136, 553, 626, 20, null);
        if (rects && rects.length > 0) {
            for (var ii = 0; ii < rects.length; ii++) {
                //logd("找图结果:" + JSON.stringify(rects));
            }
            logd("找到" + ii + "个");
        }
        //回收图片
        imageHandlerIOS.recycle(srcMat);
        imageHandlerIOS.recycle(tempMat);
        if (rects===null) {
            ii=0
        }
        var 二十行血色 = 20 - ii
        logd(二十行血色);
        if (二十行血色===0) {
            iccc++
            continue
        }
        start.血色循环(二十行血色)
        if (二十行血色 === 19)
        {
            for (let ic = 0; ic < 18; ic++) {
                let 道具血色茶花 = start.透明找图("血色茶花", "血色茶花", 136, 623, 559, 1143, 2, 0.7)
                if (道具血色茶花) {
                    logd("血色茶花放入仓库" + ic);
                } else {
                    sleep(300);
                    ic--
                }
                sleep(1000);
            }
            sleep(500);
            clickPoint(600, 916)
            for (let ic = 0; ic < 1; ic++) {
                let 道具血色茶花 = start.透明找图("血色茶花", "血色茶花", 136, 623, 559, 1143, 2, 0.7)
                if (道具血色茶花) {
                    logd("血色茶花放入仓库" + ic);
                } else {
                    sleep(300);
                    ic--
                }
                sleep(1000);
            }


        } else if (二十行血色 === 20)
        {
            for (let ic = 0; ic < 18; ic++) {
                let 道具血色茶花 = start.透明找图("血色茶花", "血色茶花", 136, 623, 559, 1143, 2, 0.7)
                if (道具血色茶花) {
                    logd("血色茶花放入仓库" + ic);
                } else {
                    sleep(300);
                    ic--
                }
                sleep(1000);
            }
            sleep(500);
            clickPoint(600, 916)
            for (let ic = 0; ic < 2; ic++) {
                let 道具血色茶花 = start.透明找图("血色茶花", "血色茶花", 136, 623, 559, 1143, 2, 0.7)
                if (道具血色茶花) {
                    logd("血色茶花放入仓库" + ic);
                } else {
                    sleep(300);
                    ic--
                }
                sleep(1000);
            }


        } else if (二十行血色 > 0)
        {
            for (let ic = 0; ic < 二十行血色; ic++) {
                let 道具血色茶花 = start.透明找图("血色茶花", "血色茶花", 136, 623, 559, 1143, 2, 0.7)
                if (道具血色茶花) {
                    logd("血色茶花放入仓库" + ic);
                } else {
                    sleep(300);
                    ic--
                }
                sleep(1000);
            }

        }
        iccc++

    }
    }
Start_function.prototype.购买血色 =function(){
    while (true) {
        let 飞行符 = start.透明找图("血色茶花", "血色茶花", 26,786,719,1309, 1, 0.7)
        if (飞行符) {
            sleep(500);
            clickPoint(206, 1203)
            //点击数量
            sleep(500);
            clickPoint(513, 1246)
            sleep(100);
            clickPoint(513, 1246)
            //删除
            sleep(200);
            clickPoint(303,1136)
            sleep(200);
            clickPoint(406,1246)
            sleep(200);
            clickPoint(303, 1240)
            sleep(300);
            clickPoint(66, 1043)
            sleep(500);
            clickPoint(316,1040)
            break
        } else {
            sleep(300);
        }
    }
}
Start_function.prototype.购买血色1 =function(){
    while (true) {
        let 飞行符 = start.透明找图("血色茶花", "血色茶花", 26,786,719,1309, 1, 0.7)
        if (飞行符) {
            sleep(500);
            clickPoint(206, 1203)
            //点击数量
            sleep(500);
            clickPoint(513, 1246)
            sleep(100);
            clickPoint(513, 1246)
            //删除
            sleep(200);
            clickPoint(513,1140)
            sleep(200);
            clickPoint(406,1243)
            sleep(200);
            clickPoint(303, 1240)
            sleep(200);
            clickPoint(66, 1043)
            sleep(500);
            clickPoint(316,1040)
            break
        } else {
            sleep(300);
        }
    }
}
Start_function.prototype.血色循环 =function(二十行血色) {
    let zd = false
    sleep(500);
    clickPoint(686, 1116)
    start.飞行宝象国()

    if (二十行血色===20)
    {
        zd = true
        for (let ic = 0; ic < 6; ic++) {
            start.购买血色()
        }
        sleep(500);
        clickPoint(696, 1283)
        sleep(300);
        start.打开道具()

        for (let ic = 0; ic < 2; ic++) {
            sleep(800);
            let 道具飞行符 = start.透明找图("血色茶花", "血色茶花", 16, 743, 736, 1323, 1, 0.7)
            if (道具飞行符) {
                logd("点击道具血色茶花");
                sleep(1200);
                clickPoint(273, 276)
                //移动
                sleep(500);
                clickPoint(603, 853)
                //行囊、
            } else {
                sleep(300);
            }
            sleep(1000);
        }

        sleep(500);
        clickPoint(690, 1113)
//关闭道具
        sleep(500);
        clickPoint(430, 980)
//点击npc
        sleep(500);
        start.药店老板点击()
        for (let ic = 0; ic < 2; ic++) {
            start.购买血色1()
        }
        sleep(300);
        clickPoint(700, 1286)
        sleep(300);


    }else if (二十行血色===19)
    {
        zd = true
        for (let ic = 0; ic < 6; ic++) {
            start.购买血色()
        }
        sleep(500);
        clickPoint(696, 1283)
        sleep(300);
        start.打开道具()

        sleep(800);
            let 道具飞行符 = start.透明找图("血色茶花", "血色茶花", 16, 743, 736, 1323, 1, 0.7)
            if (道具飞行符) {
                logd("点击道具血色茶花");
                sleep(1200);
                clickPoint(273, 276)
                //移动
                sleep(500);
                clickPoint(603, 853)
                //行囊、
            } else {
                sleep(300);
            }


        sleep(500);
        clickPoint(690, 1113)
//关闭道具
        sleep(500);
        clickPoint(430, 980)
//点击npc
        sleep(500);
        start.药店老板点击()

            start.购买血色1()

        sleep(300);
        clickPoint(700, 1286)
        sleep(300);
    }else if (二十行血色<=18)
    {
        zd = true
        for (let ic = 0; ic < 二十行血色; ic++) {
            start.购买血色1()
        }

        sleep(300);
        clickPoint(700, 1286)
        sleep(300);
    }


    start.打开道具()
    start.蓝色旗仓库()
    start.蓝色旗仓库点击()
    start.仓库识别()
    sleep(300);
    clickPoint(95, 280)
    sleep(300);
    if (iccc === 0) {
        clickPoint(298, 591)
        sleep(500);
    } else if (iccc === 1) {
        clickPoint(203, 203)
        sleep(500);
    } else if (iccc === 2) {
        clickPoint(200, 306)
        sleep(500);
    } else if (iccc === 3) {
        clickPoint(206, 403)
        sleep(500);
    } else if (iccc === 4) {
        clickPoint(206, 500)
        sleep(500);
    }
    return zd
}

Start_function.prototype.商会点击 =function(){
    sleep(1000);
    clickPoint(603,1060)
    //进入商会
    sleep(800);
    clickPoint(76,48)
    //关闭屏蔽
    sleep(300)
    clickPoint(624,830)
    sleep(500);
    let 烹饪店 = start.透明找图("烹饪店","烹饪店",133,533,659,1106,1,0.7)
    if (烹饪店) {
        sleep(500);
        clickPoint(73,296)
        //点击页数
        sleep(500);
        doubleClickPoint(185,826)
        sleep(300);
        clickPoint(186,928)
    }
    sleep(500);


}
Start_function.prototype.烹饪 =function(){
    while (true) {
        sleep(800);
       // start.透明找图("烹饪", "烹饪", 110, 130, 586, 933, 1, 0.7)
        let 烹饪 = start.识别商店页数()
        if (烹饪===10||烹饪===9||烹饪===8||烹饪===7||烹饪===6||烹饪===5||烹饪===4) {
            sleep(300);
            clickPoint(73, 1083)
            return 烹饪
        } else {

            sleep(300);
            clickPoint(73, 170)

        }
    }
}
Start_function.prototype.三级药 =function(name){
    for (var ic = 0; ic < 2; ic++) {
        if (ic === 1) {
            sleep(300);
            clickPoint(100,377)
            sleep(300);
        }
        sleep(1500);
        let srcMat = imageHandlerIOS.captureScreenMat();
        let tempMat = imageHandlerIOS.readResMat(name+".png");
        let rects = imageHandlerIOS.findImg(srcMat, tempMat, 1, 0.8, 143, 136, 553, 626, 20, null);
        if (rects && rects.length > 0) {
            for (var ii = 0; ii < rects.length; ii++) {
               // logd("找图结果:" + JSON.stringify(rects));
            }
          //  logd("找到" + ii + "个");
        }
        //回收图片
        if (rects===null) {
            ii=0
        }
        imageHandlerIOS.recycle(srcMat);
        imageHandlerIOS.recycle(tempMat);
        if (ic===0) {
            var 需要 = 20 - ii
        }
        if (ic===1) {
            var 需要1 = 20 - ii
        }

    }
    let 风水需要 = 需要+需要1
    logd(风水需要);
    return 风水需要
}


Start_function.prototype.识别商店页数 =function(){
    let zd = false
    let 识别商店页数十 = start.透明找图("十", "十页", 112,137,549,934, 1, 0.7)
    if (识别商店页数十) {
        zd=10
        return zd
    }
    // let 识别商店页数一 = start.透明找图("一", "一页", 112,137,549,934, 1, 0.7)
    // if (识别商店页数一) {
    //     zd=1
    //     return zd
    // }
    // let 识别商店页数九 = start.透明找图("九", "九页", 112,137,549,934, 1, 0.7)
    // if(识别商店页数九){
    //     zd=9
    //     return zd
    // }
    let 识别商店页数八 = start.透明找图("八", "八页", 112,137,549,934, 1, 0.7)
    if (识别商店页数八) {
        zd=8
        return zd
    }
    let 识别商店页数七 = start.透明找图("七", "七页", 112,137,549,934, 1, 0.7)
    if (识别商店页数七) {
        zd=7
        return zd
    }
    let 识别商店页数六 = start.透明找图("六", "六页", 112,137,549,934, 1, 0.7)
    if (识别商店页数六) {
        zd=6
        return zd
    }
    let 识别商店页数五 = start.透明找图("五", "五页", 112,137,549,934, 1, 0.7)
    if (识别商店页数五) {
        zd=5
        return zd
    }
    let 识别商店页数四 = start.透明找图("四", "四页", 112,137,549,934, 1, 0.7)
    if (识别商店页数四) {
        zd=4
        return zd
    }
    let 识别商店页数三 = start.透明找图("三", "三页", 112,137,549,934, 1, 0.7)
    if (识别商店页数三) {
        zd=3
        return zd
    }
    let 识别商店页数二 = start.透明找图("二", "二页", 112,137,549,934, 1, 0.7)
    if (识别商店页数二) {
        zd=2
        return zd
    }






}
Start_function.prototype.七药识别 =function(){
    let 循环 = 0
    while (true) {
        let 风水混元丹 = start.透明找图("风水混元丹", "风水混元丹", 200, 36, 630, 606, 1, 0.7)
        if (风水混元丹) {
            sleep(500);
            let 识别 = start.数字识别()
            if (识别) {
                sleep(100);
                clickPoint(72, 488)
            } else {
                sleep(300);
                循环++
                if (循环===2) {
                    sleep(200);
                    clickPoint(716,586)
                    sleep(300);
                    start.烹饪()
                    循环=0
                    break
                }
            }
        }
    }

    while (true) {
        let 定神香 = start.透明找图("定神香", "定神香", 200, 36, 630, 606, 1, 0.7)
        if (定神香) {
            sleep(500);
            let 识别 = start.数字识别()
            if (识别) {
                sleep(100);
                clickPoint(72, 488)
            } else {
                sleep(300);
                循环++
                if (循环===2) {
                    sleep(200);
                    clickPoint(716,586)
                    sleep(300);
                    start.烹饪()
                    循环=0
                    break
                }
            }
        }
    }

    while (true) {
        let 十香返生丸 = start.透明找图("十香返生丸", "十香返生丸", 200, 36, 630, 606, 1, 0.7)
        if (十香返生丸) {
            sleep(500);
            let 识别 = start.数字识别()
            if (识别) {
                sleep(100);
                clickPoint(72, 488)
            } else {
                sleep(300);
                循环++
                if (循环===2) {
                    sleep(200);
                    clickPoint(716,586)
                    sleep(300);
                    start.烹饪()
                    循环=0
                    break
                }
            }
        }
    }

    while (true) {
        let 佛光舍利子 = start.透明找图("佛光舍利子", "佛光舍利子", 200, 36, 630, 606, 1, 0.7)
        if (佛光舍利子) {
            sleep(500);
            let 识别 = start.数字识别()
            if (识别) {
                sleep(100);
                clickPoint(72, 488)
            } else {
                sleep(300);
                循环++
                if (循环===2) {
                    sleep(200);
                    clickPoint(716,586)
                    sleep(300);
                    start.烹饪()
                    循环=0
                    break
                }
            }
        }
    }

    while (true) {
        let 蛇蝎美人 = start.透明找图("蛇蝎美人", "蛇蝎美人", 200, 36, 630, 606, 1, 0.7)
        if (蛇蝎美人) {
            sleep(500);
            let 识别 = start.数字识别()
            if (识别) {
                sleep(100);
                clickPoint(72, 488)
            } else {
                sleep(300);
                循环++
                if (循环===2) {
                    sleep(200);
                    clickPoint(716,586)
                    sleep(300);
                    start.烹饪()
                    循环=0
                    break
                }
            }
        }
    }


    while (true) {
        let 红雪散 = start.透明找图("红雪散", "红雪散", 200, 36, 630, 606, 1, 0.7)
        if (红雪散) {
            sleep(500);
            let 识别 = start.数字识别()
            if (识别) {
                sleep(100);
                clickPoint(72, 488)
            } else {
                sleep(300);
                循环++
                if (循环===2) {
                    sleep(200);
                    clickPoint(716,586)
                    sleep(300);
                    start.烹饪()
                    循环=0
                    break
                }
            }
        }
    }


    while (true) {
        let 五龙丹 = start.透明找图("五龙丹", "五龙丹", 200, 36, 630, 606, 1, 0.7)
        if (五龙丹) {
            sleep(500);
            let 识别 = start.数字识别()
            if (识别) {
                sleep(100);
                clickPoint(72, 488)
            } else {
                sleep(300);
                循环++
                if (循环===2) {
                    sleep(200);
                    clickPoint(716,586)
                    sleep(300);
                    start.烹饪()
                    循环=0
                    break
                }
            }
        }else {
            sleep(200);
            clickPoint(713,590)
        }

    }

}
Start_function.prototype.七药存行囊 =function(){
    sleep(1000);
    doubleClickPoint(713,586)
    sleep(800);
    clickPoint(703,1183)
    sleep(800);
    start.打开道具()
    sleep(200);
    clickPoint(514,850)
    sleep(1000);
    let 移动1 = start.透明找图("移动", "移动", 33,86,709,619, 1, 0.7)
    if (移动1) {
        sleep(600);
        clickPoint(603,856)
    }


    sleep(800);
    clickPoint(528,945)
    sleep(1000);
    let 移动2 = start.透明找图("移动", "移动", 33,86,709,619, 1, 0.7)
    if (移动2) {
        sleep(600);
        clickPoint(603,856)
    }


    sleep(800);
    clickPoint(520,1036)
    sleep(1000);
    let 移动3 = start.透明找图("移动", "移动", 33,86,709,619, 1, 0.7)
    if (移动3) {
        sleep(600);
        clickPoint(603,856)
    }


    sleep(800);
    clickPoint(430,1043)
    sleep(1000);
    let 移动4 = start.透明找图("移动", "移动", 33,86,709,619, 1, 0.7)
    if (移动4) {
        sleep(600);
        clickPoint(603,856)
    }


    sleep(800);
    clickPoint(431,945)
    sleep(1000);
    let 移动5 = start.透明找图("移动", "移动", 33,86,709,619, 1, 0.7)
    if (移动5) {
        sleep(600);
        clickPoint(603,856)
    }


    sleep(800);
    clickPoint(426,855)
    sleep(1000);
    let 移动6 = start.透明找图("移动", "移动", 33,86,709,619, 1, 0.7)
    if (移动6) {
        sleep(600);
        clickPoint(603,856)
    }


    sleep(800);
    clickPoint(425,758)
    sleep(1000);
    let 移动7 = start.透明找图("移动", "移动", 33,86,709,619, 1, 0.7)
    if (移动7) {
        sleep(600);
        clickPoint(603,856)
    }


    sleep(800);
    clickPoint(428,668)
    sleep(1000);
    let 移动8 = start.透明找图("移动", "移动", 33,86,709,619, 1, 0.7)
    if (移动8) {
        sleep(600);
        clickPoint(603,856)
    }


    sleep(800);
    clickPoint(328,665)
    sleep(1000);
    let 移动9 = start.透明找图("移动", "移动", 33,86,709,619, 1, 0.7)
    if (移动9) {
        sleep(600);
        clickPoint(603,856)
    }


    sleep(800);
    clickPoint(326,755)
    sleep(1000);
    let 移动10 = start.透明找图("移动", "移动", 33,86,709,619, 1, 0.7)
    if (移动10) {
        sleep(600);
        clickPoint(603,856)
    }


    sleep(800);
    clickPoint(333,853)
    sleep(1000);
    let 移动11 = start.透明找图("移动", "移动", 33,86,709,619, 1, 0.7)
    if (移动11) {
        sleep(600);
        clickPoint(603,856)
    }


    sleep(800);
    clickPoint(330,945)
    sleep(1000);
    let 移动12 = start.透明找图("移动", "移动", 33,86,709,619, 1, 0.7)
    if (移动12) {
        sleep(600);
        clickPoint(603,856)
    }


    sleep(800);
    clickPoint(333,1038)
    sleep(1000);
    let 移动13 = start.透明找图("移动", "移动", 33,86,709,619, 1, 0.7)
    if (移动13) {
        sleep(600);
        clickPoint(603,856)
    }


    sleep(800);
    clickPoint(240,1038)
    sleep(1000);
    let 移动14 = start.透明找图("移动", "移动", 33,86,709,619, 1, 0.7)
    if (移动14) {
        sleep(600);
        clickPoint(603,856)
    }


    sleep(800);
    clickPoint(241,945)
    sleep(1000);
    let 移动15 = start.透明找图("移动", "移动", 33,86,709,619, 1, 0.7)
    if (移动15) {
        sleep(600);
        clickPoint(603,856)
    }


    sleep(800);
    clickPoint(240,851)
    sleep(1000);
    let 移动16 = start.透明找图("移动", "移动", 33,86,709,619, 1, 0.7)
    if (移动16) {
        sleep(600);
        clickPoint(603,856)
    }


    sleep(800);
    clickPoint(238,756)
    sleep(1000);
    let 移动17 = start.透明找图("移动", "移动", 33,86,709,619, 1, 0.7)
    if (移动17) {
        sleep(600);
        clickPoint(603,856)
    }


    sleep(800);
    clickPoint(240,661)
    sleep(1000);
    let 移动18 = start.透明找图("移动", "移动", 33,86,709,619, 1, 0.7)
    if (移动18) {
        sleep(600);
        clickPoint(603,856)
    }

    sleep(800);
    clickPoint(690,1113)
    sleep(300)
    clickPoint(496,615)
    start.商会点击()
    // start.烹饪()
    // for (let i = 0; i<aaa;i++){
    //     sleep(300);
    //     clickPoint(73, 170)
    // }
    sleep(800);

}


Start_function.prototype.三级药1 =function(name){
    sleep(500);
    clickPoint(600,727)
    sleep(500);
    for (var ic = 0; ic < 2; ic++) {
        if (ic === 1) {
            sleep(800);
            clickPoint(600,905)
            sleep(800);
        }
        sleep(800);
        let srcMat = imageHandlerIOS.captureScreenMat();
        let tempMat = imageHandlerIOS.readResMat(name+".png");
        let rects = imageHandlerIOS.findImg(srcMat, tempMat, 1, 0.8, 150,635,550,1137, 20, null);
        if (rects && rects.length > 0) {
            for (var ii = 0; ii < rects.length; ii++) {
                // logd("找图结果:" + JSON.stringify(rects));
            }
            logd("找到" + ii + "个");
        }
        //回收图片
        if (rects===null) {
            ii=0
        }
        imageHandlerIOS.recycle(srcMat);
        imageHandlerIOS.recycle(tempMat);
        if (ic===0) {
            var 需要 = ii
        }
        if (ic===1) {
            var 需要1 = ii
        }

    }
    sleep(500);
    clickPoint(600,727)
    sleep(500);
    let 风水需要 = 需要+需要1
    logd(风水需要);
    return 风水需要
}
Start_function.prototype.三级药2 =function(name){
        sleep(1000);
        let srcMat = imageHandlerIOS.captureScreenMat();
        let tempMat = imageHandlerIOS.readResMat(name+".png");
        let rects = imageHandlerIOS.findImg(srcMat, tempMat, 1, 0.8, 143, 136, 553, 626, 20, null);
        if (rects && rects.length > 0) {
            for (var ii = 0; ii < rects.length; ii++) {
                // logd("找图结果:" + JSON.stringify(rects));
            }
            logd("找到" + ii + "个");
        }
        //回收图片
        if (rects===null) {
            ii=0
        }
        imageHandlerIOS.recycle(srcMat);
        imageHandlerIOS.recycle(tempMat);
            var 需要 =  20-ii
            logd(需要);
            return 需要
}


Start_function.prototype.风水混 =function(){
    let a = start.三级药1("风水混元丹")
    if (a>0) {
        let b = start.三级药2("风水混元丹")

        if (a<=b) {
            let ix = 0
            for (let ii = 0; ii < a; ii++) {
                sleep(1500);
                let 风水 = start.透明找图("风水混元丹", "风水混元丹", 143, 633, 556, 1136, 2, 0.7)
                if (风水) {
                    logd("存");
                } else {
                    a++
                    ix++
                    sleep(300);
                    clickPoint(596, 903)
                    if (ix === 2) {
                        sleep(300);
                        clickPoint(602, 730)
                        sleep(1500);
                    }
                    if (ix === 4) {
                        break
                    }
                }
            }
        }else if (a > b) {
            let ix = 0

            for (let ii = 0; ii < b; ii++) {
                sleep(1500);
                let 风水 = start.透明找图("风水混元丹", "风水混元丹", 143, 633, 556, 1136, 2, 0.7)
                if (风水) {
                    logd("存");
                } else {
                    b++
                    ix++
                    sleep(300);
                    clickPoint(596, 903)
                    if (ix === 2) {
                        sleep(300);
                        clickPoint(602, 730)
                        sleep(1500);
                    }
                    if (ix === 4) {
                        break
                    }
                }

            }
            sleep(300);
            clickPoint(97, 380)
            sleep(300);

            let ixx = 0
            let c = a - b
            for (let ii = 0; ii < c; ii++) {
                sleep(1500);
                let 风水 = start.透明找图("风水混元丹", "风水混元丹", 143, 633, 556, 1136, 2, 0.7)
                if (风水) {
                    logd("存");
                } else {
                    c++
                    ixx++
                    sleep(300);
                    clickPoint(596, 903)
                    if (ixx === 2) {
                        sleep(300);
                        clickPoint(602, 730)
                        sleep(1500);
                    }
                    if (ixx === 4) {
                        break
                    }
                }
            }
        }
    }
}
Start_function.prototype.定神 =function(){
    let a = start.三级药1("定神香")
    if (a>0) {
        let b = start.三级药2("定神香")
        if (a<=b) {
            let ix = 0
            for (let ii = 0; ii < a; ii++) {
                sleep(1500);
                let 风水 = start.透明找图("定神香", "定神香", 143, 633, 556, 1136, 2, 0.7)
                if (风水) {
                    logd("存");
                } else {
                    a++
                    ix++
                    sleep(300);
                    clickPoint(596, 903)
                    if (ix === 2) {
                        sleep(300);
                        clickPoint(602, 730)
                        sleep(1500);
                    }
                    if (ix === 4) {
                        break
                    }
                }

            }
        }else if (a > b) {
            let ix = 0
            for (let ii = 0; ii < b; ii++) {
                sleep(1500);
                let 风水 = start.透明找图("定神香", "定神香", 143, 633, 556, 1136, 2, 0.7)
                if (风水) {
                    logd("存");
                } else {
                    b++
                    ix++
                    sleep(300);
                    clickPoint(596, 903)
                    if (ix === 2) {
                        sleep(300);
                        clickPoint(602, 730)
                        sleep(1500);
                    }
                    if (ix === 4) {
                        break
                    }
                }
            }
            sleep(300);
            clickPoint(97, 380)
            sleep(300);
            let ixx = 0
            let c = a - b
            for (let ii = 0; ii < c; ii++) {
                sleep(1500);
                let 风水 = start.透明找图("定神香", "定神香", 143, 633, 556, 1136, 2, 0.7)
                if (风水) {
                    logd("存");
                } else {
                    c++
                    ixx++
                    sleep(300);
                    clickPoint(596, 903)
                    if (ixx === 2) {
                        sleep(300);
                        clickPoint(602, 730)
                        sleep(1500);
                    }
                    if (ixx === 4) {
                        break
                    }
                }
            }
        }
    }
}
Start_function.prototype.十香 =function(){
    let a = start.三级药1("十香返生丸")
    if (a>0) {
        let b = start.三级药2("十香返生丸")
        if (a<=b) {
            let ix = 0
            for (let ii = 0; ii < a; ii++) {
                sleep(1500);
                let 风水 = start.透明找图("十香返生丸", "十香返生丸", 143, 633, 556, 1136, 2, 0.7)
                if (风水) {
                    logd("存");
                } else {
                    a++
                    ix++
                    sleep(300);
                    clickPoint(596, 903)
                    if (ix === 2) {
                        sleep(300);
                        clickPoint(602, 730)
                        sleep(1500);
                    }
                    if (ix === 4) {
                        break
                    }
                }

            }
        }else if (a > b) {
            let ix = 0
            for (let ii = 0; ii < b; ii++) {
                sleep(1500);
                let 风水 = start.透明找图("十香返生丸", "十香返生丸", 143, 633, 556, 1136, 2, 0.7)
                if (风水) {
                    logd("存");
                } else {
                    b++
                    ix++
                    sleep(300);
                    clickPoint(596, 903)
                    if (ix === 2) {
                        sleep(300);
                        clickPoint(602, 730)
                        sleep(1500);
                    }
                    if (ix === 4) {
                        break
                    }
                }

            }
            sleep(300);
            clickPoint(97, 380)
            sleep(300);
            let ixx = 0
            let c = a - b
            for (let ii = 0; ii < c; ii++) {
                sleep(1500);
                let 风水 = start.透明找图("十香返生丸", "十香返生丸", 143, 633, 556, 1136, 2, 0.7)
                if (风水) {
                    logd("存");
                } else {
                    c++
                    ixx++
                    sleep(300);
                    clickPoint(596, 903)
                    if (ixx === 2) {
                        sleep(300);
                        clickPoint(602, 730)
                        sleep(1500);
                    }
                    if (ixx === 4) {
                        break
                    }
                }

            }
        }
    }
}
Start_function.prototype.佛光 =function(){
    let a = start.三级药1("佛光舍利子")
    if (a>0) {
        let b = start.三级药2("佛光舍利子")
        if (a<=b) {
            let ix = 0
            for (let ii = 0; ii < a; ii++) {
                sleep(1500);
                let 风水 = start.透明找图("佛光舍利子1", "佛光舍利子", 143, 633, 556, 1136, 2, 0.7)
                if (风水) {
                    logd("存");
                } else {
                    a++
                    ix++
                    sleep(300);
                    clickPoint(596, 903)
                    if (ix === 2) {
                        sleep(300);
                        clickPoint(602, 730)
                        sleep(1500);
                    }
                    if (ix === 4) {
                        break
                    }
                }

            }
        }else if (a > b) {
            let ix = 0

            for (let ii = 0; ii < b; ii++) {
                sleep(1500);
                let 风水 = start.透明找图("佛光舍利子1", "佛光舍利子", 143, 633, 556, 1136, 2, 0.7)
                if (风水) {
                    logd("存");
                } else {
                    b++
                    ix++
                    sleep(300);
                    clickPoint(596, 903)
                    if (ix === 2) {
                        sleep(300);
                        clickPoint(602, 730)
                        sleep(1500);
                    }
                    if (ix === 4) {
                        break
                    }
                }

            }
            sleep(300);
            clickPoint(97, 380)
            sleep(300);
            let ixx = 0
            let c = a - b
            for (let ii = 0; ii < c; ii++) {
                sleep(1500);
                let 风水 = start.透明找图("佛光舍利子1", "佛光舍利子", 143, 633, 556, 1136, 2, 0.7)
                if (风水) {
                    logd("存");
                } else {
                    c++
                    ixx++
                    sleep(300);
                    clickPoint(596, 903)
                    if (ixx === 2) {
                        sleep(300);
                        clickPoint(602, 730)
                        sleep(1500);
                    }
                    if (ixx === 4) {
                        break
                    }
                }

            }
        }
    }
}
Start_function.prototype.蛇蝎 =function(){
    let a = start.三级药1("蛇蝎美人")
    if (a>0) {
        let b = start.三级药2("蛇蝎美人")
        if (a<=b) {
            let ix = 0
            for (let ii = 0; ii < a; ii++) {
                sleep(1500);
                let 风水 = start.透明找图("蛇蝎美人", "蛇蝎美人", 143, 633, 556, 1136, 2, 0.7)
                if (风水) {
                    logd("存");
                } else {
                    a++
                    ix++
                    sleep(300);
                    clickPoint(596, 903)
                    if (ix === 2) {
                        sleep(300);
                        clickPoint(602, 730)
                        sleep(1500);
                    }
                    if (ix === 4) {
                        break
                    }
                }

            }
        }else if (a > b) {
            let ix = 0
            for (let ii = 0; ii < b; ii++) {
                sleep(1500);
                let 风水 = start.透明找图("蛇蝎美人", "蛇蝎美人", 143, 633, 556, 1136, 2, 0.7)
                if (风水) {
                    logd("存");
                } else {
                    b++
                    ix++
                    sleep(300);
                    clickPoint(596, 903)
                    if (ix === 2) {
                        sleep(300);
                        clickPoint(602, 730)
                        sleep(1500);
                    }
                    if (ix === 4) {
                        break
                    }
                }

            }
            sleep(300);
            clickPoint(97, 380)
            sleep(300);
            let ixx = 0
            let c = a - b
            for (let ii = 0; ii < c; ii++) {
                sleep(1500);
                let 风水 = start.透明找图("蛇蝎美人", "蛇蝎美人", 143, 633, 556, 1136, 2, 0.7)
                if (风水) {
                    logd("存");
                } else {
                    c++
                    ixx++
                    sleep(300);
                    clickPoint(596, 903)
                    if (ixx === 2) {
                        sleep(300);
                        clickPoint(602, 730)
                        sleep(1500);
                    }
                    if (ixx === 4) {
                        break
                    }
                }

            }
        }
    }
}
Start_function.prototype.红雪 =function(){
    let a = start.三级药1("红雪散")
    if (a>0) {
        let b = start.三级药2("红雪散")
        if (a<=b) {
            let ix = 0
            for (let ii = 0; ii < a; ii++) {
                sleep(1500);
                let 风水 = start.透明找图("红雪散", "红雪散", 143, 633, 556, 1136, 2, 0.7)
                if (风水) {
                    logd("存");
                } else {
                    a++
                    ix++
                    sleep(300);
                    clickPoint(596, 903)
                    if (ix === 2) {
                        sleep(300);
                        clickPoint(602, 730)
                        sleep(1500);
                    }
                    if (ix === 4) {
                        break
                    }
                }

            }
        }else if (a > b) {
            let ix = 0

            for (let ii = 0; ii < b; ii++) {
                sleep(1500);
                let 风水 = start.透明找图("红雪散", "红雪散", 143, 633, 556, 1136, 2, 0.7)
                if (风水) {
                    logd("存");
                } else {
                    b++
                    ix++
                    sleep(300);
                    clickPoint(596, 903)
                    if (ix === 2) {
                        sleep(300);
                        clickPoint(602, 730)
                        sleep(1500);
                    }
                    if (ix === 4) {
                        break
                    }
                }

            }
            sleep(300);
            clickPoint(97, 380)
            sleep(300);
            let ixx = 0
            let c = a - b
            for (let ii = 0; ii < c; ii++) {
                sleep(1500);
                let 风水 = start.透明找图("红雪散", "红雪散", 143, 633, 556, 1136, 2, 0.7)
                if (风水) {
                    logd("存");
                } else {
                    c++
                    ixx++
                    sleep(300);
                    clickPoint(596, 903)
                    if (ixx === 2) {
                        sleep(300);
                        clickPoint(602, 730)
                        sleep(1500);
                    }
                    if (ixx === 4) {
                        break
                    }
                }

            }
        }
    }
}
Start_function.prototype.五龙 =function(){
    sleep(300);
    let a = start.三级药1("五龙丹")
    if (a>0) {
        let b = start.三级药2("五龙丹")
        if (a<=b) {
            let ix = 0
            for (let ii = 0; ii < a; ii++) {
                sleep(1500);
                let 风水 = start.多点找色(2,"#DEDF45-0x101010","13|-12|#C947CF-0x101010,-2|-18|#D87611-0x101010,-20|-8|#AEE6E7-0x101010,5|-25|#5434DD-0x101010,72|2|#10A821-0x101010,179|-15|#12A935-0x101010,210|1|#099727-0x101010,183|12|#0BA124-0x101010", 143, 633, 556, 1136)
                if (风水) {
                    logd("存");
                } else {
                    a++
                    ix++
                    sleep(300);
                    clickPoint(596, 903)
                    if (ix === 2) {
                        sleep(300);
                        clickPoint(602, 730)
                        sleep(1500);
                    }
                    if (ix === 4) {
                        break
                    }
                }

            }
        }else if (a > b) {
            let ix = 0

            for (let ii = 0; ii < b; ii++) {
                sleep(1500);
                let 风水 = start.透明找图("五龙丹1", "五龙丹", 143, 633, 556, 1136, 2, 0.7)
                if (风水) {
                    logd("存");
                } else {
                    b++
                    ix++
                    sleep(300);
                    clickPoint(596, 903)
                    if (ix === 2) {
                        sleep(300);
                        clickPoint(602, 730)
                        sleep(1500);
                    }
                    if (ix === 4) {
                        break
                    }
                }
            }
            sleep(300);
            clickPoint(97, 380)
            sleep(300);
            let ixx = 0
            let c = a - b
            for (let ii = 0; ii < c; ii++) {
                sleep(1500);
                let 风水 = start.透明找图("五龙丹1", "五龙丹", 143, 633, 556, 1136, 2, 0.7)
                if (风水) {
                    logd("存");
                } else {
                    c++
                    ixx++
                    sleep(300);
                    clickPoint(596, 903)
                    if (ixx === 2) {
                        sleep(300);
                        clickPoint(602, 730)
                        sleep(1500);
                    }
                    if (ixx === 4) {
                        break
                    }
                }
            }
        }
    }
}
Start_function.prototype.满存仓库 =function(){
    sleep(1000);
    doubleClickPoint(713,586)
    sleep(800);
    clickPoint(703,1183)
    sleep(800);
    start.打开道具()
    start.蓝色旗仓库()
    start.蓝色旗仓库点击()
    start.仓库识别()
    sleep(100);
    clickPoint(100,380)
    sleep(1000);
    start.风水混()
    sleep(300);
    clickPoint(97,272)
    sleep(300);
    clickPoint(582,497)
    sleep(1000);
    start.定神()
    sleep(300);
    clickPoint(97,272)
    sleep(300);
    clickPoint(492,210)
    sleep(1000);
    start.十香()
    sleep(300);
    clickPoint(97,272)
    sleep(300);
    clickPoint(487,405)
    sleep(1000);
    start.佛光()
    sleep(300);
    clickPoint(97,272)
    sleep(300);
    clickPoint(490,592)
    sleep(1000);
    start.蛇蝎();
    sleep(300);
    clickPoint(97,272)
    sleep(300);
    clickPoint(395,302)
    sleep(1000);
    start.红雪();
    sleep(300);
    clickPoint(97,272)
    sleep(300);
    clickPoint(395,497)
    sleep(1000);
    start.五龙()
    sleep(800);
    clickPoint(686,1116)
    sleep(100);
    start.打开道具()
    start.蓝色旗商会()
    start.商会点击()

    // start.烹饪()

    sleep(800);
}
Start_function.prototype.满存仓库1 =function(){
    sleep(1000);
    doubleClickPoint(713,586)
    sleep(800);
    clickPoint(703,1183)
    sleep(800);
    start.打开道具()
    start.蓝色旗仓库()
    start.蓝色旗仓库点击()
    start.仓库识别()
    sleep(100);
    clickPoint(100,380)
    sleep(1000);
    start.风水混()
    sleep(300);
    clickPoint(97,272)
    sleep(300);
    clickPoint(582,497)
    sleep(1000);
    start.定神()
    sleep(300);
    clickPoint(97,272)
    sleep(300);
    clickPoint(492,210)
    sleep(1000);
    start.十香()
    sleep(300);
    clickPoint(97,272)
    sleep(300);
    clickPoint(487,405)
    sleep(1000);
    start.佛光()
    sleep(300);
    clickPoint(97,272)
    sleep(300);
    clickPoint(490,592)
    sleep(1000);
    start.蛇蝎();
    sleep(300);
    clickPoint(97,272)
    sleep(300);
    clickPoint(395,302)
    sleep(1000);
    start.红雪();
    sleep(300);
    clickPoint(97,272)
    sleep(300);
    clickPoint(395,497)
    sleep(1000);
    start.五龙()
    sleep(800);
    clickPoint(686,1116)
    sleep(800);
    clickPoint(65,462)
    sleep(800);
    clickPoint(110,1022)
    sleep(800);
    clickPoint(315,807)
}

Start_function.prototype.数字识别 = function () {
    let isa = false
    let src=imageHandlerIOS.captureScreenMat();
    imageHandlerIOS.saveMat(src,"C:/temp.png");
    let  剪切 = imageHandlerIOS.cropMat(src,154,38,218,322);
    if (!剪切) {logi("剪切失败");}
    let 旋转 = imageHandlerIOS.rotateMat(剪切,270);
    if (!旋转) {logi("旋转失败");}
    imageHandlerIOS.saveMat(旋转,"C:/b1.png");
    let rects = imageHandlerIOS.getWords(旋转,"",-1,0,0,0,0.8,false)
    if (rects) {
        //logd(JSON.stringify(rects[0].info));
        let 数字 = JSON.stringify(rects[0].info-0)
        var xx = 1
        for (let x = 0;x<xx;x++) {
            let 补货价格设置 = file.readLine("C:/1/补货价格设置" + device.getDeviceAlias() + ".txt", 1);
            if (补货价格设置 != null) {
                let 价格a = 补货价格设置+0
                if (数字 < 价格a) {
                    logd(数字)
                    isa = true
                } else {
                    logd("价格" + 数字)
                    isa = false;
                }
            } else {
                file.create("C:/1/补货价格设置" + device.getDeviceAlias() + ".txt");
                xx++
                if (xx===3) {
                    break;
                }
            }
        }
    } else {
        logw("未识别到结果");
    }
    imageHandlerIOS.recycle(src,剪切,旋转);
    return isa;
}

var icc

Start_function.prototype.风水混元丹 = function (){
    let zd = false
    let 风水混元丹 = start.透明找图("风水混元丹", "风水混元丹", 200, 36, 630, 606, 1, 0.7)
        if (风水混元丹) {
            sleep(800);
            let 识别 = start.数字识别()
            if (识别) {
                sleep(100);
                clickPoint(72, 488)
                zd=true
            } else {
                    sleep(800);
                    clickPoint(716, 586)
                    sleep(300);
                    icc=0
                    pr=start.烹饪()
            }
        }
        return zd
}
Start_function.prototype.定神香 = function (){
    let zd = false
        let 定神香 = start.透明找图("定神香", "定神香", 200, 36, 630, 606, 1, 0.7)
        if (定神香) {
            sleep(500);
            let 识别 = start.数字识别()
            if (识别) {
                sleep(100);
                clickPoint(72, 488)
                zd=true
            } else {
                sleep(300);
                    clickPoint(716, 586)
                    sleep(300);
                icc=0
                pr=start.烹饪()
                }
            }
        return zd
}
Start_function.prototype.十香返生丸 = function (){
    let zd = false
        let 十香返生丸 = start.透明找图("十香返生丸", "十香返生丸", 200, 36, 630, 606, 1, 0.7)
        if (十香返生丸) {
            sleep(500);
            let 识别 = start.数字识别()
            if (识别) {
                sleep(100);
                clickPoint(72, 488)
                zd=true
            } else {
                sleep(300);
                    clickPoint(716, 586)
                    sleep(300);
                icc=0
                pr=start.烹饪()
                }
            }
        return zd
}
Start_function.prototype.佛光舍利子 = function (){
    let zd = false
        let 佛光舍利子 = start.透明找图("佛光舍利子1", "佛光舍利子", 200, 36, 630, 606, 1, 0.7)
        if (佛光舍利子) {
            sleep(500);
            let 识别 = start.数字识别()
            if (识别) {
                sleep(100);
                clickPoint(72, 488)
                zd=true
            } else {
                sleep(300);
                    clickPoint(716, 586)
                    sleep(300);
                icc=0
                pr=start.烹饪()
            }
        }
        return zd
}
Start_function.prototype.蛇蝎美人 = function (){
    let zd = false
        let 蛇蝎美人 = start.透明找图("蛇蝎美人", "蛇蝎美人", 200, 36, 630, 606, 1, 0.7)
        if (蛇蝎美人) {
            sleep(500);
            let 识别 = start.数字识别()
            if (识别) {
                sleep(100);
                clickPoint(72, 488)
                zd=true
            } else {
                sleep(300);
                    clickPoint(716, 586)
                    sleep(300);
                icc=0
                pr=start.烹饪()
            }
        }
        return zd
}
Start_function.prototype.红雪散 = function (){
    let zd = false
    let 红雪散 = start.透明找图("红雪散", "红雪散", 200, 36, 630, 606, 1, 0.7)
    if (红雪散) {
        sleep(500);
        let 识别 = start.数字识别()
        if (识别) {
            sleep(100);
            clickPoint(72, 488)
            zd=true
        } else {
            sleep(300);
            clickPoint(716, 586)
            sleep(300);
            icc=0
            pr=start.烹饪()
        }
    }
    return zd
}
Start_function.prototype.五龙丹 = function (){
    let zd = false
        let 五龙丹 = start.透明找图("五龙丹1", "五龙丹", 200, 36, 630, 606, 1, 0.7)
        if (五龙丹) {
            sleep(500);
            let 识别 = start.数字识别()
            if (识别) {
                sleep(100);
                clickPoint(72, 488)
                zd=true
            } else {
                sleep(300);
                    clickPoint(716, 586)
                    sleep(300);
                icc=0
                pr=start.烹饪()
            }
        }
        return zd
}


Start_function.prototype.三级药识别 =function() {
    sleep(500);
    clickPoint(100, 280)
    sleep(500)
    clickPoint(576, 310)
    sleep(500);
    var 风水混元丹 = start.三级药("风水混元丹")
    sleep(300);
    clickPoint(100, 377)
    sleep(300);
    var 定神香 = start.三级药("定神香")
    sleep(300);
    clickPoint(100, 377)
    sleep(300);
    var 十香返生丸 = start.三级药("十香返生丸")
    sleep(300);
    clickPoint(100, 377)
    sleep(300);
    var 佛光舍利子 = start.三级药("佛光舍利子")
    sleep(300);
    clickPoint(100, 377)
    sleep(300);
    var 蛇蝎美人 = start.三级药("蛇蝎美人")
    sleep(300);
    clickPoint(100, 377)
    sleep(300);
    var 红雪散 = start.三级药("红雪散")
    sleep(300);
    clickPoint(100, 377)
    sleep(300);
    var 五龙丹 = start.三级药("五龙丹")

    logd(风水混元丹, 定神香, 十香返生丸, 佛光舍利子, 蛇蝎美人, 红雪散, 五龙丹);

    sleep(500);
    clickPoint(690, 1113)
    sleep(300);
    start.打开道具()
    start.蓝色旗商会()
    start.商会点击()


    var 购买循环 = 0;
    while (true) {
        if (风水混元丹+定神香+十香返生丸+佛光舍利子+蛇蝎美人+红雪散+五龙丹===0) {
            sleep(300);
            clickPoint(713, 583)
            sleep(500);
            start.满存仓库1()
            logi("补货结束");
            exit()
            break
        }
         pr = start.烹饪()
        sleep(800);
        for (icc = 0; icc < pr; icc++) {
            sleep(1200);
            logd(风水混元丹, 定神香, 十香返生丸, 佛光舍利子, 蛇蝎美人, 红雪散, 五龙丹);

                    while (true){ if (风水混元丹 > 0) {
                        // sleep(300);
                        // let 风水混元丹2 = start.透明找图("风水混元丹", "风水混元丹", 200, 36, 630, 606, 0, 0.7)
                        // if (风水混元丹2) {
                        //     sleep(800);
                            let 风水混元丹1 = start.风水混元丹()
                            if (风水混元丹1) {
                                购买循环++
                                风水混元丹--
                                if (购买循环 === 18) {
                                    icc=pr+1
                                    start.七药存行囊()
                                    continue
                                }
                                if (购买循环 === 36) {
                                    icc=pr+1
                                    start.满存仓库()
                                    购买循环 = 0
                                    continue
                                }
                            } else {
                                break;
                            }
                        // }else {
                        //     break
                        // }
                        sleep(1200);
                }else {
                        break;
                    }
            }



                    while (true){if (定神香 > 0) {
                        // let 定神香2 = start.透明找图("定神香", "定神香", 200, 36, 630, 606, 0, 0.7)
                        // if (定神香2) {
                        //     sleep(800);
                            let 定神香1 = start.定神香()
                            if (定神香1) {
                                购买循环++
                                定神香--
                                if (购买循环 === 18) {
                                    icc=pr+1
                                    start.七药存行囊()
                                    continue
                                }
                                if (购买循环 === 36) {
                                    icc=pr+1
                                    start.满存仓库()
                                    购买循环 = 0
                                    continue
                                }
                            } else {
                                break;
                            }
                        // }else {
                        //     break;
                        // }
                        sleep(1200);
                }else {

                        break
                    }
            }



                    while (true) {   if (十香返生丸 > 0) {
                        // let 十香返生丸2 = start.透明找图("十香返生丸", "十香返生丸", 200, 36, 630, 606, 0, 0.7)
                        // if (十香返生丸2) {
                        //     sleep(800);
                            let 十香返生丸1 = start.十香返生丸()
                            if (十香返生丸1) {
                                购买循环++
                                十香返生丸--
                                if (购买循环 === 18) {
                                    icc=pr+1
                                    start.七药存行囊()
                                    continue
                                }
                                if (购买循环 === 36) {
                                    icc=pr+1
                                    start.满存仓库()
                                    购买循环 = 0
                                    continue
                                }
                            } else {
                                break
                            }
                        // }else {
                        //     break;
                        // }
                        sleep(1200);
                }else {
                        break;
                    }
            }



                    while (true){if (佛光舍利子 > 0) {
                        // let 佛光舍利子2 = start.透明找图("佛光舍利子", "佛光舍利子", 200, 36, 630, 606, 0, 0.7)
                        // if (佛光舍利子2) {
                        //     sleep(800);
                            let 佛光舍利子1 = start.佛光舍利子()
                            if (佛光舍利子1) {
                                购买循环++
                                佛光舍利子--
                                if (购买循环 === 18) {
                                    icc=pr+1
                                    start.七药存行囊()
                                    continue
                                }
                                if (购买循环 === 36) {
                                    icc=pr+1
                                    start.满存仓库()
                                    购买循环 = 0
                                    continue
                                }
                            } else {
                                break
                            }
                        // }else {
                        //     break;
                        // }
                        sleep(1200);
                }else {
                        break;
                    }
            }



                    while (true){ if (蛇蝎美人 > 0) {
                        // let 蛇蝎美人2 = start.透明找图("蛇蝎美人", "蛇蝎美人", 200, 36, 630, 606, 0, 0.7)
                        // if (蛇蝎美人2) {
                        //     sleep(800);
                            let 蛇蝎美人1 = start.蛇蝎美人()
                            if (蛇蝎美人1) {
                                购买循环++
                                蛇蝎美人--
                                if (购买循环 === 18) {
                                    icc=pr+1
                                    start.七药存行囊()
                                    continue
                                }
                                if (购买循环 === 36) {
                                    icc=pr+1
                                    start.满存仓库()
                                    购买循环 = 0
                                    continue
                                }
                            } else {
                                break
                            }
                        // }else {
                        //     break;
                        // }
                        sleep(1200);
                }else {
                        break;
                    }
            }



                    while (true) { if (红雪散 > 0) {
                        sleep(300);
                        // let 红雪散2 = start.透明找图("红雪散", "红雪散", 200, 36, 630, 606, 0, 0.7)
                        // if (红雪散2) {
                        //     sleep(800);
                        let 红雪散1 = start.红雪散()
                        if (红雪散1) {
                            购买循环++
                            红雪散--
                            if (购买循环 === 18) {
                                icc=pr+1
                                start.七药存行囊()
                                continue
                            }
                            if (购买循环 === 36) {
                                icc=pr+1
                                start.满存仓库()
                                购买循环 = 0
                                continue
                            }
                        } else {
                            break
                        }
                    // }else {
                    //         break;
                    //     }
                        sleep(1200);
                }else {
                            break;
                        }
            }



                    while (true){if (五龙丹 > 0) {
                        // let 五龙丹2 = start.透明找图("五龙丹", "五龙丹", 200, 36, 630, 606, 0, 0.7)
                        // if (五龙丹2) {
                        //     sleep(800);
                            let 五龙丹1 = start.五龙丹()
                            if (五龙丹1) {
                                购买循环++
                                五龙丹--
                                if (购买循环 === 18) {
                                    icc=pr+1
                                    start.七药存行囊()
                                    continue
                                }
                                if (购买循环 === 36) {
                                    icc=pr+1
                                    start.满存仓库()
                                    购买循环 = 0
                                    continue
                                }
                            } else {
                                break
                            }
                        // }else {
                        //     break;
                        // }
                        sleep(1200);
                }else {
                        break;
                    }
            }
            sleep(100);
            clickPoint(81,314)
           // sleep(1000);
        }
        sleep(800);
        clickPoint(713, 583)
        sleep(1000);
    }

}

Start_function.prototype.start=function() {
    start.打开道具()
    start.蓝色旗仓库()
    start.蓝色旗仓库点击()
    start.仓库识别()
    start.检测飞行符()


    start.检测血色茶花()
    start.三级药识别()



}














