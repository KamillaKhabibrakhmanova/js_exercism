function dna(str) {
    var valid = 'AGTC';

    if (arguments.length > 0) {
        var arg_array = arguments[0].split("");
        for (var i = 0; i < arg_array.length; i++) {
            if (valid.search(arg_array[i]) < 0 ) {
                throw ('Invalid nuleotide: ' + arg_array[0]);
            }
        }

    }


    var object = {

        count: function(letter) {
            count = 0;

            if (str) {
                str = str.toString();
                str = str.split("");
                for (var i = 0; i < str.length; i++) {

                    if (str[i] === letter) {
                        count++;
                    }
                }
            }
            return count;
        },

        histogram: function() {
            hist = {
                A: 0,
                T: 0,
                C: 0,
                G: 0
            };
            if (str) {
                str = str.toString();
                str = str.split("");
                for (var i = 0; i < str.length; i++) {
                    for (var key in hist) {
                        if (str[i] === key) {
                            hist[key] += 1;
                        }
                    }
                }
            }
            return hist;
        },
    }
    return object;
};