/**
 * Copyright (C) 2015 All rights reserved.
 *
 * @file git
 * @author Pride Leong<lykling.lyk@gmail.com>
 */

define(function (require, exports, module) {
    var oo = require('eoo');
    var util = require('util');
    $ = util.$;
    var Presentation = require('Presentation');
    var overrides = {};

    overrides.init = function () {
        var tpl = require('text!git/tpl/container.html');
        $('body').innerHTML = tpl;
    };

    var Git = oo.create(Presentation, overrides);
    module.exports = new Git();
});
