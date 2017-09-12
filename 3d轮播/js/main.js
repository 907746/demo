/* 
* @Author: Marte
* @Date:   2017-09-06 16:06:52
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-06 17:30:16
*/

function byId(id){
    return typeof(id)==="string"?document.getElementById(id):id;
};

var wrap=byId("wrap"),
    slide=byId("slide"),
    ul=slide.children[0],
    lis=ul.children,
    arrow=byId("arrow"),
    arrLeft=byId("arrLeft"),
    arrRight=byId("arrRight"),
    config=[
        {
            width: 400,
            top: 20,
            left: 50,
            opacity: 0.2,
            zIndex: 2
        },//0
        {
            width: 600,
            top: 70,
            left: 0,
            opacity: 0.8,
            zIndex: 3
        },//1
        {
            width: 800,
            top: 100,
            left: 200,
            opacity: 1,
            zIndex: 4
        },//2
        {
            width: 600,
            top: 70,
            left: 600,
            opacity: 0.8,
            zIndex: 3
        },//3
        {
            width: 400,
            top: 20,
            left: 750,
            opacity: 0.2,
            zIndex: 2
        }//4
    ];

wrap.onmouseover=function(){
    animation(arrow,{"opacity":1});
}
wrap.onmouseout=function(){
    animation(arrow,{"opacity":0});
}

function assign(){
    for (var i=0;i<lis.length;i++){
        animation(lis[i],config[i],function(){
            flag=true;
        });
    }
}

var flag=true;
assign();
arrRight.onmouseover=function(){
    flag=false;
    config.push(config.shift())
    assign()
}
arrLeft.onclick=function(){
    flag=false;
    config.unshift(config.pop())
    assign()
}