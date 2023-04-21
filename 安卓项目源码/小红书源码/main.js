var uizhi = JSON.parse(ui.getConfigJSON());
var useall = [];
useall.baoming = "com.xingin.xhs";
//点击方式函数
var aclick = {
    youzhizhen: uizhi.mian_jiance_1, //有指针
    wuzhizhen: uizhi.mian_jiance_2,  //无指针
    suijizhizhen: uizhi.mian_jiance_3,//随机指针
}
//设备分辨率
var shebei = {
    "heigth": device.getScreenHeight(), //实时本地 设备高度
    "weigth": device.getScreenWidth(),//实时本地 设备宽度
    "shebeiid": device.getSerial(),//实时本地设备id、
};

var red_yun_all = {
    yun_net: "http://qforg.com:8001/",
    yun_name: {},
    red_yun_lianjie: {},
    red_yun_dianzan: {},
    red_yun_shoucang: {},
    red_yun_guanzhu: {},
    red_yun_pinglun: {},
    red_yun_wancheng: {},
    red_yun_dian_fanhui: 0,
    red_yun_nowtime: "日：" + timeFormat("dd HH:mm"),
    red_yun_nowrenwu: ""
}

//线程句柄
var xiancheng = setInterval(function () {
    // toast("我是每隔一秒执行的代码");
    logd("云控上传---任务");


    toast("云控上传---任务");


    post_now_renwu()
}, 8000);


//云端初始化值
get_yun_config()


Ssdun.一键运行卡密验证(true, 3);//配置完一般调用这个就可以

while (true) {
    //   toast("任务进行中");
    red_yun_all.red_yun_nowrenwu = "任务进行中"

    //云端初始化值
    get_yun_config()
    //养号
    red_yanghao_main()
    //点赞
    red_main_all_dianzan()
}

//获取云端配置
function get_yun_config() {
    for (let i = 0; i < 10; i++) {
        let url = red_yun_all.yun_net + "red_get_mobile";
        let pa = {"id": uizhi.yun_id};
//        logd(uizhi.yun_id);
        let x = http.httpGet(url, pa, 10 * 1000, {"User-Agent": "test"});
        //     logd(x);
        let ax = JSON.parse(x);
        if (ax.code == 200) {
            let q = ax.data
            uizhi.isyanghao = red_main_do_1(q[0].red_yun_yanghao);
            uizhi.isjiafen = red_main_do_1(q[0].red_yun_guanzhu);
            uizhi.card = q[0].red_yun_kami;
            updateConfig("card", q[0].red_yun_kami);
            return
        } else {
            logd("云错误---获取配置错误" + JSON.stringify(ax.data));
            toast("云错误---获取配置错误" + JSON.stringify(ax.data));
        }
    }

}

//上传当前任务状态
function post_now_renwu() {
    let url = red_yun_all.yun_net + "mb_Red_post";
    let pa = {
        "id": uizhi.yun_id,
        "renwu": red_yun_all.red_yun_nowtime + red_yun_all.red_yun_nowrenwu
    };
    http.postJSON(url, pa, 5 * 1000, {"User-Agent": "test"});


}