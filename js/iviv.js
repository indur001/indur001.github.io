
// 获取元素
var e = function(event) {
    return document.querySelector(event)
}
var es = function(event) {
    return document.querySelectorAll(event)
}
// 绑定事件
var bindEvent = function(element, event, callBack) {
    element.addEventListener(event, callBack)
}
// 有某个class删除，没有则加上
var toggleClass = function(element, className) {

    if (element.classList.contains(className)) {
        // 拥有则删除之
        element.classList.remove(className)
    } else {
        // 没有则加上
        element.classList.add(className)
    }
}
