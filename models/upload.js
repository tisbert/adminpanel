var multer = require("multer");

var DIR = './uploads/';


function Upload() {

    this.create = function(upload, res) {
        console.log(upload);
    };

}

module.exports = new Upload();
