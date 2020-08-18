
/**
* 用法:
*  //从IEC包中的读取,也可以从SD读取，都是bitmap就行
      var t =readResBitmap("test.png");
      var rb = rotateBitmap(t,180);
      if (!rb) {
          logd("缩放图片失败");
          return ;
      }

      var d = saveImageToGallery(rb);
      if (d!=-1) {
          logd("成功")
      }

**/




function  rotateBitmap( origin,  alpha) {
        importPackage(android.graphics)
        if (origin == null) {
            return null;
        }
        var width = origin.getWidth();
        var  height = origin.getHeight();
        var matrix = new android.graphics.Matrix();
        matrix.setRotate(alpha);
        // 围绕原地进行旋转
        var newBM = android.graphics.Bitmap.createBitmap(origin, 0, 0, width, height, matrix, false);
        if (newBM.equals(origin)) {
            return newBM;
        }
        origin.recycle();
        return newBM;
    }



    function saveImageToGallery( bmp) {
            importPackage(android.os)
            importPackage(java.io)
            importPackage(java.lang)
            importPackage(java.text)
            importPackage(android.net)
            importPackage(android.content)

            //生成路径
            var root = Environment.getExternalStorageDirectory().getAbsolutePath();
            var dirName = "test";
            var appDir = new File(root , dirName);
            if (!appDir.exists()) {
                appDir.mkdirs();
            }

            //文件名为时间
            var timeStamp = System.currentTimeMillis();
            var sdf=new SimpleDateFormat("yyyyMMddHHmmss");
            var sd = sdf.format(new Date(timeStamp));
            var fileName = sd + ".jpg";

            //获取文件
            var file = new File(appDir, fileName);
            logd("save to  "+file.getAbsolutePath())
            var fos = null;
            try {
                fos = new FileOutputStream(file);
                bmp.compress(Bitmap.CompressFormat.JPEG, 100, fos);
                fos.flush();
                //通知系统相册刷新
                context.sendBroadcast(new Intent(Intent.ACTION_MEDIA_SCANNER_SCAN_FILE,
                        Uri.fromFile(new File(file.getPath()))));
                return 2;

            } catch ( e) {
              logd(e);
            } finally {
                try {
                    if (fos != null) {
                        fos.close();
                    }
                } catch ( e) {
                   logd(e)
                }
            }
            return -1;
        }