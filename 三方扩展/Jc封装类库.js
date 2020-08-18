/*
* 津彩插件beta 1.0.0
* date 20200501
* create by 刘百浲
* QQ:50494558
* */
/**
 * 津彩插件点击
 * @param str 默认是text搜索
 * @param data [1-99等待次数,int大于99正整数:单次等待时间,int负整数:点击后延时,string:点击后执行logd(),string:id,desc,则点击的是id,desc,加上Match则用上正则,传入数组:则点击数组的坐标]不区分顺序
 * @return boolean|布尔型
 */
JcClick = function (str, data) {
    let set = {
        'waitCount': 1,
        'waitTime': 0,
        'delay': 0,
        'say': '',
        'type': 'text',
        'tap': false
    };
    if(data){
        for (let v in data) {
            switch (typeof (data[v])) {
                case "object":
                    //dump(data[v])
                    try {
                        if (typeof (data[v][0]) == 'number' && typeof (data[v][1]) == 'number') {
                            set['tap'] = [data[v][0], data[v][1]];
                        }
                    } catch (e) {
                        logd(e);
                    }
                    break;
                case "number":
                    if (data[v] < 1) {
                        set['delay'] = Math.abs(parseInt(data[v]));
                    } else if (data[v] >= 100) {
                        set['waitTime'] = parseInt(data[v]);
                    } else {
                        set['waitCount'] = parseInt(data[v]);
                    }
                    break;
                case "string":
                    switch (data[v]) {
                        case 'id':
                            set['type'] = 'id';
                            break;
                        case 'idMatch':
                            set['type'] = 'idMatch';
                            break;
                        case 'textMatch':
                            set['type'] = 'textMatch';
                            break;
                        case 'desc':
                            set['type'] = 'desc';
                            break;
                        case 'descMatch':
                            set['type'] = 'descMatch';
                            break;
                        default:
                            set['say'] = data[v];
                            break;
                    }
                    break;
                default:
                    loge('JcClick包含错误参数');
                    break;
            }
        }
    }
    dump(set)
    let selectors ;
    switch (set['type']) {
        case "id":
            selectors =id(str);
            break;
        case "desc":
            selectors = desc(str);
            break;
        case "idMatch":
            selectors =idMatch(str);
            break;
        case "textMatch":
            selectors =textMatch(str);
            break;
        case "descMatch":
            selectors =descMatch(str);
            break;
        default:
            selectors = text(str);
            break;
    }
    if (set['tap']) {
        let node=waitExistNode(selectors,set['waitCount']*set['waitTime'])
        if(node){
            clickPoint(set['tap'][0],set['tap'][1])
            return true
        }
        return false
    }else {
        for (let i = 0; i < set['waitCount']; i++) {
            let result = click(selectors);
            if(result){
                if(set['say']){
                    logd(set['say'])
                }
                if(set['delay']>0){
                    sleep(set['delay'])
                }
                return true
            }
            sleep(set['waitTime'])
        }
    }
    return false
}

function dump(arr) {
    for (var key in arr) {
        if (typeof (arr[key]) == 'array' || typeof (arr[key]) == 'object') {//递归调用
            logd(key + '[')
            dump(arr[key]);
            logd(']')
        } else {
            logd(key + ' = ' + arr[key]);
        }
    }
}
