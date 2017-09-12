/* 
* @Author: Marte
* @Date:   2017-08-18 17:52:04
* @Last Modified by:   Marte
* @Last Modified time: 2017-08-18 20:38:18
*/
function byId(id){
    return typeof(id)==="string"?document.getElementById(id):id;
};
var li1=byId("main_li1"),
    li1_box=byId("main_li1_box");
li1.onmouseover=function(){
    li1_box.style.display="block"
};
li1.onmouseout=function(){
    li1_box.style.display="block"
};