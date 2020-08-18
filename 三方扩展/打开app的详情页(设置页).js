openAppSetting("package:com.tencent.karaoke")
function openAppSetting(pkg) {
var m ={
    "action":"android.settings.APPLICATION_DETAILS_SETTINGS",
    "flag":"Intent.FLAG_ACTIVITY_NEW_TASK",
    "uri":pkg
};
return  utils.openActivity(m);
}