/**
 * Created by apple on 2017/5/13.
 */

(function (doc,win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) {
                return;
            } if (clientWidth > 1024) {
                docEl.style.fontSize = 60 + 'px';
            } else {
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            }
        };

        if (!doc.addEventListener)
            return;
    win.addEventListener(resizeEvt,recalc,false);
    doc.addEventListener('DOMContentLoaded',recalc,false);
})(document,window);

var flag = true;

// 声音推送通知设置
$('.check-on').on('click',function () {
    if (flag) {
        $(this).attr('src','images/off.png')
    } else {
        $(this).attr('src','images/on.png')
    }
    flag = !flag;
});

//底部菜单切换
 $('.footer-menu').on('click',function () {
     console.log('123');
    var id = $(this).attr('id');
     $('#'+id+'-wrap').addClass('active').siblings().removeClass('active');
 });

