/* 
* @Author: Marte
* @Date:   2017-08-17 09:55:17
* @Last Modified by:   Marte
* @Last Modified time: 2017-08-17 18:45:00
*/

var close=document.getElementById("close"),
    headAd=document.getElementById("head_ad"),
    headImg=document.getElementById("head_ad_img")
    timer=null,
    h=80,
    j=20;
close.onclick=function(){
    // headAd.style.display="none";
    timer=setInterval(function(){
        h-=parseInt(h/j);
        if (h<j) {
            h-=1;
        };
        if (h==0) {
            headImg.style.display="none"
            clearInterval(timer);
        };
        headImg.style.height=h+"px";
        console.log(h)
    }, 10)
}