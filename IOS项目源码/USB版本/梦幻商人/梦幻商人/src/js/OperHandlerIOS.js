/**
 * 原作者QQ: 1438667453 楠桃
 * 本软件使用EasyClick iOS免越狱 USB版本开发，适配 v4.1中控台版本
 * 文档地址：https://ieasyclick.com/iosdocs/
 * EasyClick iOS免越狱 USB专业用于开发iOS自动化脚本、iOS免越狱投屏等的软件平台
 * EasyClick iOS免越狱还支持无需任何硬件直接打包ipa的自动化脚本方案
 * 官方地址：https://ieasyclick.com
 * QQ交流群： 
 * Q群1: 777164022 Q群2: 922739785 Q群3：647082990
 * Q群4: 772810035 Q群5: 484379843 Q群6：435253761
 */


/**
 *
 * 作者:冉遗鱼
 * QQ:244574798
 * 文档地址:http://116.62.152.97:4999/web/#/75/491
 * */
importClass(java.lang.System);

let Oper;
function OperHandlerIOS() {}
var imageHandlerIOS = new OperHandlerIOS();

(function ImageHandlerInti(){
    logd("加载冉遗鱼图色插件v试用版14中.....");
    logd("此版本为试用版本,某天可能就会停用,勿用于商业用途")
    logd("文档地址:http://116.62.152.97:4999/web/#/75/491")
    let str=System.getProperty("java.library.path");
    let paths=str.split(";");
    for(let path of paths){
        path+="\\ranyiyu";
        if(file.exists(path)){
            let s = loadDex(path+"\\opencv451.jar");
            if (s) {
                Oper=  new com.opencv451.oper.OperClass(path,true);
                logd(Oper.Initi())
                logd("插件调用成功!");
            }
            break;
        }
    }
    if (!Oper) {
        logd("插件调用失败");
        return ;
    }
})();




/**  surf算法全分辨率找图(推荐)
* 对图片进行缩放有利于提高速度，缩放过了就会因太模糊而找不到图
* 需自行测试最佳比例，使用中等分辨率做模板最佳(其他分辨率也可以,中等分辨率对高低兼容性强而已;),
* @param img {Mat} Mat 大图
* @param temp {Mat} Mat目标小图
* @param imgResize {number?} 大图缩放倍数  例如 1表示不缩放 0.5表示缩小一倍 默认1.0
* @param tempResize {number?} 小图缩放倍数  例如 1表示不缩放 0.5表示缩小一倍 默认1.0
* @param sx {number?} 起点x 默认0;
* @param sy {number?} 起点y 默认0;
* @param ex {number?} 终点x 默认0;
* @param ey {number?} 终点y 默认0;
* @param threshold {number?} 匹配度  默认是0.6
*                             注：这个匹配度 是先找到位置再算匹配度 而ec模板匹配是先算匹配度再确认位置
*                             所以这个匹配度只是用于最终确认用的,写的更低也是ok的比如 0.5,其他全分辨率同理。
* @param upright {boolean?} 只计算直立方向？true 是， false 计算全部方向（即旋转不变性，耗时） 默认true
* @returns {Point[]|null}
*/
OperHandlerIOS.prototype.findImgBySurf=function (img, temp, imgResize, tempResize, sx, sy, ex, ey, threshold , upright){
    loge("surf 由于专利限制，暂时没有这个功能")
    return null;
    if(!img||!temp){
        if(!img) logd("大图不能为null");
        if(!temp)logd("小图不能为null");
        return  null;
    }
    if(!img.nativeObj || !temp.nativeObj){
        if(!img.nativeObj) logd("大图请使用Mat格式");
        if(!temp.nativeObj)logd("小图请使用Mat格式");
        return  null;
    }
    imgResize=imgResize||1.0;
    tempResize=tempResize||1.0;
    sx=sx||0;
    sy=sy||0;
    ex=ex||0;
    ey=ey||0;
    threshold=threshold||0.6;
    if(typeof(upright) == 'object'||typeof(upright) == 'undefined'){upright=true;}

    try {
        let res= Oper.findImgBySurfEx(img,imgResize,temp, tempResize, threshold, sx,  sy,  ex,  ey, upright);

        if (res == null ) {
            return null;
        }
        let x1 = [];
        for (let i = 0; i < res.length; i++) {
            x1.push(new Point(res[i]));
        }
        return x1;

    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }


}


/** sift算法全分辨率找图
 *对图片进行缩放有利于提高速度，缩放过了就会因太模糊而找不到图
 * 需自行测试最佳比例，使用中等分辨率做模板最佳(其他分辨率也可以,中等分辨率对高低兼容性强而已;),
 * @param img {Mat} Mat大图
 * @param temp{Mat} Mat目标小图
 * @param imgResize {number?} 大图缩放倍数  例如 1表示不缩放 0.5表示缩小一倍 默认1.0
 * @param tempResize {number?} 小图缩放倍数  例如 1表示不缩放 0.5表示缩小一倍 默认1.0
 * @param sx {number?} 起点x 默认0;
 * @param sy {number?} 起点y 默认0;
 * @param ex {number?} 终点x 默认0;
 * @param ey {number?} 终点y 默认0;
 * @param threshold  {number?} 匹配度 0~1 默认0.6
 * @returns {Point[]|null}
 */
OperHandlerIOS.prototype.findImgBySift=function (img , temp, imgResize, tempResize, sx, sy, ex, ey, threshold){
    if(!img||!temp){
        if(!img) logd("大图不能为null");
        if(!temp)logd("小图不能为null");
        return  null;
    }
    if(!img.nativeObj || !temp.nativeObj){
        if(!img.nativeObj) logd("大图请使用Mat格式");
        if(!temp.nativeObj)logd("小图请使用Mat格式");
        return  null;
    }
    imgResize=imgResize||1.0;
    tempResize=tempResize||1.0;
    sx=sx||0;
    sy=sy||0;
    ex=ex||0;
    ey=ey||0;
    threshold=threshold||0.6;

    try {
        let res=  Oper.findImgBySift( img, imgResize , temp, tempResize, threshold, sx,  sy,  ex,  ey);
        if (res == null ) {
            return null;
        }
        let x1 = [];
        for (let i = 0; i < res.length; i++) {
            x1.push(new Point(res[i]));
        }
        return x1;

    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }


}


/**ORB算法全分辨率找图
 *  //此方法速度快 但比较难以控制,看实验
 * @param img {Mat} Mat大图
 * @param temp {Mat} Mat目标小图  这个方法对长宽要求不能小于40个像素
 * @param imgResize {number?} 大图缩放倍数  例如 1表示不缩放 0.5表示缩小一倍 默认1.0
 * @param tempResize {number?} 小图缩放倍数  例如 1表示不缩放 0.5表示缩小一倍 默认1.0
 * @param sx {number?} 起点x 默认0;
 * @param sy {number?} 起点y 默认0;
 * @param ex {number?} 终点x 默认0;
 * @param ey {number?} 终点y 默认0;
 * @param threshold  {number?} 匹配度 0~1 默认0.7
 * @param nfeatures  {number?} 选择特征点数  默认值 10000个 如果找不到目标可以试着把这个值设的更高 比如100000
 * @param scaleFactor {number?} 图像金字塔每层缩放倍数 默认值 1.2 必须大于1
 * @param nlevels  {number?} 图像金字塔组数 默认值 8  可以简单的理解为 nlevels*scaleFactor 越大 适应的分辨率越宽
 * @returns {Point[]|null}
 *
 实验1 以1080p的APP图标目标模板 缩放至 1倍，0.7倍，0.5倍 在1080p寻找图片 均找到目标
 实验2 以实验1中的 0.5倍App图标为目标 对1080p全屏缩放至0.8倍,0.7倍,0.6倍,0.5倍 均找到目标
 实验3 分别以实验1中的1倍，0.7倍，0.5倍App图标为目标模板，在2倍全屏寻找图片 只有0.5倍的目标未找到
 实验4 以3中0.5倍APP为模板，将尺度参数scaleFactor 从1.2改为1.4  成功找到目标
 *
 */
OperHandlerIOS.prototype.findImgByORB=function (img , temp, imgResize, tempResize, sx, sy, ex, ey, threshold, nfeatures, scaleFactor, nlevels){
    if(!img||!temp){
        if(!img) logd("大图不能为null");
        if(!temp)logd("小图不能为null");
        return  null;
    }
    if(!img.nativeObj || !temp.nativeObj){
        if(!img.nativeObj) logd("大图请使用Mat格式");
        if(!temp.nativeObj)logd("小图请使用Mat格式");
        return  null;
    }
    imgResize=imgResize||1.0;
    tempResize=tempResize||1.0;
    sx=sx||0;
    sy=sy||0;
    ex=ex||0;
    ey=ey||0;
    threshold=threshold||0.7;
    nfeatures=nfeatures||10000;
    scaleFactor=scaleFactor||1.2;
    nlevels=nlevels||8;

    try {
        let res=  Oper.findImgByORB( img, imgResize , temp, tempResize, threshold, sx,  sy,  ex,  ey, nfeatures, scaleFactor, nlevels);
        if (res == null ) {
            return null;
        }
        let x1 = [];
        for (let i = 0; i < res.length; i++) {
            x1.push(new Point(res[i]));
        }
        return x1;
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }


}

/**模板匹配找图
 *  与EC找图用法类似  注意返回值 这里做成了和EC一样
 * @param img {Mat} Mat大图
 * @param temp {Mat} Mat目标小图
 * @param resize  {number?} 大图缩放倍数 适当缩放有利于速度提升 例如 1表示不缩放 0.5表示缩小一倍 默认0.5
 * @param threshold  {number?} 匹配度 0~1 默认0.9
 * @param sx {number?} 起点x 默认0;
 * @param sy {number?} 起点y 默认0;
 * @param ex {number?} 终点x 默认0;
 * @param ey {number?} 终点y 默认0;
 * @param count   {number?} 寻找个数 默认 1
 * @param mask    {Mat?} 掩膜 对应的是小图 与小图一样大小 默认null
 * @returns {RectEx[]|null}
 */
OperHandlerIOS.prototype.findImg=function (img, temp, resize, threshold, sx, sy, ex, ey, count, mask){
    if(!img||!temp){
        if(!img) logd("大图不能为null");
        if(!temp)logd("小图不能为null");
        return  null;
    }
    if(!img.nativeObj || !temp.nativeObj){
        if(!img.nativeObj) logd("大图请使用Mat格式");
        if(!temp.nativeObj)logd("小图请使用Mat格式");
        return  null;
    }
    if(mask){
        if(!mask.nativeObj) {
            logd("mask请使用Mat格式 或者 null");
            return null;
        }
    }

    resize=resize||0.5;
    threshold=threshold||0.9;
    sx=sx||0;
    sy=sy||0;
    ex=ex||0;
    ey=ey||0;
    count=count||1;

    try {
        let rects= Oper.findImg( img,  temp,  resize,  threshold,  sx,  sy,  ex,  ey,  count,mask?mask:null,true)
        if(rects==null){return null;}
        let d = [];
        for (let i = 0; i < rects.length; i++) {
            d.push(new RectEx(rects[i]));
        }
        return d;
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}




/** 半透明找图 类似 按键精灵的半透明找图
 *  模板 背景最好为纯色,如果是杂色,请涂成纯色,此方法认为与模板四个脚颜色相同的点为背景,将忽略
 *
 * @param img {Mat} Mat大图
 * @param temp {Mat} Mat目标小图
 * @param resize  {number?} 大图缩放倍数 适当缩放有利于速度提升 例如 1表示不缩放 0.5表示缩小一倍 默认0.5
 * @param threshold  {number?} 匹配度 0~1 默认0.95
 * @param sx {number?} 起点x 默认0;
 * @param sy {number?} 起点y 默认0;
 * @param ex {number?} 终点x 默认0;
 * @param ey {number?} 终点y 默认0;
 * @param count   {number?} 寻找个数 默认 1
 * @param colorOffset {number?} 背景颜色偏差 默认 20 个点
 * @returns {RectEx[]|null}
 */

OperHandlerIOS.prototype.findTranslucentImg=function (img, temp, resize, threshold, sx, sy, ex, ey, count, colorOffset){
    if(!img||!temp){
        if(!img) logd("大图不能为null");
        if(!temp)logd("小图不能为null");
        return  null;
    }
    if(!img.nativeObj || !temp.nativeObj){
        if(!img.nativeObj) logd("大图请使用Mat格式");
        if(!temp.nativeObj)logd("小图请使用Mat格式");
        return  null;
    }
    resize=resize||0.5;
    threshold=threshold||0.95;
    sx=sx||0;
    sy=sy||0;
    ex=ex||0;
    ey=ey||0;
    count=count||1;
    colorOffset=colorOffset||10;

    try {
        let rects= Oper.findTranslucentImg( img, temp,  resize,  threshold,  sx,  sy,  ex,  ey,  count,colorOffset)
        if(rects==null){return null;}
        let d = [];
        for (let i = 0; i < rects.length; i++) {
            d.push(new RectEx(rects[i]));
        }
        return d;
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }

}


/** 图片伸缩
 * @param img  {Mat} Mat原图
 * @param newWidth {number} 新宽度
 * @param newHeight {number} 新高度
 * @returns {Mat|null}
 */
OperHandlerIOS.prototype.scaleMatByWH=function (img, newWidth, newHeight){
    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    try {
        return Oper.scaleMatByWH(img, newWidth,  newHeight);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }


}

/** 图片伸缩
 * @param img {Mat} Mat原图
 * @param ratioX  {number} X轴伸缩比例 如0.5 1.3 等
 * @param ratioY {number} Y轴伸缩比例
 * @returns {Mat|null}
 */
OperHandlerIOS.prototype.scaleMatByRatio=function (img, ratioX, ratioY){
    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }

    try {
        return Oper.scaleMatByRatio(img,  ratioX,  ratioY);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }

}


/** 图片旋转
 * @param img {Mat} Mat原图
 * @param alpha  {number} 角度 如 90  旋转90度
 * @returns {Mat|null}
 */
OperHandlerIOS.prototype.rotateMat=function (img, alpha){
    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    try {
        return Oper.RotateMat(img, alpha);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}



/** 图片剪切
 * @param img {Mat} Mat原图
 * @param sx  {number} 起点x
 * @param sy  {number} 起点y
 * @param ex  {number} 终点x
 * @param ey  {number} 终点y
 * @returns {Mat|null}
 */
OperHandlerIOS.prototype.cropMat=function (img, sx, sy, ex, ey){
    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    try {
        return Oper.cropMat(img, sx,  sy, ex, ey);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}




/** 图片剪切  已经弃用 改为 cropMat
 * @param img {Mat} Mat原图
 * @param sx  {number} 起点x
 * @param sy  {number} 起点y
 * @param ex  {number} 终点x
 * @param ey  {number} 终点y
 * @returns {Mat|null}
 */
OperHandlerIOS.prototype.cropBitmap=function (img, sx, sy, ex, ey){
    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    try {
        return Oper.cropMat(img, sx,  sy, ex, ey);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}

/**
 * 图片转灰度
 * @param img  {Mat} Mat原图
 * @returns  {Mat|null}
 */
OperHandlerIOS.prototype.matToGray=function (img){
    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    try {
        return Oper.MatToGray(img);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}

/**
 * 图片二值化 参考EC的二值化
 * @param img {Mat} Mat原图
 * @param threshold_value {number} 二值化阈值，0 ~ 255
 * @param maxValue {number?} 大于阈值的点变成的数值 默认 255 白色;
 * @param type  一般写0即可 默认0<br/>
 0 灰度值大于阈值为最大值，其他值为0<br/>
 1 灰度值大于阈值为0，其他值为最大值<br/>
 2 灰度值大于阈值的为阈值，其他值不变<br/>
 3 灰度值大于阈值的不变，其他值为0<br/>
 4 灰度值大于阈值的为零，其他值不变<br/>
 8 大津法自动寻求全局阈值<br/>
 16 三角形法自动寻求全局阈值<br/>
 * @returns {Mat|null}
 */
OperHandlerIOS.prototype.binaryzationMat=function (img, threshold_value, maxValue, type){
    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    if(typeof(maxValue)!="number"){maxValue=255;}

    type=type||0;

    try {
        return Oper.BinaryzationMat(img, threshold_value, maxValue, type);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}


/**
 * 双阈值二值化
 * @param img {Mat} Mat原图
 * @param lowerThreshold  {number} 低阈值，0 ~ 255
 * @param upperThreshold  {number} 高阈值，0 ~ 255
 * @param maxValue  {number?} 大于阈值的点变成的数值 默认 255 白色;
 * @returns {Mat|null}
 */
OperHandlerIOS.prototype.doubleBinaryzation=function (img, lowerThreshold, upperThreshold, maxValue){
    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    if(typeof(maxValue)!="number"){maxValue=255;}
    try {
        return Oper.DoubleBinaryzation(img, lowerThreshold, upperThreshold, maxValue);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}



/**
 * 单点找色 和EC 用法一样
 * @param img  {Mat} Mat图片
 * @param color   {string} 要找的颜色如 "0xCDD7E9-0x101010" "#00FF00" "0xCDD7E9-0x101010|0xCDD7E9-0x101010"
 * @param threshold {number} 找色时颜色相似度取值为 0.0 ~ 1.0  默认 0.9
 * @param sx {number} 起点x 默认0;
 * @param sy {number} 起点y 默认0;
 * @param ex {number} 终点x 默认0;
 * @param ey {number} 终点y 默认0;
 * @param count {number} 寻找的个数 默认1
 * @param direction {number} 寻找的方向 1~8 默认1 <br/>
 * @returns { Point[]|null}
 1: → 从左上横着找到右下 (默认方式)  <br/>
 2: ← 从右上横着找到左下  <br/>
 3: ↓ 从右上竖直找到左下  <br/>
 4: ↑ 从右下竖直找到左上  <br/>
 5: ← 从右下横着找到左上  <br/>
 6: → 从左下横着找到右上  <br/>
 7: ↑ 从左下竖直找到右上  <br/>
 8: ↓ 从左上竖直找到右下  <br/>
 */
OperHandlerIOS.prototype.findColor=function (img, color , threshold, sx, sy, ex, ey, count, direction){
    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    threshold=threshold||0.9;
    sx=sx||0;
    sy=sy||0;
    ex=ex||0;
    ey=ey||0;
    count=count||1;
    direction=direction||1;
    try {
        let res= Oper.findColor(  img, color , threshold, sx, sy, ex, ey, count, direction);

        if (res == null ) {
            return null;
        }
        let x1 = [];
        for (let i = 0; i < res.length; i++) {
            x1.push(new Point(res[i]));
        }
        return x1;


    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }

}


/**多点找色 与EC一样的用法
 *
 * @param img {Mat} Mat图片
 * @param firstColor {string} 第一个点的颜色 例如 "0xCDD7E9-0x101010" "#00FF00"
 * @param colorMulti {string} 字符串类似这样 "6|1|0x969696-0x000010,1|12|0x969696,-4|0|0x969696"
 * @param threshold {number?}  找色时颜色相似度取值为 0.0 ~ 1.0
 * @param sx {number?} 起点x 默认0;
 * @param sy {number?} 起点y 默认0;
 * @param ex {number?} 终点x 默认0;
 * @param ey {number?} 终点y 默认0;
 * @param count {number?} 寻找的个数 默认1
 * @param direction {number?} 寻找的方向 1~8 默认1 <br/>
 * @returns { Point[]|null}  <br/>
 1: → 从左上横着找到右下 (默认方式)  <br/>
 2: ← 从右上横着找到左下  <br/>
 3: ↓ 从右上竖直找到左下  <br/>
 4: ↑ 从右下竖直找到左上  <br/>
 5: ← 从右下横着找到左上  <br/>
 6: → 从左下横着找到右上  <br/>
 7: ↑ 从左下竖直找到右上  <br/>
 8: ↓ 从左上竖直找到右下  <br/>
 */
OperHandlerIOS.prototype.findMultiColor=function ( img, firstColor, colorMulti, threshold  , sx, sy, ex, ey, count, direction){
    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }

    try {
        threshold=threshold||0.9;
        sx=sx||0;
        sy=sy||0;
        ex=ex||0;
        ey=ey||0;
        count=count||1;
        direction=direction||1;

            let res=  Oper.findMultiColor(img, firstColor, colorMulti, threshold ,  sx, sy, ex, ey, count, direction)
            if (res == null ) {
                return null;
            }
            let x1 = [];
            for (let i = 0; i < res.length; i++) {
                x1.push(new Point(res[i]));
            }
            return x1;

    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}



/**多点找色 可以指定点颜色是否相等
 *
 * * @param img {Mat} Mat图片
 * @param firstColor {string} 第一个点的颜色 例如 "0xCDD7E9-0x101010" "#00FF00"  用于定位用 不可指定相等或不相等,
 * @param colorMulti {string} 字符串类似这样 前缀 1代表相等,0代表不相等 没前缀,默认相等 例如 "1|6|1|0x969696-0x000010,0|6|12|0x969696,-4|5|0x969696"
 * @param threshold {number?}  找色时颜色相似度取值为 0.0 ~ 1.0
 * @param sx {number?} 起点x 默认0;
 * @param sy {number?} 起点y 默认0;
 * @param ex {number?} 终点x 默认0;
 * @param ey {number?} 终点y 默认0;
 * @param count {number?} 寻找的个数 默认1
 * @param direction {number?} 寻找的方向 1~8 默认1 <br/>
 * @returns { Point[]|null}  <br/>

 */
OperHandlerIOS.prototype.findMultiColorEx=function (img, firstColor, colorMulti, threshold  , sx, sy, ex, ey, count, direction){
    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    threshold=threshold||0.9;
    sx=sx||0;
    sy=sy||0;
    ex=ex||0;
    ey=ey||0;
    count=count||1;
    direction=direction||1;
    try {
        let res=  Oper.findMultiColorEx( img, firstColor, colorMulti, threshold ,  sx, sy, ex, ey, count, direction);
        if (res == null ) {
            return null;
        }
        let x1 = [];
        for (let i = 0; i < res.length; i++) {
            x1.push(new Point(res[i]));
        }
        return x1;
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }

}




/**
 *  直线检测
 * @param img {Mat} Mat图片
 * @param src_multiple {number?} 缩放比例  1不缩放 0.5 缩小一倍 适当缩放有例如加快速度 默认 1.0
 * @param rho    {number?}  步长 即检测的每次跨越的像素点  默认值 1
 * @param theta   {number?} 角度,即每次检查的角度,比如90 则只检测水平和竖直的线 默认值 1
 * @param threshold {number?} 即连续检测到 多少个rho点则认为是一条直线  默认值 10
 * @param minLineLength {number?} 只有大于这个最小长度的直线被返回  默认值 50
 * @param maxLineGap   {number?}  两直线之间缺了多少个像素 也认为它们是同一条直线 默认 5
 * @param weakThreshold {number?}  检测轮廓(canny)时的弱阈值 大于弱阈值且依附在边缘的点会被保留  默认值 50
 * @param strongThreshold {number?} 检测轮廓(canny)时的强阈值 即相邻的像素点差值大于强阈值则被认为是边缘 默认值 100
 * @return {Point[]|null} 返回Point数组 注意两个点为一条直线,或者 null
 */
OperHandlerIOS.prototype.findLines=function (img, src_multiple , rho, theta, threshold, minLineLength, maxLineGap, weakThreshold, strongThreshold){
    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    src_multiple=src_multiple||1.0;
    rho=rho||1;
    theta=theta||1;
    threshold=threshold||10;
    minLineLength=minLineLength||50;
    maxLineGap=maxLineGap||5;
    weakThreshold=weakThreshold||50;
    strongThreshold=strongThreshold||100;
    try {
        let res=   Oper.findLine(img,src_multiple, rho,  theta, threshold,  minLineLength,  maxLineGap, weakThreshold, strongThreshold);
        if (res == null ) {
            return null;
        }
        let x1 = [];
        for (let i = 0; i < res.length; i++) {
            x1.push(new Point(res[i]));
        }
        return x1;
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }

}


/**
 * 圆形检测
 * @param img {Mat} Mat 图片
 * @param minDist {number}  圆心之间最小距离,能解决同心圆问题
 * @param accuracy {number}  找圆的精度 范围为0~1.0,越接近1越像圆
 * @param minRadius {number}  找圆最小半径
 * @param maxRadius {number}  找圆最大半径
 * @param cannyThreshold {number?} 边缘阈值 默认值 100,即转成单通道后的相邻像素点的值相差多少 认为是边界点
 * @param dp  {number?} 累加器图像的分辨率 直接写1.5即可
 * @returns  {PointEx[]|null}  返回PointEx数组 继承自Point  例如: 圆心坐标:points[0].x ,points[0].y  圆的半径: points[0].r
 */
OperHandlerIOS.prototype.findCircles=function(img, minDist, accuracy, minRadius, maxRadius, cannyThreshold, dp){
    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    cannyThreshold=cannyThreshold||100;
    dp=dp||1.5;
    try {
        return  Oper.findCircles(img,  4 , dp, minDist,   cannyThreshold,  accuracy, minRadius, maxRadius);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }

}




/**
 * 只做图片的轮廓匹配,无视颜色  注:这个不是全分辨率
 * @param img {Mat} Mat大图
 * @param temp   {Mat} Mat目标小图
 * @param resize  {number?} 大图缩放倍数 适当缩放有利于速度提升 例如 1表示不缩放 0.5表示缩小一倍 默认0.5
 * @param threshold {number?} 匹配度 0~1 默认0.9
 * @param sx {number?} 起点x 默认0;
 * @param sy {number?} 起点y 默认0;
 * @param ex {number?} 终点x 默认0;
 * @param ey {number?} 终点y 默认0;
 * @param count {number?} 寻找个数 默认 1
 * @param weakThreshold {number?}  检测轮廓(canny)时的弱阈值 大于弱阈值且依附在边缘的点会被保留  默认值 50
 * @param strongThreshold {number?} 检测轮廓(canny)时的强阈值 即相邻的像素点差值大于强阈值则被认为是边缘 默认值 100
 *  @return {RectEx[]|null}
 */
OperHandlerIOS.prototype.findImgByContour=function (img, temp, resize, threshold, sx, sy, ex, ey, count, weakThreshold, strongThreshold){
    if(!img||!temp){
        if(!img) logd("大图不能为null");
        if(!temp)logd("小图不能为null");
        return  null;
    }
    if(!img.nativeObj || !temp.nativeObj){
        if(!img.nativeObj) logd("大图请使用Mat格式");
        if(!temp.nativeObj)logd("小图请使用Mat格式");
        return  null;
    }
    resize=resize||0.5;
    threshold=threshold||0.9;
    sx=sx||0;
    sy=sy||0;
    ex=ex||0;
    ey=ey||0;
    count=count||1;
    weakThreshold=weakThreshold||50;
    strongThreshold=strongThreshold||100;

    try {
        let rects=  Oper.findImgByContour(img,  temp,  resize, threshold, sx, sy, ex, ey, count, weakThreshold, strongThreshold);
        if(rects==null){return null;}
        let d = [];
        for (let i = 0; i < rects.length; i++) {
            d.push(new RectEx(rects[i]));
        }
        return d;
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }


}

/**
 * 图片比较相似度, 只做颜色统计比较,无视大小和方向是否相同
 * @param img1
 * @param img2
 * @returns 返回相似度  0~1.0  1.0最好
 */
OperHandlerIOS.prototype.imageCompare=function (img1, img2){
    if(!img1||!img2){
        if(!img1) logd("img1不能为null");
        if(!img2)logd("img2不能为null");
        return  null;
    }
    if(!img1.nativeObj || !img2.nativeObj){
        if(!img1.nativeObj) logd("img1请使用Mat格式");
        if(!img2.nativeObj)logd("img2请使用Mat格式");
        return  null;
    }
    try {
        return   Oper.ImageCompare(img1,img2);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  0;
    }
}

/**
 *原始surf找图 具有尺度不变性 旋转不变性 光照不变性
 * @param img {Mat} Mat大图
 * @param temp  {Mat} Mat目标小图
 * @param srcMultiple {number?} 大图缩放倍数  例如 1表示不缩放 0.5表示缩小一倍 默认1.0
 * @param tempMultiple {number?} 小图缩放倍数  例如 1表示不缩放 0.5表示缩小一倍 默认1.0
 * @param sx {number?} 起点x 默认0;
 * @param sy {number?} 起点y 默认0;
 * @param ex {number?} 终点x 默认0;
 * @param ey {number?} 终点y 默认0;
 * @param upright  {boolean?} 只计算直立方向？true 是， false 计算全部方向（即旋转不变性，耗时） 默认true
 * @param distanceRatio {number?} 距离比值 最近距离和次最近距离的比值 可以理解为准确度 这个方法没有匹配度而是使用距离比值,值范围在 0.4~0.6之间最佳,对准确度要求高的写0.4,一般写0.5,默认值0.6
 * @param customFeatures  {number?} 特征匹配对 阈值, 用于定义 至少多少对特征点匹配成功,才认为是目标. 特征点个数与模板大小成正比,默认 6 对
 * @param minHessian  {number?}    minHessian越大特征点越稳定 同时也越少,默认值100
 * @param nOctaves    {number?}   图像金字塔组数,默认值 4
 * @param nOctaveLayers {number?}   金字塔每组层数,默认值 3
 * @param extended   {boolean?}    表示特征向量的维度, false 表示64维 速度快,true 表示128维 准确性高,默认 false;
 * @returns {Point[]|null}
 */
OperHandlerIOS.prototype.findImgBySurfEx=function(img, temp, srcMultiple, tempMultiple, sx, sy, ex, ey, upright, distanceRatio, customFeatures, minHessian, nOctaves, nOctaveLayers, extended){
    if(!img||!temp){
        if(!img) logd("大图不能为null");
        if(!temp)logd("小图不能为null");
        return  null;
    }
    if(!img.nativeObj || !temp.nativeObj){
        if(!img.nativeObj) logd("大图请使用Mat格式");
        if(!temp.nativeObj)logd("小图请使用Mat格式");
        return  null;
    }
    srcMultiple=srcMultiple||1.0;
    tempMultiple=tempMultiple||1.0;
    sx=sx||0;
    sy=sy||0;
    ex=ex||0;
    ey=ey||0;
    if(typeof(upright) == 'object'||typeof(upright) == 'undefined'){upright=true;}
    distanceRatio=distanceRatio||0.6;
    customFeatures=customFeatures||6;
    minHessian=minHessian||100;
    nOctaves=nOctaves||4;
    nOctaveLayers=nOctaveLayers||3;
    if(typeof(extended) == 'object'||typeof(extended) == 'undefined'){extended=false;}
    try {
        let res=    Oper.findImgByOriginalSurf(img,  srcMultiple, temp, tempMultiple,  sx,  sy,  ex,  ey,upright,  distanceRatio, customFeatures,minHessian, nOctaves, nOctaveLayers, extended);
        if (res == null ) {
            return null;
        }
        let x1 = [];
        for (let i = 0; i < res.length; i++) {
            x1.push(new Point(res[i]));
        }
        return x1;
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}

/**
 * 原始sift找图 具有尺度不变性 旋转不变性 光照不变性  无视背景
 * @param img {Mat} Mat大图
 * @param temp {Mat} Mat目标小图
 * @param srcMultiple {number?}大图缩放倍数  例如 1表示不缩放 0.5表示缩小一倍 默认1.0
 * @param tempMultiple {number?} 小图缩放倍数  例如 1表示不缩放 0.5表示缩小一倍 默认1.0
 * @param sx {number?} 起点x 默认0;
 * @param sy {number?} 起点y 默认0;
 * @param ex {number?} 终点x 默认0;
 * @param ey {number?} 终点y 默认0;
 * @param distanceRatio {number?} 距离比值 最近距离和次最近距离的比值 可以理解为准确度 这个方法没有匹配度而是使用距离比值,值范围在 0.4~0.6之间最佳,对准确度要求高的写0.4,一般写0.5,默认值0.6
 * @param customFeatures  {number?} 特征匹配对 阈值, 用于定义 至少多少对特征点匹配成功,才认为是目标. 特征点个数与模板大小成正比,默认 6 对
 * @param nFeatures  {number?}  表示要返回的最优秀特征点数量  默认 0;
 * @param nOctaveLayers  {number?} 每组图像的层数(这个方法图像金字塔的组数是自动计算的) 默认 3;
 * @param contrastThreshold {number?} 对比度阈值 阈值越大，检测器产生的特征越少。 默认 0.04;
 * @param edgeThreshold    {number?}  边缘阈值 ，阈值越大，被过滤掉的越少，特征点越多  默认10;
 * @param sigma    {number?}   金字塔第0层图像高斯滤波系数，也就是σ。默认1.6;
 * @returns {Point[]|null}
 */
OperHandlerIOS.prototype.findImgBySiftEx=function (img, temp, srcMultiple, tempMultiple, sx, sy, ex, ey, distanceRatio, customFeatures, nFeatures, nOctaveLayers, contrastThreshold, edgeThreshold, sigma){
    if(!img||!temp){
        if(!img) logd("大图不能为null");
        if(!temp)logd("小图不能为null");
        return  null;
    }
    if(!img.nativeObj || !temp.nativeObj){
        if(!img.nativeObj) logd("大图请使用Mat格式");
        if(!temp.nativeObj)logd("小图请使用Mat格式");
        return  null;
    }
    srcMultiple=srcMultiple||1.0;
    tempMultiple=tempMultiple||1.0;
    sx=sx||0;
    sy=sy||0;
    ex=ex||0;
    ey=ey||0;
    distanceRatio=distanceRatio||0.6;
    customFeatures=customFeatures||6;
    nFeatures=nFeatures||0;
    nOctaveLayers=nOctaveLayers||3;
    contrastThreshold=contrastThreshold||0.04;
    edgeThreshold=edgeThreshold||10;
    sigma=sigma||1.6;
    try {
        let res=    Oper.findImgByOriginalSift( img,  srcMultiple, temp, tempMultiple, sx,  sy,  ex,  ey,  distanceRatio, customFeatures,nFeatures,  nOctaveLayers,  contrastThreshold,  edgeThreshold,  sigma);
        if (res == null ) {
            return null;
        }
        let x1 = [];
        for (let i = 0; i < res.length; i++) {
            x1.push(new Point(res[i]));
        }
        return x1;
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}

/**
 * 原始ORB找图 具有尺度不变性 旋转不变性 光照不变性
 * @param img {Mat} Mat大图
 * @param temp {Mat} Mat目标小图  长宽最好大于  2*edgeThreshold+ patchSize (见后面参数)
 * @param srcMultiple {number?}大图缩放倍数  例如 1表示不缩放 0.5表示缩小一倍 默认1.0
 * @param tempMultiple {number?}小图缩放倍数  例如 1表示不缩放 0.5表示缩小一倍 默认1.0
 * @param sx {number?} 起点x 默认0;
 * @param sy {number?} 起点y 默认0;
 * @param ex {number?} 终点x 默认0;
 * @param ey {number?} 终点y 默认0;
 * @param distanceRatio  {number?} 距离比值 最近距离和次最近距离的比值 可以理解为准确度 这个方法没有匹配度而是使用距离比值,值范围在 0.4~0.6之间最佳,对准确度要求高的写0.4,一般写0.5,默认值0.6
 * @param customFeatures  {number?} 特征匹配对 阈值, 用于定义 至少多少对特征点匹配成功,才认为是目标. 特征点个数与模板大小成正比,默认 6 对
 * @param nfeatures   {number?} 选择特征点数  默认值 10000个 如果找不到目标可以试着把这个值设的更高 比如100000
 * @param scaleFactor  {number?} 图像金字塔每层缩放倍数 默认值 1.2 必须大于 1
 * @param nlevels     {number?} 图像金字塔组数 默认值 8  可以简单的理解为 nlevels*scaleFactor 越大 适应的分辨率越宽  默认 8
 * @param edgeThreshold {number?} 边缘阈值，这个值主要是根据后面的patchSize来定的，靠近边缘edgeThreshold以内的像素是不检测特征点的。默认 10
 * @param firstLevel  {number?} 指定图像组第一层的索引值，这里默认为 0。
 * @param WTA_K     {number?}  用于产生BIREF描述子的 点对的个数，一般为2个,默认 为2;
 * @param scoreType  {number?} 用于对特征点进行排序的算法，你可以选择 0 (HARRIS_SCORE)，也可以选择 1 (FAST_SCORE)，但是它也只是比前者快一点点而已。默认 0
 * @param patchSize {number?} 用于计算BIREF描述子的特征点邻域大小。 默认31 个像素点
 * @param fastThreshold   {number?}   默认20;
 * @returns {Point[]|null}
 */
OperHandlerIOS.prototype.findImgByORBEx=function (img, temp, srcMultiple, tempMultiple, sx, sy, ex, ey, distanceRatio, customFeatures, nfeatures, scaleFactor, nlevels, edgeThreshold, firstLevel, WTA_K, scoreType, patchSize, fastThreshold){
    if(!img||!temp){
        if(!img) logd("大图不能为null");
        if(!temp)logd("小图不能为null");
        return  null;
    }
    if(!img.nativeObj || !temp.nativeObj){
        if(!img.nativeObj) logd("大图请使用Mat格式");
        if(!temp.nativeObj)logd("小图请使用Mat格式");
        return  null;
    }
    srcMultiple=srcMultiple||1.0;
    tempMultiple=tempMultiple||1.0;
    sx=sx||0;
    sy=sy||0;
    ex=ex||0;
    ey=ey||0;
    distanceRatio=distanceRatio||0.6;
    customFeatures=customFeatures||6;
    nfeatures=nfeatures||10000;
    scaleFactor=scaleFactor||1.2;
    nlevels=nlevels||8;
    edgeThreshold=edgeThreshold||10;
    firstLevel=firstLevel||0;
    WTA_K=WTA_K||2;
    scoreType=scoreType||0;
    patchSize=patchSize||31;
    fastThreshold=fastThreshold||20;
    try {
        let res=    Oper.findImgByOriginalORB(img,  srcMultiple, temp, tempMultiple, sx,  sy,  ex,  ey,distanceRatio, customFeatures,nfeatures,  scaleFactor,  nlevels,  edgeThreshold,  firstLevel,  WTA_K,  scoreType,  patchSize,  fastThreshold);
        if (res == null ) {
            return null;
        }
        let x1 = [];
        for (let i = 0; i < res.length; i++) {
            x1.push(new Point(res[i]));
        }
        return x1;
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}

/**
 * 获取BGR图像或其中一种颜色图像
 * @param img {Mat} 图片
 * @param type {number}
 *          -1 表示获取 BGR图像,
 *           0 表示获取B通道图像,
 *           1 表示获取G通道图像,
 *           2 表示获取R通道图像
 * @returns {Mat|null}  返回Mat图像
 */
OperHandlerIOS.prototype.getBGR=function (img, type){
    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    try {
        return   Oper.getBGR(img,type);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}

/**
 * 获取HSV图像或其中一种颜色图像  释放方式 myMat.recycle();
 * @param img {Mat} 图片
 * @param type {number}
 *          -1 表示获取 HSV图像,
 *           0 表示获取H通道图像,
 *           1 表示获取S通道图像,
 *           2 表示获取V通道图像
 * @returns {Mat|null}  返回Mat图像
 */
OperHandlerIOS.prototype.getHSV=function (img, type){
    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    try {
        return   Oper.getHSV(img,type);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}


/**
 * 获取HLS图像或其中一种颜色图像
 * @param img {Mat} 图片
 * @param type {number}
 *          -1 表示获取 HLS图像,
 *           0 表示获取H通道图像,
 *           1 表示获取L通道图像,
 *           2 表示获取S通道图像
 * @returns {Mat|null}  返回Mat图像
 */
OperHandlerIOS.prototype.getHLS=function (img, type){
    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    try {
        return   Oper.getHLS(img,type);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}


/**
 * 返回指定点的颜色字符串 小写 已弃用
 * @param img {Mat} 图片
 * @param x {number} 坐标 x
 * @param y {number} 坐标 y
 * @returns {string|null} 十六进制颜色字符串
 */
OperHandlerIOS.prototype.getRGBColor=function (img, x, y){
    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    try {
        return   Oper.getRGBColor(img, x,y);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}


/**
 * 返回指定点的颜色字符串大写
 * @param img {Mat} 图片
 * @param x {number} 坐标 x
 * @param y {number} 坐标 y
 * @returns {string|null} 十六进制颜色字符串
 */
OperHandlerIOS.prototype.getPixelColor=function (img, x, y){
    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    try {
        return   Oper.getPixelColor(img, x,y);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}



/**
 * 获取指定点的 Blue 通道颜色
 * @param img {Mat} 图片
 * @param x {number} 坐标 x
 * @param y {number} 坐标 y
 * @returns {number} 0~255 范围的颜色值
 */
OperHandlerIOS.prototype.getBlue=function (img, x, y){
    if(!img){
        logd("大图不能为null");
        return  -1;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return  -1;
    }
    try {
        return   Oper.getBlue(img, x,y);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  -1;
    }
}

/**
 * 获取指定点的 Red 通道颜色
 * @param img {Mat} 图片
 * @param x {number} 坐标 x
 * @param y {number} 坐标 y
 * @returns {number} 0~255 范围的颜色值
 */
OperHandlerIOS.prototype.getRed=function (img, x, y){
    if(!img){
        logd("大图不能为null");
        return  -1;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return  -1;
    }
    try {
        return   Oper.getRed(img, x,y);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  -1;
    }

}


/**
 * 获取指定点的 Green 通道颜色
 * @param img {Mat} 图片
 * @param x {number} 坐标 x
 * @param y {number} 坐标 y
 * @returns {number} 0~255 范围的颜色值
 */
OperHandlerIOS.prototype.getGreen=function (img, x, y){
    if(!img){
        logd("大图不能为null");
        return  -1;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return  -1;
    }

    try {
        return   Oper.getGreen(img, x,y);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  -1;
    }

}

/**
 * 与EC的单点比色类似 但有些许不同 EC的points里的点都是绝对位置,而这个方法,只有第一个点是绝对位置,
 * 其他点都是相对于第一个点的相对位置
 *  单点或多点比色
 * @param img  {Mat} 图片  <br/>
 * @param points {string} 颜色字符串 例如"512|833|0x969696-0x000010,1|12|0x969696,-4|0|0x969696" 第一个点为绝对位置,其他点是相对于点一个点的相对位置  <br/>
 * @param threshold  {number?} 匹配度 ,这个值只对不带偏色的点有效果  <br/>
 * @returns {boolean} true 表示纯在 false 表示不纯在  <br/>
 */
OperHandlerIOS.prototype.cmpColor=function (img, points, threshold){
    if(!img){
        logd("大图不能为null");
        return  false;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return  false;
    }

    try {
        threshold=threshold||0.9;
        return   Oper.cmpColor(img,points,threshold);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  false;
    }
}


/** 单点比色扩展 可以指定点颜色是否相等
 * 与EC的单点比色类似 但有些许不同 EC的points里的点都是绝对位置,而这个方法,只有第一个点是绝对位置,
 * 其他点都是相对于第一个点的相对位置
 *  单点或多点比色
 * @param img  {Mat} 图片
 * @param points {string} 颜色字符串 前缀0代表不相等 1代表相等 没前缀默认相等  例如"0|512|833|0x969696-0x000010,1|12|0x969696,1|-4|0|0x969696" 第一个点为绝对位置,其他点是相对于点一个点的相对位置
 * @param threshold  {number?} 匹配度 ,这个值只对不带偏色的点有效果
 * @returns {boolean} true 表示纯在 false 表示不纯在
 */
OperHandlerIOS.prototype.cmpColorEx=function (img, points, threshold){
    if(!img){
        logd("大图不能为null");
        return  false;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return  false;
    }

    try {
        threshold=threshold||0.9;
        return   Oper.cmpColorEx(img,points,threshold);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  false;
    }

}


/**
 * 多点数组比色  与Ec的区别 同上述 cmpColor;
 * @param img   {Mat} 图片
 * @param pointsArr {string[]} 颜色字符串数组 具体参考EC 的写法 注意区别
 * @param threshold {number?} 匹配度 ,这个值只对不带偏色的点有效果
 * @returns {number} 如果找到就返回当前points的索引值，如果返回-1，说明都没有找到}
 */
OperHandlerIOS.prototype.cmpMultiColor=function (img, pointsArr, threshold){
    if(!img){
        logd("大图不能为null");
        return  -1;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return  -1;
    }

    try {
        threshold=threshold||0.9;
        return   Oper.cmpMultiColor(img,pointsArr,threshold);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  -1;
    }

}
/**
 * 高斯模糊 对图像进行模糊,以达到去噪的过程
 * @param img {Mat} 图片
 * @param kSize   {number?} 卷积核大小 只能选 1,3,5,7。 越大约模糊,默认为 3
 * @param sigmaX  {number?}  图片x轴方向的 模糊程度,越大越模糊, 0 表示根据ksize 自动计算 默认0;
 * @param sigmaY  {number?}  图片y轴方向的 模糊程度,越大越模糊, 0 等同sigmaX  默认0;
 * @param borderType {number?} 边缘模式 选项有0~5,16   默认4
 * @returns {Mat|null} 模糊后的图片
 */
OperHandlerIOS.prototype.gaussianBlur=function (img, kSize, sigmaX, sigmaY, borderType){
    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    kSize=kSize||3;
    if(!sigmaX){sigmaX=0;}
    if(!sigmaY){sigmaY=0;}
    borderType=borderType||4;
    try {
        return   Oper.gaussianBlur(img, kSize,  sigmaX,  sigmaY, borderType);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}

/**
 *  对图片进行锐化,使图棱角分明 ,可以理解成上述模糊的反向过程
 * @param img {Mat} 图片
 * @param kernelType {number?} 卷积核的类型  默认 1 <Br/>
 *                       1:锐化卷积核,
 *                       2:robert_x算子,
 *                       3:robert_y算子,
 *                       4:Sobel_x算子
 *                       5:Sobel_y算子
 *                       6:拉普拉斯算子 <Br/>
 * @param ddepth  {number?} 目标图片所需深度 默认 -1 自动计算
 * @param anchor_x {number?} 卷积核的锚点 x 默认 -1  表示中心
 * @param anchor_y {number?} 卷积核的锚点 y 默认 -1  表示中心
 * @param delta    {number?} 对结果的每个像素增加值  默认 0
 * @param borderType {number?} 边缘模式 选项有1~5,16 默认4
 * @returns {Mat|null} 锐化后的图片
 */
OperHandlerIOS.prototype.filter2D=function (img, kernelType , ddepth, anchor_x, anchor_y, delta , borderType){

    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    kernelType=kernelType||1;
    if(!ddepth&&ddepth!=0){ddepth=-1;}
    if(!anchor_x&&anchor_x!=0){anchor_x=-1;}
    if(!anchor_y&&anchor_y!=0){anchor_y=-1;}
    delta=delta||0;
    borderType=borderType||4;

    try {
        return   Oper.filter2D(img, ddepth,  kernelType,  anchor_x, anchor_y,  delta ,  borderType);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}


/**
 * 均值滤波  即均值模糊
 * @param img  {Mat} 图片
 * @param ksize_width  {number?} 卷积核宽度 必须单数 默认5
 * @param ksize_height {number?} 卷积核高度 必须单数 默认5
 * @param anchor_x  {number?} 锚点x 默认-1 表示中心
 * @param anchor_y  {number?} 锚点y 默认-1 表示中心
 * @param borderType  {number?} 边缘类型  默认 4
 * @returns {Mat|null} 模糊后的图片
 */
OperHandlerIOS.prototype.blur=function (img, ksize_width, ksize_height, anchor_x, anchor_y, borderType){
    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    ksize_width=ksize_width||5;
    ksize_height=ksize_height||5;
    if(typeof(anchor_x)!="number"){anchor_x=-1;}
    if(typeof(anchor_y)!="number"){anchor_y=-1;}
    if(typeof(borderType)!="number"){borderType=4;}
    try {
        return   Oper.blur(img, ksize_width, ksize_height, anchor_x, anchor_y, borderType);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }

}


/**
 * 边缘检测
 * @param img  {Mat} 图片
 * @param threshold1  {number?} 弱阈值 默认50
 * @param threshold2 {number?}  强阈值 默认 100
 * @param apertureSize {number?} Sobel大小 默认3
 * @param L2gradient  {Boolean?} 是否更加精确的计算  默认 false
 * @return {Mat} 边缘图片
 */
OperHandlerIOS.prototype.canny=function (img, threshold1, threshold2, apertureSize, L2gradient){
    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    threshold1=threshold1||50;
    threshold2=threshold2||100;
    apertureSize=apertureSize||3;
    L2gradient=L2gradient||false;
    try {
        return   Oper.canny(img, threshold1, threshold2,  apertureSize, L2gradient);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }

}

/**
 * 图片的膨胀操作
 * @param img {Mat} 图片
 * @param structType    {number?}     结构元素类型  0 矩形 1 十字架型 2 椭圆形 默认0
 * @param struct_width    {number?}   结构元素的宽度 默认 5
 * @param struct_height   {number?}   结构元素的高度 默认 5
 * @param anchor_x        {number?} 结构元素的锚点x 默认-1
 * @param anchor_y        {number?}  结构元素的锚点y 默认-1
 * @param iterations     {number?} 迭代次数 即重复此操作的次数 默认1次
 * @return {Mat|null} 膨胀后图片
 */
OperHandlerIOS.prototype.dilate=function (img, structType, struct_width, struct_height, anchor_x, anchor_y, iterations){
    return  this._Morphology_(img, 1 , structType, struct_width, struct_height, anchor_x, anchor_y, iterations);
}


/**
 * 图片的腐蚀操作
 * @param img {Mat} 图片
 * @param structType      {number?}   结构元素类型  0 矩形 1 十字架型 2 椭圆形 默认0
 * @param struct_width     {number?}  结构元素的宽度 默认 5
 * @param struct_height    {number?}  结构元素的高度 默认 5
 * @param anchor_x        {number?} 结构元素的锚点x 默认-1
 * @param anchor_y         {number?}  结构元素的锚点y 默认-1
 * @param iterations       {number?} 迭代次数 即重复此操作的次数 默认1次
 * @return {Mat|null} 腐蚀后图片
 */
OperHandlerIOS.prototype.erode=function (img, structType, struct_width, struct_height, anchor_x, anchor_y, iterations){
    return  this._Morphology_(img, 0 , structType, struct_width, struct_height, anchor_x, anchor_y, iterations);
}

/**
 * 图片的开操作
 * @param img {Mat} 图片
 * @param structType      {number?}   结构元素类型  0 矩形 1 十字架型 2 椭圆形 默认0
 * @param struct_width     {number?}  结构元素的宽度 默认 5
 * @param struct_height    {number?}  结构元素的高度 默认 5
 * @param anchor_x        {number?} 结构元素的锚点x 默认-1
 * @param anchor_y         {number?}  结构元素的锚点y 默认-1
 * @param iterations       {number?} 迭代次数 即重复操作的次数 默认1次
 * @return {Mat|null}  图片
 */
OperHandlerIOS.prototype.open=function (img , structType, struct_width, struct_height, anchor_x, anchor_y, iterations){
    return  this._Morphology_(img, 2 , structType, struct_width, struct_height, anchor_x, anchor_y, iterations);
}
/**
 * 图片的闭操作
 * @param img {Mat} 图片
 * @param structType      {number?}   结构元素类型  0 矩形 1 十字架型 2 椭圆形 默认0
 * @param struct_width     {number?}  结构元素的宽度 默认 5
 * @param struct_height    {number?}  结构元素的高度 默认 5
 * @param anchor_x        {number?} 结构元素的锚点x 默认-1
 * @param anchor_y         {number?}  结构元素的锚点y 默认-1
 * @param iterations       {number?} 迭代次数 即重复操作的次数 默认1次
 * @return {Mat|null} 图片
 */
OperHandlerIOS.prototype.close=function (img , structType, struct_width, struct_height, anchor_x, anchor_y, iterations){
    return   this._Morphology_(img, 3 , structType, struct_width, struct_height, anchor_x, anchor_y, iterations);
}




/**
 * 图片的梯度
 * @param img {Mat} 图片
 * @param structType      {number?}   结构元素类型  0 矩形 1 十字架型 2 椭圆形 默认0
 * @param struct_width     {number?}  结构元素的宽度 默认 5
 * @param struct_height    {number?}  结构元素的高度 默认 5
 * @param anchor_x        {number?} 结构元素的锚点x 默认-1
 * @param anchor_y         {number?}  结构元素的锚点y 默认-1
 * @param iterations      {number?} 迭代次数 即重复操作的次数 默认1次
 * @return {Mat|null}  图片
 */
OperHandlerIOS.prototype.gradient=function (img , structType, struct_width, struct_height, anchor_x, anchor_y, iterations){
    return this._Morphology_(img, 4 , structType, struct_width, struct_height, anchor_x, anchor_y, iterations);
}


/**
 * 顶帽操作
 * @param img {Mat} 图片
 * @param structType      {number?}   结构元素类型  0 矩形 1 十字架型 2 椭圆形 默认0
 * @param struct_width     {number?}  结构元素的宽度 默认 5
 * @param struct_height    {number?}  结构元素的高度 默认 5
 * @param anchor_x        {number?} 结构元素的锚点x 默认-1
 * @param anchor_y         {number?}  结构元素的锚点y 默认-1
 * @param iterations      {number?} 迭代次数 即重复操作的次数 默认1次
 * @return {Mat|null}  图片
 */
OperHandlerIOS.prototype.topHat=function (img , structType, struct_width, struct_height, anchor_x, anchor_y, iterations){
    return  this._Morphology_(img, 5 , structType, struct_width, struct_height, anchor_x, anchor_y, iterations);
}


/**
 * 黑帽操作
 * @param img {Mat} 图片
 * @param structType      {number?}   结构元素类型  0 矩形 1 十字架型 2 椭圆形 默认0
 * @param struct_width     {number?}  结构元素的宽度 默认 5
 * @param struct_height    {number?}  结构元素的高度 默认 5
 * @param anchor_x        {number?} 结构元素的锚点x 默认-1
 * @param anchor_y         {number?}  结构元素的锚点y 默认-1
 * @param iterations      {number?} 迭代次数 即重复操作的次数 默认1次
 * @return {Mat|null}  图片
 */
OperHandlerIOS.prototype.blackHat=function (img , structType, struct_width, struct_height, anchor_x, anchor_y, iterations){
    return this._Morphology_(img, 6 , structType, struct_width, struct_height, anchor_x, anchor_y, iterations);
}


/**
 * 击中不击中
 * @param img {Mat} 图片
 * @param structType      {number?}   结构元素类型  0 矩形 1 十字架型 2 椭圆形 默认0
 * @param struct_width     {number?}  结构元素的宽度 默认 5
 * @param struct_height    {number?}  结构元素的高度 默认 5
 * @param anchor_x        {number?} 结构元素的锚点x 默认-1
 * @param anchor_y         {number?}  结构元素的锚点y 默认-1
 * @param iterations      {number?} 迭代次数 即重复操作的次数 默认1次
 * @return {Mat|null}  图片
 */
OperHandlerIOS.prototype.hitMiss=function (img , structType, struct_width, struct_height, anchor_x, anchor_y, iterations){
    return this._Morphology_(img, 7 , structType, struct_width, struct_height, anchor_x, anchor_y, iterations);
}



//私有函数  不必理会
OperHandlerIOS.prototype._Morphology_=function (img, mode , structType, struct_width, struct_height, anchor_x, anchor_y, iterations){
    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    structType=structType||0;
    struct_width=struct_width||5;
    struct_height=struct_height||5;
    if(typeof(anchor_x)!="number"){anchor_x=-1;}
    if(typeof(anchor_y)!="number"){anchor_y=-1;}
    iterations=iterations||1;
    try {
        return   Oper.Morphology( img, mode , structType, struct_width, struct_height, anchor_x, anchor_y, iterations);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}

/**
 * 掩膜复制
 * @param img  { Mat } 目标图片
 * @param mask  {Mat } 掩膜图片必须和目标图片一样大小, 一般是二值化图片;
 *                        掩膜用于告诉函数复制过程中仅仅复制掩膜上非零的点所对应的坐标,
 *                        例如 掩膜上 {x:0,y:1} 是白色,{x:2,y:2} 是黑色,
 *                        那么复制的图片中{x:0,y:1}有颜色,{x:2,y:2} 未复制所以没有颜色
 *
 * @returns {Mat|null} 图片
 */
OperHandlerIOS.prototype.copyTo=function (img, mask){
    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    if(mask){
        if(!mask.nativeObj)logd("mask请使用Mat对象,或者 null");
    }
    try {
        return Oper.CopyTo(img, mask);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}

/**
 * 颜色范围提取  一般和 HLS HSV 图片一起使用 RGB也可以 只是不好确定颜色范围
 * @param img   { Mat } 图片
 * @param lowerColor {number[]} 颜色下限数组 例如[30,127,90];
 * @param upperColor {number[]} 颜色上限数组 例如[90,200,130];
 * @returns {Mat} 掩膜图片 即黑白图片  可以做为 copyto 或  bitwise_and 掩膜获得彩色图片
 */
OperHandlerIOS.prototype.inRange=function (img, lowerColor, upperColor){

    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    try {
        return Oper.InRange( img,lowerColor,upperColor);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}


/**
 * 图片 与
 * @param img1  {Mat} 图片1
 * @param img2  {Mat} 图片2 必须与 图片1 一样大小
 * @param mask  {Mat?}   掩膜 可选 必须与 图片1 一样大小
 * @returns {Mat|null} 根据图片1 的彩色图片
 */
OperHandlerIOS.prototype.bitwise_and=function (img1, img2, mask){

    if(!img1||!img2){
        if(!img1) logd("img1不能为null");
        if(!img2)logd("img2不能为null");
        return  null;
    }
    if(!img1.nativeObj || !img2.nativeObj){
        if(!img1.nativeObj) logd("img1请使用Mat格式");
        if(!img2.nativeObj)logd("img2请使用Mat格式");
        return  null;
    }
    if(mask){
        if(!mask.nativeObj)logd("mask请使用Mat对象,或者 null");
    }

    try {
        if(!mask){mask=null;}
        return Oper.BitWise( img1, img2, mask, 0 );
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }


}

/**
 * 图片 或
 * @param img1 {Mat} 图片1
 * @param img2 {Mat} 图片2 必须与 图片1 一样大小  , 也可以是 图片1 图片
 * @param mask  {Mat?}   掩膜 可选 必须与 图片1 一样大小
 * @returns {Mat} 掩膜图片 即黑白图片  可以使用 bitwise_and 获取彩色图片
 */
OperHandlerIOS.prototype.bitwise_or=function (img1, img2, mask){
    if(!img1||!img2){
        if(!img1) logd("img1不能为null");
        if(!img2)logd("img2不能为null");
        return  null;
    }
    if(!img1.nativeObj || !img2.nativeObj){
        if(!img1.nativeObj) logd("img1请使用Mat格式");
        if(!img2.nativeObj)logd("img2请使用Mat格式");
        return  null;
    }
    if(mask){
        if(!mask.nativeObj)logd("mask请使用Mat对象,或者 null");
    }
    try {
        if(!mask){mask=null;}
        return Oper.BitWise( img1, img2, mask, 1 );
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }

}
/**
 * 图片 非
 * @param img {Mat} 图片1
 * @param mask  {Mat?}   掩膜 可选 必须与 图片1 一样大小
 * @returns {Mat} 图片
 */
OperHandlerIOS.prototype.bitwise_not=function (img, mask){
    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    if(mask){
        if(!mask.nativeObj)logd("mask请使用Mat对象,或者 null");
    }

    try {
        if(!mask){mask=null;}
        return Oper.BitWise( img, null, mask, 2 );
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }

}
/**
 * 图片 异或
 * @param img1 {Mat} 图片1
 * @param img2 {Mat} 图片2 必须与 图片1 一样大小
 * @param mask {Mat?}   掩膜 可选 必须与 图片1 一样大小
 * @returns {Mat} 图片
 */
OperHandlerIOS.prototype.bitwise_xor=function (img1, img2, mask){
    if(!img1||!img2){
        if(!img1) logd("img1不能为null");
        if(!img2)logd("img2不能为null");
        return  null;
    }
    if(!img1.nativeObj || !img2.nativeObj){
        if(!img1.nativeObj) logd("img1请使用Mat格式");
        if(!img2.nativeObj)logd("img2请使用Mat格式");
        return  null;
    }
    if(mask){
        if(!mask.nativeObj)logd("mask请使用Mat对象,或者 null");
    }
    if(mask){
        if(!mask.nativeObj)logd("mask请使用Mat对象,或者 null");
    }
    try {
        if(!mask){mask=null;}
        return Oper.BitWise( img1, img2, mask, 3 );
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}

/**
 * 释放 AutoImage 或者 BufferedImage 或者 Mat 图片
 * @param img {AutoImage|BufferedImage|Mat|Mat[]}  BufferedImage或者Mat图片
 * @returns {boolean}
 */

OperHandlerIOS.prototype.recycle=function (img){
   if(!img){ logd("图片为null无需释放");return  false; }
    for (img of arguments) {
        if(!img){continue;}
        if(Array.isArray(img)){
            for( let t of img){
                if(!t){continue;}
                if(t.nativeObj){
                    t.release();
                }else {
                    image.recycle(t);
                }
            }
        }else if(img.nativeObj){
            img.release();
        }else{
            image.recycle(img);
        }
    }
    return true;
}

/**
 * 判断 findImgByColor 是否已经提取过 tempPath 的图片颜色
 * @param tempPath {String} 模板图片路径 例如 "myImg.jpg", "drawable/myImg.png"
 * @returns {String[]|null} 返回null 或者 字符串数组 [color1,color2]
 */
OperHandlerIOS.prototype.getColorMap=function (tempPath){
    return Oper.getColorMap(tempPath);
}

/** 全分辨率多点找色<br/>
 *  使用精度最高的siftEx与多点找色相结合,同时也解决了色差问题 <br/>
 *  原理:先进行找图,然后对找到的目标进行颜色提取,如果目标一直未出现,这个方法也只是个普通的siftEx找图,
 *  如果出现过一次,之后使用这个方法将转化为多点找色(自动判断是否提取过颜色)<br/>
 *
 *  如果不确定 目标是否会出现,可以使用其他较快的函数先行确定目标是否已经出现.<br/>
 *
 *  可以使用getColorMap函数确定模板是否已经提取过颜色.<br/>
 *
 * @param img {Mat} 大图
 * @param tempPath {string} 模板图路径 例如 "myImg.jpg", "drawable/myImg.png"
 * @param color    {string?} 第一个点的颜色,同多点找色.如果为null将由程序自动筛选,返回的尽可能为中心的坐标,如需精确的请手动填写
 * @param colorMulti {string?} 其他颜色点  同多点找色  与color只要有一个为null 将由程序自动筛选
 * @param threshold {number?} 相似度 0~1.0,默认 0.9
 * @param sx {number?} 起点x 默认0;
 * @param sy {number?} 起点y 默认0;
 * @param ex {number?} 终点x 默认0;
 * @param ey {number?} 终点y 默认0;
 * @param count {number?} 保留变量,以后可能用到,现在不起作用
 * @param direction {number?} 寻找方向 同多点找色
 * @returns {P_Color|null} 返回null 或者 P_Color对象 继承自 Point <br/>
 *          P_Color.x  坐标x <br/>
 *          P_Color.y  坐标y <br/>
 *          P_Color.color1  第一个颜色字符串  亦可用于普通多点找色<br/>
 *          P_Color.color2  其他颜色字符串    亦可用于普通多点找色<br/>
 */
OperHandlerIOS.prototype.findImgByColor=function (img, tempPath, color, colorMulti, threshold , sx, sy, ex, ey, count, direction){

    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    try {

        color=color||null;
        colorMulti=colorMulti||null;
        threshold=threshold||0.9;
        sx=sx||0;
        sy=sy||0;
        ex=ex||0;
        ey=ey||0;
        count=count||1
        direction=direction||1;
        let p_color=Oper.findImgColor(img, tempPath, threshold , sx,   sy,  ex,  ey,  count , direction);
        if(!p_color){
            let temp=readResBitmap(tempPath);
            if (temp) {
                let srcMultiple=1.0; //原图缩放比例
                let tempMultiple=1.0; //模板缩放比例
                let distanceRatio=0.6;//距离比值
                let customFeatures=6; //特征点阈值
                p_color=Oper.findImgColor(img,  srcMultiple, temp, tempMultiple,  distanceRatio, customFeatures, tempPath, color,  colorMulti, threshold , sx,   sy,  ex,  ey, count,  direction);
                temp.recycle();
            }
        }
        return p_color&&p_color.hasTarget?p_color:null;

    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }

}


/**
 * 帧差法
 * @param img1 {Mat} 图1
 * @param img2 {Mat} 图2 与图1同大小
 * @returns {Mat|null}
 */
OperHandlerIOS.prototype.absDiff =function (img1, img2){

    if(!img1||!img2){
        if(!img1) logd("img1不能为null");
        if(!img2)logd("img2不能为null");
        return  null;
    }
    if(!img1.nativeObj || !img2.nativeObj){
        if(!img1.nativeObj) logd("img1请使用Mat格式");
        if(!img2.nativeObj)logd("img2请使用Mat格式");
        return  null;
    }

    try {
        return Oper.Absdiff(img1,img2);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }


}


/**
 * 绘制轮廓
 * @param img   {Mat}  图片 一般为二值化图片
 * @param mode  {number?}  定义轮廓的检索模式 默认为 0 ：<br/>
 *                0 只检测最外围轮廓，包含在外围轮廓内的内围轮廓被忽略<br/>
 *                1 检测所有的轮廓，包括内围、外围轮廓，但是检测到的轮廓不建立等级关系 ,hierarchy向量内所有元素的第3、第4个分量都会被置为-1  <br/>
 2 检测所有的轮廓，但所有轮廓只建立两个等级关系，外围为顶层，若外围内的内围轮廓还包含了其他的轮廓信息，则内围内的所有轮廓均归属于顶层  <br/>
 * @param method {number?}   定义轮廓的近似方法 默认为 2 ： <br/>
 *                1 保存物体边界上所有连续的轮廓点到contours向量内 <br/>
 *                2 仅保存轮廓的拐点信息，把所有轮廓拐点处的点保存入contours向量内，拐点与拐点之间直线段上的信息点不予保留 <br/>
 * @param contoursIndex {number[]?} 要绘制的轮廓的引索数组 默认null  引索的筛选可以从其他轮廓函数返回的信息中提取,只要mode和method 一样,返回的数组信息都是一对一相对应的<br/>
 *                       比如, 轮廓重心返回的数组 和 轮廓长度返回数组是一样大小的, 轮廓重心[5] 和 轮廓长度[5]是同一个轮廓的信息
 * @param thickness  {number?} 绘制的线条宽度 -1表示填充,默认1
 * @param lineType   {number?} 线条类型  8 不抗锯齿 ,16抗锯齿,默认 8
 * @returns {Mat||null}
 * @constructor
 */
OperHandlerIOS.prototype.getContours=function (img, mode, method, contoursIndex, thickness, lineType){

    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }

    try {
        mode=mode||0;
        method=method||2;
        contoursIndex=contoursIndex||null;
        thickness=thickness||1;
        lineType=lineType||16;
        return Oper.GetContours(img,mode,method,contoursIndex,thickness,lineType);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }


}


/**
 *  获取轮廓拓扑信息 (即位置信息)
 * @param img  {Mat}  图片 一般为二值化图片
 * @param mode {number?}  同 GetContours函数  默认0
 * @param method {number?}  同 GetContours函数 默认2
 * @returns {number[][]} 返回二位数组  <br/>一个数组包含 nextIndex(下一个引索),beforeIndex(上一个引索),childIndex(子引索),parentIndex(父引索)四个引索 例如 [[2,0,5,-1]]  其中-1代表没有
 * @constructor
 */
OperHandlerIOS.prototype.getContoursHierarchy=function (img, mode, method){
    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    try {
        mode=mode||0;
        method=method||2;
        return Oper.GetContoursHierarchy(img,mode,method);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }

}

/**
 *  获取轮廓重心
 * @param img  {Mat}  图片 一般为二值化图片
 * @param mode {number?}  同 GetContours函数  默认0
 * @param method {number?}  同 GetContours函数 默认2
 * @param contoursIndex {number[]?} 要绘制的轮廓的引索数组 默认null  引索的筛选可以从其他轮廓函数返回的信息中提取,只要mode和method 一样,返回的数组信息都是一对一相对应的<br/>
 *                       比如, 轮廓重心返回的数组 和 轮廓长度返回数组是一样大小的, 轮廓重心[5] 和 轮廓长度[5]是同一个轮廓的信息
 * @returns {Point[]|null}   返回所有轮廓的重心坐标数组 或者 null

 */
OperHandlerIOS.prototype.getContoursMoments=function (img, mode, method, contoursIndex){
    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    try {
        mode=mode||0;
        method=method||2;
        contoursIndex=contoursIndex||null;
        let res=  Oper.GetContoursMoments(img,mode,method,contoursIndex);
        if (res == null ) {
            return null;
        }
        let x1 = [];
        for (let i = 0; i < res.length; i++) {
            x1.push(new Point(res[i]));
        }
        return x1;
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }

}


/**
 *  获取轮廓面积
 * @param img  {Mat}  图片 一般为二值化图片
 * @param mode {number?}  同 GetContours函数  默认0
 * @param method {number?}  同 GetContours函数 默认2
 * @param contoursIndex {number[]?} 要绘制的轮廓的引索数组 默认null  引索的筛选可以从其他轮廓函数返回的信息中提取,只要mode和method 一样,返回的数组信息都是一对一相对应的<br/>
 *                       比如, 轮廓重心返回的数组 和 轮廓长度返回数组是一样大小的, 轮廓重心[5] 和 轮廓长度[5]是同一个轮廓的信息
 * @returns {number[]|null}   返回所有轮廓的面积数组 或者 null

 */
OperHandlerIOS.prototype.getContoursArea=function (img, mode, method, contoursIndex){

    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    try {
        mode=mode||0;
        method=method||2;
        contoursIndex=contoursIndex||null;
        return Oper.GetContoursArea(img,mode,method,contoursIndex);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}


/**
 *  获取轮廓长度
 * @param img  {Mat}  图片 一般为二值化图片
 * @param mode {number?}  同 GetContours函数  默认0
 * @param method {number?}  同 GetContours函数 默认2
 * @param contoursIndex {number[]?} 要绘制的轮廓的引索数组 默认null  引索的筛选可以从其他轮廓函数返回的信息中提取,只要mode和method 一样,返回的数组信息都是一对一相对应的<br/>
 *                       比如, 轮廓重心返回的数组 和 轮廓长度返回数组是一样大小的, 轮廓重心[5] 和 轮廓长度[5]是同一个轮廓的信息
 * @returns {number[]|null}   返回所有轮廓的长度数组 或者 null

 */
OperHandlerIOS.prototype.getContoursLength=function (img, mode, method, contoursIndex){

    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    try {
        mode=mode||0;
        method=method||2;
        contoursIndex=contoursIndex||null;
        return Oper.GetContoursLength(img,mode,method,contoursIndex);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}



/**
 *  获取轮廓外接矩形
 * @param img  {Mat}  图片 一般为二值化图片
 * @param mode {number?}  同 GetContours函数  默认0
 * @param method {number?}  同 GetContours函数 默认2
 * @param contoursIndex {number[]?} 要绘制的轮廓的引索数组 默认null  引索的筛选可以从其他轮廓函数返回的信息中提取,只要mode和method 一样,返回的数组信息都是一对一相对应的<br/>
 *                       比如, 轮廓重心返回的数组 和 轮廓长度返回数组是一样大小的, 轮廓重心[5] 和 轮廓长度[5]是同一个轮廓的信息
 * @returns {Rect[]|null}   返回Rect[] 或者 null

 */
OperHandlerIOS.prototype.getContoursRect=function (img, mode, method, contoursIndex){

    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    try {
        mode=mode||0;
        method=method||2;
        contoursIndex=contoursIndex||null;
        let rects= Oper.GetContoursRect(img,mode,method,contoursIndex);
        if(rects==null){return null;}
        let d = [];
        for (let i = 0; i < rects.length; i++) {
            let tempR=new RectEx();
            tempR.left=rects[i].x;
            tempR.top=rects[i].y;
            tempR.right=rects[i].x+rects[i].width;
            tempR.bottom=rects[i].y+rects[i].height;
            d.push(tempR);
        }
        return d;
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}


/**
 *  获取轮廓外接圆
 * @param img  {Mat}  图片 一般为二值化图片
 * @param mode {number?}  同 GetContours函数  默认0
 * @param method {number?}  同 GetContours函数 默认2
 * @param contoursIndex {number[]?} 要绘制的轮廓的引索数组 默认null  引索的筛选可以从其他轮廓函数返回的信息中提取,只要mode和method 一样,返回的数组信息都是一对一相对应的<br/>
 *                       比如, 轮廓重心返回的数组 和 轮廓长度返回数组是一样大小的, 轮廓重心[5] 和 轮廓长度[5]是同一个轮廓的信息
 * @returns {number[][]|null}  返回二维数组[[x,y,r]] 分别代表 x点,y点,r半径 或者 null;

 */
OperHandlerIOS.prototype.getContoursCircles=function (img, mode, method, contoursIndex){

    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    try {
        mode=mode||0;
        method=method||2;
        contoursIndex=contoursIndex||null;
        return Oper.GetContoursCircles(img,mode,method,contoursIndex);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}


/**
 * 二值化图片按位归一化比较
 * @param img1{Mat}  二值化图片1
 * @param img2 {Mat}  二值化图片2  如果两个张不一样大小将统一成 图片1大小
 * @returns {number} 返回重合度 0~1.0, 1表示完全重合,0表示完全不重合
 * @constructor
 */
OperHandlerIOS.prototype.cmpBit=function (img1, img2){
    if(!img1||!img2){
        if(!img1) logd("img1不能为null");
        if(!img2)logd("img2不能为null");
        return  null;
    }
    if(!img1.nativeObj || !img2.nativeObj){
        if(!img1.nativeObj) logd("img1请使用Mat格式");
        if(!img2.nativeObj)logd("img2请使用Mat格式");
        return  null;
    }

    try {
        return Oper.CmpBit(img1,img2);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  0;
    }
}


/**
 * 设置字库  注意txt 必须为 UTF-8    带有BOM的UTF-8也不行
 * @param {string} textPath 字库路径 例如  a.txt
 * @param {string?} name  字库名称  默认为 library
 * @returns {boolean} 返回设置成功或失败
 */
OperHandlerIOS.prototype.setDict=function (textPath, name){
    try{
        name=name||"library"
        let str = readResString(textPath);
        return   Oper.SetFontOcrMap(str,name);
    }catch (e){
        loge("字库设置失败 错误信息:"+e.message);
        loge("程序继续运行");
        return  false;
    }
}


/**
 * 设置字库  注意txt 必须为 UTF-8    带有BOM的UTF-8也不行
 * @param {string} textPath 外部字库路径 例如  "D:\\ziku1.txt"
 * @param {string?} name  字库名称  默认为 library
 * @returns {boolean} 返回设置成功或失败
 */
OperHandlerIOS.prototype.setDictByPath=function (textPath, name){
    name=name||"library"
    let str = file.readFile(textPath);
    return   Oper.SetFontOcrMap(str,name);
}


/**
 * 更改当前字库
 * @param name {string} 字库名称
 *  @returns {bool}  返回操作是否成功
 */
OperHandlerIOS.prototype.useDict=function (name){
    return  Oper.UseFontLibrary(name);
}


/**
 * 卸载字库  移除成功后,在下次更改字库时,彻底消失
 * @param name {string} 字库名称
 *  @returns {bool}  返回操作是否成功
 */
OperHandlerIOS.prototype.removeDict=function (name){
    return  Oper.RemoveFontLibrary(name);
}


/**
 *  找字
 * @param img  {Mat} 大图
 * @param text    {string} 字符串
 * @param sx {number?} 起点x 默认0;
 * @param sy {number?} 起点y 默认0;
 * @param ex {number?} 终点x 默认0;
 * @param ey {number?} 终点y 默认0;
 * @param threshold {number?} 阈值 默认 0.9
 * @param count  {number?} 寻找个数 默认 1
 * @returns {RectEx[]|null}
 */
OperHandlerIOS.prototype.findStr=function (img, text, sx, sy, ex, ey, threshold, count){

    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    try {
        sx=sx||0;
        sy=sy||0;
        ex=ex||0;
        ey=ey||0;
        threshold=threshold||0.9;
        count=count||1;
        let rects=Oper.LocalOcr(img,text,threshold, sx,   sy,  ex,  ey,count);
        if(rects==null){return null;}
        let d = [];
        for (let i = 0; i < rects.length; i++) {
            d.push(new RectEx(rects[i]));
        }
        return d;
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}



/**
 *  找字  对大范围的找字有提速效果
 * @param img  {Mat} 大图
 * @param text    {string} 字符串
 * @param sx {number?} 起点x 默认0;
 * @param sy {number?} 起点y 默认0;
 * @param ex {number?} 终点x 默认0;
 * @param ey {number?} 终点y 默认0;
 * @param threshold {number?} 阈值 默认 0.9
 * @param count  {number?} 寻找个数 默认 1
 * @returns {RectEx[]|null}
 */
OperHandlerIOS.prototype.findStrEx=function (img, text, sx, sy, ex, ey, threshold, count){

    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    try {
        sx=sx||0;
        sy=sy||0;
        ex=ex||0;
        ey=ey||0;
        threshold=threshold||0.9;
        count=count||1;
        let rects=Oper.LocalOcrEx(img,text,threshold, sx,   sy,  ex,  ey,count);
        if(rects==null){return null;}
        let d = [];
        for (let i = 0; i < rects.length; i++) {
            d.push(new RectEx(rects[i]));
        }
        return d;
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}



/**
 * 图片相加
 * @param img1 {Mat} 图1
 * @param img2 {Mat} 图2
 * @returns {Mat|null}  返回相加结果图片
 */
OperHandlerIOS.prototype.add=function (img1, img2){
    if(!img1||!img2){
        if(!img1) logd("img1不能为null");
        if(!img2)logd("img2不能为null");
        return  null;
    }
    if(!img1.nativeObj || !img2.nativeObj){
        if(!img1.nativeObj) logd("img1请使用Mat格式");
        if(!img2.nativeObj)logd("img2请使用Mat格式");
        return  null;
    }

    if(img1.getWidth()!==img2.getWidth()|| img1.getHeight()!==img2.getHeight()){logd("两张图片必须大小一致");return null;}

    try {
        return   Oper.AddAndSubtract(img1,img2,0);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }



}
/**
 * 图片相减
 * @param img1 {Mat} 图1
 * @param img2 {Mat} 图2
 * @returns {Mat|null}  返回相减结果图片
 */
OperHandlerIOS.prototype.subtract=function (img1, img2){

    if(!img1||!img2){
        if(!img1) logd("img1不能为null");
        if(!img2)logd("img2不能为null");
        return  null;
    }
    if(!img1.nativeObj || !img2.nativeObj){
        if(!img1.nativeObj) logd("img1请使用Mat格式");
        if(!img2.nativeObj)logd("img2请使用Mat格式");
        return  null;
    }
    if(img1.getWidth()!==img2.getWidth()|| img1.getHeight()!==img2.getHeight()){logd("两张图片必须大小一致");return null;}
    try {
        return   Oper.AddAndSubtract(img1,img2,1);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}

/**
 *  快速找图
 * @param img {Mat} Mat或者Mat大图
 * @param temp {Mat|Mat[]} Mat目标小图 或者 小图数组
 * @param threshold  {number?} 匹配度 0~1 默认0.9
 * @param sx {number?} 起点x 默认0;
 * @param sy {number?} 起点y 默认0;
 * @param ex {number?} 终点x 默认0;
 * @param ey {number?} 终点y 默认0;
 * @param count  {number?} 查找个数 默认10;
 * @param strictMode {boolean?}  如果对匹配要求严格不允许有差异(比如找字) 设为true,默认为false
 * @returns {RectEx[]|null}
 */
OperHandlerIOS.prototype.findImgFast=function (img, temp, threshold, sx, sy, ex, ey, count, strictMode ){

    if(!img||!temp){
        if(!img) logd("大图不能为null");
        if(!temp)logd("小图不能为null");
        return  null;
    }
    if(!img.nativeObj){
        if(!img.nativeObj) logd("大图请使用Mat格式");
        return  null;
    }
    if(Array.isArray(temp)){
        for( let t of temp){
            if(!t){logd("数组中图片存在null");return null;}
            if(!t.nativeObj){logd("数组中小图请使用Mat格式");return null;}
        }
    }else if(!temp.nativeObj){
        logd("小图请使用Mat格式");
        return  null;
    }

    try {
        sx=sx||0;
        sy=sy||0;
        ex=ex||0;
        ey=ey||0;
        threshold=threshold||0.9;
        count=count||10;
        strictMode=strictMode||false;
        let rects=Oper.FindImgFast(img, temp,sx, sy, ex, ey , 3,  count, threshold-0.1,  threshold,  strictMode,true);
        if(rects==null){return null;}
        let d = [];
        for (let i = 0; i < rects.length; i++) {
            d.push(new RectEx(rects[i]));
        }
        return d;
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}



/**
 *  快速找图 弱化版 (效果和ec aj找图一样), 相比于 findImgFast 没有 颜色校验 明暗校验 哈希校验, 对找半透明且背景变化的图有利,失去了严格的校验也存在找错的可能
 * @param img {Mat} Mat大图
 * @param temp {Mat|Mat[]} Mat目标小图 或者 小图数组
 * @param threshold  {number?} 匹配度 0~1 默认0.9
 * @param sx {number?} 起点x 默认0;
 * @param sy {number?} 起点y 默认0;
 * @param ex {number?} 终点x 默认0;
 * @param ey {number?} 终点y 默认0;
 * @param count  {number?} 查找个数 默认10;
 * @param strictMode {boolean?}  如果对匹配要求严格不允许有差异(比如找字) 设为true,默认为false
 * @returns {RectEx[]|null}
 */
OperHandlerIOS.prototype.findImgFastWeak=function (img, temp, threshold, sx, sy, ex, ey, count ){
    if(!img||!temp){
        if(!img) logd("大图不能为null");
        if(!temp)logd("小图不能为null");
        return  null;
    }
    if(!img.nativeObj){
        if(!img.nativeObj) logd("大图请使用Mat格式");
        return  null;
    }
    if(Array.isArray(temp)){
        for( let t of temp){
            if(!t){logd("数组中图片存在null");return null;}
            if(!t.nativeObj){logd("数组中小图请使用Mat格式");return null;}
        }
    }else if(!temp.nativeObj){
        logd("小图请使用Mat格式");
        return  null;
    }
    try {
        sx=sx||0;
        sy=sy||0;
        ex=ex||0;
        ey=ey||0;
        threshold=threshold||0.9;
        count=count||10;
        let rects=Oper.FindImgFast(img, temp,sx, sy, ex, ey , 5,  count, threshold-0.1,  threshold,  false, false);
        if(rects==null){return null;}
        let d = [];
        for (let i = 0; i < rects.length; i++) {
            d.push(new RectEx(rects[i]));
        }
        return d;
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}


/**
 *  基于彩色的带方向的找图
 * @param img {Mat} Mat大图
 * @param temp {Mat} Mat目标小图
 * @param threshold  {number?} 匹配度 0~1 默认0.9
 * @param sx {number?} 起点x 默认0;
 * @param sy {number?} 起点y 默认0;
 * @param ex {number?} 终点x 默认0;
 * @param ey {number?} 终点y 默认0;
 * @param count  {number?} 查找个数 默认10;
 * @param strictMode {boolean?}  如果对匹配要求严格不允许有差异(比如找字) 设为true(极为耗时),默认为false
 * @param direction {number?}  取值 0~8,带方向耗时,默认为0 不带方向
 0: 不带方向 <br/>
 1: → 从左上横着找到右下   <br/>
 2: ← 从右上横着找到左下  <br/>
 3: ↓ 从右上竖直找到左下  <br/>
 4: ↑ 从右下竖直找到左上  <br/>
 5: ← 从右下横着找到左上  <br/>
 6: → 从左下横着找到右上  <br/>
 7: ↑ 从左下竖直找到右上  <br/>
 8: ↓ 从左上竖直找到右下  <br/>
 * @returns {RectEx[]|null}

 */
OperHandlerIOS.prototype.findImgFastEx=function (img, temp, threshold, sx, sy, ex, ey, count, strictMode, direction){
    if(!img || !temp){logd("传入的图片为null");return null;}
    try {
        sx=sx||0;
        sy=sy||0;
        ex=ex||0;
        ey=ey||0;
        threshold=threshold||0.9;
        count=count||10;
        strictMode=strictMode||false;
        direction=direction||0;
        let rects=Oper.FindImgFastEx(img, temp,sx, sy, ex, ey , 5,  count, threshold-0.1,  threshold,  strictMode,direction);
        if(rects==null){return null;}
        let d = [];
        for (let i = 0; i < rects.length; i++) {
            d.push(new RectEx(rects[i]));
        }
        return d;
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}




/**
 * 多边形检测
 * @param img  {Mat} Mat二值化图像或者轮廓
 * @param Angles  {number} 目标角数/边数 ,如三角形是3 五边形是5
 * @param compareMode  {number?}  比较方式, -1 表示小于Angles,0表示等于Angles,1表示大于Angles,默认为0
 * @param minArea    {number?}  目标的最小面积 默认为100
 * @param maxArea    {number?}  目标的最大面积 默认为-1 无上限
 * @param mode      {number?}  定义轮廓的检索模式 默认为 0 ：<br/>
 *                0 只检测最外围轮廓，包含在外围轮廓内的内围轮廓被忽略<br/>
 *                1 检测所有的轮廓，包括内围、外围轮廓，但是检测到的轮廓不建立等级关系 ,hierarchy向量内所有元素的第3、第4个分量都会被置为-1  <br/>
 *                2 检测所有的轮廓，但所有轮廓只建立两个等级关系，外围为顶层，若外围内的内围轮廓还包含了其他的轮廓信息，则内围内的所有轮廓均归属于顶层  <br/>
 * @param method  {number?}   定义轮廓的近似方法 默认为 2 ： <br/>
 *                1 保存物体边界上所有连续的轮廓点到contours向量内 <br/>
 *                2 仅保存轮廓的拐点信息，把所有轮廓拐点处的点保存入contours向量内，拐点与拐点之间直线段上的信息点不予保留 <br/>
 * @param epsilon   {number?} 轮廓近似逼近阈值 默认为 -1 表示目标周长的百分之一为阈值 ： <br/>
 * @returns {number[]|null} 返回的是引索数组,配合其他轮廓函数使用,比如轮廓重心,轮廓外接矩形等
 */
OperHandlerIOS.prototype.polygonDetection=function (img, Angles, compareMode, minArea, maxArea , mode , method, epsilon){
    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    try {
        compareMode=compareMode||0;
        minArea=minArea||100;
        maxArea=maxArea||-1;
        mode=mode||0;
        method=method||2;
        epsilon=epsilon||-1;
        return   Oper.polygonDetection(img,  Angles,  compareMode, minArea, maxArea , mode , method, epsilon);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }


}


/**
 * 获取轮廓的凸包
 * @param img  {Mat} Mat二值化图像或者轮廓
 * @param mode      {number?}  定义轮廓的检索模式 默认为 0 ：<br/>
 *                0 只检测最外围轮廓，包含在外围轮廓内的内围轮廓被忽略<br/>
 *                1 检测所有的轮廓，包括内围、外围轮廓，但是检测到的轮廓不建立等级关系 ,hierarchy向量内所有元素的第3、第4个分量都会被置为-1  <br/>
 *                2 检测所有的轮廓，但所有轮廓只建立两个等级关系，外围为顶层，若外围内的内围轮廓还包含了其他的轮廓信息，则内围内的所有轮廓均归属于顶层  <br/>
 * @param method  {number?}   定义轮廓的近似方法 默认为 2 ： <br/>
 *                1 保存物体边界上所有连续的轮廓点到contours向量内 <br/>
 *                2 仅保存轮廓的拐点信息，把所有轮廓拐点处的点保存入contours向量内，拐点与拐点之间直线段上的信息点不予保留 <br/>
 * @param contoursIndex {number[]?} 要绘制的轮廓的引索数组 默认null  引索的筛选可以从其他轮廓函数返回的信息中提取,只要mode和method 一样,返回的数组信息都是一对一相对应的<br/>
 *                       比如, 轮廓重心返回的数组 和 轮廓长度返回数组是一样大小的, 轮廓重心[5] 和 轮廓长度[5]是同一个轮廓的信息
 * @param thickness  {number?} 绘制的线条宽度 -1表示填充,默认1
 * @param lineType   {number?} 线条类型  8 不抗锯齿 ,16抗锯齿,默认 8
 * @returns {Mat|null}  凸包图片
 */
OperHandlerIOS.prototype.getConvexHull=function (img, mode , method, contoursIndex, thickness, lineType){
    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    try {
        mode=mode||0;
        method=method||2;
        contoursIndex=contoursIndex||null;
        thickness=thickness||1;
        lineType=lineType||8;
        return   Oper.GetConvexHull(img,  mode , method,contoursIndex, thickness,lineType);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}








/**
 * 判断轮廓是否是凸包
 * @param img  大图 二值化图片或者轮廓
 * @param mode      {number?}  定义轮廓的检索模式 默认为 0 ：<br/>
 *                0 只检测最外围轮廓，包含在外围轮廓内的内围轮廓被忽略<br/>
 *                1 检测所有的轮廓，包括内围、外围轮廓，但是检测到的轮廓不建立等级关系 ,hierarchy向量内所有元素的第3、第4个分量都会被置为-1  <br/>
 *                2 检测所有的轮廓，但所有轮廓只建立两个等级关系，外围为顶层，若外围内的内围轮廓还包含了其他的轮廓信息，则内围内的所有轮廓均归属于顶层  <br/>
 * @param method  {number?}   定义轮廓的近似方法 默认为 2 ： <br/>
 *                1 保存物体边界上所有连续的轮廓点到contours向量内 <br/>
 *                2 仅保存轮廓的拐点信息，把所有轮廓拐点处的点保存入contours向量内，拐点与拐点之间直线段上的信息点不予保留 <br/>
 * @param contoursIndex {number[]?} 要绘制的轮廓的引索数组 默认null  引索的筛选可以从其他轮廓函数返回的信息中提取,只要mode和method 一样,返回的数组信息都是一对一相对应的<br/>
 *                       比如, 轮廓重心返回的数组 和 轮廓长度返回数组是一样大小的, 轮廓重心[5] 和 轮廓长度[5]是同一个轮廓的信息
 * @param epsilon        {number?} 轮廓近似逼近阈值 默认为 -1 表示目标周长的百分之一为阈值 ： <br/>
 * @return {boolean[]||null} 返回 boolean 数组  true表示是凸包,false表示不是凸包
 */
OperHandlerIOS.prototype.isContourConvex=function (img, mode , method, contoursIndex, epsilon){
    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }

    try {
        mode=mode||0;
        method=method||2;
        contoursIndex=contoursIndex||null;
        epsilon=epsilon||-1;
        return   Oper.isContourConvex(img,  mode , method, contoursIndex, epsilon);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }

}



/**
 * 轮廓近似逼近
 * @param img  {Mat} Mat二值化图像或者轮廓
 * @param mode      {number?}  定义轮廓的检索模式 默认为 0 ：<br/>
 *                0 只检测最外围轮廓，包含在外围轮廓内的内围轮廓被忽略<br/>
 *                1 检测所有的轮廓，包括内围、外围轮廓，但是检测到的轮廓不建立等级关系 ,hierarchy向量内所有元素的第3、第4个分量都会被置为-1  <br/>
 *                2 检测所有的轮廓，但所有轮廓只建立两个等级关系，外围为顶层，若外围内的内围轮廓还包含了其他的轮廓信息，则内围内的所有轮廓均归属于顶层  <br/>
 * @param method  {number?}   定义轮廓的近似方法 默认为 2 ： <br/>
 *                1 保存物体边界上所有连续的轮廓点到contours向量内 <br/>
 *                2 仅保存轮廓的拐点信息，把所有轮廓拐点处的点保存入contours向量内，拐点与拐点之间直线段上的信息点不予保留 <br/>
 * @param contoursIndex {number[]?} 要绘制的轮廓的引索数组 默认null  引索的筛选可以从其他轮廓函数返回的信息中提取,只要mode和method 一样,返回的数组信息都是一对一相对应的<br/>
 *                       比如, 轮廓重心返回的数组 和 轮廓长度返回数组是一样大小的, 轮廓重心[5] 和 轮廓长度[5]是同一个轮廓的信息
 * @param thickness  {number?} 绘制的线条宽度 -1表示填充,默认1
 * @param lineType   {number?} 线条类型  8 不抗锯齿 ,16抗锯齿,默认 8
 * @param epsilon        {number?} 轮廓近似逼近阈值 默认为 -1 表示目标周长的百分之一为阈值 ： <br/>
 * @returns {Mat|null}    图片
 */
OperHandlerIOS.prototype.approxPolyDP=function (img, mode , method, contoursIndex, thickness, lineType, epsilon ){
    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    try {
        mode=mode||0;
        method=method||2;
        contoursIndex=contoursIndex||null;
        thickness=thickness||1;
        lineType=lineType||8;
        epsilon=epsilon||-1;
        return   Oper.approxPolyDP(img,  mode , method,contoursIndex,  thickness, lineType,  epsilon);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}


/**
 *  全分辨率形状匹配
 * @param img  {Mat} Mat图片
 * @param dataInfo {object}   由图色工具生成的属性对象
 * @param threshold  {number?} 相识度 默认0.9
 * @param sx {number?} 起点x 默认0;
 * @param sy {number?} 起点y 默认0;
 * @param ex {number?} 终点x 默认0;
 * @param ey {number?} 终点y 默认0;
 * @param count  {number?} 寻找数量 默认1个
 * @param minArea {number?} 最小面积,指轮廓围成的面积,默认200
 * @param maxArea {number?} 最大面积,指轮廓围成的面积,默认-1 表示不限制
 * @returns {RectEx[]|null}
 */
OperHandlerIOS.prototype.matchShape=function (img, dataInfo , threshold, sx, sy, ex, ey , count, minArea, maxArea){
    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    try {
        sx=sx||0;
        sy=sy||0;
        ex=ex||0;
        ey=ey||0;
        threshold=threshold||0.9;
        count=count||1;
        minArea=minArea||200;
        maxArea=maxArea||-1;
        let rects=Oper.MatchShape( img,  dataInfo.colors, dataInfo.imageMode,  dataInfo.info,  threshold, sx, sy, ex, ey , count, minArea,maxArea);
        if(rects==null){return null;}
        let d = [];
        for (let i = 0; i < rects.length; i++) {
            d.push(new RectEx(rects[i]));
        }
        return d;
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}


/**
 * 检测圆形进度条的进度 顺时针检测
 * @param img {Mat} Mat图片
 * @param color  {string} 颜色字符串 例如:"#FFFFFF-0x101010"
 * @param x      {number} 圆心坐标 x
 * @param y      {number} 圆心坐标 y
 * @param r      {number} 圆形半径 r
 * @param startAngle {number?} 开始角度0~359,以12点钟方向为0度起点, -1表示自动计算起点,默认-1;
 * @param endAngle   {number?} 结束角度1~360,默认360;
 * @returns {number}  进度,0~359;
 */
OperHandlerIOS.prototype.getCircleBarValue=function(img, color, x, y, r, startAngle, endAngle){
    if(!img){
        logd("大图不能为null");
        return  0;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return 0;
    }
    if(typeof(startAngle)!="number"){startAngle=-1;}
    endAngle=endAngle||360;
    try {
        return  Oper.GetCircleBarValue(img, color, x, y, r, startAngle, endAngle);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  0;
    }
}

/**
 * 全分辨率模板匹配
 * @param img {Mat} Mat大图
 * @param temp   {Mat} 小图
 * @param oWidth  {number} 制作小图时的屏幕宽度
 * @param oHeight {number} 制作小图时的屏幕高度
 * @param threshold {number?} 匹配度 默认0.9;
 * @param sx {number?} 起点x 默认0;
 * @param sy {number?} 起点y 默认0;
 * @param ex {number?} 终点x 默认0;
 * @param ey {number?} 终点y 默认0;
 * @param count {number?} 寻找个数 默认 1; 注:返回的都是相同大小的目标
 * @param scalePro {number?} 每次缩放比例, 默认0.05,即百分之五,程序根据分辨率自动放大或缩小,如果为负数将执行相反的过程;
 * @returns {RectEx[]||null}  区域数组或null
 */
OperHandlerIOS.prototype.findImgByPyramid=function (img, temp, oWidth, oHeight, threshold, sx, sy, ex, ey , count, scalePro){
    if(!img||!temp){
        if(!img) logd("大图不能为null");
        if(!temp)logd("小图不能为null");
        return  null;
    }
    if(!img.nativeObj || !temp.nativeObj){
        if(!img.nativeObj) logd("大图请使用Mat格式");
        if(!temp.nativeObj)logd("小图请使用Mat格式");
        return  null;
    }
    sx=sx||0;
    sy=sy||0;
    ex=ex||0;
    ey=ey||0;
    threshold=threshold||0.9;
    scalePro=scalePro||0.05;
    count=count||1;
    let num1= Math.min(device.getScreenWidth(),device.getScreenHeight());
    let num2= Math.min(oWidth,oHeight);
    if(num1<num2){
        scalePro*=-1;
        let temp=num1;
        num1=num2;
        num2=temp;
    }
    let scaleTimes= Math.abs(Math.ceil((num1-num2)/(num1*scalePro)))+1;
    try {
        let rects= Oper.FindImgByPyramid2( img,  temp, sx, sy, ex, ey , 3, threshold-0.1, threshold, count,scaleTimes,scalePro);
        if(rects==null){return null;}
        let d = [];
        for (let i = 0; i < rects.length; i++) {
            d.push(new RectEx(rects[i]));
        }
        return d;
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}


/**
 * 中值滤波
 * @param img {Mat} 图片
 * @param kSize {number?} 中值统计区域大小,如填5,则在5*5的区域内选中值,默认5
 */
OperHandlerIOS.prototype.medianBlur=function (img, kSize){

    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    try {
        kSize=kSize||5;
        return   Oper.MedianBlur(img,kSize);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}
/**
 * 自适应二值化
 * @param img {Mat} 图片
 * @param adaptiveMethod {number?} 阈值计算方式 选则值为 0或1, 0-通过平均的方法取得平均值做阈值,1-通过高斯取得高斯值做阈值,默认0
 * @param blockSize  {number?}  计算阈值的领域大小,此值对二值化的最终效果起主要作用, 默认11;
 * @param maxValue   {number?}  二值化最大值 默认255;
 * @param type  {number?}一般写0即可 默认0<br/>
 0 灰度值大于阈值为最大值，其他值为<br/>
 1 灰度值大于阈值为0，其他值为最大值<br/>
 * @param C {number?} 偏移值调整量 默认0, 像素值减去C再与阈值比较
 * @returns {Mat|null} 二值化图片
 */
OperHandlerIOS.prototype.adaptiveThreshold=function(img, adaptiveMethod, blockSize, maxValue, type, C){
    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }

    try {
        adaptiveMethod=adaptiveMethod||0;
        blockSize=blockSize||11;
        maxValue=maxValue||255;
        type=type||0;
        C=C||0;
        return   Oper.AdaptiveThreshold(img, maxValue, type,  adaptiveMethod, blockSize, C);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }

}

/**
 * 统计非零的像素点个数
 * @param img  {Mat} 图片
 * @returns {number|null}  非零像素点个数
 */
OperHandlerIOS.prototype.countNonZero=function(img){
    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    try {
        return   Oper.CountNonZero(img);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}

/**
 * 骨架提取
 * @param img {Mat} 二值化图片
 * @param maxIterations {number?} 限制迭代次数，如果不进行限制，默认为-1
 * @returns {null|Mat}
 */
OperHandlerIOS.prototype.skeleton=function(img, maxIterations){
    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    maxIterations=maxIterations||-1;
    try {
        return   Oper.Skeleton(img,maxIterations);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}

/**
 *  双边滤波器
 * @param img {Mat} 图片
 * @param d  {number} 滤波过程中每个像素邻域的直径，如果这个值是非正数，则由参数sigmaSpace计算得到。
 * @param sigmaColor  颜色空间滤波器的标准差值，这个参数越大表明该像素领域内有越多的颜色被混合到一起，产生较大的半相等颜色区域。
 * @param sigmaSpace  空间坐标中滤波器的标准差值，这个参数越大表明越远的像素会相互影响，从而使更大领域中有足够相似的颜色获取相同的颜色。当第三个参数d大于0时，邻域范围由d确定，当第三个参数小于等于0时，邻域范围正比于这个参数的数值。
 * @param borderType  像素外推法选择标志，取值范围在表3-5中给出，默认参数为4，表示不包含边界值倒序填充。
 * @returns {null|Mat}
 */
OperHandlerIOS.prototype.bilateral=function(img, d, sigmaColor, sigmaSpace, borderType){
    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    sigmaSpace=sigmaSpace||10;
    borderType=borderType||4;
    try {
        return   Oper.Bilateral(img, d,  sigmaColor,  sigmaSpace,  borderType);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}


/**
 *  单点找非色
 * @param img  {Mat} 图片
 * @param colorStr   {string} 不想找的一个或多个颜色 例如 "0xCDD7E9-0x101010" "#00FF00"   "0xCDD7E9-0x101010 & 0x9999E9-0x101010" 主要 & 符合表示 与 ,
 * @param threshold   {number} 找色时颜色相似度取值为 0.0 ~ 1.0  只对不带偏色的颜色值有效(偏色也是一种相似度) 默认0.9  以255为基准 即 255*(1-0.9)=25;
 * @param sx {number?} 起点x 默认0;
 * @param sy {number?} 起点y 默认0;
 * @param ex {number?} 终点x 默认0;
 * @param ey {number?} 终点y 默认0;
 * @param count {number?} 寻找的个数 默认1
 * @param direction {number?} 寻找的方向 1~8 默认1 <br/>
 * @returns { Point[]|null}  <br/>
 */
OperHandlerIOS.prototype.findNotColor=function(img, colorStr, threshold, sx, sy, ex, ey, count, direction){
    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    if (colorStr.indexOf("\|")>0) { loge("确认颜色字符串是否正确"); return  null;}
    threshold=threshold||0.9;
    sx=sx||0;
    sy=sy||0;
    ex=ex||0;
    ey=ey||0;
    count=count||1;
    direction=direction||1;
    try {
        let res= Oper.FindNotColor( img, colorStr , threshold, sx, sy, ex, ey, count, direction);

        if (res == null ) {
            return null;
        }
        let x1 = [];
        for (let i = 0; i < res.length; i++) {
            x1.push(new Point(res[i]));
        }
        return x1;
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}


/**
 * 图片合并
 * @param img1 {Mat} 图片1
 * @param img2 {Mat} 图片2
 * @param direction {number}  方向 0表示横向,1表示纵向,默认0;
 * @returns {null|Mat}
 */
OperHandlerIOS.prototype.mergeBitmap=function(img1, img2, direction){
    if(!img1||!img2){
        if(!img1) logd("img1不能为null");
        if(!img2)logd("img2不能为null");
        return  null;
    }
    if(!img1.nativeObj || !img2.nativeObj){
        if(!img1.nativeObj) logd("img1请使用Mat格式");
        if(!img2.nativeObj)logd("img2请使用Mat格式");
        return  null;
    }
    direction=direction||0;
    try {
        return   Oper.MergeBitmap( img1,  img2,  direction);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}


/**
 * 图片叠加
 * @param img1 {Mat} 图片1
 * @param img2 {Mat} 图片2
 * @param x {number?} 起点x 默认0;
 * @param y {number?} 起点y 默认0;
 * @param alpha {number?} 图片2 的透明度,范围 0~1,默认1 不透明
 * @param mask {Mat?} 与图片2一样大小的二值化图片,默认null
 * @returns {null|Mat}
 */
OperHandlerIOS.prototype.overlyingBitmap=function(img1, img2, x, y, alpha , mask){
    if(!img1||!img2){
        if(!img1) logd("img1不能为null");
        if(!img2)logd("img2不能为null");
        return  null;
    }
    if(!img1.nativeObj || !img2.nativeObj){
        if(!img1.nativeObj) logd("img1请使用Mat格式");
        if(!img2.nativeObj)logd("img2请使用Mat格式");
        return  null;
    }
    x=x||0;
    y=y||0;
    alpha=alpha||1;
    mask=mask||null;
    try {
        return   Oper.OverlyingBitmap(  img1,  img2, x, y, alpha , mask);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}

/**
 * 获取连通域状态
 * @param img {Mat} 二值化图片
 * @param connectivity {number?}  领域类型 4 或 8, 默认8,表示8连通
 * @returns {null|ConnectedComponents[]} 返回 null 或者 ConnectedComponents数组
 * ConnectedComponents对象 包含一下信息<br/>
 *  index:引索值 为connectedComponentsWithBitmap提供的<br/>
 *  center:中心的point<br/>
 *  rect:区域<br/>
 *  whiteArea:白点的面积(像素点为单位)<br/>
 *  rectArea:矩形围成的面积<br/>
 */
OperHandlerIOS.prototype.connectedComponentsWithStats=function(img, connectivity){
    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    try {

       let result=Oper.ConnectedComponentsWithStats(img,connectivity==4?connectivity:8);
       if(result==null){return  null }
        let arr=[];
        for (let i = 0; i < result.length; i++) {
            arr.push(new ConnectedComponents(result[i]));
        }
        return arr;
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}

/**
 * 获取连通域图片
 * @param img {Mat} 二值化图片
 * @param indexArr {number[]} 引索值数组 可从connectedComponentsWithStats结果的index属性获得
 * @param connectivity {number?}  领域类型 4 或 8, 默认8
 * @returns {null|Mat } null或者图片
 */
OperHandlerIOS.prototype.connectedComponentsWithMat=function(img, indexArr, connectivity){
    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    indexArr=indexArr||null;
    try {
        return  Oper.ConnectedComponentsWithMat(img,indexArr,connectivity==4?connectivity:8);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}

/**
 * 找字,此方法允许字库里的字自由拼接
 * @param img  {Mat} 大图
 * @param text    {string} 字符串   如果有多个用|隔开 如 象棋|野马|大炮兵;
 * @param sx {number?} 起点x 默认0;
 * @param sy {number?} 起点y 默认0;
 * @param ex {number?} 终点x 默认0;
 * @param ey {number?} 终点y 默认0;
 * @param threshold {number?} 阈值 默认 0.9
 * @param count  {number?} 寻找个数 默认 1
 * @param charInterval  {number?} 字符间隔, 以当前查找字符中最大字符的宽度为单位, 默认是 0.5, 也就是0.5个字符宽度
 * @param global {boolean?}  是否为精准查找,默认值false,
 * @returns {RectEx[]|[]}
 */
OperHandlerIOS.prototype.findStrComb=function(img, text, sx, sy, ex, ey, threshold, count, charInterval, global){
    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    try {
        sx=sx||0;
        sy=sy||0;
        ex=ex||0;
        ey=ey||0;
        threshold=threshold||0.9;
        charInterval=charInterval||0.5;
        count=count||1;
        global=global||false;
        let rects=Oper.LocalOcrCombinationHelper(img, text,threshold, sx, sy, ex, ey, count, charInterval, global, true);
        if(rects==null){return null;}
        let d = [];
        for (let i = 0; i < rects.length; i++) {
            d.push(new RectEx(rects[i]));
        }
        return d;
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}
/**
 * 使用字库识别 未知 文字
 * @param img {Mat} 大图
 * @param colorInfo {string} 颜色字符串  例如 "#903A00-0x101010|#000000-0x101010"
 * @param sx {number?} 起点x 默认0;
 * @param sy {number?} 起点y 默认0;
 * @param ex {number?} 终点x 默认0;
 * @param ey {number?} 终点y 默认0;
 * @param threshold  {number?} 阈值 默认 0.9
 * @param colorFilter {boolean?} 是否用于设定的colorInfo对字库进行筛选,默认 false;  如果是true,有助于提供效率(前提是你的字库的颜色于设定colorInfo一致)
 * @returns {RectEx|[]}
 */
OperHandlerIOS.prototype.getWords=function(img, colorInfo , sx, sy, ex, ey, threshold, colorFilter){
    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    try {
        sx=sx||0;
        sy=sy||0;
        ex=ex||0;
        ey=ey||0;
        threshold=threshold||0.9;
        colorFilter=colorFilter||false;
        let rects=Oper.LocalOcrRecognition(img, colorInfo ,threshold,sx, sy, ex, ey,colorFilter);
        if(rects==null){return null;}
        let d = [];
        for (let i = 0; i < rects.length; i++) {
            d.push(new RectEx(rects[i]));
        }
        return d;
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}

/**
 * 将 BufferedImage(Bitmap) 转成 Mat对象;
 * @param img {BufferedImage} 大图
 * @returns {Mat}
 */
OperHandlerIOS.prototype.bitmapToMat=function(img){
    if(!img){ logd("传入的图片为null"); return  null; }
    if(img.nativeObj){ logd("要转换的图片,已经是Mat格式了"); return  img;}
    return Oper.BitmapToMat(img);
}

/**
 * 将 Mat对象 转成 BufferedImage(Bitmap) 对象 ;
 * @param mat {Mat}  Mat图片
 * @returns {BufferedImage}
 */
OperHandlerIOS.prototype.matToBitmap=function(mat){
    if(!mat){ logd("传入的图片为null"); return  null; }
    if(! mat.nativeObj){
        logd("要转换的图片,不是Mat格式");
        return  mat;
    }else{
        return Oper.MatToBitmap(mat);
    }
}






/**
 * 画矩形
 * @param img {Mat} 图片
 * @param sx  {number} 起点x
 * @param sy  {number} 起点y
 * @param ex  {number} 终点x
 * @param ey  {number} 终点y
 * @param color {string?} 颜色  默认 "#FF0000"
 * @param thickness {number?} 画笔粗细  默认 2, -1表示填充
 * @param lineType {number?} 线条类型   4, 8, 16(抗锯齿),默认 4 不抗锯齿
 *  return {Mat|null} 返回新的Mat
 */
OperHandlerIOS.prototype.drawRect=function (img , sx, sy, ex, ey, color,thickness , lineType){
    color=color||"#FF0000"
    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }

    color=color||"#FF0000"
    thickness=thickness||2;
    lineType=lineType||4;
    try {
        return  Oper.DrawRect(img, sx, sy, ex, ey, color, thickness,lineType);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}
/**
 * 画矩形  在原图像上绘画
 * @param img {Mat} 图片
 * @param rects  {Rect|Rect[]} 区域rect 或者 数组
 * @param color {string?} 颜色  默认 "#FF0000"
 * @param thickness {number?} 画笔粗细  默认 2, -1表示填充
 * @param lineType {number?} 线条类型   4, 8, 16(抗锯齿),默认 4 不抗锯齿
 *  return {Mat|null} 返回新的Mat
 */
OperHandlerIOS.prototype.drawRect2=function (img , rects, color,thickness , lineType){
     if(rects==null){
         return imageHandlerIOS.copyTo(img,null);
     }
    if(Array.isArray(rects)){

        if(rects.length>0){
            let temp=this.drawRect(img,rects[0].left,rects[0].top,rects[0].right,rects[0].bottom,color,thickness , lineType);
            let temp2=temp;
            for (let i = 1; i < rects.length; i++) {
                 temp2=this.drawRect(temp,rects[i].left,rects[i].top,rects[i].right,rects[i].bottom,color,thickness , lineType);
                 imageHandlerIOS.recycle(temp);
                 temp=temp2;
            }
            return temp2;
        }else{
            return imageHandlerIOS.copyTo(img,null);
        }
    }else{
        return this.drawRect(img,rects.left,rects.top,rects.right,rects.bottom,color,thickness , lineType);
    }

}

/**
 *   图片上画圆
 * @param img {Mat} 图片
 * @param x   {number}  圆心x
 * @param y    {number}  圆心y
 * @param r    {number} 半径r
 * @param color {string?} 颜色  默认 "#FF0000"
 * @param thickness {number?} 画笔粗细  默认 2, -1表示填充
 * @param lineType {number?} 线条类型   4, 8, 16(抗锯齿),默认 16 抗锯齿
 * @returns {null|Mat} 返回新的Mat
 **/

OperHandlerIOS.prototype.drawCircle=function (img , x, y, r, color,thickness , lineType){
    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    color=color||"#FF0000"
    thickness=thickness||2;
    lineType=lineType||16;
    try {
        return  Oper.DrawCircle(img, x, y, r,color ,thickness,lineType);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}


/**
 *
 * @param img {Mat} 图片
 * @param sx  {number} 起点x
 * @param sy  {number} 起点y
 * @param ex  {number} 终点x
 * @param ey  {number} 终点y
 * @param color {string?} 颜色  默认 "#FF0000"
 * @param lineWidth {number?} 画笔粗细  默认 2
 * @param closed {boolean?} 是否首尾闭合(对3点以上而言) 默认 false
 * @returns {null|Mat} 返回新的Mat
 *
 */
OperHandlerIOS.prototype.drawLines=function (img , sx,sy,ex,ey, color,lineWidth ,closed){
    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    color=color||"#FF0000"
    lineWidth=lineWidth||2;
    if(typeof(closed) == 'undefined'){ closed=false;}

    try {
        return  Oper.DrawLines(img, [ new android.graphics.Point(sx,sy),new android.graphics.Point(ex,ey)],color ,lineWidth,closed);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}




/**
 *   图片上画直线
 * @param img {Mat} 图片
 * @param points   {Point[]}   Point 数组 最少两个点
 * @param color {string?} 颜色  默认 "#FF0000"
 * @param lineWidth {number?} 画笔粗细  默认 2
 * @param closed {boolean?} 是否首尾闭合(对3点以上而言) 默认 false
 * @returns {null|Mat} 返回新的Mat
 **/

OperHandlerIOS.prototype.drawLines2=function (img , points, color,lineWidth ,closed){
    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    color=color||"#FF0000"
    lineWidth=lineWidth||2;
    if(typeof(closed) == 'undefined'){ closed=false;}

    try {

        let newPoints=[];
        logd(points.length)
        for (let i = 0; i < points.length; i++) {

        }
        for (let p of points){
            newPoints.push(new java.awt.Point(p.x,p.y));
        }
        return  Oper.DrawLines(img, newPoints,color ,lineWidth,closed);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}


/**
 *
 * @param img {Mat} 图片
 * @param x    {number} 起点x
 * @param y    {number} 起点y
 * @param str  {string} 文字
 * @param color {string?} 颜色 例: "#FF0000" 默认 "#FF0000"
 * @param fontScale {number?} 文字大小(镑) 默认 25;
 * @param fontFamily {string?} 字体类型 例如 "宋体"、"仿宋"、"Times New Roman"等
 * @param fontStyle  {number?} 字体风格 例如 0,1,2,0|2 <br/>
 * 0 表示 普通 <br/>
 * 1 表示 加粗 <br/>
 * 2 表示 斜体 <br/>
 * 0|2 表示 普通+斜体 <br/>
 * @returns {null|Mat} null或者Mat图片
 */
OperHandlerIOS.prototype.putText=function(img ,  x, y,  str , color , fontScale, fontFamily,fontStyle){
    if(!img){
        logd("大图不能为null");
        return  null;
    }
    if(!img.nativeObj) {
        logd("大图请使用Mat格式");
        return null;
    }
    color=color||"#FF0000"
    fontScale=fontScale||25;
    fontFamily=fontFamily||"宋体";
    fontStyle=fontStyle||0;
    if(typeof(closed) == 'undefined'){ closed=false;}
    try {
        return  Oper.PutText(img,  x, y,  str ,  color , fontScale, fontFamily,fontStyle);
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}





/**
 * 抓取全屏，格式是Mat
 * @return {null|Mat}
 */
OperHandlerIOS.prototype.captureScreenMat=function(){
    checkService(); //先检测服务
    let img;
    for (let i = 0; i < 3 && !img; i++) {
        img =image.captureFullScreenPng();
    }
    if(!img){ loge("截图失败!返回null"); return  null;}
    let bit=image.imageToBitmap(img);
    let mat=imageHandlerIOS.bitmapToMat(bit);
    image.recycle(img);
    image.recycle(bit);
    return mat;
}



function checkService() {
    for (var i = 0; i < 10; i++) {
        if (isServiceOk()) {
            return true;
        }
        var started = startEnv();
        logd("第" + (i + 1) + "次启动服务结果: " + started);
        if (isServiceOk()) {
            return true;
        }
    }
    return isServiceOk();
}




/**
 * 保存Mat图像
 * @param mat{Mat} 图片
 * @param path {string}要保存图像路径
 * @param format {string?} 要保存图像格式，有 png，jpg
 * @param q {number?}要保存图像质量，1-100
 * @return {boolean} true 成功 false 失败
 */
OperHandlerIOS.prototype.saveMat=function(mat,path,format, q ){

    if (!this.checkMat(mat)) {logd("无需释放!"); return false ;}


    format=format||"png";
    q=q||100;

    let temp=imageHandlerIOS.getBGR(mat,-1);
    let bit=imageHandlerIOS.matToBitmap(temp);
    //保存图片
    let r=image.saveBitmap(bit,format, q, path);
    //回收
    image.recycle(bit)
    imageHandlerIOS.recycle(temp);
    return r;
}

/**
 * 读取res文件夹中的资源文件，并返Mat图片对象
 * @param fileName 文件名称，不要加res前缀,a.png 或者 a.png|b.png|c.png
 * @return {null|Mat|Mat[]} 如果是null代表没内容
 */
OperHandlerIOS.prototype.readResMat=function(fileName){
    if(fileName.indexOf("|")>-1){
        let temps=[];
        let fileNameArr=fileName.split("|");
        for (let name of fileNameArr) {
            let temp =readResBitmap(name);
            if(!temp){
                loge("没有取得图片 "+name+",自动忽略");
            } else {
                let mat=imageHandlerIOS.bitmapToMat(temp);
                image.recycle(temp);
                temps.push(mat)
            }
        }
        return  temps.length>0?temps:null;
    }else {
        let temp =readResBitmap(fileName);
        if(!temp){loge("readResMat没有取得图片，检查文件名；"); return  null;}
        let mat=imageHandlerIOS.bitmapToMat(temp);
        image.recycle(temp);
        return  mat;
    }
}


/**
 *  梯度特征匹配   可全分,可测角度,无视色差,可返回多个不同目标
 * @param img {Mat} Mat图片;
 * @param names {string} yaml文件名称 多个用"|"隔开  例如 "yamlOne|yamlTow|weixin",如果不写 则查找res下所有yaml目标(不包含子目录);
 * @param sx  {number?} 起点x 默认0;
 * @param sy  {number?} 起点y 默认0;
 * @param ex  {number?} 终点x 默认0;
 * @param ey  {number?} 终点y 默认0;
 * @param threshold {number?} 阈值 0~1,默认 0.9;
 * @param count {number?} 寻找个数,默认 1;
 * @param step   {number[]?}  金字塔梯度 默认为[4,8],可选值 [2,4] ,[4,8];
 * @param NMSThreshold {number?} 非极大值抑制阈值 默认0.5; 即两个目标重叠时 面积交集/并集>阈值 将被舍去
 * @param mask {Mat?} 大图的掩膜 默认null;
 * @return {null|RectEx[]} 返回null或者Rect数组
 */
OperHandlerIOS.prototype.gradientShapeMatch=function(imgMat, names,  sx, sy, ex, ey,  threshold, count,  step   ,  NMSThreshold, maskMat){

    if (!this.checkMat(imgMat)) { return null ;}

    try {
        let nameList=[],filePathList=[],yamlArr=[];



        if(names==""){
            //一次性读取yaml文件, 如果不想全部读取 可以小图放进多个文件夹里
            let res = findIECFile("res/",null,".yaml",false)
            for (let re of res) {
                re=re.replace("res/","");
                filePathList.push(re);
                nameList.push(re.replace(".yaml",""));
            }
        } else{
            nameList=names.split("|");
            for (let i = 0; i <nameList.length ; i++) {
                filePathList.push(nameList[i]+".yaml");
            }

        }

        if(nameList.length==0){return  null;}
        let boolArr=Oper.YamlExist(nameList);

        for (let i = boolArr.length-1; i >=0 ; i--) {

            if(boolArr[i]){
                yamlArr.push("");
            }else{

                let yamlstr=readResString(filePathList[i]);
                if(!yamlstr){
                    logd("不存在文件"+filePathList[i]+",自动忽略");
                    nameList.splice(nameList[i],1);
                }else{
                    yamlArr.push(yamlstr);
                }
            }

        }

        yamlArr.reverse();//反转
        sx=sx||0;
        sy=sy||0;
        ex=ex||0;
        ey=ey||0;
        threshold=threshold||0.9;
        count=count||1;
        step=step||[4,8];
        NMSThreshold=NMSThreshold||0.5;
        maskMat=maskMat||null;

        let rects=Oper.GradientShapeMatch( imgMat,  nameList, yamlArr,  sx, sy, ex, ey,  threshold, count,  step  ,  63 ,  NMSThreshold, maskMat);
        if(rects==null){return null;}
        let d = [];
        for (let i = 0; i < rects.length; i++) {
            d.push(new RectEx(rects[i]));
        }
        return d;
    }catch (e){
        loge("捕获一个错误:"+e.message);
        loge("程序继续运行");
        return  null;
    }
}


/**
 * 加载yaml 文件
 * @param names {string?} yaml文件名称 多个用"|"隔开  例如 "yamlOne|yamlTow|weixin",如果为 空 或不写 则加载path下所有 yaml文件;
 * @param path {string?} 路径  可以是外部的 也可以是内部res下  例如 C:/yamlFiles , drawable; 默认为 ""(res下);
 * @return {string} 返回yaml文件名 例 yamlOne|yamlTwo|weixin
 */
OperHandlerIOS.prototype.loadYaml=function (names, path){

    //如果是外部
    path=path||"";
    let isInternal=true; //是内部
    let newNames=[],yamlArr=[];
    if(!names){
        if(path.indexOf(":/")>-1 || path.indexOf(":\\")>-1){
            let fileList = file.listDir(path);
            for (let i = 0; fileList&&i <fileList.length ; i++) {

                if(fileList[i].endsWith(".yaml")){
                    let index= fileList[i].lastIndexOf("\\");
                    index= index>-1?index:fileList[i].lastIndexOf("/");

                    let name=fileList[i].substr(index+1, fileList[i].length-index-1-5);
                    newNames.push(name);
                    yamlArr.push(file.readFile(fileList[i]));
                }
            }
        }else {

            //一次性读取yaml文件, 如果不想全部读取 可以小图放进多个文件夹里
            let _path="res/"+path;
            let res = findIECFile(_path,null,".yaml",false)
            for (let re of res) {
                re=re.replace("res/","");
                yamlArr.push(readResString(re));
                let index= re.lastIndexOf("\\");
                index= index>-1?index:re.lastIndexOf("/");
                let name=re.substr(index+1, re.length-index-1-5);
                newNames.push(name);
            }
        }
    }else{

        names=names.split("|");
        let boolArr=Oper.YamlExist(names);
        if(path.indexOf(":/")>-1 || path.indexOf(":\\")>-1){
            isInternal=false;
            for (let i = 0; i < boolArr.length; i++) {

                if(boolArr[i]){
                    newNames.push(names[i]);
                    yamlArr.push("");
                }else{

                    let newPath=path+"/"+names[i]+".yaml";
                    let str= file.readFile(newPath);
                    if(str){
                        newNames.push(names[i]);
                        yamlArr.push(str);
                    }else{
                        logd(names[i]+".yaml 文件不存在,自动忽略");
                    }

                }
            }
        }else {
            for (let i = 0; i < boolArr.length; i++) {
                if(!boolArr[i]){
                    let _path= path+"/"+names[i]+".yaml";
                    let str=readResString(_path);
                    if(str){
                        newNames.push(names[i]);
                        yamlArr.push(str);
                    }else{

                        logd(_path+ " 不存在,自动忽略");
                    }

                }else{
                    newNames.push(names[i]);
                }
            }
        }
    }
    Oper.LoadYaml(newNames,yamlArr);
    return  newNames.join("|");

}


/**
 * 释放 yaml资源
 * @param names {string?} yaml文件名称 多个用"|"隔开  例如 "yamlOne|yamlTow|weixin"; 不写则释放全部
 * @returns {boolean} 释放成功或失败
 */
OperHandlerIOS.prototype.releaseYaml=function (names){
    let nameList=[];
    if(names){ nameList=names.split("|");}
    return  Oper.ReleaseYaml(nameList);

}





OperHandlerIOS.prototype.checkMat=function (mat){
    if(!mat){
        logd("图片不能为空(null)");
        return  null;
    }
    if(!mat.nativeObj) {
        logd("请使用Mat格式图片");
        return null;
    }

    if(mat.empty()) {
        logd("图片没有内容(数据)");
        return null;
    }
    return true;
}


//连通域状态对像
function ConnectedComponents(arr){
    //引索值 为connectedComponentsWithBitmap提供
    this.index=arr[0];
    //中心位置
    this.center=new Point({x:arr[1],y:arr[2]});
    //区域
    this.rect= new Rect({left:arr[3],top:arr[4],right:(arr[3]+arr[5]),bottom:(arr[4]+arr[6])});
    //宽
    this.width=arr[5];
    //宽
    this.height=arr[6];
    //白点的面积
    this.whiteArea=arr[7];
    //形成的矩形面积
    this.rectArea =arr[5]*arr[6];
}


function RectEx(rectEx) {
     this.index=0;
    this.top = 0;
    this.bottom = 0;
    this.left = 0;
    this.right = 0;
    this.similarity=0;
    this.info="";
    if (rectEx != null) {
        this.top = rectEx["top"];
        this.bottom = rectEx["bottom"];
        this.left = rectEx["left"];
        this.right = rectEx["right"];
        this.similarity=rectEx["similarity"];
        this.index=rectEx["index"];
        this.info+=rectEx["info"];
    }
}



/**
 * 取得中间的坐标点
 * @return Point 对象
 */
RectEx.prototype.center = function () {
    var p = new Point(null);
    p.x = this.left + (this.right - this.left) / 2;
    p.y = this.top + (this.bottom - this.top) / 2;
    return p;
};
RectEx.jsonToObject = function (res) {
    if (res == null || res=="") {
        return null;
    }
    res = JSON.parse(res);
    if (res == null) {
        return null;
    }
    return new Rect(res);
};


RectEx.get = function () {
    return new Rect(null);
};
RectEx.prototype.setLeft = function (left) {
    this.left = left;
    return this;
};
RectEx.prototype.setTop = function (top) {
    this.top = top;
    return this;
};
RectEx.prototype.setRight = function (right) {
    this.right = right;
    return this;
};
RectEx.prototype.setBottom = function (bottom) {
    this.bottom = bottom;
    return this;
};
RectEx.prototype.toJSONString = function () {
    return JSON.stringify(this);
};


