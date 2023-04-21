function SqliteApiWrapper() {

}

var sqlite = new SqliteApiWrapper();

/**
 * 创建或者链接一个数据库
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 * @param dbName 数据库名称
 * @return boolean true 代表请求权限成功，false代表失败
 */
SqliteApiWrapper.prototype.connectOrCreateDb = function (dbName) {
    if (sqliteWrapper == null) {
        return null;
    }
    return sqliteWrapper.connectOrCreateDb(dbName);
};


/**
 * 创建或者链接一个数据库
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 * @param dbName 数据库名称
 * @param version 版本
 * @return boolean true 代表请求权限成功，false代表失败
 */
SqliteApiWrapper.prototype.connectOrCreateDbEx = function (dbName,version) {
    if (sqliteWrapper == null) {
        return null;
    }
    return sqliteWrapper.connectOrCreateDbEx(dbName,version);
};



/**
 * 获取上一次执行sql的错误信息
 * @return {string} null代表无错误信息
 */
SqliteApiWrapper.prototype.getErrorMsg = function () {
    if (sqliteWrapper == null) {
        return null;
    }
    return sqliteWrapper.getErrorMsg();
};




/**
 * 创建数据表
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 * @param tableName 表名称
 * @param columns 列名称，例如 ["name","pwd"]
 * @return boolean true 代表请求权限成功，false代表失败
 */
SqliteApiWrapper.prototype.createTable = function (tableName, columns) {
    if (sqliteWrapper == null) {
        return null;
    }
    columns = JSON.stringify(columns);
    return sqliteWrapper.createTable(tableName, columns);
};


/**
 * 插入数据
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 * @param tableName 表名
 * @param map 数据的map表
 * @return boolean true 代表请求权限成功，false代表失败
 */
SqliteApiWrapper.prototype.insert = function (tableName, map) {
    if (sqliteWrapper == null || map == null) {
        return null;
    }

    return sqliteWrapper.insert(tableName, JSON.stringify(map));
};


/**
 * 删除数据
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 * @param sql sql语句
 * @return boolean true 代表请求权限成功，false代表失败
 */
SqliteApiWrapper.prototype.delete = function (sql) {
    if (sqliteWrapper == null) {
        return null;
    }
    return sqliteWrapper.delete(sql);
};


/**
 * 更新数据
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 * @param tablename 表名称
 * @param map 数据的map表
 * @param where 条件语句
 * @return boolean true 代表请求权限成功，false代表失败
 */
SqliteApiWrapper.prototype.update = function (tablename, map, where) {
    if (sqliteWrapper == null) {
        return null;
    }
    return sqliteWrapper.update(tablename, JSON.stringify(map), where);
};
/**
 * 执行sql
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 * @param sql sql语句
 * @return boolean true 代表请求权限成功，false代表失败
 */
SqliteApiWrapper.prototype.execSql = function (sql) {
    if (sqliteWrapper == null) {
        return null;
    }
    return sqliteWrapper.execSql(sql);
};


/**
 * 删除数据库
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 * @return boolean true 代表请求权限成功，false代表失败
 */
SqliteApiWrapper.prototype.dropDatabase = function () {
    if (sqliteWrapper == null) {
        return null;
    }
    return sqliteWrapper.dropDatabase();
};


/**
 * 删除表
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 * @param table 表名
 * @return boolean true 代表请求权限成功，false代表失败
 */
SqliteApiWrapper.prototype.dropTable = function (table) {
    if (sqliteWrapper == null) {
        return null;
    }
    return sqliteWrapper.dropTable(table);
};


/**
 * 查询数据
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 * @param sql sql语句
 * @return JSON | 数据集合对象
 */
SqliteApiWrapper.prototype.query = function (sql) {
    if (sqliteWrapper == null) {
        return null;
    }
    var x = sqliteWrapper.query(sql);
   if (x == null || x=="") {
        return null;
    }
    x = javaString2string(x);
    return JSON.parse(x);
};


/**
 * 关闭数据库链接，释放资源
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 * @return boolean true 代表请求权限成功，false代表失败
 */
SqliteApiWrapper.prototype.close = function () {
    if (sqliteWrapper == null) {
        return null;
    }
    return sqliteWrapper.close();
};


function JdbcApiWrapper() {

}

var jdbc = new JdbcApiWrapper();

/**
 * 初始化JDBC链接
 * @param jdbcDriver JDBC得驱动，mysql填写:com.mysql.jdbc.Driver
 * @param dbUrl JDBC链接得URL,例如 jdbc:mysql://{ip}:{port}/{db}?characterEncoding=utf8&useSSL=false&serverTimezone=UTC&rewriteBatchedStatements=true
 * @param user 数据库用户名
 * @param password 数据库密码
 * @return {bool} true 代表成功 false 代表失败
 */
JdbcApiWrapper.prototype.init = function (jdbcDriver, dbUrl, user, password) {
    if (jdbcWrapper == null) {
        return false;
    }
    return jdbcWrapper.init(jdbcDriver, dbUrl, user, password);
};

/**
 * 获取最近的错误
 * @return {string} 错误字符串,null 代表没错误
 */
JdbcApiWrapper.prototype.getLastError = function () {
    if (jdbcWrapper == null) {
        return null;
    }
    return jdbcWrapper.getLastError();
};

/**
 * 链接数据库，该方法在init函数执行后调用
 * @return {bool} true 代表成功 false 代表失败
 */
JdbcApiWrapper.prototype.connect = function () {
    if (jdbcWrapper == null) {
        return null;
    }
    return jdbcWrapper.connect();
};

/**
 * 查询数据
 * @param sql SQL语句
 * @return {string} JSON字符串
 */
JdbcApiWrapper.prototype.query = function (sql) {
    if (jdbcWrapper == null) {
        return null;
    }
    return jdbcWrapper.query(sql);
};

/**
 * 创建一个预处理SQL语句
 * @param sql 预处理语句
 * @return  {bool} true 代表成功 false 代表失败
 */
JdbcApiWrapper.prototype.createPreparedStatement = function (sql) {
    if (jdbcWrapper == null) {
        return null;
    }
    return jdbcWrapper.createPreparedStatement(sql);
};
/**
 * 执行之前创建得预处理语句
 * @return {string} JSON字符串
 */
JdbcApiWrapper.prototype.psqlQuery = function () {
    if (jdbcWrapper == null) {
        return null;
    }
    return jdbcWrapper.psqlQuery();
};

/**
 * 预处理语句设置字符串条件参数
 * @param index 条件索引
 * @param input 字符串
 * @return  {bool} true 代表成功 false 代表失败
 */
JdbcApiWrapper.prototype.psqlSetString = function (index, input) {
    if (jdbcWrapper == null) {
        return null;
    }
    return jdbcWrapper.psqlSetString(index, input);
};

/**
 * 预处理语句设置long条件参数
 * @param index 条件索引
 * @param input long数据
 * @return  {bool} true 代表成功 false 代表失败
 */
JdbcApiWrapper.prototype.psqlSetLong = function (index, input) {
    if (jdbcWrapper == null) {
        return null;
    }
    return jdbcWrapper.psqlSetLong(index, input);
};

/**
 * 预处理语句设置int条件参数
 * @param index 条件索引
 * @param input int数据
 * @return  {bool} true 代表成功 false 代表失败
 */
JdbcApiWrapper.prototype.psqlSetInt = function (index, input) {
    if (jdbcWrapper == null) {
        return null;
    }
    return jdbcWrapper.psqlSetInt(index, input);
};

/**
 * 预处理语句设置float条件参数
 * @param index 条件索引
 * @param input float数据
 * @return  {bool} true 代表成功 false 代表失败
 */
JdbcApiWrapper.prototype.psqlSetFloat = function (index, input) {
    if (jdbcWrapper == null) {
        return null;
    }
    return jdbcWrapper.psqlSetFloat(index, input);
};

/**
 * 预处理语句设置boolean条件参数
 * @param index 条件索引
 * @param input boolean数据
 * @return  {bool} true 代表成功 false 代表失败
 */
JdbcApiWrapper.prototype.psqlSetBoolean = function (index, input) {
    if (jdbcWrapper == null) {
        return null;
    }
    return jdbcWrapper.psqlSetBoolean(index, input);
};

/**
 * 预处理语句设置日期条件参数
 * @param index 条件索引
 * @param dataFormat 日期格式，例如 yyyy-MM-dd
 * @param input 日期字符串
 * @return  {bool} true 代表成功 false 代表失败
 */
JdbcApiWrapper.prototype.psqlSetDate = function (index, dateFormat, input) {
    if (jdbcWrapper == null) {
        return null;
    }
    return jdbcWrapper.psqlSetDate(index, dateFormat, input);
};

/**
 * 预处理语句设置时间戳条件参数
 * @param index 条件索引
 * @param dataFormat 日期格式，例如 yyyy-MM-dd
 * @param input 日期字符串
 * @return  {bool} true 代表成功 false 代表失败
 */
JdbcApiWrapper.prototype.psqlSetTimestamp = function (index, dateFormat, input) {
    if (jdbcWrapper == null) {
        return null;
    }
    return jdbcWrapper.psqlSetTimestamp(index, dateFormat, input);
};

/**
 * 是否设定为批量提交
 * @return {bool} true 代表成功 false 代表失败
 */
JdbcApiWrapper.prototype.psqlAddBatch = function () {
    if (jdbcWrapper == null) {
        return null;
    }
    return jdbcWrapper.psqlAddBatch();
};

/**
 * 执行更新操作
 * @return {int} 更新影响到行数量
 */
JdbcApiWrapper.prototype.psqlExecuteUpdate = function () {
    if (jdbcWrapper == null) {
        return null;
    }
    return jdbcWrapper.psqlExecuteUpdate();
};

/**
 * 结束预处理语句
 * @return {bool} true 代表成功 false 代表失败
 */
JdbcApiWrapper.prototype.psqlClose = function () {
    if (jdbcWrapper == null) {
        return null;
    }
    return jdbcWrapper.psqlClose();
};

/**
 * 关闭数据库链接
 * @return {bool} true 代表成功 false 代表失败
 */
JdbcApiWrapper.prototype.connectionClose = function () {
    if (jdbcWrapper == null) {
        return null;
    }
    return jdbcWrapper.connectionClose();
};
