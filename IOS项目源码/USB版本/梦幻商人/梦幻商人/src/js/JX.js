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

function Jx_function() {
}
let JX = new Jx_function();
var 购买循环 = 0;
var 道具满循环 = 0;
var 循环退出 = 0 ;
Jx_function.prototype.JX=function() {

    var 打开梦幻 = openApp("com.netease.mhxyhtb");
    var 打开app = 0;
    var 进入互通版循环 = 0;
    var 判断进入界面循环 = 0;

    while (true) {
        if (打开梦幻) {
            logd("打开梦幻西游互通版")
            break;
        } else {
            打开app++
            if (打开app === 3) {
                logd("请重新，启动脚本")
            }
            logd("打开梦幻西游互通版失败，再次打开")
        }
    }

    logd("等待十秒")
    sleep(10000)


    while (true) {
        let 进入互通版 = GJ.图片查找("进入互通版", 6, 350, 326, 980, 1)
        if (进入互通版) {
            logd("进入互通版")
            break;
        } else {
            进入互通版循环++
            sleep(1000)
            logd("进入互通版等待" + 进入互通版循环 + "秒")
            if (进入互通版循环 === 20) {
                sleep(100)
                clickPoint(146, 656)
                break;
            }
        }
    }

    while (true) {
        let 判断进入界面 = GJ.透明找图("判断进入界面", 552, 448, 744, 904)
        let 判断进入界面1 = GJ.透明找图("判断界面", 312,1002,694,1298)
        let 判断进入界面2 = GJ.透明找图("消息", 400,33,730,716)
        if (判断进入界面===true || 判断进入界面1===true || 判断进入界面2===true) {
            logd("进入界面")
            let 关闭 = GJ.透明找图("关闭", 566, 950, 746, 1284, 1)
            if (关闭) {
                logd("关闭每日签到")
                sleep(1000)
                let 关闭聊天 = GJ.透明找图("关闭聊天", 52, 4, 378, 438, 1)
                if (关闭聊天) {
                    logd("关闭聊天")
                } else {
                    clickPoint(212, 370)
                }
                sleep(1000)
                GJ.透明找图("关闭指引", 438, 408, 678, 758, 1)
                sleep(1000)
                GJ.透明找图("关闭任务", 322, 974, 618, 1150, 1)
                sleep("300")
                GJ.打开道具()
            } else {
                clickPoint(708, 1158)
            }
            break;
        } else {
            判断进入界面循环++
            sleep(1000)
            clickPoint(146, 656)
            logd("判断进入界面等待" + 判断进入界面循环 + "秒")
            if (进入互通版循环 === 20) {
                sleep(100)
                doubleClickPoint(146, 656)
            }
            if (判断进入界面循环 === 100) {
                return;
            }
        }
    }



    GJ.红色旗子进入商人()





    // let 十 = timeFormat("10:10")
    // let 二十 = timeFormat("20:10")
    // let 三十 = timeFormat("30:10")
    // let 四十 = timeFormat("40:10")
    // let 五十 = timeFormat("50:10")
    // let 六十 = timeFormat("00:10")
    // let aa = a.toString();
    // let 十a = 十.toString();
    // let 二十a = 二十.toString();
    // let 三十a = 三十.toString();
    // let 四十a = 四十.toString();
    // let 五十a = 五十.toString();
   // let 六十a = 六十.toString();

    let eight = file.readLine("C:/mhck/设备"+JSON.parse(JSON.stringify(获取设备))+".txt",8);
    if (eight === "未激活符石") {
        JX.未激活符石()
    }else if (eight === "黑宝石") {
        JX.黑宝石()
    }else if (eight === "清灵净瓶") {
        JX.清灵净瓶()
    }else if (eight === "速度红色") {
        JX.速度红色()
    }else if (eight === "黄色伤害") {
        JX.黄色伤害()
    }else if (eight === "灵篆") {
        JX.灵篆()
    }else if (eight == null) {

    }


    let nine = file.readLine("C:/mhck/设备"+JSON.parse(JSON.stringify(获取设备))+".txt",9);
    if (nine === "未激活符石") {
        JX.未激活符石()
    }else if (nine === "黑宝石") {
        JX.黑宝石()
    }else if (nine === "清灵净瓶") {
        JX.清灵净瓶()
    }else if (nine === "速度红色") {
        JX.速度红色()
    }else if (nine === "黄色伤害") {
        JX.黄色伤害()
    }else if (nine === "灵篆") {
        JX.灵篆()
    }else if (nine == null) {

    }

    let ten = file.readLine("C:/mhck/设备"+JSON.parse(JSON.stringify(获取设备))+".txt",10);
    if (ten === "未激活符石") {
        JX.未激活符石()
    }else if (ten === "黑宝石") {
        JX.黑宝石()
    }else if (ten === "清灵净瓶") {
        JX.清灵净瓶()
    }else if (ten === "速度红色") {
        JX.速度红色()
    }else if (ten === "黄色伤害") {
        JX.黄色伤害()
    }else if (ten === "灵篆") {
        JX.灵篆()
    }else if (ten == null) {

    }


    let eleven = file.readLine("C:/mhck/设备"+JSON.parse(JSON.stringify(获取设备))+".txt",11);
    if (eleven === "未激活符石") {
        JX.未激活符石()
    }else if (eleven === "黑宝石") {
        JX.黑宝石()
    }else if (eleven === "清灵净瓶") {
        JX.清灵净瓶()
    }else if (eleven === "速度红色") {
        JX.速度红色()
    }else if (eleven === "黄色伤害") {
        JX.黄色伤害()
    }else if (eleven === "灵篆") {
        JX.灵篆()
    }else if (eleven == null) {

    }


    let twelve = file.readLine("C:/mhck/设备"+JSON.parse(JSON.stringify(获取设备))+".txt",12);
    if (twelve === "未激活符石") {
        JX.未激活符石()
    }else if (twelve === "黑宝石") {
        JX.黑宝石()
    }else if (twelve === "清灵净瓶") {
        JX.清灵净瓶()
    }else if (twelve === "速度红色") {
        JX.速度红色()
    }else if (twelve === "黄色伤害") {
        JX.黄色伤害()
    }else if (twelve === "灵篆") {
        JX.灵篆()
    }else if (twelve == null) {

    }




    let thirteen = file.readLine("C:/mhck/设备"+JSON.parse(JSON.stringify(获取设备))+".txt",13);
    if (thirteen === "未激活符石") {
    JX.未激活符石()
    }else if (thirteen === "黑宝石") {
    JX.黑宝石()
    }else if (thirteen === "清灵净瓶") {
    JX.清灵净瓶()
    }else if (thirteen === "速度红色") {
    JX.速度红色()
    }else if (thirteen === "黄色伤害") {
    JX.黄色伤害()
    }else if (thirteen === "灵篆") {
    JX.灵篆()
    }else if (thirteen == null) {

    }





    sleep(300)
    clickPoint(715,1282)
    sleep(300)
    if (购买循环>=12) {
        GJ.红色旗子仓库()
    }
    sleep(800)
    clickPoint(65, 462)
    sleep(500)
    clickPoint(110, 1015)
    sleep(500)
    clickPoint(302, 812)
    sleep(300)
    stopApp("com.netease.mhxyhtb");
    home()

}

Jx_function.prototype.清灵净瓶=function() {
    sleep(300)
    clickPoint(644,1192)
    sleep(300)
    JX.剩余金额判断()
    while (true) {
        let 判断清灵净瓶 = GJ.清灵净瓶()
        if (判断清灵净瓶) {
            logd(购买循环)
            购买循环++
            道具满循环++
            // if (道具满循环 === 2) {
            //     sleep(200)
            // }
            if (购买循环 >= 20) {
                sleep(1000);
                let 物品满 = GJ.透明找图("请预留一个物品栏空间", 120, 187, 725, 774)
                if (物品满) {
                    sleep(300)
                    clickPoint(715, 1282)
                    sleep(100)
                    GJ.红色旗子仓库()
                    购买循环 = 0
                    道具满循环 = 0
                    GJ.红色旗子商人()
                    sleep(800)
                    clickPoint(642,1044)
                    sleep(800)
                }
            }
        } else {
            sleep(800)
            循环退出++
            if (循环退出 === 1) {
                循环退出 = 0
                break
            }
        }
        // 清灵净瓶
    }
}
Jx_function.prototype.星辉石=function() {
    sleep(300)
    clickPoint(644,1192)
    sleep(300)
    JX.剩余金额判断()
    while (true) {
        let 判断清灵净瓶 = GJ.清灵净瓶()
        if (判断清灵净瓶) {
            logd(购买循环)
            购买循环++
            道具满循环++
            // if (道具满循环 === 2) {
            //     sleep(200)
            // }
            if (购买循环 >= 20) {
                sleep(1000);
                let 物品满 = GJ.透明找图("请预留一个物品栏空间", 120, 187, 725, 774)
                if (物品满) {
                    sleep(300)
                    clickPoint(715, 1282)
                    sleep(100)
                    GJ.红色旗子仓库()
                    购买循环 = 0
                    道具满循环 = 0
                    GJ.红色旗子商人()
                    sleep(800)
                    clickPoint(642,1044)
                    sleep(800)
                }
            }
        } else {
            sleep(800)
            循环退出++
            if (循环退出 === 1) {
                循环退出 = 0
                break
            }
        }
        // 清灵净瓶
    }
}
Jx_function.prototype.未激活符石=function() {
    sleep(800)
    clickPoint(642,1037)
    sleep(800)
    JX.剩余金额判断()
    while (true) {
        let 判断未激活符石 = GJ.未激活符石()
        if (判断未激活符石) {
            logd(购买循环)
            购买循环++
            道具满循环++
            if (购买循环 >= 20) {
                sleep(1000);
                let 物品满 = GJ.透明找图("请预留一个物品栏空间", 120, 187, 725, 774)
                if (物品满) {
                    sleep(300)
                    clickPoint(715, 1282)
                    sleep(100)
                    GJ.红色旗子仓库()
                    购买循环 = 0
                    道具满循环 = 0
                    GJ.红色旗子商人()
                    sleep(800)
                    clickPoint(642,1044)
                    sleep(800)
                }
            }
        } else {
            sleep(800)
            循环退出++
            if (循环退出===1) {
                循环退出=0
                break
            }
        }
    }
    // 未激活符石
}
Jx_function.prototype.灵篆=function() {
    sleep(300)
    clickPoint(644,1192)
    sleep(300)
    JX.剩余金额判断()
    while (true) {
        let 判断灵篆 = GJ.灵篆()
        if (判断灵篆) {
            logd(购买循环)
            购买循环++
            道具满循环++
            if (购买循环 >= 20) {
                sleep(1000);
                let 物品满 = GJ.透明找图("请预留一个物品栏空间", 120, 187, 725, 774)
                if (物品满) {
                    sleep(300)
                    clickPoint(715, 1282)
                    sleep(100)
                    GJ.红色旗子仓库()
                    购买循环 = 0
                    道具满循环 = 0
                    GJ.红色旗子商人()
                    sleep(800)
                    clickPoint(642,1044)
                    sleep(800)
                }
            }
        } else {
            sleep(800)
            循环退出++
            if (循环退出===1) {
                循环退出=0
                break
            }
        }
    }
//灵篆
}
Jx_function.prototype.黑宝石=function() {

    sleep(800)
    clickPoint(642,1037)
    sleep(800)
    JX.剩余金额判断()
    while (true) {
        let 判断黑宝石 = GJ.黑宝石()
        if (判断黑宝石) {
            logd(购买循环)
            购买循环++
            道具满循环++
            if (购买循环 >= 20) {
                sleep(1000);
                let 物品满 = GJ.透明找图("请预留一个物品栏空间", 120, 187, 725, 774)
                if (物品满) {
                    sleep(300)
                    clickPoint(715, 1282)
                    sleep(100)
                    GJ.红色旗子仓库()
                    购买循环 = 0
                    道具满循环 = 0
                    GJ.红色旗子商人()
                    sleep(800)
                    clickPoint(642,1044)
                    sleep(800)
                }
            }
        } else {
            sleep(800)
            循环退出++
            if (循环退出===1) {
                循环退出=0
                break
            }
        }
    }
//黑宝石


}
Jx_function.prototype.速度红色=function() {

    sleep(800)
    clickPoint(642,1037)
    sleep(800)
    JX.剩余金额判断()
    while (true) {
        let 判断速度红色 = GJ.速度红色()
        if (判断速度红色) {
            logd(购买循环)
            购买循环++
            道具满循环++
            if (购买循环 >= 20) {
                sleep(1000);
                let 物品满 = GJ.透明找图("请预留一个物品栏空间", 120, 187, 725, 774)
                if (物品满) {
                    sleep(300)
                    clickPoint(715, 1282)
                    sleep(100)
                    GJ.红色旗子仓库()
                    购买循环 = 0
                    道具满循环 = 0
                    GJ.红色旗子商人()
                    sleep(800)
                    clickPoint(642,1044)
                    sleep(800)
                }
            }
        } else {
            sleep(800)
            循环退出++
            if (循环退出===1) {
                循环退出=0
                break
            }
        }
    }
//速度红色

}
Jx_function.prototype.黄色伤害=function() {

    sleep(800)
    clickPoint(642,1037)
    sleep(800)
    JX.剩余金额判断()
    while (true) {
        let 判断速度黄色 = GJ.黄色伤害()
        if (判断速度黄色) {
            logd(购买循环)
            购买循环++
            道具满循环++
            if (购买循环 >= 20) {
                sleep(1000);
                let 物品满 = GJ.透明找图("请预留一个物品栏空间", 120, 187, 725, 774)
                if (物品满) {
                    sleep(300)
                    clickPoint(715, 1282)
                    sleep(100)
                    GJ.红色旗子仓库()
                    购买循环 = 0
                    道具满循环 = 0
                    GJ.红色旗子商人()
                    sleep(800)
                    clickPoint(642,1044)
                    sleep(800)
                }
            }
        } else {
            sleep(800)
            循环退出++
            if (循环退出===1) {
                循环退出=0
                break
            }
        }
    }
//黄色伤害

}
Jx_function.prototype.剩余金额判断=function() {
    let isa = false
    let src=imageHandlerIOS.captureScreenMat();

    let  剪切 = imageHandlerIOS.cropMat(src,89,1114,139,1298);
    if (!剪切) {logi("剪切失败");}
    let 旋转 = imageHandlerIOS.rotateMat(剪切,270);
    if (!旋转) {logi("旋转失败");}
    //imageHandlerIOS.saveMat(旋转,"C:/b1.png");
    let rects = imageHandlerIOS.getWords(旋转,"",-1,0,0,0,0.8,false)
    imageHandlerIOS.saveMat(剪切,"C:/temp.png");
    let name = file.readLine("C:/mhck/设备"+JSON.parse(JSON.stringify(获取设备))+".txt",7);
    if (rects) {
       // logd(JSON.stringify(rects[0].info));
        isa = true
        let 数字 = JSON.stringify(rects[0].info-0)
        if (数字 >= name) {
            logd("现在有"+数字+"金币")
        } else {
            loge("没钱了")
                stopApp("com.netease.mhxyhtb");

                exit();
        }
    } else {
        logw("未识别到结果");
    }
    imageHandlerIOS.recycle(src,剪切,旋转);
    return isa;
}