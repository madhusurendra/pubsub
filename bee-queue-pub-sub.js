var Queue = require("bee-queue");
var example = new Queue("example");

for (var i = 0; i < 2; i++) {
    var job = example.createJob({
        x: i + 1,
        y: 3
    }).save(function(err,job){
        console.log("job created with Id : " + job.id);
    });
}