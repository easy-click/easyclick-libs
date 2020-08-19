// 示例 BaiDu_ocr(6,143,450,55)
function BaiDu_ocr(x, y, w, h) {
	//EC交流群：777164022 by：黑黑
    try {
        id = "" //请自行到百度只能云获取,必填
        var secret = "" //请自行到百度只能云获取,必填
        var request = image.requestScreenCapture(10000, 0);
        if (request) {
            toast("申请成功");
        } else {
            toast("申请失败");
            exit()
        }
        sleep(1500)
        var cap = image.captureToFile(3, x, y, w, h, "/sdcard/a.png");
        var imag64 = image.toBase64(image.readImage("/sdcard/a.png"));
        var url = "https://aip.baidubce.com/oauth/2.0/token";
        var pa = {"grant_type": "client_credentials", "client_id": id, "client_secret": secret};
        var x = http.httpPost(url, pa, null, 10 * 1000, {});
        var token = JSON.parse(x)
        logd(token.access_token);
        // var ocrUrl1 = "https://aip.baidubce.com/rest/2.0/ocr/v1/general_basic"; //每天可用5000次。
        // //文字识别。
        // var ocrUrl2 = "https://aip.baidubce.com/rest/2.0/ocr/v1/general"; //每天可用500次。
        // //含位置信息。
        var url = "https://aip.baidubce.com/rest/2.0/ocr/v1/general_basic";
        var pa = {"access_token": token.access_token, "image": imag64};
        var x = http.httpPost(url, pa, null, 10 * 1000, {"Content-Type": "application/x-www-form-urlencoded"});
        logd("识别结果 ->" + x);
    } catch (e) {
        logd(e)
    }
};
