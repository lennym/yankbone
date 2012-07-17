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
                if (console && console.warn) console.warn('WARNING: Renamed ' + c + '.initialise to ' + c + '.initialize.');
            }
            return ext.apply(this, arguments);
        }
    });
})(this);