function ThreadWrapper() {

}

var thread = new ThreadWrapper();

/**
 * 设定延迟多少毫秒后执行函数，在子线程中执行
 * @param func 要执行的函数
 * @param timeout 延迟时间，单位是毫秒
 * @return 线程对象ID  该对象可以进行取消
 */
function setTimeout(func, timeout) {
    if (threadWrapper == null) {
        return;
    }
    if (isStableJs()) {
        return threadWrapper.setTimeoutRh(func, timeout)
    }
    return null;
}

/**
 * 取消延迟执行
 * @param t 要取消的线程对象ID
 */
function cancelTimeout(t) {
    if (threadWrapper == null) {
        return;
    }
    if (isStableJs()) {
        threadWrapper.cancelTimeoutRh(t)
    }
    return null;

}

/**
 * 设置多少周期进行执行一次，在子线程中执行
 *
 * @param func 函数
 * @param interval 周期时间，单位是毫秒
 * @return 线程对象ID  该对象可以进行取消
 */
function setInterval(func, interval) {
    if (threadWrapper == null) {
        return;
    }
    if (isStableJs()) {
        return threadWrapper.setIntervalRh(func, interval)
    }
    return null;
}

/**
 * 取消周期执行的函数
 * @param t 要取消的函数
 */
function cancelInterval(t) {
    if (threadWrapper == null) {
        return;
    }
    if (isStableJs()) {
        threadWrapper.cancelIntervalRh(t)
    }
    return null;
}

/**
 * 设置多少周期进行执行一次，在子线程中执行
 *
 * @param runnable 函数
 * @param interval 周期时间，单位是毫秒
 * @return 线程对象ID  该对象可以进行取消
 */
ThreadWrapper.prototype.setInterval = function (runnable, interval) {
    if (threadWrapper == null) {
        return null;
    }

    if (isStableJs()) {
        return threadWrapper.setIntervalRh(runnable, interval);
    }
    return null;

};
/**
 * 取消周期执行的函数
 *
 * @param t 线程对象ID
 */
ThreadWrapper.prototype.cancelInterval = function (t) {
    if (threadWrapper == null) {
        return null;
    }
    if (isStableJs()) {
        threadWrapper.cancelIntervalRh(t);
    }
    return null;

};
/**
 * 设定延迟多少毫秒后执行函数，在子线程中执行
 * @param runnable 要执行的函数
 * @param timeout 延迟时间，单位是毫秒
 * @return 对象 线程对象ID
 */
ThreadWrapper.prototype.setTimeout = function (runnable, timeout) {
    if (threadWrapper == null) {
        return null;
    }
    if (isStableJs()) {
        return threadWrapper.setTimeoutRh(runnable, timeout);
    }
    return null;
};

/**
 * 取消延迟执行
 * @param t 线程对象ID
 * @return {null|null|number}
 */
ThreadWrapper.prototype.cancelTimeout = function (t) {
    if (threadWrapper == null) {
        return null;
    }
    if (isStableJs()) {
        threadWrapper.cancelTimeoutRh(t);
    }
    return null;
};

/**
 * 异步执行线程，这里会将Runnable放到线程池中进行管理
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param runnable Runnable对象
 * @param string，线程对象ID
 */
ThreadWrapper.prototype.execAsync = function (runnable) {
    if (threadWrapper == null) {
        return null;
    }
    if (isStableJs()) {
        return threadWrapper.execAsyncRh(runnable);
    }
    return null;
};


/**
 * 取消线程的执行
 * @param t 线程对象ID
 * @return boolean
 */
ThreadWrapper.prototype.cancelThread = function (t) {
    if (threadWrapper == null) {
        return true;
    }
    if (isStableJs()) {
        threadWrapper.cancelThread(t);
    }
    return true;
};

/**
 * 取消线程的执行
 * @param t 线程对象ID
 * @return boolean true代表已经取消了，false表示未取消
 */
ThreadWrapper.prototype.isCancelled = function (t) {
    if (threadWrapper == null) {
        return true;
    }
    return threadWrapper.isCancelled(t);
};
/**
 * 取消所有正在运行的线程
 */
ThreadWrapper.prototype.stopAll = function () {
    if (threadWrapper == null) {
        return;
    }
    threadWrapper.stopAll();
};


/**
 * 执行某个函数并且等待true返回，如果函数中返回的是true，该方法将立刻执行完毕
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param condition 条件函数
 * @param timeout   超时时间，单位是毫秒
 * @return 布尔型 返回一个布尔型值
 */
ThreadWrapper.prototype.execSync = function (condition, timeout) {
    if (threadWrapper == null) {
        return null;
    }
    if (isStableJs()) {
        return threadWrapper.execFuncSyncRh(condition, timeout);
    } else if (isFastJs()) {
        return threadWrapper.execFuncSyncV8(condition, timeout);
    }

};

/**
 * 执行某个函数并且等待true返回，如果函数中返回的是true，该方法将立刻执行完毕
 * <Br/>
 * 运行环境: 无限制
 * <Br/>
 * 兼容版本: Android 4.4 以上
 *
 * @param condition 条件函数
 * @param timeout   超时时间，单位是毫秒
 * @return 布尔型 返回一个布尔型值
 */
function execSync(condition, timeout) {
    return thread.execSync(condition, timeout);
}