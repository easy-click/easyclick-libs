

function JsSocket() {
    this.scSocket = socketWrapper.createSocket();
}


/**
 * 关闭socket
 */
JsSocket.prototype.close = function () {
    this.scSocket.close();
};

/**
 * 链接socket到远程
 * @param hostName ip或者域名
 * @param port 端口号
 * @return {bool} 布尔型 ，true代表成功  false代表失败
 */
JsSocket.prototype.connect = function (hostName, port) {
    return this.scSocket.connect(hostName, port);
};

/**
 * 设置超时时间
 * @param timeout 超时时间 单位是毫秒
 * @return {bool} 布尔型 ，true代表成功  false代表失败
 */
JsSocket.prototype.setSoTimeout = function (timeout) {
    return this.scSocket.setSoTimeout(timeout);
};


/**
 * 设置TCP不延迟
 * @param b true 或者false
 * @return {bool} 布尔型 ，true代表成功  false代表失败
 */
JsSocket.prototype.setTcpNoDelay = function (b) {
    return this.scSocket.setTcpNoDelay(b);
};

/**
 * 地址端口复用
 * @param b true 或者false
 * @return {bool} 布尔型 ，true代表成功  false代表失败
 */
JsSocket.prototype.setReuseAddress = function (b) {
    return this.scSocket.setReuseAddress(b);
};
/**
 * 保持链接
 * @param b true 或者false
 * @return {bool} 布尔型 ，true代表成功  false代表失败
 */
JsSocket.prototype.setKeepAlive = function (b) {
    return this.scSocket.setKeepAlive(b);
};

/**
 * 设置接收缓冲区大小
 * @param b 大小
 * @return {bool} 布尔型 ，true代表成功  false代表失败
 */
JsSocket.prototype.setReceiveBufferSize = function (b) {
    return this.scSocket.setReceiveBufferSize(b);
};


/**
 * 设置发送缓冲区大小
 * @param b 大小
 * @return {bool} 布尔型 ，true代表成功  false代表失败
 */
JsSocket.prototype.setSendBufferSize = function (b) {
    return this.scSocket.setSendBufferSize(b);
};

/**
 * 读取一行数据，服务端发送的数据必须是\n结尾，否则可能无法正确读取
 * @return {string} 字符串
 */
JsSocket.prototype.readLine = function () {
    return this.scSocket.readLine();
};
/**
 * 写入文本数据
 * @param text 文本数据
 * @param flush 布尔型，是否刷新缓冲区
 * @return {string} 字符串
 */
JsSocket.prototype.writeText = function (text, flush) {
    return this.scSocket.writeText(text,flush);
};

/**
 * 获取Socket对象，这里socket是java的socket对象，当其他函数无法满足，可以使用Socket扩展
 * @return {socket} 对象
 */
JsSocket.prototype.getSocket = function () {
    return this.scSocket.getSocket();
};
/**
 * 获取InputStream对象，这里是java的 InputStream 对象
 * @return {InputStream} 对象
 */
JsSocket.prototype.getInputStream = function () {
    return this.scSocket.getInputStream();
};

/**
 * 获取 OutputStream 对象，这里是java的 OutputStream 对象
 * @return {OutputStream} 对象
 */
JsSocket.prototype.getOutputStream = function () {
    return this.scSocket.getOutputStream();
};


/**
 * 链接是否关闭
 * @return {bool} true代表关闭
 */
JsSocket.prototype.isClosed = function () {
    return this.scSocket.isClosed();
};


/**
 * 获取错误消息
 * @return {string} 字符串 ,null代表没有问题
 */
JsSocket.prototype.getErrorMsg = function () {
    return this.scSocket.getErrorMsg();
};
