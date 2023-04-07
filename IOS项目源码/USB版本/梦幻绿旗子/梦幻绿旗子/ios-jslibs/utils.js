function UtilsWrapper() {

}


var utils = new UtilsWrapper();


/**
 * 文件的MD5
 * @param filePath 文件路径
 * @return string 文件MD5字符串或者null
 */
UtilsWrapper.prototype.fileMd5 = function (filePath) {
    if (utilsWrapper == null) {
        return null;
    }
    let x = utilsWrapper.fileMd5(filePath);
    return javaString2string(x);
};
/**
 * 数据计算出来的MD5
 * @param data 数据
 * @return string 数据MD5字符串或者null
 */
UtilsWrapper.prototype.dataMd5 = function (data) {
    if (utilsWrapper == null) {
        return null;
    }
    let x = utilsWrapper.dataMd5(data);
    return javaString2string(x);
};


/**
 * 取得某个范围的随机值
 * @param min 最小值
 * @param max 最大值
 * @return 整型 在min和max中间的值, 包含最大和最小值
 */
UtilsWrapper.prototype.getRangeInt = function (min, max) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.getRangeInt(min, max);
};
/**
 * 设置剪贴板文本
 * @param text 文本
 * @return boolean
 */
UtilsWrapper.prototype.setClipboardText = function (text) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.setClipboardText(text);
};


/**
 * 读取剪贴板文本
 * @return string
 */
UtilsWrapper.prototype.getClipboardText = function () {
    if (utilsWrapper == null) {
        return null;
    }
    return javaString2string(utilsWrapper.getClipboardText());
};

/**
 * 将zip文件解压到一个文件夹中
 * @param zipFile 目标zip文件的路径
 * @param passwd 目标ip文件密码
 * @param destDir 要解压到的目标文件夹
 * @return {bool} true 代表成功  false代表失败
 */
UtilsWrapper.prototype.unzip = function (zipFile, passwd, destDir) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.unzip(zipFile, passwd, destDir);
};
/**
 * 将多个文件压缩成一个zip文件
 * @param zipFile 目标zip文件的路径
 * @param passwd 目标ip文件密码
 * @param files 要压缩的文件或者文件夹，文件数组例如: ["/sdcard/a.txt","/sdcard/bb/"]
 * @return {bool} true 代表成功  false代表失败
 */
UtilsWrapper.prototype.zip = function (zipFile, passwd, files) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.zip(zipFile, passwd, JSON.stringify(files));
};


/**
 * 从zip文件中读取数据
 * @param zipFile zip文件的路径
 * @param passwd zip文件密码
 * @param filePathInZip 文件在zip中的路径，例如 a/b.txt
 * @return {string} 解析后的字符串
 */
UtilsWrapper.prototype.readFileInZip = function (zipFile, passwd, filePathInZip) {
    if (utilsWrapper == null) {
        return null;
    }
    return utilsWrapper.readFileInZip(zipFile, passwd, filePathInZip);
};

/**
 * 数据存储类
 */
function StoragesWrapper() {

}

var storages = new StoragesWrapper();
/**
 * 创建存储对象
 * @param name 存储对象名称
 * @return {StorageApiWrapper} 存储对象实例
 */
StoragesWrapper.prototype.create = function (name) {
    return new StorageApiWrapper(name);
}

function StorageApiWrapper(name) {
    this.name = name;
    storageWrapper.init(this.name);
}

/**
 * 清空存储
 * @return {bool} true成功 false 失败
 */
StorageApiWrapper.prototype.clear = function () {
    return storageWrapper.clear(this.name);
}
/**
 * 是否包含某个key
 * @param key 键
 * @return {bool} true成功 false 失败
 */
StorageApiWrapper.prototype.contains = function (key) {
    return storageWrapper.contains(this.name, key);
}
/**
 * 移出key对应的值
 * @param key 键
 * @return {bool} true成功 false 失败
 */
StorageApiWrapper.prototype.remove = function (key) {
    return storageWrapper.remove(this.name, key);
}
/**
 * 存储字符串
 * @param key 键
 * @param value 字符串
 * @return {bool} true成功 false 失败
 */
StorageApiWrapper.prototype.putString = function (key, value) {
    return storageWrapper.putString(this.name, key, value);
}
/**
 * 存储整型数据
 * @param key 键
 * @param value 整型数据
 * @return {bool} true成功 false 失败
 */
StorageApiWrapper.prototype.putInt = function (key, value) {
    return storageWrapper.putInt(this.name, key, value);
}
/**
 * 存储布尔型数据
 * @param key 键
 * @param value 布尔型数据
 * @return {bool} true成功 false 失败
 */
StorageApiWrapper.prototype.putBoolean = function (key, value) {
    return storageWrapper.putBoolean(this.name, key, value);
}
/**
 * 存储浮点型数据
 * @param key 键
 * @param value 浮点型数据
 * @return {bool} true成功 false 失败
 */
StorageApiWrapper.prototype.putFloat = function (key, value) {
    return storageWrapper.putFloat(this.name, key, value);
}

/**
 * 获取字符串数据
 * @param key 键
 * @param defaultValue 默认值
 * @return {string} 字符串
 */
StorageApiWrapper.prototype.getString = function (key, defaultValue) {
    return storageWrapper.getString(this.name, key, defaultValue);
}

/**
 * 获取整型数据
 * @param key 键
 * @param defaultValue 默认值
 * @return {string} 整型
 */
StorageApiWrapper.prototype.getInt = function (key, defaultValue) {
    return storageWrapper.getInt(this.name, key, defaultValue);
}
/**
 * 获取布尔型数据
 * @param key 键
 * @param defaultValue 默认值
 * @return {string} 布尔型
 */
StorageApiWrapper.prototype.getBoolean = function (key, defaultValue) {
    return storageWrapper.getBoolean(this.name, key, defaultValue);
}
/**
 * 获取浮点型数据
 * @param key 键
 * @param defaultValue 默认值
 * @return {string} 浮点型
 */
StorageApiWrapper.prototype.getFloat = function (key, defaultValue) {
    return storageWrapper.getFloat(this.name, key, defaultValue);
}


/**
 * 获取所有的key
 * @return {string} JSON字符串
 */
StorageApiWrapper.prototype.keys = function () {
    return storageWrapper.keys(this.name);
}


/**
 * 获取所有的key和值
 * @return {string} JSON字符串
 */
StorageApiWrapper.prototype.all = function () {
    return storageWrapper.all(this.name);
}


