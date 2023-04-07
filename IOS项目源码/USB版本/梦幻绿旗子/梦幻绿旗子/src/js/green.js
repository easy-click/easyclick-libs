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


function Green_function() {
}
var green = new Green_function();
var ic =0
Green_function.prototype.绿旗子=function(){
    let 白 = green.透明找图("绿旗子", "绿旗子1", 163, 576, 599, 1136, 2, 0.7)
    if (白) {
        logd("点击绿旗子");
        sleep(1000);
    }
}
Green_function.prototype.购买识别坐标=function(){
    sleep(800);
    clickPoint(690,1110)
    sleep(500);
    clickPoint(151,998)
    sleep(800);
    while (true){
        let 蓝色旗 = green.透明找图("蓝色旗", "蓝色旗", 442,792,684,1299, 1, 0.7)
        if (蓝色旗) {
            sleep(800);
            clickPoint(175,1271)
            if (ic===5) {
                sleep(800);
                clickPoint(175,1271)
                sleep(800);
                clickPoint(175,1271)
            }
            break;
        }
    }
    sleep(300);
    clickPoint(73,1173)
    sleep(300);
    while (true){
        let 购买确认 = green.透明找图("确认", "确认", 170,910,490,1330, 1, 0.7)
        if (购买确认) {
            logd("购买");
            break
        }
    }
    //购买
    sleep(300);
    clickPoint(700,1280)
    sleep(200);
}
Green_function.prototype.透明找图=function(name,name1,x,y,x1,y1,dj,ss) {
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
};
Green_function.prototype.打开道具=function(){
    clickPoint(63, 1176);
    while (true) {
        sleep("500")
        let 打开道具 = green.透明找图("道具", "打开道具", 26,612,374,1208, 0, 0.6)
        let 道具人物 = green.透明找图("道具人物","打开道具",414,942,724,1290,0,0.6)
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
Green_function.prototype.start=function(){

    for (ic;ic<6;ic++) {
        logd(ic);
        green.打开道具()
        green.绿旗子()
        if (ic===0) {
            doubleClickPoint(523, 653)
            //1
        }else if (ic===1) {
            doubleClickPoint(433, 586)
            //2
        }else if (ic===2) {
            doubleClickPoint(361, 521)
            //3
        }else if (ic===3) {
            doubleClickPoint(263, 663)
            //4
        }else if (ic===4) {
            doubleClickPoint(260, 786)
            //5
        }else if (ic===5) {
            doubleClickPoint(190, 718)
            //6
        }
        green.购买识别坐标()
        green.打开道具()

        if (ic===0) {
            sleep(1000);
            doubleClickPoint(526, 754)
            sleep(500);
            doubleClickPoint(526, 852)
            sleep(500)
        }else if (ic===1) {
            sleep(1000);
            doubleClickPoint(526,944)
            sleep(500);
            doubleClickPoint(526,1043)
            sleep(500)
        }else if (ic===2) {
            sleep(1000);
            doubleClickPoint(430,663)
            sleep(500);
            doubleClickPoint(428,758)
            sleep(500)
        }else if (ic===3) {
            sleep(1000);
            doubleClickPoint(431,854)
            sleep(500);
            doubleClickPoint(431,948)
            sleep(500)
        }else if (ic===4) {
            sleep(1000);
            doubleClickPoint(432,1044)
            sleep(500);
            doubleClickPoint(336,665)
            sleep(500)
        }else if (ic===5) {
            sleep(1000);
            doubleClickPoint(335,759)
            sleep(500);
            doubleClickPoint(340,856)
            sleep(500)
            doubleClickPoint(337,948)
            sleep(500)
            doubleClickPoint(334,1045)
            sleep(500)
        }


    }


    sleep(800);
    clickPoint(90,251)
//法宝
    sleep(1500);
    clickPoint(528,200)
    //点击法宝
    sleep(1000);
    clickPoint(186,231)
    //使用


    sleep(1500);
    clickPoint(502,568)
    sleep(500);
    clickPoint(502,756)
    sleep(500);
    clickPoint(408,470)
    sleep(500);
    clickPoint(412,662)
    sleep(500);
    clickPoint(406,854)
    sleep(500);
    clickPoint(310,566)
    sleep(500);
    clickPoint(310,658)
    sleep(800);

clickPoint(60,532)
    sleep(800);
clickPoint(344,534)

    sleep(800);
clickPoint(58,828)


    sleep(800);
    clickPoint(184,230)
    //使用
    sleep(800);
    clickPoint(504,664)
    sleep(500);
    clickPoint(496,850)
    sleep(500);
    clickPoint(410,564)
    sleep(500);
    clickPoint(412,756)
    sleep(500);
    clickPoint(310,470)
    sleep(500);
    clickPoint(312,756)
    sleep(500);
    clickPoint(308,850)
    sleep(500);


    clickPoint(60,826)
    //合旗

    sleep(800);


    clickPoint(82,237)
    sleep(800);



    clickPoint(525,755)
    sleep(1200);
    clickPoint(297,280)
    sleep(800);
    clickPoint(605,852)


    sleep(1000);

    clickPoint(520,852)
    sleep(1200);
    clickPoint(297,280)
    sleep(800);
    clickPoint(605,852)


    ic=0

}