//  reference to express
var express = require('express'),
    mongoose = require('mongoose');

var app = mongoose.connect('mongodb://localhost/myBucketList');

var Bucketlist = require('./models/bucketlistModels');
var app = express();

var port = process.env.PORT || 3000;

var bucketlistRouter = express.Router();

bucketlistRouter.route('/bucketlists')
    .get(function(req, res){
        Bucketlist.find(function(err, bucketlists){
            if (err)
                console.log(err);
            else
                res.send(bucketlists);
        });
    });

app.use('/api', bucketlistRouter);

app.get('/', function (req, res){
    res.send('welcome here')
});

app.listen(port, function(){
    console.log('we are listenning to port ' + port)
});