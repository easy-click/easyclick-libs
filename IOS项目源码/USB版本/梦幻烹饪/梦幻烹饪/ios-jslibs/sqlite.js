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
