define([], function() {

    var performance = function () {
            //create logger div
            var loggerDiv = document.createElement("div");
            loggerDiv.id = 'perfLoggerDiv';
            loggerDiv.style.display = 'none'
            document.body.insertBefore(loggerDiv);
        },
        counter = 0,
        p = performance.prototype;

    p.init = function () {
        //bind the events.
        //do we need global events?
    }

    p.log = function (message) {
        counter++;
        var loggDiv = document.createElement("div");
        loggDiv.appendChild(document.createTextNode(message));
        loggDiv.id = 'logg-' + counter;

        //performance data and add it as attributes.
        loggDiv.setAttribute("now", Date.now());


        document.getElementById("perfLoggerDiv").insertBefore(loggDiv);
    }

    //Singelton
    var perf = new performance();
    perf.init();

    return perf;
});


