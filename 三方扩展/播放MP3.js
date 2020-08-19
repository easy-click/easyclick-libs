//playMusic("/sdcard/11.mp3")
function playMusic(files){
    if(file.exists(files)){
        importClass(android.media.MediaPlayer);
        var mediaPlayer = new MediaPlayer();
        mediaPlayer.setDataSource(files);//指定音频文件路径
        mediaPlayer.setLooping(false);//设置为不循环播放
        mediaPlayer.prepare();//初始化播放器MediaPlayer
        var 时长 = parseInt(mediaPlayer.getDuration() / 1000)
        logd("时长->"+时长+"秒")
        //如果没在播放中，立刻开始播放。
        if(!mediaPlayer.isPlaying()){
            mediaPlayer.start();
        }
        // sleep(3000)
        //如果在播放中，立刻暂停。
        // if(mediaPlayer.isPlaying()){
        //     mediaPlayer.pause();
        // }
        //如果在播放中，立刻停止。
        // if(mediaPlayer.isPlaying()){
        //     mediaPlayer.reset();
        //     mediaPlayer.release();
        // }
    }else{
        toast("没找到文件")
    }
}