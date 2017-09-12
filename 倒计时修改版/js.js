var lis = document.getElementById("list").getElementsByTagName("li"),
    timer = setInterval(function() {
        var futureTime = new Date("2017/10/01"),
            nowTime = new Date().getTime(),
            djs = futureTime - nowTime,
            day = parseInt(djs / 1000 / 3600 / 24),
            hour = parseInt(djs / 1000 / 3600 % 24),
            minute = parseInt(djs / 1000 / 60 % 60),
            second = parseInt(djs / 1000 % 60),
            ms = djs % 1000,

            day = day < 10 ? "0" + day : day;
        hour = hour < 10 ? "0" + hour : hour;
        minute = minute < 10 ? "0" + minute : minute;
        second = second < 10 ? "0" + second : second;

        if (ms < 10) {
            ms = "00" + ms;
        } else if (ms < 100) {
            ms = "0" + ms;
        };

        lis[0].innerHTML = parseInt(day / 10);
        lis[1].innerHTML = parseInt(day % 10);
        lis[3].innerHTML = parseInt(hour / 10);
        lis[4].innerHTML = parseInt(hour % 10);
        lis[6].innerHTML = parseInt(minute / 10);
        lis[7].innerHTML = parseInt(minute % 10);
        lis[9].innerHTML = parseInt(second / 10);
        lis[10].innerHTML = parseInt(second % 10);
        lis[12].innerHTML = parseInt(ms / 100);
        lis[13].innerHTML = parseInt(ms / 10) - parseInt(ms / 100) * 10;

    }, 10)
