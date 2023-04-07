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
    return threadWrapper.setTimeoutRh(func, timeout)
}

/**
 * 取消延迟执行
 * @param t 要取消的线程对象ID
 */
function cancelTimeout(t) {
    if (threadWrapper == null) {
        return;
    }
    threadWrapper.cancelTimeoutRh(t)

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
    return threadWrapper.setIntervalRh(func, interval)
}

/**
 * 取消周期执行的函数
 * @param t 要取消的函数
 */
function cancelInterval(t) {
    if (threadWrapper == null) {
        return;
    }
    threadWrapper.cancelIntervalRh(t)
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

    return threadWrapper.setIntervalRh(runnable, interval);

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
    threadWrapper.cancelIntervalRh(t);

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
    return threadWrapper.setTimeoutRh(runnable, timeout);
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
    threadWrapper.cancelTimeoutRh(t);
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
    return threadWrapper.execAsyncRh(runnable);
};


/**
 * 取消线程的执行
 * @param t 线程对象ID
 */
ThreadWrapper.prototype.cancelThread = function (t) {
    if (threadWrapper == null) {
        return;
    }
    threadWrapper.cancelThread(t);
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
    return threadWrapper.execFuncSyncRh(condition, timeout);

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