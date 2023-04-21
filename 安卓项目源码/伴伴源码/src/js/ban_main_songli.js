//送礼物
function ban_songli() {
    while (true) {
        ban_yun_get_dianzan() //云端更新数据
        if (yun_ban_all.yun_live_wancheng == "未完成") {
            if (yun_ban_all.yun_gif_1 != "完成") {
                logd("时间 1 --->>  " + " 主播名字 ： " + yun_ban_all.yun_live_name + " 礼物名字 ： " + yun_ban_all.yun_gif_1);
                toast("时间 1 --->>  " + " 主播名字 ： " + yun_ban_all.yun_live_name + " 礼物名字 ： " + yun_ban_all.yun_gif_1);
                if (!ban_istrue_in_true_gift()) {
                    if (ban_join_live()) {    //进入直播间
                        if (ban_zhaozi()) {      //找到直播的人
                            if (ban_songli_liwu(yun_ban_all.yun_gif_1)) { //找礼物
                                while (true) {

                                    if (yun_ban_all.yun_gif_1 == "完成") {
                                        break
                                    }

                                    if (time() >= yun_ban_all.yun_live_time1) {
                                        if (yun_ban_all.yun_gif_1 == "完成") {
                                            break
                                        }
                                        ban_click_zengsong()
                                        sleep(random(2000, 3000));
                                        ban_up_time(1)
                                        ban_yun_get_dianzan() //云端更新数据
                                        if (yun_ban_all.yun_gif_1 == "完成") {
                                            break
                                        }
                                    } else {
                                        ban_yun_get_dianzan() //云端更新数据
                                        logd("时间1  --->>  等待  --->> " + (time() - yun_ban_all.yun_live_time1) / 1000 + "  秒");
                                        toast("时间1  --->>  等待  --->> " + (time() - yun_ban_all.yun_live_time1) / 1000 + "  秒");
                                        sleep(random(1000, 2500));
                                    }
                                }
                            }
                        }
                    }
                } else {
                    if (ban_songli_liwu(yun_ban_all.yun_gif_1)) { //找礼物
                        while (true) {
                            if (yun_ban_all.yun_gif_1 == "完成") {
                                break
                            }
                            if (time() >= yun_ban_all.yun_live_time1) {
                                ban_click_zengsong()
                                sleep(random(2000, 3000));
                                ban_up_time(1)
                                ban_yun_get_dianzan() //云端更新数据

                                if (yun_ban_all.yun_gif_1 == "完成") {
                                    break
                                }
                            } else {

                                logd("时间1  --->>  等待  --->> " + (time() - yun_ban_all.yun_live_time1));
                                toast("时间1  --->>  等待  --->> " + (time() - yun_ban_all.yun_live_time1));
                                sleep(random(1000, 2500));
                            }
                        }
                    }
                }
            }

            if (yun_ban_all.yun_gif_2 != "完成") {
                logd("时间 2 --->>  " + " 主播名字 ： " + yun_ban_all.yun_live_name + " 礼物名字 ： " + yun_ban_all.yun_gif_2);
                toast("时间 2 --->>  " + " 主播名字 ： " + yun_ban_all.yun_live_name + " 礼物名字 ： " + yun_ban_all.yun_gif_2);

                if (!ban_istrue_in_true_gift()) {
                    if (ban_join_live()) {    //进入直播间
                        if (ban_zhaozi()) {      //找到直播的人
                            if (ban_songli_liwu(yun_ban_all.yun_gif_2)) { //找礼物
                                while (true) {
                                    if (yun_ban_all.yun_gif_2 == "完成") {
                                        break
                                    }
                                    if (time() >= yun_ban_all.yun_live_time2) {

                                        ban_click_zengsong()
                                        sleep(random(2000, 3000));
                                        ban_up_time(2)
                                        ban_yun_get_dianzan() //云端更新数据
                                        if (yun_ban_all.yun_gif_2 == "完成") {
                                            break
                                        }

                                    } else {

                                        logd("时间1  --->>  等待  --->> " + (time() - yun_ban_all.yun_live_time2));

                                        toast("时间1  --->>  等待  --->> " + (time() - yun_ban_all.yun_live_time2));
                                        sleep(random(1000, 2500));
                                    }
                                }
                            }
                        }
                    }
                } else {

                    if (ban_songli_liwu(yun_ban_all.yun_gif_2)) { //找礼物
                        while (true) {
                            if (yun_ban_all.yun_gif_2 == "完成") {
                                break
                            }
                            if (time() >= yun_ban_all.yun_live_time2) {

                                ban_click_zengsong()
                                sleep(random(2000, 3000));
                                ban_up_time(2)
                                ban_yun_get_dianzan() //云端更新数据
                                if (yun_ban_all.yun_gif_2 == "完成") {
                                    break
                                }
                            } else {

                                logd("时间2  --->>  等待  --->> " + (time() - yun_ban_all.yun_live_time2));

                                toast("时间2  --->>  等待  --->> " + (time() - yun_ban_all.yun_live_time2));
                                sleep(random(1000, 2500));
                            }
                        }
                    }
                }
            }

            if (yun_ban_all.yun_gif_3 != "完成") {
                logd("时间 3 --->>  " + " 主播名字 ： " + yun_ban_all.yun_live_name + " 礼物名字 ： " + yun_ban_all.yun_gif_3);
                toast("时间 3 --->>  " + " 主播名字 ： " + yun_ban_all.yun_live_name + " 礼物名字 ： " + yun_ban_all.yun_gif_3);

                if (!ban_istrue_in_true_gift()) {
                    if (ban_join_live()) {    //进入直播间
                        if (ban_zhaozi()) {      //找到直播的人
                            if (ban_songli_liwu(yun_ban_all.yun_gif_3)) { //找礼物
                                while (true) {
                                    if (yun_ban_all.yun_gif_3 == "完成") {
                                        break
                                    }
                                    if (time() >= yun_ban_all.yun_live_time3) {

                                        ban_click_zengsong()
                                        sleep(random(2000, 3000));
                                        ban_up_time(3)
                                        ban_yun_get_dianzan() //云端更新数据
                                        if (yun_ban_all.yun_gif_3 == "完成") {
                                            break
                                        }
                                    } else {

                                        logd("时间3  --->>  等待  --->> " + (time() - yun_ban_all.yun_live_time3));

                                        toast("时间3  --->>  等待  --->> " + (time() - yun_ban_all.yun_live_time3));
                                        sleep(random(1000, 2500));
                                    }
                                }
                            }
                        }
                    }
                } else {
                    if (ban_songli_liwu(yun_ban_all.yun_gif_3)) { //找礼物
                        while (true) {
                            if (yun_ban_all.yun_gif_3 == "完成") {
                                break
                            }
                            if (time() >= yun_ban_all.yun_live_time3) {
                                ban_click_zengsong()
                                sleep(random(2000, 3000));
                                ban_up_time(3)
                                ban_yun_get_dianzan() //云端更新数据
                                if (yun_ban_all.yun_gif_3 == "完成") {
                                    break
                                }
                            } else {

                                logd("时间3  --->>  等待  --->> " + (time() - yun_ban_all.yun_live_time3));
                                toast("时间3  --->>  等待  --->> " + (time() - yun_ban_all.yun_live_time3));
                                sleep(random(1000, 2500));
                            }
                        }
                    }
                }


            }


            if (yun_ban_all.yun_gif_3 == "完成" && yun_ban_all.yun_gif_2 == "完成" && yun_ban_all.yun_gif_1 == "完成") {
                ban_up_time(4)
                ban_yun_get_dianzan()
            }


        } else {
            logd("云端--->>  任务都已经完成\n 开始获取新任务");
            toast("云端--->>  任务都已经完成\n 开始获取新任务");
            ban_yun_get_dianzan()
            sleep(3500);
        }
    }
}

//点击赠送
function ban_click_zengsong() {
    for (let i = 0; i < 6; i++) {
        sleep(500);
        let node = desc("赠送").getOneNodeInfo(1000)
        if (node) {
            let a = node.clickEx()
            if (a) {
                return true
            } else {

            }
        } else {
            if (i == 5) {
                return false
            }
        }
    }


}

//更新时间完成
function ban_up_time(ci) {
    let timeaa = "time0"
    switch (ci) {
        case 1 :
            timeaa = "ban_time_1_gift"
            break
        case 2 :
            timeaa = "ban_time_2_gift"
            break
        case  3 :
            timeaa = "ban_time_3_gift"

        case  4:
            timeaa = "ban_istrue"
    }
    let url = "http://ht.qforg.com:8001/Ban_updtae_time";
    let pa = {"id": readConfigString('yun_ban_id'), "which": timeaa, "lianjie": yun_ban_all.yun_live_lianjie};
    let x = http.httpGet(url, pa, 10 * 1000, {"User-Agent": "test"});
    x = JSON.parse(x)
    if (!!x) {
        if (x.msg == "更新成功") {
            logd("云 --- >> 更新成功");
            toast("云 --- >> 更新成功");
        }
    }
}

//更新任务状态
function ban_up_renwu_do(thing) {
    let url = "http://ht.qforg.com:8001/Ban_updtae_now_run";
    let pa = {"id": readConfigString('yun_ban_id'), "which": thing, "lianjie": yun_ban_all.yun_live_lianjie};
    let x = http.httpGet(url, pa, 10 * 1000, {"User-Agent": "test"});

    if (!!x) {
        x = JSON.parse(x)
        if (x.msg == "更新成功") {
            logd("云 --- >> 更新成功");
            toast("云 --- >> 更新成功");
        }
    }


}

//是否正确在要送礼物的界面
function ban_istrue_in_true_gift() {
    let node = desc(".*钻").getOneNodeInfo(0)
    let anode = desc("赠送").getOneNodeInfo(0)
    let bnode = desc("取消").getOneNodeInfo(0)
    let cnode = desc("全麦").getOneNodeInfo(0)
    if (node && anode) {
        if (bnode || cnode) {
            main_bendi.istrue_in = false
            return false
        } else {
            main_bendi.istrue_in = true
            return true
        }
    }

}


//云端获取点赞数据
function ban_yun_get_dianzan() {
    let url = "http://ht.qforg.com:8001/Ban_Mobile_Get_DianZan";
    let pa = {"id": readConfigString('yun_ban_id')};
    let x = http.httpGet(url, pa, 10 * 1000, {"User-Agent": "test"});
    // toast(" result->     " + x);
    //loge("result ->     " + x);
    if (x != "" && x != null) {
        x = JSON.parse(x)
        if (x.code == 200) {
            yun_ban_all.yun_live_lianjie = x.data.ban_lianjie //进入直播间的链接
            yun_ban_all.yun_live_name = x.data.ban_name    //进入直播间的名字
            // yun_ban_all.yun_live_liwu = x.data.ban_lianjie //进入直播间的链接

            yun_ban_all.yun_live_time1 = x.data.ban_time1  //时间1
            yun_ban_all.yun_live_time2 = x.data.ban_time2  //时间2
            yun_ban_all.yun_live_time3 = x.data.ban_time3  //时间3

            yun_ban_all.yun_live_wancheng = x.data.ban_istrue  //是否已经完成

            yun_ban_all.yun_live_istrue_xinyun = x.data.ban_xinyun //是否 送 幸运星
            yun_ban_all.yun_live_istrue_wuse = x.data.ban_wuse //是否 送 五色星
            yun_ban_all.yun_live_istrue_qicai = x.data.ban_qicai //是否 送 七色星

            yun_ban_all.yun_gif_1 = x.data.ban_time_1_gift  //礼物一 是否完成 或名字
            yun_ban_all.yun_gif_2 = x.data.ban_time_2_gift  //礼物二 是否完成 或名字
            yun_ban_all.yun_gif_3 = x.data.ban_time_3_gift  //礼物三 是否完成 或名字
        }
    }
}

//进入直播间
function ban_join_live() {
    for (let i = 0; i < 5; i++) {
        if (ban_is_in_true_live(yun_ban_all.yun_live_name)) {
            logd("在  " + yun_ban_all.yun_live_name + "   的 直播间");
            toast("在  " + yun_ban_all.yun_live_name + "   的 直播间");
            ban_up_renwu_do("在  " + yun_ban_all.yun_live_name + "   的 直播间")
            return true
        } else {
            for (let i = 0; i < 7; i++) {
                back()
                sleep(50);
            }

            //   utils.setClipboardText(yun_ban_all.yun_live_lianjie);
            utils.setClipboardText(yun_ban_all.yun_live_lianjie)
            ban_main_run_banban()
            sleep(6600);
            // toast("设置结果:"+r);
        }
    }
}

//是否在指定直播间
function ban_is_in_true_live() {
    let node = descMatch(".*" + yun_ban_all.yun_live_name + ".*").getOneNodeInfo(0)
    if (node) {
        ban_up_renwu_do("在  " + yun_ban_all.yun_live_name + "   的 直播间   true")
        return true
    } else {
        return false
    }

}

//找到人并打开 识字方法打   直到送礼界面
function ban_zhaozi() {
    let node = clz("android.view.View").pkg("com.imbb.banban.android").depth(12).clickable(true).getNodeInfo(1000)
    if (node) {
        let aaa = ""
        for (let i = 0; i < node.length; i++) {
            let aqq = node[i].bounds
            if (node[i].desc == "说点什么..." || node[i].desc == "上座") {
                return
            }
            let aq1 = aqq.bottom - aqq.top    //高度差
            let aq2 = aqq.right - aqq.left    //长度差
            if (aq1 > 70 || aq1 == aq2) {
                //   logd("开始查找   " + node[i].desc + "      " + node[i].index);
                aaa = node[i].bounds
                let qqq = ban_ocr_find(aaa.left - 50, aaa.top + 70, aaa.right, aaa.bottom * 1 + 98, yun_ban_all.yun_live_name)
                if (qqq) {
                    sleep(50);
                    if (ban_ercishaixuan(yun_ban_all.yun_live_name, node[i])) {
                        logd("成功找到  " + node[i].index);
                        ban_openren_gift()

                        return true
                    } else {
                        logd("没找到  " + node[i].index);
                    }
                    // }
                }
            } else {
//             logd("不符合   " + node[i].index);
            }
        }
    }
}


//是否有说点什么
function ban_shuodian_shenm() {
    let node = desc("说点什么...").getOneNodeInfo(0)
    if (node) {
        return true
    } else {
        return false
    }
}

//判断是否打开了资料页
function ban_ercishaixuan(name, aq) {
    for (let i = 0; i < 5; i++) {
        let node = descMatch(".*" + yun_ban_all.yun_live_name + ".*").getOneNodeInfo(0)
        let anode = desc("打赏").getOneNodeInfo(0)
        let qnode = descMatch("ID:" + ",*").getOneNodeInfo(1000)
        if (!anode) {
            if (ban_shuodian_shenm()) {
                main_clickfs(aq)
                sleep(random(2200, 3500));
            }
        } else if (node && qnode) {
            return true
        } else {
            if (i == 4) {
                if (anode) {
                    back()
                    sleep(random(1000, 1500));
                    return false
                }
            }
        }
    }
}

//打开指定人的送礼界面
function ban_openren_gift() {
    for (let i = 0; i < 10; i++) {
        let node = desc("打赏").getOneNodeInfo(1000)
        if (node) {
            main_clickfs(node)
        }
        if (ban_isin_liwu()) {
            return true
        }
    }
}

//let node = desc("幸运星").getOneNodeInfo(1000)

//送指定礼物
function ban_songli_liwu(liwuname) {
    for (let i = 0; i < 15; i++) {
        logd("");
        let node = descMatch(liwuname + ".*").getOneNodeInfo(100)
        if (node) {
            logd("找到了");
            main_clickfs(node)
            return true
        } else {
            ban_gift_gun()
            sleep(200);
        }
    }

}

//滑动礼物界面
function ban_gift_gun() {
    let node = index(0).depth(14).getOneNodeInfo(0)
    let result = node.scrollForward()
    if (result) {
        //toast("滚动成功");
        sleep(random(100, 300));
    } else {
        //toast("滚动失败");
    }
}


// 老方法打开  ↓↓↓↓↓↓↓↓↓↓↓↓

//循环打开了界面
function ban_must_open_gift() {
    for (let i = 0; i < 20; i++) {
        if (ban_isin_liwu()) {
            return true
        } else {
            if (ban_isin_live(true)) {
                ban_open_gift()
                ban_open_gift_biaoqian()
            } else {
                if (ban_isinliwu_notin_biaoqian()) {
                    ban_open_gift_biaoqian()
                } else {
                    if (i >= 19) {
                        ban_main_back()
                    }
                }
                logd("尝试 打开 礼物节目 --->> " + i + "    次");
                toast("尝试 打开 礼物节目 --->> " + i + "    次");
            }
        }
        sleep(10);
    }
}

//返回所有到桌面
function ban_main_back() {
    for (let i = 0; i < 7; i++) {
        back()
        sleep(100);
    }
    ban_main_run_banban()
}


//是否在点开礼物 不在礼物标签也
function ban_isinliwu_notin_biaoqian() {
    let anode = desc("赠送").getOneNodeInfo(0);
    if (anode) {
        logd("在   礼物标签页面");
        toast("在   礼物标签页面");
        return true
    } else {
        return false
    }
}

//是否在直播界面
function ban_isin_live(a) {
    let node = desc("说点什么...").getOneNodeInfo(0)
    if (node) {
        logd("判断 --->> 在直播界面");
        toast("判断 --->> 在直播界面");
        return true
    } else {
        logd("判断 --->> 不在直播界面");
        toast("判断 --->> 不在直播界面");
        if (a) {
            ban_open_gift_biaoqian()
        }
        return false
    }
}

//是否在礼物界面
function ban_isin_liwu() {
    let node = descMatch("礼物\n.*").selected(true).getOneNodeInfo(0)
    if (node) {
        logd("判断 --->> 在礼物界面");
        toast("判断 --->> 在礼物界面");
        return true
    } else {
        ban_main_close()
        ban_open_gift()
        ban_open_gift_biaoqian()
        return false
    }
}

//打开礼物界面
function ban_open_gift() {
    //  let node = desc("五色星").getOneNodeInfo(1000)
    let node = desc("说点什么...").getOneNodeInfo(0)
    if (node) {
        let x = node.nextSiblings();
        //这玩意是个数组
        main_clickfs(x[0])
    }

}

//判断当前币量
function ban_jilu_bi() {
    let node = desc("互动\n第 1 个标签，共 7 个").getOneNodeInfo(1000)
    if (node) {
        let x = node.parent().nextSiblings()[1].child(0).child(0)
        if (x) {
            return 1 * (x.desc);
        } else {
            return -1
        }
    }
}

//选择送礼时的人
function ban_select_name(which) {
    let finnalrestime = 0
    for (let i = 0; i < 1020; i++) {
        let node = index(0).depth(11).clz("android.view.View").getOneNodeInfo(0)
        let anode = desc("送给").getOneNodeInfo(0)
        if (node && anode) {
            let x = node.allChildren();
            if (x != null && x.length != null && x.length >= 0) {
                // logd(x.length);
                let finnalres = 0
                for (let j = 0; j < x.length; j++) {
                    // logd(j + "  号选择 " + x[j].selected);
                    let qqa = x[which].bounds
                    if (j == which) {
                        if (ban_find_is_select(qqa.right * 1 - 100, qqa.top * 1, qqa.right, qqa.top * 1 + 60)) {
                            finnalres = finnalres + 1
                        } else {
                            logd("指定人--->> 未选择");
                            x[which].clickEx()
                        }
                    } else {
                        let qqb = x[j].bounds
                        if (ban_find_is_select(qqb.right * 1 - 100, qqb.top * 1, qqb.right, qqb.top * 1 + 60)) {
                            finnalres = finnalres + 1
                            //  logd("不是指定人--->> 未选择");
                            x[j].clickEx()
                        } else {
                        }
                    }
                }
                if (finnalres === 1) {
                    finnalrestime++
                    if (finnalrestime > 3) {
                        logd("判断 --->> 已经选择完成");
                        return true
                    }
                } else {
                    finnalrestime = 0
                    logd("判断 --->>  未正确 选择");
                }
            }
        } else {
            logd("判断--->> 找人 Null");
        }
        sleep(50);


        if (i == 1019) {
            return false
        }
    }
}

//找色查看是否选中
function ban_find_is_select(x, y, x1, y1) {
    let firstColor = "#68D1FF-#101010";
    let multiColor = "8|14|#89DEFF-#101010,5|20|#FFFFFF-#101010,13|23|#71DAFF-#101010";
    let points = image.findMultiColorEx(firstColor, multiColor, 0.9, x, y, x1, y1, 10, 1);
    if (points && points.length > 0) {
        return true
    } else {
        return false
    }
}

//取消全选送礼
function ban_quanxuan_cannel() {
    let node = clz("android.view.View").desc("取消").getOneNodeInfo(0)
    if (node) {
        node.clickEx()
    }
}

//是否是别到全麦
function ban_isture_find_quanmai() {
    let node = clz("android.view.View").desc("全麦").getOneNodeInfo(0)
    if (node) {
        return true
    } else {
        return false
    }
}

//判断房间种类
function ban_panduan_room() {

    let a = descMatch(".*心动交流.*").getOneNodeInfo(0)    //心动速配房价
    let b1 = desc("关注").getOneNodeInfo(0)    //普通房间
    let b2 = desc("接待").getOneNodeInfo(0)    //普通房间
    let c = descMatch(".*等待良缘.*").getOneNodeInfo(0)   //圆圈爱心直播间
    if (a) {
        return 1
    } else if (b1 && b2) {
        return 2
    } else if (c) {
        return 3
    } else {

        return 0
    }
}

//获取人的位置名字
function ban_getlivename(name) {
    let node = index(0).depth(11).clz("android.view.View").getOneNodeInfo(1000)
    if (node) {
        let a = node.desc
        a = a.replace(/￼/g, '');
        a = a.split("\n")
        // logd(a);

        for (let i = 0; i < a.length; i++) {
            if (ban_red_atiaojian(a[i])) {
                ban_maints.live_name.push(a[i])
            } else {

            }
        }
        for (let i = 0; i < ban_maints.live_name.length; i++) {
            logd("    " + i + '    ' + ban_maints.live_name[i]);
        }

    } else {
        logd("false");
    }

//筛选房内人条件
    function ban_red_atiaojian(shuzi) {
        let shuza = Array()
        shuza[0] = "嘉宾"
        shuza[1] = "主持"
        shuza[2] = "接待"
        shuza[3] = "心动交流"
        shuza[4] = "嘉宾互选"
        shuza[5] = "心动牵手"
        shuza[6] = "等待良缘"
        shuza[7] = "心动连线"
        shuza[8] = "牵手成功"
        shuza[9] = "主持"
        shuza[10] = "倒计时:"


        function neishai(shuzia) {
            if (shuzia == "" || shuzia == undefined || !isNaN(shuzia)) {
                return false
            } else {
                //   logd(" 数字符合  "  + shuzia);
                return true
            }
        }

        function neishai2(shuzib) {
//        logd(shuza.length);
            for (let add = 0; add < shuza.length; add++) {
                if (shuzib.search(shuza[add]) == -1) {
                    if (add == shuza.length - 1) {
                        return true
                    }
                } else {
                    //         logd(" 文本筛选符合  "  + shuzib);
                    return false
                }
            }
        }

        if (neishai(shuzi) && neishai2(shuzi)) {
            return true
        } else {
            return false
        }

    }
}


//点击礼物标签
function ban_open_gift_biaoqian() {
    let node = descMatch("礼物\n.*").getOneNodeInfo(0)

    if (node) {
        node.clickEx()
        sleep(100);
        return true
    } else {
        return false
    }

}