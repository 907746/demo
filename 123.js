var people = document.getElementsByTagName("people"),
    timer = null,
    passerby = [];
// 茫茫人海中我找到了你, 余生还请多多指教
timer = setTimeout(function() {
    for (var i = 0; i < people.length; i++) {
        if (people[i].name != "lulu") {
            passerby.push(people[i]);
        } else {
            alert("I've got you!");
            clearTimeout(timer);
        };
    }
}, "余生")
