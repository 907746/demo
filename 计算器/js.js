function byId(id){
    return typeof(id)==="string"?document.getElementById(id):id;
}

var btn1=byId("calBtn1"),
    btn2=byId("calBtn2"),
    btn3=byId("calBtn3"),
    btn4=byId("calBtn4"),
    btn5=byId("calBtn5"),
    btn6=byId("calBtn6"),
    btn7=byId("calBtn7"),
    btn8=byId("calBtn8"),
    btn9=byId("calBtn9"),
    btn0=byId("calBtn0"),
    calAdd=byId("calBtnAdd"),
    calCut=byId("calBtnCut"),
    calMul=byId("calBtnMul"),
    calDiv=byId("calBtnDiv"),
    calDot=byId("calBtnDot"),
    calPosNeg=byId("calBtnPosNeg"),
    calEqual=byId("equal"),
    calTxt=byId("cal_txt"),
    btn=[btn0,btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9],
    calTemp;

for(var i = 0; i < btn.length; i++){
    // console.log(i);
    // console.log(btn[i]);
    // console.log(btn[i].value);
    btn[i].onclick=(function(i){
        return function(){
            calTxt.value=calTxt.value+btn[i].value;
        }
    })(i);
};
calPosNeg.onclick=function(){
    calTxt.value="";
};


calBtnAdd.onclick=function(){
    calTxt.value=Number(calTxt.value)+"+";
};
calBtnCut.onclick=function(){
    calTxt.value=Number(calTxt.value)+"-";
};
calBtnMul.onclick=function(){
    calTxt.value=Number(calTxt.value)+"*";
};
calBtnDiv.onclick=function(){
    calTxt.value=Number(calTxt.value)+"/";
};
calEqual.onclick=function(){
    calTemp=calTxt.value+
    calTxt.value=Number(calTxt.value);
};