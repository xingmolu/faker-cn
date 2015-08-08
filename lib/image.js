
var Faker = require('../index');

var image = {
    imageUrl: function (width, height) {

	    var width = width || 640;
    	var height = height || 480;
    	var url = "http://dummyimage.com/" + width + 'x' + height;

    	return url;

    }
};

module.exports = image;
