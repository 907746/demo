function byId(id){
    return typeof(id)==="string"?document.getElementById(id):id;
}


var main=byId("main"),
    lis=byId("list").getElementsByTagName("li"),
    pics=byId("pic_box").getElementsByTagName("div"),
    timer=null,
    index=0;


// function autoplay(){
//     main.onmouseout=function(){
//         timer=setInterval(function(){
//             if (index>pics.length-1) {
//                 index=0;
//             };
//             slidePic()
//             index++;
//         },1000);
//     };
//     main.onmouseover=function(){
//         clearInterval(timer);
//     };

// };


function control(){
    main.onmouseout=function(){
        autoplay();
    };
    main.onmouseover=function(){
        stopplay();
    };

    autoplay();
};

function autoplay(){
    timer=setInterval(function(){
        if (index>pics.length-1) {
            index=0;
        };
        slidePic()
        index++;
    }, 1000);
};

function stopplay(){
    clearInterval(timer);
};

function slidePic(){
    for (var i=0;i<pics.length;i++){
        if (i>pics.length) {
            i=0
        };
        pics[i].style.display="none";
        lis[i].className="";
    };
    pics[index].style.display="block";
    lis[index].className="active";

    for(var j=0;j<lis.length;j++){
        lis[j].id=j;
        lis[j].onclick=function(){
            index=this.id;
            slidePic()
        };
    };
};

control();