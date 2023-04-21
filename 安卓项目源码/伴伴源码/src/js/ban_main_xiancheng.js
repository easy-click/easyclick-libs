//开启主线程
function ban_xiancheng_main_open() {
    ban_xiancheng.main_zhuxiancheng= thread.execAsync(function () {
        while (true) {
//            logd("线程 ---->> running");
            sleep(10);
            ban_quanxuan_cannel()
            ban_main_close()
            if (thread.isCancelled(ban_xiancheng.main_zhuxiancheng)) {
                break;
            }
        }
    });
}

//关闭主线程
function ban_xiancheng_main_close() {
    if (ban_xiancheng.main_zhuxiancheng  != "") {
        thread.cancelThread( ban_xiancheng.main_zhuxiancheng);
        sleep(10);
    }
}
