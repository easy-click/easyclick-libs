//有不懂使用的命令联系QQ：523546623
const Gcy={};
Gcy.启动服务=function (是否需要申请截图权限) {
    let 判断启动服务=startEnv();
    if(判断启动服务){
        Gcy.输出信息("【启动服务：成功】");
        Gcy.随机延迟(800,1200);
        if (是否需要申请截图权限===true){
            Gcy.输出信息("【正在申请截图：点击允许】");
            let request = image.requestScreenCapture(10000,0);
            if (request){
                Gcy.输出信息("【申请截图：成功】\n运行脚本！");
            }else {
                Gcy.输出信息("【申请截图：失败】\n停止脚本！");
                exit();
            }
        }
        Gcy.随机延迟(1000,1500);
    }else {
        for(var a=0;a<5;a++){
            Gcy.输出信息("【启动服务：失败】"+"\n"+"【请先开启：无障碍模式[运行脚本]】"+"\n"+"【等待："+(5-a)+"秒后停止运行】");
            Gcy.随机延迟(800,1200);
        }
        exit();
    }
}
Gcy.输出信息=function (内容) {
    logd(内容);
    toast2(内容);
    Gcy.随机延迟(500,1000);

}
Gcy.随机延迟=function (最小值,最大值) {
    let value = utils.getRangeInt(最小值,最大值);
    sleep(value);
}
Gcy.随机点击=function(x,y,x1,y1){
  let 随机x= utils.getRangeInt(x,x1);
  let 随机y= utils.getRangeInt(y,y1);
  clickPoint(随机x,随机y);
  Gcy.随机延迟(500,800);
}
Gcy.单点找色=function (输出找什么,是否点击,是否找到为止,单点颜色,相似度,x,y,x1,y1,查找个数,查找方向) {
   while (true){
       let aimage = image.captureFullScreen();
       if (aimage != null) {
           let 单点找色命令 = image.findColor(aimage,单点颜色,相似度,x,y,x1,y1,查找个数,查找方向);
           if(单点找色命令){
               if (是否点击===true){
                   let 坐标x=单点找色命令[0].x;
                   let 坐标y=单点找色命令[0].y;
                   clickPoint(坐标x,坐标y);
                   Gcy.输出信息("找到并点击"+输出找什么);
                   logd("返回数据："+单点找色命令);
                   return "找到"
               }else {
                   Gcy.输出信息("找到"+输出找什么);
                   logd("返回数据："+单点找色命令);
                   return "找到"
               }
           }else {
               Gcy.输出信息("没有找到"+输出找什么);
               logd("返回数据："+单点找色命令);
               if (是否找到为止===false) {
                   return "没有找到"
               }
           }
       }
   }
}
Gcy.多点找色=function (输出找什么,是否点击,是否找到为止,颜色,偏色,相似度,x,y,x1,y1,查找个数,查找方向) {
    while (true){
        let aimage = image.captureFullScreen();
        if (aimage != null) {
            let 多点找色命令= image.findMultiColor(aimage,颜色,偏色,相似度,x,y,x1,y1,查找个数,查找方向);
            if(多点找色命令){
                if(是否点击===true){
                    let 坐标x=多点找色命令[0].x;
                    let 坐标y=多点找色命令[0].y;
                    clickPoint(坐标x,坐标y);
                    Gcy.输出信息("找到并点击"+输出找什么);
                    logd("返回数据:"+多点找色命令);
                    return "找到"
                }else {
                    Gcy.输出信息("找到"+输出找什么);
                    logd("返回数据:"+多点找色命令);
                    return "找到"
                }
            }else {
                Gcy.输出信息("没有找到"+输出找什么);
                logd("返回数据:"+多点找色命令);
                if (是否找到为止===false) {
                    return "没有找到"
                }
            }
        }
    }
}
Gcy.找图=function (输出找什么,是否点击,是否找到为止,图片名称,x,y,x1,y1,相似度,查找个数) {
   while (true){
       let sms=readResAutoImage(图片名称);
       let 找图命令 = image.findImageEx(sms,x,y,x1,y1,相似度,查找个数);
       if(找图命令){
           if(是否点击===true){
               let 坐标y=找图命令[0].top;
               let 坐标y1=找图命令[0].bottom;
               let 坐标x=找图命令[0].left;
               let 坐标x1=找图命令[0].right;
               Gcy.随机点击(坐标x,坐标y,坐标x1,坐标y1);
               Gcy.输出信息("找到并点击"+输出找什么);
               logd("返回数据:"+找图命令);
               return "找到"
           }else {
               Gcy.输出信息("找到"+输出找什么);
               logd("返回数据:"+找图命令);
               return "找到"
           }
       }else {
           Gcy.输出信息("没有找到"+输出找什么);
           logd("返回数据:"+找图命令);
           if (是否找到为止===false) {
               return "没有找到"
           }
       }
   }
}
Gcy.Ocr文字识别=function(APIKey,SecretKey,是否输出位置信息,起始x,起始y,终点x,终点y){
    var cap = image.captureToFile(3, 起始x,起始y,终点x,终点y, "/sdcard/a.png");
    var R = image.toBase64(image.readImage("/sdcard/a.png"));
    var url = "https://aip.baidubce.com/oauth/2.0/token";
    var pa = {"grant_type": "client_credentials", "client_id": APIKey, "client_secret": SecretKey};
    var x = http.httpPost(url, pa, null, 10 * 1000, {"User-Agent": "test"});
    var token = JSON.parse(x);
    var OCRurl2 = "https://aip.baidubce.com/rest/2.0/ocr/v1/general_basic"; //每天可用5000次文字识别
    var OCRurl1 = "https://aip.baidubce.com/rest/2.0/ocr/v1/general";//每天可用500次含位置信息
    var paa= {"access_token": token.access_token,"image":R};
    var Header={"Content-Type":"application/x-www-form-urlencoded"};
    if(是否输出位置信息===true){
        var 结果a = http.httpPost(OCRurl1, paa, null, 10 * 1000,Header );
        Gcy.输出信息("Ocr文字识别返回位置信息全部数据："+结果a);
        return 结果a
    }else {
        var 结果b = http.httpPost(OCRurl2, paa, null, 10 * 1000,Header );
        Gcy.输出信息("Ocr文字识别返回全部数据："+结果b);
        return 结果b
    }
}
