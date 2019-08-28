var Tracer = require('zipkin').Tracer;
var ConsoleRecorder = require('zipkin').ConsoleRecorder;
var CLSContext = require('zipkin-context-cls');

const handler = (event, context, callback) => {
    
    const tracer = new Tracer({
        ctxImpl: new CLSContext('zipkin'),
        traceId128Bit: true,
        recorder: new ConsoleRecorder(function(){}),
        localServiceName: 'service-1'
    });
    
    callback(null, tracer.id.traceId);
}

module.exports = {
    handler
}

handler(null, null, (err, data) => {
    if (err) {
        console.error(err)
    } else {
        console.log(data)
    }
})
