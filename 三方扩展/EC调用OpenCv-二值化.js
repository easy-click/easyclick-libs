//EC调用OPENCV 二值化
//这里的代码是java 翻译为JS的
function opencvtest(){
    importPackage(android.graphics)
    importPackage(org.opencv.core)
    importPackage(org.opencv.android)
    importPackage(org.opencv.imgproc)
    importPackage(java.io)
    //读取SDcard的文件
    var orgBitmap = BitmapFactory.decodeFile("/sdcard/aa.png");
    var mGray = new Mat();
    var mGray2 = new Mat();
    Utils.bitmapToMat(orgBitmap, mGray2);
    Imgproc.cvtColor(mGray2, mGray, Imgproc.COLOR_BGR2GRAY);
    var ret = new Mat();
    Imgproc.threshold(mGray, ret, 127, 255, Imgproc.THRESH_BINARY_INV);
    var bitmap = Bitmap.createBitmap(ret.width(), ret.height(), Bitmap.Config.ARGB_8888);
    Utils.matToBitmap(ret, bitmap);
    //保存到文件中
    try {
        bitmap.compress(Bitmap.CompressFormat.PNG, 100, new FileOutputStream("/sdcard/bb3b.png"));
    } catch ( e) {
        logd(e)
    }
            
}

opencvtest();
