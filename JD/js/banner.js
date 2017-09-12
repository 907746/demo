function byId(id){
    return typeof(id)==="string"?document.getElementById(id):id;
};

// 自动循环
function setAutoPlay(){
    timer = setInterval(function(){
        index++;
        if (index>=len) {
            index=0
        };
        changeImg();
    },2000)
};
function clearAutoPlay(){
    if (timer) clearInterval(timer);
};

// 设置轮播
var pics = byId("pics").getElementsByTagName("img"),
    dots = byId("dots").getElementsByTagName("a"),
    prev = byId("prev"),
    next = byId("next"),
    len = pics.length,
    timer = null,
    index = 0,
    main = byId("banner_main");
function slideImg(){
    main.onmouseover=function(){
        clearAutoPlay();
    };
    main.onmouseout = function(){
        setAutoPlay();
    };
    main.onmouseout();
};

// 图片切换
function changeImg(){
    for(var i=0;i<len;i++){
        pics[i].style.display="none";
        dots[i].className = "";
    };
    pics[index].style.display="block";
    dots[index].className="active";
};

// 点击导航切换
for(var i=0;i<dots.length;i++){
    dots[i].id = i;
    dots[i].onclick=function(){
        index = this.id;
        changeImg();
    };
};

// 上下张切换
prev.onclick=function(){
    index--;
    if (index<0) index=len-1;
    changeImg();
};
next.onclick=function(){
    index++;
    if (index>=len) index=0;
    changeImg();
}

slideImg();