function PointIndex(javaPoint) {
    this.x = 0;
    this.y = 0;
    this.index = -1;
    if (javaPoint != null) {
        this.x = javaPoint["x"];
        this.y = javaPoint["y"];
        this.index = javaPoint["index"];
    }
}

PointIndex.get = function () {
    return new PointIndex(null);
};
PointIndex.jsonToObject = function (res) {
    if (res == null || res == "") {
        return null;
    }
    res = JSON.parse(res);
    if (res == null) {
        return null;
    }
    return new Point(res);
};
PointIndex.prototype.setX = function (x) {
    this.x = x;
    return this;
};
PointIndex.prototype.setY = function (y) {
    this.y = y;
    return this;
};
PointIndex.prototype.setIndex = function (index) {
    this.index = index;
    return this;
};
PointIndex.prototype.toJSONString = function () {
    return JSON.stringify(this);
};


function ImageWrapper() {

}

var image = new ImageWrapper();
/**
 * 设置图色模块初始化参数，可用于多分辨率兼容
 * @param param
 */
ImageWrapper.prototype.setInitParam = function (param) {
    if (imageWrapper == null) {
        return;
    }
    imageWrapper.setInitParam(JSON.stringify(param));
};
/**
 * 初始化OPENCV 类库
 * 如果使用找图请先调用这个函数，第一次初始化需要复制类库，时间可能较长，以后再次执行就很快
 *  @return 布尔型 true 代表成功 false代表失败
 */
ImageWrapper.prototype.initOpenCV = function () {
    if (imageWrapper == null) {
        return false;
    }
    return imageWrapper.initOpenCV();
};


/**
 * 向系统申请屏幕截图权限，返回是否请求成功。
 * <p>
 * 第一次使用该函数会弹出截图权限请求，建议选择“总是允许”。
 * </p>
 * <p>
 * 这个函数只是申请截图权限，并不会真正执行截图，真正的截图函数是captureScreen()。
 * </p>
 * 该函数在截图脚本中只需执行一次，而无需每次调用captureScreen()都调用一次。
 * <p>
 * 建议在本软件界面运行该函数，在其他软件界面运行时容易出现一闪而过的黑屏现象。
 * </P>
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 * @param timeout 超时时间，单位是毫秒
 * @param type 截屏的类型，0 自动选择，1 代表授权模式，2 代表无需权限模式（该模式前提条件：运行模式为代理模式）
 *
 * @return 布尔型 true 代表成功 false代表失败
 */
ImageWrapper.prototype.requestScreenCapture = function (timeout, type) {
    if (imageWrapper == null) {
        return false;
    }
    return imageWrapper.requestScreenCapture(timeout, type);
};


/**
 * 释放截屏请求
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 */
ImageWrapper.prototype.releaseScreenCapture = function () {
    if (imageWrapper == null) {
        return;
    }
    imageWrapper.releaseScreenCapture();
};


/**
 * 截取当前屏幕并返回一个Image对象。
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 * <Br/>
 * 如果区域空或则有负数的，就会是全屏
 * @param retryNumber 重试次数，直到能截到图为止，默认是3
 * @param x 截图的起始X坐标
 * @param y 截图的起始Y坐标
 * @param ex 终点X坐标
 * @param ey 终点Y坐标
 * @return AutoImage AutoImage对象或者null
 */
ImageWrapper.prototype.captureScreen = function (retryNumber, x, y, ex, ey) {
    if (imageWrapper == null) {
        return null;
    }
    var uuid = imageWrapper.captureScreen(retryNumber, x, y, ex - x, ey - y);
    if (uuid != null) {
        return new AutoImage(uuid);
    }
    return null;
};

/**
 * 将屏幕抓取为Bitmap对象，如果中间有-1或者宽度、宽度为-1，将会是全屏
 * @param format jpg或者png，代理模式下有用
 * @param x 开始X坐标
 * @param y 开始Y坐标
 * @param ex 终点X坐标
 * @param ey 终点Y坐标
 * @param q 图片质量，1 - 100，代理模式下有用
 * @return Bitmap null或者bitmap对象
 */
ImageWrapper.prototype.captureScreenBitmap = function (format, x, y, ex, ey, q) {
    if (imageWrapper == null) {
        return null;
    }
    return imageWrapper.captureScreenBitmap(format, x, y, ex - x, ey - y, q);
};
/**
 * 将屏幕抓取为Bitmap对象，在代理模式下和captureScreenBitmap实现不一样，速度比captureScreenBitmap快
 * 适合版本 EC 8.3.+
 * @return Bitmap null或者bitmap对象
 */
ImageWrapper.prototype.captureScreenBitmapEx = function () {
    if (imageWrapper == null) {
        return null;
    }
    return imageWrapper.captureScreenBitmapEx("png");
};


/**
 * 抓取全屏
 * @return {null|AutoImage}
 */
ImageWrapper.prototype.captureFullScreen = function () {
    if (imageWrapper == null) {
        return null;
    }
    var uuid = imageWrapper.captureFullScreen();
    if (uuid != null) {
        return new AutoImage(uuid);
    }
    return null;
};


/**
 * 抓取全屏函数，代理模式下并且requestScreenCapture函数的type为0的时候，会使用截屏函数，尽力消除色差问题。
 * 其他的和captureFullScreen一致
 * @return {null|AutoImage}
 */
ImageWrapper.prototype.captureFullScreenEx = function () {
    if (imageWrapper == null) {
        return null;
    }
    var uuid = imageWrapper.captureFullScreenEx();
    if (uuid != null) {
        return new AutoImage(uuid);
    }
    return null;
};

/**
 * 截取当前屏幕并以PNG格式保存到path中。如果文件不存在会被创建；文件存在会被覆盖。
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *<Br/>
 * 如果区域空或则有负数的，就会是全屏
 * @param retryNumber 重试次数，直到能截到图为止，默认是3
 * @param x 截图的起始X坐标
 * @param y 截图的起始Y坐标
 * @param ex 终点X坐标
 * @param ey 终点Y坐标
 * @param path 截图保存路径
 * @return 布尔型 true 截图成功 false 代表不成功
 */
ImageWrapper.prototype.captureToFile = function (retryNumber, x, y, ex, ey, path) {
    if (imageWrapper == null) {
        return false;
    }
    return imageWrapper.captureScreenToFile(retryNumber, x, y, ex - x, ey - y, path);
};

/**
 * 读取在路径path的图片文件并返回一个{@link AutoImage}对象。
 * 如果文件不存在或者文件无法解码则返回null。
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param path 图片路径
 * @return AutoImage AutoImage对象或者null
 */
ImageWrapper.prototype.readImage = function (path) {
    if (imageWrapper == null) {
        return null;
    }
    var uuid = imageWrapper.readImage(path);
    if (uuid != null) {
        return new AutoImage(uuid);
    }
    return null;
};
/**
 * 读取在路径path的图片文件并返回一个{@link Bitmap}对象。如果文件不存在或者文件无法解码则返回null。
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param path 图片路径
 * @return Bitmap android的bitmap对象或者null
 */
ImageWrapper.prototype.readBitmap = function (path) {
    if (imageWrapper == null) {
        return null;
    }
    return imageWrapper.readBitmap(path);
};

/**
 * 返回图片image在点(x, y)处的像素的ARGB值。
 * <p>
 * 该值的格式为0xAARRGGBB，是一个"32位整数"
 * <p>
 * 坐标系以图片左上角为原点。以图片左侧边为y轴，上侧边为x轴。
 *
 * @param image1 图片
 * @param x     要获取的像素的横坐标。
 * @param y     要获取的像素的纵坐标。
 * @return 整型
 */
ImageWrapper.prototype.pixelInImage = function (image1, x, y) {
    if (imageWrapper == null || image1 == null) {
        return null;
    }
    return imageWrapper.pixelInImage(image1.uuid, x, y);
};


/**
 * 找图。在大图片image中查找小图片template的位置（模块匹配），找到时返回位置坐标区域(Rect)，找不到时返回null。
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param image1     大图片
 * @param template  小图片（模板）
 * @param x         找图区域 x 起始坐标
 * @param y         找图区域 y 起始坐标
 * @param ex 终点X坐标
 * @param ey 终点Y坐标
 * @param weakThreshold  图片相似度。取值范围为0~1的浮点数。默认值为0.9。
 * @param threshold 图片相似度。取值范围为0~1的浮点数。默认值为0.9。
 * @param limit 限制结果的数量，如果要找到1个，就填写1，如果是多个请填写多个
 * @param method 0: TM_SQDIFF平方差匹配法,1: TM_SQDIFF_NORMED归一化平方差匹配方法,2: TM_CCORR相关匹配法,3: TM_CCORR_NORMED归一化相关匹配法,4: TM_CCOEFF系数匹配法,5: TM_CCOEFF_NORMED归一化系数匹配法
 * @return Rect 区域坐标对象数组或者null
 */
ImageWrapper.prototype.findImage = function (image1, template, x, y, ex, ey, weakThreshold, threshold, limit, method) {
    if (imageWrapper == null || image1 == null || template == null) {
        return null;
    }
    var res = imageWrapper.findImage(image1.uuid, template.uuid, x, y, ex - x, ey - y, weakThreshold, threshold, limit, method);
    return this.toRectList(res);
};

/**
 * 找图。在当前屏幕中查找小图片template的位置（模块匹配），找到时返回位置坐标区域(Rect)，找不到时返回null。
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 * @param template  小图片（模板）
 * @param x         找图区域 x 起始坐标
 * @param y         找图区域 y 起始坐标
 * @param ex 终点X坐标
 * @param ey 终点Y坐标
 * @param weakThreshold  图片相似度。取值范围为0~1的浮点数。默认值为0.9。
 * @param threshold 图片相似度。取值范围为0~1的浮点数。默认值为0.9。
 * @param limit 限制结果的数量，如果要找到1个，就填写1，如果是多个请填写多个
 * @param method 0: TM_SQDIFF平方差匹配法,1: TM_SQDIFF_NORMED归一化平方差匹配方法,2: TM_CCORR相关匹配法,3: TM_CCORR_NORMED归一化相关匹配法,4: TM_CCOEFF系数匹配法,5: TM_CCOEFF_NORMED归一化系数匹配法
 * @return Rect 区域坐标对象数组或者null
 */
ImageWrapper.prototype.findImageEx = function (template, x, y, ex, ey, weakThreshold, threshold, limit, method) {
    if (imageWrapper == null || template == null) {
        return null;
    }
    var res = imageWrapper.findImageCurrentScreen(template.uuid, x, y, ex - x, ey - y, weakThreshold, threshold, limit, method);
    return this.toRectList(res);
};


/**
 * OpenCV模板匹配封装
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param image1         大图片
 * @param template      小图片（模板）
 * @param weakThreshold 图片相似度。取值范围为0~1的浮点数。默认值为0.9。
 * @param threshold     图片相似度。取值范围为0~1的浮点数。默认值为0.9。
 * @param rect          找图区域。参见findColor函数关于 rect 的说明
 * @param maxLevel      默认为-1，一般而言不必修改此参数。不加此参数时该参数会根据图片大小自动调整。找图算法是采用图像金字塔进行的, level参数表示金字塔的层次,
 *                      level越大可能带来越高的找图效率，但也可能造成找图失败（图片因过度缩小而无法分辨）或返回错误位置。因此，除非您清楚该参数的意义并需要进行性能调优，否则不需要用到该参数。
 * @param limit 限制结果的数量，如果要找到1个，就填写1，如果是多个请填写多个
 * @param method 0: TM_SQDIFF平方差匹配法,1: TM_SQDIFF_NORMED归一化平方差匹配方法,2: TM_CCORR相关匹配法,3: TM_CCORR_NORMED归一化相关匹配法,4: TM_CCOEFF系数匹配法,5: TM_CCOEFF_NORMED归一化系数匹配法
 * @return Match集合 匹配到的集合
 */
ImageWrapper.prototype.matchTemplate = function (image1, template, weakThreshold, threshold, rect, maxLevel, limit, method) {
    if (imageWrapper == null || image1 == null || template == null) {
        return null;
    }
    var drect = rect == null ? null : rect.toJSONString();
    var res = imageWrapper.matchTemplate(image1.uuid, template.uuid, weakThreshold, threshold, drect, maxLevel, limit, method);
    if (res == null || res == "") {
        return null;
    }
    var d = JSON.parse(res);
    var x = [];
    for (var i = 0; i < d.length; i++) {
        x.push(new Match(d[i]));
    }
    return x;
};


/**
 * OpenCV模板匹配封装，在当前屏幕截图中进行匹配
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param template      小图片（模板）
 * @param weakThreshold 图片相似度。取值范围为0~1的浮点数。默认值为0.9。
 * @param threshold     图片相似度。取值范围为0~1的浮点数。默认值为0.9。
 * @param rect          找图区域。参见findColor函数关于 rect 的说明
 * @param maxLevel      默认为-1，一般而言不必修改此参数。不加此参数时该参数会根据图片大小自动调整。找图算法是采用图像金字塔进行的, level参数表示金字塔的层次,
 *                      level越大可能带来越高的找图效率，但也可能造成找图失败（图片因过度缩小而无法分辨）或返回错误位置。因此，除非您清楚该参数的意义并需要进行性能调优，否则不需要用到该参数。
 * @param limit 限制结果的数量，如果要找到1个，就填写1，如果是多个请填写多个
 * @param method 0: TM_SQDIFF平方差匹配法,1: TM_SQDIFF_NORMED归一化平方差匹配方法,2: TM_CCORR相关匹配法,3: TM_CCORR_NORMED归一化相关匹配法,4: TM_CCOEFF系数匹配法,5: TM_CCOEFF_NORMED归一化系数匹配法
 * @return Match集合 匹配到的集合
 */
ImageWrapper.prototype.matchTemplateEx = function (template, weakThreshold, threshold, rect, maxLevel, limit, method) {
    if (imageWrapper == null || template == null) {
        return null;
    }
    var drect = rect == null ? null : rect.toJSONString();
    var res = imageWrapper.matchTemplateCurrentScreen(template.uuid, weakThreshold, threshold, drect, maxLevel, limit, method);
    if (res == null || res == "") {
        return null;
    }
    var d = JSON.parse(res);
    var x = [];
    for (var i = 0; i < d.length; i++) {
        x.push(new Match(d[i]));
    }
    return x;
};


/**
 * 在图片中找到颜色和color完全相等的点，；如果没有找到，则返回null。
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param image1 图片
 * @param color     要寻找的颜色
 * @param threshold 找色时颜色相似度取值为 0.0 ~ 1.0
 * @param x 区域的X起始坐标
 * @param y 区域的Y起始坐标
 * @param ex 终点X坐标
 * @param ey 终点Y坐标
 * @param limit 限制个数
 * @param orz 方向，分别从1-8
 * @return 多个 PointIndex 坐标点数组或者null
 */
ImageWrapper.prototype.findColor = function (image1, color, threshold, x, y, ex, ey, limit, orz) {
    if (imageWrapper == null || image1 == null) {
        return null;
    }

    color = this.convertFirstColorArrayToString2(color);
    let res = imageWrapper.findColor(image1.uuid, color, threshold, x, y, ex - x, ey - y, limit, orz);
    if (res == null || res == "") {
        return null;
    }

    let d = JSON.parse(res);
    let x1 = [];
    for (let i = 0; i < d.length; i++) {
        x1.push(new PointIndex(d[i]));
    }
    return x1;
};


/**
 * 在图片中找到颜色和color完全相等的点，参数从JSON中获取如果没有找到，则返回null。
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param image 图片
 * @param jsonFileName     res文件中取色工具生成的JSON文件，只要填写文件名称即可，后缀不用填写
 * @return 多个 PointIndex 坐标点数组或者null
 */
ImageWrapper.prototype.findColorJ = function (image1, jsonFileName) {
    if (imageWrapper == null || image1 == null) {
        return null;
    }
    var data = readResString(jsonFileName + ".json");
    if (data == null || data == "") {
        return null;
    }
    data = JSON.parse(data);
    var firstColor = data['firstColor'];
    var threshold = data['threshold'];
    var x = data['x'];
    var y = data['y'];
    var ex = data['ex'];
    var ey = data['ey'];
    var limit = data['limit'];
    var orz = data['orz']
    return this.findColor(image1.uuid, firstColor, threshold, x, y, ex - x, ey - y, limit, orz);
};

/**
 * 在当前屏幕中找到颜色和color完全相等的点，如果没有找到，则返回null。
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param color     要寻找的颜色
 * @param threshold 找色时颜色相似度取值为 0.0 ~ 1.0
 * @param x 区域的X起始坐标
 * @param y 区域的Y起始坐标
 * @param ex 终点X坐标
 * @param ey 终点Y坐标
 * @param limit 限制个数
 * @param orz 方向，分别从1-8
 * @return 多个 PointIndex 坐标点数组或者null
 */
ImageWrapper.prototype.findColorEx = function (color, threshold, x, y, ex, ey, limit, orz) {
    if (imageWrapper == null) {
        return null;
    }
    color = this.convertFirstColorArrayToString2(color);
    let res = imageWrapper.findColorCurrentScreen(color, threshold, x, y, ex - x, ey - y, limit, orz);
    if (res == null || res == "") {
        return null;
    }
    let d = JSON.parse(res);
    let x1 = [];
    for (var i = 0; i < d.length; i++) {
        x1.push(new PointIndex(d[i]));
    }
    return x1;
};


/**
 * 在当前屏幕中找到颜色和color完全相等的点，参数从JSON中获取如果没有找到，则返回null。
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param jsonFileName     res文件中取色工具生成的JSON文件，只要填写文件名称即可，后缀不用填写
 * @return 多个 PointIndex 坐标点数组或者null
 */
ImageWrapper.prototype.findColorExJ = function (jsonFileName) {
    if (imageWrapper == null) {
        return null;
    }
    var data = readResString(jsonFileName + ".json");
    if (data == null || data == "") {
        return null;
    }
    data = JSON.parse(data);
    var firstColor = data['firstColor'];
    var threshold = data['threshold'];
    var x = data['x'];
    var y = data['y'];
    var ex = data['ex'];
    var ey = data['ey'];
    var limit = data['limit'];
    var orz = data['orz']
    return this.findColorCurrentScreen(firstColor, threshold, x, y, ex - x, ey - y, limit, orz);
};


/**
 * 多点找色，找到所有符合标准的点，类似于按键精灵的多点找色
 * <p>
 * 整张图片都找不到时返回null
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param image1      要找色的图片
 * @param firstColor 第一个点的颜色
 * @param threshold 找色时颜色相似度取值为 0.0 ~ 1.0
 * @param points     字符串类似这样 6|1|0x969696-0x000010,1|12|0x969696,-4|0|0x969696
 * @param x 区域的X起始坐标
 * @param y 区域的Y起始坐标
 * @param ex 终点X坐标
 * @param ey 终点Y坐标
 * @param limit 限制个数
 * @param orz 方向，分别从1-8
 * @return 多个Point 坐标点数组或者null
 */
ImageWrapper.prototype.findMultiColor = function (image1, firstColor, points, threshold, x, y, ex, ey, limit, orz) {
    if (imageWrapper == null || image1 == null) {
        return null;
    }
    firstColor = this.convertFirstColorArrayToString(firstColor);
    points = this.convertMultiColorArrayToString(points);
    let res = imageWrapper.findMultiColor(image1.uuid, firstColor, points, threshold, x, y, ex - x, ey - y, limit, orz);
    if (res == null || res == "") {
        return null;
    }
    let d = JSON.parse(res);
    let x1 = [];
    for (let i = 0; i < d.length; i++) {
        x1.push(new Point(d[i]));
    }
    return x1;
};


/**
 * 多点找色，找到所有符合标准的点，参数从JSON文件中读取，类似于按键精灵的多点找色
 * <p>
 * 整张图片都找不到时返回null
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param image1      要找色的图片
 * @param jsonFileName res文件中取色工具生成的JSON文件，只要填写文件名称即可，后缀不用填写
 * @return 多个Point 坐标点数组或者null
 */
ImageWrapper.prototype.findMultiColorJ = function (image1, jsonFileName) {
    //String image, String firstColor, String points, float threshold, int x, int y, int w, int h,int limit
    if (imageWrapper == null || image1 == null) {
        return null;
    }
    var data = readResString(jsonFileName + ".json");
    if (data == null || data == "") {
        return null;
    }
    data = JSON.parse(data);
    var firstColor = data['firstColor'];
    var threshold = data['threshold'];
    var points = data['points'];
    var x = data['x'];
    var y = data['y'];
    var ex = data['ex'];
    var ey = data['ey'];
    var limit = data['limit'];
    var orz = data['orz'];
    return imageWrapper.findMultiColor(image1.uuid, firstColor, points, threshold, x, y, ex - x, ey - y, limit, orz);
};


/**
 * 多点找色，找到所有符合标准的点，自动抓取当前屏幕的图片，类似于按键精灵的多点找色
 * <p>
 * 整张图片都找不到时返回null
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param firstColor 第一个点的颜色
 * @param threshold  找色时颜色相似度取值为 0.0 ~ 1.0
 * @param points     字符串类似这样 6|1|0x969696-0x000010,1|12|0x969696,-4|0|0x969696
 * @param x 区域的X起始坐标
 * @param y 区域的Y起始坐标
 * @param ex 终点X坐标
 * @param ey 终点Y坐标
 * @param limit 限制个数
 * @param orz 方向，分别从1-8
 * @return 多个Point 坐标点数组或者null
 */
ImageWrapper.prototype.findMultiColorEx = function (firstColor, points, threshold, x, y, ex, ey, limit, orz) {
    //String firstColor, String points, float threshold, int x, int y, int w, int h
    if (imageWrapper == null) {
        return null;
    }
    firstColor = this.convertFirstColorArrayToString(firstColor);
    points = this.convertMultiColorArrayToString(points);
    let res = imageWrapper.findMultiColorCurrentScreen(firstColor, points, threshold, x, y, ex - x, ey - y, limit, orz);
    if (res == null || res == "") {
        return null;
    }
    try {
        let d = JSON.parse(res);
        let x1 = [];
        for (let i = 0; i < d.length; i++) {
            x1.push(new Point(d[i]));
        }
        return x1;
    } catch (e) {
    }
    return null;

};


/**
 * 多点找色，找到所有符合标准的点，自动抓取当前屏幕的图片,参数从JSON文件中读取，类似于按键精灵的多点找色
 * 整张图片都找不到时返回null
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param jsonFileName res文件中取色工具生成的JSON文件，只要填写文件名称即可，后缀不用填写
 * @return 多个Point 坐标点数组或者null
 */
ImageWrapper.prototype.findMultiColorExJ = function (jsonFileName) {
    if (imageWrapper == null) {
        return null;
    }
    var data = readResString(jsonFileName + ".json");
    if (data == null || data == "") {
        return null;
    }
    data = JSON.parse(data);
    var firstColor = data['firstColor'];
    var threshold = data['threshold'];
    var points = data['points'];
    var x = data['x'];
    var y = data['y'];
    var ex = data['ex'];
    var ey = data['ey'];
    var limit = data['limit'];
    var orz = data['orz'];
    return imageWrapper.findMultiColorCurrentScreen(firstColor, points, threshold, x, y, ex - x, ey - y, limit, orz);
};

/**
 * 单点或者多点比色，找到所有符合标准的点，如果都符合返回true，否则是false
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param image1 图片
 * @param points     字符串类似这样 6|1|0x969696-0x000010,2|3|0x969696-0x000010
 * @param threshold  找色时颜色相似度取值为 0.0 ~ 1.0
 * @param x 区域的X起始坐标，默认填写0全屏查找
 * @param y 区域的Y起始坐标，默认填写0全屏查找
 * @param ex 终点X坐标，默认填写0全屏查找
 * @param ey 终点Y坐标，默认填写0全屏查找
 * @return 布尔型，true代表找到了 false代表未找到
 */
ImageWrapper.prototype.cmpColor = function (image1, points, threshold, x, y, ex, ey) {
    if (imageWrapper == null || image1 == null) {
        return false;
    }
    points = this.convertMultiColorArrayToString(points);
    let index = imageWrapper.cmpColor(image1.uuid, points, threshold, x, y, ex - x, ey - y);
    if (index === -1) {
        return false;
    }
    return true;
};

/**
 * 单点或者多点比色，找到所有符合标准的点，默认自己截图，如果都符合返回true，否则是false
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 *
 * @param points     字符串类似这样 6|1|0x969696-0x000010,2|3|0x969696-0x000010
 * @param threshold  找色时颜色相似度取值为 0.0 ~ 1.0
 * @param x 区域的X起始坐标，默认填写0全屏查找
 * @param y 区域的Y起始坐标，默认填写0全屏查找
 * @param ex 终点X坐标，默认填写0全屏查找
 * @param ey 终点Y坐标，默认填写0全屏查找
 * @return 布尔型，true代表找到了 false代表未找到
 */
ImageWrapper.prototype.cmpColorEx = function (points, threshold, x, y, ex, ey) {
    if (imageWrapper == null) {
        return false;
    }
    points = this.convertMultiColorArrayToString(points);
    let index = imageWrapper.cmpColorCurrentScreen(points, threshold, x, y, ex - x, ey - y);
    if (index === -1) {
        return false;
    }
    return true;
};

/**
 * 多点或者多点数组比色，找到所有符合标准的点，依次查找，如果找到就返回当前points的索引值，如果返回-1，说明都没有找到
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 * @param image1 图片
 * @param points     数组类似这样 ["6|1|0x969696-0x000010,1|12|0x969696,-4|0|0x969696","6|1|0x969696"]
 * @param threshold  找色时颜色相似度取值为 0.0 ~ 1.0
 * @param x 区域的X起始坐标，默认填写0全屏查找
 * @param y 区域的Y起始坐标，默认填写0全屏查找
 * @param ex 终点X坐标，默认填写0全屏查找
 * @param ey 终点Y坐标，默认填写0全屏查找
 * @return 整型，如果找到就返回当前points的索引值，如果返回-1，说明都没有找到
 */
ImageWrapper.prototype.cmpMultiColor = function (image1, points, threshold, x, y, ex, ey) {
    if (imageWrapper == null || image1 == null) {
        return -1;
    }

    if (points != null) {
        // "6|1|0x969696-0x000010,1|12|0x969696,-4|0|0x969696","6|1|0x969696"
        // 类似这样的字符串 直接 转成数组的 JSON
        if ((typeof points) == "string") {
            return imageWrapper.cmpMultiColor(image1.uuid, JSON.stringify([points]), threshold, x, y, ex - x, ey - y);
        }
        //走老的逻辑
        if ((typeof points[0]) == "string") {
            if (/#|0x/.test(points[0])) {
                return imageWrapper.cmpMultiColor(image1.uuid, JSON.stringify(points), threshold, x, y, ex - x, ey - y);
            }
        }
        let newPoint = [];
        for (let i = 0; i < points.length; i++) {
            newPoint[i] = this.convertMultiCmpColorArrayToString(points[i]);
        }
        return imageWrapper.cmpMultiColor(image1.uuid, JSON.stringify(newPoint), threshold, x, y, ex - x, ey - y);
    }
    return -1;
};
/**
 * 多点或者多点数组比色，找到所有符合标准的点，自动截屏，依次查找，如果找到就返回当前points的索引值，如果返回-1，说明都没有找到
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 * @param points     数组类似这样 ["6|1|0x969696-0x000010,1|12|0x969696,-4|0|0x969696","6|1|0x969696"]
 * @param threshold  找色时颜色相似度取值为 0.0 ~ 1.0
 * @param x 区域的X起始坐标，默认填写0全屏查找
 * @param y 区域的Y起始坐标，默认填写0全屏查找
 * @param ex 终点X坐标，默认填写0全屏查找
 * @param ey 终点Y坐标，默认填写0全屏查找
 * @return 整型，如果找到就返回当前points的索引值，如果返回-1，说明都没有找到
 */
ImageWrapper.prototype.cmpMultiColorEx = function (points, threshold, x, y, ex, ey) {
    if (imageWrapper == null) {
        return -1;
    }
    if (points != null) {
        // "6|1|0x969696-0x000010,1|12|0x969696,-4|0|0x969696","6|1|0x969696"
        // 类似这样的字符串 直接 转成数组的 JSON
        if ((typeof points) == "string") {
            return imageWrapper.cmpMultiColorCurrentScreen(JSON.stringify([points]), threshold, x, y, ex - x, ey - y);
        }
        //走老的逻辑
        if ((typeof points[0]) == "string") {
            if (/#|0x/.test(points[0])) {
                return imageWrapper.cmpMultiColorCurrentScreen(JSON.stringify(points), threshold, x, y, ex - x, ey - y);
            }
        }
        let newPoint = [];
        for (let i = 0; i < points.length; i++) {
            newPoint[i] = this.convertMultiCmpColorArrayToString(points[i]);
        }
        return imageWrapper.cmpMultiColorCurrentScreen(JSON.stringify(newPoint), threshold, x, y, ex - x, ey - y);
    }
    return -1;
};


/**
 * 取得宽度
 * @param img 图片对象
 * @return int
 */
ImageWrapper.prototype.getWidth = function (img) {
    if (img == null) {
        return 0;
    }
    return imageWrapper.getWidth(img.uuid);
};

/**
 * 取得高度
 * @param img 图片对象
 * @return int
 */
ImageWrapper.prototype.getHeight = function (img) {
    if (img == null) {
        return 0;
    }
    return imageWrapper.getHeight(img.uuid);
};

/**
 * 保存到文件中
 * @param img 图片对象
 * @param path 路径
 * @return bool true代表成功，false 代表失败
 */
ImageWrapper.prototype.saveTo = function (img, path) {
    if (img == null) {
        return false;
    }
    return imageWrapper.saveTo(img.uuid+"", path);
};
/**
 * 转成base64的字符串
 * @param img 图片对象
 * @return string
 */
ImageWrapper.prototype.toBase64 = function (img) {
    if (img == null) {
        return null;
    }
    return javaString2string(imageWrapper.toBase64(img.uuid, "jpg", 100));
};

/**
 *  转成base64的字符串, jpg格式较小，可以减少内存
 * @param img 图片对象
 * @param format 格式  jpg或者 png
 * @param q 质量  1-100，质量越大 越清晰
 * @return 字符串
 */
ImageWrapper.prototype.toBase64Format = function (img, format, q) {
    if (img == null) {
        return null;
    }
    return javaString2string(imageWrapper.toBase64(img.uuid, format, q));
};
/**
 * 剪切图片
 * @param img 图片对象
 * @param x x起始坐标
 * @param y y起始坐标
 * @param ex 终点X坐标
 * @param ey 终点Y坐标
 * @return AutoImage 对象或者null
 */
ImageWrapper.prototype.clip = function (img, x, y, ex, ey) {
    if (img == null) {
        return null;
    }
    var xd = imageWrapper.clip(img.uuid, x, y, ex - x, ey - y);
    if (xd != null) {
        return new AutoImage(javaString2string(xd));
    }
    return null;
};
/**
 * 取得图片的某个点的颜色值
 * @param img 图片对象
 * @param x x坐标点
 * @param y y坐标点
 * @return int 颜色值
 */
ImageWrapper.prototype.pixel = function (img, x, y) {
    if (img == null) {
        return 0;
    }
    return imageWrapper.pixel(img.uuid, x, y);
};

/**
 * 将整型的颜色值转成16进制RGB字符串
 * @param color 整型值
 * @return {string} 颜色字符串
 */
ImageWrapper.prototype.argb = function (color) {
    if (color == null) {
        return null;
    }
    return imageWrapper.argb(color);
};


/**
 * 取得Bitmap图片的某个点的颜色值
 * @param bitmap 图片对象
 * @param x x坐标点
 * @param y y坐标点
 * @return int 颜色值
 */
ImageWrapper.prototype.getPixelBitmap = function (bitmap, x, y) {
    if (imageWrapper == null) {
        return 0;
    }
    return imageWrapper.getPixelBitmap(bitmap, x, y);
};


/**
 * 取得Bitmap图片的某个区域点的颜色值，等同于 Bitmap.getPixels
 * @param bitmap 图片对象
 * @param arraySize 要返回的区域数组的大小
 * @param offset      写入到pixels[]中的第一个像素索引值
 * @param stride      pixels[]中的行间距个数值(必须大于等于位图宽度)。可以为负数
 * @param x          　从位图中读取的第一个像素的x坐标值。
 * @param y           从位图中读取的第一个像素的y坐标值
 * @param width    　　从每一行中读取的像素宽度
 * @param height 　　　读取的行数
 * @return int 颜色值数组
 */
ImageWrapper.prototype.getPixelsBitmap = function (bitmap, arraySize, offset, stride, x, y, width, height) {
    if (imageWrapper == null) {
        return null;
    }
    return imageWrapper.getPixelsBitmap(bitmap, arraySize, offset, stride, x, y, width, height);
};

/**
 * 是否被回收了
 * @param img 图片对象
 * @return bool true代表已经被回收了
 */
ImageWrapper.prototype.isRecycled = function (img) {
    if (img == null) {
        return false;
    }
    try {
        let d = img.getClass();
        if (d == "class android.graphics.Bitmap") {
            return img.isRecycled();
        }
    } catch (e) {
    }
    if (img.uuid == null) {
        return false;
    }

    return imageWrapper.isRecycled(img.uuid);
};

/**
 * 回收图片
 * @param img 图片对象
 * @return {*}
 */
ImageWrapper.prototype.recycle = function (img) {
    if (img == null) {
        return false;
    }

    try {
        let d = img.getClass();
        if (d == "class android.graphics.Bitmap") {
            img.recycle();

            return true;
        }
    } catch (e) {
    }

    if (img.uuid == null) {
        return false;
    }

    return imageWrapper.recycle(img.uuid);
};


ImageWrapper.prototype.toRectList = function (res) {
    if (res == null || res == "") {
        return null;
    }
    var ps = JSON.parse(res);
    if (ps == null) {
        return null;
    }
    var d = [];
    for (var i = 0; i < ps.length; i++) {
        d.push(new Rect(ps[i]));
    }
    return d;
};

/**
 * 对AutoImage图片进行二值化
 * @param img AutoImage图片对象
 * @param type 二值化类型，一般写1即可
 * 0    灰度值大于阈值为最大值，其他值为<br/>
 * 1    灰度值大于阈值为0，其他值为最大值<br/>
 * 2    灰度值大于阈值的为阈值，其他值不变<br/>
 * 3    灰度值大于阈值的不变，其他值为0<br/>
 * 4    灰度值大于阈值的为零，其他值不变<br/>
 * 7    暂不支持<br/>
 * 8    大津法自动寻求全局阈值<br/>
 * 16    三角形法自动寻求全局阈值<br/>
 * @param threshold 二值化系数，0 ~ 255
 * @return AutoImage 对象或者null
 */
ImageWrapper.prototype.binaryzation = function (img, type, threshold) {
    if (img == null) {
        return null;
    }
    var xd = imageWrapper.binaryzation(img.uuid, type, threshold);
    if (xd != null) {
        return new AutoImage(javaString2string(xd));
    }
    return null;
};

/**
 * 自适应二值化，使用了opencv的adaptiveThreshold函数实现
 * 适合版本 EC 8.3.0+
 * @param img AutoImage图片对象
 * @param map MAP 参数
 *  diameter : 去噪直径 参考opencv的bilateralFilter函数
 *  adaptiveMethod：自适应二值化方式分别是0和1 ，ADAPTIVE_THRESH_MEAN_C=0，ADAPTIVE_THRESH_GAUSSIAN_C = 1
 *  blockSize：计算单位是像素的邻域块，邻域块取多大，就由这个值作决定，3，5，7这样的奇数
 *  c: 偏移值调整量，
 *  {
 *   "diameter":20,
 *   "adaptiveMethod":1,
 *   "c":9,"blockSize":51}
 * @return {null|AutoImage}
 */
ImageWrapper.prototype.binaryzationEx = function (img, map) {
    if (img == null) {
        return null;
    }
    var xd = imageWrapper.binaryzationEx(img.uuid, JSON.stringify(map));
    if (xd != null) {
        return new AutoImage(javaString2string(xd));
    }
    return null;
};
/**
 * 自适应二值化，使用了opencv的adaptiveThreshold函数实现
 * 适合版本 EC 8.3.0+
 * @param bitmap Bitmap 图片对象
 * @param map MAP 参数
    *  diameter : 去噪直径 参考opencv的bilateralFilter函数
    *  adaptiveMethod：自适应二值化方式分别是0和1 ，ADAPTIVE_THRESH_MEAN_C=0，ADAPTIVE_THRESH_GAUSSIAN_C = 1
    *  blockSize：计算单位是像素的邻域块，邻域块取多大，就由这个值作决定，3，5，7这样的奇数
    *  c: 偏移值调整量，
    *   {"diameter":20,
    *   "adaptiveMethod":1,
    *   "c":9,"blockSize":51}
* @return Bitmap 对象或者null
**/
ImageWrapper.prototype.binaryzationBitmapEx = function (bitmap, map) {
    if (bitmap == null) {
        return null;
    }
    return imageWrapper.binaryzationBitmapEx(bitmap, JSON.stringify(map));
};

/**
 * 对安卓的 Bitmap 图片进行二值化
 * @param bitmap Bitmap 图片对象
 * @param type 二值化类型，一般写1即可
 * 0    灰度值大于阈值为最大值，其他值为<br/>
 * 1    灰度值大于阈值为0，其他值为最大值<br/>
 * 2    灰度值大于阈值的为阈值，其他值不变<br/>
 * 3    灰度值大于阈值的不变，其他值为0<br/>
 * 4    灰度值大于阈值的为零，其他值不变<br/>
 * 7    暂不支持<br/>
 * 8    大津法自动寻求全局阈值<br/>
 * 16    三角形法自动寻求全局阈值<br/>
 * @param threshold 二值化系数，0 ~ 255
 * @return Bitmap 对象或者null
 */
ImageWrapper.prototype.binaryzationBitmap = function (bitmap, type, threshold) {
    if (bitmap == null) {
        return null;
    }
    return imageWrapper.binaryzationBitmap(bitmap, type, threshold);
};

/**
 * 剪裁图片，请自行判断参数，正确性
 * @param bitmap 图片
 * @param x 开始X坐标
 * @param y 开始Y坐标
 * @param w 剪裁宽度
 * @param h 剪裁高度
 * @return {Bitmap} 安卓的Bitmap对象
 */
ImageWrapper.prototype.clipBitmap = function (bitmap, x, y, w, h) {
    if (bitmap == null) {
        return null;
    }
    return imageWrapper.clipBitmap(bitmap, x, y, w, h);
};

/**
 * base64字符串转为Bitmap图片
 * @param data base64 数据
 * @param flag base64格式的标示，一般为0，
 * 可选参数为 ：0 默认， 1 无填充模式，2 无换行模式，4 换行模式
 * @return {Bitmap} 安卓的Bitmap对象
 */
ImageWrapper.prototype.base64Bitmap = function (data, flag) {
    if (data == null) {
        return null;
    }
    return imageWrapper.base64Bitmap(data, flag);
};
/**
 * 将AutoImage转换为安卓原生的Bitmap对象
 * @param img {AutoImage}
 * @return {Bitmap} 对象
 */
ImageWrapper.prototype.imageToBitmap = function (img) {
    if (img == null) {
        return null;
    }
    return imageWrapper.imageToBitmap(img.uuid);
};

/**
 * 将安卓原生的Bitmap对象转换为AutoImage
 * 适合EC 6.15.0+版本
 * @param img {Bitmap}对象
 * @return {AutoImage} 对象
 */
ImageWrapper.prototype.bitmapToImage = function (bitmap) {
    var xd = imageWrapper.bitmapToImage(bitmap);
    if (xd != null) {
        return new AutoImage(javaString2string(xd));
    }
    return null;
};


/**
 * bitmap转为base64
 * @param bitmap 图片
 * @param format 格式，jpg或者png
 * @param q 质量  1 - 100
 * @return {string} base64字符串
 */
ImageWrapper.prototype.bitmapBase64 = function (bitmap, format, q) {
    if (bitmap == null) {
        return null;
    }
    var d = imageWrapper.bitmapBase64(bitmap, format, q);
    return javaString2string(d);
};
/**
 * 保存bitmap图像
 * @param bitmap 图片
 * @param format 要保存图像格式，有 png，jpg，webp
 * @param q 要保存图像质量，1-100
 * @param path 要保存图像路径
 * @return {bool} true 成功 false 失败
 */
ImageWrapper.prototype.saveBitmap = function (bitmap, format, q, path) {
    if (bitmap == null) {
        return false;
    }
    return imageWrapper.saveBitmap(bitmap, format, q, path);
};

ImageWrapper.prototype.readResAutoImage = function (res) {
    if (res == null) {
        return false;
    }
    let xd = imageWrapper.readResAutoImage(res);
    return xd;
};


/**
 * 使用系统的screencap命令截图AutoImage，适合root或者代理模式, 有root权限或者开启了代理服务
 * 适合版本 EC 6.8.0+
 * @param root 是否优先使用root方式截图
 * @return AutoImage 对象或者null
 */
ImageWrapper.prototype.screencapImage = function (root) {
    let xd = imageWrapper.screencapImage(root);
    if (xd != null) {
        return new AutoImage(javaString2string(xd));
    }
};


/**
 * 使用系统的screencap命令截图为bitmap，适合root或者代理模式, 有root权限或者开启了代理服务
 * 适合版本 EC 6.8.0+
 * @param root 是否优先使用root方式截图
 * @return {Bitmap} 对象
 */
ImageWrapper.prototype.screencapBitmap = function (root) {
    return imageWrapper.screencapBitmap(root);
};


function OCRWrapper() {

}

var ocr = new OCRWrapper();

/**
 * 初始化OCR模块
 * @param map map参数表
 * key分别为：
 * type : OCR类型，值分别为 tess = Tesseract模块，baiduOnline=百度在在线识别模块，paddleocr=百度离线的paddleocr，easyedge=百度AI OCR
 * ocrLite = ocrLite
 * 如果类型是 tess,请将训练的模型放到 /sdcard/tessdata/ 文件夹下,参数设置为 : {"type":"tess","language":"chi_sim","debug":false}<Br/>
 * language: 语言数据集文件， 例如chi_sim.traineddata 代表是中文简体语言，参数就填写chi_sim
 * debug: 代码是否设置调试模式，一般设置false即可
 * 如果类型是 baiduOnline, 参数设置为 : {"type":"baiduOnline","ak":"xxx","sk":"xx"}<Br/>
 * ak = api key,sk = secret key, 百度OCR文档地址 : https://ai.baidu.com/ai-doc/OCR/Ck3h7y2ia<Br/>
 * 如果类型是 ocrLite, 参数设置为 : {"type":"ocrLite","numThread":4,"padding":10,"maxSideLen":0}<Br/>
 * numThread: 线程数量。 <br/>
 * padding: 图像预处理，在图片外周添加白边，用于提升识别率，文字框没有正确框住所有文字时，增加此值。<br/>
 * maxSideLen: 按图片最长边的长度，此值为0代表不缩放，例：1024，如果图片长边大于1024则把图像整体缩小到1024再进行图像分割计算，如果图片长边小于1024则不缩放，如果图片长边小于32，则缩放到32。<br/>
 * @return {bool} 布尔型 成功或者失败
 */
OCRWrapper.prototype.initOcr = function (map) {
    if (map == null) {
        return ocrWrapper.initOcr(null);
    }
    return ocrWrapper.initOcr(JSON.stringify(map));
};

/**
 * 初始化OCR远程服务，只有使用easyedge和paddleocr的时候需要调用
 * @param timeout 超时时间，毫秒
 * @return {bool} 成功或者失败
 */
OCRWrapper.prototype.initOcrServer = function (timeout) {
    return ocrWrapper.initOcrServer(timeout);
};

/**
 * OCR远程服务连接上，只有使用easyedge和paddleocr的时候可用
 * @return {bool} 成功或者失败
 */
OCRWrapper.prototype.isOcrServerOk = function () {
    return ocrWrapper.isOcrServerOk();
};


/**
 * 设置OCR实现方式
 * @param type 值分别为 tess = Tesseract模块，baiduOnline=百度在在线识别模块
 * @return {bool} 成功或者失败
 */
OCRWrapper.prototype.setOcrType = function (type) {
    return ocrWrapper.setOcrType(type);
};


/**
 * 设置是否守护OCR服务
 * 适合版本 EC 6.9.0+
 * @param daemon true 代表守护，false代表不守护
 * @param delay 每次守护间隔，单位是毫秒
 * @return {bool} 成功或者失败
 */
OCRWrapper.prototype.setDaemonServer = function (daemon, delay) {
    return ocrWrapper.setDaemonServer(daemon, delay);
};


/**
 * 释放OCR占用的资源
 * @return {bool} 成功或者失败
 */
OCRWrapper.prototype.releaseAll = function () {
    return ocrWrapper.releaseAll();
};


/**
 * 获取错误消息
 * @return {string} null代表没有错误
 */
OCRWrapper.prototype.getErrorMsg = function () {
    return ocrWrapper.getErrorMsg();
};


/**
 * 对Bitmap进行OCR，返回的是JSON数据，其中数据类似于与：
 *
 * [{
 * 	"label": "奇趣装扮三阶盘化",
 *	"confidence": 0.48334712,
 *	"x": 11,
 *	"y": 25,
 *	"width": 100,
 *	"height": 100
 * }]
 *  <br/>
 *  label: 代表是识别的文字
 *  confidence：代表识别的准确度
 *  x: 代表X开始坐标
 *  Y: 代表Y开始坐标
 *  width: 代表宽度
 *  height: 代表高度
 * @param bitmap 图片
 * @param timeout 超时时间 单位毫秒
 * @param extra 扩展参数，map形式，例如 {"token":"xxx"}
 * @return {JSON} JSON对象
 */
OCRWrapper.prototype.ocrBitmap = function (bitmap, timeout, extra) {
    if (bitmap == null) {
        return null;
    }
    var d = ocrWrapper.ocrBitmap(bitmap, timeout, JSON.stringify(extra));
    if (d != null && d != "") {
        return JSON.parse(d);
    }
    return d;
};

OCRWrapper.prototype.ocrImage = function (img, timeout, extra) {
    if (img == null) {
        return null;
    }
    let bitmap = image.imageToBitmap(img)
    if (bitmap == null) {
        return null
    }
    let d = ocrWrapper.ocrBitmap(bitmap, timeout, JSON.stringify(extra));
    if (bitmap != null) {
        bitmap.recycle();
        bitmap = null;
    }
    if (d != null && d != "") {
        return JSON.parse(d);
    }
    return d;
};

ImageWrapper.prototype.convertFirstColorArrayToString = function (arr) {
    if (arr) {
        if (typeof arr == "string") {

            return arr;
        }
        if (arr[1] == null || arr[1].length <= 0 || "" == arr[1]) {
            return arr[0];
        }
        return arr[0] + "-" + arr[1];
    }
    return null;
}


ImageWrapper.prototype.convertMultiColorArrayToString = function (arr) {
    if (arr) {
        if (typeof arr == "string") {
            return arr;
        }
        //转换成类似的字符串 6|1|0x969696-0x000010,1|12|0x969696,-4|0|0x969696
        let length = arr.length;
        let result = "";
        for (let i = 0; i < length; i = i + 4) {
            if (result.length > 0) {
                result = result + ","
            }
            let p = arr[i + 3];
            if (p == null || p.length <= 0 || "" == p) {
                result = result + arr[i] + "|" + arr[i + 1] + "|" + arr[i + 2];
            } else {
                result = result + arr[i] + "|" + arr[i + 1] + "|" + arr[i + 2] + "-" + arr[i + 3];
            }

        }
        return result;
    }
    return null;
}


ImageWrapper.prototype.convertFirstColorArrayToString2 = function (arr) {
    if (arr) {
        if (typeof arr == "string") {
            return arr;
        }
        //转换成类似的字符串 0x969696-0x000010,0x969696,0x969696
        let length = arr.length;
        let result = "";
        for (let i = 0; i < length; i = i + 2) {
            if (result.length > 0) {
                result = result + ","
            }
            let p = arr[i + 1];
            if (p == null || p.length <= 0 || "" == p) {
                result = result + arr[i];
            } else {
                result = result + arr[i] + "-" + arr[i + 1];
            }

        }
        return result;
    }
    return null;
}


ImageWrapper.prototype.convertMultiCmpColorArrayToString = function (arr) {
    if (arr) {
        if (typeof arr == "string") {
            return arr;
        }
        //转换成类似的字符串 6|1|0x969696-0x000010,1|12|0x969696,-4|0|0x969696
        let length = arr.length;
        let result = [];
        for (let i = 0; i < length; i = i + 4) {
            let p = arr[i + 3];
            if (p == null || p.length <= 0 || "" == p) {
                let tmp = arr[i] + "|" + arr[i + 1] + "|" + arr[i + 2];
                result.push(tmp)
            } else {
                let tmp = arr[i] + "|" + arr[i + 1] + "|" + arr[i + 2] + "-" + arr[i + 3];
                result.push(tmp)
            }
        }
        return result;
    }
    return null;
}

/**
 * 通过颜色找图，支持透明图，这个不需要处理话opencv
 * <p>
 * 整张图片都找不到时返回null
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 5.0 以上
 * @param image1     大图片
 * @param template  小图片（模板）
 * @param x         找图区域 x 起始坐标
 * @param y         找图区域 y 起始坐标
 * @param ex 终点X坐标
 * @param ey 终点Y坐标
 * @param threshold 图片相似度。取值范围为0~1的浮点数。默认值为0.9。
 * @param limit 限制结果的数量，如果要找到1个，就填写1，如果是多个请填写多个
 * @return 多个Point 坐标点数组或者null
 */
ImageWrapper.prototype.findImageByColor = function (image1, template, x, y, ex, ey, threshold, limit) {
    if (imageWrapper == null || image1 == null || template == null) {
        return null;
    }
    let res = imageWrapper.findImageByColor(image1.uuid, template.uuid, x, y, ex - x, ey - y, threshold, limit);
    if (res == null || res == "") {
        return null;
    }
    let d = JSON.parse(res);
    let x1 = [];
    for (let i = 0; i < d.length; i++) {
        x1.push(new Point(d[i]));
    }
    return x1;
};
/**
 * 通过颜色找图，支持透明图，这个不需要处理话opencv
 * <p>
 * 整张图片都找不到时返回null
 * @param image1     大图片
 * @param template  小图片（模板）
 * @param x         找图区域 x 起始坐标
 * @param y         找图区域 y 起始坐标
 * @param ex 终点X坐标
 * @param ey 终点Y坐标
 * @param limit 限制结果的数量，如果要找到1个，就填写1，如果是多个请填写多个
 * @param extra 扩展函数，map结构例如<Br/>
 * {"firstColorOffset":"#101010","firstColorThreshold":1.0,"firstColorOffset":"#101010","otherColorThreshold":0.9,"cmpColorSucThreshold":1.0}
 * <Br/>firstColorOffset: 第一个匹配到的颜色偏色,例如 #101010 <Br/>
 * firstColorThreshold: 第一个匹配到的颜色偏色系数，例如 0.9<Br/>
 * firstColorOffset: 剩下需要找的颜色 偏色,例如 #101010<Br/>
 * otherColorThreshold: 剩下需要找的颜色 偏色系数，例如 0.9<Br/>
 * cmpColorSucThreshold: 成功匹配多少个颜色系数 就认为是成功的，例如 0.9 = 90%个点<Br/>
 * startX: 第一个点从哪里开始找的X坐标<Br/>
 * startY: 第一个点从哪里开始找的Y坐标<Br/>
 * @return 多个Point 坐标点数组或者null
 */
ImageWrapper.prototype.findImageByColorEx = function (image1, template, x, y, ex, ey, limit, extra) {
    if (imageWrapper == null || image1 == null || template == null) {
        return;
    }
    if (extra) {
        extra = JSON.stringify(extra);
    }
    let res = imageWrapper.findImageByColorEx(image1.uuid, template.uuid, x, y, ex - x, ey - y, limit, extra);
    if (res == null || res == "") {
        return null;
    }
    let d = JSON.parse(res);
    let x1 = [];
    for (let i = 0; i < d.length; i++) {
        x1.push(new Point(d[i]));
    }
    return x1;
};


