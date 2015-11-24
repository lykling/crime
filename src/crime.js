/**
 * Copyright (C) 2015 All rights reserved.
 *
 * @file crime.js
 * @author Pride Leong<lykling.lyk@gmail.com>
 */

require.config({
    baseUrl: 'src',
    paths: {
        'text': '../lib/requirejs-text/text',
        'underscore': '../lib/underscore/underscore',
        'reveal': '../lib/reveal.js/js/reveal',
        'reveal-head': '../lib/reveal.js/lib/js/head.min',
        'reveal-marked': '../lib/reveal.js/plugin/markdown/marked',
        'reveal-highlight': '../lib/reveal.js/plugin/highlight/highlight',
        'marked': '../lib/marked/lib/marked',
        'highlight': '../lib/highlightjs/highlight.pack'
    },
    shim: {
        reveal: {
            exports: 'Reveal'
        }
    },
    packages: [
        {
            name: 'eoo',
            location: '../lib/eoo',
            main: 'main'
        }
    ]
});

require(['fc-component-ria'], function (presentation) {
    window.console.log(presentation);
});
