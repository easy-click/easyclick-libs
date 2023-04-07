/**
 * 原作者QQ: 1438667453 楠桃
 * 本软件使用EasyClick iOS免越狱 USB版本开发，适配 v4.1中控台版本
 * 文档地址：https://ieasyclick.com/iosdocs/
 * EasyClick iOS免越狱 USB专业用于开发iOS自动化脚本、iOS免越狱投屏等的软件平台
 * EasyClick iOS免越狱还支持无需任何硬件直接打包ipa的自动化脚本方案
 * 官方地址：https://ieasyclick.com
 * QQ交流群： 
 * Q群1: 777164022 Q群2: 922739785 Q群3：647082990
 * Q群4: 772810035 Q群5: 484379843 Q群6：435253761
 */


function main() {
    //开始再这里编写代码了！！
    logd("检查自动化环境...")
    //如果自动化服务正常
    if (!autoServiceStart(3)) {
        logd("自动化服务启动失败，无法执行脚本")
        exit();
        return;
    }
    logd("开始执行脚本...")
    setFetchNodeParam({"labelFilter": "2", "maxDepth": "20", "visibleFilter": "2","excludedAttributes":""})
    imageHandlerIOS.loadYaml("xiaoxi|dianzan");
    var ioi= 1

    while (true){
    var result = drag(535,910,547,200,100);
    if (result){
        logd("拖动成功");
    } else {
        logd("拖动失败");
        continue
    }
    let 随机延迟 = random(1,3);
    if(随机延迟===1){
        sleep(1000)
    }else if (随机延迟===2){
        sleep(2000)
    }else if (随机延迟===3){
        sleep(3000)
    }
        releaseNode();
        // 锁定新的节点数据
        lockNode();
        let n = label("点击进入直播间").getOneNodeInfo(1000)
        if (n) {
           continue
         }
        let 随机 = random(1,3);
        if (随机===1){
        let srca=imageHandlerIOS.captureScreenMat();
        let rectsa=imageHandlerIOS.gradientShapeMatch(srca,"dianzan",0,0,0,0,0.9,5);
        if (rectsa){
            clickPoint(rectsa[0].left+50,rectsa[0].top+50)
        }else {
            continue
        }
    }else {
        logd("随机不点赞")
    }

    let 随机延迟1 = random(3,30);
        logd("延迟"+随机延迟1+"秒")
    if (随机延迟1===3){
        sleep(3000)
    }else if(随机延迟1===4){
        sleep(4000)
    }else if(随机延迟1===5){
        sleep(5000)
    }else if(随机延迟1===6){
        sleep(6000)
    }else if(随机延迟1===7){
        sleep(7000)
    }else if(随机延迟1===8){
        sleep(8000)
    }else if(随机延迟1===9){
        sleep(9000)
    }else if(随机延迟1===10){
        sleep(10000)
    }else if(随机延迟1===11){
        sleep(11000)
    }else if(随机延迟1===12){
        sleep(12000)
    }else if(随机延迟1===13){
        sleep(13000)
    }else if(随机延迟1===14){
        sleep(14000)
    }else if(随机延迟1===15){
        sleep(15000)
    }else if(随机延迟1===16){
        sleep(16000)
    }else if(随机延迟1===17){
        sleep(17000)
    }else if(随机延迟1===18){
        sleep(18000)
    }else if(随机延迟1===19){
        sleep(19000)
    }else if(随机延迟1===20){
        sleep(20000)
    }else if(随机延迟1===21){
        sleep(21000)
    }else if(随机延迟1===22){
        sleep(22000)
    }else if(随机延迟1===23){
        sleep(23000)
    }else if(随机延迟1===24){
        sleep(24000)
    }
    // else if(随机延迟1===25){
    //     sleep(25000)
    // }else if(随机延迟1===26){
    //     sleep(26000)
    // }else if(随机延迟1===27){
    //     sleep(27000)
    // }else if(随机延迟1===28){
    //     sleep(28000)
    // }else if(随机延迟1===29){
    //     sleep(29000)
    // }else if(随机延迟1===30){
    //     sleep(30000)
    // }

    let 随机评论 = random(1,3);
    if (随机评论===1||随机评论===2){
        logd("随机评论")
        let src=imageHandlerIOS.captureScreenMat();
        let rects=imageHandlerIOS.gradientShapeMatch(src,"xiaoxi",0,0,0,0,0.9,5);
        if (rects){
            clickPoint(rects[0].left+50,rects[0].top+50)
        }else {
            continue
        }
        sleep(3000)
        
        
        let 评论 = 图色("评论one",5,1235,542,1327,1)
        if (评论){
            logd("pl")
        }else {
            let pl = 图色("评论two",5,1235,542,1327,1)
            if (pl){
                logd("pl")
            }else {
                clickPoint(694, 436)
                continue
            }
        }

        
        // let uu = label("发条有爱评论~").getOneNodeInfo(1000)
        // if (uu) {
        //     clickPoint(uu.bounds.centerX(), uu.bounds.centerY());
        //     logd("发送")
        // }else {
        //     let u= label("喜欢作者就给个评论支持一下~").getOneNodeInfo(1000)
        //     if (u) {
        //         clickPoint(u.bounds.centerX(), u.bounds.centerY());
        //     }else {
        //         let pl = label("仅作者的朋友可评论").getOneNodeInfo(1000)
        //         if (pl) {
        //             clickPoint(694, 436)
        //             continue
        //         }else {
        //             clickPoint(694, 436)
        //             continue
        //         }
        //     }
        // }
        sleep(2000)
        let 随机语句 = random(1,100);
        if (随机语句===1){
             x ="又帅又车，那是象棋，有钱有房，那是银行。"
        }else if (随机语句===2){
             x =" 女施主，贫僧修为尚浅，还不能隔衣为你疗伤，得罪了。"
        }else if (随机语句===3){
             x ="肥胖是会呼吸的痛，吃肯德基会。"
        }else if (随机语句===4){
             x ="你所有的痛苦都是活该，谁叫你自己想不开。"
        }else if (随机语句===5){
             x ="开始以为是青铜，没想到是个王者。"
        }else if (随机语句===6){
            x ="别人家的男朋友从来没让我失望过！"
        }else if (随机语句===7){
            x =" 你在我心里的位置连我自己都羡慕"
        }else if (随机语句===8){
            x ="有天我睡醒看到我的身边没。"
        }else if (随机语句===9){
            x ="举头望明月低头…亲亲你、"
        }else if (随机语句===10){
            x ="未经允许擅自特别喜欢你不好意思了"
        }else if (随机语句===11){
            x ="本攻不死，你们终究是受"
        }else if (随机语句===12){
            x ="以前虽然穷，但是开心，现在不同了。"
        }else if (随机语句===13){
            x ="你已经是个成熟的评论了要学会自己打破零回复!"
        }else if (随机语句===14){
            x ="生活很累，别让心灵再累；生命不长，别让自己硬扛。"
        }else if (随机语句===15){
            x ="写尽千山落笔是你，行尽万水尽头是你。"
        }else if (随机语句===16){
            x =" 羡慕那些可以围在你身边的人不像我只能在你心里、"
        }else if (随机语句===17){
            x ="你对狗这么好，你对你爹地妈咪有这么好过吗？"
        }else if (随机语句===18){
            x =" 不经历人渣，怎么能出嫁，没有人能随随便便当妈。"
        }else if (随机语句===19){
            x ="钱不花就是纸，花了就是钱，你，不然你不仅穷，还丑。"
        }else if (随机语句===20){
            x ="那天我把乞丐装满钱的碗拿走后，竟然治好了他多年以来的残疾。"
        }else if (随机语句===21){
            x ="找不到对象，不要老是怨天尤人，要多想。"
        }else if (随机语句===22){
            x ="你再漂亮，我也是你得不到的男，这就是差距。"
        }else if (随机语句===23){
            x ="希望你能有点自知之明认识到自己超级无敌可爱"
        }else if (随机语句===24){
            x ="当你越来越优秀的时候，才会遇见越来越好的人。"
        }else if (随机语句===25){
            x ="永远别问一个吃货吃了没，这对吃货来说根本不是问题，要问就问吃饱没！"
        }else if (随机语句===26){
            x ="有种就放马过来，我保证六岁以下都打不过我！"
        }else if (随机语句===27){
            x ="无论过去发生过什么，你要相信，最好的尚未到来。"
        }else if (随机语句===28){
            x ="停我不想听你的故事我就问你你是爱金钱还是爱朋友爱面子还是爱我"
        }else if (随机语句===29){
            x ="再过几十年，我们来相会，送到火葬场，，你一堆"
        }else if (随机语句===30){
            x =" 出轨的妻子不要丢，粘上鸡蛋液，，炸至金黄，隔壁的老王都馋哭了。"
        }else if (随机语句===31){
            x ="这笑声没有几年的哮喘是笑不出来的//敷面膜的我直接笑出了皱纹！"
        }else if (随机语句===32){
            x ="我的头发是那样乌黑，可是我的胡须却已经白了，这是什么原因呢？。"
        }else if (随机语句===33){
            x ="哈哈，2020的我被最后一句话触动了，。"
        }else if (随机语句===34){
            x ="天别那么快冷,、"
        }else if (随机语句===35){
            x ="人生很多事，终究会随着时间好起来，，时间久了就变好胖。"
        }else if (随机语句===36){
            x ="幸好我给你点了暂停，不然你就掉进坑里了"
        }else if (随机语句===37){
            x ="成年人打开体检报告所需要的勇气，！"
        }else if (随机语句===38){
            x ="愿你精致到老，眼里是太阳，，对得起初心，守得住永心。"
        }else if (随机语句===39){
            x ="你叫我走就走，那岂不是很没面子，。"
        }else if (随机语句===40){
            x ="好想和你一起数星星，可惜你智商太低只能数月亮。"
        }else if (随机语句===41){
            x ="我妈咪说了不让我和傻吊完，"
        }else if (随机语句===42){
            x ="完了，这个又要被拍涨价了。"
        }else if (随机语句===43){
            x ="以前不离不弃是夫妻，现在不离不弃是手机，机不在手，魂都没有。"
        }else if (随机语句===44){
            x ="人不伤，不成长；心不伤，不坚强。"
        }else if (随机语句===45){
            x ="失眠的时候已经把人生计划八百遍了，。"
        }else if (随机语句===46){
            x ="青春最好的事就是會受傷，也會成長。，會痛，也會有人能懂。"
        }else if (随机语句===47){
            x ="用惯了美颜相机，吓得我手机都丢出去了。"
        }else if (随机语句===48){
            x ="多热烈的白羊，心好空荡，都快要失去形状。"
        }else if (随机语句===49){
            x ="糟糕！是右身的。"
        }else if (随机语句===50){
            x =" 上上个月收入这个月厉害了，我准备吃狗了。"
        }else if (随机语句===51){
            x ="你站在这别动，我去买几个橘子给你吧"
        }else if (随机语句===52){
            x =" 如果你是钱，我是银行卡，那么我一定会娶你的。"
        }else if (随机语句===53){
            x ="这么好看的背，不去拔火罐可惜了。"
        }else if (随机语句===54){
            x ="我们总是失去的太多，明白的太晚。"
        }else if (随机语句===55){
            x =" 人爱上城市，大部分是爱上自，而不是因为风景。"
        }else if (随机语句===56){
            x ="不怕宝马和路虎，就怕大众下面带字母。"
        }else if (随机语句===57){
            x ="小伙子你要是被绑架了你就眨眨眼。"
        }else if (随机语句===58){
            x ="用方天画戟，给我削个梨吗，或者用玉玺给我给我解解闷儿也行。"
        }else if (随机语句===59){
            x ="看来只能来中午看了，因为早晚都会笑死在这里!"
        }else if (随机语句===60){
            x ="幸好我给你点了暂停，不然你就掉进坑里了。"
        }else if (随机语句===61){
            x ="这么好看的牙齿不卡两片韭菜叶可惜了!"
        }else if (随机语句===62){
            x ="让你不多读点书，现在好了，只会说卧槽了吧!"
        }else if (随机语句===63){
            x ="这么可爱的女孩子，不去蹬三轮可惜了!"
        }else if (随机语句===64){
            x ="完了，这个又要被拍涨价了。"
        }else if (随机语句===65){
            x ="她一笑，我连孩子的名字都想好了。"
        }else if (随机语句===66){
            x ="你再次触犯了银河正义法中不可饶恕之独秀罪，束手就擒吧!"
        }else if (随机语句===67){
            x ="我是个俗气至顶的人，见山是山，见海是海，，我和天地万物便通通奔向你。"
        }else if (随机语句===68){
            x ="我家楼下的狗终于有用了，我让它把我的试卷啃了。"
        }else if (随机语句===69){
            x ="毁掉一首好歌最好的方法，就是把它设为起床闹铃。"
        }else if (随机语句===70){
            x ="正的勇士，穷还追星，丑还颜控，胖还贪吃，死也不写作业。"
        }else if (随机语句===71){
            x ="秀恩爱就好好秀，没事发什么转账记录，搞得和卖淫一样。"
        }else if (随机语句===72){
            x ="现在的男人，有什么资格和妹子说白头偕老?还没到白发就已经全秃了。"
        }else if (随机语句===73){
            x ="如果你有喜欢的女生，就送她一支口红吧，至少她亲别人的时候。"
        }else if (随机语句===74){
            x ="我这人没啥突出的优点，就是看女孩的眼光特别准，凡是被我追过的女孩。"
        }else if (随机语句===75){
            x ="有一个地方叫稻城，我要和我最心爱的人，一起去到那里，看蔚蓝的天空相爱这件事情，就是永远在一起。"
        }else if (随机语句===76){
            x ="姑娘呀！你要记住，动嘴那叫哄，动钱那叫宠，动心那叫懂，他若一动不动，你要他有何用。"
        }else if (随机语句===77){
            x ="吃得苦中苦，方为人上人，我并不想做什么人上人，可这世间疾苦，照样没能放过我。"
        }else if (随机语句===78){
            x ="距离产生的不是美，是小三。"
        }else if (随机语句===79){
            x ="给摄影师加个鸡腿。"
        }else if (随机语句===80){
            x =" 陪我一起数星星吧，你智商低你就数月亮吧！"
        }else if (随机语句===81){
            x =" 我跟别人不同，能用钱解决的事，我都不用钱解决，因为我没钱。"
        }else if (随机语句===82){
            x ="月亮很亮，亮也没用，没用也亮，就像我喜欢你，喜欢没用，没用也喜欢"
        }else if (随机语句===83){
            x ="千军万马未乱我半分心跳，最后竟败给你浅浅一笑。"
        }else if (随机语句===84){
            x ="全世界的恋我都失一遍给所有的悲剧当特邀演员"
        }else if (随机语句===85){
            x ="旁观者，看戏入三分。旁听者，花言信七分。"
        }else if (随机语句===86){
            x ="你现在翅膀硬了，烤起来应该很好吃"
        }else if (随机语句===87){
            x ="前天我送你回家，走到一幢豪华的大楼前，你深情地看着我说到。"
        }else if (随机语句===88){
            x ="挡住车标的一律按照五菱宏光处理。不告诉名字的一律按贾玲处理。"
        }else if (随机语句===89){
            x =" 一个了解你的人，不会一直让你难过，如果明知道这样做你不好受，他却还是做了。"
        }else if (随机语句===90){
            x ="朕的江山养你一个祸水够不够"
        }else if (随机语句===91){
            x ="飞盐走臂，关节盐"
        }else if (随机语句===92){
            x ="看到了有人摔倒了我毫不犹豫的点赞了!"
        }else if (随机语句===93){
            x ="有时候你不努力一下，都不知道什么叫做绝望。"
        }else if (随机语句===94){
            x ="也许无言才是最好的安慰，"
        }else if (随机语句===95){
            x ="我们始终还是要别离要融化的时候，泪水位会上升。"
        }else if (随机语句===96){
            x ="我现在很想你，等一会可能更想"
        }else if (随机语句===97){
            x =" 只要是我丢了的被谁捡了都是垃圾"
        }else if (随机语句===98){
            x ="有些人吃火锅吃到一半，突然靠着椅背沉默不语，，而是想缓一缓再吃。"
        }else if (随机语句===99){
            x =" 我在大街上摔倒了，周围人都对我笑，，笑死他们！"
        }else if (随机语句===100){
            x =" 别指望了，，而且他还吃素。"
        }
        let 文案 = x
        logd(x)
        inputText(文案,100);
        releaseNode();
        // 锁定新的节点数据
        lockNode();
        sleep(800)
        let nd = label("发送").getOneNodeInfo(1000)
        if (nd) {
            clickPoint(nd.bounds.centerX(), nd.bounds.centerY());
            logd("发送")
        }
        sleep(800)
        clickPoint(693,436)
        sleep(500)
    }else {
        logd("不评论")
    }


    ioi++
    if(ioi===100000000000){
        logd(imageHandlerIOS.releaseYaml());
        break
    }
}


function 图色(name,x,y,ex,ey,dd) {
        let iszt = false
    let smallTmplate = readResAutoImage(name+".png");
    let screenImage = image.captureFullScreenEx({"type": "1", "quality": 100});
    if (screenImage != null) {
        let points = image.findImage(screenImage, smallTmplate, x, y, ex, ey,0.7, 0.8, 1, 5);
        if (points) {
            for(let i=0;i<points.length;i++){
                iszt = true
                // logd(points[i])
                let x = parseInt((points[i].left + points[i].right)/2)
                let y = parseInt((points[i].top + points[i].bottom)/2)
                if(dd===1){
                    clickPoint(x,y)
                }
                if (dd===2){
                    doubleClickPoint(x,y)
                }
            }
        }
        image.recycle(screenImage)
    }
    image.recycle(smallTmplate)
    return iszt
}



}
function autoServiceStart(time) {
    for (let i = 0; i < time; i++) {
        if (isServiceOk()) {
            return true;
        }
        let started = startEnv();
        logd("第" + (i + 1) + "次启动服务结果: " + started);
        if (isServiceOk()) {
            return true;
        }
    }
    return isServiceOk();
}

main();