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

//封装
function Ocrjq_function() {
}
var ocrjq = new Ocrjq_function();

// var icccc = 0;
Ocrjq_function.prototype.烹饪=function(){
    let a = false
    let src=imageHandlerIOS.captureScreenMat();
    let rects=imageHandlerIOS.gradientShapeMatch(src,"2",20,832,740,1324,0.9,1);
   if (rects){
       clickPoint(rects[0].left+50,rects[0].top+50)
       a=true
   }
   return a
}
Ocrjq_function.prototype.打开道具=function(){
    clickPoint(63, 1176);
    //sleep("200");
    let ix = 0 ;
    while (true) {
        sleep("200")
        let 道具人物 = gjfz.透明找图("道具人物","打开道具",414,942,724,1290,0,0.6)
        let 打开道具 = gjfz.透明找图("道具", "打开道具", 637, 454, 746, 816, 0, 0.6)
        if (打开道具 === true  || 道具人物 === true) {
            logd("打开道具");
            sleep("50")
            clickPoint(574,1165)
            return;
        } else {
            ix++;
            sleep("200");
            clickPoint(63, 1176);
            if (ix===3){
                sleep("200")
                gjfz.透明找图("给予确定", "给予确定", 6,223,141,571, 1, 0.7)
            }
            if (ix===5){
                sleep("300")
                gjfz.透明找图("给予确定", "给予确定", 6,223,141,571, 1, 0.7)
            }
            if (ix===6) {
                sleep(100);
                clickPoint(606,1266)
            }
            if (ix===8){
                sleep("200")
                clickPoint(105,388)
            }
            if (ix===9){
                sleep(300)
                gjfz.透明找图("xx","关闭",388,645,746,1256,1,0.7)
            }
            if (ix===10){
                sleep("300")
                ocrjq.白色旗()
            }
        }
    }
}
Ocrjq_function.prototype.快速打开道具=function(){
    doubleClickPoint(63, 1176);
   // sleep("200");
    let ixx = 0 ;
    while (true) {
        sleep("200")
        let 打开道具 = gjfz.透明找图("道具", "打开道具", 637, 454, 746, 816, 0, 0.6)
        if (打开道具) {
            logd("打开道具");
            sleep("50")
            clickPoint(574,1165)
            return;
        } else {
            ixx++
            clickPoint(63, 1176);
            sleep("300");
            if (ixx===8){
                sleep(100);
                clickPoint(266,473)
            }
            if (ixx===10) {
                sleep(100);
                clickPoint(380,484)
            }
        }
    }
}
Ocrjq_function.prototype.打开道具建邺=function(){
    let ixx = 0 ;
    while (true) {
        sleep("200")
        let 打开道具 = gjfz.透明找图("道具", "打开道具", 637, 454, 746, 816, 0, 0.7)
        if (打开道具) {
            logd("打开道具");
            return;
        } else {
            ixx++
            sleep("300");
            if (ixx===2){
                clickPoint(63, 1176);
            }
            if (ixx===8){
                sleep("200")
                clickPoint(105,388)
            }
        }
    }
}

Ocrjq_function.prototype.白色旗酒店老板=function(){


    sleep("200")
    let io = 0
    while (true) {
        let 白色旗 = gjfz.多点找色(2,"#090F0B-0x101010","-7|-4|#D6DAC1-0x101010,-3|13|#AD760E-0x101010,12|21|#C98101-0x101010,12|6|#D9C94F-0x101010,10|-9|#D1AF31-0x101010",163, 576, 599, 1136)
        if (白色旗) {
            //gjfz.多点找色(2,"#090F0B-0x101010","-7|-4|#D6DAC1-0x101010,-3|13|#AD760E-0x101010,12|21|#C98101-0x101010,12|6|#D9C94F-0x101010,10|-9|#D1AF31-0x101010",163, 576, 599, 1136)
            sleep("300");
            ocrjq.白色旗()
            sleep("800");
            clickPoint(687, 1110)
            sleep("800");
            clickPoint(419, 618)
            ocrjq.酒店老板执行()
            break;
        } else {
            sleep("500")
            io++;
            if (io === 3) {
                sleep("100")
                clickPoint(595, 907)
                //打开行囊
                sleep("500")
                let iooo=0;
                while (true) {
                    sleep("500")
                    let 行囊白色旗 = gjfz.精准找图("白旗子", 163, 576, 599, 1136)
                    if (行囊白色旗) {
                        logd("行囊找到白棋")
                        sleep(200);
                        clickPoint(604, 682)

                        return;
                    } else {
                        iooo++
                        sleep("300")
                        if (iooo === 8) {
                            clickPoint(647,1067)
                            logd("错误")
                        }
                    }
                }
            }
        }
    }
}
Ocrjq_function.prototype.酒店老板执行=function() {
    sleep("200")
    clickPoint(423,664)
    let ixx = 0 ;
    while (true) {
        sleep("500")
        let 酒店老板判断 = gjfz.透明找图("酒店老板判断", "酒店老板判断", 88,7,350,367, 0, 0.8)
        if (酒店老板判断) {
            logd("烹饪");
                sleep("100")
                clickPoint(572,1045)
            //}
            ocrjq.酒店老板()
            return;
        } else {
            sleep("300")
            let 判断酒店老板重叠 = gjfz.透明找图("请选择一个角色", "请选择一个角色", 22, 507, 582, 1097, 0, 0.7)
            if (判断酒店老板重叠) {
                sleep("200")
                gjfz.透明找图("酒店老板","酒店老板",22, 507, 582, 1097, 1, 0.7)
            } else {
                ixx++
                sleep("400")
                clickPoint(423,664)

                if (ixx===5){
                    ocrjq.打开道具()
                    ocrjq.白色旗酒店老板()
                    return;
                }
            }
            sleep("300")
        }
    }
}
Ocrjq_function.prototype.酒店老板=function(){
    let ixx = 0 ;
    //sleep("300")
    while (true){
        let 任务弹窗判断 = gjfz.透明找图("弹窗任务","弹窗任务", 53,27,288,499,1, 0.7)
        let 任务弹窗判断1 = gjfz.透明找图("任务弹窗","任务弹窗", 53,27,288,499,1, 0.7)
        if (任务弹窗判断===true||任务弹窗判断1===true){
            sleep("50");
           // let a = imageHandlerIOS.captureScreenMat();
           // let b = imageHandlerIOS.cropMat(a,405,1103,534,1329);
           // let c =imageHandlerIOS.rotateMat(b,270);
           // imageHandlerIOS.saveMat(c,"C:/aaa"+icccc+".png");
           // icccc++
            clickPoint(464,1201)
            return;
        }else {
            sleep("300")
            ixx++
            if (ixx===8){
                ocrjq.打开道具()
                ocrjq.白色旗酒店老板()
                return;
            }
        }
    }
}

Ocrjq_function.prototype.白色旗=function(){
    let ixx = 0 ;
    while (true) {
       let 白色旗 = gjfz.透明找图("白色旗判断","白色旗",452,558,722,1132,0,0.7)
            if (白色旗) {
                sleep("50")
                doubleClickPoint(282,476)
                return;
            } else {
                let 白色旗 = gjfz.透明找图("滑动","白色旗",452,558,722,1132,0,0.7)
                if (白色旗) {
                    sleep("50")
                    doubleClickPoint(282, 476)
                    return;
                }
                sleep(300);
                ixx++;
                if (ixx === 3){
                    gjfz.透明找图("白旗子","白旗子", 163, 576, 599, 1136,2, 0.7)
                }
                if (ixx ===6){
                    let 请选择要做的事 = gjfz.透明找图("请选择要做的事", "请选择要做的事", 3, 853, 746, 1326, 0, 0.8)
                    if (请选择要做的事) {
                        gjfz.透明找图("烹饪任务", "点击烹饪任务", 3, 853, 746, 1326, 1, 0.8)
                    }
                    let 给予界面 =  gjfz.透明找图("给予确定", "给予确定", 6,223,141,571, 0, 0.7)
                    if (给予界面) {
                        gjfz.透明找图("给予确定", "给予确定", 6,223,141,571, 1, 0.7)
                    }
                    }

            if (ixx === 8 ){
                gjfz.透明找图("xx","关闭",388,645,746,1256,1,0.7)
                sleep("300")
                gjfz.透明找图("xx","关闭",388,645,746,1256,1,0.7)
                sleep("300")
                gjfz.透明找图("xx","关闭",388,645,746,1256,1,0.7)
                sleep("300")
                gjfz.透明找图("xx","关闭",388,645,746,1256,1,0.7)
                ocrjq.打开道具()
                sleep("300")
                ocrjq.白色旗酒店老板()
                return;
            }

        }
    }
}
Ocrjq_function.prototype.白色旗仓库=function(){
    let ixx = 0 ;
    while (true) {
        let 白色旗 = gjfz.透明找图("白色旗判断","白色旗",452,558,722,1132,0,0.7)
        if (白色旗) {
            sleep("100")
            doubleClickPoint(476,795)
            return;
        } else {
            sleep(300);
            ixx++;
            if (ixx === 3){
                gjfz.透明找图("白旗子","白旗子", 163, 576, 599, 1136,2, 0.7)
            }
            if (ixx ===6){
                let 请选择要做的事 = gjfz.透明找图("请选择要做的事", "请选择要做的事", 3, 853, 746, 1326, 0, 0.8)
                if (请选择要做的事) {
                    gjfz.透明找图("烹饪任务", "点击烹饪任务", 3, 853, 746, 1326, 1, 0.8)
                }
                let 给予界面 =  gjfz.透明找图("给予确定", "给予确定", 6,223,141,571, 0, 0.7)
                if (给予界面) {
                    gjfz.透明找图("给予确定", "给予确定", 6,223,141,571, 1, 0.7)
                }
            }

            if (ixx === 8 ){
                gjfz.透明找图("xx","关闭",388,645,746,1256,1,0.7)
                sleep("300")
                gjfz.透明找图("xx","关闭",388,645,746,1256,1,0.7)
                sleep("300")
                gjfz.透明找图("xx","关闭",388,645,746,1256,1,0.7)
                sleep("300")
                gjfz.透明找图("xx","关闭",388,645,746,1256,1,0.7)
                ocrjq.打开道具()
                sleep("300")
                ocrjq.白色旗酒店老板()
                return;
            }

        }
    }
}
Ocrjq_function.prototype.绿色旗子=function(){
    ocrjq.快速打开道具()
    sleep(200);
    let 绿旗子 = gjfz.多点找色(2,"#091400-0x101010","-6|-5|#38D900-0x101010,-1|14|#E5BC16-0x101010,8|15|#3BEB00-0x101010,12|2|#C6C427-0x101010,6|-11|#28A800-0x101010",163, 576, 599, 1136)
    if (绿旗子){
        //gjfz.多点找色(2,"#091400-0x101010","-6|-5|#38D900-0x101010,-1|14|#E5BC16-0x101010,8|15|#3BEB00-0x101010,12|2|#C6C427-0x101010,6|-11|#28A800-0x101010",163, 576, 599, 1136)
        // gjfz.透明找图("绿旗子","绿旗子", 163, 576, 599, 1136,2, 0.7)
        logd("双击绿旗子");
    }else {
        clickPoint(595, 907)
        //打开行囊
        sleep("300")
        let 绿旗子判断 =  gjfz.透明找图("绿旗子","绿旗子", 163, 576, 599, 1136,0, 0.7)
        if (绿旗子判断) {
            logd("找到");
            gjfz.透明找图("绿旗子","绿旗子", 163, 576, 599, 1136,2, 0.7)
            sleep("300")
            //点击道具
            clickPoint(604,678)
            sleep("300")
            //关闭
            gjfz.透明找图("绿旗子","绿旗子", 163, 576, 599, 1136,2, 0.7)
        } else {
            ocrjq.白色旗仓库管理员()
            ocrjq.仓库管理员()
            //点击行数第十九行
            clickPoint(297,498)
            sleep("300")
            let 绿旗子判断1 =  gjfz.透明找图("绿旗子","绿旗子", 130,112,570,650,0, 0.7)
            if (绿旗子判断1) {
                logd("找到");
                gjfz.透明找图("绿旗子","绿旗子", 130,112,570,650,2, 0.7)
                sleep("300")
                clickPoint(600,902)
                sleep("300")
                gjfz.透明找图("绿旗子","绿旗子", 130,112,570,650,2, 0.7)
                sleep("300")
                clickPoint(692, 1117)
                //关闭
                sleep("300")
                ocrjq.打开道具()
                sleep("300")
                gjfz.透明找图("绿旗子","绿旗子", 163, 576, 599, 1136,2, 0.7)
            } else {
                sleep("2000")
                let 绿旗子判断2 =  gjfz.透明找图("绿旗子","绿旗子", 130,112,570,650,0, 0.7)
                if (绿旗子判断2) {
                    logd("找到");
                    gjfz.透明找图("绿旗子", "绿旗子", 130, 112, 570, 650, 2, 0.7)
                    sleep("300")
                    clickPoint(600, 902)
                    sleep("300")
                    gjfz.透明找图("绿旗子", "绿旗子", 130, 112, 570, 650, 2, 0.7)
                    sleep("300")
                    clickPoint(692, 1117)
                    //关闭
                    sleep("300")
                    ocrjq.打开道具()
                    sleep("300")
                    gjfz.透明找图("绿旗子", "绿旗子", 163, 576, 599, 1136, 2, 0.7)
                }else {
                    loge("没有绿旗子了请填充")
                    exit()
                }
            }
        }
    }
    let iix = 0 ;
//截图
    sleep(300);
    while (true) {
        let 绿旗子判断 = gjfz.透明找图("绿旗子判断","绿旗子判断",515,412,737,979,0,0.7)
        if (绿旗子判断) {
            logd("点击或滑动可查看坐标");
            sleep("100")
            return;
        } else {
            iix++;
            //logd(iix);
            sleep("300")
            if (iix===3){
                sleep(300);
                gjfz.透明找图("xx","关闭",388,645,746,1256,1,0.7)
                sleep("200")
                gjfz.透明找图("绿旗子", "绿旗子", 163, 576, 599, 1136, 2, 0.7)
            }
            if (iix===5){
                sleep("200")
                gjfz.透明找图("绿旗子", "绿旗子", 163, 576, 599, 1136, 2, 0.7)
            }
            logw("未识别到结果");
            gjfz.透明找图("绿旗子", "绿旗子", 163, 576, 599, 1136, 2, 0.7)
            if (iix===8) {
              ocrjq.打开道具()
            }
        }
    }
}
Ocrjq_function.prototype.红色旗子=function(){
    ocrjq.快速打开道具()
    sleep("200")
    let 红旗子 = gjfz.多点找色(2,"#A00D06-0x101010","-11|-4|#CB0C0E-0x101010,7|19|#D1810A-0x101010,8|-11|#E0B618-0x101010,4|16|#E62510-0x101010",163, 576, 599, 1136)
    if (红旗子){
        logd("双击红旗子");
        // gjfz.透明找图("红旗子", "红旗子", 163, 576, 599, 1136, 2, 0.7)
    }else {
        clickPoint(595, 907)
        //打开行囊
        sleep("300")
        let 红旗子1 =   gjfz.透明找图("红旗子", "红旗子", 163, 576, 599, 1136, 2, 0.7)
        if (红旗子1) {
            logd("找到");
            gjfz.透明找图("红旗子", "红旗子", 163, 576, 599, 1136, 2, 0.7)
            sleep("300")
            //点击道具
            clickPoint(604,678)
            sleep("300")
            gjfz.透明找图("红旗子", "红旗子", 163, 576, 599, 1136, 2, 0.7)
        } else {
            ocrjq.白色旗仓库管理员()
            ocrjq.仓库管理员()
            //点击行数第25行
            clickPoint(292,500)
            sleep("300")
            let 红旗子2 =  gjfz.透明找图("红旗子", "红旗子", 130, 112, 570, 650, 2, 0.7)
            if (红旗子2) {
                logd("找到");
                gjfz.透明找图("红旗子", "红旗子", 130, 112, 570, 650, 2, 0.7)
                sleep("300")
                clickPoint(600,902)
                sleep("300")
                gjfz.透明找图("红旗子", "红旗子", 130, 112, 570, 650, 2, 0.7)
                sleep("300")
                clickPoint(692, 1117)
                sleep("300")
                ocrjq.打开道具()
                sleep("300")
                gjfz.透明找图("红旗子", "红旗子", 163, 576, 599, 1136, 2, 0.7)
            } else {
                sleep("2000")
                let 红旗子2 =  gjfz.透明找图("红旗子", "红旗子", 130, 112, 570, 650, 2, 0.7)
                if (红旗子2) {
                    logd("找到");
                    gjfz.透明找图("红旗子", "红旗子", 130, 112, 570, 650, 2, 0.7)
                    sleep("300")
                    clickPoint(600,902)
                    sleep("300")
                    gjfz.透明找图("红旗子", "红旗子", 130, 112, 570, 650, 2, 0.7)
                    sleep("300")
                    clickPoint(692, 1117)
                    sleep("300")
                    ocrjq.打开道具()
                    sleep("300")
                    gjfz.透明找图("红旗子", "红旗子", 163, 576, 599, 1136, 2, 0.7)
                } else {
                    loge("没有红旗子了请填充")

                }
            }
        }
    }
    sleep(300);
    let iix = 0 ;
    while (true) {
        let 红旗子判断 = gjfz.透明找图("红旗子判断","红旗子判断",528,776,710,1214,0,0.7)
        if (红旗子判断) {
            logd("点击或滑动可查看坐标");
            sleep("200")
            doubleClickPoint(290,657)
            sleep("300")
            clickPoint(690,1110)
            return;
        } else {
            sleep(300);
            iix++;
            if (iix===5){
                gjfz.透明找图("红旗子", "红旗子", 163, 576, 599, 1136, 2, 0.7)
            }
            if (iix===8){
                ocrjq.红色旗子()
                return;
            }
            logw("未识别到结果");
            gjfz.透明找图("红旗子", "红旗子", 163, 576, 599, 1136, 2, 0.7)
        }

    }
}
Ocrjq_function.prototype.建邺=function() {
    sleep("50")
    doubleClickPoint(159, 1081)
    let i0x = 0;
    while (true) {
        sleep("500")
        let jy = gjfz.透明找图("建邺判断", "建邺判断1", 202, 680, 384, 922, 0, 0.7)
        if (jy) {
            sleep("100")
            clickPoint(290, 838)
            sleep("300")
            let 循环 = 0 ;
            while (true) {
                let 建邺坐标 = gjfz.透明找图("建邺坐标", "建邺坐标6", 535,1,743,362,0,0.7)
                if (建邺坐标) {
                    sleep("100")
                    clickPoint(462, 1192)
                    sleep("200")
                    clickPoint(596, 896)
                    return;
                }else {
                    循环++
                    sleep("300")
                    clickPoint(462, 1192)
                    sleep("300")
                    clickPoint(596, 896)
                    sleep("300")
                    if (循环===5) {
                        return;
                    }
                }
            }
        } else {
            sleep("300")
            if (i0x === 1) {
                doubleClickPoint(159, 1081)
            }
            i0x++;
            if (i0x === 2) {
                let io = 0;
                    let 建邺坐标 = gjfz.透明找图("建邺坐标", "建邺坐标5", 611, 13, 744, 268, 0, 0.7)
                    if (建邺坐标) {
                        clickPoint(462, 1192)
                        sleep("200")
                        clickPoint(596, 896)
                        return;
                }
            }



            if (i0x === 3) {
                ocrjq.打开道具建邺()
                clickPoint(595, 907)
                //打开行囊
                sleep("300")
                let 建邺 = gjfz.透明找图("建邺", "建邺9", 163, 576, 599, 1136, 0, 0.7)
                if (建邺) {
                    logd("找到");
                    gjfz.透明找图("建邺", "建邺11", 163, 576, 599, 1136, 2, 0.7)
                    sleep("300")
                    //点击道具
                    clickPoint(602, 680)
                    sleep("200")
                    clickPoint(688, 1111)
                    sleep("200")
                    doubleClickPoint(159, 1081)
                    sleep("200")
                    let iix = 0;
                    while (true) {
                        sleep("200")
                        let jy = gjfz.透明找图("建邺判断", "建邺判断12", 202, 680, 384, 922, 0, 0.7)
                        if (jy) {
                            clickPoint(290, 838)
                            sleep("300")
                            while (true) {
                                let 建邺坐标 = gjfz.透明找图("建邺坐标", "建邺坐标13", 611, 13, 744, 268, 0, 0.7)
                                if (建邺坐标) {
                                    clickPoint(462, 1192)
                                    sleep("200")
                                    clickPoint(596, 896)
                                    break;
                                } else {
                                    sleep("200")
                                    clickPoint(290, 838)
                                    sleep(100)
                                }
                            }
                            return;
                        } else {
                            iix++;
                            if (iix === 2) {
                                doubleClickPoint(159, 1081)
                                while (true) {
                                    sleep("200")
                                    let jy = gjfz.透明找图("建邺判断", "建邺判断14", 202, 680, 384, 922, 0, 0.7)
                                    if (jy) {
                                        clickPoint(290, 838)
                                        sleep("300")
                                        let 建邺坐标 = gjfz.透明找图("建邺坐标", "建邺坐标15", 611, 13, 744, 268, 0, 0.7)
                                        if (建邺坐标) {
                                            clickPoint(462, 1192)
                                            sleep("200")
                                            clickPoint(596, 896)
                                            return;
                                        }else{
                                            clickPoint(157,1087)
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else {
                    ocrjq.白色旗仓库管理员()
                    ocrjq.仓库管理员()
                    //点击行数第十六行
                    clickPoint(297, 212)
                    sleep("300")
                    let 建邺2 = gjfz.透明找图("建邺", "建邺16", 130, 112, 570, 650, 0, 0.7)
                    if (建邺2) {
                        logd("找到");
                        gjfz.透明找图("建邺", "建邺17", 130, 112, 570, 650, 2, 0.7)
                        sleep("300")
                        clickPoint(600, 902)
                        sleep("300")
                        gjfz.透明找图("建邺", "建邺18", 130, 112, 570, 650, 2, 0.7)
                        sleep("300")
                        clickPoint(692, 1117)
                        sleep("300")
                        ocrjq.建邺()
                        return;
                    } else {
                        sleep("2000")
                        let 建邺2 = gjfz.透明找图("建邺", "建邺19", 130, 112, 570, 650, 0, 0.7)
                        if (建邺2) {
                            logd("找到");
                            gjfz.透明找图("建邺", "建邺30", 130, 112, 570, 650, 2, 0.7)
                            sleep("300")
                            clickPoint(600, 902)
                            sleep("300")
                            gjfz.透明找图("建邺", "建邺33", 130, 112, 570, 650, 2, 0.7)
                            sleep("300")
                            clickPoint(692, 1117)
                            sleep("300")
                            ocrjq.建邺()
                            return;
                        }
                    }
                }
            }
        }
    }
}

Ocrjq_function.prototype.白色旗仓库管理员=function(){
    clickPoint(595,730)
    sleep("500");
    let io = 0
    while (true) {
        let 白色旗 = gjfz.多点找色(2,"#090F0B-0x101010","-7|-4|#D6DAC1-0x101010,-3|13|#AD760E-0x101010,12|21|#C98101-0x101010,12|6|#D9C94F-0x101010,10|-9|#D1AF31-0x101010",163, 576, 599, 1136)
        if (白色旗) {
            //gjfz.多点找色(2,"#090F0B-0x101010","-7|-4|#D6DAC1-0x101010,-3|13|#AD760E-0x101010,12|21|#C98101-0x101010,12|6|#D9C94F-0x101010,10|-9|#D1AF31-0x101010",163, 576, 599, 1136)
            sleep("300");
            ocrjq.白色旗仓库()
            sleep("300");
            clickPoint(660,1081)
            sleep("800");
            clickPoint(493,34)
            sleep("300")
            clickPoint(470,619)
            ocrjq.白色旗仓库管理员点击()
            break;
        } else {
            sleep("500")
            io++;
            if (io === 3) {
                sleep("100")
                clickPoint(595, 907)
                //打开行囊
                sleep("500")
                let iooo=0;
                while (true) {
                    sleep("500")
                    let 行囊白色旗 = gjfz.精准找图("白旗子", 163, 576, 599, 1136)
                    if (行囊白色旗) {
                        logd("行囊找到白棋")
                        sleep(200);
                        clickPoint(604, 682)

                        return;
                    } else {
                        iooo++
                        sleep("300")
                        if (iooo === 8) {
                            clickPoint(647,1067)
                            logd("错误")
                        }
                    }
                }
            }
        }
    }
}
Ocrjq_function.prototype.白色旗仓库管理员点击=function(){
    let ixx = 0 ;
    while (true) {
        sleep(1000)
        let 仓库操作 = gjfz.透明找图("仓库操作","仓库操作", 203,911,404,1322,0,0.7)
        if (仓库操作)
        {
            gjfz.透明找图("仓库操作","仓库操作", 203,911,404,1322,1,0.7)
            return;
        } else
        {
            sleep("1000")
            let 判断仓库重叠 = gjfz.透明找图("请选择一个角色","请选择一个角色", 22,507,582,1097,0, 0.7)
            if (判断仓库重叠){
                gjfz.dzbs( "#FDFDFD-#101010", "-1|7|#B7C2C8-#101010,22|-116|#416571-#101010,-41|-116|#30505F-#101010,-40|125|#30546A-#101010,25|124|#385867-#101010,0|7|#FFFFFF-#101010,0|0|#FDFDFD-#101010,-18|5|#456679-#101010,-10|6|#426374-#101010,-1|61|#385469-#101010,-17|61|#7F95A2-#101010,-6|61|#3B586A-#101010,-1|34|#395469-#101010,-6|33|#3B566B-#101010")
            }else {

                clickPoint(470,619)
            }
            ixx++;
            if (ixx === 5){
                ocrjq.打开道具();
                gjfz.透明找图("白旗子","白旗子", 163, 576, 599, 1136,2, 0.7)
                sleep("300");
                //ocrjq.白色旗();
                sleep("1500");
                doubleClickPoint(476,795)
                sleep("800");
                clickPoint(660,1081)
                sleep("800");
                clickPoint(493,34)
                sleep("300")
                clickPoint(470,619)
            }
            if(ixx===10){
                return;
            }
        }

        sleep("300")
    }
}
Ocrjq_function.prototype.仓库管理员=function(){
    let ixx = 0;
    while (true) {
        let 仓库判断 = gjfz.透明找图("仓库判断", "仓库判断", 1,612,159,1137, 0, 0.7)
        if (仓库判断) {
            sleep("300")
            clickPoint(74,47)
            sleep("300")
            clickPoint(95, 272)
            sleep("300")
            return;
        } else {
            sleep("300")
            ixx++
            if (ixx===10){
                ocrjq.白色旗仓库管理员点击()
            }

        }
    }
}
Ocrjq_function.prototype.仓库识别=function() {
    let ixx = 0;
    while (true) {
        let 仓库判断 = gjfz.透明找图("仓库判断", "仓库判断", 1,612,159,1137, 0, 0.7)
        if (仓库判断) {
            sleep("300")
            clickPoint(74,47)
            return;
        } else {
            sleep("300")
            ixx++
            if (ixx === 10) {
                ocrjq.白色旗仓库管理员点击()
            }
        }
    }
}

Ocrjq_function.prototype.判断物品= function () {
let zd = false
   // sleep(50);
    let 截取全屏 = imageHandlerIOS.captureScreenMat();
    if (!截取全屏) {logi("截取屏幕失败");}
   // sleep(50);
    let  剪切 = imageHandlerIOS.cropMat(截取全屏,463,770,536,1024);
    if (!剪切) {logi("剪切失败");}
    //sleep(50);
    let 旋转 = imageHandlerIOS.rotateMat(剪切,270);
    if (!旋转) {logi("旋转失败");}
    //sleep(50);
    imageHandlerIOS.saveMat(旋转,"C:/bit1.png");
    //sleep(50);#FFFFFF-0x505050
    let rects = imageHandlerIOS.getWords(旋转,"",-1,0,0,0,0.9,false)
    if (rects) {
        zd=true
        logd(JSON.stringify(rects[0].info));
        let result = JSON.stringify(rects[0].info)

        if (result===JSON.stringify("血色茶花")) {
            logd("血色茶花");
        }else if (result===JSON.stringify("十香返生丸")) {
            csh.十香返生丸();
        }else if (result===JSON.stringify("金创药")) {
            csh.金创药();
        }else if (result===JSON.stringify("佛光舍利子")) {
            csh.佛光舍利子();
        }else if (result===JSON.stringify("风水混元丹")) {
            csh.风水混元丹();
        }else if (result===JSON.stringify("五龙丹")) {
            csh.五龙丹();
        }else if (result===JSON.stringify("定神香")) {
            csh.定神香();
        }else if (result===JSON.stringify("红雪散")) {
            csh.红雪散();
        }else if (result===JSON.stringify("蛇蝎美人")) {
            csh.蛇蝎美人();
        }
        // }else if (result===JSON.stringify("佛光")) {
        //     csh.佛光舍利子();
        // }else if (result===JSON.stringify("十香")) {
        //     csh.十香返生丸();
        // }

    }


    imageHandlerIOS.recycle(截取全屏,剪切,旋转);
    
    //物品  454,766,546,1030
    //人物  560,770,638,1024


    
return zd;
    

    
}
Ocrjq_function.prototype.判断人物= function () {
    let zd = false
   // sleep(50);
    let 截取全屏 = imageHandlerIOS.captureScreenMat();
    if (!截取全屏) {logi("截取屏幕失败");}
   // sleep(50);
    let  剪切 = imageHandlerIOS.cropMat(截取全屏,560,770,638,1024);
    if (!剪切) {logi("剪切失败");}
   // sleep(50);
    let 旋转 = imageHandlerIOS.rotateMat(剪切,270);
    if (!旋转) {logi("旋转失败");}
   // sleep(50);
    imageHandlerIOS.saveMat(旋转,"C:/bi2.png");
   // sleep(50);#FFFFFF-0x505050
    let rects = imageHandlerIOS.getWords(旋转,"",-1,0,0,0,0.9,false)
    if (rects) {
        zd = true
        logd("执行" + JSON.stringify(rects[0].info));

        let result = JSON.stringify(rects[0].info)

        //物品  454,766,546,1030
        //人物  560,770,638,1024
        if (result === JSON.stringify("朱紫校尉")) {
            ocrjq.判断物品()
            csh.朱紫校尉();
        } else if (result === JSON.stringify("地遁鬼")) {
            ocrjq.判断物品()
            csh.地遁鬼();
        } else if (result === JSON.stringify("赵元宝")) {
            ocrjq.判断物品()
            csh.赵元宝();
        } else if (result === JSON.stringify("迎客僧")) {
            ocrjq.判断物品()
            csh.迎客僧();
        } else if (result === JSON.stringify("陈长寿")) {
            ocrjq.判断物品()
            csh.陈长寿();
        } else if (result === JSON.stringify("雷黑子")) {
            ocrjq.判断物品()
            csh.雷黑子();
        } else if (result === JSON.stringify("马全有")) {
            ocrjq.判断物品()
            csh.马全有();
        } else if (result === JSON.stringify("教书先生")) {
            ocrjq.判断物品()
            csh.教书先生();
        } else if (result === JSON.stringify("慧觉和尚")) {
            ocrjq.判断物品()
            csh.慧觉和尚();
        } else if (result === JSON.stringify("许姑娘")) {
            ocrjq.判断物品()
            csh.许姑娘();
        } else if (result === JSON.stringify("凤凰姑娘")) {
            ocrjq.判断物品()
            csh.凤凰姑娘();
        } else if (result === JSON.stringify("蝴蝶女")) {
            ocrjq.判断物品()
            csh.长寿村蝴蝶女();
        } else if (result === JSON.stringify("怜儿姑娘")) {
            ocrjq.判断物品()
            csh.怜儿姑娘();
        } else if (result === JSON.stringify("海老先生")) {
            ocrjq.判断物品()
            csh.海老先生();
        } else if (result === JSON.stringify("药店伙计")) {
            ocrjq.判断物品()
            csh.药店伙计();
        } else if (result === JSON.stringify("紫阳药师")) {
            ocrjq.判断物品()
            csh.紫阳药师();
        } else if (result === JSON.stringify("许大娘")) {
            ocrjq.判断物品()
            csh.许大娘();
        } else if (result === JSON.stringify("小囝囝")) {
            ocrjq.判断物品()
            csh.小囝囝();
        } else if (result === JSON.stringify("豆蔻囡囡")) {
            ocrjq.判断物品()
            csh.豆蔻囡囡();
        } else if (result === JSON.stringify("申太公")) {
            ocrjq.判断物品()
            csh.申太公();
        } else if (result === JSON.stringify("端木娘子")) {
            ocrjq.判断物品()
            csh.端木娘子();
        }

    }
    imageHandlerIOS.recycle(截取全屏, 剪切, 旋转);
    return zd;
}
/*
Ocrjq_function.prototype.白色旗酒店老板=function(){


    sleep("300")
    let io = 0
    while (true) {
        let 白色旗 = gjfz.图片查找("白旗子",  163, 576, 599, 1136, 0)
        if (白色旗) {
            gjfz.图片查找("白旗子",  163, 576, 599, 1136, 2)
            sleep("300");
            ocrjq.白色旗()
            sleep("800");
            clickPoint(687, 1110)
            sleep("800");
            clickPoint(419, 618)
            ocrjq.酒店老板执行()
            break;
        } else {
            sleep("300")
            io++;
            if (io === 3) {
                sleep("300")
                clickPoint(595, 907)
                //打开行囊
                sleep("500")
                let iooo=0;
                while (true) {
                    let 行囊白色旗 = gjfz.精准找图("白旗子", 163, 576, 599, 1136)
                    if (行囊白色旗) {
                        logd("行囊找到白棋")
                        return;
                    } else {
                        iooo++
                        sleep("300")
                        if (iooo === 8) {
                            logd("错误")
                        }
                    }
                }
            }
        }
    }
}
*/
//
// Ocrjq_function.prototype.第十次随机判断=function() {
//     let ocrfun = false
//     //ocrjq.ocrcsh()
//     sleep("200");
// //截图
//
//     ocrfun = true
//     for (var ix = 0; ix < 1; ix++) {
//         let r = image.captureFullScreen()
//         let bitmap = image.clip(r, 173,666,686,1326);
//         if (!bitmap) {
//             loge("读取图片失败");
//
//         }
//         image.saveTo(bitmap, "d:/1.png")
//         console.time("1")
//         //   logd("start---ocr");
//         // 对图片进行识别
//         let result = ocr.ocrImage(bitmap, 20 * 1000, {});
//         //   logd(result)
//         if (result) {
//             logd("ocr结果-》 " + JSON.stringify(result));
//
//
//
//
//             let 蛇蝎美人 = (JSON.stringify(result).indexOf("蛇蝎美人") !== -1);
//             if (蛇蝎美人) {
//                 logd("蛇蝎美人执行");
//                 ocr.releaseAll();
//                 csh.蛇蝎美人();
//                 return;
//             } else {
//                 //   logd("失败");
//             }
//
//
//             let 蛇蝎美 = (JSON.stringify(result).indexOf("蛇揭美") !== -1);
//             if (蛇蝎美) {
//                 logd("蛇蝎美人执行");
//                 ocr.releaseAll();
//                 csh.蛇蝎美人();
//                 return;
//             } else {
//                 //  logd("失败");
//             }
//
//
//             let 蛇揭美 = (JSON.stringify(result).indexOf("蛇蝎美") !== -1);
//             if (蛇揭美) {
//                 logd("蛇蝎美人执行");
//                 ocr.releaseAll();
//                 csh.蛇蝎美人();
//                 return;
//             } else {
//                 //  logd("失败");
//             }
//
//
//
//             let 红雪散 = (JSON.stringify(result).indexOf("红雪散") !== -1);
//             if (红雪散) {
//                 logd("红雪散执行");
//                 ocr.releaseAll();
//                 csh.红雪散();
//                 return;
//             } else {
//                 // logd("失败");
//             }
//
//
//
//             let 定神香 = (JSON.stringify(result).indexOf("定神香") !== -1);
//             if (定神香) {
//                 logd("定神香执行");
//                 ocr.releaseAll();
//                 csh.定神香();
//                 return;
//             } else {
//                 //  logd("失败");
//             }
//
//             let 五龙丹 = (JSON.stringify(result).indexOf("五龙丹") !== -1);
//             if (五龙丹) {
//                 logd("五龙丹执行");
//                 ocr.releaseAll();
//                 csh.五龙丹();
//                 return;
//             } else {
//                 //  logd("失败");
//             }
//
//             let 风水浸元月 = (JSON.stringify(result).indexOf("风水浸元月") !== -1);
//             if (风水浸元月) {
//                 logd("风水混元丹执行");
//                 ocr.releaseAll();
//                 csh.风水混元丹();
//                 return;
//             } else {
//                 // logd("失败");
//             }
//
//
//             let 风水混元月 = (JSON.stringify(result).indexOf("风水混元月") !== -1);
//             if (风水混元月) {
//                 logd("风水混元丹执行");
//                 ocr.releaseAll();
//                 csh.风水混元丹();
//                 return;
//             } else {
//                 // logd("失败");
//             }
//             let 风水 = (JSON.stringify(result).indexOf("风水") !== -1);
//             if (风水) {
//                 logd("风水混元丹执行");
//                 ocr.releaseAll();
//                 csh.风水混元丹();
//                 return;
//             } else {
//                 //  logd("失败");
//             }
//
//             let 风水混元丹 = (JSON.stringify(result).indexOf("风水混元丹") !== -1);
//             if (风水混元丹) {
//                 logd("风水混元丹执行");
//                 ocr.releaseAll();
//                 csh.风水混元丹();
//                 return;
//             } else {
//                 //   logd("失败");
//             }
//             let 风水浸元丹 = (JSON.stringify(result).indexOf("风水浸元丹") !== -1);
//             if (风水浸元丹) {
//                 logd("风水混元丹执行");
//                 ocr.releaseAll();
//                 csh.风水混元丹();
//                 return;
//             } else {
//                 // /  logd("失败");
//             }
//             let 佛光善利子 = (JSON.stringify(result).indexOf("佛光善利子") !== -1);
//             if (佛光善利子) {
//                 logd("佛光舍利子执行");
//                 ocr.releaseAll();
//                 csh.佛光舍利子();
//                 return;
//             } else {
//                 //  logd("失败");
//             }
//             let 佛光 = (JSON.stringify(result).indexOf("佛光") !== -1);
//             if (佛光) {
//                 logd("佛光舍利子执行");
//                 ocr.releaseAll();
//                 csh.佛光舍利子();
//                 return;
//             } else {
//                 // logd("失败");
//             }
//
//
//             let 佛光舍利子 = (JSON.stringify(result).indexOf("佛光舍利子") !== -1);
//             if (佛光舍利子) {
//                 logd("佛光舍利子执行");
//                 ocr.releaseAll();
//                 csh.佛光舍利子();
//                 return;
//             } else {
//                 // logd("失败");
//             }
//
//             let 金创药 = (JSON.stringify(result).indexOf("金创药") !== -1);
//             if (金创药) {
//                 logd("金创药执行");
//                 ocr.releaseAll();
//                 csh.金创药();
//                 return;
//             } else {
//                 //  logd("失败");
//             }
//
//
//             let 十香返生丸 = (JSON.stringify(result).indexOf("十香返生丸") !== -1);
//             if (十香返生丸) {
//                 logd("十香返生丸执行");
//                 ocr.releaseAll();
//                 csh.十香返生丸();
//                 return;
//             } else {
//             }
//
//
//
//
//
//
//
//         } else {
//             sleep(100);
//             logw("未识别到结果");
//
//         }
//
//
//     }
// }
//
// Ocrjq_function.prototype.ocrjq=function() {
//     let ocrfun = false
// //2.8.0+中控,要在中控设置页开启opencv功能,并重启中控
//     //ocrjq.ocrcsh()
//     ocrfun = true
//     //  let 循环 = 0;
//     while (true) {
//         //   循环++
// //截图
//         sleep("200");
//         let r = image.captureFullScreen()
//         let bitmap = image.clip(r, 173,666,686,1326);
//         if (!bitmap) {
//             loge("读取图片失败");
//         }
//         image.saveTo(bitmap, "d:/1.png")
//         console.time("1")
//         //   logd("start---ocr");
//         // 对图片进行识别
//         let result = ocr.ocrImage(bitmap, 20 * 1000, {});
//         if (result) {
//             logd("ocr结果-》 " + JSON.stringify(result));
//
//
//             let 怜儿姑娘 = (JSON.stringify(result).indexOf("怜儿姑娘") !== -1);
//             if (怜儿姑娘) {
//                 ocr.releaseAll();
//                 logd("怜儿姑娘执行");
//                 csh.怜儿姑娘();
//                 return;
//             } else {
//                 //   logd("失败");
//             }
//
//
//             let 海老先生 = (JSON.stringify(result).indexOf("海老先生") !== -1);
//             if (海老先生) {
//                 ocr.releaseAll();
//                 logd("海老先生执行");
//                 csh.海老先生();
//                 return ;
//             } else {
//                 //  logd("失败");
//             }
//
//
//             let 药店伙计 = (JSON.stringify(result).indexOf("药店伙计") !== -1);
//             if (药店伙计) {
//                 ocr.releaseAll();
//                 logd("药店伙计执行");
//                 csh.药店伙计();
//                 return;
//             } else {
//                 // logd("失败");
//             }
//
//
//             let 紫阳药师 = (JSON.stringify(result).indexOf("紫阳药师") !== -1);
//             if (紫阳药师) {
//                 ocr.releaseAll();
//                 logd("紫阳药师执行");
//                 csh.紫阳药师();
//                 return;
//             } else {
//                 // logd("失败");
//             }
//
//             let 许大娘 = (JSON.stringify(result).indexOf("许大娘") !== -1);
//             if (许大娘) {
//                 ocr.releaseAll();
//                 logd("许大娘执行");
//                 csh.许大娘();
//                 return ;
//             } else {
//                 //  logd("失败");
//             }
//
//
//
//             let 小国民 = (JSON.stringify(result).indexOf("小国民") !== -1);
//             if (小国民) {
//                 ocr.releaseAll();
//                 logd("小囝囝执行");
//                 csh.小囝囝();
//                 return;
//             } else {
//                 //  logd("失败");
//             }
//
//
//
//             let 小囝囝 = (JSON.stringify(result).indexOf("小国区") !== -1);
//             if (小囝囝) {
//                 ocr.releaseAll();
//                 logd("小囝囝执行");
//                 csh.小囝囝();
//                 return;
//             } else {
//                 //   logd("失败");
//             }
//
//
//             let 小图区 = (JSON.stringify(result).indexOf("小图区") !== -1);
//             if (小图区) {
//                 ocr.releaseAll();
//                 logd("小囝囝执行");
//                 csh.小囝囝();
//                 return;
//             } else {
//                 // logd("失败");
//             }
//             let 小国国 = (JSON.stringify(result).indexOf("小国国") !== -1);
//             if (小国国) {
//                 ocr.releaseAll();
//                 logd("小囝囝执行");
//                 csh.小囝囝();
//                 return;
//             } else {
//                 //  logd("失败");
//             }
//             let 小国图 = (JSON.stringify(result).indexOf("小国图") !== -1);
//             if (小国图) {
//                 ocr.releaseAll();
//                 logd("小囝囝执行");
//                 csh.小囝囝();
//                 return;
//             } else {
//                 //   logd("失败");
//             }
//             let 小图图 = (JSON.stringify(result).indexOf("小图图") !== -1);
//             if (小图图) {
//                 ocr.releaseAll();
//                 logd("小囝囝执行");
//                 csh.小囝囝();
//                 return;
//             } else {
//                 // logd("失败");
//             }
//
//
//             let 小图国 = (JSON.stringify(result).indexOf("小图国") !== -1);
//             if (小图国) {
//                 ocr.releaseAll();
//                 logd("小囝囝执行");
//                 csh.小囝囝();
//                 return;
//             } else {
//                 //   logd("失败");
//             }
//
//
//             let 小图医 = (JSON.stringify(result).indexOf("小图医") !== -1);
//             if (小图医) {
//                 ocr.releaseAll();
//                 logd("小囝囝执行");
//                 csh.小囝囝();
//                 return ;
//             } else {
//                 //  logd("失败");
//             }
//
//
//             let 豆蔻囡囡 = (JSON.stringify(result).indexOf("豆蔻") !== -1);
//             if (豆蔻囡囡) {
//                 ocr.releaseAll();
//                 logd("豆蔻囡囡执行");
//                 csh.豆蔻囡囡();
//                 return ;
//             } else {
//                 //   logd("失败");
//             }
//
//             let 豆费囱囱 = (JSON.stringify(result).indexOf("豆费囱囱") !== -1);
//             if (豆费囱囱) {
//                 ocr.releaseAll();
//                 logd("豆蔻囡囡执行");
//                 csh.豆蔻囡囡();
//                 return ;
//             } else {
//                 //   logd("失败");
//             }
//
//             let 申太公 = (JSON.stringify(result).indexOf("申太公") !== -1);
//             if (申太公) {
//                 ocr.releaseAll();
//                 logd("申太公执行");
//                 csh.申太公();
//                 return ;
//             } else {
//                 // logd("失败");
//             }
//
//
//             let 端木娘子 = (JSON.stringify(result).indexOf("端木娘子") !== -1);
//             if (端木娘子) {
//                 ocr.releaseAll();
//                 logd("端木娘子执行");
//                 csh.端木娘子();
//                 return ;
//             } else {
//                 //   logd("失败");
//             }
//
//
//             let 长寿村蝴蝶女 = (JSON.stringify(result).indexOf("蝴蝶女") !== -1);
//             if (长寿村蝴蝶女) {
//                 ocr.releaseAll();
//                 logd("长寿村蝴蝶女执行");
//                 csh.长寿村蝴蝶女();
//                 return ;
//             } else {
//                 //  logd("失败");
//             }
//             let 蝴蝶女 = (JSON.stringify(result).indexOf("蝴媒女") !== -1);
//             if (蝴蝶女) {
//                 ocr.releaseAll();
//                 logd("长寿村蝴蝶女执行");
//                 csh.长寿村蝴蝶女();
//                 return ;
//             } else {
//                 // logd("失败");
//             }
//
//
//             let 凤凰姑娘 = (JSON.stringify(result).indexOf("凤凰姑娘") !== -1);
//             if (凤凰姑娘) {
//                 ocr.releaseAll();
//                 logd("凤凰姑娘执行");
//                 csh.凤凰姑娘();
//                 return ;
//             } else {
//                 // logd("失败");
//             }
//
//
//
//
//             let 许姑娘 = (JSON.stringify(result).indexOf("许姑娘") !== -1);
//             if (许姑娘) {
//                 ocr.releaseAll();
//                 logd("许姑娘执行");
//                 csh.许姑娘();
//                 return ;
//             } else {
//                 // logd("失败");
//             }
//
//
//
//
//
//             let 慧觉和尚 = (JSON.stringify(result).indexOf("慧觉和尚") !== -1);
//             if (慧觉和尚) {
//                 ocr.releaseAll();
//                 logd("慧觉和尚执行");
//                 csh.慧觉和尚();
//                 return ;
//             } else {
//                 //  logd("失败");
//             }
//
//
//             let 教书先生 = (JSON.stringify(result).indexOf("教书先生") !== -1);
//             if (教书先生) {
//                 ocr.releaseAll();
//                 logd("教书先生执行");
//                 csh.教书先生();
//                 return ;
//             } else {
//                 //  logd("失败");
//             }
//
//
//             let 马全有 = (JSON.stringify(result).indexOf("马全有") !== -1);
//             if (马全有) {
//                 ocr.releaseAll();
//                 logd("马全有执行");
//                 csh.马全有();
//                 return ;
//             } else {
//                 //   logd("失败");
//             }
//
//
//             let 雷黑子 = (JSON.stringify(result).indexOf("雷黑子") !== -1);
//             if (雷黑子) {
//                 ocr.releaseAll();
//                 logd("雷黑子执行");
//                 csh.雷黑子();
//                 return ;
//             } else {
//                 // logd("失败");
//             }
//
//
//             let 刘老爹 = (JSON.stringify(result).indexOf("刘老爹") !== -1);
//             if (刘老爹) {
//                 ocr.releaseAll();
//                 logd("刘老爹执行");
//                 csh.刘老爹();
//                 return ;
//             } else {
//                 //  logd("失败");
//             }
//
//
//             let 陈长寿 = (JSON.stringify(result).indexOf("陈长寿") !== -1);
//             if (陈长寿) {
//                 ocr.releaseAll();
//                 logd("陈长寿执行");
//                 csh.陈长寿();
//                 return ;
//             } else {
//                 //  logd("失败");
//             }
//
//
//             let 迎客僧 = (JSON.stringify(result).indexOf("迎客僧") !== -1);
//             if (迎客僧) {
//                 ocr.releaseAll();
//                 logd("迎客僧执行");
//                 csh.迎客僧();
//                 return ;
//             } else {
//                 //  logd("失败");
//             }
//             let 迎客借 = (JSON.stringify(result).indexOf("迎客借") !== -1);
//             if (迎客借) {
//                 ocr.releaseAll();
//                 logd("迎客僧执行");
//                 csh.迎客僧();
//                 return ;
//             } else {
//                 //   logd("失败");
//             }
//
//
//             let 赵元宝 = (JSON.stringify(result).indexOf("赵元宝") !== -1);
//             if (赵元宝) {
//                 ocr.releaseAll();
//                 logd("赵元宝执行");
//                 csh.赵元宝();
//                 return ;
//             } else {
//                 //  logd("失败");
//             }
//
//
//             let 地遁鬼 = (JSON.stringify(result).indexOf("地遁鬼") !== -1)
//             if (地遁鬼) {
//                 ocr.releaseAll();
//                 logd("地遁鬼执行");
//                 csh.地遁鬼();
//                 return ;
//             } else {
//                 // logd("失败");
//             }
//             let 地道鬼 = (JSON.stringify(result).indexOf("地道鬼") !== -1);
//             if (地道鬼) {
//                 ocr.releaseAll();
//                 logd("地遁鬼执行");
//                 csh.地遁鬼();
//                 return ;
//             } else {
//                 //  logd("失败");
//             }
//
//             let 地通鬼 = (JSON.stringify(result).indexOf("地通鬼") !== -1);
//             if (地通鬼) {
//                 ocr.releaseAll();
//                 logd("地遁鬼执行");
//                 csh.地遁鬼();
//                 return ;
//             } else {
//                 //  logd("失败");
//             }
//
//             let 朱紫校尉 = (JSON.stringify(result).indexOf("朱紫校") !== -1);
//             if (朱紫校尉) {
//                 ocr.releaseAll();
//                 logd("朱紫校尉执行");
//                 csh.朱紫校尉();
//                 return;
//             } else {
//                 //  logd("失败");
//             }
//
//
//
//         } else {
//             sleep(100);
//             logw("未识别到结果");
//             ocrfun = false;
//         }
//
//
//     }
// //释放所有资源
// }
// Ocrjq_function.prototype.ocrcsh=function() {
//     let ocrLite = {
//         "type": "ocrLite",
//         "baseDir": "C:\\ioscenter\\OcrLiteNcnn",
//         "cpuType": "win-lib-cpu-x64"
//     }
//
//     let inited = ocr.initOcr(ocrLite)
// //    logd("初始化结果 -> " + inited);
//     if (!inited) {
//         loge("error : " + ocr.getErrorMsg());
//
//     }
//
//
// }