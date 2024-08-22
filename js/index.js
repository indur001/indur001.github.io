var throttle = function(fn, gapTime) {
    var _lastTime = null
    return function() {
        var context = this
        var args = arguments
        var _nowTime = + new Date()
        if(_nowTime - _lastTime > gapTime || !_lastTime) {
            fn.apply(context, args)
            _lastTime = _nowTime
        }
    }
}
var navScrollBackground = function() {
    var nav = document.querySelector('nav')
    window.addEventListener('scroll', throttle(function() {
        var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
        // console.log(top);
        if(top > 20) {
            nav.className = 'nav-style'
        } else {
            nav.className = ''
        }
    }, 20))

}

var clickShowUl = function() {
    // 1.获取
    var but = e('#clickButton')
    var ul = e('#clickShow')
    var shade = document.querySelector('.shade')
    var close = e('.close')
    // 2.绑定点击事件
    bindEvent(but, 'click', function() {
        // console.log('?');
        toggleClass(ul, 'show')
        toggleClass(shade, 'shadeShow')
    })
    bindEvent(close, 'click', function() {
        toggleClass(ul, 'show')
        toggleClass(shade, 'shadeShow')
    })
    bindEvent(shade, 'click', function() {
        toggleClass(ul, 'show')
        toggleClass(shade, 'shadeShow')
    })
}

//
// 主函数
var __main = function() {
    // 
    // 页面滚动改变导航栏样式
    navScrollBackground()
    // 屏幕小于768px时，点击显示/隐藏ul(导航栏)
    clickShowUl()
}

__main()
