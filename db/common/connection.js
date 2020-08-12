const mongoose = require('mongoose');
const dbconfig = require('./config');

// mongoose.connect(dbconfig.dburl);


mongoose.connect(dbconfig.dburl, { useNewUrlParser: true }, (err) => {
    if (err)
        console.error(err);
    else
        console.log("Connected to the mongodb");
});

module.exports= mongoose;