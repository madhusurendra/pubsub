const Queue = require('bee-queue');
const queue = new Queue('example');

const job = queue.createJob({x: 2, y: 3, operations:"subtraction"});
job = queue.createJob({x: 2, y: 3, operations:"addition"});
job.save();

job.on('succeeded', (result) => {
    console.log(`Received result for job ${job.id}: ${result}`);
});

// Process jobs from as many servers or processes as you like
queue.process(function (job, done) {
    var res;
    console.log(`Processing job ${job.id}`);
    switch(job.data.operations){
        case "addition":
            res =  job.data.x + job.data.y;
        break;
        case "subtraction":
            res = job.data.y + job.data.x;
        break;
    }

    return done(null, res);
});