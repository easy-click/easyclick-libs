删除指定行("/sdcard/Pictures/1.txt",0)
function 删除指定行(路径,行) {
    if(!file.exists(路径)){
        logi("请检测路径")
        return false
    }
    var t=file.readAllLines(路径);
    logi("共 "+ t.length + " 行数据")
    if(t && t.length >行){
        logi("删除数据 "+ t.splice(行,1))
        var newtext = t.join('\r\n');
        file.writeFile(newtext,路径);
        return true
    }else{
        logi("没数据了,或行号错误")
        return false
    }
}