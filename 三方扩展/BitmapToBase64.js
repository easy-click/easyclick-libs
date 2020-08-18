let request = image.requestScreenCapture(10000, 0);
importClass(java.io.ByteArrayOutputStream)
importClass(android.graphics.Bitmap);
importClass(android.graphics.BitmapFactory);
importClass(android.util.Base64);
importClass(java.io.ByteArrayOutputStream);
importClass(java.io.FileOutputStream);
importClass(java.io.IOException);
importClass(java.io.OutputStream);
let bitmap = image.captureScreenBitmap("jpg",0,0,device.getScreenWidth(),device.getScreenHeight(),100);

/**
 * 通过Base32将Bitmap转换成Base64字符串
 * @param bit
 * @return
 */
// logd(BitmapToBase64(bitmap));

function BitmapToBase64(bit) {
	if(!bit){
		return false;
	}
    bos = new ByteArrayOutputStream();
    bit.compress(Bitmap.CompressFormat.JPEG, 20, bos);//参数100表示不压缩
    bytes = bos.toByteArray();
    content = "data:image/jpg;base64," + Base64.encodeToString(bytes, Base64.NO_WRAP);
    logd("Base64Util", "content:" + content);
    return content;
}
