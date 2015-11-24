/**
 * Copyright (C) 2014 All rights reserved.
 *
 * @file manage.js
 * @author Pride Leong<foliage@iooy.cc>
 */

define(function (require, exports, module) {
    var util = require('util');
    var $ = util.$;

    require('reveal-head');
    var Reveal = require('reveal');
    /* var hljs = require('highlight'); */
    window.marked = require('reveal-marked');

    var oo = require('eoo');
    var overrides = {};

    overrides.constructor = function () {
        this.init();
        this.initReveal();
    };

    overrides.init = function () {
        var tpl = require('text!manage/tpl/container.html');
        $('body').innerHTML = tpl;
    };

    overrides.initReveal = initReveal;

    function initReveal() {
        // Full list of configuration options available here:
        // https://github.com/hakimel/reveal.js#configuration
        Reveal.initialize({
            controls: true,
            progress: true,
            history: true,
            center: true,

            // available themes are in /css/theme
            theme: Reveal.getQueryHash().theme,
            // default/cube/page/concave/zoom/linear/fade/none
            transition: Reveal.getQueryHash().transition || 'default',

            // Parallax scrolling
            // parallaxBackgroundImage: 'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg',
            // parallaxBackgroundSize: '2100px 900px',

            // Optional libraries used to extend on reveal.js
            dependencies: [
                {
                    src: 'lib/reveal.js/lib/js/classList.js',
                    condition: function () {
                        return !document.body.classList;
                    }
                },
                {
                    src: 'lib/reveal.js/plugin/markdown/marked.js',
                    condition: function () {
                        return !!document.querySelector('[data-markdown]');
                    }
                },
                {
                    src: 'lib/reveal.js/plugin/markdown/markdown.js',
                    condition: function () {
                        return !!document.querySelector('[data-markdown]');
                    }
                },
                {
                    src: 'lib/reveal.js/plugin/highlight/highlight.js',
                    async: true,
                    callback: function () {
                        hljs.initHighlighting();
                    }
                },
                {
                    src: 'lib/reveal.js/plugin/zoom-js/zoom.js',
                    async: true,
                    condition: function () {
                        return !!document.body.classList;
                    }
                },
                {
                    src: 'lib/reveal.js/plugin/notes/notes.js',
                    async: true, condition: function () {
                        return !!document.body.classList;
                    }
                }
            ]
        });
    }

    module.exports = oo.create(overrides);
});
