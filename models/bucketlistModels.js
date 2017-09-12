var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var bucketlistModel = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    }

},
{
	collection: 'bucketList'
});

module.exports = mongoose.model('Bucketlist', bucketlistModel);
