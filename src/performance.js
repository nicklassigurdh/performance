define([], function() {

    var performance = function () {
            //create logger div
            var loggerDiv = document.createElement("div");
            loggerDiv.id = 'perfLoggerDiv';
            loggerDiv.style.display = 'none'
            document.body.insertBefore(loggerDiv);
        },
        counter = 0,
        p = performance.prototype,
        createElement,
        perf;

    createElement = function (nodeText) {
        counter++;
        var loggDiv = document.createElement("div");
        loggDiv.appendChild(document.createTextNode(nodeText));
        loggDiv.id = 'logg-' + counter;

        return loggDiv;
    }

    p.init = function () {


        //log timing data onLoaded.
        var redirect = window.performance.timing.redirectEnd - window.performance.timing.redirectStart,
            appCache = window.performance.timing.domainLookupStart - window.performance.timing.fetchStart,
            DNS = window.performance.timing.domainLookupEnd - window.performance.timing.domainLookupStart,
            TCP = window.performance.timing.connectEnd - window.performance.timing.connectStart,
            request = window.performance.timing.responseStart - window.performance.timing.requestStart,
            responce = window.performance.timing.responseEnd - window.performance.timing.responseStart,
            processing = window.performance.timing.domComplete - window.performance.timing.domLoading,
            onload = window.performance.timing.loadEventEnd - window.performance.timing.loadEventStart;
           // oldOnload = window.onload;


             counter++;
             var loggDiv = createElement('Page loaded...');
             //performance data and add it as attributes.
             loggDiv.setAttribute("TimeStamp", Date.now());

             loggDiv.setAttribute("redirect", redirect);
             loggDiv.setAttribute("appCache", appCache);
             loggDiv.setAttribute("DNS", DNS);
             loggDiv.setAttribute("TCP", TCP);
             loggDiv.setAttribute("request", request);
             loggDiv.setAttribute("responce", responce);
             loggDiv.setAttribute("processing", processing);
             loggDiv.setAttribute("onload", onload);

             document.getElementById("perfLoggerDiv").insertBefore(loggDiv);


        //bind the events.
        //do we need global events?
    }

    p.log = function (message) {

        var loggDiv = createElement(message),
            jsHeapSizeLimit,
            usedJSHeapSize,
            totalJSHeapSize;

        //performance data and add it as attributes.
        loggDiv.setAttribute("TimeStamp", Date.now());

        //Do we have performance.memory?
        if (window.performance.memory) {
            jsHeapSizeLimit = window.performance.memory.jsHeapSizeLimit;
            usedJSHeapSize = window.performance.memory.usedJSHeapSize;
            totalJSHeapSize = window.performance.memory.totalJSHeapSize;

            loggDiv.setAttribute("jsHeapSizeLimit", jsHeapSizeLimit);
            loggDiv.setAttribute("usedJSHeapSize", usedJSHeapSize);
            loggDiv.setAttribute("totalJSHeapSize", totalJSHeapSize);
        }

        document.getElementById("perfLoggerDiv").insertBefore(loggDiv);
    }

    //Singelton
    perf = new performance();
    perf.init();

    return perf;
});


