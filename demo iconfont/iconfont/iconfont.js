(function(window) {
    var svgSprite = "<svg>" + "" + '<symbol id="icon-gouwuche" viewBox="0 0 1024 1024">' + "" + '<path d="M246.4 912a2.1 2.1 0 1 0 134.4 0 2.1 2.1 0 1 0-134.4 0Z"  ></path>' + "" + '<path d="M716.8 912a2.1 2.1 0 1 0 134.4 0 2.1 2.1 0 1 0-134.4 0Z"  ></path>' + "" + '<path d="M905.6 764.8l-537.6 0c-28.8 0-57.6-25.6-64-54.4l-96-566.4c-9.6-54.4-60.8-96-115.2-96l-22.4 0c-12.8 0-25.6 12.8-25.6 25.6 0 12.8 12.8 25.6 25.6 25.6l22.4 0c28.8 0 57.6 25.6 64 54.4l96 566.4c9.6 54.4 60.8 96 115.2 96l537.6 0c12.8 0 25.6-12.8 25.6-25.6C931.2 777.6 921.6 764.8 905.6 764.8z"  ></path>' + "" + '<path d="M880 179.2l-572.8 0c-12.8 0-25.6 12.8-25.6 25.6 0 12.8 12.8 25.6 25.6 25.6l572.8 0c25.6 0 38.4 16 32 41.6l-70.4 281.6c-6.4 32-41.6 57.6-73.6 60.8l-396.8 28.8c-12.8 0-25.6 12.8-22.4 28.8 0 12.8 12.8 25.6 28.8 22.4l396.8-28.8c54.4-3.2 105.6-48 118.4-99.2l70.4-281.6C976 230.4 937.6 179.2 880 179.2z"  ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-shouhuodizhi" viewBox="0 0 1024 1024">' + "" + '<path d="M518.4 48c-214.4 0-390.4 176-390.4 393.6 0 48 16 99.2 41.6 156.8 28.8 57.6 70.4 118.4 118.4 182.4 35.2 41.6 73.6 83.2 108.8 121.6 12.8 12.8 25.6 25.6 35.2 35.2 6.4 6.4 12.8 9.6 12.8 12.8l0 0c38.4 38.4 102.4 38.4 137.6 0 3.2-3.2 6.4-6.4 12.8-12.8 9.6-9.6 22.4-22.4 35.2-35.2 38.4-38.4 73.6-80 108.8-121.6 51.2-60.8 92.8-124.8 118.4-182.4 28.8-57.6 41.6-108.8 41.6-156.8C908.8 224 732.8 48 518.4 48zM822.4 576c-25.6 54.4-64 112-115.2 172.8-35.2 41.6-70.4 83.2-105.6 118.4-12.8 12.8-25.6 25.6-35.2 35.2-6.4 6.4-9.6 9.6-12.8 12.8-19.2 19.2-51.2 19.2-70.4 0l0 0c-3.2-3.2-6.4-6.4-12.8-12.8-9.6-9.6-22.4-22.4-35.2-35.2-35.2-38.4-73.6-76.8-105.6-118.4-48-60.8-86.4-118.4-115.2-172.8-25.6-51.2-38.4-96-38.4-134.4 0-192 153.6-345.6 342.4-345.6 188.8 0 342.4 153.6 342.4 345.6C860.8 480 848 524.8 822.4 576z"  ></path>' + "" + '<path d="M518.4 262.4c-96 0-169.6 76.8-169.6 172.8 0 96 76.8 172.8 169.6 172.8s169.6-76.8 169.6-172.8C688 339.2 614.4 262.4 518.4 262.4zM518.4 556.8c-67.2 0-121.6-54.4-121.6-124.8s54.4-124.8 121.6-124.8c67.2 0 121.6 54.4 121.6 124.8S585.6 556.8 518.4 556.8z"  ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-xiangxiajiantou" viewBox="0 0 1024 1024">' + "" + '<path d="M966.4 323.2c-9.6-9.6-25.6-9.6-35.2 0l-416 416-425.6-416c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l441.6 432c9.6 9.6 25.6 9.6 35.2 0l435.2-432C976 345.6 976 332.8 966.4 323.2z"  ></path>' + "" + "</symbol>" + "" + '<symbol id="icon-zhaoxiangji" viewBox="0 0 1024 1024">' + "" + '<path d="M512 288c-124.8 0-224 99.2-224 224s99.2 224 224 224 224-99.2 224-224S636.8 288 512 288zM512 688c-96 0-176-80-176-176s80-176 176-176 176 80 176 176S608 688 512 688z"  ></path>' + "" + '<path d="M768 371.2a1.6 1.6 0 1 0 102.4 0 1.6 1.6 0 1 0-102.4 0Z"  ></path>' + "" + '<path d="M864 224l-96 0-22.4-67.2c-6.4-16-25.6-28.8-41.6-28.8l-384 0c-19.2 0-35.2 12.8-41.6 28.8l-22.4 67.2-96 0c-54.4 0-96 41.6-96 96l0 448c0 54.4 44.8 96 96 96l704 0c54.4 0 96-41.6 96-96l0-448C960 265.6 918.4 224 864 224zM912 768c0 25.6-22.4 48-48 48l-704 0c-25.6 0-48-22.4-48-48l0-448c0-25.6 22.4-48 48-48l96 0 35.2 0 9.6-32 22.4-64 377.6 0 22.4 64 9.6 32 35.2 0 96 0c25.6 0 48 22.4 48 48L912 768z"  ></path>' + "" + "</symbol>" + "" + "</svg>";
    var script = function() {
        var scripts = document.getElementsByTagName("script");
        return scripts[scripts.length - 1] }();
    var shouldInjectCss = script.getAttribute("data-injectcss");
    var ready = function(fn) {
        if (document.addEventListener) {
            if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) { setTimeout(fn, 0) } else {
                var loadFn = function() { document.removeEventListener("DOMContentLoaded", loadFn, false);
                    fn() };
                document.addEventListener("DOMContentLoaded", loadFn, false) } } else if (document.attachEvent) { IEContentLoaded(window, fn) }

        function IEContentLoaded(w, fn) {
            var d = w.document,
                done = false,
                init = function() {
                    if (!done) { done = true;
                        fn() } };
            var polling = function() {
                try { d.documentElement.doScroll("left") } catch (e) { setTimeout(polling, 50);
                    return }
                init() };
            polling();
            d.onreadystatechange = function() {
                if (d.readyState == "complete") { d.onreadystatechange = null;
                    init() } } } };
    var before = function(el, target) { target.parentNode.insertBefore(el, target) };
    var prepend = function(el, target) {
        if (target.firstChild) { before(el, target.firstChild) } else { target.appendChild(el) } };

    function appendSvg() {
        var div, svg;
        div = document.createElement("div");
        div.innerHTML = svgSprite;
        svgSprite = null;
        svg = div.getElementsByTagName("svg")[0];
        if (svg) { svg.setAttribute("aria-hidden", "true");
            svg.style.position = "absolute";
            svg.style.width = 0;
            svg.style.height = 0;
            svg.style.overflow = "hidden";
            prepend(svg, document.body) } }
    if (shouldInjectCss && !window.__iconfont__svg__cssinject__) { window.__iconfont__svg__cssinject__ = true;
        try { document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>") } catch (e) { console && console.log(e) } }
    ready(appendSvg) })(window)
