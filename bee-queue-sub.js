var Queue = require("bee-queue");
var example = new Queue("example");

example.process(function (job, done) {
    console.log("Job received: " + job.id + "x: " + job.data.x);
    return done(null, job.data.x);
});

example.on('succeeded', function (job, result) {
    console.log('result for job ' + job.id + ': ' + result);
});
