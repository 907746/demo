/* 
 * @Author: Marte
 * @Date:   2017-09-06 16:08:17
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-09-06 17:27:38
 */

function animation(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var flag = true;
        for (var k in json) {
            if (k == "opacity") {
                var leader = getStyle(obj, k) * 100,
                    target = json[k] * 100,
                    step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader+step;
                obj.style[k] = leader / 100;
            } else if (k == "zIndex") {
                obj.style[k] = json[k];
            } else {
                var leader = parseInt(getStyle(obj, k)) || 0,
                    target = json[k],
                    step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader =leader + step;
                obj.style[k] = leader + "px";
            }
            console.log("target: " + target + "leader: " + leader + "step: " + step);
            if (leader != target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer)
            if (fn) {
                fn();
            }
        }


    }, 15)
}

function getStyle(ele, attr) {
    if (ele.currentStyle) {
        return ele.currentStyle[attr];
    } else {
        return window.getComputedStyle(ele, null)[attr];
    }

}
