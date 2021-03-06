/**
 * Copyright (C) 2015 All rights reserved.
 *
 * @file manage.js
 * @author Pride Leong<lykling.lyk@gmail.com>
 */

define(function (require, exports, module) {
    var oo = require('eoo');
    var util = require('util');
    $ = util.$;
    var Presentation = require('Presentation');
    var overrides = {};

    overrides.init = function () {
        var tpl = require('text!manage/tpl/container.html');
        $('body').innerHTML = tpl;
    };

    var Manage = oo.create(Presentation, overrides);
    module.exports = new Manage();
});
