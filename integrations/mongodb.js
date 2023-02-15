const mongoose =require('mongoose');

// adminchaty
// 0fotmniHVZW5rDp4
// 200.93.35.46/32






module.exports = class DB {

    static connect(){

        mongoose.Promise =global.Promise;
        return mongoose.connect(config.MONGODB_URI,{
            promiseLibrary:global.Promise,
            useNewUrlParser:true
        });
    }

}