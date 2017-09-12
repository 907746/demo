function fade(ele){
    if (ele.style.display==="none") {
        ele.style.display="block";
        ele.style.opacity=0;
        var nowa=0,
            timer=setInterval(function(){
            var step=(1-nowa)/10;
            step=step*10<1?
            nowa+=step;
            ele.style.opacity=nowa+step;
        if (nowa===1) {
            clearInterval(timer);
        };
        }, 10)

    };
}