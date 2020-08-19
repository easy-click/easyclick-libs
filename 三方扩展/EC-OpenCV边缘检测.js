/**
 * 参数1:待执行边缘检测的图片,类型 Mat
 * 参数2:待输出的图片,类型Mat
 * 参数3:二值化的下界
 * 参数4:二值化的上界
 * @Param Canny 中文Canny边缘算子
 */
function Canny(image,threshold1,threshold2){
    importPackage(org.opencv.core)
    importPackage(org.opencv.android)
    importPackage(org.opencv.imgproc)
    var ret = new Mat();
    Imgproc.Canny(image,ret,threshold1,threshold2)
    return ret
}