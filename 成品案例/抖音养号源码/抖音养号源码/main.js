loadECModule("global");
loadECModule("utils");
loadECModule("thread");
loadECModule("agentEvent");
loadECModule("image");
loadECModule("shell");
loadECModule("file");
loadECModule("device");
loadECModule("http");


主程序()
function 主程序() {
     var 激活码 = getmd5(device.getIMEI()+"niheibie")
    updateConfig("jihuoma",激活码);
    var UI激活码 = readConfigString("jihuoma");
    //logd(UI激活码)
    if(激活码 == UI激活码){
        logd("成功拉!");
        初始化()
        功能()
    }else{
        logd("激活码错误");
        return false
    }
}

function 功能() {
    utils.openAppByName("抖音短视频");
    sleep(1050)
    UI数据 = getConfigJSON()
    logd(JSON.stringify(UI数据));
    var 次数 = random(Number(UI数据.gksl),Number(UI数据.gksl1))
    logd(次数)

    for(let i=0;i<次数;i++){
        sleep(1050);
        var 直播中 = getOneNodeInfo(S.get().text("直播中"));
        if (直播中){
            logd("直播中，下一个");
        }else{
            var result = getOneNodeInfo(S.get().resourceId("com.ss.android.ugc.aweme:id/title"))
            if(result){logd("观看进度:"+(i+1)+"/"+次数+",用户名:"+result.text)}else{loge("获取名称失败")}
            抖音点赞()
            抖音关注()
            抖音评论()
            抖音收藏()
            抖音保存()
        }
        sleep(random(1000,1500));
        滑动(lh_屏幕宽()/2 + random(-150,150), lh_屏幕高()/2 + random(100,200),
            lh_屏幕宽()/2+ random(-150,150), random(50,100)+1);
        var 停留 = random(1500,2000)
        logw("滑动完成,停留->" + 停留)
        sleep(停留);
    }
}

function 初始化() {
    setFetchNodeMode(2)
}

function 抖音点赞() {
    if(UI数据.dz){
        var 点赞概率 = random(1,100)
        logd("点赞随机概率:"+点赞概率 +"脚本设置概率:"+ UI数据.dzgl)
        if(UI数据.dzgl >= 点赞概率){
            sleep(random(1000,1500));
            var result = getOneNodeInfo(S.get().descriptionContains("未选中"));
            if (result){
                var 坐标 = result.bounds
                lh_范围点击(坐标.left,坐标.top,坐标.right,坐标.bottom)
                logw("点赞成功");
                sleep(random(1000,1500));
            } else {
                loge("点赞失败");
            }
        }
    }else{logd("点赞没打开")}
}

function 抖音关注() {
    if(UI数据.gz){
        var 关注概率 = random(1,100)
        logd("关注随机概率:"+关注概率 +"脚本设置概率:"+ UI数据.gzgl)

        if(UI数据.gzgl >= 关注概率){
            sleep(random(1000,1500));
            var result = getOneNodeInfo(S.get().classNameMatches(".*Button.*").description("关注")).child(0)
            if (result){
                var 坐标 = result.bounds
                lh_范围点击(坐标.left,坐标.top,坐标.right,坐标.bottom)
                logw("关注成功");
                sleep(random(1000,1500));
            } else {
                loge("关注失败,或者已经关注过了");
            }
        }
    }else{logd("关注没打开")}
}

function 抖音评论() {
    if(UI数据.pl){
        var 评论概率 = random(1,100)
        //logd("点赞随机概率:"+评论概率 +"脚本设置概率:"+ UI数据.plgl)
        if(UI数据.plgl >= 评论概率){
            sleep(random(1000,1500));
            var result = getOneNodeInfo(S.get().descriptionContains("评论"));
            if (result){
                var 坐标 = result.bounds
                lh_范围点击(坐标.left,坐标.top,坐标.right,坐标.bottom)
                logw("评论成功");
                sleep(random(1000,1500));
            } else {
                loge("评论失败");
            }
        }
    }else{logd("评论没打开")}
}

function 抖音收藏() {
    if(UI数据.sc){
        var 收藏概率 = random(1,100)
        logd("收藏随机概率:"+收藏概率 +"脚本设置概率:"+ UI数据.scgl)
        if(UI数据.scgl >= 收藏概率){
            sleep(random(1000,1500));
            var result = getOneNodeInfo(S.get().descriptionContains("分享"));
            if (result){
                result.click()
                sleep(random(1000,1500));
                var 收藏 = getOneNodeInfo(S.get().text("收藏"))
                if(收藏){
                    var 坐标 = 收藏.bounds
                    lh_范围点击(坐标.left,坐标.top,坐标.right,坐标.bottom)
                    logw("收藏成功");
                    sleep(random(1000,1500));
                }else{loge("收藏失败")}
            }
        }
    }else{logd("收藏没打开")}
}

function 抖音保存() {
    if(UI数据.bc){
        var 保存概率 = random(1,100)
        logd("保存随机概率:"+保存概率 +"脚本设置概率:"+ UI数据.bcgl)
        if(UI数据.scgl >= 保存概率){
            sleep(random(1000,1500));
            var result = getOneNodeInfo(S.get().descriptionContains("分享"));
            if (result){
                result.click()
                sleep(random(2000,2500))
                var 保存 = getOneNodeInfo(S.get().text("保存本地"))
                if(保存){
                    logw("保存成功");
                    var 坐标 = 保存.bounds
                    lh_范围点击(坐标.left,坐标.top,坐标.right,坐标.bottom)
                    sleep(random(4000,4500))
                }else{loge("保存失败")}
            }
        }
    }else{logd("保存没打开")}
}

function 滑动(x,y,x1,y1) {
    // 滑动(lh_屏幕宽()/2 + random(-150,150),
    //     lh_屏幕高()/2 - random(100,200),
    //     lh_屏幕宽()/2+ random(-150,150),
    //     lh_屏幕高() + random(-50,-100));
    agentEvent.touchDown(x,y);
    agentEvent.touchMove(x1,y1);
    agentEvent.touchUp(x1,y1);
    sleep(100);
}

function lh_范围点击(x,y,x1,y1) {
    //logd(x+","+y+","+x1+","+y1)
    var x2 = parseInt(random(x+5,x1-5))
    var y2 = parseInt(random(y+5,y1-5))
    logd(x2+","+y2)
    clickPoint(x2,y2);
    sleep(random(200,300));
}
//