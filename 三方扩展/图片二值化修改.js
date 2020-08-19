importClass(java.io.File)
importClass(android.graphics.Bitmap);
importClass(java.io.FileOutputStream);


var request = image.requestScreenCapture(10000,0);
if (request){
    toast("申请成功");
}else {
    toast("申请失败");
}
sleep(3000)
var b = image.captureScreenBitmap("jpg",0,0,device.getScreenWidth(),device.getScreenHeight(),100);
if (b!=null){
    logi(b);
    savebitmap(gray2Binary(b,100))
} else {
    toast("截图失败");
}

//参数1 bitmap对象 参数2 二值化阀值 0~255
function gray2Binary(graymap,digit) {
    //得到图形的宽度和长度
    var width = graymap.getWidth();
    var height = graymap.getHeight();
    //创建二值化图像
    var binarymap = null;
    binarymap = graymap.copy(Bitmap.Config.ARGB_8888, true);
    //依次循环，对图像的像素进行处理
    for (var i = 0; i < width; i++) {
        for (var j = 0; j < height; j++) {
            //得到当前像素的值
            var col = binarymap.getPixel(i, j);
            //得到alpha通道的值
            var alpha = col & 0xFF000000;
            //得到图像的像素RGB的值
            var red = (col & 0x00FF0000) >> 16;
            var green = (col & 0x0000FF00) >> 8;
            var blue = (col & 0x000000FF);
            // 用公式X = 0.3×R+0.59×G+0.11×B计算出X代替原来的RGB
            var gray = (red * 0.3 +  green * 0.59 +  blue * 0.11)
            //对图像进行二值化处理
            if (gray <= Number(digit)) {
                gray = 0;
            } else {
                gray = 255;
            }
            // 新的ARGB
            var newColor = alpha | (gray << 16) | (gray << 8) | gray;
            //设置新图像的当前像素值
            binarymap.setPixel(i, j, newColor);
        }
    }
    //返回bitmap对象
    return binarymap;
}

//参数1 bitmap对象  默认保存到 /sdcard/Pictures/tmplName1.jpg
function savebitmap(bp) {
    var sdCardDir = '/sdcard/Pictures/'
    var dirFile = new File(sdCardDir);
    if (!dirFile.exists()) {              //如果不存在，那就建立这个文件夹
        dirFile.mkdirs();
    }
    var file = new File(sdCardDir,  "tmplName1.jpg");
    var fos = new FileOutputStream(file);
    bp.compress(Bitmap.CompressFormat.JPEG, 100, fos);
    fos.flush();
    fos.close();
}