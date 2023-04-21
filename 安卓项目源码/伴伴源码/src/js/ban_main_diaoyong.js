//关闭所有弹出
function ban_main_close() {
    ban_isin_liwu()
    let node = descMatch(".*关注后，主播开播及时通知").getOneNodeInfo(0)
    if (node) {
        logd("判断--->> 关闭 关注提醒");
        toast("判断--->> 关闭 关注提醒");
        sleep(100);
        back()
        sleep(100);
    }

    let anode = desc("礼貌回应").getOneNodeInfo(0)
    if (anode) {
        logd("判断--->> 关闭 礼貌回应");
        toast("判断--->> 关闭 礼貌回应");
        sleep(100);
        back()
        sleep(100);
    }
    let bnode = desc("立即抢购").getOneNodeInfo(0)
    if (bnode) {
        logd("判断--->> 关闭 立即抢购");
        toast("判断--->> 关闭 立即抢购");
        sleep(100);
        back()
        sleep(100);
    }

    let cnode = desc("贡献 第 2 个标签，共 2 个").getOneNodeInfo(0)
    let dnode = desc("魅力\n第 1 个标签，共 2 个").getOneNodeInfo(0)
    if (cnode && dnode) {
        logd("判断--->> 关闭 魅力");
        toast("判断--->> 关闭 魅力");
        sleep(100);
        back()
        sleep(100);
    }
    let aanode = desc("我知道了").getOneNodeInfo(0)
    if (aanode) {
        logd("判断--->> 关闭 我知道了");
        toast("判断--->> 关闭 我知道了");
        sleep(100);
        back()
        sleep(100);
    }

    let qanode = desc("送给").getOneNodeInfo(0)
    if (qanode) {
        logd("判断--->> 关闭 错误送礼");
        toast("判断--->> 关闭 错误送礼");
        sleep(100);
        back()
        sleep(100);
    }

}

//分割文本
function main_fenge(yaofengede1wenben, fengefu) {
    if (yaofengede1wenben != null && yaofengede1wenben != "" && yaofengede1wenben.search(fengefu) > -1) {
        let fanhui = yaofengede1wenben.split(fengefu)
        return fanhui
    } else {
        return null
    }
}

//ocr 识别调用
function ban_ocr_find(x, y, x1, y1, finnal) {
    let finnala = finnal.split("")
    let finalret = 0
    let tmpImage = image.captureScreen(3, x, y, x1, y1)
    let tt = image.binaryzation(tmpImage, 1, 100)
    let result = ocr.ocrImage(tt, 10000, {"maxSideLen": 1024});
    if (result) {
        for (let i = 0; i < result.length; i++) {
            for (let j = 0; j < finnala.length; j++) {
                if (result[i].label.search(finnala[j]) > -1) {
//                    logd(" 找到 一个字 " + finnala[j]);
                    finalret = finalret + 1
                }
            }
            if (result[i].label.search(finnal) > -1) {
                //       logd(" 找到 一串 " + finnal);
                finalret = finalret + 1
            }
            if (finalret >= 1) {
                //logd(x * 1 + result[i].x * 1, y * 1 + result[i].y * 1);
                // clickPoint(x  * 1 + result[i].x * 1+ 38 , y  * 1+ result[i].y * 1)
                image.recycle(tt)
                image.recycle(tmpImage)
                return true
            } else {
                //  image.recycle(tt)
                //image.recycle(tmpImage)
                // logd(JSON.stringify(result[i].label));
//
            }
        }
    }
//    logd("耗时 {}", console.timeEnd(1))
    image.recycle(tt)
    image.recycle(tmpImage)


}

//获取钻石数量
function ban_shibie_zuanshi() {

    for (let i = 0; i < 8; i++) {
        sleep(10);
        let anode = desc("我的").getOneNodeInfo(0)
        if (anode) {
            main_clickfs(anode)
            let node = index(15).depth(14).drawingOrder(0).getOneNodeInfo(0)
            if (node) {
                let aa = node.desc
                if (!!aa) {
                    let aaa = node.desc.split("\n")
                    if (!!aaa) {
                        if (!!aaa[0]) {
                            return aaa[0]
                        }
                    }

                }
            }
        } else {

            for (let j = 0; j < 7; j++) {
                back()
                sleep(100);
            }
            let m = {
                "action": "android.intent.action.VIEW",
                "pkg": "com.imbb.banban.android",
                "className": "com.imbb.banban.android.MainActivity"
            };
            utils.openActivity(m)
            sleep(4500);
            if (i === 7) {
                return 0
            }
        }

    }

}

//是否到时间执行任务
function ban_istruetime_run(taime) {
    let nowtime = time()
    if (taime - nowtime <= 100000) {
        return true
    } else if (nowtime > taime) {
        return true
    } else {
        return false
    }
}