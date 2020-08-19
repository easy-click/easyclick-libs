/*
 * @Author: 大柒
 * @QQ: 531310591@qq.com
 * @Date: 2020-07-31 04:45:27
 * @Version: EasyClick 5.0.0.RC12
 * @Description:
 * @LastEditors: 大柒
 * @LastEditTime: 2020-07-31 04:45:36
 */

importClass(android.os.Build);
importClass(android.view.Gravity);
importClass(android.view.WindowManager);
importClass(android.graphics.PixelFormat);

/**
 * 悬浮窗工具类
 * 使用方法 用ui.parseView解析布局后传入即可
 * 例: let win = new FloatUtil(view);
 * 接口跟auto.js 悬浮窗接口一致
 * @param contentView
 * @constructor
 */
function FloatUtil(contentView) {
    let mWindowManager = context.getSystemService(context.WINDOW_SERVICE);
    let mHandler = ui.getHandler();
    let layoutParams = new WindowManager.LayoutParams();
    if (Build.VERSION.SDK_INT >= 26) {
        layoutParams.type = WindowManager.LayoutParams.TYPE_APPLICATION_OVERLAY;
    } else {
        layoutParams.type = WindowManager.LayoutParams.TYPE_PHONE;
    }
    layoutParams.x = 0;
    layoutParams.y = 0;
    layoutParams.width = -2;
    layoutParams.height = -2;
    layoutParams.flags = WindowManager.LayoutParams.FLAG_NOT_TOUCH_MODAL | WindowManager.LayoutParams.FLAG_NOT_FOCUSABLE | WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS;
    layoutParams.gravity = Gravity.LEFT | Gravity.TOP;
    layoutParams.format = PixelFormat.RGBA_8888;

    MainPost(() => mWindowManager.addView(contentView, layoutParams));

    /**
     * 悬浮窗内容视图
     */
    this.contentView = contentView;

    /**
     * 返回悬浮窗X坐标
     * @returns {number}
     */
    this.getX = function () {
        return layoutParams.x;
    }

    /**
     * 返回悬浮窗Y坐标
     * @returns {number}
     */
    this.getY = function () {
        return layoutParams.y;
    }

    /**
     * 返回悬浮窗宽度
     * @returns {number}
     */
    this.getWidth = function () {
        return layoutParams.width;
    }

    /**
     * 返回悬浮窗高度
     * @returns {number}
     */
    this.getHeight = function () {
        return layoutParams.height;
    }

    /**
     * 返回屏幕宽度
     * @returns {number|int}
     */
    this.getScreenWidth = function () {
        return mWindowManager.getDefaultDisplay().getWidth();
    }

    /**
     * 返回屏幕高度
     * @returns {number|int}
     */
    this.getScreenHeight = function () {
        return mWindowManager.getDefaultDisplay().getHeight();
    }

    /**
     * 设置悬浮窗大小 -1为全屏 -2为自适应
     * @param width
     * @param height
     */
    this.setSize = function (width, height) {
        layoutParams.width = width;
        layoutParams.height = height;
        updateViewLayout();
    }

    /**
     * 设置悬浮窗位置
     * @param x
     * @param y
     */
    this.setPosition = function (x, y) {
        layoutParams.x = x;
        layoutParams.y = y;
        updateViewLayout();
    }

    /**
     * 设置悬浮窗是否可接收触摸消息
     * @param touchabl
     */
    this.setTouchable = function (touchable) {
        if (touchable) {
            layoutParams.flags &= ~WindowManager.LayoutParams.FLAG_NOT_TOUCHABLE;
        } else {
            layoutParams.flags |= WindowManager.LayoutParams.FLAG_NOT_TOUCHABLE;
        }
        updateViewLayout();
    }

    /**
     * 关闭悬浮窗
     */
    this.close = function () {
        MainPost(() => mWindowManager.removeView(contentView));
    }

    function MainPost(action) {
        mHandler.post({run: action});
    }

    function updateViewLayout() {
        MainPost(() => mWindowManager.updateViewLayout(contentView, layoutParams));
    }
}