//小红书养号主程序
function red_yanghao_main() {
    get_yun_config()
        for (let i = 0; i < 900; i++) {
            get_yun_config()
            if (uizhi.isyanghao) {
                red_yun_all.red_yun_nowrenwu = "任务 ====》》  养号 "
                logd("养号--->> 正常");
                toast("养号--->> 正常");
                if (red_yanghao_isinyanghao()) {
                    red_yanghao_shauxin()
                    red_yanghao_gundong()
                    sleep(random(1200, 2000));
                    red_yanghao_joinaview()
                    main_suijidengdai()
                    red_yanghao_suijidianzan()
                    red_yanghao_suijishoucang()
                    red_yanghao_shipinggundong()
                    red_yanghao_wenzihuadong()
                    red_yanghao_backtoyanghao()
                } else {
                    if (red_yanghao_backtoyanghao()) {

                    } else {
                        red_yanghao_jump()
                    }
                }
            }else{
                return
            }
        }

}


//是否在养号界面
function red_yanghao_isinyanghao() {
    let node = text("发现").getOneNodeInfo(1000)
    if (node) {
        let anode = node.selected
        if (anode) {
            return true
        } else {
            logd("判断养号界面2  --->>  " + false);
            toast("判断养号界面2  --->>  " + false);
            return false
        }
    } else {
        logd("判断养号界面1  --->>  " + false);
        toast("判断养号界面1  --->>  " + false);
        return false
    }
}

//跳转进入养号界面
function red_yanghao_jump() {
    let map = {
        "uri": "xhsdiscover://home/explore",
    };
    return utils.openActivity(map);
}

//养号界面滚动
function red_yanghao_gundong() {
    let node = id("com.xingin.xhs:id/d95").getOneNodeInfo(100);
    let result = node.scrollForward();
    if (result) {
        return true
    } else {
        return false
    }
}

//随机进入一个 养号的界面
function red_yanghao_joinaview() {
    let a = random(1, 5)
    if (a === 4) {
        let node = id("com.xingin.xhs:id/gf_").getOneNodeInfo(1000)
        if (node) {
            main_clickfs(node)
        } else {
            logd("寻找——————没找到可进入的养号");
            toast("寻找——————没找到可进入的养号");
        }
    }
}

//随机点赞
function red_yanghao_suijidianzan() {
    let a = random(1, 15)
    if (a === 15) {
        let node = id("com.xingin.xhs:id/dj_").getOneNodeInfo(0)
        if (node) {
            main_clickfs(node)
        } else {
            let anode = id("com.xingin.xhs:id/e1l").getOneNodeInfo(0);
            if (anode) {
                main_clickfs(anode)
            }
        }
    }
}

//随机收藏
function red_yanghao_suijishoucang() {
    let a = random(1, 15)
    if (a === 15) {
        let node = id("com.xingin.xhs:id/dj5").getOneNodeInfo(0);
        if (node) {
            main_clickfs(node);
        } else {
            let aniode = id("com.xingin.xhs:id/e0d").getOneNodeInfo(0);
            if (aniode) {
                main_clickfs(aniode);
            }
        }
    }
}


//返回到养号界面
function red_yanghao_backtoyanghao() {
    for (let i = 0; i < 3; i++) {
        if (red_yanghao_isinyanghao()) {
            return true
        } else {
            back()
            sleep(random(2000, 2300));
            if (i === 2) {
                return false
            }
        }
    }
}

//随机刷新首页
function red_yanghao_shauxin() {
    let a = random(1, 20)
    if (a === 15) {
        if (red_yanghao_isinyanghao()) {
            let node = text("首页").getOneNodeInfo(0);
            if (node) {
                for (let i = 0; i < 3; i++) {
                    main_clickfs(node)
                }
                sleep(random(2200, 3500));
            }
        } else {


        }
    } else {


    }
}


//视频下滚动
function red_yanghao_shipinggundong() {
    let anode = text("发弹幕").getOneNodeInfo(1000)
    if (anode) {
        for (let i = 0; i < random(3, 8); i++) {
            red_yanghao_suijidianzan()
            let node = scrollable(true).getOneNodeInfo(1000);
            let result = node.scrollForward();
            if (result) {
                toast("滚动成功");
                sleep(random(2200, 3500));
            } else {
                toast("滚动失败");
            }
        }
        return true
    } else {
        return false
    }
}

//文字介绍的向下滑动
function red_yanghao_wenzihuadong() {
    let node = text("说点什么...").getOneNodeInfo(0);
    if (node) {
        for (let i = 0; i < 4; i++) {
            red_yanghao_jingxuanmoveup()
            sleep(random(3200, 7500));
        }
    } else {
        return false
    }
}


