//小红书总点赞
function red_main_all_dianzan() {
    let yuna = ""
    let yunb = ""
    get_yun_config()
    red_main_dianzan()
    while (true) {
        red_yun_all.red_yun_nowrenwu = "任务 ====》》  任务正常运行中"
        if (uizhi.isjiafen && red_yun_all.red_yun_dian_fanhui > 0) {
            get_yun_config()
            sleep(100);
            red_main_dianzan()
            //  toast("开始 调整");
            // sleep(1500);

        } else {
            return
        }
    }
}


//小红书点赞获获取任务
function red_main_dianzan() {
//    logd("点赞--->>  云端获取 链接 " + uizhi.yun_id);
    toast("点赞--->>  云端获取 链接 " + uizhi.yun_id);
    red_yun_all.red_yun_nowrenwu = "任务 ====》》  点赞 云端获取 链接"
    let url = red_yun_all.yun_net + "red_mobile_get_dianzan";
    let pa = {"id": uizhi.yun_id};
    let x = http.httpGet(url, pa, 10 * 1000, {"User-Agent": "test"});
    let ax = JSON.parse(x);
    if (ax.code == 200) {
        red_yun_all.red_yun_dian_fanhui = 1
        let q = ax.data
        // logd(JSON.stringify(q))
        for (let i = 0; i < q.length; i++) {
            red_yun_all.yun_name[i] = q[i].red_yun_name;
            let a = q[i].red_yun_lianjie;
            //  logd(q[i].red_yun_lianjie);
            red_yun_all.red_yun_dianzan[i] = q[i].red_yun_dianzan;
            red_yun_all.red_yun_shoucang[i] = q[i].red_yun_shoucang;
            red_yun_all.red_yun_guanzhu[i] = q[i].red_yun_guanzhu;
            red_yun_all.red_yun_pinglun[i] = q[i].red_yun_pinglun;
            red_yun_all.red_yun_wancheng[i] = q[i].red_yun_istrue;

            red_yun_all['red_yun_lianjie'][i] = a.split("/discovery/")[1]
            //  logd(a.split("/discovery/")[1]);
            // logd(JSON.stringify(red_yun_all));

            // logd(red_yun_all['red_yun_lianjie'][i]);
        }
        red_jump()
        return
    } else {

        red_yun_all.red_yun_dian_fanhui = 0
        // logd("云错误---获取配置错误" + JSON.stringify(ax));
        //  toast("云错误---获取配置错误" + JSON.stringify(ax.data));
    }
    return
}

//小红书跳转至
function red_jump() {

    red_yun_all.red_yun_nowrenwu = "任务 ====》》  小红书跳转至 "
    for (let i = 0; i < Object.keys(red_yun_all.red_yun_lianjie).length; i++) {
        let dba = red_yun_all.yun_name[i]
        let dbb = red_main_do_1(red_yun_all.red_yun_dianzan[i])
        let dbc = red_main_do_1(red_yun_all.red_yun_guanzhu[i])
        let dbd = red_main_do_1(red_yun_all.red_yun_shoucang[i])
        let dbe = red_yun_all.red_yun_lianjie[i]
        let dbf = red_yun_all.red_yun_wancheng[i]

        if (dbf == "未完成") {
            let map = {
                "uri": "xhsdiscover://" + dbe
            }
            //  logd(map['uri']);
            sleep(random(1500, 2000));
            let qqa = utils.openActivity(map);
            logd("名字： " + dba + "  点赞：" + dbb + "  关注：" + dbc + "  收藏：" + dbd + "  任务完成： " + dbf);
            toast("名字： " + dba + "  点赞：" + dbb + "  关注：" + dbc + "  收藏：" + dbd + "  任务完成： " + dbf);
            sleep(random(3500, 9000));
            if (red_idtrue_do_foinnish(dba, dbb, dbc, dbd)) {
                logd("名字： " + dba + "      完成");
                toast("名字： " + dba + "      完成");
                sleep(random(4500, 7900));
                red_dianzan_wancheng(uizhi.yun_id, dba)
                dba = ""
                dbe = ""
                dbb = ""
                dbd = ""
                dbc = ""
                dbf = "完成"
                delete (dba);
                delete (dbe);
                delete (dbb);
                delete (dbd);
                delete (dbc);
                red_yun_all.red_yun_pinglun[i] = ""
                for (let j = 0; j < 7; j++) {
                    back()
                    sleep(500);
                }
            }
        } else {


        }
    }

    red_main_dianzan()

}


//小红书获取 界面是否在指定点赞的界面
function red_isin(name, isa, isb, isc) {
    let node = textMatch(".*" + name + ".*").getOneNodeInfo(1000)
    if (node) {
        red_shang_dianzan(isa)
        red_shang_guanzhu(isb)
        red_shang_dianzanxin(isc)
        return true
    } else {
        return true
    }
}

//判断是否完成
function red_idtrue_do_foinnish(name, isa, isb, isc) {
    for (let i = 0; i < 3; i++) {
        if (red_isin(name, isa, isb, isc)) {
            let a = red_dianzan_panduan_dianzan_istrue(isa)
            if (a) {
                let b = red_dianzan_panduan_guanzhu_istrue(isb)
                if (b) {
                    let c = red_dianzan_panduan_shoucang_istrue(isb)
                    if (c) {
                        return true
                    } else {
                        red_shang_dianzanxin(isc)
                    }
                } else {
                    red_shang_guanzhu(isb)
                }
            } else {
                red_shang_dianzan(isa)
            }

        } else {
            return false
        }

        if (i === 2) {
            return false
        }

    }
}

//判断点赞是否完成
function red_dianzan_panduan_dianzan_istrue(isa) {
    if (isa) {
        let node = id("com.xingin.xhs:id/likeLayout").getOneNodeInfo(0)
        let anode = id("com.xingin.xhs:id/e1n").getOneNodeInfo(0)
        if (node) {
            if (node.child(0).selected) {
                return true
            } else {
                return false
            }
        } else if (anode) {
            if (anode.child(0).selected) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    } else {
        return true
    }


}

//判断关注是否完成
function red_dianzan_panduan_guanzhu_istrue(isb) {
    if (isb) {
        let node = text("已关注").getOneNodeInfo(0)
        if (node) {
            return true
        } else {
            return false
        }
    } else {
        return true
    }


}

//判断收藏是否完成
function red_dianzan_panduan_shoucang_istrue(isc) {
    if (isc) {
        let node = id("com.xingin.xhs:id/collectLayout").getOneNodeInfo(1000)
        let anode = id("com.xingin.xhs:id/e0e").getOneNodeInfo(1000)
        if (node) {
            if (node.child(0).selected) {
                return true
            } else {

                return false
            }

        } else if (anode) {
            if (anode.child(0).selected) {
                return true
            } else {
                return false
            }

        } else {
            return false
        }
    } else {
        return true
    }
}


//点赞完成上传
function red_dianzan_wancheng(red_id, red_name, red_yun_istrue) {
    red_yun_all.red_yun_nowrenwu = "任务 ====》》  点赞完成上传 "
    let url = "http://qforg.com:8001/red_mobile_dianzan_update";
    let pa = {
        "red_id": red_id,
        "red_name": red_name
    };
    let x = http.postJSON(url, pa, 10 * 1000, {"User-Agent": "test"});
    let a = JSON.parse(x)
    if (a.code == 200) {
        logd("加粉点赞完成---->> 名字  " + red_name);
        toast("加粉点赞完成---->> 名字  " + red_name);
    }
}

//点赞
function red_shang_dianzan(is) {
    red_yun_all.red_yun_nowrenwu = "任务 ====》》  点赞 "
    if (is) {
        let node = id("com.xingin.xhs:id/likeLayout").getOneNodeInfo(0)
        let anode = id("com.xingin.xhs:id/e1n").getOneNodeInfo(0)
        if (node) {
            if (node.child(0).selected) {
            } else {
                main_clickfs(node)
                sleep(random(2000, 3000));
            }

        } else if (anode) {
            if (anode.child(0).selected) {
            } else {
                main_clickfs(anode)
                sleep(random(2000, 3000));
            }
        } else {
            //  toast("点赞--->>  没有 找到节点");
        }
    } else {

        toast("云端--->>  没有 勾选 点赞任务");

    }
}

//点赞星星
function red_shang_dianzanxin(is) {
    red_yun_all.red_yun_nowrenwu = "任务 ====》》  点赞星星 "
    if (is) {
        let node = id("com.xingin.xhs:id/collectLayout").getOneNodeInfo(1000)
        let anode = id("com.xingin.xhs:id/e0e").getOneNodeInfo(1000)
        if (node) {
            if (node.child(0).selected) {
            } else {
                main_clickfs(node)
                sleep(random(2000, 3000));
            }
        } else if (anode) {
            if (anode.selected) {
            } else {
                main_clickfs(anode)
                sleep(random(2000, 3000));
            }
        }
    }
}

//关注
function red_shang_guanzhu(is) {
    red_yun_all.red_yun_nowrenwu = "任务 ====》》  关注 "
    if (is) {
        let node = text("关注").getOneNodeInfo(0)
        if (node) {
            if (node.selected) {

            } else {

                main_clickfs(node)
                sleep(random(2000, 3000));
            }

        }

    }
}