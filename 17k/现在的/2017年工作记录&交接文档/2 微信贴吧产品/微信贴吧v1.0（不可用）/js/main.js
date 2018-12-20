(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 20 * (clientWidth / 375) + 'px';
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

var W={
    /*** 带关闭按钮和确定按钮的弹窗 ***/
    alert:function(txt,callback){
        var div=document.createElement('div');
        div.className='alert_bg';
        var box=document.createElement('div');
        box.className='alert_box';
        var close=new Image();
        close.src='skin/close.jpg';
        close.addEventListener('touchend',function(e){
            e.stopPropagation();
            document.body.removeChild(div);
        })
        var content=document.createElement('div');
        content.innerHTML=txt;
        content.className='content';
        var btn=document.createElement('a');
        btn.addEventListener('touchend',function(e){
            e.stopPropagation();
            document.body.removeChild(div);
            if(callback){
                callback();
            }
        });
        btn.innerHTML='确定';
        content.appendChild(btn);
        box.appendChild(close);
        box.appendChild(content);
        div.appendChild(box);
        document.body.appendChild(div);
    },
    /*** 去掉字符串左右空格 ***/
    trim:function(str){
        return str.replace(/(^\s*)|(\s*$)/g,'');
    },
    /*** 添加class ***/
    addClass:function(obj, cls){
        var obj_class = obj.className,//获取 class 内容.
            blank = (obj_class != '') ? ' ' : '';//判断获取到的 class 是否为空, 如果不为空在前面加个'空格'.
        added = obj_class + blank + cls;//组合原来的 class 和需要添加的 class.
        obj.className = added;//替换原来的 class.
    },
    /*** 移除class ***/
    removeClass:function(obj, cls){
        var obj_class = ' '+obj.className+' ';//获取 class 内容, 并在首尾各加一个空格. ex) 'abc    bcd' -> ' abc    bcd '
        obj_class = obj_class.replace(/(\s+)/gi, ' '),//将多余的空字符替换成一个空格. ex) ' abc    bcd ' -> ' abc bcd '
            removed = obj_class.replace(' '+cls+' ', ' ');//在原来的 class 替换掉首尾加了空格的 class. ex) ' abc bcd ' -> 'bcd '
        removed = removed.replace(/(^\s+)|(\s+$)/g, '');//去掉首尾空格. ex) 'bcd ' -> 'bcd'
        obj.className = removed;//替换原来的 class.
    },
    /*** 是否包含class ***/
    hasClass:function(obj, cls){
        var obj_class = obj.className,//获取 class 内容.
            obj_class_lst = obj_class.split(/\s+/);//通过split空字符将cls转换成数组.
        x = 0;
        for(x in obj_class_lst) {
            if(obj_class_lst[x] == cls) {//循环数组, 判断是否包含cls
                return true;
            }
        }
        return false;
    },
    getUrlParm:function(paramName) {
        var url = location.search.substr(1).split('&');
        for(var i = 0, o = {}, j; j = url[i++];) {
            var k = j.split('=');
            o[k[0]] = k[1];
        }
        return o[paramName] || '';
        },
    jsonp: function(url, paramObj, callback) {
        if(paramObj && paramObj.prototype) {
            paramObj = [callback, callback = paramObj][0];
        }
        var tempCallback = 'jsonpCallback_' + (new Date).getTime() + Math.floor(Math.random() * 1000);
        Q[tempCallback] = function(dat) {
            document.body.removeChild(script);
            script = null;
            Q[tempCallback] = null;
            callback && callback(dat);
            dat = null;
        };
        var script = document.createElement('script');
        if(!url.match(/\?/)) {
            url += '?';
        }
        url += '&callback=Q.' + tempCallback + '&jsonp=Q.' + tempCallback;
        url = url.replace('?&', '?');

        for(var i in paramObj) {
            if(paramObj.hasOwnProperty(i))
                url += '&' + encodeURIComponent(i) + '=' + encodeURIComponent(paramObj[i]);
        }
        script.src = url;
        document.body.appendChild(script);
        return {
            abort: function() {
                Q[tempCallback] = new Function;
            }
        }
    }
}
