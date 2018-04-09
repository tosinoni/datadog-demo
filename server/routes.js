var metrics = require('datadog-metrics');
metrics.init({ host: 'localhost:5000', prefix: 'kapi.', apiKey: 'ef41dafd02e827464f3954abf8c700bf' });

exports.incrementPageViewsCount = function(req, res) {
    metrics.increment('memory.pageViews');
    console.log("metrics pageViews incremented");
    res.sendStatus(200);
};

exports.incrementLoginCount = function(req, res) {
    // kafka.brokers is a Brokers instance, list() returns a list of Broker instances
    metrics.increment('memory.loginCount');
    console.log("metrics login incremented");
    res.sendStatus(200);
};