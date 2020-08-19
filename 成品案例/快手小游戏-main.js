/*
*快手小游戏
* date 2020年8月17日14:08:59
* create by 小松
* QQ:545481799
* */
//︷︷︷︷︷︷︷︷︷初始化︷︷︷︷︷︷︷︷︷
xs_初始化();
//var 话术 = readConfigString("话术");
var 话术 = file.readAllLines("/sdcard/Pictures/快手小游戏话术.txt");
话术 = 话术.toString();
话术 = 话术.split("----");
var 话术1, 话术2, 话术3
话术1 = 话术[0]
话术2 = 话术[1]
话术3 = 话术[2]
toastLog("话术1:" + 话术1 + ",话术2:" + 话术2 + ",话术3:" + 话术3)
//︸︸︸︸︸︸︸︸︸初始化︸︸︸︸︸︸︸︸︸
//︷︷︷︷︷︷︷︷︷刷新聊天室︷︷︷︷︷︷︷︷︷
function 进入聊天室() {
    RunApp("快手小游戏");
    sleep(2000)
    while (true) {
        if (findNode(text("聊天"))) {
            logd("消息页面");
            toastLog("消息页面");
            break;
        } else if (findNode(text("一起玩"))) {
            logd("一起玩");
            toastLog("一起玩");
            Tap(427, 920);  //点击聊天页面
        }
        sleep(2000);
        logd("等待进入消息页面");
        toastLog("等待进入消息页面")
    }
    shell.execCommand("am start -n com.kwai.sogame/com.kwai.sogame.subbus.chatroom.ChatRoomShowActivity")  //跳转到聊天室
    sleep(2000)
    while (true) {
        let 随机下滑 = random(1, 10)
        for (let R1 = 0; R1 < 随机下滑; R1++) {
            Swipe(141, 857, 148, 182);//向下滑动一页
            sleep(1000)
        }
        Tap(25, 162, 489, 674);
        for (let R1 = 0; R1 < 5; R1++) {
            if (findNode(text("想说些什么..."))) {
                logd("聊天室页面");
                return true
            }
            sleep(1000);
            logd("等待进入聊天室页面");
            toastLog("等待进入聊天室页面");
        }
        for (let R1 = 0; R1 < 10; R1++) {
            if (findNode(text("聊天室")) && findNode(text("榜单"))) {
                logd("聊天室主页面");
                break;
            } else {
                back();
                sleep(2000)
            }
        }

    }
}

function 找男点关注() {
    var i = 0
    while (true) {
        while (true) {
            try {
                var 加入聊天室 = textMatch("加入聊天室").getOneNodeInfo(10);
                if (加入聊天室) {
                    var 加入聊天室坐标 = 加入聊天室.parent();
                    var 头像坐标 = 加入聊天室坐标.child(0);
                    头像坐标 = 头像坐标.bounds
                    if (头像坐标) {
                        // logd(centerX(头像坐标), centerY(头像坐标));
                        Tap(centerX(头像坐标), centerY(头像坐标));  //点击当前进入聊天室的人
                        break;
                    }
                } else {
                    toast("无节点");
                }
                if (findNode(text("暂不同意"), true)) {
                    logd("暂不同意");
                    toastLog("暂不同意")
                }
            } catch (err) {
                loge(err);
            }
            sleep(500);
            logd("等待找到加入聊天室的人");
            toastLog("等待找到加入聊天室的人");
        }
        for (let R1 = 0; R1 < 3; R1++) {
            if (findNode(textMatch("男"))) {
                i = i + 1
                logd("性别男,点关注,第" + i + "次");
                if (i >= 20) {
                    logd("已经点满关注");
                    toastLog("已经点满关注");
                    return true
                }
                toastLog("性别男,点关注,第" + i + "次")
                findNode(text("关注"), true);
                break;
            } else if (findNode(textMatch("女"))) {
                logd("性别女");
                toastLog("性别女");
                break;
            }
            sleep(1000);
            logd("判断男女");
            toastLog("判断男女")
        }
        for (let R1 = 0; R1 < 10; R1++) {
            if (findNode(text("想说些什么..."))) {
                logd("聊天室页面");
                break;
            } else {
                back();
                sleep(2000)
            }
        }
    }
}

function 回复新消息() {
    while (true) {
        if (findNode(text("聊天"))) {
            logd("消息页面");
            toastLog("消息页面");
            for (let R1 = 0; R1 < 5; R1++) {
                Swipe(204, 302, 177, 865);
                sleep(1000)
            }
            break;
        } else if (findNode(text("一起玩"))) {
            logd("一起玩");
            toastLog("一起玩");
            Tap(427, 920)  //点击聊天页面
        } else {
            back()
        }
        sleep(2000);
        logd("等待进入消息页面");
        toastLog("等待进入消息页面")
    }
    var i = 0
    while (true) {
        for (let R1 = 0; R1 < 7; R1++) {
            if (findNodeXY(id("com.kwai.sogame:id/unread_count"), true)) {
                logd("id新消息");
            } else if (findNodeXY(textMatch("我是"), true)) {
                logd("text新消息");
            } else {
                break;
            }
            sleep(2000)
            if (findNode(textMatch("扣扣"))) {
                logd("已经发送过了");
                back();
                sleep(2000)
            } else if (findNode(text("发送"))) {
                logd("发送消息页面");
                setText(话术1);
                sleep(500)
                findNodeXY(text("发送"), true);
                sleep(500)
                setText(话术2);
                sleep(500)
                findNodeXY(text("发送"), true);
                sleep(500)
                setText(话术3);
                sleep(500)
                findNodeXY(text("发送"), true);
                sleep(500)
                back();
                sleep(2000)
            }
        }
        i = i + 1
        logd("已经检测新消息,第" + i + "次");
        toastLog(("已经检测新消息,第" + i + "次"))
        if (i >= 5) {
            logd("消息检测完成");
            toastLog("消息检测完成");
            for (let R1 = 0; R1 < 10; R1++) {
                if (findNode(text("聊天"))) {
                    logd("消息页面");
                    toastLog("消息页面");
                    break;
                } else {
                    back();
                    sleep(2000)
                }
            }
            return true
        }
        Swipe(177, 865, 204, 302);
        sleep(1000)
    }
}

function 循环关注发消息() {
    while (true) {
        if (进入聊天室()) {
            if (找男点关注()) {
                if (回复新消息()) {
                }
            }
        }
    }
}

//︸︸︸︸︸︸︸︸︸刷新聊天室︸︸︸︸︸︸︸︸︸
//︷︷︷︷︷︷︷︷︷主体︷︷︷︷︷︷︷︷︷
function 功能选择() {
    循环关注发消息()
}

function 主体() {
    功能选择();
}

主体();
//︸︸︸︸︸︸︸︸︸主体︸︸︸︸︸︸︸︸︸

//︷︷︷︷︷︷︷︷︷通用函数︷︷︷︷︷︷︷︷︷
function xs_节点识别对方text() {
    let selector = id("com.mosheng:id/left_iv_text").getNodeInfo(1000);
    //logi(selector[4]["text"]);
    if (selector) {
        logd("遍历成功")
        for (let i in selector) {
            if (selector[i]["text"] != "") {
                logi(selector[i]["text"] + "--->" + i);
                sleep(10)
                var 对方发来的消息 = selector[i]["text"]
            }
        }
        toastLog("对方发来的消息:" + 对方发来的消息)
        return 对方发来的消息
    } else {
        loge("遍历失败")
    }
}

//︸︸︸︸︸︸︸︸︸通用函数︸︸︸︸︸︸︸︸︸
