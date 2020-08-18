importClass(android.speech.tts.TextToSpeech.Engine);
//群就是auto.js Pro 8.0
//从网上东找找西找找凑成的
//声音和成功或者失败因机型而异
//vivo y67 安卓6.0，没问题
//新手第一个调用安卓，可能用词不准. . . 
importClass(java.util.Locale);
importClass(android.speech.tts.TextToSpeech)
importClass(android.speech.tts.TextToSpeech.OnInitListener)

var str ="一名孩童，天生无法修炼内功。为了得到父亲的重视关注，他毅然选择了修炼痛苦艰难的外功。春去秋来，时光如梭，这个孩童长大了……变成了一名青年，真正改变他的命运..."//要读的
var pitch = 1.0//语音尖度，有一个限制
var speechRate = 1.0//语速，同上

var obj = {
    onInit: function(status) {
        //根据群里大佬说的，这里冒号前应该填接口的方法名，参数名应该填接口方法得参数名(大概？)
        //至于它做什么就可以自己写
        if (status == TextToSpeech.SUCCESS) {
            toast("创建成功，正在初始化")
            //   ↓如果不成功的话，八成是语言不适用，改成ENGLISH或者看看api吧
            if (tts.setLanguage(Locale.CHINESE) == TextToSpeech.SUCCESS && tts.setPitch(pitch) == TextToSpeech.SUCCESS && tts.setSpeechRate(speechRate) == TextToSpeech.SUCCESS) {
                toast("初始化成功")
            }else{
                toast("初始化失败")
                exit()
                }
        } else {
            toast("创建失败或未知错误")
        }
    }
}
//手动实现(感谢群里I'm zz 大佬)
tts = new TextToSpeech(context, TextToSpeech.OnInitListener(obj))


sleep(1000)
//必须先用sleep暂停一下
var a = tts.speak(str, TextToSpeech.QUEUE_ADD, null);
//在level 21被弃用，另一种研究中
if (a != TextToSpeech.SUCCESS) {
    toast("朗读失败")
}else{
    toast("朗读成功")
    }

//下面是储存方法



var 保存 = tts.synthesizeToFile(str, java.util.HashMap(), "/storage/emulated/0/脚本tts.wav")
if(保存 != TextToSpeech.SUCCESS){
    toast("保存失败")
    }else{
        toast("保存成功，路径/storage/emulated/0/脚本tts.wav")
        }


//同样在level21被删除，另一种在研究

//感谢群里 I'm zz提供的资料(下面)
/*
http://www.makaidong.com/%E5%8D%9A%E5%AE%A2%E5%9B%AD%E6%8E%92%E8%A1%8C/30189.shtml
*/