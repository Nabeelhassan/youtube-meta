const numberRegexp = /^[0-9]+$/;

class ZipCodeValidator {
    isAcceptable(s) {
        return s.length === 5 && numberRegexp.test(s);
    }
}


module.exports = {
    addTogether: function (x, y) {
        return x + y
    },
    ZipCodeValidator
};


require('make-runnable');