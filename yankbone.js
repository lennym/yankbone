(function (root) {
    var Backbone = root.Backbone,
        _ = root._;
    if (!_ && (typeof require !== 'undefined')) _ = require('underscore');
    _.each(['View', 'Model', 'Collection', 'Router'], function (c) {
        var _extend = Backbone[c].extend;
        Backbone[c].extend = function (props) {
            if (props.hasOwnProperty('initialise')) {
                throw new Error('Terribly sorry old chap, you seem to have misnamed your initialise method.');
            }
            return _extend.apply(this, arguments);
        }
    });
})(this);