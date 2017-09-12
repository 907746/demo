/* 
* @Author: Marte
* @Date:   2017-09-05 10:09:26
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-05 10:25:54
*/

var pics=document.getElementById("list").getElementsByTagName("a"),
    banner=document.getElementById("banner"),
    text=document.getElementById("text");

for(var i=0;i<pics.length;i++){
    pics[i].onclick=function(){
        text.innerText=this.title;
        banner.src=this.href;
        return false;
    };
};