require(["performance"], function(performance) {

    performance.log('hepp');

    var next = function () {
        performance.log("hopp");
    }

    setTimeout(next, 1000)


});