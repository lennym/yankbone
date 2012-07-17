(function (root) {
    var Backbone = root.Backbone,
        _ = root._;
    if (!_ && (typeof require !== 'undefined')) _ = require('underscore');
    _.each(['View', 'Model', 'Collection', 'Router'], function (c) {
        var ext = Backbone[c].extend;
        Backbone[c].extend = function (props, classProps) {
            if (props.hasOwnProperty('initialise')) {
                props.initialize = props.initialise;
                delete props.initialise;
                if (console && console.warn) console.warn('I don\'t mean to interrupt old chap, but I just fixed that pesky initialise/initialize thing for you back there. Pip pip!');
            }
            return ext.call(this, props, classProps);
        }
    });
})(this);