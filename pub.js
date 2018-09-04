// Imports the Google Cloud client library
const PubSub = require(`@google-cloud/pubsub`);

// Creates a client
const pubsub = new PubSub();

const topicName = 'poc1';
const data = JSON.stringify({ foo: 'kishore' });
const data1 = JSON.stringify({ foo: 'Sharath' });

let dataBuffer = Buffer.from(data);
pubsub
    .topic(topicName)
    .publisher()
    .publish(dataBuffer).then(messageId => {
        console.log(`Message ${messageId} published.`);
    })
    .catch(err => {
        console.error('ERROR:', err);
    });


dataBuffer = Buffer.from(data1);
pubsub
    .topic(topicName)
    .publisher()
    .publish(dataBuffer).then(messageId => {
        console.log(`Message ${messageId} published.`);
    })
    .catch(err => {
        console.error('ERROR:', err);
    });


