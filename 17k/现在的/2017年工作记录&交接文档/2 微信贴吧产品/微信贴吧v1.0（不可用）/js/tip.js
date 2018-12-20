    var aTip=document.querySelectorAll('.tip');
    var aBtn=document.querySelectorAll('.tip .btnBottom');
    var aMenu=document.querySelectorAll('.tip div.menu');
    var aComment=document.querySelectorAll('.tip a.comment');
    var aReply=document.querySelectorAll('section.reply');
    var aCancel=document.querySelectorAll('.reply .cancel');
    var aFace=document.querySelectorAll('.reply .face');
    var aZan=document.querySelectorAll('.oprate a.zan');
    var txt=document.querySelectorAll('.reply .txtArea');

    var facepath='skin/face/';
    var face=[
        {url:facepath+"smile.gif",alt:":)"},
        {url:facepath+"sad.gif",alt:":("},
        {url:facepath+"biggrin.gif",alt:":D"},
        {url:facepath+"cry.gif",alt:":'("},
        {url:facepath+"huffy.gif",alt:":@"},
        {url:facepath+"shocked.gif",alt:":o"},
        {url:facepath+"tongue.gif",alt:":P"},
        {url:facepath+"shy.gif",alt:":$"},
        {url:facepath+"titter.gif",alt:";P"},
        {url:facepath+"sweat.gif",alt:":L"},
        {url:facepath+"mad.gif",alt:":Q"},
        {url:facepath+"lol.gif",alt:":lol"},
        {url:facepath+"loveliness.gif",alt:":loveliness:"},
        {url:facepath+"funk.gif",alt:":funk:"},
        {url:facepath+"curse.gif",alt:":curse:"},
        {url:facepath+"dizzy.gif",alt:":dizzy:"}
    ];

    document.body.addEventListener('touchend',function(){
        for(var i=0;i<aTip.length;i++){
            aMenu[i].style.display='none';
            W.removeClass(aBtn[i],'show');
            aReply[i].style.display='none';
            W.removeClass(aComment[i],'show');
            txt[i].value='';
            if(aReply[i].querySelector('.faceBox')){
                aReply[i].querySelector('.faceBox').style.display='none';
                W.removeClass(aFace[i],'show');
            }
        }
    });

    //头部导航
    var param_orderby=W.getUrlParm('orderby');
    var param_type=W.getUrlParm('type');
    var aTabBtns=document.querySelectorAll('.tab2 a');
    var oSub=document.querySelector('.subjectTip');
    var oNotice=document.querySelector('.notice');
    for(var i=0;i<aTabBtns.length-1;i++){
        (function(i){
            if(param_orderby){
                aTabBtns[1].className='active';
                oNotice.style.display='none';
            }else{
                if(param_type){
                    aTabBtns[2].className='active';
                    oNotice.style.display='block';
                    oSub.style.display='none';
                }else{
                    aTabBtns[0].className='active';
                    oNotice.style.display='none';
                }
            }
        })(i);
    }


    //主题右侧菜单&评论模块显示隐藏
    for(var i=0;i<aTip.length;i++){
        (function(i){
            aMenu[i].addEventListener('touchend',function(e){
                e.stopPropagation();
            });
            aBtn[i].addEventListener('touchend',function(e){
                if(!W.hasClass(aBtn[i],'show')){
                    e.stopPropagation();
                    for(var j=0;j<aTip.length;j++){
                        aMenu[j].style.display='none';
                        aReply[j].style.display='none';
                        W.removeClass(aBtn[j],'show');
                    }
                    W.addClass(aBtn[i],'show');
                    aMenu[i].style.display='block';
                }else{

                }
            });
            aComment[i].addEventListener('touchend',function(e){
                if(!W.hasClass(aComment[i],'show')){
                    e.stopPropagation();
                    for(var j=0;j<aTip.length;j++){
                        aMenu[j].style.display='none';
                        aReply[j].style.display='none';
                        W.removeClass(aComment[j],'show');
                    }
                    W.addClass(aComment[i],'show');
                    aReply[i].style.display='block';
                }
            });

            aReply[i].addEventListener('touchend',function(e){
                if(e.target!=aCancel[i]){
                    e.stopPropagation();
                }
            });
        })(i)
    }

    //插入表情
    for(var i=0;i<aFace.length;i++){
        (function(i){
            aFace[i].addEventListener('touchend',function(e){
                e.stopPropagation();
                if(!aReply[i].querySelector('.faceBox')){
                    createFaceBox(aReply[i]);
                    aReply[i].querySelector('.faceBox').style.display='block';
                    W.addClass(this,'show')
                }else{
                    if(W.hasClass(this,'show')){
                        aReply[i].querySelector('.faceBox').style.display='none';
                        W.removeClass(this,'show');
                    }else{
                        aReply[i].querySelector('.faceBox').style.display='block';
                        W.addClass(this,'show')
                    }
                }


            })
        })(i)
    }

    function createFaceBox(obj){
        var div=document.createElement('div');
        div.className='faceBox';
        var str='';
        for(var i=0;i<face.length;i++){
            str+='<img src="'+face[i].url+'" alt="'+face[i].alt+'" onclick="addFaceTo(this)"/>';
        }
        div.innerHTML=str;
        obj.appendChild(div);
    }


    function addFaceTo(obj){
        var txt=obj.parentNode.previousElementSibling.firstElementChild;
        txt.value+=obj.getAttribute('alt');
    }

    //点赞 -->
    for(var i=0;i<aZan.length;i++){
        (function(i){
            var status=false;
            aZan[i].addEventListener('touchend',function(e){

                if(status){
                    return
                }
                status=true
                e.stopPropagation();
                if(!W.hasClass(this,'ok')){
                    W.addClass(this,'ok');
                    status=true;
                    var oEm=document.createElement('em');
                    this.appendChild(oEm);
                    oEm.innerHTML='+1';
                    oEm.className='ballon_up';
                }else{
                    W.removeClass(this,'ok');
                    status=true;
                    var oEm=document.createElement('em');
                    this.appendChild(oEm);
                    oEm.innerHTML='-1';
                    oEm.className='ballon_up';
                }
                setTimeout(function(){
                    aZan[i].removeChild(oEm);
                    status=false;
                },1000)
            })
        })(i)
    }