var g_ret = null;

function findNodeEx(jsonobj) {
    if (!jsonobj) {
        return false;
    }
    if (typeof (jsonobj) != "object") {
        logd("jsonobj类型不匹配:" + jsonobj)
        return false;
    }
    let obj = S.get();
    try {
        for (let s in jsonobj) {
            switch (s) {
                case "text":            obj = obj.text(jsonobj.text);                   break;
                case "clz":             obj = obj.clz(jsonobj.clz);                     break;
                case "id":              obj = obj.id(jsonobj.id);                       break;
                case "pkg":             obj = obj.pkg(jsonobj.pkg);                     break;
                case "desc":            obj = obj.desc(jsonobj.desc);                   break;
                case "drawingOrder":    obj = obj.drawingOrder(jsonobj.drawingOrder);   break;
                case "depth":           obj = obj.depth(jsonobj.depth);                 break;
                case "bounds":          obj = obj.bounds(jsonobj.bounds[0], jsonobj.bounds[1], jsonobj.bounds[2], jsonobj.bounds[3]);    break;
                case "visible":         obj = obj.visible(jsonobj.visible);             break;
                case "checkable":       obj = obj.checkable(jsonobj.checkable);         break;
                case "checked":         obj = obj.checked(jsonobj.checked);             break;
                case "clickable":       obj = obj.clickable(jsonobj.clickable); break;
                case "longClickable":   obj = obj.longClickable(jsonobj.longClickable); break;
                case "scrollable":      obj = obj.scrollable(jsonobj.scrollable);       break;
                case "focusable":       obj = obj.focusable(jsonobj.focusable);         break;
                case "enabled":         obj = obj.enabled(jsonobj.enabled);             break;
                case "focused":         obj = obj.focused(jsonobj.focused);             break;
                case "selected":        obj = obj.selected(jsonobj.selected);           break;
                case "index":           obj = obj.index(jsonobj.index);                 break;
                case "childCount":      obj = obj.childCount(jsonobj.childCount);       break;
            }
        }
        g_ret = obj.getOneNodeInfo(0)
        return g_ret ? true : false;
    } catch (e) {
        loge(e);
    }
    return false;
}

function findNode(selecter, isclick) {
    try {
        g_ret = selecter.getOneNodeInfo(0);
        if (g_ret) {
            if (isclick) {
                g_ret.click();
            }
            return true;
        }
    } catch (e) {
        loge(e);
    }
    return false;
}