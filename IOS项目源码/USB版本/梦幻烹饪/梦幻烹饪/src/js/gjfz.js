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

//工具封装
function Gjfz_function() {
}
let gjfz = new Gjfz_function();
//图色点击
Gjfz_function.prototype.多点找色=function(dj,firstColor,colorMulyi,x,y,ex,ey){
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

Gjfz_function.prototype.dzbs=function(name,name1,x,y,ex,ey) {
    let res = false
    let tmpImage = image.captureFullScreenEx({"type": "1", "quality": 100});
    if (tmpImage != null) {
        let firstColor = (name);
        let multiColor = (name1);
        let x =x||0
        let y =y||0
        let ex=ex||0
        let ey=ey||0
        let points = image.findMultiColor(tmpImage, firstColor, multiColor, 0.8,x,y,ex,ey, 1, 5);
        //这玩意是个数组

        logd("点击 " + JSON.stringify(points));
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
//图色点击方法2
Gjfz_function.prototype.dzbs3=function(name,name1) {
    let res = false
    let tmpImage = image.captureFullScreenEx({"type": "1", "quality": 100});
    if (tmpImage != null) {
        let firstColor = (name);
        let multiColor = (name1);
        let points = image.findMultiColor(tmpImage, firstColor, multiColor, 0.9, 0, 0, 0, 0, 1, 5);
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
//找图
Gjfz_function.prototype.透明找图=function(name,name1,x,y,x1,y1,dj,ss) {
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
             }
            //else {
            //     //sleep(100);
            //    // logd("正在寻找"+name1 + JSON.stringify(points));
            // }
            //这玩意是个数组
            if(points && points.length >0){
                for(let i=0;i<points.length;i++){
                    if(dj===1){
                        sleep("100")
                        clickPoint(points[i].x,points[i].y);
                    }else if(dj===2){
                        sleep("100")
                        doubleClickPoint(points[i].x,points[i].y);
                    }else if(dj===3){
                        sleep("100")
                        clickPoint(points[i].x-50,points[i].y+100);
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

Gjfz_function.prototype.图片查找=function(name,x,y,x1,y1,dd){
    let iszd=false;
let sms=readResAutoImage(name+".png");
//抓取屏幕
let aimage = image.captureFullScreen();
logd(name + aimage);
if (aimage != null) {
    //在图片中查找
    let points = image.findImage(aimage, sms,x,y,x1,y1,0.7, 0.7, 1, 5);
    logd(name  + JSON.stringify(points));
    //这玩意是个数组
    if(points && points.length > 0){
        for(let i=0;i<points.length;i++){
        //    logd(points[i])
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
}else {
    image.recycle(aimage)
}
//图片要回收
    image.recycle(sms)
    return iszd;
}

Gjfz_function.prototype.精准找图=function(name,x,y,ex,ey){
    let zd = false
    let  srcMat = imageHandlerIOS.captureScreenMat();
    let  tempMat = imageHandlerIOS.readResMat(name+".png");
    let  rects = imageHandlerIOS.findImg(srcMat,tempMat,1,0.8,x,y,ex,ey,21,null);
    if(rects && rects.length === 1){
        zd = true
        let ioo = 0
        while (true) {
            sleep(300);
            let 白 = gjfz.透明找图("白旗子", "白旗子1", 163, 576, 599, 1136, 2, 0.7)
            if (白){
                sleep("500")
                clickPoint(603,681)
                logd("行囊点击白棋子")
                break;
            }else {
                ioo++
                sleep("300")
                clickPoint(595, 907)
                sleep(500);
                let  bai = gjfz.图片查找("白旗子", 163, 576, 599, 1136, 2)
                if (bai) {
                    sleep(500);
                    clickPoint(604, 682)
                    break;
                }else {
                    logd("正在行囊拿白色旗子");
                }
                if (ioo===8){
                    exit()
                    logi("白色旗子存在找图问题，带截图找开发员解决" )
                }
            }
        }
        sleep("500")
        clickPoint(603,681)
        sleep("200")
        ocrjq.白色旗仓库管理员()
        ocrjq.仓库管理员()
        sleep("200")
        clickPoint(302,306)
        //第十七行
        sleep("500")
        let x11 = 0
        while (true){
            let x1 = gjfz.图片查找("白旗子", 130, 112, 570, 650, 2)
            if (x1){
                logd("点击白旗子")
                sleep("500")
                clickPoint(600,902)
                break;
            }else {
                x11++
                sleep("500")
                if (x11===5){
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x11===8){
                    sleep("500")
                    loge("没有白棋子")
                    return
                }
            }

        }
        sleep("1000")
        let x22 = 0 ;
        while (true){
            let x2 = gjfz.图片查找("白旗子", 130, 112, 570, 650, 2)
            if (x2){
                logd("点击白旗子")
                break;
            }else {
                x22++
                sleep("500")
                if (x22===5){
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x22===8){
                    sleep("500")
                    loge("没有白棋子")
                    return
                }
            }

        }
        sleep("1000")
        let x33 = 0 ;
        while (true){
            let x3 = gjfz.图片查找("白旗子", 130, 112, 570, 650, 2)
            if (x3){
                logd("点击白旗子")
                break;
            }else {
                x33++
                sleep("500")
                if (x33===5){
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x33===8){
                    sleep("500")
                    loge("没有白棋子")
                    return
                }
            }

        }
        sleep("1000")
        let x44 = 0 ;
        while (true){
            let x4 = gjfz.图片查找("白旗子", 130, 112, 570, 650, 2)
            if (x4){
                logd("点击白旗子")
                break;
            }else {
                x44++
                sleep("500")
                if (x44===5){
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x44===8){
                    sleep("500")
                    loge("没有白棋子")
                    return
                }
            }

        }
        sleep("1000")
        let x55 = 0 ;
        while (true){
            let x5 = gjfz.图片查找("白旗子", 130, 112, 570, 650, 2)
            if (x5){
                logd("点击白旗子")
                break;
            }else {
                x55++
                sleep("500")
                if (x55===5){
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x55===8){
                    sleep("500")
                    loge("没有白棋子")
                    return
                }
            }

        }
        sleep("1000")
        let x66 = 0 ;
        while (true){
            let x6 = gjfz.图片查找("白旗子", 130, 112, 570, 650, 2)
            if (x6){
                logd("点击白旗子")
                break;
            }else {
                x66++
                sleep("500")
                if (x66===5){
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x66===8){
                    sleep("500")
                    loge("没有白棋子")
                    return
                }
            }

        }
        sleep("1000")
        let x77 = 0 ;
        while (true){
            let x7 = gjfz.图片查找("白旗子", 130, 112, 570, 650, 2)
            if (x7){
                logd("点击白旗子")
                break;
            }else {
                x77++
                sleep("500")
                if (x77===5){
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x77===8){
                    sleep("500")
                    loge("没有白棋子")
                    return
                }
            }

        }

        sleep("300")
        clickPoint(692, 1117)
        sleep("300")
        clickPoint(467, 1175)

        ocrjq.打开道具()
        while (true) {
            let bqz = gjfz.透明找图("白旗子", "白旗子", 163, 576, 599, 1136, 0, 0.7)
            if (bqz) {
                sleep("500")
                gjfz.透明找图("白旗子", "白旗子", 163, 576, 599, 1136, 2, 0.7)
                logd("找到白色旗点击")
                break;
            }else {
                logd("1")
                sleep("500")
            }
        }
        sleep("300");
        ocrjq.白色旗()
        sleep("800");
        clickPoint(687, 1110)
        ocrjq.酒店老板执行()
        res = true;
    }
    if(rects && rects.length >= 2){
        zd = true
        sleep("300")
        let iox = 0 ;
        while (true) {
            let 白 = gjfz.透明找图("白旗子", "白旗子", 163, 576, 599, 1136, 2, 0.7)
            if (白){
                sleep("500")
                clickPoint(603,681)
                logd("行囊点击白棋子")
                break;
            }else {
                iox++
                sleep("500")
                clickPoint(595, 907)
                let bai = gjfz.图片查找("白旗子", 163, 576, 599, 1136, 2)
                if (bai) {
                    logd("行囊点击白棋子1");
                }
                if (iox===8){
                    exit()
                    logi("白色旗子存在找图问题，带截图找开发员解决" )
                }
            }
        }
        sleep("500")
        clickPoint(603,681)
        //点击道具
        sleep("500")
        while (true) {
            let bqz = gjfz.透明找图("白旗子", "白旗子", 163, 576, 599, 1136, 0, 0.7)
            if (bqz) {
                sleep("500")
                gjfz.透明找图("白旗子", "白旗子", 163, 576, 599, 1136, 2, 0.7)
                logd("找到白色旗点击")
                break;
            }else {
                logd("1")
                sleep("500")
            }
        }
        sleep("300");
        ocrjq.白色旗()
        sleep("800");
        clickPoint(687, 1110)
        ocrjq.酒店老板执行()

        res = true;
    }
    //回收图片
    imageHandlerIOS.recycle(srcMat);
    imageHandlerIOS.recycle(tempMat);
    return zd;
}
Gjfz_function.prototype.精准找图1=function(name,x,y,ex,ey,dj) {
    let zd = false
    let srcMat = imageHandlerIOS.captureScreenMat();
    let 旋转 = imageHandlerIOS.rotateMat(srcMat,270);
    let tempMat = imageHandlerIOS.readResMat(name + ".png");
    let rects = imageHandlerIOS.findImg(旋转, tempMat, 0.5, 0.9, x, y, ex, ey, 1, null);
    if (rects != null) {
        if (dj===1){
            clickPoint(rects[0].left+50,rects[0].top+50)
        }
        if (dj===2){
            doubleClickPoint(rects[0].left+50,rects[0].top+50)
        }
        zd = true
    }
    imageHandlerIOS.recycle(srcMat,旋转);
    imageHandlerIOS.recycle(tempMat);
    return zd;
}

Gjfz_function.prototype.判断图片=function(name,x,y,x1,y1,ss) {
    //申请完权限至少等1s(垃圾设备多加点)再截图,否则会截不到图
    let res = false;
    sleep(300);
    let sms=readResAutoImage(name+".png");
    //抓取屏幕
    sleep(200);
    let aimage = image.captureFullScreen();
    logd("aimage "+aimage);
    if (aimage != null) {
        //在图片中查找
        sleep(200);
        let points = image.findImage(aimage, sms,x, y, x1, y1,0.7, ss, 21, 5);
        logd("points " + JSON.stringify(points));
        //这玩意是个数组
        if(points && points.length === 1){
            let ioo = 0
            while (true) {
                sleep(300);
                let 白 = gjfz.透明找图("白旗子", "白旗子1", 163, 576, 599, 1136, 2, 0.7)
                if (白){
                    sleep("500")
                    clickPoint(604, 682)
                    logd("行囊点击白棋子")
                    break;
                }else {
                    ioo++
                    sleep("300")
                    clickPoint(595, 907)
                    sleep(500);
                   let  bai = gjfz.图片查找("白旗子", 163, 576, 599, 1136, 2)
                    if (bai) {
                    break;
                    }else {
                        logd("正在行囊拿白色旗子");
                    }
                    if (ioo===8){
                        exit()
                        logi("白色旗子存在找图问题，带截图找开发员解决" )
                    }
                }
            }
            sleep("500")
            clickPoint(604, 682)
            sleep("200")
            ocrjq.白色旗仓库管理员()
            ocrjq.仓库管理员()
            sleep("200")
            clickPoint(302,306)
            //第十七行
            sleep("500")
            let x11 = 0
            while (true){
                let x1 = gjfz.图片查找("白旗子", 130, 112, 570, 650, 2)
                if (x1){
                    logd("点击白旗子")
                    sleep("500")
                    clickPoint(600,902)
                    break;
                }else {
                    x11++
                    sleep("500")
                    if (x11===5){
                        sleep("500")
                        clickPoint(100, 377)
                    }
                    if (x11===8){
                        sleep("500")
                        loge("没有白棋子")
                        return
                    }
                }

            }
            sleep("1000")
            let x22 = 0 ;
            while (true){
                let x2 = gjfz.图片查找("白旗子", 130, 112, 570, 650, 2)
                if (x2){
                    logd("点击白旗子")
                    break;
                }else {
                    x22++
                    sleep("500")
                    if (x22===5){
                        sleep("500")
                        clickPoint(100, 377)
                    }
                    if (x22===8){
                        sleep("500")
                        loge("没有白棋子")
                        return
                    }
                }

            }
            sleep("1000")
            let x33 = 0 ;
            while (true){
                let x3 = gjfz.图片查找("白旗子", 130, 112, 570, 650, 2)
                if (x3){
                    logd("点击白旗子")
                    break;
                }else {
                    x33++
                    sleep("500")
                    if (x33===5){
                        sleep("500")
                        clickPoint(100, 377)
                    }
                    if (x33===8){
                        sleep("500")
                        loge("没有白棋子")
                        return
                    }
                }

            }
            sleep("1000")
            let x44 = 0 ;
            while (true){
                let x4 = gjfz.图片查找("白旗子", 130, 112, 570, 650, 2)
                if (x4){
                    logd("点击白旗子")
                    break;
                }else {
                    x44++
                    sleep("500")
                    if (x44===5){
                        sleep("500")
                        clickPoint(100, 377)
                    }
                    if (x44===8){
                        sleep("500")
                        loge("没有白棋子")
                        return
                    }
                }

            }
            sleep("1000")
            let x55 = 0 ;
            while (true){
                let x5 = gjfz.图片查找("白旗子", 130, 112, 570, 650, 2)
                if (x5){
                    logd("点击白旗子")
                    break;
                }else {
                    x55++
                    sleep("500")
                    if (x55===5){
                        sleep("500")
                        clickPoint(100, 377)
                    }
                    if (x55===8){
                        sleep("500")
                        loge("没有白棋子")
                        return
                    }
                }

            }
            sleep("1000")
            let x66 = 0 ;
            while (true){
                let x6 = gjfz.图片查找("白旗子", 130, 112, 570, 650, 2)
                if (x6){
                    logd("点击白旗子")
                    break;
                }else {
                    x66++
                    sleep("500")
                    if (x66===5){
                        sleep("500")
                        clickPoint(100, 377)
                    }
                    if (x66===8){
                        sleep("500")
                        loge("没有白棋子")
                        return
                    }
                }

            }
            sleep("1000")
            let x77 = 0 ;
            while (true){
                let x7 = gjfz.图片查找("白旗子", 130, 112, 570, 650, 2)
                if (x7){
                    logd("点击白旗子")
                    break;
                }else {
                    x77++
                    sleep("500")
                    if (x77===5){
                        sleep("500")
                        clickPoint(100, 377)
                    }
                    if (x77===8){
                        sleep("500")
                        loge("没有白棋子")
                        return
                    }
                }

            }

                sleep("500")
                clickPoint(692, 1117)
                sleep("500")
                clickPoint(467, 1175)

            ocrjq.打开道具()
            while (true) {
                let bqz = gjfz.透明找图("白旗子", "白旗子", 163, 576, 599, 1136, 0, 0.7)
                if (bqz) {
                    sleep("500")
                    gjfz.透明找图("白旗子", "白旗子", 163, 576, 599, 1136, 2, 0.7)
                    logd("找到白色旗点击")
                    break;
                }else {
                    logd("1")
                    sleep("500")
                }
            }
            sleep("300");
            ocrjq.白色旗()
            sleep("800");
            clickPoint(687, 1110)
            ocrjq.酒店老板执行()
            res = true;
        }
        if(points && points.length >= 2){
            sleep("300")
            let iox = 0 ;
            while (true) {
                let 白 = gjfz.透明找图("白旗子", "白旗子", 163, 576, 599, 1136, 2, 0.7)
                if (白){
                    sleep("500")
                    clickPoint(604, 682)
                    logd("行囊点击白棋子")
                    break;
                }else {
                    iox++
                    sleep("500")
                    clickPoint(595, 907)
                    let bai = gjfz.图片查找("白旗子", 163, 576, 599, 1136, 2)
                    if (bai) {
                        logd("行囊点击白棋子1");
                    }
              if (iox===8){
                  exit()
                  logi("白色旗子存在找图问题，带截图找开发员解决" )
              }
                }
            }
            sleep("500")
            clickPoint(604, 682)
            //点击道具
            sleep("500")
            while (true) {
                let bqz = gjfz.透明找图("白旗子", "白旗子", 163, 576, 599, 1136, 0, 0.7)
                if (bqz) {
                    sleep("500")
                    gjfz.透明找图("白旗子", "白旗子", 163, 576, 599, 1136, 2, 0.7)
                    logd("找到白色旗点击")
                    break;
                }else {
                    logd("1")
                    sleep("500")
                }
            }
            sleep("300");
            ocrjq.白色旗()
            sleep("800");
            clickPoint(687, 1110)
            ocrjq.酒店老板执行()

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

//白色旗找查
Gjfz_function.prototype.血色=function(ic){
    var xx = device.getDeviceAlias();
 //   logd(xx);
    if (xx === JSON.stringify(1)){
        let 文件夹 =file.exists("C:/1/1.txt");
        if (文件夹){
            sleep("300")
            let 读取 = file.readLine("C:/1/1.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/1.txt");
            }else {
                file.writeFile(ic,"C:/1/1.txt")
            }

        }else {
            file.mkdirs("C:/1");
            sleep("300")
            file.create("C:/1/1.txt");
            sleep("300")
            let 读取 = file.readLine("C:/1/1.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/1.txt");
            }else {
                file.writeFile(ic,"C:/1/1.txt")
            }
        }
    }
    if (xx === JSON.stringify(2)){
        let 文件夹 =file.exists("C:/1/2.txt");
        if (文件夹){
            sleep("300")
            let 读取 = file.readLine("C:/1/2.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/2.txt");
            }else {
                file.writeFile(ic,"C:/1/2.txt")
            }
        }else {
            file.mkdirs("C:/1");
            sleep("300")
            file.create("C:/1/2.txt");
            sleep("300")
            let 读取 = file.readLine("C:/1/2.txt")
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/2.txt");
            }else {
                file.writeFile(ic,"C:/1/2.txt")
            }
        }
    }
    if (xx === JSON.stringify(3)){
        let 文件夹 =file.exists("C:/1/3.txt");
        if (文件夹){
            sleep("300")
            let 读取 = file.readLine("C:/1/3txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/3.txt");
            }else {
                file.writeFile(ic,"C:/1/3.txt")
            }
        }else {
            file.mkdirs("C:/1");
            sleep("300")
            file.create("C:/1/3.txt");
            sleep("300")
            let 读取 = file.readLine("C:/1/3.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/3.txt");
            }else {
                file.writeFile(ic,"C:/1/3.txt")
            }
        }
    }
    if (xx === JSON.stringify(4)){
        let 文件夹 =file.exists("C:/1/4.txt");
        if (文件夹){
            sleep("300")
            let 读取 = file.readLine("C:/1/4.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/4.txt");
            }else {
                file.writeFile(ic,"C:/1/4.txt")
            }
        }else {
            file.mkdirs("C:/1");
            sleep("300")
            file.create("C:/1/4.txt");
            sleep("300")
            let 读取 = file.readLine("C:/1/4.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/4.txt");
            }else {
                file.writeFile(ic,"C:/1/4.txt")
            }
        }
    }
    if (xx === JSON.stringify(5)){
        let 文件夹 =file.exists("C:/1/5.txt");
        if (文件夹){
            sleep("300")
            let 读取 = file.readLine("C:/1/5.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/5.txt");
            }else {
                file.writeFile(ic,"C:/1/5.txt")
            }
        }else {
            file.mkdirs("C:/1");
            sleep("300")
            file.create("C:/1/5.txt");
            sleep("300")
            let 读取 = file.readLine("C:/1/5.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/5.txt");
            }else {
                file.writeFile(ic,"C:/1/5.txt")
            }
        }
    }
    if (xx === JSON.stringify(6)){
        let 文件夹 =file.exists("C:/1/6.txt");
        if (文件夹){
            sleep("300")
            let 读取 = file.readLine("C:/1/6.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/6.txt");
            }else {
                file.writeFile(ic,"C:/1/6.txt")
            }
        }else {
            file.mkdirs("C:/1");
            sleep("300")
            file.create("C:/1/6.txt");
            sleep("300")
            let 读取 = file.readLine("C:/1/6.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/6.txt");
            }else {
                file.writeFile(ic,"C:/1/6.txt")
            }
        }
    }
    if (xx === JSON.stringify(7)){
        let 文件夹 =file.exists("C:/1/7.txt");
        if (文件夹){
            sleep("300")
            let 读取 = file.readLine("C:/1/7.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/7.txt");
            }else {
                file.writeFile(ic,"C:/1/7txt")
            }
        }else {
            file.mkdirs("C:/1");
            sleep("300")
            file.create("C:/1/7.txt");
            sleep("300")
            let 读取 = file.readLine("C:/1/7.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/7.txt");
            }else {
                file.writeFile(ic,"C:/1/7.txt")
            }
        }
    }
    if (xx === JSON.stringify(8)){
        let 文件夹 =file.exists("C:/1/8.txt");
        if (文件夹){
            sleep("300")
            let 读取 = file.readLine("C:/1/8.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/8.txt");
            }else {
                file.writeFile(ic,"C:/1/8.txt")
            }
        }else {
            file.mkdirs("C:/1");
            sleep("300")
            file.create("C:/1/8.txt");
            sleep("300")
            let 读取 = file.readLine("C:/1/8.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/8.txt");
            }else {
                file.writeFile(ic,"C:/1/8.txt")
            }
        }
    }
    if (xx === JSON.stringify(9)){
        let 文件夹 =file.exists("C:/1/9.txt");
        if (文件夹){
            sleep("300")
            let 读取 = file.readLine("C:/1/9.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/9.txt");
            }else {
                file.writeFile(ic,"C:/1/9.txt")
            }
        }else {
            file.mkdirs("C:/1");
            sleep("300")
            file.create("C:/1/9.txt");
            sleep("300")
            let 读取 = file.readLine("C:/1/9.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/4.txt");
            }else {
                file.writeFile(ic,"C:/1/9.txt")
            }
        }
    }
    if (xx === JSON.stringify(10)){
        let 文件夹 =file.exists("C:/1/10.txt");
        if (文件夹){
            sleep("300")
            let 读取 = file.readLine("C:/1/10.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/10.txt");
            }else {
                file.writeFile(ic,"C:/1/10.txt")
            }
        }else {
            file.mkdirs("C:/1");
            sleep("300")
            file.create("C:/1/10.txt");
            sleep("300")
            let 读取 = file.readLine("C:/1/10.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/10.txt");
            }else {
                file.writeFile(读取+ic,"C:/1/10.txt")
            }
        }
    }
    if (xx === JSON.stringify(11)){
        let 文件夹 =file.exists("C:/1/11.txt");
        if (文件夹){
            sleep("300")
            let 读取 = file.readLine("C:/1/11.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/11.txt");
            }else {
                file.writeFile(读取+ic,"C:/1/11.txt")
            }
        }else {
            file.mkdirs("C:/1");
            sleep("300")
            file.create("C:/1/11.txt");
            sleep("300")
            let 读取 = file.readLine("C:/1/11.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/11.txt");
            }else {
                file.writeFile(读取+ic,"C:/1/11.txt")
            }
        }
    }
    if (xx === JSON.stringify(12)){
        let 文件夹 =file.exists("C:/1/12.txt");
        if (文件夹){
            sleep("300")
            let 读取 = file.readLine("C:/1/12.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/12.txt");
            }else {
                file.writeFile(读取+ic,"C:/1/12.txt")
            }
        }else {
            file.mkdirs("C:/1");
            sleep("300")
            file.create("C:/1/12.txt");
            sleep("300")
            let 读取 = file.readLine("C:/1/12.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/12.txt");
            }else {
                file.writeFile(读取+ic,"C:/1/12.txt")
            }
        }
    }
    if (xx === JSON.stringify(13)){
        let 文件夹 =file.exists("C:/1/13.txt");
        if (文件夹){
            sleep("300")
            let 读取 = file.readLine("C:/1/13.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/13.txt");
            }else {
                file.writeFile(读取+ic,"C:/1/13.txt")
            }
        }else {
            file.mkdirs("C:/1");
            sleep("300")
            file.create("C:/1/13.txt");
            sleep("300")
            let 读取 = file.readLine("C:/1/13.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/13.txt");
            }else {
                file.writeFile(读取+ic,"C:/1/13.txt")
            }
        }
    }
    if (xx === JSON.stringify(14)){
        let 文件夹 =file.exists("C:/1/14.txt");
        if (文件夹){
            sleep("300")
            let 读取 = file.readLine("C:/1/14.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/14.txt");
            }else {
                file.writeFile(读取+ic,"C:/1/14.txt")
            }
        }else {
            file.mkdirs("C:/1");
            sleep("300")
            file.create("C:/1/14.txt");
            sleep("300")
            let 读取 = file.readLine("C:/1/14.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/14.txt");
            }else {
                file.writeFile(读取+ic,"C:/1/14.txt")
            }
        }
    }
    if (xx === JSON.stringify(15)){
        let 文件夹 =file.exists("C:/1/15.txt");
        if (文件夹){
            sleep("300")
            let 读取 = file.readLine("C:/1/15.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/15.txt");
            }else {
                file.writeFile(读取+ic,"C:/1/15.txt")
            }
        }else {
            file.mkdirs("C:/1");
            sleep("300")
            file.create("C:/1/15.txt");
            sleep("300")
            let 读取 = file.readLine("C:/1/15.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/15.txt");
            }else {
                file.writeFile(读取+ic,"C:/1/15.txt")
            }
        }
    }
    if (xx === JSON.stringify(16)){
        let 文件夹 =file.exists("C:/1/16.txt");
        if (文件夹){
            sleep("300")
            let 读取 = file.readLine("C:/1/16.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/16.txt");
            }else {
                file.writeFile(读取+ic,"C:/1/16.txt")
            }
        }else {
            file.mkdirs("C:/1");
            sleep("300")
            file.create("C:/1/16.txt");
            sleep("300")
            let 读取 = file.readLine("C:/1/16.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/16.txt");
            }else {
                file.writeFile(读取+ic,"C:/1/16.txt")
            }
        }
    }
    if (xx === JSON.stringify(17)){
        let 文件夹 =file.exists("C:/1/17.txt");
        if (文件夹){
            sleep("300")
            let 读取 = file.readLine("C:/1/17.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/17.txt");
            }else {
                file.writeFile(读取+ic,"C:/1/17.txt")
            }
        }else {
            file.mkdirs("C:/1");
            sleep("300")
            file.create("C:/1/17.txt");
            sleep("300")
            let 读取 = file.readLine("C:/1/17.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/17.txt");
            }else {
                file.writeFile(读取+ic,"C:/1/17.txt")
            }
        }
    }
    if (xx === JSON.stringify(18)){
        let 文件夹 =file.exists("C:/1/18.txt");
        if (文件夹){
            sleep("300")
            let 读取 = file.readLine("C:/1/18.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/18.txt");
            }else {
                file.writeFile(读取+ic,"C:/1/18.txt")
            }
        }else {
            file.mkdirs("C:/1");
            sleep("300")
            file.create("C:/1/18.txt");
            sleep("300")
            let 读取 = file.readLine("C:/1/18.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/18.txt");
            }else {
                file.writeFile(读取+ic,"C:/1/18.txt")
            }
        }
    }
    if (xx === JSON.stringify(19)){
        let 文件夹 =file.exists("C:/1/19.txt");
        if (文件夹){
            sleep("300")
            let 读取 = file.readLine("C:/1/19.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/19.txt");
            }else {
                file.writeFile(读取+ic,"C:/1/19.txt")
            }
        }else {
            file.mkdirs("C:/1");
            sleep("300")
            file.create("C:/1/19.txt");
            sleep("300")
            let 读取 = file.readLine("C:/1/19.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/19.txt");
            }else {
                file.writeFile(读取+ic,"C:/1/19.txt")
            }
        }
    }
    if (xx === JSON.stringify(20)){
        let 文件夹 =file.exists("C:/1/20.txt");
        if (文件夹){
            sleep("300")
            let 读取 = file.readLine("C:/1/20.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/20.txt");
            }else {
                file.writeFile(读取+ic,"C:/1/20.txt")
            }
        }else {
            file.mkdirs("C:/1");
            sleep("300")
            file.create("C:/1/20.txt");
            sleep("300")
            let 读取 = file.readLine("C:/1/20.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/20.txt");
            }else {
                file.writeFile(读取+ic,"C:/1/20.txt")
            }
        }
    }
    if (xx === JSON.stringify(21)){
        let 文件夹 =file.exists("C:/1/21.txt");
        if (文件夹){
            sleep("300")
            let 读取 = file.readLine("C:/1/21.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/21.txt");
            }else {
                file.writeFile(读取+ic,"C:/1/21.txt")
            }
        }else {
            file.mkdirs("C:/1");
            sleep("300")
            file.create("C:/1/21.txt");
            sleep("300")
            let 读取 = file.readLine("C:/1/21.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/21.txt");
            }else {
                file.writeFile(读取+ic,"C:/1/21.txt")
            }
        }
    }
    if (xx === JSON.stringify(22)){
        let 文件夹 =file.exists("C:/1/22.txt");
        if (文件夹){
            sleep("300")
            let 读取 = file.readLine("C:/1/22.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/22.txt");
            }else {
                file.writeFile(读取+ic,"C:/1/22.txt")
            }
        }else {
            file.mkdirs("C:/1");
            sleep("300")
            file.create("C:/1/22.txt");
            sleep("300")
            let 读取 = file.readLine("C:/1/22.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/22.txt");
            }else {
                file.writeFile(读取+ic,"C:/1/22.txt")
            }
        }
    }
    if (xx === JSON.stringify(23)){
        let 文件夹 =file.exists("C:/1/23.txt");
        if (文件夹){
            sleep("300")
            let 读取 = file.readLine("C:/1/23.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/23.txt");
            }else {
                file.writeFile(读取+ic,"C:/1/23.txt")
            }
        }else {
            file.mkdirs("C:/1");
            sleep("300")
            file.create("C:/1/23.txt");
            sleep("300")
            let 读取 = file.readLine("C:/1/23.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/23.txt");
            }else {
                file.writeFile(读取+ic,"C:/1/23.txt")
            }
        }
    }
    if (xx === JSON.stringify(24)){
        let 文件夹 =file.exists("C:/1/24.txt");
        if (文件夹){
            sleep("300")
            let 读取 = file.readLine("C:/1/24.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/24.txt");
            }else {
                file.writeFile(读取+ic,"C:/1/24.txt")
            }
        }else {
            file.mkdirs("C:/1");
            sleep("300")
            file.create("C:/1/24.txt");
            sleep("300")
            let 读取 = file.readLine("C:/1/24.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/24.txt");
            }else {
                file.writeFile(读取+ic,"C:/1/24.txt")
            }
        }
    }
    if (xx === JSON.stringify(25)){
        let 文件夹 =file.exists("C:/1/25.txt");
        if (文件夹){
            sleep("300")
            let 读取 = file.readLine("C:/1/25.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/25.txt");
            }else {
                file.writeFile(读取+ic,"C:/1/25.txt")
            }
        }else {
            file.mkdirs("C:/1");
            sleep("300")
            file.create("C:/1/25.txt");
            sleep("300")
            let 读取 = file.readLine("C:/1/25.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/25.txt");
            }else {
                file.writeFile(读取+ic,"C:/1/25.txt")
            }
        }
    }
    if (xx === JSON.stringify(26)){
        let 文件夹 =file.exists("C:/1/26.txt");
        if (文件夹){
            sleep("300")
            let 读取 = file.readLine("C:/1/26.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/26.txt");
            }else {
                file.writeFile(读取+ic,"C:/1/26.txt")
            }
        }else {
            file.mkdirs("C:/1");
            sleep("300")
            file.create("C:/1/26.txt");
            sleep("300")
            let 读取 = file.readLine("C:/1/26.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/26.txt");
            }else {
                file.writeFile(读取+ic,"C:/1/26.txt")
            }
        }
    }
    if (xx === JSON.stringify(27)){
        let 文件夹 =file.exists("C:/1/27.txt");
        if (文件夹){
            sleep("300")
            let 读取 = file.readLine("C:/1/27.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/27.txt");
            }else {
                file.writeFile(读取+ic,"C:/1/27.txt")
            }
        }else {
            file.mkdirs("C:/1");
            sleep("300")
            file.create("C:/1/27.txt");
            sleep("300")
            let 读取 = file.readLine("C:/1/27.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/27.txt");
            }else {
                file.writeFile(读取+ic,"C:/1/27.txt")
            }
        }
    }
    if (xx === JSON.stringify(28)){
        let 文件夹 =file.exists("C:/1/28.txt");
        if (文件夹){
            sleep("300")
            let 读取 = file.readLine("C:/1/28.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/28.txt");
            }else {
                file.writeFile(读取+ic,"C:/1/28.txt")
            }
        }else {
            file.mkdirs("C:/1");
            sleep("300")
            file.create("C:/1/28.txt");
            sleep("300")
            let 读取 = file.readLine("C:/1/28.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/28.txt");
            }else {
                file.writeFile(读取+ic,"C:/1/28txt")
            }
        }
    }
    if (xx === JSON.stringify(29)){
        let 文件夹 =file.exists("C:/1/29.txt");
        if (文件夹){
            sleep("300")
            let 读取 = file.readLine("C:/1/29.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/29.txt");
            }else {
                file.writeFile(读取+ic,"C:/1/29.txt")
            }
        }else {
            file.mkdirs("C:/1");
            sleep("300")
            file.create("C:/1/29.txt");
            sleep("300")
            let 读取 = file.readLine("C:/1/29.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/29.txt");
            }else {
                file.writeFile(读取+ic,"C:/1/29.txt")
            }
        }
    }
    if (xx === JSON.stringify(30)){
        let 文件夹 =file.exists("C:/1/30.txt");
        if (文件夹){
            sleep("300")
            let 读取 = file.readLine("C:/1/30.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/30.txt");
            }else {
                file.writeFile(读取+ic,"C:/1/30.txt")
            }
        }else {
            file.mkdirs("C:/1");
            sleep("300")
            file.create("C:/1/30.txt");
            sleep("300")
            let 读取 = file.readLine("C:/1/30.txt",1)
            if(读取===JSON.stringify(null)){
                file.writeFile(ic,"C:/1/30.txt");
            }else {
                file.writeFile(读取+ic,"C:/1/30.txt")
            }
        }
    }





}
Gjfz_function.prototype.血色茶花=function(name,x,y,x1,y1) {
    let zd = false
    let srcMat = imageHandlerIOS.captureScreenMat();
    let tempMat = imageHandlerIOS.readResMat(name + ".png");
    let points = imageHandlerIOS.findImg(srcMat, tempMat, 1, 0.8, x, y, x1, y1, 21, null);
    if (points && points.length === 1 || points && points.length === 0) {
      zd = true
       ocrjq.白色旗仓库管理员()
        ocrjq.仓库管理员()
        //点击行数
        clickPoint(292, 590)
        sleep("500")
        let x11 = 0
        while (true) {
            let x1 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
            if (x1) {
                logd("点击血色")
                break;
            } else {
                x11++
                sleep("500")
                if (x11 === 4) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x11 === 6) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x11 === 8) {
                    sleep("500")
                    loge("没有血色茶花")
                    return
                }
            }

        }
        sleep("1000")
        let x22 = 0
        while (true) {
            let x2 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
            if (x2) {
                logd("点击血色")
                break;
            } else {
                x22++
                sleep("500")
                if (x22 === 4) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x22 === 6) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x22 === 8) {
                    sleep("500")
                    loge("没有血色茶花")
                    return
                }
            }

        }
        sleep("1000")
        let x33 = 0
        while (true) {
            let x3 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
            if (x3) {
                logd("点击血色")
                break;
            } else {
                x33++
                sleep("500")
                if (x33 === 4) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x33 === 6) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x33 === 8) {
                    sleep("500")
                    loge("没有血色茶花")
                    return
                }
            }

        }
        sleep("1000")
        let x44 = 0
        while (true) {
            let x4 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
            if (x4) {
                logd("点击血色")
                break;
            } else {
                x44++
                sleep("500")
                if (x44 === 4) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x44 === 6) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x44 === 8) {
                    sleep("500")
                    loge("没有血色茶花")
                    return
                }
            }

        }
        sleep("1000")
        let x55 = 0
        while (true) {
            let x5 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
            if (x5) {
                logd("点击血色")
                break;
            } else {
                x55++
                sleep("500")
                if (x55 === 4) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x55 === 6) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x55 === 8) {
                    sleep("500")
                    loge("没有血色茶花")
                    return
                }
            }

        }
        sleep("1000")
        let x66 = 0
        while (true) {
            let x6 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
            if (x6) {
                logd("点击血色")
                break;
            } else {
                x66++
                sleep("500")
                if (x66 === 4) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x66 === 6) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x66 === 8) {
                    sleep("500")
                    loge("没有血色茶花")
                    return
                }
            }

        }
        sleep("1000")
        let x77 = 0
        while (true) {
            let x7 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
            if (x7) {
                logd("点击血色")
                break;
            } else {
                x77++
                sleep("500")
                if (x77 === 4) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x77 === 6) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x77 === 8) {
                    sleep("500")
                    loge("没有血色茶花")
                    return
                }
            }

        }
        // sleep("1000")
        // let x88 = 0
        // while (true) {
        //     let x8 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
        //     if (x8) {
        //         logd("点击血色")
        //         break;
        //     } else {
        //         x88++
        //         sleep("500")
        //         if (x88 === 4) {
        //             sleep("500")
        //             clickPoint(100, 377)
        //         }
        //         if (x88 === 6) {
        //             sleep("500")
        //             clickPoint(100, 377)
        //         }
        //         if (x88 === 8) {
        //             sleep("500")
        //             loge("没有血色茶花")
        //             return
        //         }
        //     }
        //
        // }
        //sleep("1000")
        //             let x99 = 0
        //             while (true){
        //                 let x9 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
        //                 if (x9){
        //                     logd("点击血色")
        //                     break;
        //                 }else {
        //                     sleep("500")
        //                     if (x99===5){
        //                         sleep("500")
        //                         clickPoint(100, 377)
        //                     }
        //                     if (x99===8){
        //                         sleep("500")
        //                         loge("没有血色茶花")
        //                         return
        //                     }
        //                 }
        //
        //             }
        // sleep("1000")
        //             let x00 = 0
        //             while (true){
        //                 let x0 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
        //                 if (x0){
        //                     logd("点击血色")
        //                     break;
        //                 }else {
        //                     sleep("500")
        //                     if (x00===5){
        //                         sleep("500")
        //                         clickPoint(100, 377)
        //                     }
        //                     if (x00===8){
        //                         sleep("500")
        //                         loge("没有血色茶花")
        //                         return
        //                     }
        //                 }
        //             }
        sleep("500")
        clickPoint(692, 1117)
        sleep("800")
        clickPoint(720, 1281)
        sleep("500")
        gjfz.图片查找("气血", 323, 710, 739, 1330, 1)
        sleep("500")
        clickPoint(720, 1281)
        sleep("500")
        gjfz.图片查找("魔法", 323, 710, 739, 1330, 1)
        sleep("200")

        res = true;
    } else if (points && points.length === 2) {
        zd = true
        ocrjq.白色旗仓库管理员()
        ocrjq.仓库管理员()
        //点击行数
        clickPoint(292, 590)
        sleep("500")
        let x11 = 0
        while (true) {
            let x1 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
            if (x1) {
                logd("点击血色")
                break;
            } else {
                x11++
                sleep("500")
                if (x11 === 4) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x11 === 6) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x11 === 8) {
                    sleep("500")
                    loge("没有血色茶花")
                    return
                }
            }

        }
        sleep("1000")
        let x22 = 0
        while (true) {
            let x2 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
            if (x2) {
                logd("点击血色")
                break;
            } else {
                x22++
                sleep("500")
                if (x22 === 4) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x22 === 6) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x22 === 8) {
                    sleep("500")
                    loge("没有血色茶花")
                    return
                }
            }

        }
        sleep("1000")
        let x33 = 0
        while (true) {
            let x3 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
            if (x3) {
                logd("点击血色")
                break;
            } else {
                x33++
                sleep("500")
                if (x33 === 4) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x33 === 6) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x33 === 8) {
                    sleep("500")
                    loge("没有血色茶花")
                    return
                }
            }

        }
        sleep("1000")
        let x44 = 0
        while (true) {
            let x4 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
            if (x4) {
                logd("点击血色")
                break;
            } else {
                x44++
                sleep("500")
                if (x44 === 4) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x44 === 6) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x44 === 8) {
                    sleep("500")
                    loge("没有血色茶花")
                    return
                }
            }

        }
        sleep("1000")
        let x55 = 0
        while (true) {
            let x5 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
            if (x5) {
                logd("点击血色")
                break;
            } else {
                x55++
                sleep("500")
                if (x55 === 4) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x55 === 6) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x55 === 8) {
                    sleep("500")
                    loge("没有血色茶花")
                    return
                }
            }

        }
        sleep("1000")
        let x66 = 0
        while (true) {
            let x6 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
            if (x6) {
                logd("点击血色")
                break;
            } else {
                x66++
                sleep("500")
                if (x66 === 4) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x66 === 6) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x66 === 8) {
                    sleep("500")
                    loge("没有血色茶花")
                    return
                }
            }

        }
        sleep("1000")
        let x77 = 0
        while (true) {
            let x7 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
            if (x7) {
                logd("点击血色")
                break;
            } else {
                x77++
                sleep("500")
                if (x77 === 4) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x77 === 6) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x77 === 8) {
                    sleep("500")
                    loge("没有血色茶花")
                    return
                }
            }

        }
        // sleep("1000")
        // let x88 = 0
        // while (true){
        //     let x8 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
        //     if (x8){
        //         logd("点击血色")
        //         break;
        //     }else {
        //         sleep("500")
        //         if (x88===5){
        //             sleep("500")
        //             clickPoint(100, 377)
        //         }
        //         if (x88===8){
        //             sleep("500")
        //             loge("没有血色茶花")
        //             return
        //         }
        //     }
        //
        // }
        // sleep("1000")
        // let x99 = 0
        // while (true){
        //     let x9 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
        //     if (x9){
        //         logd("点击血色")
        //         break;
        //     }else {
        //         sleep("500")
        //         if (x99===5){
        //             sleep("500")
        //             clickPoint(100, 377)
        //         }
        //         if (x99===8){
        //             sleep("500")
        //             loge("没有血色茶花")
        //             return
        //         }
        //     }
        //
        // }
        sleep("500")
        clickPoint(692, 1117)
        sleep("800")
        clickPoint(720, 1281)
        sleep("500")
        gjfz.图片查找("气血", 323, 710, 739, 1330, 1)
        sleep("500")
        clickPoint(720, 1281)
        sleep("500")
        gjfz.图片查找("魔法", 323, 710, 739, 1330, 1)
        sleep("200")
        res = true;
    } else if (points && points.length === 3) {
        zd = true
        ocrjq.白色旗仓库管理员()
        ocrjq.仓库管理员()
        //点击行数
        clickPoint(292, 590)
        sleep("500")
        let x11 = 0
        while (true) {
            let x1 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
            if (x1) {
                logd("点击血色")
                break;
            } else {
                x11++
                sleep("500")
                if (x11 === 4) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x11 === 6) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x11 === 8) {
                    sleep("500")
                    loge("没有血色茶花")
                    return
                }
            }

        }
        sleep("1000")
        let x22 = 0
        while (true) {
            let x2 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
            if (x2) {
                logd("点击血色")
                break;
            } else {
                x22++
                sleep("500")
                if (x22 === 4) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x22 === 6) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x22 === 8) {
                    sleep("500")
                    loge("没有血色茶花")
                    return
                }
            }

        }
        sleep("1000")
        let x33 = 0
        while (true) {
            let x3 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
            if (x3) {
                logd("点击血色")
                break;
            } else {
                x33++
                sleep("500")
                if (x33 === 4) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x33 === 6) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x33 === 8) {
                    sleep("500")
                    loge("没有血色茶花")
                    return
                }
            }

        }
        sleep("1000")
        let x44 = 0
        while (true) {
            let x4 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
            if (x4) {
                logd("点击血色")
                break;
            } else {
                x44++
                sleep("500")
                if (x44 === 4) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x44 === 6) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x44 === 8) {
                    sleep("500")
                    loge("没有血色茶花")
                    return
                }
            }

        }
        sleep("1000")
        let x55 = 0
        while (true) {
            let x5 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
            if (x5) {
                logd("点击血色")
                break;
            } else {
                x55++
                sleep("500")
                if (x55 === 4) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x55 === 6) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x55 === 8) {
                    sleep("500")
                    loge("没有血色茶花")
                    return
                }
            }

        }
        sleep("1000")
        let x66 = 0
        while (true) {
            let x6 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
            if (x6) {
                logd("点击血色")
                break;
            } else {
                x66++
                sleep("500")
                if (x66 === 4) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x66 === 6) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x66 === 8) {
                    sleep("500")
                    loge("没有血色茶花")
                    return
                }
            }

        }
        // sleep("1000")
        // let x77 = 0
        // while (true){
        //     let x7 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
        //     if (x7){
        //         logd("点击血色")
        //         break;
        //     }else {
        //         sleep("500")
        //         if (x77===5){
        //             sleep("500")
        //             clickPoint(100, 377)
        //         }
        //         if (x77===8){
        //             sleep("500")
        //             loge("没有血色茶花")
        //             return
        //         }
        //     }
        //
        // }
        // sleep("1000")
        // let x88 = 0
        // while (true){
        //     let x8 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
        //     if (x8){
        //         logd("点击血色")
        //         break;
        //     }else {
        //         sleep("500")
        //         if (x88===5){
        //             sleep("500")
        //             clickPoint(100, 377)
        //         }
        //         if (x88===8){
        //             sleep("500")
        //             loge("没有血色茶花")
        //             return
        //         }
        //     }
        // }
        sleep("500")
        clickPoint(692, 1117)
        sleep("800")
        clickPoint(720, 1281)
        sleep("500")
        gjfz.图片查找("气血", 323, 710, 739, 1330, 1)
        sleep("500")
        clickPoint(720, 1281)
        sleep("500")
        gjfz.图片查找("魔法", 323, 710, 739, 1330, 1)
        sleep("200")
        res = true;
    } else if (points && points.length === 4) {
       zd = true
        ocrjq.白色旗仓库管理员()
        ocrjq.仓库管理员()
        //点击行数
        clickPoint(292, 590)
        sleep("500")
        let x11 = 0
        while (true) {
            let x1 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
            if (x1) {
                logd("点击血色")
                break;
            } else {
                x11++
                sleep("500")
                if (x11 === 4) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x11 === 6) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x11 === 8) {
                    sleep("500")
                    loge("没有血色茶花")
                    return
                }
            }

        }
        sleep("1000")
        let x22 = 0
        while (true) {
            let x2 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
            if (x2) {
                logd("点击血色")
                break;
            } else {
                x22++
                sleep("500")
                if (x22 === 4) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x22 === 6) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x22 === 8) {
                    sleep("500")
                    loge("没有血色茶花")
                    return
                }
            }

        }
        sleep("1000")
        let x33 = 0
        while (true) {
            let x3 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
            if (x3) {
                logd("点击血色")
                break;
            } else {
                x33++
                sleep("500")
                if (x33 === 4) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x33 === 6) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x33 === 8) {
                    sleep("500")
                    loge("没有血色茶花")
                    return
                }
            }

        }
        sleep("1000")
        let x44 = 0
        while (true) {
            let x4 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
            if (x4) {
                logd("点击血色")
                break;
            } else {
                x44++
                sleep("500")
                if (x44 === 4) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x44 === 6) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x44 === 8) {
                    sleep("500")
                    loge("没有血色茶花")
                    return
                }
            }

        }
        sleep("1000")
        let x55 = 0
        while (true) {
            let x5 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
            if (x5) {
                logd("点击血色")
                break;
            } else {
                x55++
                sleep("500")
                if (x55 === 4) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x55 === 6) {
                    sleep("500")
                    clickPoint(100, 377)
                }
                if (x55 === 8) {
                    sleep("500")
                    loge("没有血色茶花")
                    return
                }
            }

        }
        // sleep("1000")
        // let x66 = 0
        // while (true){
        //     let x6 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
        //     if (x6){
        //         logd("点击血色")
        //         break;
        //     }else {
        //         x66++
        //         sleep("500")
        //         if (x66===4){
        //             sleep("500")
        //             clickPoint(100, 377)
        //         }
        //         if (x66===6){
        //             sleep("500")
        //             clickPoint(100, 377)
        //         }
        //         if (x66===8){
        //             sleep("500")
        //             loge("没有血色茶花")
        //             return
        //         }
        //     }
        //
        // }
        // sleep("1000")
        // let x77 = 0
        // while (true){
        //     let x7 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
        //     if (x7){
        //         logd("点击血色")
        //         break;
        //     }else {
        //         sleep("500")
        //         if (x77===5){
        //             sleep("500")
        //             clickPoint(100, 377)
        //         }
        //         if (x77===8){
        //             sleep("500")
        //             loge("没有血色茶花")
        //             return
        //         }
        //     }
        //
        // }
        // sleep("1000")
        // let x88 = 0
        // while (true){
        //     let x8 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
        //     if (x8){
        //         logd("点击血色")
        //         break;
        //     }else {
        //         sleep("500")
        //         if (x88===5){
        //             sleep("500")
        //             clickPoint(100, 377)
        //         }
        //         if (x88===8){
        //             sleep("500")
        //             loge("没有血色茶花")
        //             return
        //         }
        //     }
        // }
        sleep("500")
        clickPoint(692, 1117)
        sleep("800")
        clickPoint(720, 1281)
        sleep("500")
        gjfz.图片查找("气血", 323, 710, 739, 1330, 1)
        sleep("500")
        clickPoint(720, 1281)
        sleep("500")
        gjfz.图片查找("魔法", 323, 710, 739, 1330, 1)
        sleep("200")
        res = true;
    }
    //回收图片
    imageHandlerIOS.recycle(srcMat);
    imageHandlerIOS.recycle(tempMat);
    return zd;
}
// }
// Gjfz_function.prototype.血色茶花=function(name,x,y,x1,y1,ss){
//     //申请完权限至少等1s(垃圾设备多加点)再截图,否则会截不到图
//     let res = false;
//     let sms=readResAutoImage(name+".png");
//     //抓取屏幕
//     sleep(300);
//     let aimage = image.captureFullScreen();
//     logd("aimage "+aimage);
//     if (aimage != null) {
//         //在图片中查找
//         sleep(500);
//         let points = image.findImage(aimage, sms,x, y, x1, y1,0.7, ss, 21, 5);
//         logd("points " + JSON.stringify(points));
//         //这玩意是个数组
//         if(points && points.length === 1 || points && points.length === 0){
//             ocrjq.白色旗仓库管理员()
//             ocrjq.仓库管理员()
//             //点击行数
//             clickPoint(292, 590)
//             sleep("500")
//                         let x11 = 0
//                         while (true){
//                             let x1 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//                             if (x1){
//                                   logd("点击血色")
//                                   break;
//                             }else {
//                                 x11++
//                              sleep("500")
//                                 if (x11===4){
//                                     sleep("500")
//                                     clickPoint(100, 377)
//                                 }
//                                 if (x11===6){
//                                     sleep("500")
//                                     clickPoint(100, 377)
//                                 }
//                                 if (x11===8){
//                                     sleep("500")
//                                     loge("没有血色茶花")
//                                     return
//                                 }
//                             }
//
//                         }
//                         sleep("1000")
//                         let x22 = 0
//                         while (true){
//                             let x2 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//                             if (x2){
//                                 logd("点击血色")
//                                 break;
//                             }else {
//                                 x22++
//                                 sleep("500")
//                                 if (x22===4){
//                                     sleep("500")
//                                     clickPoint(100, 377)
//                                 }
//                                 if (x22===6){
//                                     sleep("500")
//                                     clickPoint(100, 377)
//                                 }
//                                 if (x22===8){
//                                     sleep("500")
//                                     loge("没有血色茶花")
//                                     return
//                                 }
//                             }
//
//                         }
//                          sleep("1000")
//                         let x33 = 0
//                         while (true){
//                             let x3 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//                             if (x3){
//                                 logd("点击血色")
//                                 break;
//                             }else {
//                                 x33++
//                                 sleep("500")
//                                 if (x33===4){
//                                     sleep("500")
//                                     clickPoint(100, 377)
//                                 }
//                                 if (x33===6){
//                                     sleep("500")
//                                     clickPoint(100, 377)
//                                 }
//                                 if (x33===8){
//                                     sleep("500")
//                                     loge("没有血色茶花")
//                                     return
//                                 }
//                             }
//
//                         }
//             sleep("1000")
//                         let x44 = 0
//                         while (true){
//                             let x4 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//                             if (x4){
//                                 logd("点击血色")
//                                 break;
//                             }else {
//                                 x44++
//                                 sleep("500")
//                                 if (x44===4){
//                                     sleep("500")
//                                     clickPoint(100, 377)
//                                 }
//                                 if (x44===6){
//                                     sleep("500")
//                                     clickPoint(100, 377)
//                                 }
//                                 if (x44===8){
//                                     sleep("500")
//                                     loge("没有血色茶花")
//                                     return
//                                 }
//                             }
//
//                         }
//             sleep("1000")
//                         let x55 = 0
//                         while (true){
//                             let x5 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//                             if (x5){
//                                 logd("点击血色")
//                                 break;
//                             }else {
//                                 x55++
//                                 sleep("500")
//                                 if (x55===4){
//                                     sleep("500")
//                                     clickPoint(100, 377)
//                                 }
//                                 if (x55===6){
//                                     sleep("500")
//                                     clickPoint(100, 377)
//                                 }
//                                 if (x55===8){
//                                     sleep("500")
//                                     loge("没有血色茶花")
//                                     return
//                                 }
//                             }
//
//                         }
//             sleep("1000")
//                         let x66 = 0
//                         while (true){
//                             let x6 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//                             if (x6){
//                                 logd("点击血色")
//                                 break;
//                             }else {
//                                 x66++
//                                 sleep("500")
//                                 if (x66===4){
//                                     sleep("500")
//                                     clickPoint(100, 377)
//                                 }
//                                 if (x66===6){
//                                     sleep("500")
//                                     clickPoint(100, 377)
//                                 }
//                                 if (x66===8){
//                                     sleep("500")
//                                     loge("没有血色茶花")
//                                     return
//                                 }
//                             }
//
//                         }
//             sleep("1000")
//                         let x77 = 0
//                         while (true){
//                             let x7 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//                             if (x7){
//                                 logd("点击血色")
//                                 break;
//                             }else {
//                                 x77++
//                                 sleep("500")
//                                 if (x77===4){
//                                     sleep("500")
//                                     clickPoint(100, 377)
//                                 }
//                                 if (x77===6){
//                                     sleep("500")
//                                     clickPoint(100, 377)
//                                 }
//                                 if (x77===8){
//                                     sleep("500")
//                                     loge("没有血色茶花")
//                                     return
//                                 }
//                             }
//
//                         }
//             sleep("1000")
//                         let x88 = 0
//                         while (true){
//                             let x8 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//                             if (x8){
//                                 logd("点击血色")
//                                 break;
//                             }else {
//                                 x88++
//                                 sleep("500")
//                                 if (x88===4){
//                                     sleep("500")
//                                     clickPoint(100, 377)
//                                 }
//                                 if (x88===6){
//                                     sleep("500")
//                                     clickPoint(100, 377)
//                                 }
//                                 if (x88===8){
//                                     sleep("500")
//                                     loge("没有血色茶花")
//                                     return
//                                 }
//                             }
//
//                         }
//             //sleep("1000")
//             //             let x99 = 0
//             //             while (true){
//             //                 let x9 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//             //                 if (x9){
//             //                     logd("点击血色")
//             //                     break;
//             //                 }else {
//             //                     sleep("500")
//             //                     if (x99===5){
//             //                         sleep("500")
//             //                         clickPoint(100, 377)
//             //                     }
//             //                     if (x99===8){
//             //                         sleep("500")
//             //                         loge("没有血色茶花")
//             //                         return
//             //                     }
//             //                 }
//             //
//             //             }
//             // sleep("1000")
//             //             let x00 = 0
//             //             while (true){
//             //                 let x0 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//             //                 if (x0){
//             //                     logd("点击血色")
//             //                     break;
//             //                 }else {
//             //                     sleep("500")
//             //                     if (x00===5){
//             //                         sleep("500")
//             //                         clickPoint(100, 377)
//             //                     }
//             //                     if (x00===8){
//             //                         sleep("500")
//             //                         loge("没有血色茶花")
//             //                         return
//             //                     }
//             //                 }
//             //             }
//             sleep("500")
//             clickPoint(692, 1117)
//             sleep("800")
//             clickPoint(720,1281)
//             sleep("500")
//             gjfz.图片查找("气血", 323,710,739,1330,1)
//             sleep("500")
//             clickPoint(720,1281)
//             sleep("500")
//             gjfz.图片查找("魔法", 323,710,739,1330,1)
//             sleep("200")
//
//             res = true;
//         }
//         if(points && points.length === 2){
//             ocrjq.白色旗仓库管理员()
//             ocrjq.仓库管理员()
//             //点击行数
//             clickPoint(292, 590)
//             sleep("500")
//             let x11 = 0
//             while (true){
//                 let x1 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//                 if (x1){
//                     logd("点击血色")
//                     break;
//                 }else {
//                     x11++
//                     sleep("500")
//                     if (x11===4){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x11===6){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x11===8){
//                         sleep("500")
//                         loge("没有血色茶花")
//                         return
//                     }
//                 }
//
//             }
//             sleep("1000")
//             let x22 = 0
//             while (true){
//                 let x2 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//                 if (x2){
//                     logd("点击血色")
//                     break;
//                 }else {
//                     x22++
//                     sleep("500")
//                     if (x22===4){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x22===6){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x22===8){
//                         sleep("500")
//                         loge("没有血色茶花")
//                         return
//                     }
//                 }
//
//             }
//             sleep("1000")
//             let x33 = 0
//             while (true){
//                 let x3 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//                 if (x3){
//                     logd("点击血色")
//                     break;
//                 }else {
//                     x33++
//                     sleep("500")
//                     if (x33===4){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x33===6){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x33===8){
//                         sleep("500")
//                         loge("没有血色茶花")
//                         return
//                     }
//                 }
//
//             }
//             sleep("1000")
//             let x44 = 0
//             while (true){
//                 let x4 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//                 if (x4){
//                     logd("点击血色")
//                     break;
//                 }else {
//                     x44++
//                     sleep("500")
//                     if (x44===4){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x44===6){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x44===8){
//                         sleep("500")
//                         loge("没有血色茶花")
//                         return
//                     }
//                 }
//
//             }
//             sleep("1000")
//             let x55 = 0
//             while (true){
//                 let x5 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//                 if (x5){
//                     logd("点击血色")
//                     break;
//                 }else {
//                     x55++
//                     sleep("500")
//                     if (x55===4){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x55===6){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x55===8){
//                         sleep("500")
//                         loge("没有血色茶花")
//                         return
//                     }
//                 }
//
//             }
//             sleep("1000")
//             let x66 = 0
//             while (true){
//                 let x6 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//                 if (x6){
//                     logd("点击血色")
//                     break;
//                 }else {
//                     x66++
//                     sleep("500")
//                     if (x66===4){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x66===6){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x66===8){
//                         sleep("500")
//                         loge("没有血色茶花")
//                         return
//                     }
//                 }
//
//             }
//             sleep("1000")
//             let x77 = 0
//             while (true){
//                 let x7 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//                 if (x7){
//                     logd("点击血色")
//                     break;
//                 }else {
//                     x77++
//                     sleep("500")
//                     if (x77===4){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x77===6){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x77===8){
//                         sleep("500")
//                         loge("没有血色茶花")
//                         return
//                     }
//                 }
//
//             }
//             // sleep("1000")
//             // let x88 = 0
//             // while (true){
//             //     let x8 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//             //     if (x8){
//             //         logd("点击血色")
//             //         break;
//             //     }else {
//             //         sleep("500")
//             //         if (x88===5){
//             //             sleep("500")
//             //             clickPoint(100, 377)
//             //         }
//             //         if (x88===8){
//             //             sleep("500")
//             //             loge("没有血色茶花")
//             //             return
//             //         }
//             //     }
//             //
//             // }
//             // sleep("1000")
//             // let x99 = 0
//             // while (true){
//             //     let x9 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//             //     if (x9){
//             //         logd("点击血色")
//             //         break;
//             //     }else {
//             //         sleep("500")
//             //         if (x99===5){
//             //             sleep("500")
//             //             clickPoint(100, 377)
//             //         }
//             //         if (x99===8){
//             //             sleep("500")
//             //             loge("没有血色茶花")
//             //             return
//             //         }
//             //     }
//             //
//             // }
//             sleep("500")
//             clickPoint(692, 1117)
//             sleep("800")
//             clickPoint(720,1281)
//             sleep("500")
//             gjfz.图片查找("气血", 323,710,739,1330,1)
//             sleep("500")
//             clickPoint(720,1281)
//             sleep("500")
//             gjfz.图片查找("魔法", 323,710,739,1330,1)
//             sleep("200")
//             res = true;
//         }
//         if(points && points.length === 3){
//             ocrjq.白色旗仓库管理员()
//             ocrjq.仓库管理员()
//             //点击行数
//             clickPoint(292, 590)
//             sleep("500")
//             let x11 = 0
//             while (true){
//                 let x1 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//                 if (x1){
//                     logd("点击血色")
//                     break;
//                 }else {
//                     x11++
//                     sleep("500")
//                     if (x11===4){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x11===6){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x11===8){
//                         sleep("500")
//                         loge("没有血色茶花")
//                         return
//                     }
//                 }
//
//             }
//             sleep("1000")
//             let x22 = 0
//             while (true){
//                 let x2 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//                 if (x2){
//                     logd("点击血色")
//                     break;
//                 }else {
//                     x22++
//                     sleep("500")
//                     if (x22===4){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x22===6){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x22===8){
//                         sleep("500")
//                         loge("没有血色茶花")
//                         return
//                     }
//                 }
//
//             }
//             sleep("1000")
//             let x33 = 0
//             while (true){
//                 let x3 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//                 if (x3){
//                     logd("点击血色")
//                     break;
//                 }else {
//                     x33++
//                     sleep("500")
//                     if (x33===4){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x33===6){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x33===8){
//                         sleep("500")
//                         loge("没有血色茶花")
//                         return
//                     }
//                 }
//
//             }
//             sleep("1000")
//             let x44 = 0
//             while (true){
//                 let x4 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//                 if (x4){
//                     logd("点击血色")
//                     break;
//                 }else {
//                     x44++
//                     sleep("500")
//                     if (x44===4){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x44===6){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x44===8){
//                         sleep("500")
//                         loge("没有血色茶花")
//                         return
//                     }
//                 }
//
//             }
//             sleep("1000")
//             let x55 = 0
//             while (true){
//                 let x5 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//                 if (x5){
//                     logd("点击血色")
//                     break;
//                 }else {
//                     x55++
//                     sleep("500")
//                     if (x55===4){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x55===6){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x55===8){
//                         sleep("500")
//                         loge("没有血色茶花")
//                         return
//                     }
//                 }
//
//             }
//             sleep("1000")
//             let x66 = 0
//             while (true){
//                 let x6 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//                 if (x6){
//                     logd("点击血色")
//                     break;
//                 }else {
//                     x66++
//                     sleep("500")
//                     if (x66===4){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x66===6){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x66===8){
//                         sleep("500")
//                         loge("没有血色茶花")
//                         return
//                     }
//                 }
//
//             }
//             // sleep("1000")
//             // let x77 = 0
//             // while (true){
//             //     let x7 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//             //     if (x7){
//             //         logd("点击血色")
//             //         break;
//             //     }else {
//             //         sleep("500")
//             //         if (x77===5){
//             //             sleep("500")
//             //             clickPoint(100, 377)
//             //         }
//             //         if (x77===8){
//             //             sleep("500")
//             //             loge("没有血色茶花")
//             //             return
//             //         }
//             //     }
//             //
//             // }
//             // sleep("1000")
//             // let x88 = 0
//             // while (true){
//             //     let x8 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//             //     if (x8){
//             //         logd("点击血色")
//             //         break;
//             //     }else {
//             //         sleep("500")
//             //         if (x88===5){
//             //             sleep("500")
//             //             clickPoint(100, 377)
//             //         }
//             //         if (x88===8){
//             //             sleep("500")
//             //             loge("没有血色茶花")
//             //             return
//             //         }
//             //     }
//             // }
//             sleep("500")
//             clickPoint(692, 1117)
//             sleep("800")
//             clickPoint(720,1281)
//             sleep("500")
//             gjfz.图片查找("气血", 323,710,739,1330,1)
//             sleep("500")
//             clickPoint(720,1281)
//             sleep("500")
//             gjfz.图片查找("魔法", 323,710,739,1330,1)
//            sleep("200")
//             res = true;
//         }
//         if(points && points.length === 4){
//             ocrjq.白色旗仓库管理员()
//             ocrjq.仓库管理员()
//             //点击行数
//             clickPoint(292, 590)
//             sleep("500")
//             let x11 = 0
//             while (true){
//                 let x1 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//                 if (x1){
//                     logd("点击血色")
//                     break;
//                 }else {
//                     x11++
//                     sleep("500")
//                     if (x11===4){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x11===6){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x11===8){
//                         sleep("500")
//                         loge("没有血色茶花")
//                         return
//                     }
//                 }
//
//             }
//             sleep("1000")
//             let x22 = 0
//             while (true){
//                 let x2 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//                 if (x2){
//                     logd("点击血色")
//                     break;
//                 }else {
//                     x22++
//                     sleep("500")
//                     if (x22===4){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x22===6){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x22===8){
//                         sleep("500")
//                         loge("没有血色茶花")
//                         return
//                     }
//                 }
//
//             }
//             sleep("1000")
//             let x33 = 0
//             while (true){
//                 let x3 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//                 if (x3){
//                     logd("点击血色")
//                     break;
//                 }else {
//                     x33++
//                     sleep("500")
//                     if (x33===4){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x33===6){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x33===8){
//                         sleep("500")
//                         loge("没有血色茶花")
//                         return
//                     }
//                 }
//
//             }
//             sleep("1000")
//             let x44 = 0
//             while (true){
//                 let x4 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//                 if (x4){
//                     logd("点击血色")
//                     break;
//                 }else {
//                     x44++
//                     sleep("500")
//                     if (x44===4){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x44===6){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x44===8){
//                         sleep("500")
//                         loge("没有血色茶花")
//                         return
//                     }
//                 }
//
//             }
//             sleep("1000")
//             let x55 = 0
//             while (true){
//                 let x5 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//                 if (x5){
//                     logd("点击血色")
//                     break;
//                 }else {
//                     x55++
//                     sleep("500")
//                     if (x55===4){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x55===6){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x55===8){
//                         sleep("500")
//                         loge("没有血色茶花")
//                         return
//                     }
//                 }
//
//             }
//             // sleep("1000")
//             // let x66 = 0
//             // while (true){
//             //     let x6 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//             //     if (x6){
//             //         logd("点击血色")
//             //         break;
//             //     }else {
//             //         x66++
//             //         sleep("500")
//             //         if (x66===4){
//             //             sleep("500")
//             //             clickPoint(100, 377)
//             //         }
//             //         if (x66===6){
//             //             sleep("500")
//             //             clickPoint(100, 377)
//             //         }
//             //         if (x66===8){
//             //             sleep("500")
//             //             loge("没有血色茶花")
//             //             return
//             //         }
//             //     }
//             //
//             // }
//             // sleep("1000")
//             // let x77 = 0
//             // while (true){
//             //     let x7 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//             //     if (x7){
//             //         logd("点击血色")
//             //         break;
//             //     }else {
//             //         sleep("500")
//             //         if (x77===5){
//             //             sleep("500")
//             //             clickPoint(100, 377)
//             //         }
//             //         if (x77===8){
//             //             sleep("500")
//             //             loge("没有血色茶花")
//             //             return
//             //         }
//             //     }
//             //
//             // }
//             // sleep("1000")
//             // let x88 = 0
//             // while (true){
//             //     let x8 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//             //     if (x8){
//             //         logd("点击血色")
//             //         break;
//             //     }else {
//             //         sleep("500")
//             //         if (x88===5){
//             //             sleep("500")
//             //             clickPoint(100, 377)
//             //         }
//             //         if (x88===8){
//             //             sleep("500")
//             //             loge("没有血色茶花")
//             //             return
//             //         }
//             //     }
//             // }
//             sleep("500")
//             clickPoint(692, 1117)
//             sleep("800")
//             clickPoint(720,1281)
//             sleep("500")
//             gjfz.图片查找("气血", 323,710,739,1330,1)
//             sleep("500")
//             clickPoint(720,1281)
//             sleep("500")
//             gjfz.图片查找("魔法", 323,710,739,1330,1)
//             sleep("200")
//             res = true;
//         }
//         if(points && points.length === 5){
//             ocrjq.白色旗仓库管理员()
//             ocrjq.仓库管理员()
//             //点击行数
//             clickPoint(292, 590)
//             sleep("500")
//             let x11 = 0
//             while (true){
//                 let x1 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//                 if (x1){
//                     logd("点击血色")
//                     break;
//                 }else {
//                     x11++
//                     sleep("500")
//                     if (x11===4){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x11===6){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x11===8){
//                         sleep("500")
//                         loge("没有血色茶花")
//                         return
//                     }
//                 }
//
//             }
//             sleep("1000")
//             let x22 = 0
//             while (true){
//                 let x2 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//                 if (x2){
//                     logd("点击血色")
//                     break;
//                 }else {
//                     x22++
//                     sleep("500")
//                     if (x22===4){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x22===6){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x22===8){
//                         sleep("500")
//                         loge("没有血色茶花")
//                         return
//                     }
//                 }
//
//             }
//             sleep("1000")
//             let x33 = 0
//             while (true){
//                 let x3 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//                 if (x3){
//                     logd("点击血色")
//                     break;
//                 }else {
//                     x33++
//                     sleep("500")
//                     if (x33===4){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x33===6){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x33===8){
//                         sleep("500")
//                         loge("没有血色茶花")
//                         return
//                     }
//                 }
//
//             }
//             sleep("1000")
//             let x44 = 0
//             while (true){
//                 let x4 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//                 if (x4){
//                     logd("点击血色")
//                     break;
//                 }else {
//                     x44++
//                     sleep("500")
//                     if (x44===4){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x44===6){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x44===8){
//                         sleep("500")
//                         loge("没有血色茶花")
//                         return
//                     }
//                 }
//
//             }
//             // sleep("1000")
//             // let x55 = 0
//             // while (true){
//             //     let x5 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//             //     if (x5){
//             //         logd("点击血色")
//             //         break;
//             //     }else {
//             //         x55++
//             //         sleep("500")
//             //         if (x55===4){
//             //             sleep("500")
//             //             clickPoint(100, 377)
//             //         }
//             //         if (x55===6){
//             //             sleep("500")
//             //             clickPoint(100, 377)
//             //         }
//             //         if (x55===8){
//             //             sleep("500")
//             //             loge("没有血色茶花")
//             //             return
//             //         }
//             //     }
//             //
//             // }
//             // sleep("1000")
//             // let x66 = 0
//             // while (true){
//             //     let x6 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//             //     if (x6){
//             //         logd("点击血色")
//             //         break;
//             //     }else {
//             //         x66++
//             //         sleep("500")
//             //         if (x66===4){
//             //             sleep("500")
//             //             clickPoint(100, 377)
//             //         }
//             //         if (x66===6){
//             //             sleep("500")
//             //             clickPoint(100, 377)
//             //         }
//             //         if (x66===8){
//             //             sleep("500")
//             //             loge("没有血色茶花")
//             //             return
//             //         }
//             //     }
//             //
//             // }
//             // sleep("1000")
//             // let x77 = 0
//             // while (true){
//             //     let x7 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//             //     if (x7){
//             //         logd("点击血色")
//             //         break;
//             //     }else {
//             //         sleep("500")
//             //         if (x77===5){
//             //             sleep("500")
//             //             clickPoint(100, 377)
//             //         }
//             //         if (x77===8){
//             //             sleep("500")
//             //             loge("没有血色茶花")
//             //             return
//             //         }
//             //     }
//             //
//             // }
//             // sleep("1000")
//             // let x88 = 0
//             // while (true){
//             //     let x8 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//             //     if (x8){
//             //         logd("点击血色")
//             //         break;
//             //     }else {
//             //         sleep("500")
//             //         if (x88===5){
//             //             sleep("500")
//             //             clickPoint(100, 377)
//             //         }
//             //         if (x88===8){
//             //             sleep("500")
//             //             loge("没有血色茶花")
//             //             return
//             //         }
//             //     }
//             // }
//             sleep("500")
//             clickPoint(692, 1117)
//             sleep("800")
//             clickPoint(720,1281)
//             sleep("500")
//             gjfz.图片查找("气血", 323,710,739,1330,1)
//             sleep("500")
//             clickPoint(720,1281)
//             sleep("500")
//             gjfz.图片查找("魔法", 323,710,739,1330,1)
//             sleep("200")
//             res = true;
//         }
//         if(points && points.length === 6){
//             ocrjq.白色旗仓库管理员()
//             ocrjq.仓库管理员()
//             //点击行数
//             clickPoint(292, 590)
//             sleep("500")
//             let x11 = 0
//             while (true){
//                 let x1 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//                 if (x1){
//                     logd("点击血色")
//                     break;
//                 }else {
//                     x11++
//                     sleep("500")
//                     if (x11===4){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x11===6){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x11===8){
//                         sleep("500")
//                         loge("没有血色茶花")
//                         return
//                     }
//                 }
//
//             }
//             sleep("1000")
//             let x22 = 0
//             while (true){
//                 let x2 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//                 if (x2){
//                     logd("点击血色")
//                     break;
//                 }else {
//                     x22++
//                     sleep("500")
//                     if (x22===4){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x22===6){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x22===8){
//                         sleep("500")
//                         loge("没有血色茶花")
//                         return
//                     }
//                 }
//
//             }
//             sleep("1000")
//             let x33 = 0
//             while (true){
//                 let x3 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//                 if (x3){
//                     logd("点击血色")
//                     break;
//                 }else {
//                     x33++
//                     sleep("500")
//                     if (x33===4){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x33===6){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x33===8){
//                         sleep("500")
//                         loge("没有血色茶花")
//                         return
//                     }
//                 }
//
//             }
//             // sleep("1000")
//             // let x44 = 0
//             // while (true){
//             //     let x4 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//             //     if (x4){
//             //         logd("点击血色")
//             //         break;
//             //     }else {
//             //         x44++
//             //         sleep("500")
//             //         if (x44===4){
//             //             sleep("500")
//             //             clickPoint(100, 377)
//             //         }
//             //         if (x44===6){
//             //             sleep("500")
//             //             clickPoint(100, 377)
//             //         }
//             //         if (x44===8){
//             //             sleep("500")
//             //             loge("没有血色茶花")
//             //             return
//             //         }
//             //     }
//             //
//             // }
//             // sleep("1000")
//             // let x55 = 0
//             // while (true){
//             //     let x5 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//             //     if (x5){
//             //         logd("点击血色")
//             //         break;
//             //     }else {
//             //         x55++
//             //         sleep("500")
//             //         if (x55===4){
//             //             sleep("500")
//             //             clickPoint(100, 377)
//             //         }
//             //         if (x55===6){
//             //             sleep("500")
//             //             clickPoint(100, 377)
//             //         }
//             //         if (x55===8){
//             //             sleep("500")
//             //             loge("没有血色茶花")
//             //             return
//             //         }
//             //     }
//             //
//             // }
//             // sleep("1000")
//             // let x66 = 0
//             // while (true){
//             //     let x6 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//             //     if (x6){
//             //         logd("点击血色")
//             //         break;
//             //     }else {
//             //         x66++
//             //         sleep("500")
//             //         if (x66===4){
//             //             sleep("500")
//             //             clickPoint(100, 377)
//             //         }
//             //         if (x66===6){
//             //             sleep("500")
//             //             clickPoint(100, 377)
//             //         }
//             //         if (x66===8){
//             //             sleep("500")
//             //             loge("没有血色茶花")
//             //             return
//             //         }
//             //     }
//             //
//             // }
//             // sleep("1000")
//             // let x77 = 0
//             // while (true){
//             //     let x7 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//             //     if (x7){
//             //         logd("点击血色")
//             //         break;
//             //     }else {
//             //         x77++
//             //         sleep("500")
//             //         if (x77===5){
//             //             sleep("500")
//             //             clickPoint(100, 377)
//             //         }
//             //         if (x77===8){
//             //             sleep("500")
//             //             loge("没有血色茶花")
//             //             return
//             //         }
//             //     }
//             //
//             // }
//             // sleep("1000")
//             // let x88 = 0
//             // while (true){
//             //     let x8 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//             //     if (x8){
//             //         logd("点击血色")
//             //         break;
//             //     }else {
//             //         x88++
//             //         sleep("500")
//             //         if (x88===5){
//             //             sleep("500")
//             //             clickPoint(100, 377)
//             //         }
//             //         if (x88===8){
//             //             sleep("500")
//             //             loge("没有血色茶花")
//             //             return
//             //         }
//             //     }
//             // }
//             // sleep("1000")
//             // let x99 = 0
//             // while (true){
//             //     let x9 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//             //     if (x9){
//             //         logd("点击血色")
//             //         break;
//             //     }else {
//             //         x99++
//             //         sleep("500")
//             //         if (x99===5){
//             //             sleep("500")
//             //             clickPoint(100, 377)
//             //         }
//             //         if (x99===8){
//             //             sleep("500")
//             //             loge("没有血色茶花")
//             //             return
//             //         }
//             //     }
//             // }
//             sleep("500")
//             clickPoint(692, 1117)
//             sleep("800")
//             clickPoint(720,1281)
//             sleep("500")
//             gjfz.图片查找("气血", 323,710,739,1330,1)
//             sleep("500")
//             clickPoint(720,1281)
//             sleep("500")
//             gjfz.图片查找("魔法", 323,710,739,1330,1)
//             sleep("200")
//             res = true;
//         }
//         if(points && points.length === 7){
//             ocrjq.白色旗仓库管理员()
//             ocrjq.仓库管理员()
//             //点击行数
//             clickPoint(292, 590)
//             sleep("500")
//             let x11 = 0
//             while (true){
//                 let x1 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//                 if (x1){
//                     logd("点击血色")
//                     break;
//                 }else {
//                     x11++
//                     sleep("500")
//                     if (x11===4){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x11===6){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x11===8){
//                         sleep("500")
//                         loge("没有血色茶花")
//                         return
//                     }
//                 }
//
//             }
//             sleep("1000")
//             let x22 = 0
//             while (true){
//                 let x2 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//                 if (x2){
//                     logd("点击血色")
//                     break;
//                 }else {
//                     x22++
//                     sleep("500")
//                     if (x22===4){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x22===6){
//                         sleep("500")
//                         clickPoint(100, 377)
//                     }
//                     if (x22===8){
//                         sleep("500")
//                         loge("没有血色茶花")
//                         return
//                     }
//                 }
//
//             }
//             // sleep("1000")
//             // let x33 = 0
//             // while (true){
//             //     let x3 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//             //     if (x3){
//             //         logd("点击血色")
//             //         break;
//             //     }else {
//             //         x33++
//             //         sleep("500")
//             //         if (x33===4){
//             //             sleep("500")
//             //             clickPoint(100, 377)
//             //         }
//             //         if (x33===6){
//             //             sleep("500")
//             //             clickPoint(100, 377)
//             //         }
//             //         if (x33===8){
//             //             sleep("500")
//             //             loge("没有血色茶花")
//             //             return
//             //         }
//             //     }
//             //
//             // }
//             // sleep("1000")
//             // let x44 = 0
//             // while (true){
//             //     let x4 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//             //     if (x4){
//             //         logd("点击血色")
//             //         break;
//             //     }else {
//             //         x44++
//             //         sleep("500")
//             //         if (x44===4){
//             //             sleep("500")
//             //             clickPoint(100, 377)
//             //         }
//             //         if (x44===6){
//             //             sleep("500")
//             //             clickPoint(100, 377)
//             //         }
//             //         if (x44===8){
//             //             sleep("500")
//             //             loge("没有血色茶花")
//             //             return
//             //         }
//             //     }
//             //
//             // }
//             // sleep("1000")
//             // let x55 = 0
//             // while (true){
//             //     let x5 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//             //     if (x5){
//             //         logd("点击血色")
//             //         break;
//             //     }else {
//             //         x55++
//             //         sleep("500")
//             //         if (x55===4){
//             //             sleep("500")
//             //             clickPoint(100, 377)
//             //         }
//             //         if (x55===6){
//             //             sleep("500")
//             //             clickPoint(100, 377)
//             //         }
//             //         if (x55===8){
//             //             sleep("500")
//             //             loge("没有血色茶花")
//             //             return
//             //         }
//             //     }
//             //
//             // }
//             // sleep("1000")
//             // let x66 = 0
//             // while (true){
//             //     let x6 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//             //     if (x6){
//             //         logd("点击血色")
//             //         break;
//             //     }else {
//             //         x66++
//             //         sleep("500")
//             //         if (x66===4){
//             //             sleep("500")
//             //             clickPoint(100, 377)
//             //         }
//             //         if (x66===6){
//             //             sleep("500")
//             //             clickPoint(100, 377)
//             //         }
//             //         if (x66===8){
//             //             sleep("500")
//             //             loge("没有血色茶花")
//             //             return
//             //         }
//             //     }
//             //
//             // }
//             // sleep("1000")
//             // let x77 = 0
//             // while (true){
//             //     let x7 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//             //     if (x7){
//             //         logd("点击血色")
//             //         break;
//             //     }else {
//             //         sleep("500")
//             //         if (x77===5){
//             //             sleep("500")
//             //             clickPoint(100, 377)
//             //         }
//             //         if (x77===8){
//             //             sleep("500")
//             //             loge("没有血色茶花")
//             //             return
//             //         }
//             //     }
//             //
//             // }
//             // sleep("1000")
//             // let x88 = 0
//             // while (true){
//             //     let x8 = gjfz.图片查找("血色茶花", 130, 112, 570, 650, 2)
//             //     if (x8){
//             //         logd("点击血色")
//             //         break;
//             //     }else {
//             //         sleep("500")
//             //         if (x88===5){
//             //             sleep("500")
//             //             clickPoint(100, 377)
//             //         }
//             //         if (x88===8){
//             //             sleep("500")
//             //             loge("没有血色茶花")
//             //             return
//             //         }
//             //     }
//             // }
//             sleep("500")
//             clickPoint(692, 1117)
//             sleep("800")
//             clickPoint(720,1281)
//             sleep("500")
//             gjfz.图片查找("气血", 323,710,739,1330,1)
//             sleep("500")
//             clickPoint(720,1281)
//             sleep("500")
//             gjfz.图片查找("魔法", 323,710,739,1330,1)
//             sleep("200")
//             res = true;
//         }
//
//         //图片要回收
//         image.recycle(aimage)
//     }
//     //图片要回收
//
//     image.recycle(sms)
//     return res;
//
// }
