function ECloudWrapper() {

}


var ecloud = new ECloudWrapper();


ECloudWrapper.prototype.log = function (msg) {
    var s = [];
    for (var i = 1; i < arguments.length; i++) {
        s.push(arguments[i]);
    }
    ecImporter.cloudLog(msg, s);
}
/**
 * 普通的打印的日志(logd,logi,logw,loge)是否同步到云控，默认是同步的，可以不使用ecloud.log的时候,云控也可以看到日志
 * @param logSyncToCloud true 代表同步 false 代表不同步
 */
ECloudWrapper.prototype.commonLogToCloud = function (logSyncToCloud) {
    ecImporter.commonLogToCloud(logSyncToCloud);
}

/**
 * 取得当前任务的信息
 * @return {JSON} 对象
 */
ECloudWrapper.prototype.getTaskInfo = function () {
    if (ecloudWrapper == null) {
        return;
    }
    var d = ecloudWrapper.getTaskInfo();
    if (d == null || d == "") {
        return null;
    }
    return JSON.parse(d);

};


/**
 * 获取机器编号
 * @return {string} 机器编码或者null
 */
ECloudWrapper.prototype.getDeviceNo = function () {
    if (ecloudWrapper == null) {
        return;
    }
    return javaString2string(ecloudWrapper.getDeviceNo());
};

/**
 * 通过资源组取得一组资源
 * 注意: EC 6.4.0+ 已废弃，云控 2.0.0+ 无法使用，该项只做保留
 * @param map 可扩展参数表
 *   例如 {"groupName":"资源组1"}
 *   key定义：
 *   groupName = 资源组名称
 *   pageNum= 页码 例如 1代表第一页
 *   pageSize= 每页个数 例如 10 代表一页有10个
 *
 * @return {JSON} 资源JSON对象
 */
ECloudWrapper.prototype.getResources = function (map) {
    if (ecloudWrapper == null) {
        return;
    }
    var d = ecloudWrapper.getResources(JSON.stringify(map));
    if (d == null || d == "") {
        return null;
    }
    return JSON.parse(d);
};


/**
 * 上传要存储的数据
 * 注意: EC 6.4.0+ 已废弃，云控 2.0.0+ 无法使用，该项只做保留
 * @param map 可扩展参数表
 *   例如
 * {
 *   "groupName":"123",
 *	"dataKey": "11111",
 *  "content":"123"
 * }
 *   key定义：
 *   groupName = 数据的组名，如果云端没有这个组，会自动创建
 *   dataKey = 存储数据的唯一标示
 *   content = 数据字符串
 * @return {bool} true代表成功 false 代表失败
 */
ECloudWrapper.prototype.uploadStorageData = function (map) {
    if (ecloudWrapper == null) {
        return;
    }
    return ecloudWrapper.uploadStorageData(JSON.stringify(map));
};

/**
 * 通过数据组名取得一组数据
 * 注意: EC 6.4.0+ 已废弃，云控 2.0.0+ 无法使用，该项只做保留
 * @param map 可扩展参数表
 *   例如 {"groupName":"数据组1"}
 *   {"dataKey":"key"}
 *   key定义： groupName = 数据组名称
 *   dataKey = 数据唯一标示
 *   pageNum= 页码 例如 1代表第一页
 *   pageSize= 每页个数 例如 10 代表一页有10个
 * @return {JSON} JSON对象
 */
ECloudWrapper.prototype.getStorageDatas = function (map) {
    if (ecloudWrapper == null) {
        return;
    }
    var d = ecloudWrapper.getStorageDatas(JSON.stringify(map));
    if (d == null || d == "") {
        return null;
    }
    return JSON.parse(d);
};

/**
 * 子任务失败
 * 注意: EC 6.4.0+ 已废弃，云控 2.0.0+ 无法使用，该项只做保留
 *  @param map 可扩展参数表
 *   例如
 * {
 *   "subTaskId":123,
 *	 "msg": "因为找不到XXX失败"
 * }
 * @return {bool} true代表成功 false 代表失败
 */
ECloudWrapper.prototype.subTaskFail = function (map) {
    if (ecloudWrapper == null) {
        return;
    }
    return ecloudWrapper.subTaskFail(JSON.stringify(map));
};

/**
 * 子任务成功
 * 注意: EC 6.4.0+ 已废弃，云控 2.0.0+ 无法使用，该项只做保留
 *  @param map 可扩展参数表
 *   例如
 * {
 *   "subTaskId":123,
 *	"msg": "任务成功"
 * }
 * @return {bool} true代表成功 false 代表失败
 */
ECloudWrapper.prototype.subTaskOk = function (map) {
    if (ecloudWrapper == null) {
        return;
    }
    return ecloudWrapper.subTaskOk(JSON.stringify(map));
};

/**
 * 通过数据组名或者数据名称取得数据, 前提是要中云控中存在这个数据
 * @param map 可扩展参数表
 * 例如 {"groupName":"数据组1","dataName":"key"}
 * key定义： groupName = 数据组名称
 * dataName = 数据名称
 * @return {null|any}
 */
ECloudWrapper.prototype.getData = function (map) {
    if (ecloudWrapper == null) {
        return;
    }
    let d = ecloudWrapper.getData(JSON.stringify(map));
    if (d == null || d == "") {
        return null;
    }
    return JSON.parse(d);
};


/**
 * 通过数据组名或者数据名称取得数据,获取后云控自动删除, 前提是要中云控中存在这个数据
 * @param map 可扩展参数表
 * 例如 {"groupName":"数据组1","dataName":"key","getType":1,"size":1}
 * key定义： groupName = 数据组名称
 * dataName = 数据名称
 * getType = 获取数据方式，1 头部获取，2 尾部获取，3 随机获取
 * size = 需要获取的数据条数
 * @return {null|json数组} 空或者JSON数组
 */
ECloudWrapper.prototype.getDataPop = function (map) {
    if (ecloudWrapper == null) {
        return;
    }
    let d = ecloudWrapper.getDataPop(JSON.stringify(map));
    if (d == null || d == "") {
        return null;
    }
    return JSON.parse(d);
};


/**
 * 新增一组数据，如果组名存在了，会自动最近数据
 * @param map 可扩展参数表
 * 例如 {"groupName":"数据组1","dataName":"key","content":"数据"}
 * key定义：
 * groupName = 数据组名称
 * dataName = 数据名称
 * content=内容
 * @return {bool} true代表成功 false ，代表失败
 */
ECloudWrapper.prototype.addData = function (map) {
    if (ecloudWrapper == null) {
        return;
    }
    return ecloudWrapper.addData(JSON.stringify(map));
};

/**
 * 修改某个组下面的数据，组名和数据名必填
 * @param map 可扩展参数表
 * 例如
 * {"groupName":"数据组1","dataName":"key","content":"数据"}
 * key定义：
 * groupName = 数据组名称
 * dataName = 数据名称
 * content=内容
 * @return {bool} true代表成功 false ，代表失败
 */
ECloudWrapper.prototype.updateData = function (map) {
    if (ecloudWrapper == null) {
        return;
    }
    return ecloudWrapper.updateData(JSON.stringify(map));
};
/**
 * 删除某个组下面的数据，如果只填写组名，该组下面全部被删除，如果组名和数据名都有，就删除该组下数据名相同的数据
 * @param map 可扩展参数表
 * 例如 {"groupName":"数据组1","dataName":"key"}
 * key定义：
 * groupName = 数据组名称
 * dataName = 数据名称
 * @return {bool} true代表成功 false ，代表失败
 */
ECloudWrapper.prototype.removeData = function (map) {
    if (ecloudWrapper == null) {
        return;
    }
    return ecloudWrapper.removeData(JSON.stringify(map));
};

/**
 * 查询该组下面的数据名的内容，并向内容尾追加一条数据
 * @param map 可扩展参数表
 * 例如 {"groupName":"数据组1","dataName":"key","content":"数据"}
 * key定义：
 * groupName = 数据组名称
 * dataName = 数据名称
 * content=内容
 * @return {bool} true代表成功 false ，代表失败
 */
ECloudWrapper.prototype.appendOneLineData = function (map) {
    if (ecloudWrapper == null) {
        return;
    }
    return ecloudWrapper.appendOneLineData(JSON.stringify(map));
};

/**
 * 查询该组下面的数据名的内容，并删除其中一条与content相等的数据
 * @param map 可扩展参数表
 * 例如 {"groupName":"数据组1","dataName":"key","content":"数据"}
 * key定义：
 * groupName = 数据组名称
 * dataName = 数据名称
 * content=内容
 * @return {bool} true代表成功 false ，代表失败
 */
ECloudWrapper.prototype.removeOneLineData = function (map) {
    if (ecloudWrapper == null) {
        return;
    }
    return ecloudWrapper.removeOneLineData(JSON.stringify(map));
};


/**
 * 获取云控的URL地址
 * @return {string} 云控的URL地址或者null
 */
ECloudWrapper.prototype.getCloudUrl = function () {
    if (ecloudWrapper == null) {
        return;
    }
    return javaString2string(ecloudWrapper.getCloudUrl());
};


/**
 * 删除脚本文件保证安全
 * @return {bool} true代表成功 false ，代表失败
 */
ECloudWrapper.prototype.removeScriptFile = function () {
    if (ecloudWrapper == null) {
        return;
    }
    return ecloudWrapper.removeScriptFile();
};

/**
 * 创建或者更新动态数据表结构<br/>
 * 如果columns有增加新的，就自动创建字段，如果少了某个字段，就自动从表中移出字段<br/>
 * 请谨慎操作表，以免数据丢失！！！<br/>
 * 适合版本EC 6.16.0+
 * @param param 参数<Br/>
 * {
 * 	"tableName": "我是牛逼的表",
 * 	"tableNameEn": "niubi_table",
 * 	"columns": [{
 * 			"columnInfo": "姓名",
 * 			"columnName": "name",
 * 			"columnSize": 500
 * 		},
 * 		{
 * 			"columnInfo": "年龄",
 * 			"columnName": "age",
 * 			"columnSize": 500
 * 		},
 * 		{
 * 			"columnInfo": "性别",
 * 			"columnName": "sex",
 * 			"columnSize": 500
 * 		}
 * 	]
 * }<br/>
 * 解释: <br/>
 * tableName: 中文表名，相当于名称，但是不是实际表名<br/>
 * tableNameEn: 英文表名，真实的表名<br/>
 * columns: 表的字段数据，字段类型统一是字符串<br/>
 *      columnInfo: 字段的注释信息<br/>
 *      columnName: 字段名称，要用英文，不要有空格和特殊字符<br/>
 *      columnSize: 字段长度<br/>
 * @return {string} JSON字符串，自行转换为JSON对象
 * <br/>成功返回示例：{"result":{"data":1}}，data代表操作的成功行数
 * <br/>失败返回示例：{"result":{"msg":"我是错误信息"}}
 */
ECloudWrapper.prototype.dynamicCreateTable = function (param) {
    if (ecloudWrapper == null || param == null) {
        return null;
    }
    return ecloudWrapper.dynamicCreateTable(JSON.stringify(param));
};

/**
 * 动态查询数据<Br/>
 * 适合版本EC 6.16.0+
 * @param param 参数<Br/>
 * {
 * 	"pageNumber": 1,
 * 	"pageSize": 4,
 * 	"fields": "id,name",
 * 	"query": "and name like '%我是%'",
 * 	"tableNameEn": "niubi_table",
 * 	"search": {
 * 		"id": "1",
 * 		"name": "我是name"
 * 	}
 * }
 * <br/>
 * 解释: <br/>
 * pageNumber: 页码 从1开始<br/>
 * pageSize: 每页条数<br/>
 * fields: 要查下的字段，可以不写，如果填写就是用英文逗号链接，请看例子<br/>
 * query: 自定义的查询条件，遵循sql的写法<br/>
 * tableNameEn: 英文的表名<br/>
 * search：查询条件，和query查询条件二选一，这个查询是等于模式<br/>
 * search 例子： "id":"1" 代表查询字段id=1的记录
 * @return {string} JSON字符串，自行转换为JSON对象
 * <br/>成功返回示例：{"result":{"data":[{"name":"3","id":2}]}}，data代表返回的数据数组
 * <br/>失败返回示例：{"result":{"msg":"我是错误信息"}}
 */
ECloudWrapper.prototype.dynamicQuery = function (param) {
    if (ecloudWrapper == null || param == null) {
        return null;
    }
    return ecloudWrapper.dynamicQuery(JSON.stringify(param));
};


/**
 * 动态增加数据<Br/>
 * 适合版本EC 6.16.0+<Br/>
 * {
 * 	"tableNameEn": "niubi_table",<Br/>
 * 	"columns": {<Br/>
 * 		"name": "我是牛逼",<Br/>
 * 		"age": "niubi_table2",<Br/>
 * 		"sex": "niubi_table2"<Br/>
 * 	}<Br/>
 * }<Br/>
 * @param param 参数<Br/>
 * 解释: <br/>
 * tableNameEn: 英文的表名<br/>
 * columns: 字段和字段值列表<br/>
 * 例如 "name": "我是牛逼的表"，代表插入一个数据name=我是牛逼的表
 * @return {string} JSON字符串，自行转换为JSON对象
 * <br/>成功返回示例：{"result":{"data":1}}，data代表操作的成功行数
 * <br/>失败返回示例：{"result":{"msg":"我是错误信息"}}
 */
ECloudWrapper.prototype.dynamicAdd = function (param) {
    if (ecloudWrapper == null || param == null) {
        return null;
    }
    return ecloudWrapper.dynamicAdd(JSON.stringify(param));
};


/**
 * 动态更新数据<Br/>
 * 适合版本EC 6.16.0+
 * @param param 参数<Br/>
 * {
 * 	"tableNameEn": "niubi_table",
 * 	"columns": {
 * 		"name": "我x是牛逼xxxx的表",
 * 		"age": "niubi_table2",
 * 		"sex": "niubi_table2"
 * 	},
 * 	"query": "and id=1",
 * 	"search": {
 * 		"id": "7"
 * 	}
 * }
 * query: 自定义的查询条件，遵循sql的写法<br/>
 * tableNameEn: 英文的表名<br/>
 * search：查询条件，和query查询条件二选一，这个查询是等于模式<br/>
 * search 例子： "id":"1" 代表查询字段id=1的记录
 * columns: 要更新的字段和字段值列表<br/>
 * 例如 "name": "我是牛逼的表"，代表把name的指更新为 我是牛逼的表
 * @return {string} JSON字符串，自行转换为JSON对象
 * <br/>成功返回示例：{"result":{"data":1}}，data代表操作的成功行数
 * <br/>失败返回示例：{"result":{"msg":"我是错误信息"}}
 */
ECloudWrapper.prototype.dynamicUpdate = function (param) {
    if (ecloudWrapper == null || param == null) {
        return null;
    }
    return ecloudWrapper.dynamicUpdate(JSON.stringify(param));
};


/**
 * 动态删除数据<Br/>
 * 适合版本EC 6.16.0+<Br/>
 * {
 * 	"tableNameEn": "niubi_table",<Br/>
 * 	"query":"and name like '%我%'",<Br/>
 * 	"search": {<Br/>
 * 		"id": "1"
 * 	}<Br/>
 * }<Br/>
 * @param param 参数<Br/>
 * 解释: <br/>
 * query: 自定义的查询条件，遵循sql的写法<br/>
 * tableNameEn: 英文的表名<br/>
 * search：查询条件，和query查询条件二选一，这个查询是等于模式<br/>
 * search 例子： "id":"1" 代表查询字段id=1的记录
 * @return {string} JSON字符串，自行转换为JSON对象
 * <br/>成功返回示例：{"result":{"data":1}}，data代表操作的成功行数
 * <br/>失败返回示例：{"result":{"msg":"我是错误信息"}}
 */
ECloudWrapper.prototype.dynamicRemove = function (param) {
    if (ecloudWrapper == null || param == null) {
        return null;
    }
    return ecloudWrapper.dynamicRemove(JSON.stringify(param));
};


/**
 * 新增一个存放在redis的缓存
 * 适合版本 EC 7.5.0+
 * @param map 可扩展参数表
 * 例如 {"cacheKey":"缓存key","expireTime":300,"dataType":1,"content":"数据"}
 * key定义：
 * cacheKey = 缓存key
 * expireTime = 过期时间 单位是秒，为空或者小于等于0代表不过期
 * dataType=数据类型，1 字符串，2 set集合用换行符\n分割的
 * content=数据，如果dataType=2这个数据将会用换行符\n分割转换为集合存储到redis中
 * @return {bool} true代表成功 false ，代表失败
 */
ECloudWrapper.prototype.addCache = function (map) {
    if (ecloudWrapper == null) {
        return;
    }
    return ecloudWrapper.addCache(JSON.stringify(map));
};


/**
 * 更新一个redis的缓存
 * 适合版本 EC 7.5.0+
 * @param map 可扩展参数表
 * 例如 {"cacheKey":"缓存key","expireTime":300,"dataType":1,"content":"数据"}
 * key定义：
 * cacheKey = 缓存key
 * expireTime = 过期时间 单位是秒，为空或者小于等于0代表不过期
 * dataType=数据类型，1 字符串，2 set集合用换行符\n分割的
 * content=数据，如果dataType=2这个数据将会用换行符\n分割转换为集合存储到redis中
 * @return {bool} true代表成功 false ，代表失败
 */
ECloudWrapper.prototype.updateCache = function (map) {
    if (ecloudWrapper == null) {
        return;
    }
    return ecloudWrapper.updateCache(JSON.stringify(map));
};

/**
 * 更新一个redis的缓存过期时间
 * 适合版本 EC 7.5.0+
 * @param map 可扩展参数表
 * 例如 {"cacheKey":"缓存key","expireTime":300}
 * key定义：
 * cacheKey = 缓存key
 * expireTime = 过期时间 单位是秒，为空或者小于等于0代表不过期
 * @return {bool} true代表成功 false ，代表失败
 */
ECloudWrapper.prototype.updateCacheExpire = function (map) {
    if (ecloudWrapper == null) {
        return;
    }
    return ecloudWrapper.updateCacheExpire(JSON.stringify(map));
};

/**
 * 删除一个redis的缓存
 * 适合版本 EC 7.5.0+
 * @param map 可扩展参数表
 * 例如 {"cacheKey":"缓存key"}
 * key定义：
 * cacheKey = 缓存key
 * @return {bool} true代表成功 false ，代表失败
 */
ECloudWrapper.prototype.removeCache = function (map) {
    if (ecloudWrapper == null) {
        return;
    }
    return ecloudWrapper.removeCache(JSON.stringify(map));
};


/**
 * 获取一个缓存，如果缓存失效了 无数据返回
 * 适合版本 EC 7.5.0+
 * @param map 可扩展参数表
 * 例如 {"cacheKey":"缓存key"}
 * key定义：
 * cacheKey = 缓存key
 * @return {string} 服务端返回的JSON字符串，解析result节点即可
 */
ECloudWrapper.prototype.getCache = function (map) {
    if (ecloudWrapper == null) {
        return;
    }
    let d = ecloudWrapper.getCache(JSON.stringify(map));
    if (d == null || d == "") {
        return null;
    }
    return JSON.parse(d);
};


/**
 * 追加一个redis set的缓存
 * 适合版本 EC 7.5.0+
 * @param map 可扩展参数表
 * 例如 {"cacheKey":"缓存key","content":"数据"}
 * key定义：
 * cacheKey = 缓存key
 * content=数据，作为一整行，追加到redis的set集合中
 * @return {string} 服务端返回的JSON字符串，解析result节点即可
 */
ECloudWrapper.prototype.appendOneLineCache = function (map) {
    if (ecloudWrapper == null) {
        return;
    }
    let d = ecloudWrapper.appendOneLineCache(JSON.stringify(map));

    if (d == null || d == "") {
        return null;
    }
    return JSON.parse(d);
};


/**
 * 删除一个redis set的缓存元素
 * 适合版本 EC 7.5.0+
 * @param map 可扩展参数表
 * 例如 {"cacheKey":"缓存key","content":"数据"}
 * key定义：
 * cacheKey = 缓存key
 * content=数据，作为一整行，从redis的set集合中移出
 * @return {string} 服务端返回的JSON字符串，解析result节点即可
 */
ECloudWrapper.prototype.removeOneLineCache = function (map) {
    if (ecloudWrapper == null) {
        return;
    }
    let d = ecloudWrapper.removeOneLineCache(JSON.stringify(map));
    if (d == null || d == "") {
        return null;
    }
    return JSON.parse(d);
};

/**
 * redis的自增长计数功能，每次调用这个key的值都会+1
 * 适合版本 EC 7.5.0+
 * @param map 可扩展参数表
 * 例如 {"cacheKey":"缓存key"}
 * key定义：
 * cacheKey = 缓存key
 * @return {long} 返回redis自增后的值
 */
ECloudWrapper.prototype.incrementCache = function (map) {
    if (ecloudWrapper == null) {
        return;
    }
    return ecloudWrapper.incrementCache(JSON.stringify(map));
};
/**
 * redis push或者pop命令
 * 适合版本 EC 7.8.0+
 * @param map 可扩展参数表
 * 例如 {"cacheKey":"缓存key"}
 * key定义：
 * cmd = 支持 spop，rpush，lpush，lpop，rpop
 * cacheKey = 缓存key
 * content = push或者pop的内容
 * @return {string} 服务端返回的JSON字符串，解析result节点即可
 */
ECloudWrapper.prototype.popPushCache = function (map) {
    if (ecloudWrapper == null) {
        return;
    }
    return ecloudWrapper.popPushCache(JSON.stringify(map));
};


/**
 * redis的自减计数功能，每次调用这个key的值都会-1
 * 适合版本 EC 7.5.0+
 * @param map 可扩展参数表
 * 例如 {"cacheKey":"缓存key"}
 * key定义：
 * cacheKey = 缓存key
 * @return {long} 返回redis自减的值
 */
ECloudWrapper.prototype.decrementCache = function (map) {
    if (ecloudWrapper == null) {
        return;
    }
    return ecloudWrapper.decrementCache(JSON.stringify(map));
};

/**
 * 获取一个redis的key剩余的过期时间
 * 适合版本 EC 7.5.0+
 * @param map 可扩展参数表
 * 例如 {"cacheKey":"缓存key"}
 * key定义：
 * cacheKey = 缓存key
 * @return {long} 返回redis剩余的过期时间，负数代表永不过期
 */
ECloudWrapper.prototype.getCacheExpire = function (map) {
    if (ecloudWrapper == null) {
        return;
    }
    return ecloudWrapper.getCacheExpire(JSON.stringify(map));
};



