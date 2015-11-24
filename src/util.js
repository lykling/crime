/**
 * Copyright (C) 2015 All rights reserved.
 *
 * @file util.js
 * @author Pride Leong<lykling.lyk@gmail.com>
 */

define(function (require, exports, module) {
    window.$ = exports.$ = function (selector, context) {
        context = context || document;
        return context.querySelector.apply(document, arguments);
    };

    window.$$ = exports.$$ = function (selector, context) {
        context = context || document;
        return context.querySelectorAll.apply(document, arguments);
    };
});
