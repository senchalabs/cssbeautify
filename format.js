/*global cssbeautify:true, document:true, window:true */

var formatId;

function format() {
    'use strict';
    if (formatId) {
        window.clearTimeout(formatId);
    }
    formatId = window.setTimeout(function () {
        var options, raw, beautified;

        options = {
            indent: '    '
        };

        if (document.getElementById('tab').checked) {
            options.indent = '\t';
        }

        if (document.getElementById('openbrace-separate-line').checked) {
            options.openbrace = 'separate-line';
        }

        raw = document.getElementById('raw').value;
        beautified = cssbeautify(raw, options);
        document.getElementById('beautified').value = beautified;
        formatId = undefined;
    }, 42);
}

window.onload = function () {
    'use strict';
    format();
};

