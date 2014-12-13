/**
 * Copyright (C) 2014 All rights reserved.
 * 
 * @file manage.js
 * @author Pride Leong<foliage@iooy.cc>
 */

define(function (require, exports, module) {
    window.$ = function (selector) {
        return document.querySelector.apply(document, arguments);
    };
    window.$$ = function (selector) {
        return document.querySelectorAll.apply(document, arguments);
    };
    function init() {
        // Full list of configuration options available here:
        // https://github.com/hakimel/reveal.js#configuration
        Reveal.initialize({
            controls: true,
            progress: true,
            history: true,
            center: true,

            theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
            transition: Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/zoom/linear/fade/none

            // Parallax scrolling
            // parallaxBackgroundImage: 'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg',
            // parallaxBackgroundSize: '2100px 900px',

            // Optional libraries used to extend on reveal.js
            dependencies: [
                { src: 'lib/reveal.js/lib/js/classList.js', condition: function() { return !document.body.classList; } },
                { src: 'lib/reveal.js/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
                { src: 'lib/reveal.js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
                { src: 'lib/reveal.js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
                { src: 'lib/reveal.js/plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
                { src: 'lib/reveal.js/plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }
            ]
        });
    }
    var tpl = require('text!manage/tpl/container.html');

    $('body').innerHTML = tpl;
    window.marked = require('reveal-marked');
    require('reveal-head');
    require('reveal');
    setTimeout(function () {
        init();
    }, 0);
    return {};
});
