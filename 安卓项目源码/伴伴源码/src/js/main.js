var ban_maints = {
    pkg: "com.imbb.banban.android",
    //送给几号
    whichnum: "",
    //首次获得的名字
    live_name: Array(),
    //最终获得的名字及位置
    live_name_final: {},
    //要点击的人
    live_song_name: "",
    //当前钻石量
    now_zuanshi: 0,
    //当前时间戳
    noe_time: time()


}
var ban_xiancheng = {
    //初始线程
    main_zhuxiancheng: '',


}
//设备分辨率
var shebei = {
    "heigth": device.getScreenHeight(), //实时本地 设备高度
    "weigth": device.getScreenWidth(),//实时本地 设备宽度
    "shebeiid": device.getSerial(),//实时本地设备id、
};
//云端的参数
var yun_ban_all = {
    //云直播间主播名字
    yun_live_name: "",
    //云直播间礼物名字
    yun_live_liwu: '',    //七彩星 - 五色星 - 幸运星
    //云直播间链接
    yun_live_lianjie: '',

    //是否送幸运星
    yun_live_istrue_xinyun: '',
    //是否送五色星
    yun_live_istrue_wuse: '',
    //是否送七色
    yun_live_istrue_qicai: '',


    //时间一礼品 是否完成/礼物名字
    yun_gif_1: '',
    //时间二礼品 是否完成/礼物名字
    yun_gif_2: '',
    //时间三礼品 是否完成/礼物名字
    yun_gif_3: '',

    //云任务 时间1
    yun_live_time1: '',
    //云任务 时间2
    yun_live_time2: '',
    //云任务 时间3
    yun_live_time3: '',

    //云任务是否完成
    yun_live_wancheng: '',
    //云任务 任务状态
    yun_live_renwuzhuangtai: ''
}

//本地的任务变量
var main_bendi = {

    istrue_in: false,


}







let imsgs = image.requestScreenCapture(10000, 0);
let m = {
    "type": "ocrLite"
}
m = {"type": "ocrLite", "numThread": 1, "padding": 10, "maxSideLen": 0};
let iniit = ocr.initOcr(m);
let qidd ="初始化ocr 服务 " + iniit
logd(qidd)
//ban_up_renwu_do(qidd)
image.initOpenCV()
sleep(1000)


//1000一秒
//1666814895458
//1666814896461
//1666814995189


//运行前获取云端卡密
ban_get_yun_renwu()
ban_yun_get_dianzan()
main()


//运行主程序
function main() {
    Ssdun.一键运行卡密验证(true, 3);//配置完一般调用这个就可以
    ban_xiancheng_main_close()
    sleep(10);
    ban_xiancheng_main_open()


    while (true) {
        sleep(50);
        logd("运行 --->>  送礼任务");
        toast("运行 --->>  送礼任务");
        ban_songli()


    }


}


//启动伴伴
function ban_main_run_banban() {
    for (let i = 0; i < 10; i++) {
        if (ban_main_run_pkg()) {
            return true
        } else {
            utils.openApp(ban_maints.pkg)
            sleep(random(800, 1200));
            if (i === 9) {
                return false
            }
        }
    }
}

//开启包名检测是否存在
function ban_main_run_pkg() {
    let node = pkg("com.imbb.banban.android").getOneNodeInfo(1000)
    if (node) {
//        logd("判断 --->>  报名判断在");
        return true
    } else {
        return false
    }
}

//获取任务配置
function ban_get_yun_renwu() {
    let aa = "http://ht.qforg.com:8001/Ban_Mobile_Get"
    let pa = {"id": readConfigString('yun_ban_id')};
    let x = http.httpGet(aa, pa, 10 * 1000, {"User-Agent": "test"});
    if (x != null && x.search("code") > -1) {
        x = JSON.parse(x)
        if (x.code == 200) {
            //  logd(x.data);
            updateConfig("yun_ban_kami", x.data);
        } else {
            ban_up_renwu_do(" 云端获取 卡密识别   --->     " + x.code)
            toast(" 云端获取 卡密识别   --->     " + x.code);
        }
    }
}