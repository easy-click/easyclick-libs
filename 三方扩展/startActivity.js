/**
 * 常用JS变量:
 * agentEvent = 代理模式下自动点击模块
 * acEvent= 无障碍模式下自动点击模块
 * device = 设备信息模块
 * file = 文件处理模块
 * http = HTTP网络请求模块
 * shell = shell命令模块
 * thread= 多线程模块
 * image = 图色查找模块
 * utils= 工具类模块
 * global = 全局快捷方式模块
 * 常用java变量：
 *  context : Android的Context对象
 *  javaLoader : java的类加载器对象
 * 导入Java类或者包：
 *  importClass(类名) = 导入java类
 *      例如: 导入java的 File 类
 *  importPackage(包名) =导入java包名下的所有类
 *      例如: importPackage(java.util) 导入java.util下的类
 *
 */
importClass(java.io.File)
importClass (android.content.Intent)


importClass (android.net.Uri)
importClass (android.os.Build)
importClass (android.os.StrictMode)
///filepath :sdcard/p.txt /sdcard/p.jpg
context.startActivity(openAndroidFile('sdcard/p.txt'))


function openAndroidFile( filepath){
    var intent = new Intent();
    try {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
            ///安卓7.0以上
            var builder = new StrictMode.VmPolicy.Builder();
            StrictMode.setVmPolicy(builder.build());
        }
    }catch( az){
        logd("openAndroidFile:"+az)
    }

    var file = new File(filepath);
//        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);//设置标记
    intent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
    intent.setAction(Intent.ACTION_VIEW);//动作，查看

    intent.setDataAndType(Uri.fromFile(file), getMIMEType(filepath))
    return intent


}

function getMIMEType(file) {
    var MIME_MapTable=
            //{后缀名，    MIME类型}

            {".3gp":    "video/3gpp",
                ".apk":    "application/vnd.android.package-archive",
                ".asf":    "video/x-ms-asf",
                ".avi":    "video/x-msvideo",
                ".bin":    "application/octet-stream",
                ".bmp":      "image/bmp",
                ".c":        "text/plain",
                ".class":    "application/octet-stream",
                ".conf":    "text/plain",
                ".cpp":    "text/plain",
                ".doc":    "application/msword",
                ".docx":    "application/msword",
                ".exe":    "application/octet-stream",
                ".gif":    "image/gif",
                ".gtar":    "application/x-gtar",
                ".gz":        "application/x-gzip",
                ".h":        "text/plain",
                ".htm":    "text/html",
                ".html":    "text/html",
                ".jar":    "application/java-archive",
                ".java":    "text/plain",
                ".jpeg":    "image/jpeg",
                ".JPEG":    "image/jpeg",
                ".jpg":    "image/jpeg",
                ".js":        "application/x-javascript",
                ".log":    "text/plain",
                ".m3u":    "audio/x-mpegurl",
                ".m4a":    "audio/mp4a-latm",
                ".m4b":    "audio/mp4a-latm",
                ".m4p":    "audio/mp4a-latm",
                ".m4u":    "video/vnd.mpegurl",
                ".m4v":    "video/x-m4v",
                ".mov":    "video/quicktime",
                ".mp2":    "audio/x-mpeg",
                ".mp3":    "audio/x-mpeg",
                ".mp4":    "video/mp4",
                ".mpc":    "application/vnd.mpohun.certificate",
                ".mpe":    "video/mpeg",
                ".mpeg":    "video/mpeg",
                ".mpg":    "video/mpeg",
                ".mpg4":    "video/mp4",
                ".mpga":    "audio/mpeg",
                ".msg":    "application/vnd.ms-outlook",
                ".ogg":    "audio/ogg",
                ".pdf":    "application/pdf",
                ".png":    "image/png",
                ".pps":    "application/vnd.ms-powerpoint",
                ".ppt":    "application/vnd.ms-powerpoint",
                ".pptx":    "application/vnd.ms-powerpoint",
                ".prop":    "text/plain",
                ".rar":    "application/x-rar-compressed",
                ".rc":        "text/plain",
                ".rmvb":    "audio/x-pn-realaudio",
                ".rtf":    "application/rtf",
                ".sh":        "text/plain",
                ".tar":    "application/x-tar",
                ".tgz":    "application/x-compressed",
                ".txt":    "text/plain",
                ".wav":    "audio/x-wav",
                ".wma":    "audio/x-ms-wma",
                ".wmv":    "audio/x-ms-wmv",
                ".wps":    "application/vnd.ms-works",
                //".xml",    "text/xml",
                ".xml":    "text/plain",
                ".z":        "application/x-compress",
                ".zip":    "application/zip",
                "":        "*/*"}

    var type="*/*";
    var fName = file
    //获取后缀名前的分隔符"."在fName中的位置。
    var dotIndex = fName.lastIndexOf(".");
    if(dotIndex < 0)
        return type;
    /* 获取文件的后缀名 */
   var fileType = fName.substr(dotIndex).toLowerCase();
    if(fileType == null || "".equals(fileType))
        return type;
    //在MIME和文件类型的匹配表中找到对应的MIME类型。
    for(var key in MIME_MapTable){
        if(fileType.equals(key )){
            type = MIME_MapTable[key];
        }
    }
    return type;
}